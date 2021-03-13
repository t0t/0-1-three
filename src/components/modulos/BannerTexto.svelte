<script>
    export let texto = ""
</script>
<style lang="scss">
    @import "../../sass/_global.scss";

    .BannerTexto {
        padding: $h2;
        background-color: $white;
        
        @include media(s1) {
            @include padding-top(4);
            @include padding-bottom(4);
        }
        /* @include media(s2) {} */

        .BannerTextoText {
            align-self: center;
            display: grid;
            justify-items: center;
            color: $quaternary;
            text-align: center;
            @include media(s2) {
                @include type-setting(1);
            }
        }
    }
</style>

<section class="BannerTexto">
    <p class="BannerTextoText">
        {texto}
    </p>
</section>