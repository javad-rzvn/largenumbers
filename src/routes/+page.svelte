<script>
  import { onMount } from "svelte";

  let input_count = 0;
  let searchInput;
  let suggestions;
  
  const endpoint = "./posts.json";

  let cities = [];

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
