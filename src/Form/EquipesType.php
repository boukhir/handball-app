<?php

namespace App\Form;

use App\Entity\Equipes;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EquipesType extends AbstractType
{
    /**
     * Builds the form for creating a new team.
     *
     * Parameters:
     *  - $builder (FormBuilderInterface): the FormBuilderInterface object used to create the form fields
     *  - $options (array): an array of options passed to the form builder
     *
     * Returns: void
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        // Adds form fields for a team
        $builder
            ->add('libelle')
            ->add('entraineur')
            ->add('creneaux')
            ->add('url_photo')
            ->add('url_result_calendrier')
            ->add('commentaire')
        ;
    }

    /**
     * Configures the options for the form builder.
     *
     * Parameters:
     *  - $resolver (OptionsResolver): the OptionsResolver object used to set the default options for the form builder
     *
     * Returns: void
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        // Sets the default options for the form builder
        $resolver->setDefaults([
            'data_class' => Equipes::class,
        ]);
    }
}
