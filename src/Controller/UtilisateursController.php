<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Validator\Constraints\Regex;

// All routes of this class start with /users because they belong to the same section.
#[Route('/users')]
class UtilisateursController extends AbstractController
{
    /**
     * The route for the user management page.
     *
     * Parameters:
     *      - $em (EntityManagerInterface): instance used to interact with the database
     *
     * Return: Response (with an array of User objects "users" as a parameter)
     */
    #[Route('/management', name: 'manageUsersPage')]
    public function index(EntityManagerInterface $em): Response
    {
        // Uses the User repository to search all users
        $users = $em->getRepository(User::class)->findAll();

        // Renders the "index.html.twig" template with the users
        return $this->render('utilisateurs/index.html.twig', [
            'users' => $users,
        ]);
    }

    /**
     * The route to edit a user's information.
     *
     * Parameters:
     *      - $request (Request): the HTTP request object
     *      - $user (User): the User object that needs to be edited
     *      - $userRepository (UserRepository): the repository object for the User entity
     *      - $passwordHasher (UserPasswordHasherInterface): the password hasher object for the User entity
     *
     * Return: Response (redirects to the manageUsersPage with the edited user's ID as a parameter)
     */
    #[Route('/{id}/edit', name: 'editAUserPage', methods: ['GET', 'POST'])]
    public function edit(Request $request, User $user, UserRepository $userRepository, UserPasswordHasherInterface $passwordHasher): Response
    {
        // Sets the username and display name of the user based on the form input
        $user->setUsername($request->request->get('username'));
        $user->setDisplayname($request->request->get('displayname'));

        // Hashes the password (if it exists) using the UserPasswordHasherInterface
        $password = $request->request->get('password');
        if ($password != null) {
            $hashedPassword = $passwordHasher->hashPassword(
                $user,
                $password
            );
            // Sets the hashed password
            $user->setPassword($hashedPassword);
        }
        // Sets the role of the user based on the form input
        $user->setRoles([$request->request->get('role')]);

        // Saves the changes to the user using the UserRepository
        $userRepository->save($user, true);

        // Redirects to the "manage users" page, with the id of the edited match as a parameter
        return $this->redirectToRoute('manageUsersPage', ['id' => $user->getId()], Response::HTTP_SEE_OTHER);
    }

    /**
     * The route for the new user page.
     * It creates a form to add a new user to the database and handles the form submission.
     *
     * Parameters :
     *      - $request (Request) : the HTTP request object
     *      - $em (EntityManagerInterface) : the entity manager to persist the new user in the database
     *      - $passwordHasher (UserPasswordHasherInterface) : the password hasher to hash the user's password
     *
     * Return : Response (the created User form as a parameter)
     */
    #[Route('/new', name: 'newUserPage', methods: ['GET', 'POST'])]
    public function new(Request $request,EntityManagerInterface $em, UserPasswordHasherInterface $passwordHasher): Response
    {
        // Creates a form and adds fields for username, displayname, password, role, submit and back buttons
        $form = $this->createFormBuilder()
            ->add('username', TextType::class, [
                'label' => 'Identifiant',
                'attr' => ['class' => 'form-control'],
                'label_attr' => ['class' => 'form-label'],
                'constraints' => [
                    new Regex([
                        'pattern' => '/^\S+$/',
                        'message' => "L'identifiant ne doit pas contenir d'espaces."
                    ])
                ]
            ])
            ->add('displayname', TextType::class, ['label' => 'Nom',
                'attr' => ['class' => 'form-control'],
                'label_attr' => [
                    'class' => 'form-label'
                ]])
            ->add('password', TextType::class, ['label' => 'Mot de passe',
                'attr' => ['class' => 'form-control'],
                'label_attr' => [
                    'class' => 'form-label'
                ]])
            ->add('role', ChoiceType::class, [
                'attr' => [
                    'class' => 'browser-default custom-select mb-2'
                ],
                'choices'  => [
                    'Utilisateur' => 'ROLE_USER',
                    'Administrateur' => 'ROLE_ADMIN'
                ],
            ])
            ->add('submit', SubmitType::class, [
                'label_html' => true,
                'label' => '<i class="fa-solid fa-plus"></i> Ajouter cet utilisateur',
                'attr' => [
                    'class' => 'btn btn-success'
                ]
            ])
            ->add('back', ButtonType::class, [
                'label_html' => true,
                'label' => '<i class="bi bi-arrow-90deg-left"></i> Retour à la liste des utilisateurs',
                'attr' => [
                    'class' => 'btn btn-secondary mt-2',
                    'onclick' => "location.href='" . $this->generateUrl('manageUsersPage') . "'"
                ]
            ])
            ->getForm();

        // Handles the submitted form
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            try {
                // Creates a new User instance
                $utilisateur = new User();

                // Sets the User's properties based on the submitted form data
                $data = $form->getData();
                $utilisateur->setUsername($data["username"]);
                $role = explode(' ', $data["role"]);
                $utilisateur->setRoles($role);
                $utilisateur->setDisplayname($data["displayname"]);

                // Hashes the User's password using the password hasher service
                $hashedPassword = $passwordHasher->hashPassword(
                    $utilisateur,
                    $data["password"]
                );
                $utilisateur->setPassword($hashedPassword);

                // Persists the new User to the database
                $em->persist($utilisateur);
                $em->flush();

                // Redirects to the "manage users" page
                return $this->redirectToRoute('manageUsersPage');
            } catch (\Exception $e) {
                // If an exception is thrown during the creation of the user, it is caught and an error message is displayed
                $this->addFlash('erreurUnique', "Une erreur est survenue lors de la création de cet utilisateur. Un utilisateur avec l'identifiant saisi existe déjà. Veuillez vérifier que cet identifiant soit unique.");
            }
        }

        // Renders the "new.html.twig" template with created form
        return $this->render('utilisateurs/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * The route for deleting a user.
     *
     * Parameters :
     *      - $request (Request) : the HTTP request object
     *      - $user (User) : the user object to be deleted
     *      - $userRepository (UserRepository) : the repository for managing users
     *
     * Return : Response (redirects to the "manage users" page)
     */
    #[Route('/user/{id}', name: 'deleteAUserPage', methods: ['POST'])]
    public function delete(Request $request, User $user, UserRepository $userRepository): Response
    {
        // Checks that the CSRF token is valid before proceeding with the deletion
        if ($this->isCsrfTokenValid('delete' . $user->getId(), $request->request->get('_token'))) {
            $userRepository->remove($user, true);
        }
        // Redirects to the "manage users" page
        return $this->redirectToRoute('manageUsersPage', [], Response::HTTP_SEE_OTHER);
    }

    /**
     * The route for searching for a user.
     * It searches the users by the value entered.
     *
     * Parameters :
     *      - $request (Request) : the HTTP request object
     *      - $userRepository (UserRepository) : the repository for managing users
     *
     * Return : Response (with an array of User objects "users" as a parameter)
     */
    #[Route('/search/', name: 'searchAUserPage', methods: ['GET'])]
    public function search(Request $request, UserRepository $userRepository): Response
    {
        // Gets the search value from the request's query parameters
        $searchValue = $request->query->get('search');

        // Uses the UserRepository to search users matching the search value
        $users = $userRepository->findOneBySomeField($searchValue);

        // Renders the "index.html.twig" template with the found users
        return $this->render('utilisateurs/index.html.twig', [
            'users' => $users
        ]);
    }

}
