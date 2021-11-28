var ticketsPerPage = 5,
    sample = document.querySelector('#sample').innerHTML,
    ticketList = document.querySelector('#ticketlist');

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector('button#print').addEventListener('click', function () {
        let vals = getListOfValues();
        if(!vals){
            alert('Problème lors de la génération des tickets, veuillez revoir les valeurs saisies');
            return;
        }
        window.print();
    });


    for (let i = 0; i < ticketsPerPage; i++) {
        ticketList.innerHTML += sample;
    }
});

/**
 * @returns Array|false
 */
function getListOfValues() {
    let arrGeneratedTickets = [],
        ticketsPerStack = parseInt(document.querySelector('#tickets_per_stack').value),
        stackNumber = parseInt(document.querySelector('#stack_number').value),
        nbTickets = stackNumber * ticketsPerStack,
        nbPages = nbTickets / ticketsPerPage,
        coeff = (ticketsPerPage - 1) * ticketsPerStack;

    for (let i = 0; i < nbPages; i++) {
        for (let j = 0; j < ticketsPerPage; j++) {
            let position = (i + 1) + (j * ticketsPerStack) + (coeff * parseInt(i / ticketsPerStack));
            if (!(arrGeneratedTickets.includes(parseInt(position)))) {
                arrGeneratedTickets.push(parseInt(position));
            } else {
                return false;
                console.log('Attention, Doublons générés !! ' + position.toString());
            }
        }
    }
    if (arrGeneratedTickets.length < nbTickets) {
        return false;
        console.log("Attention tous les tickets n'ont pas été générés");
    }
    return arrGeneratedTickets;
}
