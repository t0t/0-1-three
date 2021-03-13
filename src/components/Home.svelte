<script>
  import { onMount } from "svelte";
  import Layout from "./Layout.svelte";
  import VideoContainer from "./modulos/VideoContainer.svelte";
  import BannerFull from "./modulos/BannerFull.svelte";
  import BannerHalf from "./modulos/BannerHalf.svelte";
  import BannerTexto from "./modulos/BannerTexto.svelte";
  import Links from './modulos/Links.svelte';
  import Button from "./modulos/Button.svelte";
  // import BlockQuote from './modulos/BlockQuote.svelte';
  import { createScene } from "../scene";
  let el;
  onMount(() => createScene(el));
  let outerWidth;
  let outerHeight;
  let scrollY;
</script>

<svelte:head>
  <title>Sergio Forés - Home page</title>
</svelte:head>

<svelte:window bind:outerWidth bind:outerHeight bind:scrollY />

<Layout>
  <div slot="header">
    <canvas bind:this={el} class="webgl" />
  </div>

  <BannerTexto
    texto="Explorando el encuentro de lo idéntico en lo diferente. Sentir Orden y Crear Conexión"
  />

  <BannerFull />

  <VideoContainer />

  <BannerHalf
    text="Una presentación resumida del proyecto +0+1234. +0+1234 es una *hermenéutica de la Creación que observa experiencialmente sus principios universales"
  >
    <Button
      variante={3}
      text="Canal de Presentaciones"
      url="https://slides.com/sergiofores/"
    />

    <div slot="hasvideo">
      <iframe
        src="https://slides.com/sergiofores/01234/embed?byline=hidden&share=hidden"
        width="100%"
        height="420"
        scrolling="no"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      />
    </div>
  </BannerHalf>

  <BannerHalf
    text="Haciendo mis pinitos como Youtuber :) Vuelco mis reflexiones en cápsulas en torno a metafísica, arte, símbolos, etc. Y, por supuesto desde la Hermenéutica +0+1234."
  >
    <Button
      variante={3}
      text="Canal Youtube"
      url="https://www.youtube.com/channel/UC9C6HRn2RDG3bmWC4Soxtcw"
    />

    <div slot="hasvideo">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/7BtDRQuPjDg"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </BannerHalf>
  <BannerHalf
    variante={1}
    text="Un producto digital es un sistema orgánico con un orden que que evoluciona análogamente al Universo. El Diseño Frontend es Arte y es holístico. Mi workflow: SvelteJS, Git, Sass, CSSGrid, Vercel, etc."
    img="../img/frontend.jpg"
  >
    <Button
      variante={1}
      text="Repo en Github"
      url="https://github.com/t0t/sergiofores_es"
    />
  </BannerHalf>

  <div slot="footer">
    <Links />
  </div>
</Layout>

<style lang="scss">
  @import "../sass/_global.scss";

  :global(img) {
    width: 100%;
  }
</style>
