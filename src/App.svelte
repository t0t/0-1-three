<script>	
	import { navOptions } from  './components/Nav.svelte';
	let selected = navOptions[1];
	let intSelected = 1;
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
		top: $h3;
		left: $h3;
		padding: 5px;
	}
	.nav-link {
		padding: 8px;
		color: $white;
		/* background-color: $tertiary; */
		margin: 3px;
		border: 1px solid $white;
		&:hover {
			cursor: pointer;
			color: $tertiary;
		}
	}
	.nav-link.active {
		color: $white;
		background-color: $black;
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