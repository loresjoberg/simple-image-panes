
$( document ).ready(function() {
    $(".pane-inner").each(function (index) {
        var paneInnerHeight = $(this).height();
        var paneInnerWidth = $(this).width();
        var paneOuterHeight = $(this).closest(".pane-outer").height();
        var paneOuterWidth = $(this).closest(".pane-outer").width();
        $(this).css('top', (paneOuterHeight - paneInnerHeight) / 2 + 'px').css('left', (paneOuterWidth - paneInnerWidth) / 2 + 'px');
    });
});