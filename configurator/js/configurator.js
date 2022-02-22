/**
 *  GhostlyConsent.js Configurator
 *  v1.0.0
 *
 *  @author Marcos Raudkett 2021
 *  @license MIT (https://opensource.org/licenses/MIT)
*/
$(document).ready(function () {
    //const _gc = ghostlyConsent;
    //_gc.init();

    /** Split */
    var sizes = localStorage.getItem('split-sizes');

    var defaultSizes = [60, 40];
    if (sizes) {
        sizes = JSON.parse(sizes)
    } else {
        sizes = defaultSizes // default sizes
    }

    var instance = Split(["#config-preview", "#config-settings"], {
        elementStyle: function (dimension, size, gutterSize) {
            $(window).trigger('resize');
            return { 'flex-basis': 'calc(' + size + '% - ' + gutterSize + 'px)' }
        },
        gutterStyle: function (dimension, gutterSize) { return { 'flex-basis': gutterSize + 'px' } },
        sizes: sizes,
        onDragEnd: function (sizes) {
            var cusrs = instance.getSizes();
            localStorage.setItem('split-sizes', JSON.stringify(cusrs));
        },
        gutterSize: 3,
        cursor: 'col-resize',
        gutterAlign: 'center'
    });

    var curs = instance.getSizes();
    setPageState();
    /** Split end */

    function new_config() {

    }

    function hide_views() {
        $("a.view-change").closest(".nav-item").removeClass("active");
        var views = $("div[data-view]");
        $.each(views, function(k, v) {
            if(!$(v).hasClass("d-none"))
            {
                $(v).addClass("d-none");
            }
        })
    }   

    function show_view(view) {
        $("div[data-view='"+view+"']").removeClass("d-none");
    }

    function trigger_view(view) {
        hide_views();
        $("div[data-view='" + view + "']").removeClass("d-none");
    }

    $(document.body).on('click', 'a.new-config', function (e) {
        hide_views();
        show_view('new');
    });

    $(document.body).on('click', 'a.view-change', function (e) {
        var view = $(this).attr("data-target");
        trigger_view(view);
        $("a.view-change").closest(".nav-item").removeClass("active");
        $("a.view-change[data-target='"+view+"']").closest(".nav-item").addClass("active");
    });
});

function setPageState() {
    var tabs = JSON.parse(localStorage.getItem('pageState'));
    if (Array.isArray(tabs)) {
        $.each(tabs[0], function (i, e) {
            $("#" + e).trigger("click");
        });
    }
}

$(document.body).on('click', '[data-toggle=tab]', function (e) {
    setTimeout(function () {
        var preview = $("#nav-preview li a.active").attr("id");
        var settings = $("#nav-settings li a.active").attr("id");
        var pagesConfig = [{
            'preview': preview,
            'settings': settings
        }];

        localStorage.setItem('pageState', JSON.stringify(pagesConfig));
    }, 500);
});

$(document.body).on('click', '#config-preview .tab-content', function (e) {
    return false;
    e.preventDefault();
});