import { Course, Menu } from "./types";

const DailyMenu = (Course: Course, Menu: Menu) => {
  const { name, description, diet } = Course;
  let html = `
        <h3>${name}</h3>
        <p>${description}</p>
        <p>${diet}</p>
        `;
  Menu.courses.forEach((course: Course) => {
    const { name, description, diet } = course;
    html += `
                  <tr>
                    <td>${name}</td>
                    <td>${course ?? " - "}</td>
                  </tr>
                  `;
    return html;
  });
};

const restaurantModalWeekly = (restaurant: Restaurant, menu: MenuWeekly) => {
  const { name, address, city, postalCode, phone, company } = restaurant;
  let html = `<h3>${name}</h3>
    <p>${company}</p>
    <p>${address} ${postalCode} ${city}</p>
    <p>${phone}</p>
    <table>
      <tr>
        <th>Course</th>
        <th>Diet</th>
        <th>Price</th>
      </tr>
    `;

  for (const day of menu.days) {
    day.courses.forEach((course: Course) => {
      const { name, diets, price } = course;
      html += `
              <tr>
                <td>${name}</td>
                <td>${diets ?? " - "}</td>
                <td>${price ?? " - "}</td>
              </tr>
              `;
    });
    html += "</table>";
  }
  return html;
};

const errorModal = (message: string) => {
  const html = `
        <h3>Error</h3>
        <p>${message}</p>
        `;
  return html;
};

export { restaurantModal, restaurantModalWeekly, errorModal };
