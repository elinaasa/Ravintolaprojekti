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
var menuData = [];
function getWeekNumber(date) {
    var firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    var pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}
function getWeekDay(date) {
    var monday = new Date('December 4, 2023 00:00:00');
    return monday.getDay();
}
function getWeekDayName(day) {
    var days = [
        "Maanantai",
        "Tiistai",
        "Keskiviikko",
        "Torstai",
        "Perjantai",
        "Lauantai",
        "Sunnuntai",
    ];
    return days[day];
}
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
                menuData = data;
                return [2 /*return*/, data];
            case 3:
                error_1 = _a.sent();
                console.error("Error fetching menu data:", error_1);
                return [2 /*return*/, []];
            case 4: return [2 /*return*/];
        }
    });
}); };
var displayMenu = function (weekday, weeknumber, container) { return __awaiter(_this, void 0, void 0, function () {
    var menuData, menuContainer, filteredMenu, day;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getMenuData()];
            case 1:
                menuData = _a.sent();
                menuContainer = container;
                filteredMenu = menuData.filter(function (menu) {
                    return menu.day_of_week === weekday &&
                        menu.week_number === weeknumber;
                });
                day = document.createElement("h2");
                day.innerText = getWeekDayName(filteredMenu[0].day_of_week - 1);
                if (menuContainer) {
                    menuContainer.appendChild(day);
                }
                filteredMenu.forEach(function (menu) {
                    var menuCard = document.createElement("div");
                    menuCard.classList.add("menu-card");
                    var name = document.createElement("h3");
                    name.innerHTML = menu.name;
                    var desc = document.createElement("p");
                    desc.innerHTML = menu.description;
                    var diet = document.createElement("h4");
                    diet.innerHTML = menu.diet;
                    var quantityInput = document.createElement("input");
                    quantityInput.type = "number";
                    quantityInput.value = "1";
                    quantityInput.classList.add("quantity-input");
                    var addToCartButton = document.createElement("button");
                    addToCartButton.classList.add("addToCartButton");
                    addToCartButton.innerText = "Add to Cart";
                    menuCard.appendChild(name);
                    menuCard.appendChild(desc);
                    menuCard.appendChild(diet);
                    menuCard.appendChild(quantityInput);
                    menuCard.appendChild(addToCartButton);
                    if (menuContainer) {
                        menuContainer.appendChild(menuCard);
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
    }
    ShoppingCart.prototype.addToCart = function (menu, quantity) {
        var existingItem = this.items.find(function (item) { return item.name === menu.name; });
        if (existingItem) {
            existingItem.quantity += quantity;
        }
        else {
            this.items.push({ name: menu.name, quantity: quantity });
        }
        this.displayCart();
    };
    ShoppingCart.prototype.removeFromCart = function (menu) {
        var existingItemIndex = this.items.findIndex(function (item) { return item.name === menu.name; });
        if (existingItemIndex !== -1) {
            this.items.splice(existingItemIndex, 1);
        }
        this.displayCart();
    };
    ShoppingCart.prototype.displayCart = function () {
        var _this = this;
        var cartContainer = document.querySelector(".cart-container");
        if (cartContainer) {
            cartContainer.innerHTML = '';
            var _loop_1 = function (item) {
                var itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                var itemNameElement = document.createElement('p');
                itemNameElement.innerText = "".concat(item.name, " (Quantity: ").concat(item.quantity, ")");
                var removeButton = document.createElement('button');
                removeButton.classList.add('removeFromCartButton');
                removeButton.innerText = 'Remove from Cart';
                itemElement.appendChild(itemNameElement);
                itemElement.appendChild(removeButton);
                cartContainer.appendChild(itemElement);
                removeButton.addEventListener('click', function () {
                    var selectedMenu = menuData.find(function (menu) { return menu.name === item.name; });
                    if (selectedMenu) {
                        _this.removeFromCart(selectedMenu);
                    }
                });
            };
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                _loop_1(item);
            }
        }
    };
    return ShoppingCart;
}());
var currentDate = new Date();
var currentDayOfWeek = getWeekDay(currentDate);
var currentWeekNumber = getWeekNumber(currentDate);
displayMenu(currentDayOfWeek, currentWeekNumber, document.querySelector(".menu-container"));
for (var i = 1; i < 8; i++) {
    displayMenu(i, currentWeekNumber, document.querySelector(".weeklyLunch-right"));
}
var shoppingCart = new ShoppingCart();
var menuContainer = document.querySelector(".menu-container");
menuContainer.addEventListener('click', function (event) {
    var clickedElement = event.target;
    if (clickedElement.classList.contains('addToCartButton')) {
        var menuCard = clickedElement.closest('.menu-card');
        if (menuCard) {
            var menuNameElement = menuCard.querySelector('h3');
            var quantityInput = menuCard.querySelector('.quantity-input');
            var selectedMenuName_1 = (menuNameElement === null || menuNameElement === void 0 ? void 0 : menuNameElement.innerHTML) || '';
            var selectedQuantity = parseInt(quantityInput.value, 10) || 1;
            var selectedMenu = menuData.find(function (menu) { return menu.name === selectedMenuName_1; });
            if (selectedMenu) {
                shoppingCart.addToCart(selectedMenu, selectedQuantity);
            }
        }
    }
});
var cartContainer = document.createElement("div");
cartContainer.classList.add("cart-container");
document.body.appendChild(cartContainer);
