<?php

namespace Arkounay\Bundle\UxCollectionBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UxCollectionType extends AbstractType
{

    private const DEFAULT_OPTIONS = [
        'add_label' => 'Add',
        'allow_drag_and_drop' => true,
        'display_sort_buttons' => true,
        'min' => 1,
        'max' => null,
    ];

    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        parent::buildView($view, $form, $options);
        foreach (self::DEFAULT_OPTIONS as $key => $value) {
            $view->vars[$key] = $options[$key] ?? $value;
        }
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver->setDefaults(self::DEFAULT_OPTIONS);
    }

    public function finishView(FormView $view, FormInterface $form, array $options)
    {
        parent::finishView($view, $form, $options);
        foreach ($view as $entryView) {
            $entryView->vars['block_prefixes'][array_search('collection_entry', $entryView->vars['block_prefixes'], true)] = $this->getBlockPrefix() . '_entry';
        }
        if (!empty($view->vars['prototype'])) {
            $view->vars['prototype']->vars['block_prefixes'][array_search('collection_entry', $view->vars['prototype']->vars['block_prefixes'], true)] = $this->getBlockPrefix() . '_entry';
        }
    }

    public function getParent()
    {
        return CollectionType::class;
    }

    public function getBlockPrefix(): string
    {
        return 'ux_collection';
    }
}
