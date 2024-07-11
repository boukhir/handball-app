<?php

namespace App\Controller;

use App\Repository\EquipesRepository;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use App\Entity\Matches;
use App\Repository\MatchesRepository;
use Symfony\Component\HttpFoundation\Request;

// All routes of this class start with /matches because they belong to the same section.
#[Route('/matches')]
class MatchesController extends AbstractController
{
    /**
     * The route for the match management page.
     *
     * Parameters:
     *      - $matchRepository (MatchesRepository): The repository for Matches entity
     *      - $teamsRepository (EquipesRepository): The repository for Equipes entity
     *
     * Returns: Response (with an array of Match objects "matches" and an array of the team names "teamNames" as parameters)
     */
    #[Route('/management', name: 'manageMatchesPage', methods: ['GET'])]
    public function index(MatchesRepository $matchRepository, EquipesRepository $teamsRepository): Response
    {
        // Uses the MatchesRepository to search all the matches that are in the database
        $matches = $matchRepository->findAll();

        // Uses the EquipesRepository to search all the teams that are in the database
        $teams = $teamsRepository->findAll();

        // Formats the team names into an array of objects with "value" and "libelle" keys
        $teamNames = [];
        foreach ($teams as $team) {
            $teamNames[] = [
                'value'=> $team->getLibelle(),
                'libelle' => $team->getLibelle()
            ];
        }

        // Renders the "index.html.twig" template with the retrieved matches and formatted team names
        return $this->render('matches/index.html.twig', [
            'matches' => $matches,
            'teamNames' => $teamNames
        ]);
    }

    /**
     * The route for searching a match.
     * It allows the user to search for matches based on 3 criteria : team name, match period, and date range.
     *
     * Parameters:
     *      - $request (Request): The HTTP request object
     *      - $matchRepository (MatchesRepository): The repository for matches
     *      - $teamsRepository (EquipesRepository): The repository for teams
     *
     * Returns: Response based on the "page" parameter and the request's referer (with an array of Match objects "matches" and an array of team names "teamNames" as parameters)
     */
    #[Route('/search', name: 'searchAMatchPage', methods: ['GET'])]
    public function search(Request $request, MatchesRepository $matchRepository, EquipesRepository $teamsRepository): Response
    {
        // Extracts the search parameters from the query string
        $teamName = $request->query->get('teamName');
        $matchPeriod = $request->query->get('matchPeriod');
        $datefilter = $request->query->get('datefilter');

        $criteria = [];

        // Sets up the search criteria based on the query parameters
        if ($teamName !== "") {
            $criteria['teamName'] = $teamName;
        }

        switch ($matchPeriod) {
            case 'previous':
                $criteria['previousMatches'] = '<';
                break;
            case 'next':
                $criteria['upcomingMatches'] = '>=';
                break;
        }

        if ($datefilter !== 'Plage de dates') {
            // Parses the date range from the query parameter
            list($start, $end) = explode('-', $datefilter);

            $criteria['startDate'] = new \DateTime(trim($start));
            $criteria['endDate'] = new \DateTime(trim($end));
        }

        // Queries the MatchesRepository for matches that match the criteria
        $matches = $matchRepository->search($criteria);

        // Uses the EquipesRepository to search all the teams that are in the database
        $teams = $teamsRepository->findAll();

        // Formats the team names into an array of objects with "value" and "libelle" keys
        $teamNames = [];
        foreach ($teams as $team) {
            $teamNames[] = [
                'value'=> $team->getLibelle(),
                'libelle' => $team->getLibelle()
            ];
        }

        $pageToGo = $request->query->get('page');

        // Redirects to the match preview page if requested
        if ($pageToGo == "preview") {
            return $this->render('matches/preview.html.twig', [
                'matches' => $matches,
                'teamNames' => $teamNames
            ]);
        }

        // Gets the HTTP referer from the request headers (referer = from where this route was called)
        $referer = $request->headers->get('referer');

        // If this route was called from preview, it renders the "preview.html.twig" template with the found matches and the teamNames array
        // Otherwise, it renders the "index.html.twig" template with the found matches and the teamNames array
        if (str_contains($referer, '/preview')) {
            return $this->render('matches/preview.html.twig', [
                'matches' => $matches,
                'teamNames' => $teamNames
            ]);
        } else {
            return $this->render('matches/index.html.twig', [
                'matches' => $matches,
                'teamNames' => $teamNames
            ]);
        }
    }

    /**
     * The route for previewing all matches, sorted by date in descending order.
     *
     * Parameters:
     *      - $matchRepository (MatchesRepository): An instance of MatchesRepository used to retrieve matches from the database
     *
     * Return: Response (with the array "matches" as a parameter)
     */
    #[Route('/preview', name: 'previewMatchesPage', methods: ['GET'])]
    public function preview(MatchesRepository $matchRepository): Response
    {
        // Uses the MatchesRepository to search all matches, ordered by date in descending order
        $matches = $matchRepository->findBy([], ['date_heure' => 'DESC']);

        // Renders the "preview.html.twig" template with the result
        return $this->render('matches/preview.html.twig', [
            'matches' => $matches,
        ]);
    }

