!(function (n) {
  "use strict";
  n("html");
  var e,
    t,
    s,
    a,
    i = n("body"),
    o = !1,
    l = n(".menu-toggler"),
    d = n(".site-menu-body"),
    c = n(".btn-back-to-top"),
    r = n(".btn-close"),
    h = n(".home-content").attr("id"),
    u = n(".side-content"),
    f = n(".side-content-inner");
  function m() {
    return Math.max(n(window).width(), window.innerWidth);
  }
  function v() {
    return Math.max(n(window).height(), window.innerHeight);
  }
  function p() {
    var e;
    0 < !u.length ||
      o ||
      (992 <= m()
        ? ((e = parseInt(f.innerHeight(), 10)),
          u.hasClass("show") ? u.css("height", e) : u.css("height", v()),
          setTimeout(function () {
            i.addClass("side-layout");
          }, 20))
        : (i.removeClass("side-content-opened side-layout scrolled scrolled-0"),
          r.removeClass("show"),
          u.removeClass("show"),
          u.css("height", ""),
          n(".sidenav li a").removeClass("active"),
          n('.sidenav a[href="' + h + '"]').addClass("active"),
          0 < n(window).scrollTop() ? C("resize") : C()));
  }
  function w(e) {
    if (!(0 < !n(e).length))
      if (992 <= m()) {
        if (o) return;
        var t;
        n(e).hasClass("home-content")
          ? ((o = !0),
            i.removeClass("side-content-opened"),
            r.removeClass("show"),
            c.removeClass("show"),
            u.removeClass("show"),
            n(".sidenav li a").removeClass("active"),
            n('.sidenav a[href="' + e + '"]').addClass("active"),
            C(),
            setTimeout(function () {
              n(window).scrollTop(0), u.css("height", v()), (o = !1);
            }, 820))
          : u.hasClass("show") && 0 < n(e).length && 0 < u.find(e).length
            ? (b(
              (s = parseInt(
                Math.max(
                  document.querySelector(e).offsetTop,
                  n(e).offset().top
                ),
                10
              ))
            ),
              n(this).blur())
            : ((o = !0),
              (t = parseInt(f.innerHeight(), 10)),
              n(window).scrollTop(0),
              i.addClass("side-content-opened"),
              r.addClass("show"),
              u.addClass("show"),
              u.css("height", t),
              n(".sidenav li a").removeClass("active"),
              n('.sidenav a[href="' + e + '"]').addClass("active"),
              C("side-content"),
              0 ===
                (s = parseInt(
                  Math.max(
                    document.querySelector(e).offsetTop,
                    n(e).offset().top
                  ),
                  10
                )) && 0 === n(window).scrollTop()
                ? (o = !1)
                : setTimeout(function () {
                  b(s), (o = !1);
                }, 800));
      } else {
        var s;
        b(
          (s = parseInt(
            Math.max(document.querySelector(e).offsetTop, n(e).offset().top),
            10
          ))
        ),
          n(this).blur();
      }
  }
  function g() {
    if (0 < n(window).scrollTop()) {
      if (i.hasClass("scrolled")) return;
      i.addClass("scrolled").removeClass("scrolled-0"), C("scrolled");
    } else
      i.removeClass("scrolled").addClass("scrolled-0"),
        i.hasClass("side-content-opened") ? C("side-content") : C();
  }
  function C(e) {
    var t;
    (a === e && "" != e && null != e && "resize" != e) ||
      ((t = n(window).scrollTop()),
        "scrolled" === e || ("resize" === e && 0 < t)
          ? n("[data-menu-scrolled]").each(function () {
            (n(this).hasClass("site-logo") &&
              i.hasClass("side-content-opened")) ||
              (n(this).removeClass(
                n(this).attr("data-menu-base"),
                n(this).attr("data-menu-side-content")
              ),
                n(this).addClass(n(this).attr("data-menu-scrolled")));
          })
          : "side-content" === e
            ? n("[data-menu-side-content]").each(function () {
              n(this).removeClass(
                n(this).attr("data-menu-base"),
                n(this).attr("data-menu-scrolled")
              ),
                n(this).addClass(n(this).attr("data-menu-side-content"));
            })
            : (n("[data-menu-scrolled]").each(function () {
              n(this).removeClass(n(this).attr("data-menu-scrolled"));
            }),
              n("[data-menu-side-content]").each(function () {
                n(this).removeClass(n(this).attr("data-menu-side-content"));
              }),
              n("[data-menu-base]").each(function () {
                n(this).addClass(n(this).attr("data-menu-base"));
              })),
        (a = e));
  }
  function b(e) {
    n(window).scrollTo(e, 800);
  }
  function y() {
    var e;
    0 < c.length &&
      ((e = n(window).scrollTop()),
        i.hasClass("flyer-animated") && (e = $flyerInner.scrollTop()),
        400 < e ? c.addClass("show") : c.removeClass("show"));
  }
  function k() {
    var e = document.querySelectorAll('[data-toggle="typed"]');
    "undefined" != typeof Typed &&
      e &&
      [].forEach.call(e, function (e) {
        var t, s, a;
        (s = (s = (t = e).dataset.options) ? JSON.parse(s) : {}),
          (a = Object.assign(
            { typeSpeed: 40, backSpeed: 40, backDelay: 3e3, loop: !0 },
            s
          )),
          new Typed(t, a);
      });
  }
  function T() {
    var e = n(".slider");
    0 < e.length &&
      (e.hasClass("slick-initialized") ||
        e.slick({
          slidesToShow: 1,
          infinite: !0,
          nextArrow:
            '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
          prevArrow:
            '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        }),
        m() <= 1199 &&
        e.hasClass("slick-initialized") &&
        e.hasClass("slick-destroy-xl") &&
        e.slick("unslick"),
        m() <= 991 &&
        e.hasClass("slick-initialized") &&
        e.hasClass("slick-destroy-lg") &&
        e.slick("unslick"),
        m() <= 767 &&
        e.hasClass("slick-initialized") &&
        e.hasClass("slick-destroy-md") &&
        e.slick("unslick"),
        m() <= 575 &&
        e.hasClass("slick-initialized") &&
        e.hasClass("slick-destroy-sm") &&
        e.slick("unslick"));
  }
  (e = document.documentElement),
    (t = document.body),
    ((s = document.createElement("div")).className = "body-overflow-measure"),
    t.appendChild(s),
    "visible" !== window.getComputedStyle(e).overflowY &&
      "hidden" !== window.getComputedStyle(e).overflowY &&
      e.scrollHeight > e.clientHeight
      ? (e.style.overflowY = "scroll")
      : "visible" !== window.getComputedStyle(t).overflowY &&
      "hidden" !== window.getComputedStyle(t).overflowY &&
      t.scrollHeight > t.clientHeight &&
      (t.style.overflowY = "scroll"),
    t.removeChild(s),
    window.addEventListener("load", function () {
      document.querySelector("body").classList.add("loaded");
    }),
    n(document).ready(function (e) {
      var t, s, a, o;
      e(window).scrollTop(0),
        p(),
        n(document).on(
          "click",
          'a.scrollto, .site-menu a[href^="#"]',
          function (e) {
            var t;
            return (
              "" !== this.hash &&
              "#!" !== this.hash &&
              0 < n(this.hash).length &&
              "" !== (t = this.hash) &&
              (e.preventDefault(),
                0 < n(t).length && 0 < u.length && 992 <= m()
                  ? w(t)
                  : b(
                    parseInt(
                      Math.max(
                        document.querySelector(t).offsetTop,
                        n(t).offset().top
                      ),
                      10
                    )
                  ),
                n(this).blur()),
              !1
            );
          }
        ),
        n(document).on("click", ".btn-back-to-top", function (e) {
          e.preventDefault(), b(0), n(this).blur();
        }),
        n(document).on("click", ".menu-toggler", function (e) {
          e.preventDefault(),
            l.hasClass("open")
              ? (l.removeClass("open"), d.removeClass("show"))
              : (l.addClass("open"), d.addClass("show")),
            n(this).blur();
        }),
        n(document).on("click touchstart", function (e) {
          d.is(e.target) ||
            n(e.target).closest(".site-menu").hasClass("site-menu") ||
            n(e.target).hasClass("menu-toggler") ||
            (l.hasClass("open") &&
              (l.removeClass("open"), d.removeClass("show")));
        }),
        g(),
        y(),
        (t = n(".bg-image-holder")).length &&
        t.each(function () {
          var e = n(this),
            t = e.children("img").attr("src");
          e.css("background-image", "url(" + t + ")")
            .children("img")
            .hide();
        }),
        i.hasClass("mobile") && n(".video-wrapper").css("display", "none"),
        0 < (s = n(".countdown[data-countdown]")).length &&
        s.each(function () {
          var t = n(this),
            e = t.data("countdown");
          t.countdown(e, function (e) {
            t.html(
              e.strftime(
                '<div class="countdown-container row"> <div class="col-6 col-sm-auto"><div class="countdown-item"><div class="number">%-D</div><span class="title">Day%!d</span></div></div><div class="col-6 col-sm-auto"><div class="countdown-item"><div class="number">%H</div><span class="title">Hours</span></div></div><div class="col-6 col-sm-auto"><div class="countdown-item"><div class="number">%M</div><span class="title">Minutes</span></div></div><div class="col-6 col-sm-auto"><div class="countdown-item"><div class="number">%S</div><span class="title">Seconds</span></div></div></div>'
              )
            );
          });
        }),

        n('[data-toggle="tooltip"]').tooltip(),
        n('[data-toggle="popover"]').popover(),
        k(),
        T();
    }),
    n(window).on("scroll", function () {
      g(), y();
    }),
    window.addEventListener("load", function () {
      var e;
      p(),
        0 < !u.length ||
        ("#" !== (e = window.location.hash ? window.location.hash : "") &&
          "#!" !== e &&
          0 < n(e).length &&
          w(e));
    }),
    n(window).on("resize", function () {
      g(), y(), T(), setTimeout(p(), 20);
    });
})(jQuery);
