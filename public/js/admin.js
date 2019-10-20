/*-----------------------------------------------------------------------------------

    Theme Name: Crizal - Responsive Admin Dashboard Template
    Description: Responsive Admin Dashboard Template
    Author: Chitrakoot Web

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. Page options
        03. Page Elements
        04. Boxed Page
        05. Fixed Header
        06. Sidebar
        07. Accordion menu
        08. Fulscreen Function
        09. Navbar
        10. Right Sidebar
        11. Plugins    
        
    ---------------------------------- */
$(document).ready(function () {
  "use strict"; // Preloader

  $('#preloader').fadeOut('normall', function () {
    $(this).remove();
  }); // Page options

  var page_boxed = false,
      page_sidebar_fixed = false,
      page_sidebar_collapsed = false,
      page_header_fixed = false; // Page Elements

  var body = $('body'),
      page_header = $('.page-header'),
      page_sidebar = $('.page-sidebar'),
      page_content = $('.page-content'); // Boxed Page 

  var boxed_page = function boxed_page() {
    if (page_boxed === true) {
      $('.page-container').addClass('container');
    }

    ;
  }; // Fixed Header


  var fixed_header = function fixed_header() {
    if (page_header_fixed === true) {
      $('body').addClass('page-header-fixed');
    }

    ;
  }; // Sidebar


  var page_sidebar_init = function page_sidebar_init() {
    // Slimscroll
    $('.page-sidebar-inner').slimScroll({
      height: '100%'
    }).mouseover(); // Fixed Sidebar

    var fixed_sidebar = function fixed_sidebar() {
      if (body.hasClass('page-sidebar-fixed') && page_sidebar_fixed === false) {
        page_sidebar_fixed = true;
      }

      ;

      if (page_sidebar_fixed === true) {
        body.addClass('page-sidebar-fixed');
        $('#fixed-sidebar-toggle-button').removeClass('icon-radio_button_unchecked');
        $('#fixed-sidebar-toggle-button').addClass('icon-radio_button_checked');
      }

      ;

      var fixed_sidebar_toggle = function fixed_sidebar_toggle() {
        body.toggleClass('page-sidebar-fixed');

        if (body.hasClass('page-sidebar-fixed')) {
          page_sidebar_fixed = true;
        } else {
          page_sidebar_fixed = false;
        }
      };

      $('#fixed-sidebar-toggle-button').on('click', function () {
        fixed_sidebar_toggle();
        $(this).toggleClass('icon-radio_button_unchecked');
        $(this).toggleClass('icon-radio_button_checked');
        return false;
      });
    }; // Collapsed Sidebar


    var collapsed_sidebar = function collapsed_sidebar() {
      if (page_sidebar_collapsed === true) {
        body.addClass('page-sidebar-collapsed');
      }

      ;

      var collapsed_sidebar_toggle = function collapsed_sidebar_toggle() {
        body.toggleClass('page-sidebar-collapsed');

        if (body.hasClass('page-sidebar-collapsed')) {
          page_sidebar_collapsed = true;
        } else {
          page_sidebar_collapsed = false;
        }

        ;
        $('.page-sidebar-collapsed .page-sidebar .accordion-menu').on({
          mouseenter: function mouseenter() {
            $('.page-sidebar').addClass('fixed-sidebar-scroll');
          },
          mouseleave: function mouseleave() {
            $('.page-sidebar').removeClass('fixed-sidebar-scroll');
          }
        }, 'li');
      };

      $('.page-sidebar-collapsed .page-sidebar .accordion-menu').on({
        mouseenter: function mouseenter() {
          $('.page-sidebar').addClass('fixed-sidebar-scroll');
        },
        mouseleave: function mouseleave() {
          $('.page-sidebar').removeClass('fixed-sidebar-scroll');
        }
      }, 'li');
      $('#collapsed-sidebar-toggle-button').on('click', function () {
        collapsed_sidebar_toggle();
        return false;
      });
    };

    var small_screen_sidebar = function small_screen_sidebar() {
      if ($(window).width() < 768 && $('#fixed-sidebar-toggle-button').hasClass('icon-radio_button_unchecked')) {
        $('#fixed-sidebar-toggle-button').click();
      }

      $(window).on('resize', function () {
        if ($(window).width() < 768 && $('#fixed-sidebar-toggle-button').hasClass('icon-radio_button_unchecked')) {
          $('#fixed-sidebar-toggle-button').click();
        }
      });
      $('#sidebar-toggle-button').on('click', function () {
        body.toggleClass('page-sidebar-visible');
        return false;
      });
      $('#sidebar-toggle-button-close').on('click', function () {
        body.toggleClass('page-sidebar-visible');
        return false;
      });
    };

    fixed_sidebar();
    collapsed_sidebar();
    small_screen_sidebar();
  }; // Accordion menu


  var accordion_menu = function accordion_menu() {
    var select_sub_menus = $('.page-sidebar li:not(.open) .sub-menu'),
        active_page_sub_menu_link = $('.page-sidebar li.active-page > a');
    /*------------------------------------
        Menu Selector
    --------------------------------------*/

    $('.accordion-menu li ul li').parent().addClass('sub-menu');
    $('.accordion-menu li ul').parent().addClass('has-sub');
    var urlparam = window.location.pathname.split('/');
    var menuselctor = window.location.pathname;
    if (urlparam[urlparam.length - 1].length > 0) menuselctor = urlparam[urlparam.length - 1];else menuselctor = urlparam[urlparam.length - 2];
    $('.accordion-menu li').find('a[href="' + menuselctor + '"]').closest('li').addClass('active').parents().eq(1).addClass('active-page');
    $('.accordion-menu .active-page > a').addClass('active');
    $('.has-sub > a').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).next('.sub-menu').slideToggle();
      return $(this).parents().siblings('.has-sub').children('.sub-menu').slideUp().prev('.active').removeClass('active');
    });
  }; // Fulscreen Function


  function toggleFullScreen() {
    if (!document.fullscreenElement && // alternative standard method
    !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  ; // Navbar

  var navbar_init = function navbar_init() {
    $('#toggle-fullscreen').on('click', function () {
      toggleFullScreen();
      return false;
    });
    $('#search-button').on('click', function () {
      body.toggleClass('search-open');

      if (body.hasClass('search-open')) {
        $('.search-form input').focus();
      }
    });
    $('#close-search').on('click', function () {
      body.toggleClass('search-open');
    });
  }; // Right Sidebar


  var right_sidebar = function right_sidebar() {
    $('.right-sidebar-toggle').on('click', function () {
      var sidebarId = $(this).data("sidebar-id");
      $('#' + sidebarId).toggleClass('visible');
    });

    var write_message = function write_message() {
      $(".chat-write form input").on('keypress', function (e) {
        if (e.which === 13 && !$(this).val().length === 0) {
          if ($('.right-sidebar-chat .chat-bubbles .chat-bubble:last-child').hasClass('me')) {
            $('<span class="chat-bubble-text">' + $(this).val() + '</span>').insertAfter(".right-sidebar-chat .chat-bubbles .chat-bubble:last-child span:last-child");
          } else {
            $('<div class="chat-bubble me"><div class="chat-bubble-text-container"><span class="chat-bubble-text">' + $(this).val() + '</span></div></div>').insertAfter(".right-sidebar-chat .chat-bubbles .chat-bubble:last-child");
          }

          ;
          $(this).val('');
        } else if (e.which === 13) {
          return;
        }

        var scrollTo_int = $('.right-sidebar-chat').prop('scrollHeight') + 'px';
        $('.right-sidebar-chat').slimscroll({
          allowPageScroll: true,
          scrollTo: scrollTo_int
        });
      });
    };

    write_message();
  }; // Plugins


  var plugins_init = function plugins_init() {
    // Slimscroll
    $('.slimscroll').slimScroll(); // Uniform (Disable it if you want default check box and radio button)

    var checkBox = $("input[type=checkbox]:not(.js-switch), input[type=radio]:not(.no-uniform)");

    if (checkBox.length > 0) {
      checkBox.each(function () {
        $(this).uniform();
      });
    }

    ;
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
    elems.forEach(function (html) {
      var switchery = new Switchery(html, {
        size: 'small',
        color: '#526069'
      });
    });
  };

  $('.accordion-menu .has-sub.active-page > a').addClass('active');
  page_sidebar_init();
  boxed_page();
  accordion_menu();
  navbar_init();
  right_sidebar();
  plugins_init();
});
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */

