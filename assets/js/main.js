/**********************************************
MANHATTAN HYDRAULICS
A down to earth product studio.
==============================================

js/main.js
This file contains the main javscript code
to power microinteractions on the site.

NOTE:
I've decided to use jQuery because it's an
easier developer experience for anyone on the
team who might be new to javascript.

**********************************************/

$(document).ready(function () {
  var theme = {
    forestGreen: "#181514",
    cardboardBrown: "#968a87",
    cloudBlue: "#DEEDFE",
    springWhite: "#f9f5f3",
  };

  var site = {
    animationSettings: {
      speed: 420,
      easing: "easeOutCirc",
    },

    ui: {
      body: $("body"),
      win: $(window),
      panels: $(".panel"),
      headers: $("header"),
      footer: $("footer"),
      leftPanel: {
        el: $(".panel--left"),
        backgroundColor: theme.cardboardBrown,
        color: theme.forestGreen,
      },
      rightPanel: {
        el: $(".panel--right"),
        backgroundColor: theme.cloudBlue,
        color: theme.forestGreen,
      },
    },

    sizes: {},

    ix: {
      handleFooterHover: function () {
        this.closePanel(site.ui.leftPanel.el);
        this.closePanel(site.ui.rightPanel.el)
      },

      handlePanelHover: function (panel) {
        this.openPanel(panel);

        $(panel).is(site.ui.leftPanel.el)
          ? this.closePanel(site.ui.rightPanel.el)
          : this.closePanel(site.ui.leftPanel.el);
      },

      openPanel: function (panel) {
        $(panel).is(site.ui.leftPanel.el)
          ? $(site.ui.body).addClass("left")
          : $(site.ui.body).addClass("right");
        $(panel)
          .animate(
            {
              "padding-top": 0,
            },
            {
              easing: site.animationSettings.easing,
              duration: site.animationSettings.speed,
            }
          )
          .find($("main"))
          .show()
          .animate(
            {
              "margin-top": 0,
              opacity: 1,
            },
            {
              duration: site.animationSettings.speed,
            }
          );
      },

      closePanel: function (panel) {
        $(panel).is(site.ui.leftPanel.el)
          ? $(site.ui.body).removeClass("left")
          : $(site.ui.body).removeClass("right");
        $(panel)
          .animate(
            {
              "padding-top": site.sizes.headerHeight,
            },
            {
              duration: site.animationSettings.speed,
            }
          )
          .find($("main"))
          .animate(
            {
              "margin-top": 18,
              opacity: 0,
            },
            {
              duration: site.animationSettings.speed,
              complete: function () {
                $(this).hide();
              },
            }
          );
      },
    },

    getSizes: function () {
      site.sizes.winWidth = site.ui.win.width();
      site.sizes.winHeight = site.ui.win.height();
      site.sizes.headerHeight =
        site.sizes.winHeight -
        (site.ui.footer.outerHeight() + site.ui.headers.outerHeight());
    },

    init: function () {
      this.getSizes();
      this.bindEvents();
      this.setPositions();
    },

    resizeTimer: null,
    resize: function () {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(function () {
        site.getSizes();
        // site.helpers.checkMediaQuery();
        // Need to implement helper to switch to mobile
        // interactions in site.ix.mobile or something
      }, 250);
    },

    bindEvents: function () {
      $.each([site.ui.leftPanel.el, site.ui.rightPanel.el], function () {
        $(this).on("mouseenter", function () {
          site.ix.handlePanelHover(this);
        });
      });

      $(site.ui.footer).on("mouseenter", function () {
        site.ix.handleFooterHover();
      });

      this.ui.win.on("resize", this.resize);
    },

    setPositions: function () {
      site.ui.panels.css({
        "padding-top": site.sizes.headerHeight,
      });
    },
  };

  site.init();
});
