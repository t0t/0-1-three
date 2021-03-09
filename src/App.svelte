<script>
	import Artwork from './components/Artwork.svelte'
	import Home from './components/Home.svelte'
	import About from './components/About.svelte'
	import {onMount} from 'svelte'
	import {createScene} from './scene'
	let el
	onMount(() => {
		createScene(el)
	})
	import { navOptions } from  './components/Nav.svelte';	// import application navigation
	let selected = navOptions[0];	// keep track of the selected 'page' object (default to the about component since we must have local db connection established first)
	let intSelected = 0;	// selected page index

	// change the selected component (the event.originalTarget.id is not accessible in Chrome so switched to event.srcElement.id)
	function changeComponent(event) {
		selected = navOptions[event.srcElement.id];
		intSelected = event.srcElement.id;
	}
	const d = new Date();
	const year = d.getFullYear();
	const month = d.getMonth()+1;
	const day = d.getUTCDay()+7;
	const hour = d.getHours();
	const minutes = d.getMinutes();
	const seconds = d.getSeconds();
	const timeArray = [year,month,day,hour,seconds]
	console.log(timeArray)
	let y;

// let promesa = getPost()

// async function getPost() {
// 	const response = await fetch("https://jsonplaceholder.typicode.com/posts",)
// 	if(response.status === 200) {
// 		const resultado = await response.json()
// 		return resultado
// 	} else {
// 		throw new Error("Hubo un error en el request")
// 	}
// }

</script>
<style>
	:global(body) {
		margin: 0;
	}
	* {
		line-height: 1.8;
	}
	h1 {
		margin-top: 0;
	}
	img {
		width: 100%;
		height: auto;
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
		background-color: black;
	}
	section {
		margin-left: 50px;
		padding-bottom: 50px;
	}
	.content {
		position: fixed;
	}
</style>

<!-- {#await promesa}
	<p>...Cargando promesa</p>
{:then value}
		{#each value as item}
			<p>{item.title}</p>
			<img src="{item.url}" alt="">
		{/each}
{:catch error}
	<p>error: {error.message}</p>
{/await} -->

<svelte:window bind:scrollY={y}/>
<main>
	
	<div class="content">
		<div class="container">
			<!--app navigation -->
			<nav>
				{#each navOptions as option, i}
					<button class={intSelected==i ? "nav-link active p-2 ml-1" : "p-2 ml-1 nav-link"} on:click={changeComponent} id={i} role="tab">{option.page}</button>
				{/each}
			</nav>
			<!-- content wrapper -->
			<div class="row">
				<h1>{selected.page}</h1>
				<!-- this is where our main content is placed -->
				<svelte:component this={selected.component}/>
			</div>
		</div>

		<!-- <h2>{#each timeArray as t}{t}{/each}</h2> -->
	</div>

	<canvas bind:this={el} class="webgl"/>
	
</main>