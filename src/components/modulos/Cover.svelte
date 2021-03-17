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
        padding: $h2;
        color: $white;
        background-size: cover;
        background-image: url("../img/01234-7.jpg");
        background-attachment: fixed;
        background-repeat: no-repeat;
        /* text-align: left; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;

        @include media(s1) {
            display: grid;
            align-items: end;
            grid-template-areas: 
            "title"
            "text";
            text-align: center;
        }
        > * {
            padding: $h2;
        }
        
        .CoverTitle {
            @include media(s1) {
                grid-area: title;
                display: flex;
                flex-direction: column;
            }
        }
        .CoverSubTitle {
            @include media(s3) {
                margin-top: $h1;
            }
        }
        .CoverText {
            @include media(s1) {
                grid-area: text;
                border-top: 1px dotted $light;
            }
        }
    }
</style>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY />

<section class="Cover" style="
background-position: {topescroll}px;
background-color:rgba(0, 0, 0, 0.{scrollY});
">
    <h1 class="CoverTitle">
        {title} <br>
        <span>
            <h2 class="CoverSubTitle">
                {subtitle}
            </h2>
        </span>
    </h1>
    <p class="CoverText">{text}</p>
</section>