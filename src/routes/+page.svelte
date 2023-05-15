<script>
  import { onMount } from "svelte";
  import Page_header from "../Page_header.svelte";

  let input_count = 0;
  let searchInput;
  let suggestions;

  const endpoint = "https://waterdirectory.ir/wp-json/wp/v2/posts?categories=265";

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
        // return place.city.match(regex) || place.state.match(regex);
        return place.title.rendered.match(regex);
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
        const cityName = place.title.rendered.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        );
        // const stateName = place.state.replace(
        //   regex,
        //   `<span class="hl">${this.value}</span>`
        // );
        return `
      <li>
        <span class="name">${cityName}</span>
        <span class="population"></span>
      </li>
    `;
      })
      .join("");
    suggestions.innerHTML = html;
  }

  // searchInput.addEventListener('change', displayMatches);
  // searchInput.addEventListener('keyup', displayMatches);
</script>

<svelte:head>
	<title>اعداد بزرگ | Large Numbers</title>
  <meta name="description" content="اگر میخوای بدونی یک عدد بزرگ مفهومش چیه، میتونی در بین اعداد بزرگ جستجو کنی و بفهمی یعنی چقدر بزرگ هست">
  <meta name="keywords" content="اعداد بزرگ, یعنی چقدر؟, large numbers">
</svelte:head>

<div
  class="container-fluid d-flex flex-column justify-content-between"
  id="homepage"
>
  <Page_header />

  <div class="row">
    <div class="col-6">
      <div class="homepage-raccoon">
        <img src="/images/raccoon-10-homepage.png" />
      </div>
    </div>
    <div class="col-6 d-flex justify-content-center align-items-center">
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
            <ul
              class="suggestions"
              style="display:none"
              bind:this={suggestions}
            >
              <!-- <li>Filter for a city</li>
            <li>or a state</li> -->
            </ul>
          {:else}
            <ul class="suggestions" bind:this={suggestions} />
          {/if}
        </form>
      </div>
    </div>
  </div>

  <div class="row p-3">
    <div class="bg-copyright">
      تصویر پس زمینه از: <a href="https://freepik.com/"
        >Freepik</a
      >
    </div>
  </div>
</div>

<style>
  #homepage {
    /* background-image: url("/images/raccoon-10-homepage.png"); */
    background-color: #e5a045;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center right;
    margin: 0 auto;
    min-height: 100vh;
  }
  .homepage-raccoon img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .bg-copyright {
    text-align: left;
    font-family: Vazirmatn, tahoma;
    font-size: 12px;
    font-weight: 200;
    color: #562f08;
    cursor: help;
  }
  .bg-copyright a {
    text-decoration: none;
    color: #562f08;
  }
  #search-form {
    font-family: Vazirmatn, tahoma;
  }
  #search-form button {
    border-radius: 5px 0 0 5px;
  }
  #search-form input {
    border-radius: 15px;
    padding: 25px;
    font-size: 22px;
    border: 8px solid #d38229;
  }
  .search-form {
    width: 100%;
  }
</style>
