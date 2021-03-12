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
		background-color: $black_color;
	}

	nav {
		position: fixed;
		z-index: 5;
		top: $base_size;
		left: $base_size;
		background-color: blue;
		padding: 5px;
	}
	.nav-link {
		padding: 8px;
		color: $black_color;
		background-color: $white_color;
		margin: 3px;
		&:hover {
			cursor: pointer;
		}
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
			<a 
				class={intSelected==i ? "nav-link active" : "nav-link"} 
				on:click={changeComponent} id={i}>
				{option.page}
			</a>
		{/each}
	</nav>
	<section class="MainContent">
		{#if selected.page != "+0+1234"}
			<h1>{selected.page}</h1>
		{/if}
		<svelte:component this={selected.component}/>
	</section>
</main>