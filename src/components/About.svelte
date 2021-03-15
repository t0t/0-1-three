<script>
    import Layout from './Layout.svelte';
    import Links from './modulos/Links.svelte';
    import BannerTexto from "./modulos/BannerTexto.svelte";
</script>

<style lang="scss">
	@import '../sass/_global.scss';
</style>

<svelte:head>
    <title>Sergio Forés - About</title>
</svelte:head>

<Layout>
    <div slot="header">
        <img src="img/01234-7.jpg" alt="">
    </div>

    <BannerTexto texto="Sergio Forés Raga se forma en Bellas Artes, Arte Electrónico y Diseño Digital. Ha ejercido desde 1999 como Diseñador Gráfico y Web. Desde 2010 especializado en Prototipado Frontend y UID. En 2020 adopta el mundo de la impresión 3D en su proceso creativo. Paralelamente desarrolla una Hermenéutica Holística de la Creación, como vía de autoconocimiento, que denomina TODH, Función TOT ó +0+1234."/>
    
    <div slot="footer">
        <Links />
    </div>
</Layout>