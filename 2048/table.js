(function($) {

    $.fn.createTable = function() {
        document.write('<table id="table2048"');

        counterLine = 0;

        while (counterLine < SIZE) {
            counterCol = 0;

            document.write('<tr>');
            while (counterCol < SIZE) {
                document.write('<td id="' + counterLine + '_' +
                counterCol + '">');
                counterCol++;
            }
            document.write('</tr>');
            counterLine++;
        }

        document.write('</table>');
    }

    $.fn.updateArrayRefEmptyCells = function(arrayRefEmptyCells) {
        arrayRefEmptyCells.length = 0;

        $('#' + MAIN_TABLE + ' td').each(function() {
            if ($.trim($(this).html()) == '') {
                arrayRefEmptyCells.push($(this).attr('id'));
            }
        })
        return arrayRefEmptyCells;
    }

    $.fn.getTwoOrFour = function() {
        var nbr = Math.random();

        if (nbr > 0.1) {
            return 2;
        }
        else {
            return 4;
        }
    }

    $.fn.getNbrBtw0AndCap = function(cap) {
        return Math.floor(Math.random() * cap);
    }
    
    $.fn.fillEmtpyCell = function(arrayRefEmptyCells) {
        $(window).updateArrayRefEmptyCells(arrayRefEmptyCells);

        var indexEmptyCell = $(window).getNbrBtw0AndCap(arrayRefEmptyCells.length);
        var randomNbr = $(window).getTwoOrFour();

        $('#' + arrayRefEmptyCells[indexEmptyCell]).html(randomNbr);
    }


}(jQuery));