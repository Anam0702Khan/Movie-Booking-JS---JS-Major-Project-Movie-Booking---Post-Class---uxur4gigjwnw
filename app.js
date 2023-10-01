import { fetchMovieAvailability, fetchMovieList } from "./api.js";
import { database } from "./api.js";
import { availibility } from "./api.js";

fetchMovieList.then((res) => {
  // console.log(res);
});

let confirmpurchase = document.getElementById("confirm-purchase");
let booker = document.getElementById("booker");
let bookbtn = document.querySelector("#book-ticket-btn");
bookbtn.addEventListener("click", displayFn);

function displayFn() {
  selected= document.getElementsByClassName('selected-seat');
  console.log(selected);
  let an = Array.from(selected).map((e) => e.innerHTML);
  if(an.length===0){
    return
  }
  confirmpurchase.classList.remove('v-none');

   let purchase = document.getElementById('purchase')
   purchase.addEventListener('click',purchaseFn)   
   console.log('gyyfff');
}
let selected= ''
let seats=''
let confirmseat = document.getElementById('confirm_seats');
function purchaseFn(e) {
  
   confirmpurchase.classList.toggle("v-none")
   e.preventDefault();
  console.log('purchaseFn');
  let emailval= document.getElementById('email').value;
  let phnval= document.getElementById('phone').value;

  
   selected= document.getElementsByClassName('selected-seat');
  console.log(selected);
 
  let an = Array.from(selected).map((e) => e.innerHTML);
  
    seats= an.join(',');
  console.log('---------');
  console.log(an);

  let success = document.createElement("div");
  success.classList.add("success");

  success.innerHTML = `
      <p style="font-weight: bold">Booking details</p>
      <span>Seats:-</span>
      <span>${seats}</span>
      <br>
      <span>Email:-</span>
      <span id="showemailvalue">${emailval}</span>
      <br>
      <span>Phone:-</span>
      <span id="showphnvalue">${phnval}</span>

    `;
  booker.appendChild(success);
  }

function changeclass(e) {
  e.target.classList.add("selected-seat");
}


function showFn( movieName) {
  booker.classList.toggle("v-none");
  console.log("called");
  setTimeout(() => {
  fetchMovieAvailability(movieName).then((resp) => {
    console.log(resp);
    console.log(movieName);
    for (let i = 1; i <= 24; i++) {
      let x = document.getElementById(`booking-grid-${i}`);
      x.classList.value = " ";
      x.removeEventListener("click", changeclass);

      if (resp.includes(i)) {
        x.classList.add("unavailable-seat");
      } else {
        x.classList.add("available-seat");
        x.addEventListener("click", changeclass);
      }
    }
  });
  document.getElementById("book-ticket-btn").classList.toggle("v-none");
  },3000);
}
//removing the loader after displaying the adata
let loader=document.getElementById('loader')
setTimeout(()=>{
    loader.removeAttribute('id');
},2000)

let movieholder = document.querySelector(".movie-holder");
setTimeout(() => {
database.map((item, index) => {
  const element = document.createElement("a");
  element.classList.add("movie");
  element.id = index;
  element.innerHTML = `
        
      <img src="${item.imgUrl}"  />
        <div class="movie-info">
            <h2>${item.name}</h2>
            <h4>${item.rating}</h4>
         </div>
    `;

  element.addEventListener("click", () => showFn(item.name));
  movieholder.appendChild(element);
  document.documentElement.scrollTop =0
});
},3000)
