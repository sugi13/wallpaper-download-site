// 
let searchField = document.querySelector("#search-field");
let button = document.querySelector("#search-btn");
let resultField = document.querySelector("#result-field");
let imgContainer = document.querySelector(".img-container");

function getData() {
  resultField.innerHTML = `Search result ${searchField.value}`;
    let url = `https://api.unsplash.com/search/photos?query= ${searchField.value}&per_page=30&client_id=jHcF-O-i-HCA9x2HNy4wNRsUrHMGVLm5gAchRTf1rA0`;
    fetch(url)
    .then((response) =>response.json())
    .then((data)=> {
      for(let i = 0; i < data.results.length; i++){
       let image = document.createElement("img");
       image.src = data.results[i].urls.regular;
       imgContainer.appendChild(image);
      }
      console.log(data);
})
}


  button.addEventListener("click", getData);