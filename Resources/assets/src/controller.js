'use strict';

import { Controller } from 'stimulus';
import Sortable from 'sortablejs';

export default class extends Controller {

    static targets = ['collectionElement', 'up', 'down', 'add']

    static values = {
        min: Number,
        max: Number,
        allowDragAndDrop: Boolean,
        displaySortButtons: Boolean
    }

    prototype;
    namePrefix;

    connect() {
        this.element[this.identifier] = this
        this.prototype = this.element.dataset.prototype;
        this.prototypeName = this.element.dataset.prototypeName;
        this.namePrefix = this.element.dataset.namePrefix;

        if (this.hasMinValue && this.minValue) {
            for (let i = this.length; i < this.minValue; i++) {
                this.add();
            }
        }

        if (this.allowDragAndDropValue) {
            Sortable.create(this.element, {
                draggable: '[data-arkounay--ux-collection--collection-target="collectionElement"]',
                onSort: () => {
                    this.#refreshNameAndButtons();
                }
            });
        }

        this.#refreshNameAndButtons();
    }

    moveUp(e) {
        e.preventDefault();
        const element = this.#getCollectionItemFromTarget(e.target);

        const index = this.collectionElementTargets.indexOf(element);
        if (index === 0) {
            return;
        }

        const newIndex = index - 1;

        // move the dom element up
        this.collectionElementTargets[newIndex].before(element);
        this.#refreshNameAndButtons();
    }

    moveDown(e) {
        e.preventDefault();
        const element = this.#getCollectionItemFromTarget(e.target);

        const index = this.collectionElementTargets.indexOf(element);
        if (index === this.length - 1) {
            return;
        }

        const newIndex = index + 1;

        // move the dom element down
        this.collectionElementTargets[newIndex].after(element);
        this.#refreshNameAndButtons();
    }

    remove(e) {
        e.preventDefault();
        const element = this.#getCollectionItemFromTarget(e.target);
        element.remove();

        // for (let i = 0; i < this.length; i++) {
        //     const namePrefixRegex = this.namePrefix.replaceAll('[', '\\[').replace(']', '\\]');
        //     this.collectionElementTargets[i].innerHTML = this.collectionElementTargets[i].innerHTML.replace(new RegExp(`${namePrefixRegex}\\[\\d+\\]`, 'g'), `${this.namePrefix}[${i}]`);
        // }

        this.#refreshNameAndButtons();
    }

    add(e, position) {
        e?.preventDefault();
        let prototype = this.prototype.replaceAll(this.prototypeName, this.length);
        if (this.length === 0) {
            this.element.insertAdjacentHTML('afterbegin', prototype);
            position = -1;
        } else {
            if (position === undefined) {
                position = this.length - 1;
            }
            this.collectionElementTargets[position].insertAdjacentHTML('afterend', prototype);
        }

        this.#refreshNameAndButtons();

        return this.collectionElementTargets[position + 1];
    }

    #getCollectionItemFromTarget(target) {
        return target.closest('[data-arkounay--ux-collection--collection-target="collectionElement"]');
    }

    #refreshNameAndButtons() {
        // refresh form names
        for (let i = 0; i < this.length; i++) {
            for (const input of this.collectionElementTargets[i].querySelectorAll([`[name^="${this.namePrefix}["]`])) {
                input.name = input.name.replaceAll(new RegExp(`${this.namePrefix}[\\d+]`.replaceAll('[', '\\[').replaceAll(']', '\\]'), 'g'), `${this.namePrefix}[${i}]`);
            }
        }

        // refresh button positions
        if (this.upTargets.length > 0) {
            if (this.displaySortButtonsValue) {
                for (let i = 0; i < this.length; i++) {
                    this.upTargets[i].classList.remove('d-none');
                    this.downTargets[i].classList.remove('d-none');
                }
                this.upTargets[0].classList.add('d-none');
                this.downTargets[this.downTargets.length - 1].classList.add('d-none');
            } else {
                for (let i = 0; i < this.length; i++) {
                    this.upTargets[i].classList.add('d-none');
                    this.downTargets[i].classList.add('d-none');
                }
            }
        }

        // hide add button if there is a max value
        if (this.hasMaxValue && this.hasAddTarget) {
            if (this.length >= this.maxValue) {
                this.addTarget.classList.add('d-none');
            } else {
                this.addTarget.classList.remove('d-none');
            }
        }
    }

    get length() {
        return this.collectionElementTargets.length;
    }

}