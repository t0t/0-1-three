<script>
    export let title = ""
    export let text = ""
</script>

<style lang="scss">
    @import "../../sass/_global.scss";

    .ThreeBanner {
        position: relative;
    }
    .overlay {
        position: absolute;
        left: $h4;
        top: $h4;
        padding-right: $h4;
    }
</style>

<section class="ThreeBanner">
    <div class="overlay">
        <h1>{title}</h1>
        <p>{text}</p>
    </div>
    <slot></slot>
</section>