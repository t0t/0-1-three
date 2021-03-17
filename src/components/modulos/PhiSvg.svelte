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
    let innerWidth, innerHeight, svgWidth;
    export let variante = 0;
    let modificador = [
        "Light",
        "Dark",
        "Colored",
        "Light2"
    ];
    import Button from "./Button.svelte";

    // let styles = {
	// 	'size': "50px",
	// 	'position': "0px",
	// 	'bg': '#AAAAAA',
	// 	'alpha': 0.5
	// };
    // $: cssVarStyles = Object.entries(styles)
    // .map(([key, value]) => `--${key}:${value}`)
    // .join(';');

    $: svgWidth = (innerWidth/2);
    $: svgHeight = (innerHeight/3);

</script>

<style lang="scss">
    @import "../../sass/_global.scss";
    svg {
        circle {
            fill: $light_2;
        }
        g {
            transform: translate(60%, 50%);
        }
        fill: red;
    }
    .PhiSvg {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas: "media" "texto";
        padding-top: 0;
        padding-right: $h3;
        padding-left: $h3;
        padding-bottom: $h2;
        
        @include media(s2) {
            padding-bottom: 0;
            padding-right: 0;
            grid-template-columns: 1fr 1.62fr;
            grid-template-areas: "texto media";
        }

        .BannerMedia {
            grid-area: media;
            background-color: $dark_2;
        }

        .PhiSvgText {
            display: grid;
            justify-items: start;
            align-self: center;
            justify-self: center;
            grid-area: texto;

            @include media(s2) {
                margin-bottom: 0;
                margin-right: $h2;
                max-width: $bp1;
            }
            h2 {
                font-weight: bold;
                margin-top: $h0;
                margin-right: 0;
                margin-bottom: $h0;
                margin-left: 0;
                @include media(s1) {
                    font-weight: inherit;
                }
            }
        }
    }
    .Light {
        background-color: $light_2;
        color: $dark_grey;
        p {
            color: $dark_grey;
        }
    }
    .Dark {
        background-color: $dark_grey;
    }
    .Colored {
        background-color: $dark;
    }
    .Light2 {
        background-color: $light;
        color: $dark;
        p {
            color: $dark;
        }
    }

</style>

<svelte:window bind:innerWidth bind:innerHeight />

<section class="PhiSvg {modificador[variante]}">

    <div class="BannerMedia">
        <input type="number" bind:value={angle}>
	    <input type="range" bind:value={$tweenedCount} min={0} max={numDots}>
        <slot name="hasvideo">
            <svg style="width: {svgWidth}; height: {svgHeight};">
                <g>
                    {#each { length: $tweenedCount } as _, index(index)}
                        <circle r="2.3" 
                        cx={Math.cos(index * angle * 2 * Math.PI) * index * 0.2} 
                        cy={Math.sin(index * angle * 2 * Math.PI) * index * 0.2} />
                    {/each}
                </g>
            </svg>
        </slot>
    </div>
    
    <div class="PhiSvgText">
        <h2>{title}</h2>
        <p>{text}</p>
        
        <Button variante={0} text="Play" on:click={() => {$tweenedCount = $tweenedCount > 0 ? 0 : numDots; }} />
    </div>

</section>