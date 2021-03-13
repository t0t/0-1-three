<script>
  import { onMount } from "svelte";
  import BannerHalf from '../components/BannerHalf.svelte';
  import Button from '../components/Button.svelte';

  let productos = [];

  onMount(async () => {
    const res = await fetch("/data/products.json");
    productos = [...await res.json()];
  });
</script>

<style lang="scss">
  @import "../sass/_main.scss";

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
    opacity: .55;
    border-radius: 50%;
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
      gap: 1px;
      width: 100%;
      grid-template-columns: repeat(auto-fill, minmax($h8, 1fr));
      grid-template-rows: 1fr;
      grid-auto-rows: 1fr;
      justify-items: center;
    }

    .Obra {

      @include media(s2) {
        background: $black;
      }
      &:hover {
        background: $dark_grey;
      }

      &:nth-child(1) {
        /* @include media(s2) {
          grid-column: 1/3;
        } */
      }
      &:nth-child(3) {
          /* background-color: #fff; */
      }
      &:nth-child(4) {
        /* grid-column: 1/3; */
        /* grid-column: span 1/3; */
        /* @include media(s2) {
          grid-column: 2/4;
        } */
      }
      &:nth-child(5) {
        /* grid-column: span 1/3; */
        /* grid-row: 5/7; */
        /* background-color: #fff; */
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
  

<section class="LayoutObras">
  
  <h2>Galería de cuadros</h2>

  <div class="ObrasContainer">
    {#each productos as producto}
    <a class="Obra" href="/obras/{producto.id}">
    <article>
      <figure>
          <img src="../{producto.thumb}" alt="{producto.title}">
          <figcaption>
            {producto.title}
          </figcaption>
        </figure>
      </article>
    </a>
    {/each}
  </div>
</section>

<BannerHalf  variante={1}
  text="Todo son formas de arte simbólicas en si mismas y, como tales, cumplen una función mediadora capaz de abrirle lo real a la conciencia."
  img="../img/cover4.jpg"
>
<Button variante={1} text="Chat-Whatsapp" url="https://api.whatsapp.com/send?phone=+34619549032" />
</BannerHalf>