(function($) {

    $(window).createTable();

    $(window).fillEmtpyCell(arrayRefEmptyCells);
    $(window).fillEmtpyCell(arrayRefEmptyCells);

    $(window).keydown(function(e) {

        if(isLost != true) {

            switch(e.which) {
                
                /* left */
                case LEFT_ARROW:
                    $(window).moveLeft();
                    $(window).fillEmtpyCell(arrayRefEmptyCells);
                    isLost = $(window).isLost();
                    isWon =  $(window).isWon();
                    break;

                /* up */
                case UPPER_ARROW:
                    $(window).moveUp();
                    $(window).fillEmtpyCell(arrayRefEmptyCells);
                    isLost = $(window).isLost();
                    isWon =  $(window).isWon();
                    break;

                /* right */
                case RIGHT_ARROW:
                    $(window).moveRight();
                    $(window).fillEmtpyCell(arrayRefEmptyCells);
                    isLost = $(window).isLost();
                    isWon =  $(window).isWon();
                    break;

                /* bottom */
                case BOTTOM_ARROW:
                    $(window).moveDown();
                    $(window).fillEmtpyCell(arrayRefEmptyCells);
                    isLost = $(window).isLost();
                    isWon =  $(window).isWon();
                    break;

                case 84:
                    $(window).testCantMove();
            }
        }
    })

}(jQuery));