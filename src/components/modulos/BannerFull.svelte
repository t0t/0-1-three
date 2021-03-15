<script>
    export let title = ""
    export let text = ""
    export let img;
</script>

<style lang="scss">
    @import "../../sass/_global.scss";

    .BannerFull {
        padding: $h2;
        background-color: $grey_2;
        height: 100vh;
        
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
                /* @include media(s1) {
                    margin-left: $h3;
                    margin-right: $h3;
                } */
                @include media(s2) {
                    @include type-setting(1);
                }
            }
        }
    }
</style>

<section class="BannerFull">
    <img class="BannerFullImg" src="../img/{img}" alt="Imagen">
    <div class="BannerFullText">
        <h1>{title}</h1>
        <p>{text}</p>
        <slot />
    </div>
</section>