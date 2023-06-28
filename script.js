// const accessKey ="fJNVZSK7tFcTx0oNqfshPTk2R1XMQMWSxAfKQULw91w"

// const formEl= document.querySelector("form")
// const inputEl = document.getElementById("search-input")
// const searchResult =document.querySelector(".search-results")
// const showmore =document.getElementById("show-more-button")


//  let inputData = ""
//  let page = 1;


//  async function searchImages(){
//     inputData = inputEl.values;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;



//     const response =await fetch(url);
//     const data =await response.json();


//     const results=data.results;

//     if(page === 1){
//         searchResult.innerHTML = "";
//     }



//     results.map((result)=>{
//         const imageWrapper = document.createElement('div');
//         imageWrapper.classList.add("search-result");


//         const image = document.createElement('img');
//         image.src = result.urls.small;
//         image.alt = result.alt_description;
//         const imageLink =document.createElement('a');
//         imageLink.href = result.links.html;
//         imageLink.target="_blank";
//         imageLink.textContent = result.alt_description;
//         imageWrapper.appendChild(image);
//         imageWrapper.appendChild(imageLink);
//         searchResult.appendChild(imageWrapper);
//     });

//     page++;
//     if(page >1){
//         showmore.style.display="block";
//     }
// }
 
// formEl.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     page = 1;
//     searchImages();
// })
// showmore.addEventListener("click",()=>{
//     searchImages();
// })



// error free code chat gpt 


const accessKey = "fJNVZSK7tFcTx0oNqfshPTk2R1XMQMWSxAfKQULw91w";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResult = document.querySelector(".search-results");
const showMoreButton = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = inputEl.value; // Corrected: should be value, not values
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  results.forEach((result) => { // Changed map to forEach
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");

    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);

    searchResult.appendChild(imageWrapper); // Changed appendChild to append
  });

  page++;

  if (page > 1) {
    showMoreButton.style.display = "block";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMoreButton.addEventListener("click", () => {
  searchImages();
});
