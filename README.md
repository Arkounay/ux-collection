# Ux Collection

Symfony Collections that works out of the box with Symfony UX

## Installation

```sh
composer require arkounay/ux-collection

# Don't forget to install the JavaScript dependencies as well and compile
yarn install --force
yarn encore dev
```

Also make sure you have at least version 2.0 of [@symfony/stimulus-bridge](https://github.com/symfony/stimulus-bridge)
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
                'display_sort_buttons' => true,
                'add_label' => 'Add an item',
                'min' => 3,
                'max' => 10,
            ])
        ;
    }
```