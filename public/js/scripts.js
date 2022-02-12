/*--Full Page Slider--*/
    
$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        loop:true
    });
});

/*--For-Product-SLider--*/
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});

/*--For-make-Menu-responsive--*/
$(document).ready(function() {
    $('.toggle').click(function() {
        $('.toggle').toggleClass('active')
        $('.navigation').toggleClass('active')
    })
});