'use strict';

import {Controller} from '@hotwired/stimulus';
import Sortable from 'sortablejs';

export default class extends Controller {

    static targets = ['collectionElement', 'up', 'down', 'add', 'delete']

    static values = {
        min: Number,
        max: Number,
        allowDragAndDrop: Boolean,
        dragAndDropFilter: String,
        dragAndDropPreventOnFilter: Boolean,
        displaySortButtons: Boolean,
        positionSelector: String
    }

    prototype;

    connect() {
        this.element[this.identifier] = this;
        this.prototype = this.element.dataset.prototype;
        this.prototypeName = this.element.dataset.prototypeName;
        this.autoIncrement = this.length;

        if (this.hasMinValue && this.minValue && this.prototype !== undefined) {
            for (let i = this.length; i < this.minValue; i++) {
                this.add();
            }
        }

        if (this.allowDragAndDropValue) {
            const sortableOptions = {
                draggable: '[data-arkounay--ux-collection--collection-target="collectionElement"]',
                onSort: () => {
                    this.#change();
                },
            };
            if (this.hasDragAndDropPreventOnFilterValue) {
                sortableOptions.preventOnFilter = this.dragAndDropPreventOnFilterValue;
            }
            if (this.hasDragAndDropFilterValue) {
                sortableOptions.filter = this.dragAndDropFilterValue;
            }
            Sortable.create(this.element, sortableOptions);
        }

        this.#change();
        this._dispatchEvent('ux-collection:connect');
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
        this.#change();
        this._dispatchEvent('ux-collection:moveUp', newIndex);
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
        this.#change();
        this._dispatchEvent('ux-collection:moveDown', newIndex);
    }

    remove(e) {
        e.preventDefault();
        const element = this.#getCollectionItemFromTarget(e.target);
        element.remove();

        this.#change();
        this._dispatchEvent('ux-collection:remove', element);
    }

    add(e, position) {
        e?.preventDefault();
        let prototype = this.prototype.replaceAll(this.prototypeName, this.autoIncrement);
        if (this.length === 0) {
            this.element.insertAdjacentHTML('afterbegin', prototype);
            position = -1;
        } else {
            if (position === undefined) {
                position = this.length - 1;
            }
            this.collectionElementTargets[position].insertAdjacentHTML('afterend', prototype);
        }
        const added = this.collectionElementTargets[position + 1];

        this.#change();
        this._dispatchEvent('ux-collection:add', added);
        this.autoIncrement++;

        return added;
    }

    #getCollectionItemFromTarget(target) {
        return target.closest('[data-arkounay--ux-collection--collection-target="collectionElement"]');
    }

    #change() {
        this._dispatchEvent('ux-collection:before-change');

        if (this.hasPositionSelectorValue) {
            for (let i = 0; i < this.length; i++) {
                this.collectionElementTargets[i].querySelector(this.positionSelectorValue).value = i;
            }
        } else {
            const namePrefix = this.element.dataset.namePrefix;
            // refresh all form names if no position fields
            for (let i = 0; i < this.length; i++) {
                const replaceRegExp = new RegExp(`${namePrefix}[\\d+]`.replaceAll('[', '\\[').replaceAll(']', '\\]'), 'g');
                for (const collection of this.collectionElementTargets[i].querySelectorAll([`[data-name-prefix^="${namePrefix}["]`])) {
                    // replace data-name-prefix for nested collection, otherwise sub-collections will have a bad namePrefix
                    collection.dataset.namePrefix = collection.dataset.namePrefix.replaceAll(replaceRegExp, `${namePrefix}[${i}]`);
                }
                for (const collection of this.collectionElementTargets[i].querySelectorAll([`[data-name-prefix^="${namePrefix}["]`])) {
                    // replace data-prototype for nested collection, otherwise sub-collections will have a bad inputs
                    collection.dataset.prototype = collection.dataset.prototype.replaceAll(replaceRegExp, `${namePrefix}[${i}]`);
                }

                for (const input of this.collectionElementTargets[i].querySelectorAll([`[name^="${namePrefix}["]`])) {
                    const newName = input.name.replaceAll(replaceRegExp, `${namePrefix}[${i}]`).replaceAll('_ux_collection_tmp_swap', '');

                    // if a radio's name changes to an already existing name, it might uncheck the one which has the same name.
                    // to prevent this I append _ux_collection_tmp_swap to get a temporary name. It'll get changed back when reassigning names
                    const inputsWithSameName = this.element.querySelectorAll(`[name="${newName}"]`);
                    for (const inputWithSameName of inputsWithSameName) {
                        if (this.#getCollectionItemFromTarget(inputWithSameName) !== this.collectionElementTargets[i]) {
                            inputWithSameName.name += '_ux_collection_tmp_swap';
                        }
                    }

                    input.name = newName;
                }
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

        // hide remove button if there is a min value
        if (this.hasMinValue && this.hasMinValue > 0 && this.deleteTargets.length > 0) {
            const hideDelete = this.length <= this.minValue;
            for (let i = 0; i < this.collectionElementTargets.length; i++) {
                if (hideDelete) {
                    this.collectionElementTargets[i].classList.add('collection-hide-delete')
                } else {
                    this.collectionElementTargets[i].classList.remove('collection-hide-delete')
                }
            }
            for (let i = 0; i < this.deleteTargets.length; i++) {
                if (hideDelete) {
                    this.deleteTargets[i].classList.add('d-none');
                } else {
                    this.deleteTargets[i].classList.remove('d-none');
                }
            }
        }

        this._dispatchEvent('ux-collection:change');
    }

    get length() {
        return this.collectionElementTargets.length;
    }

    _dispatchEvent(name, payload) {
        this.element.dispatchEvent(new CustomEvent(name, { detail: payload }));
    }

}