    /**
     * The route to edit a match. It updates the match's data with the parameters passed in the request.
     *
     * Parameters:
     *      - $request (Request): the HTTP request object containing the updated match data
     *      - $match (Matches): the match entity to be updated
     *      - $matchesRepository (MatchesRepository): the repository to manage the matches
     *
     * Returns: Response (a redirection to the "manage matches" page)
     */
    #[Route('/{id}/edit', name: 'editAMatchPage', methods: ['GET', 'POST'])]
    public function edit(Request $request, Matches $match, MatchesRepository $matchesRepository): Response
    {
        // Updates the given match with the values from the request
        $match->setEquipeLocale($request->request->get('equipe_locale'));
        $match->setEquipeAdverse($request->request->get('equipe_adverse'));
        $match->setHote($request->request->get('hote'));
        $match->setDomicileExterieur($request->request->get('domicile_exterieur') ? 1 : 0);
        $match->setGymnase($request->request->get('gymnase'));
        $match->setDateHeure(new DateTime($request->request->get('date_heure')));
        $match->setNumSemaine($request->request->get('num_semaine'));
        $match->setNumJournee($request->request->get('num_journee'));
        $matchesRepository->save($match, true);

        // Redirects to the "manage matches" page, with the id of the edited match as a parameter
        return $this->redirectToRoute('manageMatchesPage', ['id' => $match->getId()], Response::HTTP_SEE_OTHER);
    }

    /**
     * The route to delete a match.
     *
     * Parameters:
     *      - $request (Request): the HTTP request object containing the ID of the match to be deleted
     *      - $match (Matches): the match entity to be deleted
     *      - $matchesRepository (MatchesRepository): the repository to manage the matches
     *
     * Return: Response (a redirection to the "manage matches" page)
     */
    #[Route('/match/{id}', name: 'deleteAMatchPage', methods: ['POST'])]
    public function delete(Request $request, Matches $match, MatchesRepository $matchsRepository): Response
    {
        // Checks that the CSRF token is valid before proceeding with the deletion
        if ($this->isCsrfTokenValid('delete' . $match->getId(), $request->request->get('_token'))) {
            $matchsRepository->remove($match, true);
        }
        // Redirects to the "manage matches" page
        return $this->redirectToRoute('manageMatchesPage', [], Response::HTTP_SEE_OTHER);
    }

    /**
     * Displays the form to create a new match.
     *
     * Parameters:
     *      - $teamsRepository (EquipesRepository): The repository for Equipes entity
     *
     * Returns: Response (with an array of the team names "teamNames" as parameters)
     */
    #[Route('/new', name: 'newMatchPage', methods: ['GET', 'POST'])]
    public function newMatchPage(EquipesRepository $teamsRepository): Response
    {
        // Uses the EquipesRepository to search all the teams that are in the database
        $teams = $teamsRepository->findAll();

        // Formats the team names into an array of objects with "value" and "libelle" keys
        $teamNames = [];
        foreach ($teams as $team) {
            $teamNames[] = [
                'value'=> $team->getLibelle(),
                'libelle' => $team->getLibelle()
            ];
        }

        // Renders the "new.html.twig" template with formatted team names
        return $this->render('matches/new.html.twig', [
            'teamNames' => $teamNames
        ]);
    }

    /**
     * Creates a new match based on the data submitted through the form.
     *
     * Parameters:
     *          - $request (Request): the HTTP request object containing the new match data
     *          - $matchesRepository (MatchesRepository): the repository to manage the matches
     *
     * Returns: Response (with a redirection to the "manage matches" page if everything is ok, otherwise with a redirection to the "new match" page)
     */
    #[Route('/createNewMatch', name: 'createNewMatchPage', methods: ['GET', 'POST'])]
    public function createNewMatch(Request $request, MatchesRepository $matchesRepository): Response
    {
        try {
            // Creates a new instance of the Matches entity
            $match = new Matches();

            // Converts the value of the checkbox to an integer
            $domicileExterieur = $request->request->get('domicile_exterieur') ? 1 : 0;

            // Sets various properties of the $match object from form data
            $match->setEquipeLocale($request->request->get('equipe_locale'));
            $match->setEquipeAdverse($request->request->get('equipe_adverse'));

            // We take into account the values that can be null in the database
            if ($request->request->has('hote')) {
                $match->setHote($request->request->get('hote'));
            }

            $match->setDomicileExterieur($domicileExterieur);
            if ($request->request->has('gymnase')) {
                $match->setGymnase($request->request->get('gymnase'));
            }

            if ($request->request->get('date_heure') != null) {
                // Parses the selected date and time into a DateTime object
                $matchDateTime = new DateTime($request->request->get('date_heure'));

                // Checks if the selected date isn't in the past
                if ($matchDateTime < new \DateTime('now')) {
                    throw new \Exception('La date du match ne peut pas être dans le passé.');
                }
                $match->setDateHeure($matchDateTime);
            }

            $match->setNumSemaine($request->request->get('num_semaine'));
            $match->setNumJournee($request->request->get('num_journee'));

            // Saves the $match object to the MatchesRepository
            $matchesRepository->save($match, true);

            // Redirects to the "manage matches" page
            return $this->redirectToRoute('manageMatchesPage', [], Response::HTTP_SEE_OTHER);
        } catch (\Exception $e) {
            // If an exception is thrown during the creation of the match, it is caught and an error message is displayed
            $this->addFlash('erreurUnique', $e->getMessage());
        }

        // Redirects back to the "new match" page (executed only if an exception is thrown)
        return $this->redirectToRoute('newMatchPage', [], Response::HTTP_SEE_OTHER);
    }

    /**
     * The route for showing a specific match.
     *
     * Parameters:
     *      - $id (integer): The ID of the match to be displayed
     *      - $match (Matches) : The match's object
     *
     * Return: Response (with the "match" object as a parameter)
     */
    #[Route('/{id}', name: 'showAMatchPage', methods: ['GET'])]
    public function show(Matches $match): Response
    {
        // Renders the "show.html.twig" template with the given match
        return $this->render('matches/show.html.twig', [
            'match' => $match
        ]);
    }
}
