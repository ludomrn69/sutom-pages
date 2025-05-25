var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./copieHelper", "./entites/configuration", "./entites/lettreStatut", "./instanceConfiguration", "./sauvegardeur", "./statistiquesDisplayer", "./tempsHelper"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var copieHelper_1 = __importDefault(require("./copieHelper"));
    var configuration_1 = __importDefault(require("./entites/configuration"));
    var lettreStatut_1 = require("./entites/lettreStatut");
    var instanceConfiguration_1 = __importDefault(require("./instanceConfiguration"));
    var sauvegardeur_1 = __importDefault(require("./sauvegardeur"));
    var statistiquesDisplayer_1 = __importDefault(require("./statistiquesDisplayer"));
    var tempsHelper_1 = __importDefault(require("./tempsHelper"));
    var FinDePartiePanel = /** @class */ (function () {
        function FinDePartiePanel(datePartie, panelManager, gestionnaire) {
            var _this = this;
            this._resumeTexte = "";
            this._resumeTexteLegacy = "";
            this._motATrouver = "";
            this._estVictoire = false;
            this._partieEstFinie = false;
            this._datePartie = new Date(datePartie);
            this._datePartie.setHours(0, 0, 0);
            this._panelManager = panelManager;
            this._statsButton = document.getElementById("configuration-stats-bouton");
            this._gestionnaire = gestionnaire;
            this._statsButton.addEventListener("click", (function () {
                _this.afficher();
            }).bind(this));
        }
        FinDePartiePanel.prototype.genererResume = function (estBonneReponse, motATrouver, resultats, dureeMs) {
            var _a;
            var resultatsEmojis = resultats.map(function (mot) {
                return mot
                    .map(function (resultat) { return resultat.statut; })
                    .reduce(function (ligne, statut) {
                    switch (statut) {
                        case lettreStatut_1.LettreStatut.BienPlace:
                            return ligne + "🟥";
                        case lettreStatut_1.LettreStatut.MalPlace:
                            return ligne + "🟡";
                        default:
                            return ligne + "🟦";
                    }
                }, "");
            });
            var resultatsEmojisLegacy = resultats.map(function (mot) {
                return mot
                    .map(function (resultat) { return resultat.statut; })
                    .reduce(function (ligne, statut) {
                    switch (statut) {
                        case lettreStatut_1.LettreStatut.BienPlace:
                            return ligne + '<span class="emoji-carre-rouge">🟥</span>';
                        case lettreStatut_1.LettreStatut.MalPlace:
                            return ligne + '<span class="emoji-cercle-jaune">🟡</span>';
                        default:
                            return ligne + '<span class="emoji-carre-bleu">🟦</span>';
                    }
                }, "");
            });
            var dateGrille = this._datePartie.getTime();
            var origine = instanceConfiguration_1.default.dateOrigine.getTime();
            this._motATrouver = motATrouver;
            this._estVictoire = estBonneReponse;
            this._partieEstFinie = true;
            var numeroGrille = Math.round((dateGrille - origine) / (24 * 3600 * 1000)) + 1;
            var afficherChrono = ((_a = sauvegardeur_1.default.chargerConfig()) !== null && _a !== void 0 ? _a : configuration_1.default.Default).afficherChrono;
            var entete = "#SUTOM #" +
                numeroGrille +
                " " +
                (estBonneReponse ? resultats.length : "-") +
                "/6" +
                (afficherChrono ? " " + tempsHelper_1.default.genererTempsHumain(dureeMs) : "") +
                "\n\n";
            this._resumeTexte = entete + resultatsEmojis.join("\n");
            this._resumeTexteLegacy = entete + resultatsEmojisLegacy.join("\n");
        };
        FinDePartiePanel.prototype.attacherPartage = function () {
            var resumeBouton = document.getElementById("fin-de-partie-panel-resume-bouton");
            copieHelper_1.default.attacheBoutonCopieLien(resumeBouton, this._resumeTexte + "\n\nhttps://sutom.nocle.fr", "Résumé copié dans le presse papier.");
        };
        FinDePartiePanel.prototype.afficher = function () {
            var _a;
            var titre;
            var contenu = "";
            if (!this._partieEstFinie) {
                titre = "Statistiques";
                contenu += '<p class="fin-de-partie-panel-phrase">Vous n\'avez pas encore fini votre partie du jour.</p>';
            }
            else {
                if (this._estVictoire) {
                    titre = "Félicitations";
                    contenu += '<p class="fin-de-partie-panel-phrase">Bravo, tu as gagné. Tu peux refaire une nouvelle grille.</p>';
                    contenu += '<div style="margin-top: 20px;"><button id="nouvelle-partie-btn">Nouvelle partie</button></div>';
                }
                else {
                    titre = "Perdu";
                    contenu +=
                        '<p class="fin-de-partie-panel-phrase"> \
          Le mot à trouver était : ' +
                            this._motATrouver +
                            "<br /> \
          Essaye à nouveau ? \
        </p>";
                }
                contenu += statistiquesDisplayer_1.default.genererResumeTexte(this._resumeTexteLegacy).outerHTML;
            }
            var stats = sauvegardeur_1.default.chargerSauvegardeStats();
            if (stats) {
                contenu += statistiquesDisplayer_1.default.genererHtmlStats(stats).outerHTML;
            }
            this._panelManager.setContenu(titre, contenu);
            this._panelManager.setClasses(["fin-de-partie-panel"]);
            if (this._partieEstFinie)
                this.attacherPartage();
            if (stats)
                this.attacherPartageStats(stats);
            (_a = document.getElementById("nouvelle-partie-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                location.reload();
            });
            this._panelManager.afficherPanel();
        };
        FinDePartiePanel.prototype.attacherPartageStats = function (stats) {
            var resumeBouton = document.getElementById("fin-de-partie-panel-stats-bouton");
            var resumeTexte = statistiquesDisplayer_1.default.genererResumeTexteStatistiques(stats);
            var textePerso = "Le mot était : " + this._motATrouver + "\n\n" + resumeTexte + "\n\nhttps://ludomrn69.github.io/sutom-pages";
            copieHelper_1.default.attacheBoutonCopieLien(resumeBouton, textePerso, "Résumé copié dans le presse papier.");
        };
        return FinDePartiePanel;
    }());
    exports.default = FinDePartiePanel;
});
//# sourceMappingURL=finDePartiePanel.js.map