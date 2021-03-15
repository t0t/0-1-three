<script>
    export let title = ""
    export let text = ""
    // let imagen = "img/01234-7.jpg"
</script>

<style lang="scss">
    @import "../../sass/_global.scss";

    .Cover {
        height: 100vh;
        padding: $h4;
        color: $white;
        background-size: cover;
        background-image: url("../img/01234-7.jpg");
        background-position: center center;
        display: grid;
        align-items: center;
        justify-items: center;
        text-align: center;

        h1 {
            align-self: end;
        }
        h2 {
            align-self: start;
        }
    }
</style>

<section class="Cover">
    <h1>{title}</h1>
    <h2>{text}</h2>
</section>