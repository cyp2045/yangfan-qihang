(function flexible(window, document) {
    var docEl = document.documentElement;
    var dpr = window.devicePixelRatio || 1;

    // 设置body默认字体大小
    function setBodyFontSize() {
        if (document.body) {
            document.body.style.fontSize = (16 * dpr) + 'px';
        } else {
            document.addEventListener('DOMContentLoaded', setBodyFontSize);
        }
    }
    setBodyFontSize();

    // 核心：适配1920px设计稿，1rem = 屏幕宽度 / 19.2
    function setRemUnit() {
        var rem = docEl.clientWidth / 19.2;
        docEl.style.fontSize = rem + 'px';
        console.log('当前1rem =', rem + 'px'); // 调试用，能在控制台看到当前值
    }

    setRemUnit();

    // 窗口变化时重新计算
    window.addEventListener('resize', setRemUnit);
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setRemUnit();
        }
    });
}(window, document));
