# Ux Collection

Symfony Collections that works out of the box with Symfony UX

![demo-gif](https://github.com/arkounay/ux-collection/raw/master/doc/demo.gif)

## Installation

```sh
composer require arkounay/ux-collection

# Don't forget to install the JavaScript dependencies as well and compile
yarn install --force
yarn encore dev
```

Also make sure you have at least version 3.0 of [@symfony/stimulus-bridge](https://github.com/symfony/stimulus-bridge)
in your `package.json` file.

If you're using bootstrap 5, you should disable the sandalone CSS import in `assets\controllers.json` :
```json
"@arkounay/ux-collection": {
    "collection": {
        "enabled": true,
        "fetch": "eager",
        "autoimport": {
            "@arkounay/ux-collection/src/style.css": true,
            "@arkounay/ux-collection/src/style-when-not-using-bootstrap-5.css": false
        }
    }
}
```

## Usage

In a form, use UxCollectionType. It works like a classic CollectionType except it has more options :
e.g: 

```php
    use Arkounay\Bundle\UxCollectionBundle\Form\UxCollectionType;
    
    // ...
    
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            // ...
            ->add('myCollection', UxCollectionType::class, [
                'entry_type' => MyEntryType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'allow_drag_and_drop' => true,
                'drag_and_drop_filter' => 'input,textarea,a,button,label',
                'display_sort_buttons' => true,
                'add_label' => 'Add an item',
                'min' => 3,
                'max' => 10,
            ])
        ;
    }
```

## Options

- **allow_add**: will display the Add button (default true)
- **allow_delete**: will display the Delete button (default true)
- **allow_drag_and_drop**: will allow the user to change item positions using drag and drop (default true)
- **drag_and_drop_filter**: when drag and drop is allowed, selectors that do not lead to dragging (default true) 
- **drag_and_drop_prevent_on_filter**: when drag and drop is allowed, calls `event.preventDefault()` when triggered `filter` (default false)
- **display_sort_buttons**: will display arrow up and down buttons to change item positions (default true)
- **add_label**: The add button label (default "Add")
- **add_wrapper_class**: The class used on the add button wrapper (default "mb-3")
- **add_class**: The class used on the add button (default "btn btn-outline-secondary collection-add")
- **position_selector**: If a dom selector is specified and it's targetting an input that is located inside a collection item, it will change this input's value and insert its current position (starting from 0) instead of changing the input's name.
- **min**: The number of minimum items within the collection. When a collection has `allow_add` set to `true` and has less items than `min` upon creation, empty items will be added and the remove button will remain hidden until more items are created. (default 1)
- **max**: The number of maximum items within the collection. When the collection reaches the maximum number of items, the add button will be hidden. (default null - no limit)

### Nested collections

[When using nested collections, remember to change the `prototype_name` of the child's collection. It needs to be different than the parent's collection (that defaults to `__name__`)](https://symfony.com/doc/current/reference/forms/types/collection.html#prototype-name)

### Extend the default behavior

UxCollection allows you to extend its default behavior using a custom Stimulus controller, ie `custom_collection_controller.js`: 
```js
import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    
    connect() {
        this.element.addEventListener('ux-collection:connect', this._onConnect);
        this.element.addEventListener('ux-collection:change', this._onChange);
        this.element.addEventListener('ux-collection:add', this._onAdd);
        this.element.addEventListener('ux-collection:remove', this._onRemove);
    }

    disconnect() {
        this.element.removeEventListener('ux-collection:connect', this._onConnect);
        this.element.removeEventListener('ux-collection:change', this._onChange);
        this.element.removeEventListener('ux-collection:add', this._onAdd);
        this.element.removeEventListener('ux-collection:remove', this._onRemove);
    }

    _onConnect() {
        console.log('The custom collection was just created');
    }

    _onChange() {
        console.log('The custom collection changed');
    }

    _onAdd(event) {
        console.log('An element was added', event.detail);
    }

    _onRemove(event) {
        console.log('An element was removed', event.detail);
    }
    
}
```

Then in your form, add your controller as an HTML attribute:

```php
public function buildForm(FormBuilderInterface $builder, array $options)
{
    $builder
        // ...
        ->add('collection', UxCollectionType::class, [
            'attr' => ['data-controller' => 'custom-collection']
        ])
        // ...
    ;
}
```

### EasyAdmin integration

For easyadmin 3+ you need to manually specify the form theme by overriding configureCrud in your DashboardController to add the theme `@ArkounayUxCollection/ux_collection_form_theme.html.twig`
```php
public function configureCrud(): Crud
{
    return Crud::new()->addFormTheme('@ArkounayUxCollection/ux_collection_form_theme.html.twig');
}
```

You will need to configure your admin to use WebpackEncore so Symfony UX is taken into account, for example:
```php
public function configureAssets(Assets $assets): Assets
{
    return parent::configureAssets($assets)
        ->addWebpackEncoreEntry('app');
}
```

And then create a custom Field as usual.