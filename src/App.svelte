<script>	
	import Home from "./components/Home.svelte";
</script>

<style lang="scss">
	@import 'sass/_global.scss';
	
	:global(body) {
		margin: 0;
		background-color: $dark_2;
	}
	:global(html) {
		font-size: $base_font_size;
	}

</style>

<main>

	<Home />

</main>