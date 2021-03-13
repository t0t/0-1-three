<script>
    import Button from './Button.svelte';
</script>

<style lang="scss">
    @import "../../sass/_global.scss";

    .BannerFull {
        padding: $h2;
        background-color: $grey_2;
        
        @include media(s1) {
            display: grid;
            gap: $h3;
            grid-template-columns: 1fr;
            justify-items: center;
            @include padding-top(4);
            @include padding-bottom(4);
        }
        @include media(s2) {
            padding: $h4;
            grid-template-columns: repeat(2, 1fr);
        }

        h1 {
            color: $light;
            font-weight: $weight_strong;
            @include margin-bottom(0);
            @include margin-top(0);
            @include media(s4) {
                /* font-weight: inherit; */
            }
        }

        .BannerFullText {
            align-self: center;
            display: grid;
            justify-items: center;
            p {
                color: $light;
                text-align: center;
                margin-left: $h1;
                margin-right: $h1;
                /* @include margin-bottom(2); */
                @include media(s1) {
                    /* margin-left: $h3;
                    margin-right: $h3; */
                }
                @include media(s2) {
                    @include type-setting(1);
                    /* margin-left: $h4;
                    margin-right: $h4; */
                }
            }
        }
    }
</style>

<section class="BannerFull">
    <img class="BannerFullImg" src="../img/libro.svg" alt="Portada de mi libro">
    <div class="BannerFullText">
        <h1>Hermenéutica Universal</h1>
        <p>Es un Libro "work in progress" que explica mi cosmovisión y el proyecto <i>+0+1234.</i> Aún no sé si finalmente será en formato ebook, en papel o un audiolibro. El tiempo dirá...</p>
        <Button variante={3} text="Leer libro" url="https://docs.google.com/document/d/15oUQRghNb_lihCFGJ9Ls0z1PyihD_a18v1V3AohVqQ4/edit?usp=sharing" />
    </div>
</section>