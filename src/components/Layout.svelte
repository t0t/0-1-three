<header class="MainHeader">
    <slot name="header"/>
</header>

<main class="MainContent">
    <slot />
</main>

<footer>
    <slot name="footer"/>
</footer>

<style lang="scss">
	@import '../sass/_global.scss';
    .MainContent {
        @include margin-top($h6);
        user-select: none;
        padding: $h4;
    }
    .MainHeader {
        display: grid;
        align-content: center;
        // padding-top: $h5;
        width: 100%;
        background-color: $primary;
        text-align: center;
    }
</style>