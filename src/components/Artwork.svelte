<script>
    import { onMount } from "svelte";
    import Layout from './Layout.svelte';
    import BannerTexto from "./modulos/BannerTexto.svelte";
    import BannerHalf from "./modulos/BannerHalf.svelte";
    import Links from './modulos/Links.svelte';
    import Button from "./modulos/Button.svelte";
    let productos = [];

    onMount(async () => {
        const res = await fetch("/data/products.json");
        productos = [...await res.json()];
    });
</script>

<svelte:head>
    <title>Sergio Forés - Artwork</title>
</svelte:head>

<style lang="scss">
    @import '../sass/_global.scss';  
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

      /* @include media(s2) {
        background: $black;
      } */
      &:hover {
        background: $dark_grey;
      }

      &:nth-child(1) {
        /* @include media(s2) {
          grid-column: 1/3;
        } */
      }
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

<Layout>
    <div slot="header">
        <img src="img/02234-14.jpg" alt="">
    </div>

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

    <BannerTexto texto="El fundamento de la Creación, es un orden arquetípico universal, +0+1234, al que se va yendo eternamente y al que se llega en un instante. Vivo el Arte como técnica de meditación trascendental y como símbolo."
    />

    <BannerHalf  variante={1} text="Todo son formas de arte simbólicas en si mismas y, como tales, cumplen una función mediadora capaz de abrirle lo real a la conciencia." img="../img/cover4.jpg">

    <Button variante={1} text="Chat-Whatsapp" url="https://api.whatsapp.com/send?phone=+34619549032" />

    </BannerHalf>

    <div slot="footer">
        <Links />
    </div>
</Layout>