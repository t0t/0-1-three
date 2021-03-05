<script>
	import {onMount} from 'svelte'
	import {createScene} from './scene'
	let el
	onMount(() => {
		createScene(el)
	})
	const d = new Date();
	const year = d.getFullYear();
	const month = d.getMonth()+1;
	const day = d.getUTCDay()+7;
	const hour = d.getHours();
	const minutes = d.getMinutes();
	const seconds = d.getSeconds();
	const timeArray = [year,month,day,hour,seconds]
	console.log(timeArray)

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
	.content {

		position: fixed;
		top: 50px;
		right: 50px;
		left: 50px;
	}
	main {
		font-family: 'Montserrat', sans-serif;
		color: #ccc;
		background-color: black;
	}
	section {
		margin-left: 50px;
		padding-bottom: 50px;
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

<main>
	<div class="content">
		<h1>+0+1234</h1>
		<!-- <h2>{#each timeArray as t}{t}{/each}</h2> -->
	</div>

	<canvas bind:this={el} class="webgl"/>
	
	<img src="images/02234-14.png" alt="">
	
	<section>
		<h2>Svelte + Three + Blender + 3D Printing</h2>
		<p>Explorando la intersección entre diferentes mundos</p>
		<small>#creativecoding #proceduraldesign #threejs #svelte #blender #sass #cabala #art #metafísica #datavisualization #geometriasagrada #astrologia</small><br>
		<a href="http://sergiofores.es">sergiofores.es</a>
	</section>
</main>