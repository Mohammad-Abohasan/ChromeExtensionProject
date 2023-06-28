
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);
    renderLeads();
})

deleteBtn.addEventListener("click", () => {
    clearLeads();
})

const renderLeads = () => {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`;
    }
    ulEl.innerHTML = listItems;
}

const clearLeads = () => {
    ulEl.innerHTML = "";
}