<script>
    import {onMount} from 'svelte'
    import Layout from './Layout.svelte';
    import {createScene} from '../scene'
	let el
	onMount(() => createScene(el))
    let outerWidth
    let outerHeight
    let scrollY
</script>

<style lang="scss">
	@import '../sass/_global.scss';
    
    :global(img) {
        width: 100%;
	}

</style>

<svelte:head>
    <title>Sergio Forés - Home page</title>
</svelte:head>

<svelte:window 
  bind:outerWidth
  bind:outerHeight
  bind:scrollY
/>

<Layout>
    <div slot="header">
        {#if scrollY < (outerHeight/2)}
        <p>Explorando el encuentro de lo idéntico en lo diferente</p>
        <em>Sentir Orden y Crear Conexión</em>
        {/if}
    </div>

    <canvas bind:this={el} class="webgl"/>

    <div slot="footer">
        <img src="./img/cover2.jpg" alt="">
    </div>
</Layout>