var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./entites/configuration", "./sauvegardeur"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var configuration_1 = __importDefault(require("./entites/configuration"));
    var sauvegardeur_1 = __importDefault(require("./sauvegardeur"));
    var ReglesPanel = /** @class */ (function () {
        function ReglesPanel(panelManager) {
            var _this = this;
            this._panelManager = panelManager;
            this._rulesBouton = document.getElementById("configuration-regles-bouton");
            this._rulesBouton.addEventListener("click", (function () {
                _this.afficher();
            }).bind(this));
        }
        ReglesPanel.prototype.afficher = function () {
            var titre = "Règles";
            var contenu = "<p>" +
                "Vous avez six essais pour deviner le mot du jour, entre 6 et 10 lettres.<br />" +
                "Vous ne pouvez proposer que des mots commençant par la même lettre que le mot recherché, et qui se trouvent dans notre dictionnaire.<br />" +
                "Les noms propres ne sont pas acceptés.<br />" +
                "</p>" +
                '<div class="grille">' +
                '<table role="presentation">' +
                "<caption>Exemple de proposition</caption>" +
                '<tr role="group" aria-label="Mot 1 sur 1">' +
                '<td class="resultat bien-place" aria-label="Lettre S bien placée">S</td>' +
                '<td class="resultat non-trouve" aria-label="Lettre A non présente">A</td>' +
                '<td class="resultat non-trouve" aria-label="Lettre L non présente">L</td>' +
                '<td class="resultat mal-place" aria-label="Lettre U mal placée">U</td>' +
                '<td class="resultat mal-place" aria-label="Lettre T mal placée">T</td>' +
                "</tr>" +
                "</table>" +
                "</div>" +
                "<p>" +
                "Les lettres entourées d'un carré rouge sont bien placées.<br />" +
                "Les lettres entourées d'un cercle jaune sont mal placées (mais présentes dans le mot).<br />" +
                "Les lettres qui restent sur fond bleu ne sont pas dans le mot.<br />" +
                "</div>";
            this._panelManager.setContenu(titre, contenu);
            this._panelManager.setClasses(["regles-panel"]);
            this._panelManager.setCallbackFermeture(function () {
                var _a;
                sauvegardeur_1.default.sauvegarderConfig(__assign(__assign({}, ((_a = sauvegardeur_1.default.chargerConfig()) !== null && _a !== void 0 ? _a : configuration_1.default.Default)), { afficherRegles: false }));
            });
            this._panelManager.afficherPanel();
        };
        return ReglesPanel;
    }());
    exports.default = ReglesPanel;
});
//# sourceMappingURL=reglesPanel.js.map