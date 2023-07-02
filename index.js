
let myLeads = JSON.parse(localStorage.getItem('myLeads')) || [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

if (myLeads) {
    render(myLeads);
}

inputBtn.addEventListener("click", function () {
    if (!inputEl.value) {
        return;
    }
    myLeads.push(inputEl.value);
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    inputEl.value = "";
    render(myLeads);
});

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function (tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem('myLeads', JSON.stringify(myLeads));
        render(myLeads);
    });
});

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a href=${leads[i]} target=_blank>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems;
}