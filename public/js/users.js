// Global variables to store session data about whether a user has been deleted or modified
deleteConfirmed = sessionStorage.getItem('deleteConfirmed') || false;
modificationConfirmed = sessionStorage.getItem('modificationConfirmed') || false;

/**
 * Function to confirm the deletion of a user before submitting the "delete form".
 *
 * Parameters:
 *      - event (Event): the event object
 *      - username (string): the identifier of the user to be deleted
 *
 * Return: void
 */
function deleteUser(event, username) {
    // Prevents the default event behavior
    event.preventDefault();
    // Shows a confirmation popup to the user
    Swal.fire({
        title: "Êtes-vous sûr de vouloir supprimer l'utilisateur " + username + " ?",
        text: "Cette action est irréversible !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6' ,
        confirmButtonText: 'Oui',
        cancelButtonText: 'Annuler'
    }).then((result) => {
        // If the user confirms the deletion, sets the deleteConfirmed session variable to true and submits the "delete form"
        if (result.value) {
            deleteConfirmed = true;
            sessionStorage.setItem('deleteConfirmed', deleteConfirmed);
            document.querySelector('#delete-form-'+username).submit();
        }
    });
}

/**
 * Sets the modificationConfirmed session variable to true when a user is modified.
 *
 * Parameters: None
 * Return: void
 */
function modifyUser() {
    modificationConfirmed = true;
    sessionStorage.setItem('modificationConfirmed', modificationConfirmed);
}

// Once the page is reloaded and the team is deleted, we display a deletion confirmation message using the deleteConfirmed session variable.
window.onload = function() {
    if (deleteConfirmed == 'true') {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Utilisateur supprimé avec succès",
            showConfirmButton: false,
            timer: 1500
        })
        sessionStorage.removeItem('deleteConfirmed');
    }
    if (modificationConfirmed == 'true') {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Utilisateur modifié avec succès",
            showConfirmButton: false,
            timer: 1500
        })
        sessionStorage.removeItem('modificationConfirmed');
    }
}

/**
 * Validates the "search a user form" (checks if the form value is different from the default one).
 *
 * Parameters: None
 * Return:
 *      - false: if the fields is empty
 *      - true: otherwise
 */
function validateForm() {
    let searchValue = document.getElementsByName("search")[0].value;
    if (searchValue === "") {
        return false;
    } else {
        return true;
    }
}