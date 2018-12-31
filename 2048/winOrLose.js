(function($) {

    $.fn.isLost = function() {
        if (!$(window).canMove()) {
            alert('You lost.');
            return true;
        }
        else {
            return false;
        }
    }

    $.fn.isWon = function() {

        if (isWon == true) {
            return true;
        }

        counter_line = 0;

        while (counter_line < SIZE) {
            counter_col = 0;

            while(counter_col < SIZE) {
                if ($('#' + counter_line + SEP + counter_col).html() == '2048' && isWon != true) {
                    alert('Incredible, you won!');
                    return true;
                }
                counter_col++;
            }
            counter_line++;
        }
        return false;
    }

}(jQuery));