<div class="container post-content-body">
  <div class="row">
    <div class="skeleton skeleton-text" />
    <div class="skeleton skeleton-text" />
    <div class="skeleton skeleton-text" />
    <div class="skeleton skeleton-text" />
    <div class="skeleton skeleton-text" />
    <div class="skeleton skeleton-text" />
    <div class="skeleton skeleton-text" />
    <div class="skeleton skeleton-text" />
    <div class="skeleton skeleton-text" />
    <div class="skeleton skeleton-text" />
  </div>
</div>

<style>
  .skeleton {
    opacity: 0.7;
    animation: skeleton-loading 1s linear infinite alternate;
  }

  .skeleton-text {
    width: 100%;
    height: 1.0rem;
    margin-bottom: 0.25rem;
    border-radius: 0.25rem;
    margin-bottom: .7rem;
  }

  .skeleton-text:last-child {
    margin-bottom: 0;
    width: 80%;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }

    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
</style>
