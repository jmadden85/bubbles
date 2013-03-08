var bubbleHandler = function () {

    $('.bubble').hover(function() {
        var that = $(this);
        var thatRadius = that.width() / 2;
        that.on('mousemove', function(e) {
            var x = e.offsetX;
            var y = e.offsetY;
            var xCalc = (x - thatRadius) * (x - thatRadius);
            var yCalc = (y - thatRadius) * (y - thatRadius);
            var inCircle = Math.sqrt(xCalc + yCalc) <= thatRadius;

            if ( inCircle ) {
                that.css('cursor', 'pointer');
            } else {
                that.css('cursor', 'default');
            }

        });
    }, function() {
        moused = false
    });

    function bubbleHovered (el) {

    };

}();
