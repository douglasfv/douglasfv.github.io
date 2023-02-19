// sequential order
// advances 3 segments each click
var _target, _deg = 0;
function ordSequential() {
    // order : 1,4,7,2,5,8,3,6 ... then loops
    return _deg = _deg + (45*3) + 1080;
};
jQuery(document).ready(function ($) {
    $(".skills-wheel .btn").on("click", function (e) {
        // select algorithm sequential, random or preset :
        ordSequential();
        _target = (_deg - (360 * parseInt(_deg / 360))) / 45;
        // start animation
        // reset opacity of all segments to 1
        $(".fancybox").parent("li").velocity({
            opacity: 1
        }, {
            duration: 100,
            complete: function () {
                $(".wheel").velocity({
                    rotateZ: "-" + _deg + "deg"
                }, {
                    duration: 3000,
                    complete: function (elements) {
                        // after spinning animation is completed, set opacity of target segment's parent
                        $(".fancybox").parent("li").eq(_target).velocity({
                            opacity: 0.4
                        }, {
                            duration: 100,
                            // after opacity is completed, fire targeted segment in fancybox
                            complete: function () {
                                $(".fancybox").eq(_target).trigger("click");
                            } // third animation completed
                        }); // nested velocity 2
                    } // second animation completed
                }); // nested velocity 1
            } // first animation completed
        }); // velocity
        return false;
    }); // click

    // initialize fancybox
    $(".fancybox").fancybox({
        maxWidth: "85%"
    });
}); // ready




