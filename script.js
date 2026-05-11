// ================= API =================
const API_KEY = "YOUR_API_KEY";";

// ================= MOVIE DATA =================
const movieData = {
Action: [
["Avengers","https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg","https://www.youtube.com/embed/eOrNdBpGMv8"],
["Gladiator","https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg","https://www.youtube.com/embed/owK1qxDselE"],

["Mad Max Fury Road","https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg","https://www.youtube.com/embed/hEJnMQG9ev8"],
["The Dark Knight","https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg","https://www.youtube.com/embed/EXeTwQWrcwY"],
["Black Panther","https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg","https://www.youtube.com/embed/xjDjIWPwcPU"],
["Iron Man","https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg","https://www.youtube.com/embed/8ugaeA-nMTc"],
["Deadpool","https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg","https://www.youtube.com/embed/Xithigfg7dA"],
["Thor Ragnarok","https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg","https://www.youtube.com/embed/ue80QwXMRHg"],
["Fast & Furious 7","https://static.wikia.nocookie.net/fastandfurious/images/8/87/Fast_One_Poster.jpg/revision/latest/thumbnail/width/360/height/360?cb=20200205060103","https://www.youtube.com/embed/Skpu5HaVkOc"]
],

Drama: [
["Forrest Gump","https://image.tmdb.org/t/p/w500/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg","https://www.youtube.com/embed/bLvqoHBptjg"],
["Fight Club","https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg","https://www.youtube.com/embed/SUXWAEX2jlg"],
["The Social Network","https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg","https://www.youtube.com/embed/lB95KLmpLR4"],
["A Beautiful Mind","https://image.tmdb.org/t/p/w500/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg","https://www.youtube.com/embed/WFJgUm7iOKw"],
["Joker","https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg","https://www.youtube.com/embed/zAGVQLHvwOY"],
["Parasite","https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg","https://www.youtube.com/embed/5xH0HfJHsaY"],
["The Shawshank Redemption","https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg","https://www.youtube.com/embed/6hB3S9bIaco"],
["Green Mile","https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg","https://www.youtube.com/embed/Ki4haFrqSrw"],
["The Pianist","https://image.tmdb.org/t/p/w500/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg","https://www.youtube.com/embed/BFwGqLa_oAo"]
],

SciFi: [
["Interstellar","https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg","https://www.youtube.com/embed/zSWdZVtXT7E"],
["The Matrix","https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg","https://www.youtube.com/embed/vKQi3bBA1y8"],
["Blade Runner 2049","https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg","https://www.youtube.com/embed/gCcx85zbxz4"],
["Gravity","https://image.tmdb.org/t/p/w500/nlCHUWjY9XWbuEUQauCBgnY8ymF.jpg","https://www.youtube.com/embed/OiTiKOy59o4"],
["Dune","https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg","https://www.youtube.com/embed/n9xhJrPXop4"],
["Arrival","https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg","https://www.youtube.com/embed/tFMo3UJ4B4g"],
["Tenet","https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg","https://www.youtube.com/embed/LdOM0x0XDMo"],
["Ex Machina","https://ew.com/thmb/d3vOL4enN-8HPD1gKmD-ucRBcdQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ex-machina-2000-009fd8e54e96468ca028ab1a1bf6ddf4.jpg","https://www.youtube.com/embed/bggUmgeMCdc"]
],

Romance: [
["Titanic","https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg","https://www.youtube.com/embed/kVrqfYjkTdQ"],
["La La Land","https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg","https://www.youtube.com/embed/0pdqf4P9MB8"],
["The Notebook","https://image.tmdb.org/t/p/w500/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg","https://www.youtube.com/embed/BjJcYdEOI0k"],
["Pride and Prejudice","https://image.tmdb.org/t/p/w500/sGjIvtVvTlWnia2zfJfHz81pZ9Q.jpg","https://www.youtube.com/embed/1dYv5u6v55Y"],
["Me Before You","https://image.tmdb.org/t/p/w500/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg","https://www.youtube.com/embed/Eh993__rOxA"],
["Love Actually","https://image.tmdb.org/t/p/w500/7QPeVsr9rcFU9Gl90yg0gTOTpVv.jpg","https://www.youtube.com/embed/fOS-HMiVejo"],
["Notting Hill","https://m.media-amazon.com/images/M/MV5BZjY3YWI5OTMtYTdlNy00ZTZiLWEwYjItN2M1MGVkMDM4ZDExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg","https://www.youtube.com/embed/4RI0QvaGoiI"]
],

Horror: [
["The Conjuring","https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg","https://www.youtube.com/embed/k10ETZ41q5o"],
["The Woman in the Yard","https://upload.wikimedia.org/wikipedia/en/9/98/The_Woman_in_the_Yard_film_poster.jpg","https://www.youtube.com/embed/paFgQNPGlsg"],

["The Nun","https://image.tmdb.org/t/p/w500/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg","https://www.youtube.com/embed/pzD9zGcUNrw"],
["IT","https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg","https://www.youtube.com/embed/FnCdOQsX5kc"],
["Insidious","https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg","https://www.youtube.com/embed/zuZnRUcoWos"]
]
};

