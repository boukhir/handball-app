<?php

namespace App\Controller;

use App\Repository\MatchesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PlanningController extends AbstractController
{
    /**
     * The route for the planning page.
     * It retrieves all matches from the database and generates an array of data to be used by the Syncfusion Schedule
     *
     * Parameters:
     *      - $matchRepository (MatchesRepository): The repository for Matches entity
     *
     * Return: Response (with the array "planningData" as a parameter)
     */
    #[Route('/planning', name: 'planning')]
    public function showPlanning(MatchesRepository $matchesRepository): Response
    {
        // Retrieves all matches
        $matches = $matchesRepository->findAll();

        // Loops through all matches to create the planning data
        $planningData = [];
        foreach ($matches as $match) {
            // Checks if the match has a date and time associated with it
            if ($match->getDateHeure() != null) {
                // Formats the date and time information for the match
                $startTime = $match->getDateHeure()->format('Y,n,j,G,i');
                $startTimeArray = explode(",", $startTime);

                // Creates a description of the match
                // We take into account the values that can be null in the database
                $description = "- Match à ";
                if ($match->getDomicileExterieur()) {
                    $description .= "domicile.<br>";
                } else {
                    $description .= "l'extérieur.<br>";
                }
                if ($match->getHote() != null) {
                    $description .= "- L'hôte est " . $match->getHote() . ".<br>";
                }
                if ($match->getGymnase() != null) {
                    $description .= "- Le gymnase est " . $match->getGymnase() . ".<br>";
                }

                // Adds the match data to the planning data array
                $planningData[] = [
                    'Id' => $match->getId(),
                    'Subject' => $match->getEquipeLocale() . " vs " . $match->getEquipeAdverse(),
                    'StartTime' => $startTimeArray,
                    'EndTime' => $startTimeArray,
                    'Description' => $description,
                    'IsAllDay' => false,
                ];
            }
        }

        // Renders the "index.html.twig" template with planningData array as a parameter
        return $this->render('planning/index.html.twig', [
            'planningData' => $planningData,
        ]);
    }
}
