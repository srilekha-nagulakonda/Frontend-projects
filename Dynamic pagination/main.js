var tbody = document.querySelector("tbody");
var pageul = document.querySelector(".pagination");
var itemShow = document.querySelector("#itemPerPage");
var tr = tbody.querySelectorAll("tr");
var emptyBox = [];
var index = 5;
var itemParPage = 6;
for (let i = 0; i < tr.length; i++) {
  emptyBox.push(tr[i]);
}
itemShow.onchange = giveTrPerPage;
function giveTrPerPage() {
  itemParPage = Number(this.value);
  displaypage(itemParPage);
  pageGeneration(itemParPage);
}
function displaypage(limit) {
  tbody.innerHTML = "";
  for (let i = 0; i < limit; i++) {
    tbody.appendChild(emptyBox[i]);
  }
  // const pageNum = pageul.querySelectorAll('.list')
}
displaypage(itemParPage);

function pageGeneration(getem) {
  const num_of_tr = emptyBox.length;
  if (num_of_tr <= getem) {
    pageul.style.display = "none";
  } else {
    pageul.style.display = "flex";
    const num_of_page = Math.ceil(num_of_tr / getem);
    for (let i = 1; i <= num_of_page; i++) {
      const li = document.createElement("li");
      li.className = "list";
      const a = document.createElement("a");
      a.href = "#";
      a.innerHTML = i;
      a.setAttribute("data-page", i);
      li.appendChild(a);
      pageul.insertBefore(li, pageul.querySelector(".next"));
    }
  }
}
pageGeneration(itemParPage);
