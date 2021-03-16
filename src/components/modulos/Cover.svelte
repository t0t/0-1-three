<script>
    export let title = ""
    export let text = ""
    // let imagen = "img/01234-7.jpg"
    import {tweened} from "svelte/motion";
	let angle = 0.618033988749;
	let count = 0;
	let numDots = 600;
	let tweenedCount = tweened(0, {
		duration: 1000,
		interpolate: (a, b) => (t) => Math.round(((b-a)*t)+a)
	})
    let innerWidth, 
        innerHeight, 
        svgWidth,
        scrollY,
        topescroll;

    // let styles = {
	// 	'size': "50px",
	// 	'position': "0px",
	// 	'bg': '#AAAAAA',
	// 	'alpha': 0.5
	// };
    // $: cssVarStyles = Object.entries(styles)
    // .map(([key, value]) => `--${key}:${value}`)
    // .join(';');
    $: if ( scrollY < (innerWidth/2) ) {
        topescroll = scrollY
    }
    $: svgWidth = (innerWidth/2);

</script>

<style lang="scss">
    @import "../../sass/_global.scss";
    svg {
        circle {
            fill: salmon;
        }
        g {
            transform: translate(50%, 17%);
        }
    }
    .Cover {
        height: 100vh;
        padding: $h4;
        color: $white;
        background-size: cover;
        background-image: url("../img/01234-7.jpg");
        /* background-position: top right; */
        background-attachment: fixed;
        display: grid;
        align-items: center;
        justify-items: center;
        text-align: center;
        background-repeat: no-repeat;

        h1 {
            align-self: end;
        }
        h2 {
            align-self: start;
        }
    }
</style>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY />

<section class="Cover" style="
background-position: {topescroll}px;
background-color:rgba(0, 0, 0, 0.{scrollY});
">
    <h1>{title}</h1>
    <h2>{text}</h2>
    <button on:click={() => {$tweenedCount = $tweenedCount > 0 ? 0 : numDots; }}>Play</button>
	<input type="number" bind:value={angle}>
	<input type="range" bind:value={$tweenedCount} min={0} max={numDots}>
    {scrollY}
    <svg style="width: {svgWidth}" height="{innerHeight}">
        <g>
            {#each { length: $tweenedCount } as _, index(index)}
                <circle r="2.3" 
                cx={Math.cos(index * angle * 2 * Math.PI) * index * 0.2} 
                cy={Math.sin(index * angle * 2 * Math.PI) * index * 0.2} />
            {/each}
        </g>
    </svg>
</section>