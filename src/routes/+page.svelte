<script>
  // import search_ic from "$lib/icons/search.svg?raw";
  let search_ic =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>';

  import { onMount } from "svelte";

  let input_count = 0;
  let searchInput;
  let suggestions;
  

  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  let cities = [];
  // fetch(endpoint)
  //   .then(blob => blob.json())
  //   .then(data => cities.push(...data));

  onMount(async () => {
    const blob = await fetch(endpoint);
    const data = await blob.json();
    cities.push(...data);
  });

  function findMatches(wordToMatch, cities) {
    return cities
      .filter((place) => {
        // here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex);
      })
      .slice(0, 10);
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function displayMatches() {
    input_count = this.value.length;

    const matchArray = findMatches(this.value, cities);
    const html = matchArray
      .map((place) => {
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        );
        const stateName = place.state.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        );
        return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
      })
      .join("");
    suggestions.innerHTML = html;
  }

  // searchInput.addEventListener('change', displayMatches);
  // searchInput.addEventListener('keyup', displayMatches);
</script>

<div
  class="container d-flex flex-column justify-content-between g-0"
  id="homepage"
>
  <div class="row px-3">
    <ul id="top-menu">
      <li><a href="#" class="active">صفحه اصلی</a></li>
      <li><a href="#">ارسال مطلب</a></li>
      <li><a href="#">صحبت با من</a></li>
    </ul>
  </div>

  <div class="row">
    <div class="col-5" />
    <div class="col-6">
      <div class="input-group mb-3" id="search-form">
        <form class="search-form">
          <input
            type="text"
            class="search form-control"
            placeholder="عدد بزرگی که دنبالش هستی چیه؟"
            bind:this={searchInput}
            on:input={displayMatches}
          />
          <!-- <button class="btn btn-outline-secondary" type="button">
                    🔍
                </button> -->
          {#if input_count < 1}
            <ul class="suggestions" style="display:none" bind:this={suggestions}>
              <!-- <li>Filter for a city</li>
            <li>or a state</li> -->
            </ul>
            {:else}
            <ul class="suggestions" bind:this={suggestions}></ul>
          {/if}
        </form>
      </div>
    </div>
    <div class="col-1" />
  </div>

  <div class="row p-3">
    <div class="bg-copyright">
      تصویر پس زمینه از: <a href="https://dribbble.com/AdrianaCaycedo"
        >Balconies - Adriana Caycedo</a
      >
    </div>
  </div>
</div>

<style>
  #homepage {
    background-image: url("/images/homepage-bg2.png");
    background-color: #c7e8f5;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center right;
    margin: 25px auto;
    min-height: 85vh;
    border-radius: 15px;
  }
  #top-menu {
    padding: 10px;
    margin: 0;
    text-align: left;
  }
  #top-menu li {
    list-style: none;
    display: inline;
    margin-left: 15px;
  }
  #top-menu li a {
    text-decoration: none;
    font-feature-settings: "ss01", "tnum";
    font-family: Vazirmatn, tahoma;
    font-size: 14px;
    font-weight: 300;
    color: #1d3568;
  }
  #top-menu li a:hover,
  #top-menu li a.active {
    font-weight: 500;
  }
  .bg-copyright {
    text-align: left;
    font-family: Vazirmatn, tahoma;
    font-size: 12px;
    font-weight: 200;
    color: #1d3568;
  }
  .bg-copyright a {
    text-decoration: none;
    color: #1d3568;
  }
  #search-form {
    font-family: Vazirmatn, tahoma;
  }
  #search-form button {
    border-radius: 5px 0 0 5px;
  }
  #search-form input {
    border-radius: 10px;
    padding: 15px;
  }
  .search-form {
    width: 100%;
  }
</style>
