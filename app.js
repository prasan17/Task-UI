function Form__Detail(buyer__name, project__tag) {
    this.buyer__name = buyer__name;
    this.project__tag = project__tag;
}

function UI() { }

UI.prototype.addFormtoSearch = function (form__detail) {
    const list = document.getElementById("form__details");
    //Create Li
    const list__element = document.createElement("ul");
    const list__elemettooltip = document.createElement("div");
    list__element.innerHTML = `
    <li>Buyer Name: ${form__detail.buyer__name} , </li>
    <li>Project Tags:${form__detail.project__tag}</li>
    `;
    list__elemettooltip.innerHTML = `
    <div>Buyer Name: ${form__detail.buyer__name}  </div>
    <div> Buyer Name: ${ form__detail.project__tag}  </div > `
    list.appendChild(list__element);
}
// Show Details

var filter__button = document.getElementById("Filter__button").addEventListener("click", showfilter);
function showfilter() {
    var filter__wrapper = document.getElementById("Search__detail-wrapper");
    if (filter__wrapper.style.display === "none") {
        filter__wrapper.style.display = "block";
    } else {
        filter__wrapper.style.display = "none";
    }
}
// Show Tags 

var show__settings = document.getElementById("tip--setting").addEventListener("click", showsettings);
function showsettings() {
    var tags__wrapper = document.getElementById("tags__wrapper");
    if (tags__wrapper.style.display === "none") {
        tags__wrapper.style.display = "block";
    } else {
        tags__wrapper.style.display = "none";
    }
}

// Remove Lists

var clear__search = document.getElementById("clear__search").addEventListener("click", removelist);
function removelist() {
    var form__details = document.getElementById("form__details");
    form__details.style.display = "none";
    this.style.display = "none";
}

// Forms Submit

document.getElementById("detail__form").addEventListener("submit", function (e) {
    const buyer__name = document.getElementById("buyer__name").value,
        project__tag = document.getElementById("inlineFormCustomproject").value;
    const form__detail = new Form__Detail(buyer__name, project__tag);
    const ui = new UI();
    ui.addFormtoSearch(form__detail);
    const form = document.getElementById("Search__detail-wrapper");
    const cross = document.getElementById("clear__search");
    form.style.display = "none";
    cross.style.display = "block";
    e.preventDefault();
});