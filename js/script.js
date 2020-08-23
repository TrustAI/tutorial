 $(document).ready(function() {
    // Init Scrollspy
    $('body').scrollspy({
        target:'#main-nav',
        offset: 100
    });

    // Smooth Scrolling
    $("#main-nav a").on('click', function (event) {
        if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 80
        }, 800, function () {
            // window.location.hash = hash;
        });
        }
    }); 
});
