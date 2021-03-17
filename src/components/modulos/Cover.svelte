<script>
    export let title = ""
    export let text = ""
    let innerWidth, 
        innerHeight,
        scrollY,
        topescroll;

    $: if ( scrollY < (innerWidth/2) ) {
        topescroll = -scrollY
    }
</script>

<style lang="scss">
    @import "../../sass/_global.scss";
    svg {
        circle {
            fill: salmon;
        }
        g {
            transform: translate(50%, 17%);
        }
    }
    .Cover {
        height: 100vh;
        padding: $h4;
        color: $white;
        background-size: cover;
        background-image: url("../img/01234-7.jpg");
        background-attachment: fixed;
        display: grid;
        align-items: center;
        justify-items: center;
        text-align: center;
        background-repeat: no-repeat;

        h1 {
            align-self: end;
        }
        h2 {
            align-self: start;
        }
    }
</style>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY />

<section class="Cover" style="
background-position: {topescroll}px;
background-color:rgba(0, 0, 0, 0.{scrollY});
">
    <h1>{title}</h1>
    <h2>{text}</h2>
</section>