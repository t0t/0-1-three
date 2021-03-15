<script>
    export let header = ""
    export let texto = ""
</script>

<style lang="scss">
    @import "../../sass/_global.scss";

    .BannerTexto {
        position: relative;
        background-color: $white;
        height: 100vh;
        display: grid;
        align-items: center;
        justify-items: center;
        text-align: center;
        
        /* .BannerTextoHeader {
            z-index: 1;
        } */
        .BannerTextoText {
            color: $quaternary;
            /* @include media(s2) {
                @include type-setting(1);
            } */
        }
    }
</style>

<section class="BannerTexto">
    <h2 class="BannerTextoHeader">
        {header} <br>
        <span class="BannerTextoText">{texto}</span>
    </h2>
</section>