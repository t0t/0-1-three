<script context="module">
    // main navigation for the application
    import Home from './Home.svelte';
    import Artwork from './Artwork.svelte';
    import About from './About.svelte';
    
    // these are our 'pages' to navigate through (in order for this export to work the script tag MUST include context="module")
    export const navOptions = [
        { page: 'About',   component: About },
        { page: 'Home',   component: Home },
        { page: 'Artwork',   component: Artwork },
        // other navigation pages can go here
    ];
</script>