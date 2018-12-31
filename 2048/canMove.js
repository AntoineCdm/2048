(function($) {

    $.fn.canMoveLeft = function() {
        counter_line = 0;

        while (counter_line < SIZE) {
            counter_col = 1;

            while (counter_col < SIZE) {

                if ($.trim($('#' + counter_line + SEP + (counter_col - 1)).html()) == '' || 
                $.trim($('#' + counter_line + SEP + (counter_col - 1)).html()) == 
                $.trim($('#' + counter_line + SEP + counter_col).html()))
                    {
                        return true;
                    }
                    counter_col++;
                }
            counter_line++;
        }
        return false;
    }

    $.fn.canMoveUp = function() {
        counter_line = 1;

        while (counter_line < SIZE) {
            counter_col = 0;

            while (counter_col < SIZE) {
                if ($.trim($('#' + (counter_line - 1) + SEP + counter_col).html()) == '' ||
                $.trim($('#' + (counter_line - 1) + SEP + counter_col).html()) == 
                $.trim($('#' + counter_line + SEP + counter_col).html()))
                {
                    return true;
                }
                counter_col++;
            }
            counter_line++;
        }
        return false;
    }

    $.fn.canMoveRight = function() {
        counter_line =  0;

        while (counter_line < SIZE) {
            counter_col = SIZE - 2;

            while (counter_col > - 1) {
                if ($.trim($('#' + counter_line + SEP + (counter_col + 1)).html()) == '' ||
                $.trim($('#' + counter_line + SEP + (counter_col + 1)).html()) == 
                $.trim($('#' + counter_line + SEP + counter_col).html()))
                {
                    return true;
                }
                counter_col--;
            }
            counter_line++;
        }
        return false;
    }

    $.fn.canMoveDown = function() {
        counter_line = SIZE - 2;

        while (counter_line > - 1) {
            counter_col = 0;

            while (counter_col < SIZE) {
                if ($.trim($('#' + (counter_line + 1) + SEP + counter_col).html()) == '' ||
                $.trim($('#' + (counter_line + 1) + SEP + counter_col).html()) == 
                $.trim($('#' + counter_line + SEP + counter_col).html()))
                {
                    return true;
                }
                counter_col++;
            }
            counter_line--;
        }
        return false;
    }

    $.fn.canMove = function() {
        
        if ($(window).canMoveLeft() == false && $(window).canMoveUp() == false && 
            $(window).canMoveRight() == false && $(window).canMoveDown() == false) {
                return false;
            }
        return true;
    }

    $.fn.testCantMove = function() {
        counter = 1;
        counter_line = 0;

        while (counter_line < SIZE) {
            counter_col = 0;

            while(counter_col < SIZE) {
                $('#' + counter_line + SEP + counter_col).html(counter);
                counter++;
                counter_col++;
            }
            counter_line++;
        }
    }
    
}(jQuery));