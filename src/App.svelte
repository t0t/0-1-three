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
		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam error eos eaque, perspiciatis libero aliquam suscipit repudiandae atque quod nostrum tempora doloremque voluptates repellendus praesentium, voluptas itaque! Eveniet, blanditiis sequi!</p>
		<h4>Areas de interés:</h4>
		<small>#creativecoding #proceduraldesign #threejs #svelte #blender #sass #cabala #art #metafísica #datavisualization #geometriasagrada #astrologia</small>
		<img src="images/02234-14.png" alt="" width="400">
	</div>
	<canvas bind:this={el} class="webgl"/>
</main>