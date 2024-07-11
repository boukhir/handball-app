<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class ConnexionController extends AbstractController
{
    /**
     * The route for the "connexion" page.
     * It uses the AuthenticationUtils service to handle authentication errors.
     *
     * Parameters : $authenticationUtils (an instance of AuthenticationUtils class)
     * Return : Response (with "last_username" and "error" as parameters)
     */
    #[Route('/connexion', name: 'connexion')]
    public function index(AuthenticationUtils $authenticationUtils): Response
    {
        // Gets the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();

        // Last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('connexion/index.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }
    /**
     * The route for logging out.
     * It simply logs the user out and redirects them to the home page.
     *
     * Parameters : None
     * Return : void
     */
    #[Route('/deconnexion', name: 'deconnexion', methods: ["GET"])]
    public function logout(): void
    {
        // Controller can be blank: it will never be called!
    }
}