(function ($) {
  $.fn.extend({
    slimScroll: function slimScroll(options) {
      var defaults = {
        // width in pixels of the visible scroll area
        width: 'auto',
        // height in pixels of the visible scroll area
        height: '250px',
        // width in pixels of the scrollbar and rail
        size: '7px',
        // scrollbar color, accepts any hex/color value
        color: '#000',
        // scrollbar position - left/right
        position: 'right',
        // distance in pixels between the side edge and the scrollbar
        distance: '0px',
        // default scroll position on load - top / bottom / $('selector')
        start: 'top',
        // sets scrollbar opacity
        opacity: .4,
        // enables always-on mode for the scrollbar
        alwaysVisible: false,
        // check if we should hide the scrollbar when user is hovering over
        disableFadeOut: false,
        // sets visibility of the rail
        railVisible: false,
        // sets rail color
        railColor: '#333',
        // sets rail opacity
        railOpacity: .2,
        // whether  we should use jQuery UI Draggable to enable bar dragging
        railDraggable: true,
        // defautlt CSS class of the slimscroll rail
        railClass: 'slimScrollRail',
        // defautlt CSS class of the slimscroll bar
        barClass: 'slimScrollBar',
        // defautlt CSS class of the slimscroll wrapper
        wrapperClass: 'slimScrollDiv',
        // check if mousewheel should scroll the window if we reach top/bottom
        allowPageScroll: false,
        // scroll amount applied to each mouse wheel step
        wheelStep: 20,
        // scroll amount applied when user is using gestures
        touchScrollStep: 200,
        // sets border radius
        borderRadius: '7px',
        // sets border radius of the rail
        railBorderRadius: '7px'
      };
      var o = $.extend(defaults, options); // do it for every element that matches selector

      this.each(function () {
        var isOvercard,
            isOverBar,
            isDragg,
            queueHide,
            touchDif,
            barHeight,
            percentScroll,
            lastScroll,
            divS = '<div></div>',
            minBarHeight = 30,
            releaseScroll = false; // used in event handlers and for better minification

        var me = $(this); // ensure we are not binding it again

        if (me.parent().hasClass(o.wrapperClass)) {
          // start from last bar position
          var offset = me.scrollTop(); // find bar and rail

          bar = me.siblings('.' + o.barClass);
          rail = me.siblings('.' + o.railClass);
          getBarHeight(); // check if we should scroll existing instance

          if ($.isPlainObject(options)) {
            // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
            if ('height' in options && options.height == 'auto') {
              me.parent().css('height', 'auto');
              me.css('height', 'auto');
              var height = me.parent().parent().height();
              me.parent().css('height', height);
              me.css('height', height);
            } else if ('height' in options) {
              var h = options.height;
              me.parent().css('height', h);
              me.css('height', h);
            }

            if ('scrollTo' in options) {
              // jump to a static point
              offset = parseInt(o.scrollTo);
            } else if ('scrollBy' in options) {
              // jump by value pixels
              offset += parseInt(o.scrollBy);
            } else if ('destroy' in options) {
              // remove slimscroll elements
              bar.remove();
              rail.remove();
              me.unwrap();
              return;
            } // scroll content by the given offset


            scrollContent(offset, false, true);
          }

          return;
        } else if ($.isPlainObject(options)) {
          if ('destroy' in options) {
            return;
          }
        } // optionally set height to the parent's height


        o.height = o.height == 'auto' ? me.parent().height() : o.height; // wrap content

        var wrapper = $(divS).addClass(o.wrapperClass).css({
          position: 'relative',
          overflow: 'hidden',
          width: o.width,
          height: o.height
        }); // update style for the div

        me.css({
          overflow: 'hidden',
          width: o.width,
          height: o.height
        }); // create scrollbar rail

        var rail = $(divS).addClass(o.railClass).css({
          width: o.size,
          height: '100%',
          position: 'absolute',
          top: 0,
          display: o.alwaysVisible && o.railVisible ? 'block' : 'none',
          'border-radius': o.railBorderRadius,
          background: o.railColor,
          opacity: o.railOpacity,
          zIndex: 90
        }); // create scrollbar

        var bar = $(divS).addClass(o.barClass).css({
          background: o.color,
          width: o.size,
          position: 'absolute',
          top: 0,
          opacity: o.opacity,
          display: o.alwaysVisible ? 'block' : 'none',
          'border-radius': o.borderRadius,
          BorderRadius: o.borderRadius,
          MozBorderRadius: o.borderRadius,
          WebkitBorderRadius: o.borderRadius,
          zIndex: 99
        }); // set position

        var posCss = o.position == 'right' ? {
          right: o.distance
        } : {
          left: o.distance
        };
        rail.css(posCss);
        bar.css(posCss); // wrap it

        me.wrap(wrapper); // append to parent div

        me.parent().append(bar);
        me.parent().append(rail); // make it draggable and no longer dependent on the jqueryUI

        if (o.railDraggable) {
          bar.bind("mousedown", function (e) {
            var $doc = $(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;
            $doc.bind("mousemove.slimscroll", function (e) {
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false); // scroll content
            });
            $doc.bind("mouseup.slimscroll", function (e) {
              isDragg = false;
              hideBar();
              $doc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function (e) {
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        } // on rail over


        rail.hover(function () {
          showBar();
        }, function () {
          hideBar();
        }); // on bar over

        bar.hover(function () {
          isOverBar = true;
        }, function () {
          isOverBar = false;
        }); // show on parent mouseover

        me.hover(function () {
          isOvercard = true;
          showBar();
          hideBar();
        }, function () {
          isOvercard = false;
          hideBar();
        }); // support for mobile

        me.bind('touchstart', function (e, b) {
          if (e.originalEvent.touches.length) {
            // record where touch started
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });
        me.bind('touchmove', function (e) {
          // prevent scrolling the page if necessary
          if (!releaseScroll) {
            e.originalEvent.preventDefault();
          }

          if (e.originalEvent.touches.length) {
            // see how far user swiped
            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep; // scroll content

            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        }); // set up initial height

        getBarHeight(); // check start position

        if (o.start === 'bottom') {
          // scroll content to bottom
          bar.css({
            top: me.outerHeight() - bar.outerHeight()
          });
          scrollContent(0, true);
        } else if (o.start !== 'top') {
          // assume jQuery selector
          scrollContent($(o.start).position().top, null, true); // make sure bar stays hidden

          if (!o.alwaysVisible) {
            bar.hide();
          }
        } // attach scroll events


        attachWheel(this);

        function _onWheel(e) {
          // use mouse wheel only when mouse is over
          if (!isOvercard) {
            return;
          }

          var e = e || window.event;
          var delta = 0;

          if (e.wheelDelta) {
            delta = -e.wheelDelta / 120;
          }

          if (e.detail) {
            delta = e.detail / 3;
          }

          var target = e.target || e.srcTarget || e.srcElement;

          if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          } // stop window scroll


          if (e.preventDefault && !releaseScroll) {
            e.preventDefault();
          }

          if (!releaseScroll) {
            e.returnValue = false;
          }
        }

        function scrollContent(y, isWheel, isJump) {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();

          if (isWheel) {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight(); // move bar, make sure it doesn't go out

            delta = Math.min(Math.max(delta, 0), maxTop); // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity

            delta = y > 0 ? Math.ceil(delta) : Math.floor(delta); // scroll the scrollbar

            bar.css({
              top: delta + 'px'
            });
          } // calculate actual scroll amount


          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump) {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({
              top: offsetTop + 'px'
            });
          } // scroll content


          me.scrollTop(delta); // fire scrolling event

          me.trigger('slimscrolling', ~~delta); // ensure bar is visible

          showBar(); // trigger hide when scroll is stopped

          hideBar();
        }

        function attachWheel(target) {
          if (window.addEventListener) {
            target.addEventListener('DOMMouseScroll', _onWheel, false);
            target.addEventListener('mousewheel', _onWheel, false);
          } else {
            document.attachEvent("onmousewheel", _onWheel);
          }
        }

        function getBarHeight() {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max(me.outerHeight() / me[0].scrollHeight * me.outerHeight(), minBarHeight);
          bar.css({
            height: barHeight + 'px'
          }); // hide scrollbar if content is not long enough

          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({
            display: display
          });
        }

        function showBar() {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide); // when bar reached top or bottom

          if (percentScroll == ~~percentScroll) {
            //release wheel
            releaseScroll = o.allowPageScroll; // publish approporiate event

            if (lastScroll != percentScroll) {
              var msg = ~~percentScroll == 0 ? 'top' : 'bottom';
              me.trigger('slimscroll', msg);
            }
          } else {
            releaseScroll = false;
          }

          lastScroll = percentScroll; // show only when required

          if (barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }

          bar.stop(true, true).fadeIn('fast');

          if (o.railVisible) {
            rail.stop(true, true).fadeIn('fast');
          }
        }

        function hideBar() {
          // only hide when options allow it
          if (!o.alwaysVisible) {
            queueHide = setTimeout(function () {
              if (!(o.disableFadeOut && isOvercard) && !isOverBar && !isDragg) {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }
      }); // maintain chainability

      return this;
    }
  });
  $.fn.extend({
    slimscroll: $.fn.slimScroll
  });
})(jQuery);

!function (e, t, n) {
  "use strict";

  function s(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return e.prop ? e.prop.apply(e, t) : e.attr.apply(e, t);
  }

  function a(e, t, n) {
    var s, a;

    for (s in n) {
      n.hasOwnProperty(s) && (a = s.replace(/ |$/g, t.eventNamespace), e.bind(a, n[s]));
    }
  }

  function i(e, t, n) {
    a(e, n, {
      focus: function focus() {
        t.addClass(n.focusClass);
      },
      blur: function blur() {
        t.removeClass(n.focusClass), t.removeClass(n.activeClass);
      },
      mouseenter: function mouseenter() {
        t.addClass(n.hoverClass);
      },
      mouseleave: function mouseleave() {
        t.removeClass(n.hoverClass), t.removeClass(n.activeClass);
      },
      "mousedown touchbegin": function mousedownTouchbegin() {
        e.is(":disabled") || t.addClass(n.activeClass);
      },
      "mouseup touchend": function mouseupTouchend() {
        t.removeClass(n.activeClass);
      }
    });
  }

  function r(e, t) {
    e.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass);
  }

  function u(e, t, n) {
    n ? e.addClass(t) : e.removeClass(t);
  }

  function l(e, t, n) {
    setTimeout(function () {
      var s = "checked",
          a = t.is(":" + s);
      t.prop ? t.prop(s, a) : a ? t.attr(s, s) : t.removeAttr(s), u(e, n.checkedClass, a);
    }, 1);
  }

  function o(e, t, n) {
    u(e, n.disabledClass, t.is(":disabled"));
  }

  function c(e, t, n) {
    switch (n) {
      case "after":
        return e.after(t), e.next();

      case "before":
        return e.before(t), e.prev();

      case "wrap":
        return e.wrap(t), e.parent();
    }

    return null;
  }

  function d(e, n, a) {
    var i, r, u;
    return a || (a = {}), a = t.extend({
      bind: {},
      divClass: null,
      divWrap: "wrap",
      spanClass: null,
      spanHtml: null,
      spanWrap: "wrap"
    }, a), i = t("<div />"), r = t("<span />"), n.autoHide && e.is(":hidden") && "none" === e.css("display") && i.hide(), a.divClass && i.addClass(a.divClass), n.wrapperClass && i.addClass(n.wrapperClass), a.spanClass && r.addClass(a.spanClass), u = s(e, "id"), n.useID && u && s(i, "id", n.idPrefix + "-" + u), a.spanHtml && r.html(a.spanHtml), i = c(e, i, a.divWrap), r = c(e, r, a.spanWrap), o(i, e, n), {
      div: i,
      span: r
    };
  }

  function f(e, n) {
    var s;
    return n.wrapperClass ? (s = t("<span />").addClass(n.wrapperClass), s = c(e, s, "wrap")) : null;
  }

  function p() {
    var n, s, a, i;
    return i = "rgb(120,2,153)", s = t('<div style="width:0;height:0;color:' + i + '">'), t("body").append(s), a = s.get(0), n = e.getComputedStyle ? e.getComputedStyle(a, "").color : (a.currentStyle || a.style || {}).color, s.remove(), n.replace(/ /g, "") !== i;
  }

  function m(e) {
    return e ? t("<span />").text(e).html() : "";
  }

  function v() {
    return navigator.cpuClass && !navigator.product;
  }

  function h() {
    return void 0 !== e.XMLHttpRequest;
  }

  function C(e) {
    var t;
    return !!e[0].multiple || (t = s(e, "size"), !(!t || t <= 1));
  }

  function b() {
    return !1;
  }

  function y(e, t) {
    var n = "none";
    a(e, t, {
      "selectstart dragstart mousedown": b
    }), e.css({
      MozUserSelect: n,
      msUserSelect: n,
      webkitUserSelect: n,
      userSelect: n
    });
  }

  function w(e, t, n) {
    var s = e.val();
    "" === s ? s = n.fileDefaultHtml : (s = s.split(/[\/\\]+/), s = s[s.length - 1]), t.text(s);
  }

  function g(e, t, n) {
    var s, a;

    for (s = [], e.each(function () {
      var e;

      for (e in t) {
        Object.prototype.hasOwnProperty.call(t, e) && (s.push({
          el: this,
          name: e,
          old: this.style[e]
        }), this.style[e] = t[e]);
      }
    }), n(); s.length;) {
      a = s.pop(), a.el.style[a.name] = a.old;
    }
  }

  function k(e, t) {
    var n;
    n = e.parents(), n.push(e[0]), n = n.not(":visible"), g(n, {
      visibility: "hidden",
      display: "block",
      position: "absolute"
    }, t);
  }

  function x(e, t) {
    return function () {
      e.unwrap().unwrap().unbind(t.eventNamespace);
    };
  }

  var H = !0,
      A = !1,
      W = [{
    match: function match(e) {
      return e.is("a, button, :submit, :reset, input[type='button']");
    },
    apply: function apply(t, n) {
      var u, l, c, f, p;
      return l = n.submitDefaultHtml, t.is(":reset") && (l = n.resetDefaultHtml), f = t.is("a, button") ? function () {
        return t.html() || l;
      } : function () {
        return m(s(t, "value")) || l;
      }, c = d(t, n, {
        divClass: n.buttonClass,
        spanHtml: f()
      }), u = c.div, i(t, u, n), p = !1, a(u, n, {
        "click touchend": function clickTouchend() {
          var n, a, i, r;
          return !p && !t.is(":disabled") && (p = !0, t[0].dispatchEvent ? (n = document.createEvent("MouseEvents"), n.initEvent("click", !0, !0), a = t[0].dispatchEvent(n), t.is("a") && a && (i = s(t, "target"), r = s(t, "href"), i && "_self" !== i ? e.open(r, i) : document.location.href = r)) : t.click(), void (p = !1));
        }
      }), y(u, n), {
        remove: function remove() {
          return u.after(t), u.remove(), t.unbind(n.eventNamespace), t;
        },
        update: function update() {
          r(u, n), o(u, t, n), t.detach(), c.span.html(f()).append(t);
        }
      };
    }
  }, {
    match: function match(e) {
      return e.is(":checkbox");
    },
    apply: function apply(e, t) {
      var n, s, u;
      return n = d(e, t, {
        divClass: t.checkboxClass
      }), s = n.div, u = n.span, i(e, s, t), a(e, t, {
        "click touchend": function clickTouchend() {
          l(u, e, t);
        }
      }), l(u, e, t), {
        remove: x(e, t),
        update: function update() {
          r(s, t), u.removeClass(t.checkedClass), l(u, e, t), o(s, e, t);
        }
      };
    }
  }, {
    match: function match(e) {
      return e.is(":file");
    },
    apply: function apply(e, n) {
      function u() {
        w(e, p, n);
      }

      var l, f, p, m;
      return l = d(e, n, {
        divClass: n.fileClass,
        spanClass: n.fileButtonClass,
        spanHtml: n.fileButtonHtml,
        spanWrap: "after"
      }), f = l.div, m = l.span, p = t("<span />").html(n.fileDefaultHtml), p.addClass(n.filenameClass), p = c(e, p, "after"), s(e, "size") || s(e, "size", f.width() / 10), i(e, f, n), u(), v() ? a(e, n, {
        click: function click() {
          e.trigger("change"), setTimeout(u, 0);
        }
      }) : a(e, n, {
        change: u
      }), y(p, n), y(m, n), {
        remove: function remove() {
          return p.remove(), m.remove(), e.unwrap().unbind(n.eventNamespace);
        },
        update: function update() {
          r(f, n), w(e, p, n), o(f, e, n);
        }
      };
    }
  }, {
    match: function match(e) {
      if (e.is("input")) {
        var t = (" " + s(e, "type") + " ").toLowerCase(),
            n = " color date datetime datetime-local email month number password search tel text time url week ";
        return n.indexOf(t) >= 0;
      }

      return !1;
    },
    apply: function apply(e, t) {
      var n, a;
      return n = s(e, "type"), e.addClass(t.inputClass), a = f(e, t), i(e, e, t), t.inputAddTypeAsClass && e.addClass(n), {
        remove: function remove() {
          e.removeClass(t.inputClass), t.inputAddTypeAsClass && e.removeClass(n), a && e.unwrap();
        },
        update: b
      };
    }
  }, {
    match: function match(e) {
      return e.is(":radio");
    },
    apply: function apply(e, n) {
      var u, c, f;
      return u = d(e, n, {
        divClass: n.radioClass
      }), c = u.div, f = u.span, i(e, c, n), a(e, n, {
        "click touchend": function clickTouchend() {
          void 0 != e.attr("name") ? t.uniform.update(t(':radio[name="' + s(e, "name") + '"]')) : t.uniform.update(e);
        }
      }), l(f, e, n), {
        remove: x(e, n),
        update: function update() {
          r(c, n), l(f, e, n), o(c, e, n);
        }
      };
    }
  }, {
    match: function match(e) {
      return !(!e.is("select") || C(e));
    },
    apply: function apply(e, n) {
      var s, u, l, c;
      return n.selectAutoWidth && k(e, function () {
        c = e.width();
      }), s = d(e, n, {
        divClass: n.selectClass,
        spanHtml: (e.find(":selected:first") || e.find("option:first")).html(),
        spanWrap: "before"
      }), u = s.div, l = s.span, n.selectAutoWidth ? k(e, function () {
        g(t([l[0], u[0]]), {
          display: "block"
        }, function () {
          var e;
          e = l.outerWidth() - l.width(), u.width(c + e), l.width(c);
        });
      }) : u.addClass("fixedWidth"), i(e, u, n), a(e, n, {
        change: function change() {
          l.html(e.find(":selected").html()), u.removeClass(n.activeClass);
        },
        "click touchend": function clickTouchend() {
          var t = e.find(":selected").html();
          l.html() !== t && e.trigger("change");
        },
        keyup: function keyup() {
          l.html(e.find(":selected").html());
        }
      }), y(l, n), {
        remove: function remove() {
          return l.remove(), e.unwrap().unbind(n.eventNamespace), e;
        },
        update: function update() {
          n.selectAutoWidth ? (t.uniform.restore(e), e.uniform(n)) : (r(u, n), e[0].selectedIndex = e[0].selectedIndex, l.html(e.find(":selected").html()), o(u, e, n));
        }
      };
    }
  }, {
    match: function match(e) {
      return !(!e.is("select") || !C(e));
    },
    apply: function apply(e, t) {
      var n;
      return e.addClass(t.selectMultiClass), n = f(e, t), i(e, e, t), {
        remove: function remove() {
          e.removeClass(t.selectMultiClass), n && e.unwrap();
        },
        update: b
      };
    }
  }, {
    match: function match(e) {
      return e.is("textarea");
    },
    apply: function apply(e, t) {
      var n;
      return e.addClass(t.textareaClass), n = f(e, t), i(e, e, t), {
        remove: function remove() {
          e.removeClass(t.textareaClass), n && e.unwrap();
        },
        update: b
      };
    }
  }];
  v() && !h() && (H = !1), t.uniform = {
    defaults: {
      activeClass: "active",
      autoHide: !0,
      buttonClass: "button",
      checkboxClass: "checker",
      checkedClass: "checked",
      disabledClass: "disabled",
      eventNamespace: ".uniform",
      fileButtonClass: "action",
      fileButtonHtml: "Choose File",
      fileClass: "uploader",
      fileDefaultHtml: "No file selected",
      filenameClass: "filename",
      focusClass: "focus",
      hoverClass: "hover",
      idPrefix: "uniform",
      inputAddTypeAsClass: !0,
      inputClass: "uniform-input",
      radioClass: "radio",
      resetDefaultHtml: "Reset",
      resetSelector: !1,
      selectAutoWidth: !0,
      selectClass: "selector",
      selectMultiClass: "uniform-multiselect",
      submitDefaultHtml: "Submit",
      textareaClass: "uniform",
      useID: !0,
      wrapperClass: null
    },
    elements: []
  }, t.fn.uniform = function (n) {
    var s = this;
    return n = t.extend({}, t.uniform.defaults, n), A || (A = !0, p() && (H = !1)), H ? (n.resetSelector && t(n.resetSelector).mouseup(function () {
      e.setTimeout(function () {
        t.uniform.update(s);
      }, 10);
    }), this.each(function () {
      var e,
          s,
          a,
          i = t(this);
      if (i.data("uniformed")) return void t.uniform.update(i);

      for (e = 0; e < W.length; e += 1) {
        if (s = W[e], s.match(i, n)) return a = s.apply(i, n), i.data("uniformed", a), void t.uniform.elements.push(i.get(0));
      }
    })) : this;
  }, t.uniform.restore = t.fn.uniform.restore = function (e) {
    e === n && (e = t.uniform.elements), t(e).each(function () {
      var e,
          n,
          s = t(this);
      n = s.data("uniformed"), n && (n.remove(), e = t.inArray(this, t.uniform.elements), e >= 0 && t.uniform.elements.splice(e, 1), s.removeData("uniformed"));
    });
  }, t.uniform.update = t.fn.uniform.update = function (e) {
    e === n && (e = t.uniform.elements), t(e).each(function () {
      var e,
          n = t(this);
      e = n.data("uniformed"), e && e.update(n, e.options);
    });
  };
}(this, jQuery);
