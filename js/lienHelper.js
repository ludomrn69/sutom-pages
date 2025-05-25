(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LienHelper = /** @class */ (function () {
        function LienHelper() {
        }
        LienHelper.extraireInformation = function (cle) {
            if (window.location.hash === "" || window.location.hash === "#")
                return null;
            var hashPart = atob(window.location.hash.substring(1)).split("/");
            for (var infoPos in hashPart) {
                var info = hashPart[infoPos];
                if (!info.includes("="))
                    continue;
                var infoPart = info.split("=");
                var infoKey = infoPart[0];
                if (infoKey !== cle)
                    continue;
                return infoPart[1];
            }
            return null;
        };
        return LienHelper;
    }());
    exports.default = LienHelper;
});
//# sourceMappingURL=lienHelper.js.map