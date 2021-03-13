<script>
    export let text = "Name";
    export let url = "url";
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
    a {
        display: inherit;
        padding: $h1;
        text-decoration: none;
        border-width: 1px;
        border-style: solid;
        @include margin-top(1);
        @include margin-bottom(1);
        max-width: $h7;
    }

    .Dark {
        color: $quaternary;
        border-color: $quaternary;
        &:hover {
            color: $light;
            background-color: $quaternary;
            border-color: $quaternary;
        }
    }
    .Light {
        color: $primary;
        border-color: $primary;
        &:hover {
            color: $light;
            background-color: $primary;
            border-color: $primary;
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

<a href="{url}" target="{target}" class="{modificador[variante]}">
    {text}
</a>
