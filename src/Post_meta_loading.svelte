<script>
  import List_ic from "./icons/List_ic.svelte";
  import Date_ic from "./icons/Date_ic.svelte";
  import Clock_ic from "./icons/Clock_ic.svelte";
</script>

<div class="post-meta">
  <h1 class="skeleton skeleton-heading" />
  <!-- <h2></h2> -->
</div>

<div class="post-stat">
  <div class="row">
    <div class="col-4 stat-border">
      <div class="stat-item">
        <List_ic class="svg" />
        <div class="skeleton skeleton-text" />
      </div>
    </div>
    <div class="col-4 stat-border">
      <div class="stat-item">
        <Date_ic class="svg" />
        <div class="skeleton skeleton-text" />
      </div>
    </div>
    <div class="col-4">
      <div class="stat-item">
        <Clock_ic class="svg" />
        <div class="skeleton skeleton-text" />
      </div>
    </div>
  </div>
</div>

<style>
  .post-meta {
    min-height: 150px;
    display: grid;
    align-content: center;
  }
  h1 {
    font-family: Vazirmatn, tahoma;
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    font-feature-settings: "ss01", "tnum";
  }
  h2 {
    font-family: andale mono, monospace, Vazirmatn, tahoma;
    font-size: 20px;
    font-weight: 200;
    text-align: center;
    direction: ltr;
    letter-spacing: 3px;
  }
  .post-stat {
    width: 900px;
    margin: 0 auto;
    background: #f8a23d;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    z-index: 99;
    margin-bottom: -5%;
    box-shadow: 0 5px 19px rgb(0 0 0 / 13%);
    font-family: Vazirmatn, tahoma;
    font-size: 15px;
    font-weight: 300;
  }
  .stat-border {
    border-left: 1px solid #d3842a;
  }
  .stat-item {
    display: flex;
    align-items: center;
    font-feature-settings: "ss01", "tnum";
  }
  .stat-item :global(.svg) {
    display: inline;
    margin-left: 10px;
    width: 25px;
    height: 25px;
    transform: scaleX(-1);
    stroke: #562f08;
    stroke-width: 10px;
    fill: none;
    padding: 1px;
  }

  .skeleton {
    opacity: 0.7;
    animation: skeleton-loading 1s linear infinite alternate;
  }

  .skeleton-heading {
    width: 40%;
    height: 2.5rem;
    margin-bottom: 0.25rem;
    border-radius: 0.5rem;
    margin: 0 auto;
  }

  .skeleton-text {
    width: 100%;
    height: 1.5rem;
    margin-bottom: 0.25rem;
    border-radius: 0.25rem;
  }

  .skeleton-text:last-child {
    margin-bottom: 0;
    width: 80%;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(42, 89%, 71%);
    }

    100% {
      background-color: hsl(42, 89%, 31%);
    }
  }
</style>
