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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
        define(["require", "exports", "./dictionnaire", "./grille", "./input", "./entites/lettreResultat", "./entites/lettreStatut", "./finDePartiePanel", "./notificationMessage", "./entites/sauvegardeStats", "./sauvegardeur", "./entites/configuration", "./entites/partieEnCours", "./panelManager", "./reglesPanel", "./configurationPanel", "./audioPanel", "./themeManager", "./instanceConfiguration", "./lienHelper", "./notesMaJPanel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dictionnaire_1 = __importDefault(require("./dictionnaire"));
    var grille_1 = __importDefault(require("./grille"));
    var input_1 = __importStar(require("./input"));
    var lettreResultat_1 = __importDefault(require("./entites/lettreResultat"));
    var lettreStatut_1 = require("./entites/lettreStatut");
    var finDePartiePanel_1 = __importDefault(require("./finDePartiePanel"));
    var notificationMessage_1 = __importDefault(require("./notificationMessage"));
    var sauvegardeStats_1 = __importDefault(require("./entites/sauvegardeStats"));
    var sauvegardeur_1 = __importDefault(require("./sauvegardeur"));
    var configuration_1 = __importDefault(require("./entites/configuration"));
    var partieEnCours_1 = __importDefault(require("./entites/partieEnCours"));
    var panelManager_1 = __importDefault(require("./panelManager"));
    var reglesPanel_1 = __importDefault(require("./reglesPanel"));
    var configurationPanel_1 = __importDefault(require("./configurationPanel"));
    var audioPanel_1 = __importDefault(require("./audioPanel"));
    var themeManager_1 = __importDefault(require("./themeManager"));
    var instanceConfiguration_1 = __importDefault(require("./instanceConfiguration"));
    var lienHelper_1 = __importDefault(require("./lienHelper"));
    var notesMaJPanel_1 = __importDefault(require("./notesMaJPanel"));
    var Gestionnaire = /** @class */ (function () {
        function Gestionnaire() {
            var _this = this;
            var _a, _b;
            this._grille = null;
            this._input = null;
            this._motATrouver = "";
            this._compositionMotATrouver = {};
            this._maxNbPropositions = 6;
            this._stats = sauvegardeStats_1.default.Default;
            this._config = configuration_1.default.Default;
            this._config = (_a = sauvegardeur_1.default.chargerConfig()) !== null && _a !== void 0 ? _a : this._config;
            var partieEnCours = this.chargerPartieEnCours();
            this._idPartieEnCours = this.getIdPartie(partieEnCours);
            if (this._idPartieEnCours !== partieEnCours.idPartie && partieEnCours.idPartie !== undefined) {
                partieEnCours = new partieEnCours_1.default();
            }
            if (partieEnCours.datePartie) {
                this._datePartieEnCours = partieEnCours.datePartie;
            }
            else {
                this._datePartieEnCours = new Date();
            }
            if (partieEnCours.dateFinPartie) {
                this._dateFinPartie = partieEnCours.dateFinPartie;
            }
            this._propositions = new Array();
            this._resultats = new Array();
            this._audioPanel = new audioPanel_1.default(this._config);
            this._panelManager = new panelManager_1.default();
            this._themeManager = new themeManager_1.default(this._config);
            this._reglesPanel = new reglesPanel_1.default(this._panelManager);
            this._finDePartiePanel = new finDePartiePanel_1.default(this._datePartieEnCours, this._panelManager, this);
            this._configurationPanel = new configurationPanel_1.default(this._panelManager, this._audioPanel, this._themeManager);
            this._notesMaJPanel = new notesMaJPanel_1.default(this._panelManager);
            this.choisirMot()
                .then(function (mot) { return __awaiter(_this, void 0, void 0, function () {
                var debugEl;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this._motATrouver = mot;
                            debugEl = document.getElementById("debug-mot");
                            if (debugEl) {
                                debugEl.textContent = "Mot à deviner : " + this._motATrouver;
                            }
                            this._input = new input_1.default(this, this._config, this._motATrouver.length, this._motATrouver[0]);
                            this._panelManager.setInput(this._input);
                            this._grille = new grille_1.default(this._motATrouver.length, this._maxNbPropositions, this._motATrouver[0], this._audioPanel);
                            this._configurationPanel.setInput(this._input);
                            this._compositionMotATrouver = this.decompose(this._motATrouver);
                            return [4 /*yield*/, this.chargerPropositions(partieEnCours.propositions)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .catch(function (raison) { return notificationMessage_1.default.ajouterNotification("Aucun mot n'a été trouvé"); });
            this.afficherReglesSiNecessaire();
            (_b = document.getElementById("nouvelle-partie-btn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
                location.reload();
            });
        }
        Gestionnaire.prototype.getIdPartie = function (partieEnCours) {
            var infoDansLocation = lienHelper_1.default.extraireInformation("p");
            if (infoDansLocation !== null)
                return infoDansLocation;
            if (partieEnCours.idPartie !== undefined)
                return partieEnCours.idPartie;
            return instanceConfiguration_1.default.idPartieParDefaut;
        };
        Gestionnaire.prototype.chargerPartieEnCours = function () {
            var _a;
            this._stats = (_a = sauvegardeur_1.default.chargerSauvegardeStats()) !== null && _a !== void 0 ? _a : sauvegardeStats_1.default.Default;
            return new partieEnCours_1.default();
        };
        Gestionnaire.prototype.chargerPropositions = function (propositions) {
            return __awaiter(this, void 0, void 0, function () {
                var _i, propositions_1, mot;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!propositions || propositions.length === 0)
                                return [2 /*return*/];
                            _i = 0, propositions_1 = propositions;
                            _a.label = 1;
                        case 1:
                            if (!(_i < propositions_1.length)) return [3 /*break*/, 4];
                            mot = propositions_1[_i];
                            if (this._input)
                                this._input.bloquer(input_1.ContexteBloquage.ValidationMot);
                            return [4 /*yield*/, this.verifierMot(mot, true)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        Gestionnaire.prototype.enregistrerPartieDansStats = function (duree) {
            this._stats.partiesJouees++;
            var estVictoire = this._resultats.some(function (resultat) { return resultat.every(function (item) { return item.statut === lettreStatut_1.LettreStatut.BienPlace; }); });
            if (estVictoire) {
                this._stats.partiesGagnees++;
                var nbEssais = this._resultats.length;
                if (nbEssais >= 1 && nbEssais <= 6) {
                    this._stats.repartition[nbEssais]++;
                }
            }
            else {
                this._stats.repartition["-"]++;
            }
            this._stats.lettresRepartitions.bienPlace += this._resultats.reduce(function (accumulateur, mot) {
                accumulateur += mot.filter(function (item) { return item.statut == lettreStatut_1.LettreStatut.BienPlace; }).length;
                return accumulateur;
            }, 0);
            this._stats.lettresRepartitions.malPlace += this._resultats.reduce(function (accumulateur, mot) {
                accumulateur += mot.filter(function (item) { return item.statut == lettreStatut_1.LettreStatut.MalPlace; }).length;
                return accumulateur;
            }, 0);
            this._stats.lettresRepartitions.nonTrouve += this._resultats.reduce(function (accumulateur, mot) {
                accumulateur += mot.filter(function (item) { return item.statut == lettreStatut_1.LettreStatut.NonTrouve; }).length;
                return accumulateur;
            }, 0);
            this._stats.dernierePartie = this._datePartieEnCours;
            if (this._config.afficherChrono) {
                var statsTemps = this._stats.temps;
                if (!statsTemps || statsTemps === null) {
                    statsTemps = { moyenne: duree, nbParties: 1 };
                }
                else {
                    statsTemps = {
                        moyenne: (statsTemps.nbParties * statsTemps.moyenne + duree) / (statsTemps.nbParties + 1),
                        nbParties: statsTemps.nbParties + 1,
                    };
                }
                this._stats.temps = statsTemps;
            }
            sauvegardeur_1.default.sauvegarderStats(this._stats);
        };
        Gestionnaire.prototype.sauvegarderPartieEnCours = function () {
            sauvegardeur_1.default.sauvegarderPartieEnCours(this._propositions, this._dateFinPartie);
        };
        Gestionnaire.prototype.choisirMot = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, dictionnaire_1.default.getMot()];
                });
            });
        };
        Gestionnaire.prototype.decompose = function (mot) {
            var composition = {};
            for (var position = 0; position < mot.length; position++) {
                var lettre = mot[position];
                if (composition[lettre])
                    composition[lettre]++;
                else
                    composition[lettre] = 1;
            }
            return composition;
        };
        Gestionnaire.prototype.verifierMot = function (mot_1) {
            return __awaiter(this, arguments, void 0, function (mot, chargementPartie) {
                var resultats, isBonneReponse, duree;
                var _this = this;
                if (chargementPartie === void 0) { chargementPartie = false; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            mot = dictionnaire_1.default.nettoyerMot(mot);
                            //console.debug(mot + " => " + (Dictionnaire.estMotValide(mot) ? "Oui" : "non"));
                            if (mot.length !== this._motATrouver.length) {
                                notificationMessage_1.default.ajouterNotification("Le mot proposé est trop court.");
                                return [2 /*return*/, false];
                            }
                            if (mot.includes(".")) {
                                notificationMessage_1.default.ajouterNotification("Votre mot ne doit contenir que des lettres.");
                                return [2 /*return*/, false];
                            }
                            if (mot[0] !== this._motATrouver[0]) {
                                notificationMessage_1.default.ajouterNotification("Le mot proposé doit commencer par la même lettre que le mot recherché.");
                                return [2 /*return*/, false];
                            }
                            return [4 /*yield*/, dictionnaire_1.default.estMotValide(mot, this._motATrouver[0], this._motATrouver.length)];
                        case 1:
                            // TEMP : accepter tous les mots pendant les tests
                            if (!(_a.sent())) {
                                notificationMessage_1.default.ajouterNotification("Ce mot n'est pas dans notre dictionnaire.");
                                return [2 /*return*/, false];
                            }
                            if (!this._datePartieEnCours)
                                this._datePartieEnCours = new Date();
                            resultats = this.analyserMot(mot);
                            isBonneReponse = resultats.every(function (item) { return item.statut === lettreStatut_1.LettreStatut.BienPlace; });
                            this._propositions.push(mot);
                            this._resultats.push(resultats);
                            if (isBonneReponse || this._propositions.length === this._maxNbPropositions) {
                                if (!this._dateFinPartie)
                                    this._dateFinPartie = new Date();
                                duree = (this._dateFinPartie.getTime() - this._datePartieEnCours.getTime()) % 86400000;
                                this._finDePartiePanel.genererResume(isBonneReponse, this._motATrouver, this._resultats, duree);
                                if (!chargementPartie)
                                    this.enregistrerPartieDansStats(duree);
                            }
                            if (this._grille) {
                                this._grille.validerMot(mot, resultats, isBonneReponse, chargementPartie, function () {
                                    if (_this._input) {
                                        _this._input.updateClavier(resultats);
                                        if (isBonneReponse || _this._propositions.length === _this._maxNbPropositions) {
                                            _this._finDePartiePanel.afficher();
                                        }
                                        else {
                                            // La partie n'est pas fini, on débloque
                                            _this._input.debloquer(input_1.ContexteBloquage.ValidationMot);
                                        }
                                    }
                                });
                            }
                            this.sauvegarderPartieEnCours();
                            return [2 /*return*/, true];
                    }
                });
            });
        };
        Gestionnaire.prototype.actualiserAffichage = function (mot) {
            if (this._grille)
                this._grille.actualiserAffichage(dictionnaire_1.default.nettoyerMot(mot));
        };
        Gestionnaire.prototype.analyserMot = function (mot) {
            var resultats = new Array();
            mot = mot.toUpperCase();
            var composition = __assign({}, this._compositionMotATrouver);
            for (var position = 0; position < this._motATrouver.length; position++) {
                var lettreATrouve = this._motATrouver[position];
                var lettreProposee = mot[position];
                if (lettreATrouve === lettreProposee) {
                    composition[lettreProposee]--;
                }
            }
            for (var position = 0; position < this._motATrouver.length; position++) {
                var lettreATrouve = this._motATrouver[position];
                var lettreProposee = mot[position];
                var resultat = new lettreResultat_1.default();
                resultat.lettre = lettreProposee;
                if (lettreATrouve === lettreProposee) {
                    resultat.statut = lettreStatut_1.LettreStatut.BienPlace;
                }
                else if (this._motATrouver.includes(lettreProposee)) {
                    if (composition[lettreProposee] > 0) {
                        resultat.statut = lettreStatut_1.LettreStatut.MalPlace;
                        composition[lettreProposee]--;
                    }
                    else {
                        resultat.statut = lettreStatut_1.LettreStatut.NonTrouve;
                    }
                }
                else {
                    resultat.statut = lettreStatut_1.LettreStatut.NonTrouve;
                }
                resultats.push(resultat);
            }
            return resultats;
        };
        Gestionnaire.prototype.afficherReglesSiNecessaire = function () {
            var _a;
            if (this._config.afficherRegles !== undefined && !this._config.afficherRegles) {
                if (this._config.changelog === undefined || this._config.changelog < instanceConfiguration_1.default.derniereMiseAJour) {
                    this._notesMaJPanel.afficher((_a = this._config.changelog) !== null && _a !== void 0 ? _a : 0);
                }
                return;
            }
            this._reglesPanel.afficher();
        };
        Gestionnaire.prototype.chargerPartieAncienne = function (datePartie, etatPartie) {
            var _this = this;
            var partieEnCours = etatPartie;
            this._idPartieEnCours = this.getIdPartie(partieEnCours);
            var veille = new Date();
            veille.setDate(veille.getDate() - 1);
            if (this._idPartieEnCours !== partieEnCours.idPartie && partieEnCours.idPartie !== undefined) {
                partieEnCours = new partieEnCours_1.default();
            }
            if (partieEnCours.datePartie &&
                !(veille.getDate() === partieEnCours.datePartie.getDate() &&
                    veille.getMonth() === partieEnCours.datePartie.getMonth() &&
                    veille.getFullYear() === partieEnCours.datePartie.getFullYear())) {
                partieEnCours = new partieEnCours_1.default();
            }
            if (partieEnCours.datePartie) {
                this._datePartieEnCours = partieEnCours.datePartie;
            }
            else {
                this._datePartieEnCours = datePartie;
            }
            this._dateFinPartie = undefined;
            this._propositions.splice(0);
            this._resultats.splice(0);
            this._finDePartiePanel = new finDePartiePanel_1.default(this._datePartieEnCours, this._panelManager, this);
            this.choisirMot()
                .then(function (mot) { return __awaiter(_this, void 0, void 0, function () {
                var debugEl;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this._motATrouver = mot;
                            debugEl = document.getElementById("debug-mot");
                            if (debugEl) {
                                debugEl.textContent = "Mot à deviner : " + this._motATrouver;
                            }
                            this._input = new input_1.default(this, this._config, this._motATrouver.length, this._motATrouver[0]);
                            this._panelManager.setInput(this._input);
                            this._grille = new grille_1.default(this._motATrouver.length, this._maxNbPropositions, this._motATrouver[0], this._audioPanel);
                            this._configurationPanel.setInput(this._input);
                            this._compositionMotATrouver = this.decompose(this._motATrouver);
                            return [4 /*yield*/, this.chargerPropositions(partieEnCours.propositions)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .catch(function (raison) { return notificationMessage_1.default.ajouterNotification("Aucun mot n'a été trouvé pour aujourd'hui"); });
        };
        return Gestionnaire;
    }());
    exports.default = Gestionnaire;
});
//# sourceMappingURL=gestionnaire.js.map