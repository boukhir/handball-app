<?php

namespace App\Controller;

use App\Entity\Equipes;
use App\Form\EquipesType;
use App\Repository\EquipesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

// All routes of this class start with /teams because they belong to the same section.
#[Route('/teams')]
class EquipesController extends AbstractController
{
    /**
     * The route for the management page of the teams.
     *
     * Parameters: $teamsRepository - an instance of EquipesRepository which allows us to retrieve all the teams
     * Return: Response (with the array "teams" as a parameter)
     */
    #[Route('/management', name: 'manageTeamsPage', methods: ['GET'])]
    public function index(EquipesRepository $teamsRepository): Response
    {
        // Uses the EquipesRepository to search all teams and renders the "index.html.twig" template with the result
        return $this->render('teams/index.html.twig', [
            'teams' => $teamsRepository->findAll()
        ]);
    }

    /**
     * The route for searching a team.
     * It retrieves the search value from the request, searches for the team/teams in the EquipesRepository, and returns the result based on the page parameter.
     *
     * Parameters:
     *      - $request (Request): The HTTP request object
     *      - $teamsRepository (EquipesRepository): The repository for Equipes entity
     * Return: Response based on the "page" parameter (with the array "teams" as a parameter)
     */
    #[Route('/search/', name: 'searchATeamPage', methods: ['GET'])]
    public function search(Request $request, EquipesRepository $teamsRepository): Response
    {
        // Gets the search value from the request's query parameters
        $searchValue = $request->query->get('search');

        // Uses EquipesRepository to find teams matching the search value
        $teams = $teamsRepository->findOneBySomeField($searchValue);

        // Gets the page to go to from the request's query parameters
        $pageToGo = $request->query->get('page');

        // If the page to go to is 'management', it renders the "index.html.twig" template with the found teams
        if ($pageToGo == "management") {
            return $this->render('teams/index.html.twig', [
                'teams' => $teams
            ]);
        }

        // Gets the HTTP referer from the request headers (referer = from where this route was called)
        $referer = $request->headers->get('referer');

        // If this route was called from preview, it renders the "preview.html.twig" template with the found teams
        // Otherwise, it renders the "index.html.twig" template with the found teams
        if (str_contains($referer, '/preview')) {
            return $this->render('teams/preview.html.twig', [
                'teams' => $teams
            ]);
        } else {
            return $this->render('teams/index.html.twig', [
                'teams' => $teams
            ]);
        }
    }

    /**
     * The route for the preview page of all teams.
     * It retrieves all teams from the database and passes them as a parameter to the template.
     *
     * Parameters: $teamsRepository (an instance of EquipesRepository class)
     * Return: Response (with the array "teams" as a parameter)
     */
    #[Route('/preview', name: 'previewTeamsPage', methods: ['GET'])]
    public function preview(EquipesRepository $teamsRepository): Response
    {
        // Uses the EquipesRepository to search all teams and renders the "preview.html.twig" template with the result
        $teams = $teamsRepository->findAll();

        return $this->render('teams/preview.html.twig', [
            'teams' => $teams
        ]);
    }

    /**
     * The route for creating a new team.
     * It creates a new team object and handles possible exceptions to its creation,
     * such as the existence of a different photo with the same name as the uploaded photo, or the existence of the entered team name in the database.
     *
     * Parameters:
     *      - $request (Request): The HTTP request object containing the form data
     *      - $teamsRepository (EquipesRepository): The repository object used to interact with the database
     *
     * Return: Response (if the form is submitted and valid, it saves the new team to the database and redirects to the "manage teams" page.
     * Otherwise, it renders the "new team" form template with the new team object and the form).
     */
    #[Route('/new', name: 'newTeamPage', methods: ['GET', 'POST'])]
    public function new(Request $request, EquipesRepository $teamsRepository): Response
    {
        // Creates a new Equipes entity (a team) and a form for it
        $team = new Equipes();
        $form = $this->createForm(EquipesType::class, $team);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            try {
                // Gets the photo from the request and saves it to the 'uploads' directory
                $photo = $request->files->get('uploadUrl_photo');
                if ($photo) {
                    $photoName = $photo->getClientOriginalName();
                    $photoDir = $this->getParameter('kernel.project_dir') . '/public/uploads/';
                    // If a file with the same name already exists, we add a random number to the filename
                    // (we iterate the process until we have a unique name)
                    // It's to avoid having 2 photos with the name "photo.png" for example...
                    if (file_exists($photoDir . $photoName)) {
                        $randomNumber = rand(1, 999);
                        while (file_exists($photoDir . $photoName)) {
                            $photoName = pathinfo($photoName, PATHINFO_FILENAME) . '_' . $randomNumber . '.' . pathinfo($photoName, PATHINFO_EXTENSION);
                            $randomNumber = rand(1, 999);
                        }
                    }
                    $photo->move($photoDir, $photoName);
                    $team->setUrlPhoto($photoName);
                }
                // Saves the new team to the database and redirects to the "manage teams" page
                $teamsRepository->save($team, true);
                return $this->redirectToRoute('manageTeamsPage', [], Response::HTTP_SEE_OTHER);
            } catch (\Exception $e) {
                // Deletes the photo if an error occurs during team creation and displays an error message
                if(file_exists($photoDir . $photoName)){
                    unlink($photoDir . $photoName);
                }
                $this->addFlash('erreurUnique', "Une erreur est survenue lors de la création de cette équipe. Une équipe avec le nom saisi existe déjà. Veuillez vérifier que ce nom soit unique.");
            }
        }

