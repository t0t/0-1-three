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
	.point
	{
		position: absolute;
		top: 50%;
		left: 50%;
		/* pointer-events: none; */
	}

	.point .label
	{
		position: absolute;
		top: -20px;
		left: -20px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: #00000077;
		border: 1px solid #ffffff77;
		color: #ffffff;
		font-family: Helvetica, Arial, sans-serif;
		text-align: center;
		line-height: 40px;
		font-weight: 100;
		font-size: 14px;
		cursor: help;
		transform: scale(0, 0);
		transition: transform 0.3s;
	}

	.point .text
	{
		position: absolute;
		top: 30px;
		left: -120px;
		width: 200px;
		padding: 20px;
		border-radius: 4px;
		background: #00000077;
		border: 1px solid #ffffff77;
		color: #ffffff;
		line-height: 1.3em;
		font-family: Helvetica, Arial, sans-serif;
		font-weight: 100;
		font-size: 14px;
		opacity: 0;
		transition: opacity 0.3s;
		pointer-events: none;
	}

	.point:hover .text
	{
		opacity: 1;
	}

	.point.visible .label
	{
		transform: scale(1, 1);
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
	
	<img src="images/02234-14.jpg" alt="">

	<section>
		<h2>Svelte + Three + Blender + 3D Printing</h2>
		<p>Explorando la intersección entre diferentes mundos</p>
		<small>#creativecoding #proceduraldesign #threejs #svelte #blender #cabala #art #metafísica #datavisualization #geometriasagrada #astrologia</small><br>
		<a href="http://sergiofores.es">sergiofores.es</a>
	</section>
</main>