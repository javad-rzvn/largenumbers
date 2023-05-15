<script>
  import Page_header from "../../../Page_header.svelte";

  import { onMount } from "svelte";

  let json_prase;
  let raw_html;
  let parsed_html;
  let json_output;

  
  function plain_text() {
      const json_output = JSON.stringify(this.value, (key, value) => {
        if (typeof value === "string" && value.startsWith("<")) {
          return value.replace(/</g, "&lt;");
        } else {
          return value;
        }
      });
      return json_output;
  }

  onMount(() => {
    parsed_html = document.querySelector(".content-preview");
    raw_html = document.querySelector(".page-content textarea");


    
    // json_prase = JSON.parse(json);
    // parsed_html.innerHTML = json_prase;

  });

  
</script>

<svelte:head>
  <title>یک میلیون متر مکعب یعنی چقدر؟</title>
  <meta name="description" content="" />
  <meta name="keywords" content="" />
</svelte:head>

<div
  class="container-fluid d-flex flex-column justify-content-between"
  id="single-post"
>
  <Page_header />
</div>

<div class="page-content">
  <textarea bind:value={raw_html} on:input={plain_text}></textarea>
</div>

<div class="content-preview">
  {@html raw_html}
</div>

<div class="content-export">
w
</div>

<style>
  :global(body) {
    background-color: #f4f6f8;
  }
  #single-post {
    background-color: #e5a045;
  }
</style>
