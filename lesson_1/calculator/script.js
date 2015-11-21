/**
 * Select one element
 * @param selector
 * @returns {Element}
 */
var $ = function (selector) {
    return document.querySelector(selector);
};

/**
 * Select all element
 * @param selector
 * @returns {NodeList}
 */
var $$ = function (selector) {
    return document.querySelectorAll(selector);
};

/**
 * Calculator parameters
 */
var first_number = null;
var action = null;
var isDouble = false;

document.addEventListener("DOMContentLoaded", function () {
    $("input").focus();

    /**
     * Reset button actions
     */
    $("#reset").onclick = function () {
        first_number = action = null;
        $("input").value = null;
        $("input").focus();
    };

    /**
     * Set type double
     */
    $("#dot").onclick = function () {
        if(!isDouble)
        {
            $("input").value += ".";
            isDouble = true;
        }
        $("input").focus();
    };

    /**
     * Set math actions event click
     */
    var mathActionsButton = $$("#math-actions button");
    for(var index in mathActionsButton) {
        mathActionsButton[index].onclick = function () {
            if(this.innerText != "=")
            {
                first_number = $("input").value;
                action = this.innerText;
                $("input").value = null;
            }
            else
            {
                $("input").value = eval(first_number + action + $("input").value);
            }
            $("input").focus();
        }
    }

    /**
     * Set number buttons actions click
     */
    var numberButton = $$("#numbers button");
    for(var index in numberButton) {
        numberButton[index].onclick = function () {
            $("input").value += this.innerText;
        };
        $("input").focus();
    }
});