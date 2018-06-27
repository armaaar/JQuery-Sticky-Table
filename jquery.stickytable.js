jQuery(document).on('stickyTable', function() {
    if(navigator.userAgent.match(/Trident\/7\./)) {
      $('.sticky-table').on("mousewheel", function (event) {
        console.log(event);
          event.preventDefault();
          var wd = event.originalEvent.wheelDelta;
          var csp = $(this).scrollTop();
          $(this).scrollTop(csp - wd);
      });
    }
    $(".sticky-table").scroll(function() {
        $(this).find("table tr.sticky-header th").css('top', $(this).scrollTop());
        $(this).find("table tr.sticky-header td").css('top', $(this).scrollTop());
        var maxScroll = $(this).find("table").prop("clientHeight") - $(this).prop("clientHeight");
        $(this).find("table tr.sticky-footer th").css('bottom', maxScroll - $(this).scrollTop());
        $(this).find("table tr.sticky-footer td").css('bottom', maxScroll - $(this).scrollTop());
    }).scroll();

    $(".sticky-ltr-cells").scroll(function() {
        $(this).find("table th.sticky-cell").css('left', $(this).scrollLeft());
        $(this).find("table td.sticky-cell").css('left', $(this).scrollLeft());
        var maxScroll = $(this).find("table").prop("clientWidth") - $(this).prop("clientWidth");
        $(this).find("table th.sticky-cell-opposite").css('right', maxScroll - $(this).scrollLeft());
        $(this).find("table td.sticky-cell-opposite").css('right', maxScroll - $(this).scrollLeft());
    }).scroll();
    
    $(".sticky-rtl-cells").scroll(function() {
        var maxScroll = $(this).find("table").prop("clientWidth") - $(this).prop("clientWidth");
        $(this).find("table th.sticky-cell").css('right', maxScroll - $(this).scrollLeft());
        $(this).find("table td.sticky-cell").css('right', maxScroll - $(this).scrollLeft());
        $(this).find("table th.sticky-cell-opposite").css('left', $(this).scrollLeft());
        $(this).find("table td.sticky-cell-opposite").css('left', $(this).scrollLeft());
    }).scroll();
    
    $( window ).resize(function() {
        $(".sticky-table").scroll();
    });
});
$( document ).ready(function(){
    $( document ).trigger( "stickyTable" );
});
