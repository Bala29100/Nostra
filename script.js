/* navbar */
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
/* navbar end*/

/* bonus */
function hideBonus() {
  const bonus = document.querySelector(".bonus");
  bonus.style.display = "none";
}
/* bonus end*/


/* search */

let search = document.getElementById("search")
let container = document.getElementById("container")
let hvalue = container.querySelectorAll("h1");

search.addEventListener("keyup", function () {
  let inputValue = event.target.value.toUpperCase();
  for (count = 0; count < hvalue.length; count++) {
    console.log(hvalue[count].textContent + ";" + hvalue[count].textContent.indexOf(inputValue));
    if (hvalue[count].textContent.toUpperCase().indexOf(inputValue) <= -1) {

      hvalue[count].parentElement.style.display = "none";
    } else {
      hvalue[count].parentElement.style.display = "block";
    }
  }
})