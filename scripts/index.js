(function () {
    $(window).on('load resize scroll', function() {
        $('.general-image-container').each(function() {
            const image = $(this).find('.general-image');

            const windowPosition = $(window).scrollTop(); // Inscreases with scroll
            const screenHeight = $(window).height();
            const imageHeight = image.height();
            const containerPosition = $(this).offset().top;
            const containerHeight = $(this).height();

            const scrollValue = (windowPosition + screenHeight - containerPosition) / (screenHeight + containerHeight);
            const imagePositionMax = imageHeight - containerHeight;
            const position = Math.max(scrollValue, 0) * imagePositionMax;

            image.animate({ top: -position }, {duration: 10, fill: "forwards"});
        });
    });
})();
