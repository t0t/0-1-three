<script>
    import {onMount} from 'svelte'
    import {createScene} from '../scene'
	let el
	onMount(() => {
		createScene(el)
	})
</script>

<style>
    .overlay {
        position: fixed;
        left: 50%;
    }
</style>

<div class="overlay">
    <h1>+0+1234</h1>
    <p>Explorando la intersección entre diferentes mundos</p>
</div>
<canvas bind:this={el} class="webgl"/>
