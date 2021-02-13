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
	canvas {
		z-index: -1;
	}
	.content {
		font-family: 'Montserrat', sans-serif;
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		color: beige;
		background-color: rgba(0,0,0,0.2);
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
		<h1>0-1234</h1>
		<h2>{#each timeArray as t}{t}{/each}</h2>
	</div>
	<canvas bind:this={el} class="webgl"/>
</main>