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
        /* user-select: none; */
    }
    .MainHeader {
        display: grid;
        align-content: center;
        width: 100%;
        background-color: $primary;
        text-align: center;
    }
</style>