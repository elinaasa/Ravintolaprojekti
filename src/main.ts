// TODO: create functions for creating lists about menus

const list = document.querySelector('ul');
if (!list) {
    throw new Error('List not found');
}
list.addEventListener('click', () => {
    list.style.display = 'none';
});

const createList = (menuDate : boolean = true) => {
    const list = document.querySelector('ul');
    if (!list) return;
    list.innerHTML = '';
    menus.forEach((menu)) => {
        const li = menuRow(menu);
        list.appendChild(li);
    }};
