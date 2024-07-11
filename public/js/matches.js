// Global variables to store session data about whether a match has been deleted or modified
deleteConfirmed = sessionStorage.getItem('deleteConfirmed') || false;
modificationConfirmed = sessionStorage.getItem('modificationConfirmed') || false;

/**
 * Function to confirm the deletion of a match before submitting the "delete form".
 *
 * Parameters:
 *      - event (Event): the event object
 *      - id (integer): the id of the match to be deleted
 *
 * Return: void
 */
function deleteMatch(event, id) {
    // Prevents the default event behavior
    event.preventDefault();
    // Shows a confirmation popup to the user
    Swal.fire({
        title: "Êtes-vous sûr de vouloir supprimer ce match ?",
        text: "Cette action est irréversible !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Oui',
        cancelButtonText: 'Annuler'
    }).then((result) => {
        // If the user confirms the deletion, sets the deleteConfirmed session variable to true and submits the "delete form"
        if (result.value) {
            deleteConfirmed = true;
            sessionStorage.setItem('deleteConfirmed', deleteConfirmed);
            document.querySelector('#delete-form-' + id).submit();
        }
    });
}
/**
 * Sets the modificationConfirmed session variable to true when a match is modified.
 *
 * Parameters: None
 * Return: void
 */
function modifyMatch() {
    modificationConfirmed = true;
    sessionStorage.setItem('modificationConfirmed', modificationConfirmed);
}

// Once the page is reloaded and the match is deleted, we display a deletion confirmation message using the deleteConfirmed session variable
window.onload = function () {
    if (deleteConfirmed == 'true') {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Match supprimé avec succès",
            showConfirmButton: false,
            timer: 1500
        })
        sessionStorage.removeItem('deleteConfirmed');
    }
    if (modificationConfirmed == 'true') {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Match modifié avec succès",
            showConfirmButton: false,
            timer: 1500
        })
        sessionStorage.removeItem('modificationConfirmed');
    }
}


// Initializes the date range input
$(function () {
    $('input[name="datefilter"]').daterangepicker({
        opens: 'left',
        showWeekNumbers: true,
        autoUpdateInput: false,
        "locale": {
            "format": "DD/MM/YYYY",
            "separator": " - ",
            "applyLabel": "Valider",
            "cancelLabel": "Annuler",
            "fromLabel": "De",
            "toLabel": "à",
            "daysOfWeek": [
                "Dim",
                "Lun",
                "Mar",
                "Mer",
                "Jeu",
                "Ven",
                "Sam"
            ],
            "monthNames": [
                "Janvier",
                "Février",
                "Mars",
                "Avril",
                "Mai",
                "Juin",
                "Juillet",
                "Août",
                "Septembre",
                "Octobre",
                "Novembre",
                "Décembre"
            ]
        }
    });

    $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
        // Updates the value of the input with the selected dates
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
        // Resets the value of the input
        $(this).val('Plage de dates');
    });
});


/**
 * Validates the "search a match form" (checks if the form has values different from the default ones).
 *
 * Parameters: None
 * Return:
 *      - false: if all three fields are empty
 *      - true: otherwise
 */
function validateForm() {
    let teamName = document.getElementsByName("teamName")[0].value;
    let matchPeriod = document.querySelector('input[name="matchPeriod"]:checked').value;
    let dateRange = document.querySelector(".searchDateRange").value;

    if (teamName === "" && matchPeriod === "all" && dateRange === "Plage de dates") {
        return false;
    } else {
        return true;
    }
}

/**
 * Updates the placeholder text of an input field based on whether or not it has a value.
 *
 * Parameters: input (the input field to update the placeholder text for)
 * Return: void
 */
function updatePlaceholder(input) {
    if (!input.value) {
        input.classList.add('custom-placeholder');
    } else {
        input.classList.remove('custom-placeholder');
    }
}
