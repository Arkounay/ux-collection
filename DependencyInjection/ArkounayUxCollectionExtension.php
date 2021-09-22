<?php

namespace Arkounay\Bundle\UxCollectionBundle\DependencyInjection;

use Arkounay\Bundle\UxCollectionBundle\Form\UxCollectionType;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Extension\PrependExtensionInterface;

class ArkounayUxCollectionExtension extends Extension implements PrependExtensionInterface
{

    public function prepend(ContainerBuilder $container)
    {
        $bundles = $container->getParameter('kernel.bundles');

        if (!isset($bundles['TwigBundle'])) {
            return;
        }

        $container->prependExtensionConfig('twig', ['form_themes' => ['@ArkounayUxCollection/ux_collection_form_theme.html.twig']]);
    }

    public function load(array $configs, ContainerBuilder $container)
    {
        $container
            ->setDefinition('form.ux-collection', new Definition(UxCollectionType::class))
            ->addTag('form.type')
            ->setPublic(false)
        ;
    }
}