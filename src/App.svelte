<script>	
	import { navOptions } from  './components/Nav.svelte';
	let selected = navOptions[0];
	let intSelected = 0;
	function changeComponent(event) {
		selected = navOptions[event.srcElement.id];
		intSelected = event.srcElement.id;
	}
</script>

<style lang="scss" global>

	@import 'sass/_global.scss';

	:global(body) {
		margin: 0;
		background-color: $black_color;
	}

	nav {
		position: fixed;
		z-index: 100;
		top: $base_size;
		left: $base_size;
	}
	.nav-link {
		padding: 8px;
		color: $black_color;
		background-color: $white_color;
		margin: 3px;
	}
	.nav-link.active {
		color: $white_color;
		background-color: $black_color;
	}
	.MainContent {
		/* padding-top: 50px; */
	}
	button {
		border: none;
	}
</style>

<main>
	<nav class="MainNav">
		{#each navOptions as option, i}
			<button 
				class={intSelected==i ? "nav-link active" : "nav-link"} 
				on:click={changeComponent} id={i} role="tab">
				{option.page}
			</button>
		{/each}
	</nav>
	<section class="MainContent">
		{#if selected.page != "+0+1234"}
			<h1>{selected.page}</h1>
		{/if}
		<svelte:component this={selected.component}/>
	</section>
</main>