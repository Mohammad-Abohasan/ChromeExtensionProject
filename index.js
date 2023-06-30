
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

renderLeads();

inputBtn.addEventListener("click", function () {
    if(!inputEl.value) {
        return;
    }
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    renderLeads();
})

deleteBtn.addEventListener("click", () => {
    clearLeads();
})

function renderLeads() {
    myLeads = JSON.parse(localStorage.getItem('myLeads')) || [];
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a href=${myLeads[i]} target=_blank>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems;
}

function clearLeads() {
    localStorage.clear();
    renderLeads();
}