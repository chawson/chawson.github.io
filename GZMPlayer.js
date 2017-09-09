;(function() {
    var _0 = document.querySelector("input#ocvx");
    var _2 = document.querySelector('video#main');
    var _1 = {},
        _3;
    Object.defineProperty(_1, 'vn', {
        set: function set(vn) {
            var callback = _0.getAttribute('placeholder');
            downloader(vn, callback)
        }
    });
    _0.value && (_1.vn = parseInt(_0.value));

    function downloader(vn,callback=undefined) {
        var xhr = new XMLHttpRequest();
        var preurl = '//test-medialib.singerdream.com';
        xhr.open('GET',`${preurl}/app/video/urlWT.json?videoId=${vn}`);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && (xhr.status == 200 || xhr.status == 206 || xhr.status == 304 || xhr.status == 416)) {
                try {
                    _2.src = preurl+JSON.parse(xhr.response).url
                } catch (e) {}
                if (callback) {
                    try {
                        eval(`${callback}()`);
                    } catch (e) {  }
                }
            }
        }
    }
})();
