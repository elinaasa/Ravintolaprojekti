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
exports.updateMenuData = exports.getMenuData = exports.saveMenu = exports.displayMenu = void 0;
// Function to fetch menu data from the server
var getMenuData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('http://localhost:3000/api/menu')];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
exports.getMenuData = getMenuData;
// function to update menu data on the server on the html page
var updateMenuData = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var response, responseData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('http://localhost:3000/api/menu', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                responseData = _a.sent();
                return [2 /*return*/, responseData];
        }
    });
}); };
exports.updateMenuData = updateMenuData;
// Function to display the menus
// add input fields for each menu-container to the html page to update the menu
// add a button to save the menu
var displayMenu = function () { return __awaiter(void 0, void 0, void 0, function () {
    var menuData, menuContainer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getMenuData()];
            case 1:
                menuData = _a.sent();
                menuContainer = document.querySelector('.menu-container');
                if (menuContainer) {
                    menuContainer.innerHTML = '';
                }
                menuData.forEach(function (menu) {
                    if (menuContainer) {
                        var menuCard = document.createElement('div');
                        menuCard.classList.add('menu-card');
                        menuCard.innerHTML = "\n        <h3>".concat(menu.name, "</h3>\n        <p>").concat(menu.description, "</p>\n        <p>").concat(menu.diet, "</p>\n        <p>").concat(menu.week_number, "</p>\n        <p>").concat(menu.day_of_week, "</p>\n        <input type=\"text\" id=\"menu-name\" placeholder=\"Name\" />\n        <input type=\"text\" id=\"menu-description\" placeholder=\"Description\" />\n        <input type=\"text\" id=\"menu-diet\" placeholder=\"Diet\" />\n        <input type=\"text\" id=\"menu-week-number\" placeholder=\"Week Number\" />\n        <input type=\"text\" id=\"menu-day-of-week\" placeholder=\"Day of Week\" />\n        <button id=\"save-menu\">Save Menu</button>\n      ");
                        menuContainer.appendChild(menuCard);
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
exports.displayMenu = displayMenu;
// Function to save the menus
var saveMenu = function () { return __awaiter(void 0, void 0, void 0, function () {
    var menuName, menuDescription, menuDiet, menuWeekNumber, menuDayOfWeek, menuData, newMenu;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                menuName = document.querySelector('#menu-name');
                menuDescription = document.querySelector('#menu-description');
                menuDiet = document.querySelector('#menu-diet');
                menuWeekNumber = document.querySelector('#menu-week-number');
                menuDayOfWeek = document.querySelector('#menu-day-of-week');
                return [4 /*yield*/, getMenuData()];
            case 1:
                menuData = _a.sent();
                newMenu = {
                    id: menuData.length + 1,
                    name: menuName.value,
                    description: menuDescription.value,
                    diet: menuDiet.value,
                    week_number: parseInt(menuWeekNumber.value),
                    day_of_week: parseInt(menuDayOfWeek.value),
                };
                menuData.push(newMenu);
                return [4 /*yield*/, updateMenuData(menuData)];
            case 2:
                _a.sent();
                displayMenu();
                return [2 /*return*/];
        }
    });
}); };
exports.saveMenu = saveMenu;
