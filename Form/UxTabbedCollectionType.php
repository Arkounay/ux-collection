<?php

namespace Arkounay\Bundle\UxCollectionBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UxTabbedCollectionType extends AbstractType
{

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefaults([
            'attr' => ['data-arkounay--ux-collection--tabbed-collection-target' => 'collection', 'class' => 'tab-content'],
            'allow_drag_and_drop' => false,
            'entry_options' => [
                'row_attr' => ['data-arkounay--ux-collection--tabbed-collection-target' => 'collectionElement', 'class' => 'pt-0 mb-2 mb-3 tab-pane'],
            ],
            'empty_tab_name' => 'Nouvel élément'
        ]);
    }

    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        parent::buildView($view, $form, $options);
        $view->vars['icon_up'] = UxHorizontalCollectionType::ICON_LEFT;
        $view->vars['icon_down'] = UxHorizontalCollectionType::ICON_RIGHT;
        $view->vars['empty_tab_name'] = $options['empty_tab_name'];
    }

    public function getBlockPrefix()
    {
        return 'ux_tabbed_collection';
    }

    public function getParent(): string
    {
        return UxCollectionType::class;
    }

}
