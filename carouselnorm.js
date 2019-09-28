/*
Solution written by Ryan Wringler.
http://ryanringler.com/blog/2014/08/24/fixed-height-carousel-for-twitter-bootstrap
*/

function carouselNormalization(){
    console.log("function called");
    var items = $(".carousel-item"),
        heights = [],
        tallest;
    console.log(items.length);
    
    if(items.length){
        function normalizeHeights(){
            items.each(function(){
                heights.push($(this).height());
            });
            tallest = Math.max.apply(null, heights);
            items.each(function(){
                $(this).css('min-height', tallest + 'px');
            });
        };

        normalizeHeights();

        $(window).on('resize orientationchange', function(){
            tallest = 0, heights.length = 0;
            items.each(function(){
                $(this).css('min-height', '0');
            });

            normalizeHeights();
        });
    }
}