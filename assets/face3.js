{
  /* <script nonce=""> */
}
(function (width, height, id, callback, origin, domain) {
  if (id) {
    var e = document.getElementById(id);
    if (width !== -1) e.style.width = width + 'px';
    else {
      width = e.offsetWidth;
      if (window.getComputedStyle) {
        var computed = getComputedStyle(e);
        computed &&
          (width = Math.ceil(parseFloat(computed.width)) || e.offsetWidth);
      }
    }
    height === -1 && (height = e.offsetHeight);
  }
  var message =
    'type=resize&cb=' + callback + '&width=' + width + '&height=' + height;
  (function () {
    var a = window.parent;
    window.opener != null &&
      typeof window.opener.postMessage === 'function' &&
      (relation === 'opener.parent'
        ? (a = window.opener.parent)
        : (a = window.opener));
    var b = !0;
    function c(a) {
      var b = window.location.hostname.match(
        /\.(facebook\.sg|facebookcorewwwi\.(?:test)?onion|facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd\.onion)$/
      );
      b = b ? b[1] : 'facebook.com';
      var c = new Image();
      c.crossOrigin = 'anonymous';
      c.src =
        'https://www.' +
        b +
        '/platform/scribe_endpoint.php/?c=jssdk_error&m=' +
        encodeURIComponent(JSON.stringify(a));
    }
    function d() {
      if (a === window)
        window.close(),
          window.open('', '_self', ''),
          window.close(),
          !window.closed && closeURI && window.location.replace(closeURI);
      else
        try {
          a.postMessage(message, origin);
        } catch (a) {
          b
            ? ((b = !1), window.setTimeout(d, 200))
            : c({
                error: 'POST_MESSAGE',
                extra: {
                  message:
                    a.message +
                    ', html/js/connect/XDDialogResponsePurePostMessage.js:53',
                },
              });
        }
    }
    function e() {
      __fbNative.postMessage(message, origin);
    }
    window == top &&
    /FBAN\/\w+;/i.test(navigator.userAgent) &&
    !/FBAN\/mLite;/.test(navigator.userAgent)
      ? window.__fbNative && __fbNative.postMessage
        ? e()
        : window.addEventListener('fbNativeReady', e)
      : d();
  })();
})(
  -1,
  -1,
  'u_0_0_VR',
  'f2bdd61aaa5e9e2',
  'https://www.termodinamicademexico.com',
  'www.termodinamicademexico.com'
);
//   </script>
