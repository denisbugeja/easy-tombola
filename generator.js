var ticketsPerPage = 5,
    sample = document.querySelector('#sample').innerHTML,
    ticketList = document.querySelector('#ticketlist');

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector('button#print').addEventListener('click', function () {
        document.querySelector('#ticketlist').innerHTML = generateAllTickets();
        setTimeout(function () {
            window.print();
        }, 2000);        
    });

    // preview
    document.querySelectorAll("#generator input").forEach(function (input) {
        ['input'].forEach(function (event) {
            input.addEventListener(event, function (e) {
                document.querySelector('#preview').innerHTML = generateOneTicket(1);
            });
        });
    });

    document.querySelector('#preview').innerHTML = generateOneTicket(1);
});

/**
 * @returns string
 */
function generateAllTickets() {
    let allPositions = getListOfValues();
    if (!allPositions) {
        alert('Problème lors de la génération des tickets, veuillez revoir les valeurs saisies');
        return;
    }
    let allTicketHtml = '';
    allPositions.forEach(function (position) {
        allTicketHtml += generateOneTicket(position);
    });
    return allTicketHtml;
}

/**
 * 
 * @param {number} position 
 * @returns string
 */
function generateOneTicket(position) {
    let parser = new DOMParser(),
        ticket = parser.parseFromString(sample, "text/html"),
        formattedPosition = position.toString(),
        ticketsPerStack = parseInt(document.querySelector('#tickets_per_stack').value),
        stackNumber = parseInt(document.querySelector('#stack_number').value),
        maxTicketNumber = stackNumber * ticketsPerStack,
        prefixNumber = maxTicketNumber.toString().length - formattedPosition.length;

    for (let i = 0; i < prefixNumber; i++) {
        formattedPosition = '0' + formattedPosition;
    }

    ticket.querySelectorAll('.number').forEach(function (number) {
        number.innerHTML = formattedPosition;
    });

    document.querySelectorAll("#generator [data-mapto]").forEach(function (input) {
        ticket.querySelectorAll('.' + input.getAttribute('data-mapto')).forEach(function (element) {
            element.innerHTML = input.value;
        });
    });

    return ticket.querySelector('.ticket').outerHTML;
}

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