jQuery(function($) {
    $(".sticky-headers").scroll(function() {
        $(this).find("table tr.sticky-row th").css('top', $(this).scrollTop());
        $(this).find("table tr.sticky-row td").css('top', $(this).scrollTop());
    });
    $(".sticky-ltr-cells").scroll(function() {
        $(this).find("table th.sticky-cell").css('left', $(this).scrollLeft());
        $(this).find("table td.sticky-cell").css('left', $(this).scrollLeft());
    });
    $(".sticky-rtl-cells").scroll(function() {
        var maxScroll = $(this).find("table").prop("clientWidth") - $(this).prop("clientWidth");
        $(this).find("table th.sticky-cell").css('right', maxScroll - $(this).scrollLeft());
        $(this).find("table td.sticky-cell").css('right', maxScroll - $(this).scrollLeft());
    });
});
