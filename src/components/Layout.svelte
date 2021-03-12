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
        padding: $h6;
        margin: 50px;
    }
    .MainHeader {
        position: fixed;
        display: grid;
        align-content: center;
        width: 100%;
        height: 100%;
        top: auto;
        left: auto;
        text-align: center;
    }
</style>