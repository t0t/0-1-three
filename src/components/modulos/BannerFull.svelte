<script>
    export let title = ""
    export let text = ""
    export let img;
</script>

<style lang="scss">
    @import "../../sass/_global.scss";

    .BannerFull {
        background-color: $light;
        
        @include media(s1) {
            height: 100vh;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 0.5fr;
            justify-items: center;
        }
        @include media(s2) {
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr;
        }

        h2 {
            color: $light_grey;
            font-weight: $weight_strong;
            @include margin-bottom(0);
            @include margin-top(0);
        }

        .BannerFullImg {
            background-size: cover;
            background-position: right center;
            background-repeat: no-repeat;
            width: 100%;
            min-height: $h6;
        }

        .BannerFullText {
            align-self: center;
            display: grid;
            justify-items: center;
            padding-bottom: $h2;
            p {
                color: $dark;
                text-align: center;
                margin-left: $h1;
                margin-right: $h1;

                @include media(s2) {
                    @include type-setting(1);
                }
            }
        }
    }
</style>

<section class="BannerFull">
    <div class="BannerFullImg"
    style="background-image:url('../img/{img}');"
    ></div>
    <div class="BannerFullText">
        <h2>{title}</h2>
        <p>{text}</p>
        <slot />
    </div>
</section>