// ================= CORE =================
let favorites = JSON.parse(localStorage.getItem("fav")) || [];

function createCard(movie) {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <img src="${movie[1]}" onerror="this.src='https://via.placeholder.com/300x450?text=No+Image'">
    <p>${movie[0]}</p>
    <button onclick="addFav('${movie[0]}','${movie[1]}','${movie[2]}')">❤️</button>
  `;

  div.querySelector("img").onclick = () => openTrailer(movie[2]);

  return div;
}

function renderMovies() {
  const sections = document.getElementById("sections");
  sections.innerHTML = "";

  for (let genre in movieData) {
    const block = document.createElement("div");
    block.innerHTML = `<h2>🔥 ${genre}</h2><div class="movies"></div>`;
    const container = block.querySelector(".movies");

    movieData[genre].forEach(m => container.appendChild(createCard(m)));
    sections.appendChild(block);
  }
}

// ================= SEARCH  =================
document.getElementById("search").addEventListener("input", async (e) => {
  const query = e.target.value.toLowerCase().trim();

  if (query.length < 2) {
    renderMovies();
    return;
  }

  const container = document.getElementById("sections");
  container.innerHTML = `<h2>🔍 Results</h2><div class="movies"></div>`;
  const box = container.querySelector(".movies");

 
  let localResults = [];

  for (let genre in movieData) {
    movieData[genre].forEach(movie => {
      if (movie[0].toLowerCase().includes(query)) {
        localResults.push(movie);
      }
    });
  }

  if (localResults.length > 0) {
    localResults.forEach(m => box.appendChild(createCard(m)));
    return;
  }

  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    const data = await res.json();

    if (!data.Search) {
      box.innerHTML = `<p>No results found</p>`;
      return;
    }

    data.Search.forEach(m => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <img src="${m.Poster || 'https://via.placeholder.com/300x450'}">
        <p>${m.Title}</p>
      `;

      box.appendChild(div);
    });

  } catch (err) {
    box.innerHTML = `<p style="color:red;">API error</p>`;
  }
});

// ================= TRAILER =================
function openTrailer(link) {
  window.open(link.replace("embed/", "watch?v="), "_blank");
}

// ================= FAVORITES =================
function addFav(t,i,tr) {
  favorites.push([t,i,tr]);
  localStorage.setItem("fav", JSON.stringify(favorites));
}

// ================= INIT =================
renderMovies();
// ================= MOOD RECOMMENDATION =================
function moodRecommend() {

  const mood = document.getElementById("moodInput").value.toLowerCase().trim();

  let recommended = [];

  // HAPPY
  if (
    mood.includes("happy") ||
    mood.includes("fun") ||
    mood.includes("excited") ||
    mood.includes("adventure")
  ) {
    recommended = [
      ...movieData.Action,
      ...movieData.SciFi
    ];
  }

  // SAD
  else if (
    mood.includes("sad") ||
    mood.includes("cry") ||
    mood.includes("emotional") ||
    mood.includes("depressed")
  ) {
    recommended = movieData.Drama;
  }

  // LOVE / ROMANTIC
  else if (
    mood.includes("love") ||
    mood.includes("romantic") ||
    mood.includes("crush") ||
    mood.includes("relationship")
  ) {
    recommended = movieData.Romance;
  }

  // HORROR
  else if (
    mood.includes("scary") ||
    mood.includes("horror") ||
    mood.includes("fear") ||
    mood.includes("ghost")
  ) {
    recommended = movieData.Horror;
  }

  // SCI-FI / SPACE
  else if (
    mood.includes("space") ||
    mood.includes("future") ||
    mood.includes("science") ||
    mood.includes("ai")
  ) {
    recommended = movieData.SciFi;
  }

  // DEFAULT
  else {
    recommended = [
      ...movieData.Action,
      ...movieData.Drama,
      ...movieData.SciFi,
      ...movieData.Romance,
      ...movieData.Horror
    ];
  }

  // RANDOM 5 MOVIES
  recommended = recommended
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  // SHOW RESULTS
  const recBox = document.getElementById("recommendations");
  recBox.innerHTML = "";

  recommended.forEach(movie => {
    recBox.appendChild(createCard(movie));
  });
}