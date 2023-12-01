import { isDailyMenu } from "./functions";
import { Course, DailyMenu, WeeklyMenu } from "./interfaces/Menu";

const restaurantModal = (restaurant: Restaurant, menu: DailyMenu | WeeklyMenu) => {
  const {name, address, city, postalCode, phone, company} = restaurant;
  let html = `<h3>${name}</h3>
    <p>${company}</p>
    <p>${address} ${postalCode} ${city}</p>
    <p>${phone}</p>
    <table>
      <tr>
        <th>Ruokalaji</th>
        <th>Ruokavalio</th>
        <th>Hinta</th>
      </tr>
    `;

    if (isDailyMenu(menu)) {
      menu.courses.forEach((course: Course) => {
        const {name, description, diet} = course;
        html += `
              <tr>
                <td>${name}</td>
                <td>${description ?? ' - '}</td>
                <td>${diet ?? ' - '}</td>
              </tr>
              `;
      });
    } else {
      menu.days.forEach((day) => {
        const {day_of_week, courses} = day;
        html += `
              <tr>
                <td colspan="3">${day_of_week}</td>
              </tr>
              `;
        courses.forEach((course: Course) => {
          const {name, description, diet} = course;
          html += `
                <tr>
                  <td>${name}</td>
                  <td>${description ?? ' - '}</td>
                  <td>${diet ?? ' - '}</td>
                </tr>
                `;
        });
      });
    }
  html += '</table>';
  return html;
};

// TODO: Create li elements for menu items using DOM methods


export {restaurantModal};
