<script>	
	// import { navOptions } from  './components/Nav.svelte';
	// let selected = navOptions[0];
	// let intSelected = 0;
	// function changeComponent(event) {
	// 	selected = navOptions[event.srcElement.id];
	// 	intSelected = event.srcElement.id;
	// }
	import Home from "./components/Home.svelte";

</script>

<style lang="scss">

	@import 'sass/_global.scss';
	
	:global(body) {
		margin: 0;
		background-color: $dark;
	}
	:global(html) {
		font-size: $base_font_size;
		
	}

</style>

<main>
	<!-- <nav class="MainNav">
		{#each navOptions as option, i}
			<a 
				class={intSelected==i ? "nav-link active" : "nav-link"} 
				on:click={changeComponent} id={i}>
				{option.page}
			</a>
		{/each}
	</nav> -->

	<Home />
	<!-- <svelte:component this={selected.component}/> -->
</main>