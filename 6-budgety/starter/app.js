/**
 * Developer: Fahid Javid
 */


// Add event handler
// Get input values
// Add the new item to our data structure
// Add the new item to the UI
// Calculate budget
// Update the UI


// BUDGET CONTROLLER
var budgetController = (function () {

    // some code

})();

// UI CONTROLLER
var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc/exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function () {
            return DOMstrings;
        }
    }

})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 12 || event.which === 13) {
                ctrlAddItem();
            }
        });

    };
    var ctrlAddItem = function () {

        // 1. Get the filed input data
        var input = UICtrl.getInput();

        console.log(input);

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    };

    return {
        init: function () {
            console.log('Application has been initiated!');

            setupEventListeners();
        }
    }


})(budgetController, UIController);

controller.init();