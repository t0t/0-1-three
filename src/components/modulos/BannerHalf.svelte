<script>
    export let text = "Texto inicial";
    export let img = "";
    export let variante = 0;
    let modificador = [
        "Light",
        "Dark"
    ];
    
</script>
<style lang="scss">
    @import "../../sass/_global.scss";
    
    .BannerHalf {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas: 
        "video"
        "texto"
        ;
        
        padding: $h2;
        img {
            width: 100%;
        }
        
        @include media(s2) {
            grid-template-columns: 1fr 1.62fr;
            grid-template-areas: 
            "texto video"
            ;
        }

        .BannerMedia {
            grid-area: video;
            background-color: $dark_2;
        }

        .BannerHalfText {
            display: grid;
            justify-items: start;
            align-self: center;
            justify-self: center;
            margin-bottom: $h2;
            grid-area: texto;

            @include media(s2) {
                margin-bottom: 0;
                margin-right: $h2;
                max-width: $bp1;
            }

            p {
                @include margin-top(1);
            }
        }
    }
    .Light {
        background-color: $light_grey;
        color: $dark_grey;
        p {
            color: $dark_grey;
            /* font-weight: 500; */
        }
    }
    .Dark {
        background-color: $dark_grey;
    }
</style>

<div class="BannerHalf {modificador[variante]}">

    <div class="BannerMedia">
        {#if img}
        <slot name="hasimage">
            <img src="{img}" alt="Imagen">
        </slot>
        {/if}
        
        <slot name="hasvideo"></slot>
    </div>
    
    <div class="BannerHalfText">
        <p>{text}</p>
        <slot></slot>
    </div>

</div>