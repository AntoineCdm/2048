(function($) {


    $.fn.moveOneCaseLeft = function() {
        counter_line = 0;

        while (counter_line < SIZE) {
            counter_col = 1;

            while (counter_col < SIZE) {
                if ($.trim($('#' + counter_line + SEP + (counter_col - 1)).html()) == '')
                {
                    $('#' + counter_line  + SEP + (counter_col - 1)).html($('#' + counter_line + SEP + counter_col).html());
                    $('#' + counter_line + SEP + counter_col).html('');
                }
                else if ($.trim($('#' + counter_line + SEP + (counter_col - 1)).html()) == 
                $.trim($('#' + counter_line + SEP + counter_col).html())) {
                    $('#' + counter_line + SEP + (counter_col - 1)).html($('#' + counter_line + SEP + (counter_col - 1)).html()*2);
                    $('#' + counter_line + SEP + counter_col).html('');
                }
                counter_col++;
            }
            counter_line++;
        }
    }

    $.fn.moveOneCaseUp = function() {
        counter_line = 1;

        while (counter_line < SIZE) {
            counter_col = 0;

            while (counter_col < SIZE) {
                if ($.trim($('#' + (counter_line - 1) + SEP + counter_col).html()) == '')
                {
                    $('#' + (counter_line - 1) + SEP + counter_col).html($('#' + counter_line + SEP + counter_col).html());
                    $('#' + counter_line + SEP + counter_col).html('');
                }
                else if ($.trim($('#' + (counter_line - 1) + SEP + counter_col).html()) == 
                $.trim($('#' + counter_line + SEP + counter_col).html())) {
                    $('#' + (counter_line - 1) + SEP + counter_col).html($('#' + (counter_line - 1) + SEP + counter_col).html()*2);
                    $('#' + counter_line + SEP + counter_col).html('');
                }
                counter_col++;
            }
            counter_line++;
        }
    }

    $.fn.moveOneCaseRight = function() {
        counter_line =  0;

        while (counter_line < SIZE) {
            counter_col = SIZE - 2;

            while (counter_col > - 1) {
                if ($.trim($('#' + counter_line + SEP + (counter_col + 1)).html()) == '')
                {
                    $('#' + counter_line + SEP + (counter_col + 1)).html($('#' + counter_line + SEP + counter_col).html());
                    $('#' + counter_line + SEP + counter_col).html('');
                }
                else if ($.trim($('#' + counter_line + SEP + (counter_col + 1)).html()) == 
                $.trim($('#' + counter_line + SEP + counter_col).html())) {
                    $('#' + counter_line + SEP + (counter_col + 1)).html($('#' + counter_line + SEP + counter_col).html() * 2);
                    $('#' + counter_line + SEP + counter_col).html('');
                }
                counter_col--;
            }
            counter_line++;
        }
    }

    $.fn.moveOneCaseDown = function() {
        counter_line = SIZE - 2;

        while (counter_line > - 1) {
            counter_col = 0;

            while (counter_col < SIZE) {
                if ($.trim($('#' + (counter_line + 1) + SEP + counter_col).html()) == '')
                {
                    $('#' + (counter_line + 1) + SEP + counter_col).html($('#' + counter_line + SEP + counter_col).html());
                    $('#' + counter_line + SEP + counter_col).html('');
                }
                else if ($.trim($('#' + (counter_line + 1) + SEP + counter_col).html()) == 
                $.trim($('#' + counter_line + SEP + counter_col).html())) {
                    $('#' + (counter_line + 1) + SEP + counter_col).html($('#' + (counter_line + 1) + SEP + counter_col).html()*2);
                    $('#' + counter_line + SEP + counter_col).html('');
                }
                counter_col++;
            }
            counter_line--;
        }
    }

    $.fn.moveLeft = function() {
        counter = 0;

        while(counter < SIZE - 1) {
            $(window).moveOneCaseLeft();
            counter++;
        }
    }

    $.fn.moveUp = function() {
        counter = 0;

        while(counter < SIZE - 1) {
            $(window).moveOneCaseUp();
            counter++;
        }
    }

    $.fn.moveRight = function() {
        counter = 0;

        while(counter < SIZE - 1) {
            $(window).moveOneCaseRight();
            counter++;
        }
    }

    $.fn.moveDown = function() {
        counter = 0;

        while(counter < SIZE - 1) {
            $(window).moveOneCaseDown();
            counter++;
        }
    }


}(jQuery));