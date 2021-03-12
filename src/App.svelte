<script>	
	import { navOptions } from  './components/Nav.svelte';
	let selected = navOptions[0];
	let intSelected = 0;
	function changeComponent(event) {
		selected = navOptions[event.srcElement.id];
		intSelected = event.srcElement.id;
	}
</script>

<style lang="scss">

	@import 'sass/_global.scss';
	
	:global(body) {
		margin: 0;
	}

	nav {
		position: fixed;
		z-index: 5;
		top: $base_size;
		left: $base_size;
		padding: 5px;
	}
	.nav-link {
		padding: 8px;
		color: $primary_color;
		/* background-color: $white_color; */
		margin: 3px;
		border: 1px solid black;
		&:hover {
			cursor: pointer;
			color: $white_color;
		}
	}
	.nav-link.active {
		color: $white_color;
		background-color: $black_color;
	}

	button {
		border: none;
	}
</style>

<main>
	<nav class="MainNav">
		{#each navOptions as option, i}
			<a 
				class={intSelected==i ? "nav-link active" : "nav-link"} 
				on:click={changeComponent} id={i}>
				{option.page}
			</a>
		{/each}
	</nav>

	<svelte:component this={selected.component}/>
</main>