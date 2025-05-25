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
        define(["require", "exports", "./entites/configuration", "./instanceConfiguration", "./sauvegardeur"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var configuration_1 = __importDefault(require("./entites/configuration"));
    var instanceConfiguration_1 = __importDefault(require("./instanceConfiguration"));
    var sauvegardeur_1 = __importDefault(require("./sauvegardeur"));
    var NotesMaJPanel = /** @class */ (function () {
        function NotesMaJPanel(panelManager) {
            this._notes = [
                {
                    version: 1201,
                    notes: ["Correction d'un bug empêchant de terminer la partie si on a le chronomètre activé"],
                },
                {
                    version: 1200,
                    notes: [
                        "Amélioration de l’accessibilité du jeu",
                        "Correction d’un bug avec le thème clair",
                        "Correction d'un problème avec le bouton Partie de la veille",
                        "Mise à jour des règles concernant la longueur des mots",
                        "Ajout du temps moyen et du nombre total de partie dans les statistiques",
                    ],
                },
                {
                    version: 512,
                    notes: [
                        "Correction du non affichage du bouton Partie de la veille",
                        "Ajustement de la hauteur du jeu sur certains téléphones",
                        "Correction de la couleur de la longue barre des statistiques",
                        "Ajout des couleurs dans les stats pour les terminaux sans emoji",
                        "Correction d'une coquille dans les options",
                        "Résolution d'un problème de selection de texte sur le clavier",
                    ],
                },
                {
                    version: 500,
                    notes: [
                        "Revue du design général de l'application",
                        "Refonte du mode clair",
                        "Refonte de l'affichage des statistiques",
                        "Ajout d'un bouton pour partager ses statistiques",
                        "Ajout d'un bouton pour terminer la partie de la veille",
                        "Ajout d'une option pour avoir le clavier haptique",
                        "Ajout d'une option pour transférer ses statistiques sur un autre navigateur",
                    ],
                },
            ];
            this._panelManager = panelManager;
        }
        NotesMaJPanel.prototype.afficher = function (versionOrigine) {
            var titre = "Notes de mises à jour";
            // On affiche du plus récent au plus ancien
            var notesAAfficher = this._notes
                .filter(function (note) { return note.version > versionOrigine; })
                .sort(function (a, b) {
                if (b.version > a.version)
                    return 1;
                if (b.version < a.version)
                    return -1;
                return 0;
            });
            if (notesAAfficher.length === 0)
                return;
            var notesArea = document.createElement("div");
            for (var _i = 0, notesAAfficher_1 = notesAAfficher; _i < notesAAfficher_1.length; _i++) {
                var note = notesAAfficher_1[_i];
                var divNote = document.createElement("div");
                var titre_1 = document.createElement("h3");
                titre_1.innerText = "Version ".concat(note.version);
                divNote.appendChild(titre_1);
                var listeNotes = document.createElement("ul");
                for (var _a = 0, _b = note.notes; _a < _b.length; _a++) {
                    var item = _b[_a];
                    var itemLi = document.createElement("li");
                    itemLi.innerText = item;
                    listeNotes.appendChild(itemLi);
                }
                divNote.appendChild(listeNotes);
                notesArea.appendChild(divNote);
            }
            this._panelManager.setContenuHtmlElement(titre, notesArea);
            this._panelManager.setClasses(["notes-panel"]);
            this._panelManager.setCallbackFermeture(function () {
                var _a;
                sauvegardeur_1.default.sauvegarderConfig(__assign(__assign({}, ((_a = sauvegardeur_1.default.chargerConfig()) !== null && _a !== void 0 ? _a : configuration_1.default.Default)), { changelog: instanceConfiguration_1.default.derniereMiseAJour }));
            });
            this._panelManager.afficherPanel();
        };
        return NotesMaJPanel;
    }());
    exports.default = NotesMaJPanel;
});
//# sourceMappingURL=notesMaJPanel.js.map