<script>
    export let text = "";
    export let url = "";
    export let target = "_blank";
    export let variante = 0;
    let modificador = [
        "Light",
        "Dark",
        "Colored",
        "ColoredInvert"
    ];
</script>

<style lang="scss">
    @import "../../sass/_global.scss";
    button {
        background-color: transparent;
    }
    a,
    button {
        font-size: inherit;
        display: flex;
        align-items: center;
        padding: $h0 $h1;
        text-decoration: none;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        @include margin-top(1);
        @include margin-bottom(1);
        max-width: $h8;
        position: relative;
        &:after {
            font-size: $h2;
            padding-left: $h0;
        }
        &:hover {
            cursor: pointer;
        }
    }
    a[target="_blank"]:after {
        content: " ⤤";
    }
    .Dark {
        color: $dark;
        border-color: $dark;
        &:hover {
            color: $light;
            background-color: $quaternary;
            border-color: $quaternary;
        }
    }
    .Light {
        color: $light_2;
        border-color: $light_2;
        &:hover {
            color: $dark;
            background-color: $light_2;
            border-color: $light_2;
        }
    }
    .Colored {
        color: $light_grey;
        border-color: $light_grey;
        &:hover {
            color: $dark;
            background-color: $light;
            border-color: $light;
        }
    }
    .ColoredInvert {
        color: $dark_grey;
        border-color: $dark_grey;
        &:hover {
            color: $dark;
            background-color: $light;
            border-color: $light;
        }
    }
</style>

{#if url}
    <a href="{url}" target="{target}" class="{modificador[variante]}">
        {text}
    </a>
{:else}
    <button on:click class="{modificador[variante]}">
        {text}
    </button>
{/if}
