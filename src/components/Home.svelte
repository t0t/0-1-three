<script>
  import { onMount } from "svelte";
  // import Layout from "./Layout.svelte";
  import Cover from "./modulos/Cover.svelte";
  import VideoContainer from "./modulos/VideoContainer.svelte";
  import ThreeBanner from "./modulos/ThreeBanner.svelte";
  import BannerFull from "./modulos/BannerFull.svelte";
  import BannerHalf from "./modulos/BannerHalf.svelte";
  import BannerTexto from "./modulos/BannerTexto.svelte";
  import Links from './modulos/Links.svelte';
  import Button from "./modulos/Button.svelte";
  // import BlockQuote from './modulos/BlockQuote.svelte';
  import { createScene } from "../scene";
  let el;
  let productos = [];

  onMount(async () => {
    createScene(el)
    const res = await fetch("/data/products.json");
    productos = [...await res.json()];
  });
  let outerWidth;
  let outerHeight;
  let scrollY;
</script>

<svelte:head>
  <title>Sergio Forés - Home page</title>
</svelte:head>
<svelte:window bind:outerWidth bind:outerHeight bind:scrollY />

<style lang="scss">
  @import "../sass/_global.scss";

  :global(img) {
    width: 100%;
  }

  .LayoutObras {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        gap: $h2;
        width: 100%;
        padding: $h2;
        background-color: $grey;
        h1 {
            @include margin-bottom(1);
        }
    }

  img {
    object-fit: cover;
    max-width: 100%;
    z-index: 100;

    a:hover & {
      opacity: 1;
    }
  }

  .ObrasContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax($h7, 1fr));

    @include media(s3) {
      justify-items: center;
      gap: $h3;
    }

    .Obra {

      img {
        border-radius: 50%;
        object-fit: cover;
        padding: $h2;
      }

      &:hover {
        background: $dark_grey;
      }

      /* &:nth-child(1) {
        @include media(s2) {
          grid-column: 1/3;
        }
      } */
    }

    figure {
      display: grid;
      justify-items: center;
      position: relative;
    }
  }

  figcaption {
    text-align: center;
    display: none;
    position: absolute;
    bottom: $h4;
  }
  h2 {
    text-align: center;
  }
</style>

<!-- <Layout> -->
  <!-- <div slot="header"></div> -->
  <Cover title="Sergio Forés, Artista y desarrollador Holístico." text="Mi trabajo incursiona en la belleza de la Creación, permitiendo que se exprese en su propio lenguaje."></Cover>

  <ThreeBanner title="Proyecto DataViz. ¿Podemos tocar los datos?" text ="El proyecto explora la mejor manera de traducir datos JSON a mallas 3D para poder ser impresas en el mundo real. Por medio de Three.js topografiamos los datos como coordenadas sobre un plano que luego se exporta a un archivo 3D">
    <canvas bind:this={el} class="webgl" />
  </ThreeBanner>

  <!-- <BannerTexto header="Misión" texto="Explorando el encuentro de lo idéntico en lo diferente. Sentir Orden y Crear Conexión" /> -->

  <BannerFull title="Hermenéutica Universal" text='Libro "work in progress" que explica mi cosmovisión y el proyecto +0+1234.' img="libro.svg">
    <Button variante={3} text="Leer libro" url="https://docs.google.com/document/d/15oUQRghNb_lihCFGJ9Ls0z1PyihD_a18v1V3AohVqQ4/edit?usp=sharing" />
  </BannerFull>

  <VideoContainer />

  <BannerHalf text="Una presentación resumida del proyecto +0+1234. +0+1234 es una *hermenéutica de la Creación que observa experiencialmente sus principios universales">
    <Button variante={3} text="Canal de Presentaciones" url="https://slides.com/sergiofores/" />

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

  <section class="LayoutObras">
  
    <h2>Galería de cuadros</h2>
  
    <div class="ObrasContainer">
        {#each productos as producto}
        <!-- <a class="Obra" href="/obras/{producto.id}"> -->
        <article class="Obra">
          <figure>
            <img src="../{producto.thumb}" alt="{producto.title}">
            <figcaption>{producto.title}</figcaption>
          </figure>
        </article>
        <!-- </a> -->
        {/each}
    </div>
  </section>

  <BannerHalf text="Haciendo mis pinitos como Youtuber :) Vuelco mis reflexiones en cápsulas en torno a metafísica, arte, símbolos, etc. Y, por supuesto desde la Hermenéutica +0+1234.">

    <Button variante={0} text="Canal Youtube" url="https://www.youtube.com/channel/UC9C6HRn2RDG3bmWC4Soxtcw" />

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

  <BannerHalf variante={1} text="Un producto digital es un sistema orgánico con un orden que que evoluciona análogamente al Universo. El Diseño Frontend es Arte y es holístico. Mi workflow: SvelteJS, Git, Sass, CSSGrid, Vercel, etc." img="../img/frontend.jpg">
    <Button
      variante={1}
      text="Repo en Github"
      url="https://github.com/t0t/sergiofores_es"
    />
  </BannerHalf>

  <BannerTexto texto="El fundamento de la Creación, es un orden arquetípico universal, +0+1234, al que se va yendo eternamente y al que se llega en un instante. Vivo el Arte como técnica de meditación trascendental y como símbolo."
    />

  <BannerHalf  variante={1} text="Todo son formas de arte simbólicas en si mismas y, como tales, cumplen una función mediadora capaz de abrirle lo real a la conciencia." img="../img/cover4.jpg">

  <Button variante={1} text="Chat-Whatsapp" url="https://api.whatsapp.com/send?phone=+34619549032" />

  </BannerHalf>
  
  <BannerTexto header="About me" texto="Sergio Forés Raga se forma en Bellas Artes, Arte Electrónico y Diseño Digital. Ha ejercido desde 1999 como Diseñador Gráfico y Web. Desde 2010 especializado en Prototipado Frontend y UID. En 2020 adopta el mundo de la impresión 3D en su proceso creativo. Paralelamente desarrolla una Hermenéutica Holística de la Creación, como vía de autoconocimiento, que denomina TODH, Función TOT ó +0+1234."/>
    
  <Links />
  <!-- <div slot="footer"></div> -->
<!-- </Layout> -->
