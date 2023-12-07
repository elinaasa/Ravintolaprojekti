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
var _this = this;
var getMenuData = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("http://localhost:3000/api/menu")];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
            case 3:
                error_1 = _a.sent();
                console.error("Error fetching menu data:", error_1);
                return [2 /*return*/, []];
            case 4: return [2 /*return*/];
        }
    });
}); };
var updateMenuData = function (data) { return __awaiter(_this, void 0, void 0, function () {
    var token, response, responseData, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                token = localStorage.getItem("token");
                if (!token) {
                    alert("You must be logged in to update menu data");
                    return [2 /*return*/, null];
                }
                return [4 /*yield*/, fetch("http://localhost:3000/api/menu/" + data.menu_id, {
                        method: "PUT",
                        headers: {
                            Authorization: "Bearer " + token,
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                responseData = _a.sent();
                return [2 /*return*/, responseData];
            case 3:
                error_2 = _a.sent();
                console.error("Error updating menu data:", error_2);
                return [2 /*return*/, null];
            case 4: return [2 /*return*/];
        }
    });
}); };
var displayMenu = function () { return __awaiter(_this, void 0, void 0, function () {
    var menuData, menuContainer;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getMenuData()];
            case 1:
                menuData = _a.sent();
                menuContainer = document.querySelector(".menu-container");
                if (menuContainer) {
                    menuContainer.innerHTML = "";
                }
                menuData.forEach(function (menu) {
                    console.log(menu);
                    if (menuContainer) {
                        var menuCard = document.createElement("div");
                        menuCard.classList.add("menu-card");
                        var h3 = document.createElement("h3");
                        h3.innerHTML = menu.name;
                        var p1 = document.createElement("p");
                        p1.innerHTML = menu.description;
                        var p2 = document.createElement("p");
                        p2.innerHTML = menu.diet;
                        var p3 = document.createElement("p");
                        p3.innerHTML = "Menu week: ".concat(menu.week_number);
                        var p4 = document.createElement("p");
                        p4.innerHTML = "Menu day: ".concat(menu.day_of_week);
                        var form = document.createElement("form");
                        var input1_1 = document.createElement("input");
                        input1_1.setAttribute("type", "text");
                        input1_1.placeholder = "Name";
                        var input2_1 = document.createElement("input");
                        input2_1.setAttribute("type", "text");
                        input2_1.placeholder = "Description";
                        var input3_1 = document.createElement("input");
                        input3_1.setAttribute("type", "text");
                        input3_1.placeholder = "Diet";
                        var button = document.createElement("button");
                        button.setAttribute("type", "submit");
                        button.innerHTML = "Save Menu";
                        menuCard.appendChild(h3);
                        menuCard.appendChild(p1);
                        menuCard.appendChild(p2);
                        menuCard.appendChild(p3);
                        menuCard.appendChild(p4);
                        menuCard.appendChild(form);
                        form.appendChild(input1_1);
                        form.appendChild(input2_1);
                        form.appendChild(input3_1);
                        form.appendChild(button);
                        form.addEventListener("submit", function (event) { return __awaiter(_this, void 0, void 0, function () {
                            var newMenu;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        event.preventDefault();
                                        newMenu = {
                                            menu_id: menu.menu_id,
                                            name: input1_1.value,
                                            description: input2_1.value,
                                            diet: input3_1.value,
                                            week_number: menu.week_number,
                                            day_of_week: menu.day_of_week,
                                        };
                                        return [4 /*yield*/, updateMenuData(newMenu)];
                                    case 1:
                                        _a.sent();
                                        // menuCard.remove();
                                        displayMenu();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        menuContainer.appendChild(menuCard);
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
var showMenu = function () { return __awaiter(_this, void 0, void 0, function () {
    var menuName, menuDescription, menuDiet, menuWeekNumber, menuDayOfWeek, menuData, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                menuName = document.querySelector("#menu-name");
                menuDescription = document.querySelector("#menu-description");
                menuDiet = document.querySelector("#menu-diet");
                menuWeekNumber = document.querySelector("#menu-week-number");
                menuDayOfWeek = document.querySelector("#menu-day-of-week");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, getMenuData()];
            case 2:
                menuData = _a.sent();
                // const newMenu: Menu = {
                //   id: menuData.length + 1,
                //   name: menuName.value,
                //   description: menuDescription.value,
                //   diet: menuDiet.value,
                //   week_number: parseInt(menuWeekNumber.value),
                //   day_of_week: parseInt(menuDayOfWeek.value),
                // };
                // menuData.push(newMenu);
                displayMenu();
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.error("Error saving menu:", error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
displayMenu();
