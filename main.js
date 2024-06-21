const time = document.querySelectorAll(".time");
const search = document.querySelector(".search input[type=text]");
const tr = document.querySelectorAll(".tbody tr");
const magic = document.querySelector(".container-table");
const tbody = document.querySelector("tbody");
const notFound = document.getElementById("notFound");
const tdNot = document.querySelector("#notFound td");

search.addEventListener("keyup", () => {
  let searchData = search.value.toLowerCase();

  tr.forEach((value, key) => {
    const table = value.textContent.toLowerCase();

    value.classList.toggle("hide", table.includes(searchData) == false);
    if (document.querySelectorAll(".hide").length > tr.length - 1) {
      notFound.classList.remove("hide");
      notFound.style.display = "table-row";
      tdNot.textContent = "Data Not Found";
    } else {
      notFound.style.display = "none";
    }

    value.style.setProperty("--var", key / 25 + "s");
  });
});

// const trFilter = Array.from(tr);

// let newArray = [];

// function handlingNotFound(cuarray) {
//   if (cuarray == "") {
//     tbody.innerHTML = `<tr>
//               <td colspan="11">Not Found</td>
//             </tr>`;
//   } else {
//     for (let i = 0; i < cuarray.length; i++) {
//       tbody.innerHTML += `<tr>${cuarray[i].innerHTML}</tr>`;
//     }
//   }
// }

// search.addEventListener("keyup", searchFunction);
// function searchFunction() {
//   let searchData = search.value.toLowerCase();

//   newArray = trFilter.filter((item, i) => {
//     item.classList.toggle(
//       "hide",
//       item.textContent.includes(searchData) == false
//     );
//     item.style.setProperty("--var", i / 25 + "s");
//     if (item.textContent.includes(searchData)) {
//       let result = item;
//       return result;
//     }
//   });

//   handlingNotFound(newArray);
// }

const date = new Date();

time.forEach((item) => {
  item.textContent = new Date(date.getTime());
});

//modal
const containerModal = document.querySelector(".container-modal");

function modal() {
  containerModal.classList.toggle("active");
}

const inputDate = document.querySelector("input[type=date]");
inputDate.min = new Date().toJSON().slice(0, 10);
inputDate.defaultValue = new Date().toJSON().slice(0, 10);
