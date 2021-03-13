<script>
    import Button from './Button.svelte';
</script>
<style lang="scss">
    @import "../../sass/_global.scss";

    .VideoContainer {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: start;
        gap: $h2;
        grid-template-areas: 
            "video"
            "textocontainer"
        ;
        padding-top: $h2;
        padding-right: $h2;
        padding-left: $h2;
        text-align: left;
        @include gradient(left, $list1);
        
        @include media(s2) {
            padding-bottom: $h2;
            grid-template-columns: 1fr 1.62fr;
            grid-template-areas: 
                "textocontainer video"
            ;
            gap: $h3;
        }
        .TextoContainer {
            display: grid;
            grid-template-columns: 1fr;
            justify-items: center;
            grid-area: textocontainer;
            
            @include media(s2) {
                justify-items: start;
            }
        }
        video {
            grid-area: video;
            width: 100%;
            object-fit: cover;
            mix-blend-mode: luminosity;
            border-radius: $h2;
        }
    }

    .parrafo {
        text-align: center;
        /* @include margin-bottom(1); */
        @include media(s2) {
            margin-bottom: inherit;
            text-align: inherit;
            /* display: inherit; */
        }
    }    

</style>

<section class="VideoContainer">
    <main class="TextoContainer">
        <header class="parrafo">
            <h1>El fundamento de la Creación, es un orden arquetípico universal, <i>+0+1234</i>, al que se va yendo eternamente y al que se llega en un instante. Vivo el Arte como técnica de meditación trascendental y como símbolo.
            </h1>
        </header>
        <footer class="boton">
            <Button variante={2} target="_self" text="Catálogo de Obras" url="/obras" />
        </footer>
    </main>
    <video poster="/img/cover3.jpg" loop playsinline controls="controls">
        <source src="/img/desdelapoesiadelamateria.webm" type="video/webm" />
        <source src="/img/desdelapoesiadelamateria.mp4" type="video/mp4" />
        <p>Ups! Su navegador no soporta vídeos HTML5.</p>
    </video>
    

</section>

