/******************************
 * UI MODULE
 *****************************/

var UIController = (function () {
  return {
    getInput: function () {
      return {
        type: document.querySelector(".add__type").value,
        description: document.querySelector(".add__description").value,
        value: document.querySelector(".add__value").value,
      };
    },
  };
})();

/******************************
 * BUDGET CONTROLLER
 *****************************/

// IFFE function

var budgetController = (function () {
  //some code
})();

/******************************
 * GLOBAL APP CONTROLLER
 *****************************/

var controller = (function (budgetCtrl, UICtrl) {
  var ctrlAddItem = function () {
    // 1. get the field input data
    var input = UICtrl.getInput();
    console.log(input);
    // 2. add the item to the budget controller
    // 3. cadd item to UI
    // 4. calculate the budhet.
    // 5. display the budget on the ui
  };

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
