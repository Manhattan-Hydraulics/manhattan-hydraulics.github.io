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
      speed: 240,
      easing: "easeOutCirc",
    },

    settings: {},

    ui: {
      body: $("body"),
      win: $(window),
      panels: $(".panel"),
      headers: $("header"),
      footer: $("footer"),
      leftPanel: {
        el: $(".panel--left"),
        key: "left",
        backgroundColor: theme.cardboardBrown,
        color: theme.forestGreen,
      },
      rightPanel: {
        el: $(".panel--right"),
        key: "right",
        backgroundColor: theme.cloudBlue,
        color: theme.forestGreen,
      },
    },

    sizes: {},

    ix: {
      // handleMouseLeave: function () {
      //   this.closePanel(site.ui.leftPanel.el);
      //   this.closePanel(site.ui.rightPanel.el);
      // },

      handlePanelHover: function (panel) {
        this.openPanel(panel);
      },

      handlePanelLeave: function (panel) {
        this.closePanel(panel);
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
          .stop(true)
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

    checkMediaQuery: function () {
      if (!$(".media-check").length) {
        $("body").append('<div class="media-check"></div>');
      }
      var mediaCheck = $(".media-check").css("text-indent");
      // if (mediaCheck === "10px") {
      //   a.sizes.media = "mobile";
      // } else if (mediaCheck === "20px") {
      //   a.sizes.media = "tablet";
      // } else if (mediaCheck === "30px") {
      //   a.sizes.media = "desktop";
      // } else if (mediaCheck === "40px") {
      //   a.sizes.media = "xl";
      // } else if (mediaCheck === "50px") {
      //   a.sizes.media = "xxl";
      // } else {
      //   a.sizes.media = "unsure";
      // }
      site.settings.screenType =
        $("html").hasClass("mobile") || $("html").hasClass("tablet")
          ? "touch"
          : "mouse";
    },

    init: function () {
      this.checkMediaQuery();
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
        $(this)
          .on("mouseenter", function () {
            site.ix.handlePanelHover(this);
          })
          .on("mouseleave", function () {
            site.ix.handlePanelLeave(this);
          });
      });

      $(site.ui.footer).on("mouseenter", function () {
        $.each([site.ui.leftPanel.el, site.ui.rightPanel.el], function () {
          site.ix.handleMouseLeave(this);
        });
      });

      $(site.ui.body).on("mouseleave", function () {
        $.each([site.ui.leftPanel.el, site.ui.rightPanel.el], function () {
          site.ix.handleMouseLeave(this);
        });
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
