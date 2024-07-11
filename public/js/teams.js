// Global variables to store session data about whether a team has been deleted or modified
deleteConfirmed = sessionStorage.getItem('deleteConfirmed') || false;
modificationConfirmed = sessionStorage.getItem('modificationConfirmed') || false;

/**
 * Function to confirm the deletion of a team before submitting the "delete form".
 *
 * Parameters:
 *      - event (Event): the event object
 *      - libelle (string): the identifier of the team to be deleted
 *
 * Return: void
 */
function deleteTeam(event, libelle) {
    // Prevents the default event behavior
    event.preventDefault();
    // Gets the name of the team with spaces if it has
    let libelleEquipeAvecEspaces = document.querySelector('#libelle-'+libelle).value;
    // Shows a confirmation popup to the user
    Swal.fire({
        title: "Êtes-vous sûr de vouloir supprimer l'équipe " + libelleEquipeAvecEspaces + " ?",
        text: "Cette action est irréversible !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6' ,
        confirmButtonText: 'Oui',
        cancelButtonText: 'Annuler'
    }).then((result) => {
        if (result.value) {
            // If the user confirms the deletion, sets the deleteConfirmed session variable to true and submits the "delete form"
            deleteConfirmed = true;
            sessionStorage.setItem('deleteConfirmed', deleteConfirmed);
            document.querySelector('#delete-form-'+libelle).submit();
        }
    });
}

/**
 * Sets the modificationConfirmed session variable to true when a team is modified.
 *
 * Parameters: None
 * Return: void
 */
function modifyTeam() {
    modificationConfirmed = true;
    sessionStorage.setItem('modificationConfirmed', modificationConfirmed);
}

// Once the page is reloaded and the team is deleted, we display a deletion confirmation message using the deleteConfirmed session variable.
window.onload = function() {
    if (deleteConfirmed == 'true') {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Équipe supprimée avec succès",
            showConfirmButton: false,
            timer: 1500
        })
        sessionStorage.removeItem('deleteConfirmed');
    }
    if (modificationConfirmed == 'true') {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Équipe modifiée avec succès",
            showConfirmButton: false,
            timer: 1500
        })
        sessionStorage.removeItem('modificationConfirmed');
    }
}

/**
 * Changes the name and URL of the team's photo.
 *
 * Parameters: libelle (string): The identifier used to target the correct HTML elements
 * Return: void
 */
function UrlPhotoUpdate(libelle) {
    let inputFile = document.querySelector(".fileInputUrl_photo-" + libelle);
    let hiddenInput = document.querySelector(".hiddenUrl_photo-" + libelle);
    let visibleInput = document.querySelector(".visibleUrl_photo-" + libelle);
    let fileName = inputFile.files[0].name;
    hiddenInput.value = fileName;
    visibleInput.value = fileName;
}

/**
 * Sets the name and URL of a new team's photo.
 *
 * Parameters: None
 * Return: void
 */
function newUrlPhoto() {
    let inputFile = document.querySelector("input[name='uploadUrl_photo']");
    let hiddenInput = document.querySelector("input[name='equipes[url_photo]']");
    let visibleInput = document.querySelector("input[name='url_photoInfo']");
    let fileName = inputFile.files[0].name;
    hiddenInput.value = fileName;
    visibleInput.value = fileName;
}

/**
 * Validates the "search a team form" (checks if the form value is different from the default one).
 *
 * Parameters: None
 * Return:
 *      - false: if the field is empty
 *      - true: otherwise
 */
function validateForm() {
    let teamName = document.getElementsByName("search")[0].value;
    if (teamName === "") {
        return false;
    } else {
        return true;
    }
}