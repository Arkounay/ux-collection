import { Controller } from '@hotwired/stimulus';

export default class extends Controller {

    static targets = ['collection', 'collectionElement', 'tabs', 'tabButton']

    static values = {
        emptyTabName: String
    }

    connect() {
        console.log('Hllo');
        this.collectionTarget.addEventListener('ux-collection:change', this._onChange.bind(this));
        this.collectionTarget.addEventListener('ux-collection:add', this._onAdd.bind(this));
        this.#generateTabs();
        this.#setActive(0);
        for (const collectionElement of this.collectionElementTargets) {
            this.#addCollectionElementListeners(collectionElement);
        }
    }

    disconnect() {
        this.collectionTarget.removeEventListener('ux-collection:change', this._onChange.bind(this));
        this.collectionTarget.removeEventListener('ux-collection:add', this._onAdd.bind(this));
    }

    _onChange() {
        this.#generateTabs();
        const activeIndex = this.collectionElementTargets.findIndex(element => element.classList.contains('active'));
        if (this.collectionElementTargets.length > 0 && activeIndex === -1) {
            this.#setActive(0);
        } else {
            // find current active
            this.#setActive(activeIndex);
        }
        this.collectionElementTargets.some((element, index) => {
            if (element.querySelector('.form-error-message')) {
                this.#setActive(index);
                return true;
            }
        });
    }

    _onAdd(event) {
        this.#generateTabs();
        this.#setActive(this.collectionElementTargets.length - 1);
        this.#addCollectionElementListeners(event.detail);
        document.querySelectorAll('.tooltip').forEach(e => e.remove());
    }

    #addCollectionElementListeners(collectionElement) {
        // change tab name on keyup
        this.#getInputNameFromCollectionElement(collectionElement).addEventListener('keyup', (e) => {
            let name = e.target.value;
            if (!name) {
                name = this.emptyTabNameValue;
            }
            this.tabButtonTargets[this.collectionElementTargets.indexOf(collectionElement)].querySelector('.tab-name').textContent = name;
        });

        // focus tab when html5 invalid
        for (let el of collectionElement.querySelectorAll('input,textarea,select')) {
            el.addEventListener('invalid', () => {
                const index = this.collectionElementTargets.indexOf(collectionElement);
                this.tabButtonTargets[index].click();
            });
        }
    }

    remove(e) {
        // get index
        const index = this.tabButtonTargets.indexOf(e.target.closest('.nav-link'));
        this.collectionElementTargets[index].querySelector('[data-arkounay--ux-collection--collection-target="delete"]').click();
    }

    add(e) {
        e.preventDefault();
        this.collectionTarget.querySelector('[data-arkounay--ux-collection--collection-target="add"]').click();
    }

    /**
     * @param collectionElement
     * @returns HTMLInputElement The first input element in a collectionElement will return its name
     */
    #getInputNameFromCollectionElement(collectionElement) {
        return collectionElement.querySelector('input');
    }

    #generateTabs() {
        let tabs = '';
        this.collectionElementTargets.forEach((element, index) => {
            tabs += this.#generateTab(element, index);
        });

        if (this.collectionTarget.dataset.allowAdd == 1) {
            const addButton = this.collectionTarget.querySelector('[data-arkounay--ux-collection--collection-target="add"]')
            const addButtonIcon = addButton.querySelector('svg').outerHTML;
            const isEmpty = (this.collectionElementTargets.length === 0);
            let addButtonText = isEmpty ? addButton.textContent : '';
            let tooltip = isEmpty ? '' : `data-controller="tooltip" data-bs-placement="right" title="${addButton.textContent}"`;
            tabs += `<li class="nav-item nav-action-add"><a ${tooltip} href="#" class="nav-link" data-action="arkounay--ux-collection--tabbed-collection#add" type="button" role="tab">${addButtonIcon} ${addButtonText}</a></li>`
        }

        this.tabsTarget.innerHTML = tabs;

        this.tabsTarget.classList.toggle('nav-tabs-empty', this.tabButtonTargets.length === 0)
    }

    #generateTab(target, i) {
        const tiedCollectionElement = this.collectionElementTargets[i];
        let name = this.#getInputNameFromCollectionElement(tiedCollectionElement).value;
        if (!name) {
            name = this.emptyTabNameValue;
        }

        let removeButton = '';
        if (this.collectionTarget.dataset.allowRemove == 1) {
            removeButton = `<button class="ms-3 btn-sm btn-close" data-action="arkounay--ux-collection--tabbed-collection#remove"></button>`;
        }

        return `<li class="nav-item" role="presentation">
            <a href="#" class="nav-link" data-arkounay--ux-collection--tabbed-collection-target="tabButton" data-bs-toggle="tab" data-bs-target="#tab-${this.collectionTarget.id}-${i}" type="button" role="tab"><span class="tab-name">${name}</span> ${removeButton}</a>
        </li>`;
    }

    #setActive(index) {
        for (let tab of this.tabButtonTargets) {
            tab.classList.remove('active');
        }
        this.tabButtonTargets[index]?.classList.add('active');

        this.collectionElementTargets.forEach((element, index) => {
            element.classList.remove('active');
            element.id = `tab-${this.collectionTarget.id}-${index}`;
        });

        this.collectionElementTargets[index]?.classList.add('active');
    }

}