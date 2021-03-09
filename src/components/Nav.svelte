<script context="module">
    import Home from './Home.svelte';
    import Artwork from './Artwork.svelte';
    import About from './About.svelte';
    // import Blog from './Blog.svelte';
    
    // these are our 'pages' to navigate through (in order for this export to work the script tag MUST include context="module")
    export const navOptions = [
        { page: '+0+1234',   component: Home },
        { page: 'About',   component: About },
        { page: 'Artwork',   component: Artwork }
        // { page: 'Blog',   component: Blog },
        // other navigation pages can go here
    ];
</script>