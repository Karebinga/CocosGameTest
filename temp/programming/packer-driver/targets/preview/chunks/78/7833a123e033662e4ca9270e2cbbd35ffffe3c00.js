System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _EAdsFormats, _EGrantedPermission, _EGetLaunchParamsResponseLanguages, _EGetLaunchParamsResponseGroupRole, _EGetLaunchParamsResponsePlatforms, _applyMiddleware, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: !0
        });

        var _assign = function __assign() {
          return (_assign = Object.assign || function (e) {
            for (var r, n = 1, t = arguments.length; n < t; n++) for (var o in r = arguments[n]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);

            return e;
          }).apply(this, arguments);
        };

        function __rest(e, r) {
          var n = {};

          for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);

          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;

            for (t = Object.getOwnPropertySymbols(e); o < t.length; o++) r.indexOf(t[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[o]) && (n[t[o]] = e[t[o]]);
          }

          return n;
        }

        function __spreadArrays() {
          for (var e = 0, r = 0, n = arguments.length; r < n; r++) e += arguments[r].length;

          var t = Array(e),
              o = 0;

          for (r = 0; r < n; r++) for (var i = arguments[r], p = 0, a = i.length; p < a; p++, o++) t[o] = i[p];

          return t;
        }

        function createCounter() {
          return {
            current: 0,
            next: function next() {
              return ++this.current;
            }
          };
        }

        function createRequestResolver() {
          var t = createCounter(),
              o = {};
          return {
            add: function add(e, r) {
              var n = null != r ? r : t.next();
              return o[n] = e, n;
            },
            resolve: function resolve(e, r, n) {
              var t = o[e];
              t && (n(r) ? t.resolve(r) : t.reject(r), o[e] = null);
            }
          };
        }

        function promisifySend(i, e) {
          var p = createRequestResolver();
          return e(function (e) {
            if (e.detail && e.detail.data && "object" == typeof e.detail.data && "request_id" in e.detail.data) {
              var r = e.detail.data,
                  n = r.request_id,
                  t = __rest(r, ["request_id"]);

              n && p.resolve(n, t, function (e) {
                return !("error_type" in e);
              });
            }
          }), function (t, o) {
            return void 0 === o && (o = {}), new Promise(function (e, r) {
              var n = p.add({
                resolve: e,
                reject: r
              }, o.request_id);
              i(t, _assign(_assign({}, o), {
                request_id: n
              }));
            });
          };
        }

        var webSdkHandlers,
            IS_CLIENT_SIDE = "undefined" != typeof window,
            IS_ANDROID_WEBVIEW = Boolean(IS_CLIENT_SIDE && window.AndroidBridge),
            IS_IOS_WEBVIEW = Boolean(IS_CLIENT_SIDE && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.VKWebAppClose),
            IS_REACT_NATIVE_WEBVIEW = Boolean(IS_CLIENT_SIDE && window.ReactNativeWebView && "function" == typeof window.ReactNativeWebView.postMessage),
            IS_WEB = IS_CLIENT_SIDE && !IS_ANDROID_WEBVIEW && !IS_IOS_WEBVIEW,
            IS_MVK = IS_WEB && /(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),
            IS_DESKTOP_VK = IS_WEB && !IS_MVK,
            EVENT_TYPE = IS_WEB ? "message" : "VKWebAppEvent",
            DESKTOP_METHODS = __spreadArrays(["VKWebAppInit", "VKWebAppGetCommunityAuthToken", "VKWebAppAddToCommunity", "VKWebAppAddToHomeScreenInfo", "VKWebAppClose", "VKWebAppCopyText", "VKWebAppCreateHash", "VKWebAppGetUserInfo", "VKWebAppSetLocation", "VKWebAppSendToClient", "VKWebAppGetClientVersion", "VKWebAppGetPhoneNumber", "VKWebAppGetEmail", "VKWebAppGetGroupInfo", "VKWebAppGetGeodata", "VKWebAppGetCommunityToken", "VKWebAppGetConfig", "VKWebAppGetLaunchParams", "VKWebAppSetTitle", "VKWebAppGetAuthToken", "VKWebAppCallAPIMethod", "VKWebAppJoinGroup", "VKWebAppLeaveGroup", "VKWebAppAllowMessagesFromGroup", "VKWebAppDenyNotifications", "VKWebAppAllowNotifications", "VKWebAppOpenPayForm", "VKWebAppOpenApp", "VKWebAppShare", "VKWebAppShowWallPostBox", "VKWebAppScroll", "VKWebAppShowOrderBox", "VKWebAppShowLeaderBoardBox", "VKWebAppShowInviteBox", "VKWebAppShowRequestBox", "VKWebAppAddToFavorites", "VKWebAppShowStoryBox", "VKWebAppStorageGet", "VKWebAppStorageGetKeys", "VKWebAppStorageSet", "VKWebAppFlashGetInfo", "VKWebAppSubscribeStoryApp", "VKWebAppOpenWallPost", "VKWebAppCheckAllowedScopes", "VKWebAppCheckNativeAds", "VKWebAppShowNativeAds", "VKWebAppRetargetingPixel", "VKWebAppConversionHit", "VKWebAppShowSubscriptionBox", "VKWebAppCheckSurvey", "VKWebAppShowSurvey", "VKWebAppScrollTop", "VKWebAppScrollTopStart", "VKWebAppScrollTopStop"], IS_DESKTOP_VK ? ["VKWebAppResizeWindow", "VKWebAppAddToMenu", "VKWebAppShowInstallPushBox", "VKWebAppGetFriends", "VKWebAppShowCommunityWidgetPreviewBox"] : ["VKWebAppShowImages"]),
            androidBridge = IS_CLIENT_SIDE ? window.AndroidBridge : void 0,
            iosBridge = IS_IOS_WEBVIEW ? window.webkit.messageHandlers : void 0,
            webBridge = IS_WEB ? parent : void 0;

        function createVKBridge(n) {
          var i = void 0,
              p = [];

          function e(e) {
            p.push(e);
          }

          function r() {
            return IS_IOS_WEBVIEW || IS_ANDROID_WEBVIEW;
          }

          function t() {
            return IS_WEB && window.parent !== window;
          }

          function o() {
            return r() || t();
          }

          function a(r) {
            if (IS_IOS_WEBVIEW || IS_ANDROID_WEBVIEW) return __spreadArrays(p).map(function (e) {
              return e.call(null, r);
            });
            var e = null == r ? void 0 : r.data;

            if (IS_WEB && e) {
              if (IS_REACT_NATIVE_WEBVIEW && "string" == typeof e) try {
                e = JSON.parse(e);
              } catch (e) {}
              var n = e.type,
                  t = e.data,
                  o = e.frameId;
              n && ("SetSupportedHandlers" !== n ? "VKWebAppSettings" !== n ? __spreadArrays(p).map(function (e) {
                return e({
                  detail: {
                    type: n,
                    data: t
                  }
                });
              }) : i = o : webSdkHandlers = t.supportedHandlers);
            }
          }

          IS_REACT_NATIVE_WEBVIEW && /(android)/i.test(navigator.userAgent) ? document.addEventListener(EVENT_TYPE, a) : "undefined" != typeof window && "addEventListener" in window && window.addEventListener(EVENT_TYPE, a);
          var s = promisifySend(function (e, r) {
            androidBridge && androidBridge[e] ? androidBridge[e](JSON.stringify(r)) : iosBridge && iosBridge[e] && "function" == typeof iosBridge[e].postMessage ? iosBridge[e].postMessage(r) : IS_REACT_NATIVE_WEBVIEW ? window.ReactNativeWebView.postMessage(JSON.stringify({
              handler: e,
              params: r
            })) : webBridge && "function" == typeof webBridge.postMessage && webBridge.postMessage({
              handler: e,
              params: r,
              type: "vk-connect",
              webFrameId: i,
              connectVersion: n
            }, "*");
          }, e);
          return {
            send: s,
            sendPromise: s,
            subscribe: e,
            unsubscribe: function unsubscribe(e) {
              var r = p.indexOf(e);
              -1 < r && p.splice(r, 1);
            },
            supports: function supports(e) {
              return IS_ANDROID_WEBVIEW ? !(!androidBridge || "function" != typeof androidBridge[e]) : IS_IOS_WEBVIEW ? !(!iosBridge || !iosBridge[e] || "function" != typeof iosBridge[e].postMessage) : !!IS_WEB && -1 < DESKTOP_METHODS.indexOf(e);
            },
            isWebView: r,
            isIframe: t,
            isEmbedded: o,
            isStandalone: function isStandalone() {
              return !o();
            }
          };
        }

        var version = "2.7.2";

        function applyMiddleware() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

          return t.includes(void 0) || t.includes(null) ? applyMiddleware.apply(void 0, t.filter(function (e) {
            return "function" == typeof e;
          })) : function (n) {
            if (0 === t.length) return n;
            var e,
                r = {
              subscribe: n.subscribe,
              send: function send() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];

                return n.send.apply(n, e);
              }
            };
            return e = t.filter(function (e) {
              return "function" == typeof e;
            }).map(function (e) {
              return e(r);
            }).reduce(function (r, n) {
              return function (e) {
                return r(n(e));
              };
            })(n.send), _assign(_assign({}, n), {
              send: e
            });
          };
        }

        !function (e) {
          e.REWARD = "reward", e.INTERSTITIAL = "interstitial";
        }(exports.EAdsFormats || (exports.EAdsFormats = {})), function (e) {
          e.CAMERA = "camera", e.LOCATION = "location", e.PHOTO = "photo";
        }(exports.EGrantedPermission || (exports.EGrantedPermission = {})), function (e) {
          e.RU = "ru", e.UK = "uk", e.UA = "ua", e.EN = "en", e.BE = "be", e.KZ = "kz", e.PT = "pt", e.ES = "es";
        }(exports.EGetLaunchParamsResponseLanguages || (exports.EGetLaunchParamsResponseLanguages = {})), function (e) {
          e.ADMIN = "admin", e.EDITOR = "editor", e.MEMBER = "member", e.MODER = "moder", e.NONE = "none";
        }(exports.EGetLaunchParamsResponseGroupRole || (exports.EGetLaunchParamsResponseGroupRole = {})), function (e) {
          e.DESKTOP_WEB = "desktop_web", e.MOBILE_WEB = "mobile_web", e.MOBILE_ANDROID = "mobile_android", e.MOBILE_ANDROID_MESSENGER = "mobile_android_messenger", e.MOBILE_IPHONE = "mobile_iphone", e.MOBILE_IPHONE_MESSENGER = "mobile_iphone_messenger", e.MOBILE_IPAD = "mobile_ipad";
        }(exports.EGetLaunchParamsResponsePlatforms || (exports.EGetLaunchParamsResponsePlatforms = {}));
        var bridge = createVKBridge(version);
        exports.applyMiddleware = applyMiddleware, exports.default = bridge; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _EAdsFormats = module.exports.EAdsFormats;
        _EGrantedPermission = module.exports.EGrantedPermission;
        _EGetLaunchParamsResponseLanguages = module.exports.EGetLaunchParamsResponseLanguages;
        _EGetLaunchParamsResponseGroupRole = module.exports.EGetLaunchParamsResponseGroupRole;
        _EGetLaunchParamsResponsePlatforms = module.exports.EGetLaunchParamsResponsePlatforms;
        _applyMiddleware = module.exports.applyMiddleware;
        _default = module.exports.default;
      }, {});
    }
  };
});
//# sourceMappingURL=7833a123e033662e4ca9270e2cbbd35ffffe3c00.js.map