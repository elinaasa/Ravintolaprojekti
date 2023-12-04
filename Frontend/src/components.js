"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuRows = exports.errorModal = exports.DailyMenu = void 0;
var DailyMenu = function (Course, Menu) {
  var name = Course.name,
    description = Course.description,
    diet = Course.diet;
  var html = "\n        <h3>"
    .concat(name, "</h3>\n        <p>")
    .concat(description, "</p>\n        <p>")
    .concat(diet, "</p>\n        ");
  Menu.courses.forEach(function (course) {
    var name = course.name,
      description = course.description,
      diet = course.diet;
    html += "\n                  <tr>\n                    <td>"
      .concat(name, "</td>\n                    <td>")
      .concat(
        description !== null && description !== void 0 ? description : " - ",
        "</td>\n                    <td>"
      )
      .concat(
        diet !== null && diet !== void 0 ? diet : " - ",
        "</td>\n                  </tr>\n                  "
      );
    console.log(course);
    return html;
  });
};
exports.DailyMenu = DailyMenu;
var errorModal = function (message) {
  var html = "\n        <h3>Error</h3>\n        <p>".concat(
    message,
    "</p>\n        "
  );
  return html;
};
exports.errorModal = errorModal;
var MenuRows = function (course) {
  var name = course.name,
    description = course.description,
    diet = course.diet;
  var tr = document.createElement("tr");
  var nameCell = document.createElement("td");
  nameCell.innerText = name;
  var descriptionCell = document.createElement("td");
  descriptionCell.innerText = description;
  var dietCell = document.createElement("td");
  dietCell.innerText = diet;
  tr.appendChild(nameCell);
  tr.appendChild(descriptionCell);
  tr.appendChild(dietCell);
  return tr;
};

exports.MenuRows = MenuRows;
