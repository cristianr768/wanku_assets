!(function (u) {
    function a(e, n) {
        var e = u(e),
            a = this,
            o = 'li:has([data-toggle="tab"])',
            s = [],
            r = u.extend({}, u.fn.bootstrapWizard.defaults, n),
            l = null,
            d = null;
        function t(n) {
            var t = d.find(o),
                i = t.index(u(n.currentTarget).parent(o)),
                e = u(t[i]);
            if (r.onTabClick && "function" == typeof r.onTabClick && !1 === r.onTabClick(l, d, a.currentIndex(), i, e)) return !1;
        }
        function i(n) {
            var t = u(n.target).parent(),
                i = d.find(o).index(t);
            return !t.hasClass("disabled") && (!r.onTabChange || "function" != typeof r.onTabChange || !1 !== r.onTabChange(l, d, a.currentIndex(), i)) && ((l = t), void a.fixNavigationButtons());
        }
        (this.rebindClick = function (n, t) {
            n.unbind("click", t).bind("click", t);
        }),
            (this.fixNavigationButtons = function () {
                if (
                    (l.length || (d.find("a:first").tab("show"), (l = d.find(o + ":first"))),
                    u(r.previousSelector, e).toggleClass("disabled", a.firstIndex() >= a.currentIndex()),
                    u(r.nextSelector, e).toggleClass("disabled", a.currentIndex() >= a.navigationLength()),
                    u(r.nextSelector, e).toggleClass("hidden", a.currentIndex() >= a.navigationLength() && 0 < u(r.finishSelector, e).length),
                    u(r.lastSelector, e).toggleClass("hidden", a.currentIndex() >= a.navigationLength() && 0 < u(r.finishSelector, e).length),
                    u(r.finishSelector, e).toggleClass("hidden", a.currentIndex() < a.navigationLength()),
                    u(r.backSelector, e).toggleClass("disabled", 0 == s.length),
                    u(r.backSelector, e).toggleClass("hidden", a.currentIndex() >= a.navigationLength() && 0 < u(r.finishSelector, e).length),
                    a.rebindClick(u(r.nextSelector, e), a.next),
                    a.rebindClick(u(r.previousSelector, e), a.previous),
                    a.rebindClick(u(r.lastSelector, e), a.last),
                    a.rebindClick(u(r.firstSelector, e), a.first),
                    a.rebindClick(u(r.finishSelector, e), a.finish),
                    a.rebindClick(u(r.backSelector, e), a.back),
                    r.onTabShow && "function" == typeof r.onTabShow && !1 === r.onTabShow(l, d, a.currentIndex()))
                )
                    return !1;
            }),
            (this.next = function (n) {
                if (e.hasClass("last")) return !1;
                if (r.onNext && "function" == typeof r.onNext && !1 === r.onNext(l, d, a.nextIndex())) return !1;
                var t = a.currentIndex(),
                    i = a.nextIndex();
                i > a.navigationLength() || (s.push(t), d.find(o + (r.withVisible ? ":visible" : "") + ":eq(" + i + ") a").tab("show"));
            }),
            (this.previous = function (n) {
                if (e.hasClass("first")) return !1;
                if (r.onPrevious && "function" == typeof r.onPrevious && !1 === r.onPrevious(l, d, a.previousIndex())) return !1;
                var t = a.currentIndex(),
                    i = a.previousIndex();
                i < 0 || (s.push(t), d.find(o + (r.withVisible ? ":visible" : "") + ":eq(" + i + ") a").tab("show"));
            }),
            (this.first = function (n) {
                return (!r.onFirst || "function" != typeof r.onFirst || !1 !== r.onFirst(l, d, a.firstIndex())) && !e.hasClass("disabled") && (s.push(a.currentIndex()), void d.find(o + ":eq(0) a").tab("show"));
            }),
            (this.last = function (n) {
                return (!r.onLast || "function" != typeof r.onLast || !1 !== r.onLast(l, d, a.lastIndex())) && !e.hasClass("disabled") && (s.push(a.currentIndex()), void d.find(o + ":eq(" + a.navigationLength() + ") a").tab("show"));
            }),
            (this.finish = function (n) {
                r.onFinish && "function" == typeof r.onFinish && r.onFinish(l, d, a.lastIndex());
            }),
            (this.back = function () {
                if (0 == s.length) return null;
                var n = s.pop();
                if (r.onBack && "function" == typeof r.onBack && !1 === r.onBack(l, d, n)) return s.push(n), !1;
                e.find(o + ":eq(" + n + ") a").tab("show");
            }),
            (this.currentIndex = function () {
                return d.find(o + (r.withVisible ? ":visible" : "")).index(l);
            }),
            (this.firstIndex = function () {
                return 0;
            }),
            (this.lastIndex = function () {
                return a.navigationLength();
            }),
            (this.getIndex = function (n) {
                return d.find(o + (r.withVisible ? ":visible" : "")).index(n);
            }),
            (this.nextIndex = function () {
                for (var n = this.currentIndex(), t = null; n++, (t = d.find(o + (r.withVisible ? ":visible" : "") + ":eq(" + n + ")")) && t.hasClass("disabled"); );
                return n;
            }),
            (this.previousIndex = function () {
                for (var n = this.currentIndex(), t = null; n--, (t = d.find(o + (r.withVisible ? ":visible" : "") + ":eq(" + n + ")")) && t.hasClass("disabled"); );
                return n;
            }),
            (this.navigationLength = function () {
                return d.find(o + (r.withVisible ? ":visible" : "")).length - 1;
            }),
            (this.activeTab = function () {
                return l;
            }),
            (this.nextTab = function () {
                return d.find(o + ":eq(" + (a.currentIndex() + 1) + ")").length ? d.find(o + ":eq(" + (a.currentIndex() + 1) + ")") : null;
            }),
            (this.previousTab = function () {
                return a.currentIndex() <= 0 ? null : d.find(o + ":eq(" + parseInt(a.currentIndex() - 1) + ")");
            }),
            (this.show = function (n) {
                var t = isNaN(n) ? e.find(o + ' a[href="#' + n + '"]') : e.find(o + ":eq(" + n + ") a");
                0 < t.length && (s.push(a.currentIndex()), t.tab("show"));
            }),
            (this.disable = function (n) {
                d.find(o + ":eq(" + n + ")").addClass("disabled");
            }),
            (this.enable = function (n) {
                d.find(o + ":eq(" + n + ")").removeClass("disabled");
            }),
            (this.hide = function (n) {
                d.find(o + ":eq(" + n + ")").hide();
            }),
            (this.display = function (n) {
                d.find(o + ":eq(" + n + ")").show();
            }),
            (this.remove = function (n) {
                var t,
                    i = n[0],
                    e = void 0 !== n[1] && n[1],
                    a = d.find(o + ":eq(" + i + ")");
                e && ((t = a.find("a").attr("href")), u(t).remove()), a.remove();
            }),
            (this.resetWizard = function () {
                u('a[data-toggle="tab"]', d).off("click", t),
                    u('a[data-toggle="tab"]', d).off("show show.bs.tab", i),
                    (d = e.find("ul:first", e)),
                    (l = d.find(o + ".active", e)),
                    u('a[data-toggle="tab"]', d).on("click", t),
                    u('a[data-toggle="tab"]', d).on("show show.bs.tab", i),
                    a.fixNavigationButtons();
            }),
            (d = e.find("ul:first", e)),
            (l = d.find(o + ".active", e)),
            d.hasClass(r.tabClass) || d.addClass(r.tabClass),
            r.onInit && "function" == typeof r.onInit && r.onInit(l, d, 0),
            r.onShow && "function" == typeof r.onShow && r.onShow(l, d, a.nextIndex()),
            u('a[data-toggle="tab"]', d).on("click", t),
            u('a[data-toggle="tab"]', d).on("show show.bs.tab", i);
    }
    (u.fn.bootstrapWizard = function (e) {
        if ("string" != typeof e)
            return this.each(function (n) {
                var t,
                    i = u(this);
                i.data("bootstrapWizard") || ((t = new a(i, e)), i.data("bootstrapWizard", t), t.fixNavigationButtons());
            });
        var n = Array.prototype.slice.call(arguments, 1);
        return 1 === n.length && n.toString(), this.data("bootstrapWizard")[e](n);
    }),
        (u.fn.bootstrapWizard.defaults = {
            withVisible: !0,
            tabClass: "nav nav-pills",
            nextSelector: ".card-wizard .nav-item.next",
            previousSelector: ".card-wizard .nav-item.previous",
            firstSelector: ".card-wizard .nav-item.first",
            lastSelector: ".card-wizard .nav-item.last",
            finishSelector: ".card-wizard .nav-item.finish",
            backSelector: ".card-wizard .nav-item.back",
            onShow: null,
            onInit: null,
            onNext: null,
            onPrevious: null,
            onLast: null,
            onFirst: null,
            onFinish: null,
            onBack: null,
            onTabChange: null,
            onTabClick: null,
            onTabShow: null,
        });
})(jQuery);