        // Renders the "new.html.twig" template with the team form
        return $this->renderForm('teams/new.html.twig', [
            'team' => $team,
            'form' => $form
        ]);
    }

    /**
     * The route for showing a team.
     * It displays the information of a team based on its ID.
     *
     * Parameters:
     *      - $id (integer): The ID of the team to be displayed
     *      - $team (Equipes) : The team's object
     *
     * Return: Response (with the team object as a parameter)
     */
    #[Route('/{id}', name: 'showATeamPage', methods: ['GET'])]
    public function show(Equipes $team): Response
    {
        // Renders the "show.html.twig" template with the given team
        return $this->render('teams/show.html.twig', [
            'team' => $team
        ]);
    }

    /**
     * Deletes a team and redirects to the "manage teams" page.
     *
     * Parameters:
     *      - $request (Request): the HTTP request object
     *      - $team (Equipes): the team to be deleted
     *      - $teamsRepository (EquipesRepository): the repository to interact with the database
     *
     * Return: Response (a redirection to the "manage teams" page)
     */
    #[Route('/{id}', name: 'deleteATeamPage', methods: ['POST'])]
    public function delete(Request $request, Equipes $team, EquipesRepository $teamsRepository): Response
    {
        // Checks that the CSRF token is valid before proceeding with the deletion
        if ($this->isCsrfTokenValid('delete'.$team->getId(), $request->request->get('_token'))) {
            // Removes the team's photo from the uploads directory if it exists
            $photoPath = $this->getParameter('kernel.project_dir').'/public/uploads/'.$team->getUrlPhoto();
            if(file_exists($photoPath)){
                unlink($photoPath);
            }
            // Removes the team from the database
            $teamsRepository->remove($team, true);
        }

        // Redirects to the "manage teams" page
        return $this->redirectToRoute('manageTeamsPage', [], Response::HTTP_SEE_OTHER);
    }

    /**
     * The route for editing a team's information.
     *
     * Parameters:
     *      - $request (Request): The request object containing the form data
     *      - $team (Equipes): The team entity to be edited
     *      - $teamsRepository (EquipesRepository): The repository used to save the edited team entity
     *
     * Return: Response (a redirection to the "manage teams" page)
     */
    #[Route('/{id}/edit', name: 'editAteamPage', methods: ['GET', 'POST'])]
    public function edit(Request $request, Equipes $team, EquipesRepository $teamsRepository): Response
    {
        // Updates the given team with the values from the request
        $team->setLibelle($request->request->get('libelle'));
        $team->setEntraineur($request->request->get('entraineur'));
        $team->setCreneaux($request->request->get('creneaux'));
        $team->setUrlPhoto($request->request->get('url_photo'));
        $team->setUrlResultCalendrier($request->request->get('url_result_calendrier'));
        $team->setCommentaire($request->request->get('commentaire'));
        $teamsRepository->save($team, true);

        // Checks if a photo was uploaded and moves it to the 'uploads' directory if it doesn't already exist
        if ($request->files->get('uploadUrl_photo')) {
            $photoName = $request->request->get('url_photo');
            $photoDir = $this->getParameter('kernel.project_dir') . '/public/uploads/';
            if (!file_exists($photoDir . $photoName)) {
                $request->files->get('uploadUrl_photo')->move($photoDir, $photoName);
            }
        }
        // Redirects to the "manage teams" page
        return $this->redirectToRoute('manageTeamsPage', [], Response::HTTP_SEE_OTHER);
    }
}
