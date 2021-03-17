<script>
  // import { onMount } from "svelte";
  // import Layout from "./Layout.svelte";
  import Cover from "./modulos/Cover.svelte";
  import ProductGallery from "./modulos/ProductGallery.svelte";
  import ThreeBanner from "./modulos/ThreeBanner.svelte";
  import BannerFull from "./modulos/BannerFull.svelte";
  import BannerHalf from "./modulos/BannerHalf.svelte";
  import BannerTexto from "./modulos/BannerTexto.svelte";
  import Links from './modulos/Links.svelte';
  import PhiSvg from './modulos/PhiSvg.svelte';
  import Button from "./modulos/Button.svelte";
</script>

<svelte:head>
  <title>Sergio Forés - Home page</title>
</svelte:head>

<style lang="scss">
  @import "../sass/_global.scss";

  :global(img) {
    width: 100%;
  }

</style>

<!-- <Layout> -->
  <!-- <div slot="header"></div> -->
  <Cover title="Hola, mi nombre es Sergio Forés" text="Me dedico al 'arte de descifrar el proceso de la Creación' (Hermenéutica Holística). Me encuentro en la intersección de ciertos tipos de Artes, tecnologías y conocimientos ancestrales" />
  
  <BannerFull title="+0+1234" text='El fundamento de la Creación, es un orden arquetípico universal, +0+1234, al que se va yendo eternamente y al que se llega en un instante. Vivo el Arte como técnica de meditación trascendental y como símbolo.' img="02234-14.jpg"><h2>⟁</h2></BannerFull>

  <BannerHalf variante={1} 
  title="Desde la poesía de la materia" 
  text='Todo son formas de arte simbólicas en si mismas y, como tales, cumplen una función mediadora capaz de abrirle lo real a la conciencia.'>
    <span slot="hasvideo">
      <video poster="/img/cover3.jpg" loop playsinline controls="controls">
        <source src="/img/desdelapoesiadelamateria.webm" type="video/webm" />
        <source src="/img/desdelapoesiadelamateria.mp4" type="video/mp4" />
        <p>Ups! Su navegador no soporta vídeos HTML5.</p>
      </video>
    </span>
  </BannerHalf>

  <ProductGallery titulo="Art works" texto="Cuadros tridimensionales de 1 metro de diámetro que representan fuerzas y vibraciones aplicadas sobre la superficie del agua. Me interesa recrear las condiciones necesarias para que las leyes de la física y el tiempo puedan quedar atrapadas en una forma." />

  <BannerHalf variante={1} title="¿Deseas más información?" text="Puedes ponerte en contacto conmigo por Whatsapp e indicarme la referencia de la pieza que te gusta" img="../img/cover4.jpg">
    <Button variante={0} text="Chat-Whatsapp" url="https://api.whatsapp.com/send?phone=+34619549032" />
  </BannerHalf>

  <BannerHalf variante={2} 
  title="¿Qué es +0+1234?" 
  text="En esta presentación te resumo de qué va +0+1234: Una hermenéutica de la Creación que observa experiencialmente sus principios universales">
    <Button variante={0} text="Presentaciones" url="https://slides.com/sergiofores/" />
    <div slot="hasvideo">
      <iframe
        src="https://slides.com/sergiofores/01234/embed?byline=hidden&share=hidden"
        width="100%"
        height="420"
        scrolling="no"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      />
    </div>
  </BannerHalf>

  <BannerHalf 
  title="Hermenéutica Universal" 
  text='Libro "work in progress" que explica mi cosmovisión y el proyecto +0+1234.' img="../img/libro.svg">
    <Button variante={3} text="Leer libro" url="https://docs.google.com/document/d/15oUQRghNb_lihCFGJ9Ls0z1PyihD_a18v1V3AohVqQ4/edit?usp=sharing" />
  </BannerHalf>

  <ThreeBanner variante={3}
  title="Impresión 3D de datos." 
  text ="¿Podemos tocar los datos? En este proyecto me interesa explorar la mejor manera de traducir datos (JSON) a mallas 3D para poder ser impresos en el mundo real. Por medio de Three.js topografiamos los datos como coordenadas sobre un plano que luego se exporta a un archivo 3D" />

  <BannerHalf variante={3} title="Gematria App" text="He desarrollado una sencilla aplicación que traduce palabras en hebreo a su equivalente numérico. Creado en JS, Html, Sass y Svelte" img="../img/gematria.gif">
    <Button variante={1} text="Abrir App" url="https://gematriaapp.vercel.app/" />
  </BannerHalf>
  
  <PhiSvg variante={2} title="Phi SVG" text="Basado en una demo de Tan Li Hau. Diseño generativo en JS y SVG" />

  <BannerHalf 
  title="Videos" 
  text='Haciendo mis pinitos como "Youtuber" :) Vuelco mis reflexiones en cápsulas en torno a metafísica, arte, símbolos, etc. Y, por supuesto desde la Hermenéutica +0+1234.'>

    <Button variante={1} text="Visitar Canal" url="https://www.youtube.com/channel/UC9C6HRn2RDG3bmWC4Soxtcw" />

    <div slot="hasvideo">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/7BtDRQuPjDg"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </BannerHalf>

  <BannerTexto header="About me" texto="Sergio Forés Raga se forma en Bellas Artes, Arte Electrónico y Diseño Digital. Ha ejercido desde 1999 como Diseñador Gráfico y Web. Desde 2010 especializado en Prototipado Frontend y UID. En 2020 adopta el mundo de la impresión 3D en su proceso creativo. Paralelamente desarrolla una Hermenéutica Holística de la Creación, como vía de autoconocimiento, que denomina TODH, Función TOT ó +0+1234."> 
  </BannerTexto>
  
  <Links />
  <!-- <p>⟶ <small>Sergio Forés</small></p> -->
  <!-- <div slot="footer"></div> -->
<!-- </Layout> -->
