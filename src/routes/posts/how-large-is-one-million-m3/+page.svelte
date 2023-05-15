<script>
  import Page_header from "../../../Page_header.svelte";
  import Post_meta from "../../../Post_meta.svelte";

  import { onMount } from "svelte";
  let estimation;

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

    var estimation = document.querySelector(".result");

    const html = `
    <div class="alert alert-warning" role="alert">
          A simple warning alert—check it out!
        </div>
`;

const json = JSON.stringify(html, (key, value) => {
  if (typeof value === 'string' && value.startsWith('<')) {
    return value.replace(/</g, '&lt;');
  } else {
    return value;
  }
});
console.log(json)
  var json_prase = JSON.parse(json);
//   var json_prase = `
// <div>
//   <h1>This is a heading</h1>
//   <p>This is a paragraph.</p>
// </div>
// `;
  estimation.innerHTML = json_prase;
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

  <div
    class="row justify-content-center align-items-center post-meta-container"
  >
    <Post_meta
      category="آب"
      date="25 اردیبهشت 1402"
      reading_time={estimation}
    />
    <div class="divider-top" />
  </div>
</div>

<div class="post-content">
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
      </div>
      <div class="col-6">
        <div class="alert alert-warning" role="alert">
          A simple warning alert—check it out!
        </div>
      </div>
    </div>
  </div>

  <div class="result"></div>

  Add paragraph or remove elements to the DOM to change the result. Man bun
  slow-carb raw denim, swag succulents raclette kickstarter palo santo YOLO
  retro normcore microdosing biodiesel taiyaki. Kogi lumbersexual narwhal master
  cleanse. Biodiesel pabst viral, letterpress leggings post-ironic polaroid
  forage. Forage cred tacos palo santo biodiesel post-ironic vice XOXO heirloom
  keffiyeh tbh live-edge stumptown letterpress banjo. Master cleanse banh mi
  shabby chic street art neutra tbh enamel pin lumbersexual art party tote bag
  narwhal 90's. Thundercats cray banh mi, post-ironic seitan aesthetic celiac
  actually edison bulb austin hashtag intelligentsia taxidermy succulents.
  Farm-to-table kickstarter cloud bread chartreuse cray tattooed, stumptown
  chicharrones mustache YOLO wolf disrupt godard banjo. Beard 90's next level yr
  four dollar toast 8-bit intelligentsia. Organic lomo poutine, direct trade
  kogi fixie everyday carry normcore drinking vinegar kale chips retro schlitz
  sustainable. Bespoke taxidermy hexagon, godard waistcoat gentrify listicle
  normcore brunch venmo tacos photo booth cronut. Raclette irony gentrify,
  shabby chic swag pitchfork chia offal cred taxidermy kombucha quinoa chambray.
  Tattooed cloud bread DIY ramps everyday carry bushwick distillery echo park.
  Slow-carb poutine cliche jean shorts put a bird on it literally pork belly.
  Biodiesel pabst viral, letterpress leggings post-ironic polaroid forage.
  Forage cred tacos palo santo biodiesel post-ironic vice XOXO heirloom keffiyeh
  tbh live-edge stumptown letterpress banjo. Master cleanse banh mi shabby chic
  street art neutra tbh enamel pin lumbersexual art party tote bag narwhal 90's.
  Thundercats cray banh mi, post-ironic seitan aesthetic celiac actually edison
  bulb austin hashtag intelligentsia taxidermy succulents. Farm-to-table
  kickstarter cloud bread chartreuse cray tattooed, stumptown chicharrones
  mustache YOLO wolf disrupt godard banjo. Beard 90's next level yr four dollar
  toast 8-bit intelligentsia. Organic lomo poutine, direct trade kogi fixie
  everyday carry normcore drinking vinegar kale chips retro schlitz sustainable.
  Bespoke taxidermy hexagon, godard waistcoat gentrify listicle normcore brunch
  venmo tacos photo booth cronut. Raclette irony gentrify, shabby chic swag
  pitchfork chia offal cred taxidermy kombucha quinoa chambray. Tattooed cloud
  bread DIY ramps everyday carry bushwick distillery echo park. Slow-carb
  poutine cliche jean shorts put a bird on it literally pork belly. Bespoke
  taxidermy hexagon, godard waistcoat gentrify listicle normcore brunch venmo
  tacos photo booth cronut. Raclette irony gentrify, shabby chic swag pitchfork
  chia offal cred taxidermy kombucha quinoa chambray. Tattooed cloud bread DIY
  ramps everyday carry bushwick distillery echo park. Slow-carb poutine cliche
  jean shorts put a bird on it literally pork belly. Bespoke taxidermy hexagon,
  godard waistcoat gentrify listicle normcore brunch venmo tacos photo booth
  cronut. Raclette irony gentrify, shabby chic swag pitchfork chia offal cred
  taxidermy kombucha quinoa chambray. Tattooed cloud bread DIY ramps everyday
  carry bushwick distillery echo park. Slow-carb poutine cliche jean shorts put
  a bird on it literally pork belly.
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
