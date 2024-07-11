<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Finder\Finder;

class AccueilController extends AbstractController
{
    /**
     * The default route that's used to redirect to the home page.
     *
     * Parameters : None
     * Return :  Response
     */
    #[Route('/', name: 'defaultRoute')]
    public function homePageRedirection(): Response
    {
        return $this->redirectToRoute('homePage');
    }

    /**
     * The route for the home page.
     * It gets the name of all images that are in the "uploads" directory.
     *
     * Parameters : None
     * Return : Response (with the array "images" as a parameter)
     */
    #[Route('/home', name: 'homePage')]
    public function index(): Response
    {
        // Gets all files that are in the uploads directory
        $finder = new Finder();
        $finder->in($this->getParameter('kernel.project_dir') . '/public/uploads/');

        $images = [];
        /* We don't do extension checks here because we assume that
           all files are valid photos (we do checks during photo uploads) */
        foreach ($finder as $file) {
            $images[] = $file->getFilename();
        }

        // Renders the home page template and passes the "images" array as a parameter
        return $this->render('home/index.html.twig', ['images' => $images]);
    }
}
