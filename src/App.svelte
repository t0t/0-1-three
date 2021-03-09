<script>	
	import { navOptions } from  './components/Nav.svelte';
	let selected = navOptions[0];
	let intSelected = 0;
	function changeComponent(event) {
		selected = navOptions[event.srcElement.id];
		intSelected = event.srcElement.id;
	}
</script>

<style>
	:global(body) {
		margin: 0;
		background-color: black;
	}
	* {
		line-height: 1.8;
	}
	h1 {
		margin-top: 0;
	}
	a,a:visited {
		color: teal;
		text-decoration: none;
	}
	a:hover {
		color: aquamarine;
	}

	main {
		font-family: 'Montserrat', sans-serif;
		color: white;
	}
	nav {
		position: fixed;
		z-index: 100;
		top: 15px;
		left: 15px;
	}
	.nav-link {
		padding: 8px;
		color: black;
		background-color: white;
		margin: 3px;
	}
	.nav-link.active {
		color: white;
		background-color: black;
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