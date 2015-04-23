/*global window, jQuery*/
/**
 * whpTooltip - jQuery Plugin
 * Simple tooltip to use on Whirlpool web site or related projects
 * 
 * Company: Whirlpool Corp / BoszDigital
 * 
 * @author Ariel Ibarra Bustos
 * @version 1.0 
 * @date Nov 1 2012
 * @requires jQuery v1.4.2+
 * 
 */
(function (w, $) {
    'use strict';
    /* var debug = true,
     * log = function (msg) {if (debug) { console.log(msg); } };
     */
    var opt = {},
        templates = {
            container: '<div id="whptooltip_outer" style="display:none;height:auto;"></div>',
            title: '<h4 class="whptooltip_title"></h4>',
            content: '<p class="whptooltip_content"></p>',
            arrowContainer: '<div class="whptooltip_downarrow"></div>',
            close: '<div class="whpTooltip_close"></div>'
        },
        tooltip = {
            init: function (element$) {
                element$.each(function () {
                    if (opt.autoHide === true) {
                        $(this).mouseover(function (e) {
                            e.preventDefault();
                            tooltip.build($(this));
                        });
                    } else {
                        $(this).click(function (e) {
                            e.preventDefault();
                            if ((w.whpTooltip_active === undefined) || (w.whpTooltip_active === false)) {
                                tooltip.build($(this));
                                w.whpTooltip_element = this;
                            } else if (w.whpTooltip_active === true) {
                                if (w.whpTooltip_element === this) {
                                    tooltip.hide();
                                } else if ($(this).hasClass('whpTooltip')) {
                                    w.whpTooltip_element = this;
                                    tooltip.build($(this));
                                }
                            }
                            w.setTimeout(function () {
                                $('body').one('click', function () {
                                    if (w.whpTooltip_active === true) {
                                        tooltip.hide();
                                    }
                                });
                            }, 100);
                            e.stopPropagation();
                        });
                    }
                });
            },
            build: function (e$) {
                var onContainer, onLink, content, title$, content$, arrow$, closeBtn$, container$;
                this.hide();
                onContainer = false;
                onLink      = false;
                content = [];
                if (e$.attr(opt.datafld)) {
                    content = e$.attr(opt.datafld).split("::");
                } else {
                    content[0] = opt.title;
                    content[1] = opt.content;
                }
                title$      = $(templates.title).html(content[0]);
                content$    = $(templates.content).html(content[1]);
                arrow$      = $(templates.arrowContainer);
                closeBtn$   = $(templates.close);
                container$  = $(templates.container).append(title$).append(closeBtn$).append(content$).append(arrow$);
                if (opt.autoHide) {
                    closeBtn$.remove();
                }
                container$.hover(
                    function () {
                        onContainer = true;
                    },
                    function () {
                        onContainer = false;
                    }
                );
                e$.hover(
                    function () {
                        onLink = true;
                    },
                    function () {
                        onLink = false;
                    }
                );
                if (opt.autoHide === true) {
                    container$.add(e$).mouseleave(function () {
                        w.setTimeout(function () {
                            if (onContainer === false && onLink === false) {
                                tooltip.hide();
                            }
                        }, 300);
                    });
                } else {
                    closeBtn$.click(function () {
                        e$.click();
                    });
                    container$.click(function (e) {
                        e.stopPropagation();
                    });
                }
                $('body').append(container$);
                this.show(e$);
            },
            show: function (e$) {
                w.whpTooltip_active = true;
                $('#whptooltip_outer').css({
                    display : 'block',
                    left    : e$.offset().left,
                    position: 'absolute',
                    width   : opt.width,
                    height  : opt.height
                });
                $('#whptooltip_outer').css({
                    top     : (e$.offset().top - e$.height() - $('#whptooltip_outer').height())
                });
            },
            hide: function () {
                w.whpTooltip_active = false;
                $('#whptooltip_outer').css({
                    display: 'none'
                });
                this.destroy();
            },
            destroy: function () {
                $('#whptooltip_outer').remove();
            }
        };
    $.fn.whpTooltip = function (options) {
        opt = $.extend({
            title    : "title_default",
            content  : "content_default",
            datafld  : "datafld",
            width    : 300,
            height   : 'auto',
            arrowDir : 'down',
            autoHide : true
        }, options);
        tooltip.init($(this));
        return this;
    };
}(window, jQuery));