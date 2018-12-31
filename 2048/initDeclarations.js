(function($) {

    $.fn.prompt_size = function() {
        var size = 0;

        while (size != 4 && size != 8 && size != null)
        {
            size = prompt("Please enter 4 or 8 to play with the desired table");
        }

        if (size == 4 || size == 8) {
            alert("You will play with a table of size " + size + ".");
            return size;
        }
        else {
            alert("You cancelled the start of the game.");
            stop();
        }
    }
    
}(jQuery));

const SIZE = $(window).prompt_size();
const SEP = '_';
const MAIN_TABLE = 'table2048';
const LEFT_ARROW = 37;
const UPPER_ARROW = 38;
const RIGHT_ARROW = 39;
const BOTTOM_ARROW = 40;

var arrayRefEmptyCells = [];
var isLost = false;
var isWon = false;