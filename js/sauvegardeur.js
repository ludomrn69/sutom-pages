var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./entites/sauvegardeStats", "./lienHelper", "./notificationMessage"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var sauvegardeStats_1 = __importDefault(require("./entites/sauvegardeStats"));
    var lienHelper_1 = __importDefault(require("./lienHelper"));
    var notificationMessage_1 = __importDefault(require("./notificationMessage"));
    var Sauvegardeur = /** @class */ (function () {
        function Sauvegardeur() {
        }
        Sauvegardeur.sauvegarderStats = function (stats) {
            localStorage.setItem(this._cleStats, JSON.stringify(stats));
        };
        Sauvegardeur.chargerSauvegardeStats = function () {
            var contenuLocation = lienHelper_1.default.extraireInformation("s");
            if (contenuLocation) {
                var donneesDepuisLien = Sauvegardeur.chargerInformationDepuisLien(contenuLocation);
                window.location.hash = "";
                if (donneesDepuisLien) {
                    notificationMessage_1.default.ajouterNotification("Statistiques chargés avec succès.");
                    Sauvegardeur.sauvegarderStats(donneesDepuisLien);
                    return donneesDepuisLien;
                }
                notificationMessage_1.default.ajouterNotification("Impossible de charger les statistiques depuis le lien.");
            }
            var dataStats = localStorage.getItem(this._cleStats);
            if (!dataStats)
                return;
            var stats = JSON.parse(dataStats);
            if (stats.dernierePartie !== null)
                stats.dernierePartie = new Date(stats.dernierePartie);
            return stats;
        };
        Sauvegardeur.sauvegarderPartieEnCours = function (propositions, dateFinPartie) {
            var partieEnCours = {
                propositions: propositions,
                datePartie: new Date(),
                dateFinPartie: dateFinPartie,
                idPartie: "partie-infini"
            };
            localStorage.setItem(this._clePartieEnCours, JSON.stringify(partieEnCours));
        };
        Sauvegardeur.sauvegarderConfig = function (config) {
            localStorage.setItem(this._cleConfiguration, JSON.stringify(config));
        };
        Sauvegardeur.chargerConfig = function () {
            var dataConfig = localStorage.getItem(this._cleConfiguration);
            if (!dataConfig)
                return null;
            var config = JSON.parse(dataConfig);
            return config;
        };
        Sauvegardeur.genererLien = function () {
            var _a;
            var stats = (_a = Sauvegardeur.chargerSauvegardeStats()) !== null && _a !== void 0 ? _a : sauvegardeStats_1.default.Default;
            return [
                stats.repartition[1],
                stats.repartition[2],
                stats.repartition[3],
                stats.repartition[4],
                stats.repartition[5],
                stats.repartition[6],
                stats.repartition["-"],
                stats.lettresRepartitions.bienPlace,
                stats.lettresRepartitions.malPlace,
                stats.lettresRepartitions.nonTrouve,
                stats.dernierePartie ? stats.dernierePartie.toISOString() : "null",
            ].join(",");
        };
        Sauvegardeur.chargerInformationDepuisLien = function (contenu) {
            var _a = contenu.split(","), UnCoupString = _a[0], DeuxCoupsString = _a[1], TroisCoupsString = _a[2], QuatreCoupsString = _a[3], CinqCoupsString = _a[4], SixCoupsString = _a[5], PerduString = _a[6], LettresBienPlaceesString = _a[7], LettresMalPlaceesString = _a[8], LettresNonTrouveString = _a[9], dernierePartie = _a[10], TempsMoyenneString = _a[11], TempsNbPartiesString = _a[12];
            var UnCoup = parseInt(UnCoupString);
            var DeuxCoups = parseInt(DeuxCoupsString);
            var TroisCoups = parseInt(TroisCoupsString);
            var QuatreCoups = parseInt(QuatreCoupsString);
            var CinqCoups = parseInt(CinqCoupsString);
            var SixCoups = parseInt(SixCoupsString);
            var Perdu = parseInt(PerduString);
            var LettresBienPlacees = parseInt(LettresBienPlaceesString);
            var LettresMalPlacees = parseInt(LettresMalPlaceesString);
            var LettresNonTrouve = parseInt(LettresNonTrouveString);
            var tempsPart = null;
            if (TempsMoyenneString !== undefined && TempsNbPartiesString !== undefined) {
                tempsPart = {
                    moyenne: parseInt(TempsMoyenneString),
                    nbParties: parseInt(TempsNbPartiesString),
                };
            }
            return {
                dernierePartie: dernierePartie === "null" ? null : new Date(dernierePartie),
                partiesJouees: UnCoup + DeuxCoups + TroisCoups + QuatreCoups + CinqCoups + SixCoups + Perdu,
                partiesGagnees: UnCoup + DeuxCoups + TroisCoups + QuatreCoups + CinqCoups + SixCoups,
                repartition: {
                    1: UnCoup,
                    2: DeuxCoups,
                    3: TroisCoups,
                    4: QuatreCoups,
                    5: CinqCoups,
                    6: SixCoups,
                    "-": Perdu,
                },
                lettresRepartitions: {
                    bienPlace: LettresBienPlacees,
                    malPlace: LettresMalPlacees,
                    nonTrouve: LettresNonTrouve,
                },
                temps: tempsPart,
            };
        };
        Sauvegardeur._cleStats = "statistiques";
        Sauvegardeur._clePartieEnCours = "partieEnCours";
        Sauvegardeur._clePartieVeille = "partieVeille";
        Sauvegardeur._cleConfiguration = "configuration";
        return Sauvegardeur;
    }());
    exports.default = Sauvegardeur;
});
//# sourceMappingURL=sauvegardeur.js.map