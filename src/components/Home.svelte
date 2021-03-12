<script>
    import {onMount} from 'svelte'
    import {createScene} from '../scene'
	let el
    // let coordenadas = getCoords()
	onMount(() => {
        createScene(el)
        return () => {
        console.log("desmontado")
        };
	})

	
	// async function getCoords() {
    //     const response = await fetch("./data/coordenadas.json",)
	// 	if(response.status === 200) {
    //         const resultado = await response.json()
	// 		// console.log(`resultado: ${resultado.coords}`)
    //         coordenadas = resultado.coords
    //         return coordenadas
    //     } else {
    //         throw new Error("Hubo un error en el request")
    //     }
    // }
    // console.log(`coordenadas ${coordenadas[0]}`)

</script>

<style lang="scss">

	@import '../sass/_global.scss';
    .overlay {
        position: fixed;
        left: $base_size / 2;
    }
</style>

<div class="overlay">
    <h1>+0+1234</h1>
    <p>Explorando la intersección entre diferentes mundos</p>
</div>
<canvas bind:this={el} class="webgl"/>
