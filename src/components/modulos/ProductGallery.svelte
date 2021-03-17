<script>
    import { onMount } from "svelte";
    let productos = [];
    let active = false;
    let selected = productos[0];
    let intSelected;

    function showInfo(event) {
        selected = productos[event.srcElement.id];
        intSelected = event.srcElement.id;
    };
    onMount(async () => {
        const res = await fetch("/data/products.json");
        productos = [...await res.json()];
    });
    export let titulo = "";
    export let texto = "";
</script>

<style lang="scss">
    @import "../../sass/_global.scss";

    .LayoutObras {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        gap: $h2;
        width: 100%;
        padding: $h3;
        background-color: $grey;
        
        p {
            @include margin-bottom(0);
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
        border-radius: 50%;
        object-fit: cover;
        padding: $h2;

      &:hover {
        cursor: zoom-in;
        background: $dark_grey;
      }
    }
    
    figure {
      display: grid;
      justify-items: center;
      position: relative;
    }
}
    .active + figcaption {
        transform-style: preserve-3d;
        transform: scale(1);
        transition: 0.5s;
        opacity: 1;
        z-index: 100;
        cursor: revert;
    }
    figcaption {
        display: grid;
        align-items: center;
        justify-items: center;
        padding: $h3;
        transition: 0.5s;
        opacity: 0;
        transform: scale(0.7);
        width: 100%;
        height: 100%;
        text-align: center;
        position: absolute;
        top: 0;
        background-color: $dark_grey;
        border-radius: 50%;
        text-align: center;
        > img {
            ;
            border-radius: 50%;
            width: $h4;
            height: $h4;
            align-self: end;
            mix-blend-mode: luminosity;
        }
        h3 {
            font-weight: bold;
            /* color: $black; */
        }
        p {
            font-style: italic;
            align-self: start;
            text-align: center;
        }

    }
</style>

<section class="LayoutObras">
  
    <h2>{titulo}</h2>
    <p>{texto}</p>
  
    <div class="ObrasContainer">
        {#each productos as producto, i}
        <article>
          <figure>
            <img src="../{producto.thumb}" alt="{producto.title}"
            class={intSelected==i ? "Obra active" : "Obra"}
            on:click={showInfo} id={i}>
            <figcaption>
                <img src="../{producto.thumb}">
                <h3>{producto.title}</h3>
                <p>
                    {producto.description} <br>
                    <span>Ref: {producto.referencia}</span>
                </p>
            </figcaption>
          </figure>
        </article>
        {/each}
    </div>
  </section>