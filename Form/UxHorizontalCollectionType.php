<?php

namespace Arkounay\Bundle\UxCollectionBundle\Form;

use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UxHorizontalCollectionType extends UxCollectionType
{

    public const ICON_LEFT = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="9" y2="16" />
              <line x1="5" y1="12" x2="9" y2="8" />
            </svg>';

    public const ICON_RIGHT = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="15" y1="16" x2="19" y2="12" />
          <line x1="15" y1="8" x2="19" y2="12" />
        </svg>';

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('entry_options', ['row_attr' => ['class' => 'col-xl-4 col-lg-6']]);
        $resolver->setDefault('attr', ['class' => 'collection arkounay-ux-collection arkounay-ux-horizontal-collection row gy-3']);
    }

    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        parent::buildView($view, $form, $options);
        $view->vars['icon_up'] = self::ICON_LEFT;
        $view->vars['icon_down'] = self::ICON_RIGHT;
    }

}
