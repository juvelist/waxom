// counter plugin
countup('counter__live', $('.counter__live').text());


// carousel plugin
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        767:{
            items:3,
            nav:false
        },
    },
    autoplay:true,
    autoplayTimeout:6000,
    autoplaySpeed:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
});
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});

// tab
$('.projects__taps .projects__link').click(function(event){
    event.preventDefault();

    var that = $(this);

    if ( !that.hasClass('projects__active') ) {

        var tab = $( that.attr('href') ),
            tabParent = that.parents('.projects__taps');

        tabParent.parent('.projects__container').find('> .projects__latest_block:visible').addClass('dn');
        tab.removeClass('dn');

        tabParent.find('.projects__link.projects__active').removeClass('projects__active');
        that.addClass('projects__active');

    }
});