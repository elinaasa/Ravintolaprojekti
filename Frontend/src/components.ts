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
                    <td>${description ?? " - "}</td>
                    <td>${diet ?? " - "}</td>
                  </tr>
                  `;
    console.log(course);
    return html;
  });
};

const errorModal = (message: string) => {
  const html = `
        <h3>Error</h3>
        <p>${message}</p>
        `;
  return html;
};

const MenuRows = (course: Course) => {
  const { name, description, diet } = course;
  const tr = document.createElement("tr");
  const nameCell = document.createElement("td");
  nameCell.innerText = name;
  const descriptionCell = document.createElement("td");
  descriptionCell.innerText = description;
  const dietCell = document.createElement("td");
  dietCell.innerText = diet;
  tr.appendChild(nameCell);
  tr.appendChild(descriptionCell);
  tr.appendChild(dietCell);
  return tr;
};

export { DailyMenu, errorModal, MenuRows };
