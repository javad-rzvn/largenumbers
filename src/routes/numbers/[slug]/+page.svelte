<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import Page_header from "../../../Page_header.svelte";
  import Post_meta from "../../../Post_meta.svelte";
  import Post_content from "../../../Post_content.svelte";
  import Post_meta_loading from "../../../Post_meta_loading.svelte";
  import Post_content_loading from "../../../Post_content_loading.svelte";

  let estimation;
  let post_name;
  let post_cat;

  const fetchPost = (async () => {
    const id = $page.params.slug;
    const response = await fetch(
      `https://waterdirectory.ir/wp-json/wp/v2/posts?slug=${id}&_embed=wp:term`
    );
    return await response.json();
  })();

  let post_date;
  // https://petehanner.medium.com/javascript-promises-and-fetch-33a5f5d13fe0
  const fetch_post_date = fetchPost.then((data) => {
    const post_date_raw = data[0].date;
    const date = new Date(post_date_raw);
    post_date = new Intl.DateTimeFormat("fa-IR").format(date);
  });

  onMount(() => {
    var words = document.querySelector(".post-content").textContent.trim();

    function EstimateReadingTime(str) {
      function WordCount(str) {
        return str.split(" ").length;
      }
      if (WordCount(str) <= 300) {
        return "کمتر از 1 دقیقه";
      } else {
        return "حدود " + Math.round(WordCount(str) / 200) + " دقیقه";
      }
    }
    estimation = EstimateReadingTime(words);
  });
</script>

<svelte:head>
  {#await fetchPost}
    <title>اعداد بزرگ | Large numbers</title>
  {:then data}
    <title>{data[0].title.rendered}</title>
    <meta name="description" content={data[0].excerpt.rendered} />
  {:catch error}
    <p>An error occurred!</p>
  {/await}
</svelte:head>

<div
  class="container-fluid d-flex flex-column justify-content-between"
  id="single-post"
>
  <Page_header />

  <div
    class="row justify-content-center align-items-center post-meta-container"
  >
    {#await fetchPost}
      <Post_meta_loading />
    {:then data}
      <Post_meta
        title={data[0].title.rendered}
        category={data[0]["_embedded"]["wp:term"][0][0].name}
        date={post_date}
        reading_time={estimation}
      />
    {:catch error}
      <p>An error occurred!</p>
    {/await}

    <div class="divider-top" />
  </div>
</div>

<div class="post-content">
  {#await fetchPost}
      <Post_content_loading />
    {:then data}
      <Post_content
        body={data[0].content.rendered}
      />
    {:catch error}
      <p>An error occurred!</p>
    {/await}
</div>

<style>
  :global(body) {
    background-color: #f4f6f8;
  }
  #single-post {
    background-color: #e5a045;
  }
  .divider-top {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI4dmgiIHZpZXdCb3g9IjAgMCAxMjgwIDE0MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZjRmNmY4ICI+PHBhdGggZD0iTTEyODAgMTQwVjBTOTkzLjQ2IDE0MCA2NDAgMTM5IDAgMCAwIDB2MTQweiIvPjwvZz48L3N2Zz4=);
    background-size: 100% 8vh;
    bottom: 0;
    height: 8vh;
    z-index: 1;
  }
  .post-content {
    margin-top: 5%;
  }
</style>
