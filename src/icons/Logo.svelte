<svg>
  <symbol id="text-copy">
    <text text-anchor="middle" x="50%" y="50%" class="text--line"
      >اعداد بزرگ</text
    >
  </symbol>
  <g class="g-ants">
    <use xlink:href="#text-copy" class="text-copy" id="outline" />
    <use xlink:href="#text-copy" class="text-copy" id="fill" />
  </g>
</svg>

<style>
  .text--line {
    font-family: Vazirmatn, tahoma;
    font-size: 25px;
    font-weight: 800;
  }
  #outline {
    fill: none;
    stroke: #562f08;
    stroke-dasharray: 100%;
    stroke-dashoffset: 0;
    animation-name: outline;
    animation-duration: 2.5s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    /* animation-iteration-count: infinite; */
  }

  #fill {
    fill-opacity: 0;
    fill: #562f08;
    animation-name: fill;
    animation-duration: 0.5s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    animation-delay: 1s;
    /* animation-iteration-count: infinite; */
  }

  @keyframes outline {
    from {
      stroke-dashoffset: 100%;
    }

    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fill {
    from {
      fill-opacity: 0;
    }

    to {
      fill-opacity: 1;
    }
  }
</style>
