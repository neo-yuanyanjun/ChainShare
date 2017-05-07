/**
 * @file 根据屏幕大小改变根元素字体大小
 * @date 2017-04-24
 * @author Yuan Yanjun
 */

(function (doc, win) {
    var docEle = document.documentElement;
    var resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var designWidth = 750; // 设计图尺寸
    var recalc = window.recalc = function (evt) {
        var clientWidth = docEle.clientWidth;
        if (!clientWidth) {
            return;
        }

        if (clientWidth >= designWidth) {
            docEle.style.fontSize = '100px';
        }
        else {
            docEle.style.fontSize = 100 * (clientWidth / designWidth) + 'px';
        }
    };

    if (!doc.addEventListener) {
        return;
    }
    win.addEventListener(resizeEvent, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
