<<<<<<< HEAD
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
=======
// Function to fetch menu data from the server
const getMenuData = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/menu');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching menu data:', error);
    return [];
  }
>>>>>>> bb6b02f (etusivun menu)
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
var getMenuData2 = function () { return __awaiter(_this, void 0, void 0, function () {
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
function getWeekNumber(date) {
    var firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    var pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}
console.log(getWeekNumber(new Date()));
function getWeekDay(date) {
    return date.getDay();
}
console.log(getWeekNumber(new Date()));
function getWeekDayName(day) {
<<<<<<< HEAD
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
=======
  const days = ['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai'];
  return days[day];
>>>>>>> bb6b02f (etusivun menu)
}
console.log(getWeekDayName(0));
<<<<<<< HEAD
var displayMenu2 = function () { return __awaiter(_this, void 0, void 0, function () {
    var menuData, menuContainer, currentDate, currentDayOfWeek, currentWeekNumber, filteredMenu;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getMenuData2()];
            case 1:
                menuData = _a.sent();
                menuContainer = document.querySelector(".menu-container");
                if (menuContainer) {
                    menuContainer.innerHTML = "";
                }
                currentDate = new Date();
                currentDayOfWeek = getWeekDay(currentDate);
                currentWeekNumber = getWeekNumber(currentDate);
                filteredMenu = menuData.filter(function (menu) {
                    return menu.day_of_week === currentDayOfWeek &&
                        menu.week_number === currentWeekNumber;
                });
                filteredMenu.forEach(function (menu) {
                    var menuCard = document.createElement("div");
                    menuCard.classList.add("menu-card");
                    var day = document.querySelector("#week-day");
                    if (day) {
                        day.innerText = getWeekDayName(menu.day_of_week - 1);
                    }
                    var h3 = document.createElement("h3");
                    h3.innerHTML = menu.name;
                    var p1 = document.createElement("p");
                    p1.innerHTML = menu.description;
                    var p2 = document.createElement("p");
                    p2.innerHTML = menu.diet;
                    menuCard.appendChild(day);
                    menuCard.appendChild(h3);
                    menuCard.appendChild(p1);
                    menuCard.appendChild(p2);
                    if (menuContainer) {
                        menuContainer.appendChild(menuCard);
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
displayMenu2();
=======

const displayMenu = async () => {
  const menuData = await getMenuData();
  const menuContainer = document.querySelector('.menu-container');
  if (menuContainer) {
    menuContainer.innerHTML = '';
  }

  const currentDate = new Date();
  const currentDayOfWeek = getWeekDay(currentDate);
  const currentWeekNumber = getWeekNumber(currentDate);

  const filteredMenu = menuData.filter(
    (menu) =>
      menu.day_of_week === currentDayOfWeek &&
      menu.week_number === currentWeekNumber
  );

  const day = document.createElement('h2');
  day.innerHTML = getWeekDayName(filteredMenu[0].day_of_week - 1);
  menuContainer.appendChild(day);

  filteredMenu.forEach((menu) => {
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');

    const h3 = document.createElement('h3');
    h3.innerHTML = menu.name;

    const p1 = document.createElement('p');
    p1.innerHTML = menu.description;

    const p2 = document.createElement('p');
    p2.innerHTML = menu.diet;

    menuCard.appendChild(h3);
    menuCard.appendChild(p1);
    menuCard.appendChild(p2);

    if (menuContainer) {
      menuContainer.appendChild(menuCard);
    }
  });
};

// Function to save the menus
// check the id of the menu and update the menu data
// remove the menu card and display the updated menu
// save the menu data to the server once the submit button is clicked

displayMenu();
>>>>>>> bb6b02f (etusivun menu)
