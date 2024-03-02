let Acces_key = "RjH1pOYWjyeF5qVvnti6Bwpd2doevqx1Vld7BkfDCHY";

let searchInputt = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchBtn');
let showDatats = document.getElementById('showData');
let moreBtn = document.getElementById('moreBtn');

let page = 1;

const getData = async (searchValue, pageNo) => {
  let images = await fetch(`https://api.unsplash.com/search/photos?query=${searchValue}&per_Page=28&P=${pageNo} age&client_id=${Acces_key}`);
  let JsonData = await images.json();

  console.log(JsonData.results)

  if (pageNo === 1) {
    showDatats.innerHTML = "";
  }

  JsonData.results.forEach(function (data) {
    console.log(data.urls.small);

    let Div = document.createElement('div');
    Div.classList.add("card");
    showDatats.appendChild(Div);

    Div.innerHTML = `<img src="${data.urls.small}" alt="">
                                <h3>${data.alt_description}</h3>
                               <a href="${data.links.html}" target="_blank">
                               <button class="button" >About</button>
                               </a>`;
  });

}

searchBtn.addEventListener('click', function () {
  if (searchInputt.value) {
  let searchValue = searchInputt.value;
    getData(searchValue, 1);
  }
  else {
    alert("Please Search Image")
  }
});

moreBtn.addEventListener("click", function () {
  if (searchInputt.value) {
    let searchValue = searchInputt.value;
    getData(searchValue, page++);
  }
  else {
    alert("No Image Search");
  }

});