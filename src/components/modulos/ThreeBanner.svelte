<script>
    import { onMount } from "svelte";
    export let title = "";
    export let text = "";
    import { createScene } from "../../scene";
    let el;
    onMount( () => {
        createScene(el)
    });
    export let variante = 0;
    let modificador = [
        "Light",
        "Dark",
        "Colored",
        "Light2"
    ];
</script>

<style lang="scss">
    @import "../../sass/_global.scss";

    .ThreeBanner {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas: "video" "texto";
        padding-top: 0;
        padding-right: $h3;
        padding-left: $h3;
        padding-bottom: $h2;
        img {
            width: 100%;
        }
        
        @include media(s1) {
        }
        @include media(s2) {
            padding-bottom: 0;
            padding-right: 0;
            grid-template-columns: 1fr 1.62fr;
            grid-template-areas: "texto video";
        }

        .BannerMedia {
            grid-area: video;
            background-color: $black;
        }

        .ThreeBannerText {
            display: grid;
            justify-items: start;
            align-self: center;
            justify-self: center;
            grid-area: texto;

            @include media(s2) {
                margin-bottom: 0;
                margin-right: $h2;
                max-width: $bp1;
            }
            h2 {
                font-weight: bold;
                margin-top: $h0;
                margin-right: 0;
                margin-bottom: $h0;
                margin-left: 0;
                @include media(s1) {
                    font-weight: inherit;
                }
            }
        }
    }
    .Light {
        background-color: $light_2;
        color: $dark_grey;
        p {
            color: $dark_grey;
        }
    }
    .Dark {
        background-color: $dark_grey;
    }
    .Colored {
        background-color: $dark;
    }
    .Light2 {
        background-color: $light;
        color: $dark;
        p {
            color: $dark;
        }
    }
    .webgl {
        max-width: 100%;
        /* min-height: 300px; */
    }
</style>

<section class="ThreeBanner {modificador[variante]}">
    
    <div class="BannerMedia">        
        <canvas bind:this={el} class="webgl" />
    </div>
    
    <div class="ThreeBannerText">
        <h2>{title}</h2>
        <p>{text}</p>
        <slot></slot>
    </div>

</section>