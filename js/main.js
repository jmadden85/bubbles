var bubbleHandler = function () {

    function whichTransitionEvent(){
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
          'transition':'transitionend',
          'OTransition':'oTransitionEnd',
          'MozTransition':'transitionend',
          'WebkitTransition':'webkitTransitionEnd'
        }

        for ( t in transitions ) {
            if ( el.style[t] !== undefined ) {
                return transitions[t];
            }
        }
    };

    var transitionEnd = whichTransitionEvent();

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

    setTimeout(function() {
        $('.contentPiece').addClass('loaded');
    }, 1200);

    $('.contentPiece').on(transitionEnd, function() {
        var that = $(this);
        that.children('.bubble').css('display', 'none');
        that.addClass('popped');
    });


}();
