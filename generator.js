var ticketsPerPage = 5,
    sample = document.querySelector('#sample').innerHTML,
    ticketList = document.querySelector('#ticketlist');

document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < ticketsPerPage; i++) {
        ticketList.innerHTML += sample;
    }

    /**
     * 
     * @param {string} val 
     * @param {string} selector 
     * @param {string} target 
     */
    function replaceValueForSelector(val, selector, target) {
        let elements = document.querySelectorAll(target + ' ' + selector);
        if (elements.length != 0) {
            elements.innerHTML = val;
        }
    }

    /**
     * @returns Array
     */
    function getListOfValues() {
        return [];
    }

});