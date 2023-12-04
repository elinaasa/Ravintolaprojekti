"use strict";
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = require("./components");
var apiUrl = "http://localhost:3000/api/menu";
// Function to fetch menu data from the API
function fetchMenuData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_1, errorModalHtml;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch menu data: ".concat(response.statusText));
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    errorModalHtml = (0, components_1.errorModal)("Failed to fetch menu data");
                    document.getElementById("menuContainer").innerHTML = errorModalHtml;
                    throw error_1; // Propagate the error to handle it elsewhere if needed
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Function to display the menu
function displayMenu() {
    return __awaiter(this, void 0, void 0, function () {
        var menuContainer, menuData, dailyMenuHtml, menuTable_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    menuContainer = document.getElementById("menuContainer");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetchMenuData()];
                case 2:
                    menuData = _a.sent();
                    dailyMenuHtml = (0, components_1.DailyMenu)(menuData.course, menuData.menu);
                    if (menuContainer) {
                        if (dailyMenuHtml !== undefined) {
                            menuContainer.innerHTML = dailyMenuHtml;
                        }
                        else {
                            menuContainer.innerHTML = "";
                        }
                    }
                    menuTable_1 = document.createElement("table");
                    menuData.menu.courses.forEach(function (course) {
                        var menuRow = (0, components_1.MenuRows)(course);
                        menuTable_1.appendChild(menuRow);
                    });
                    if (menuContainer) {
                        menuContainer.appendChild(menuTable_1);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Call the function to display the menu
displayMenu();
