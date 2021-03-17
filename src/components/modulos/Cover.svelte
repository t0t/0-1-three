<script>
    export let title = ""
    export let subtitle = ""
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

    .Cover {
        height: 100vh;
        padding: $h0;
        color: $white;
        background-size: cover;
        background-image: url("../img/01234-7.jpg");
        background-attachment: fixed;
        background-repeat: no-repeat;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;

        @include media(s1) {
            display: grid;
            align-items: center;
            grid-auto-flow: column;
            gap: $h0;
            grid-template-areas: 
            "subtitle"
            "title"
            "text"
            ;
        }
        > * {
            border: 0.5px dotted $grey;
            padding: $h1;

            @include media(s1) {
                /* background-color: #fff; */
            }
        }
        
        @include media(s1) {
            .CoverTitle {
                grid-area: title;
                /* align-self: end; */
                /* border: 0.5px dotted $light; */
            }
            .CoverSubTitle {
                grid-area: subtitle;
                margin: 0;
                /* align-self: start; */
                /* border: 0.5px dotted $light; */
            }
            .CoverText {
                /* align-self: start; */
                grid-area: text;
                /* border: 0.5px dotted $light; */
            }
        }
    }
</style>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY />

<section class="Cover" style="
background-position: {topescroll}px;
background-color:rgba(0, 0, 0, 0.{scrollY});
">
    <h1 class="CoverTitle">{title}</h1>
    <h2 class="CoverSubTitle">{subtitle}</h2>
    <p class="CoverText">{text}</p>
</section>