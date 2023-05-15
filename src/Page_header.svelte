<script>
  import Github_ic from "./icons/Github_ic.svelte";
  import Droplet_ic from "./icons/Droplet_ic.svelte";
  import Logo from "./icons/Logo.svelte";
  
	import { page, navigating } from '$app/stores';

</script>

<div class="row menu-border justify-content-center align-items-center">
  <div class="col-3">
    <div class="logo">
      <img src="/images/raccoon-logo.png" />
      <!-- <Logo /> -->
      <span>اعداد بزرگ</span>
    </div>
  </div>
  <div class="col-6 side-border">
    <ul id="top-menu">
      <li><a href="/" aria-current={$page.url.pathname === '/'}>صفحه اصلی</a></li>
      <li><a href="/pages/generate-post" aria-current={$page.url.pathname === '/pages/generate-post'}>ارسال مطلب</a></li>
      <li><a href="/posts/how-large-is-one-million-m3">صحبت با من</a></li>
    </ul>
  </div>
  <div class="col-3 top-border">
    <ul class="social-icons">
      <li><a href="https://github.com/javad-rzvn/largenumbers"><Github_ic /></a></li>
      <li><a href="https://waterdirectory.ir/"><Droplet_ic /></a></li>
    </ul>
  </div>
</div>

<style>
  .logo,
  .social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo img {
    display: block;
    object-fit: cover;
    width: 10%;
    height: 10%;
  }
  .logo span {
    display: inline;
    margin-right: 10px;
    font-family: Vazirmatn, tahoma;
    font-size: 25px;
    font-weight: 800;
  }
  #top-menu {
    padding: 10px;
    margin: 0 auto;
    text-align: center;
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
    font-size: 16px;
    font-weight: 300;
    color: #562f08;
  }
  #top-menu li a:hover,
  #top-menu li a[aria-current=true] {
    font-weight: 500;
  }
  .menu-border {
    border-bottom: 2px solid #562f08;
  }
  .side-border {
    border-left: 2px solid #562f08;
    border-right: 2px solid #562f08;
  }
  .social-icons {
    margin: 0;
    padding: 0;
  }
  .social-icons li {
    list-style: none;
    display: inline-block;
    margin-left: 20px;
  }
  .social-icons li a {
    color: #562f08;
    fill: #562f08;
    /* filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.5)); */
  }
  .social-icons li a:hover {
    /* fill: #f8a23d; */
    color: #f8a23d;
    stroke: #562f08;
    stroke-width: 10px;
    fill: none;
  }
</style>
