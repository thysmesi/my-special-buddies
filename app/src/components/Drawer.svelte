<script>
    import { page } from '$app/stores'; 
    import Button from "../components/Button.svelte";
    import { slide, fade } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
    import { goto } from '$app/navigation';
    import { App } from "../app.js"
    export let show

    function logOut() {
        App.logout()
        navigate("/")
    }

    function navigate(path) {
        show = false
        goto(path, { replaceState: false })
    }
    function close() {
        show = false
    }
</script>

{#if show}
    <div transition:fade={{ delay: 0, duration: 300, easing: quadInOut}} class="z-30 absolute top-0 left-0 w-screen h-screen bg-shadow"></div>
    <div transition:slide={{ delay: 0, duration: 300, easing: quadInOut, axis: 'x' }} class="px-12 pt-8 flex flex-col absolute top-0 right-0 z-30 max-w-[450px] w-screen h-screen bg-white">
        <button on:click={close} class="w-full flex justify-end"><img class=" w-6" src="/assets/x.svg" alt=""></button>
        {#if $page.url.pathname.includes("authenticated")}
            <button on:click={()=>navigate("/authenticated/dashboard")} class="whitespace-nowrap py-2 text-2xl text-black text-left font-header {$page.url.pathname == "/authenticated/dashboard" ? "hidden" : "block" }">Dashboard</button>
            <button on:click={()=>navigate("/authenticated/chats")} class="whitespace-nowrap py-2 text-2xl text-black text-left font-header {$page.url.pathname == "/authenticated/chats" ? "hidden" : "block" }">Chats</button>
            <button on:click={()=>navigate("/authenticated/edit-profile")} class="whitespace-nowrap py-2 text-2xl text-black text-left font-header {$page.url.pathname == "/jobs" ? "hidden" : "block" }">Edit Profile</button>
            <button on:click={()=>navigate("/authenticated/meet-buddies")} class="whitespace-nowrap py-2 text-2xl text-black text-left font-header {$page.url.pathname == "/authenticated/meet-buddies" ? "hidden" : "block" }">Meet Buddies</button>
            <button on:click={logOut}><Button class="flex mt-6 sm:hidden w-24 h-10 px-5 py-0 items-center">Log Out</Button></button>
        {:else}
            <button on:click={()=>navigate("/")} class="whitespace-nowrap py-2 text-2xl text-black text-left font-header {$page.url.pathname == "/" ? "hidden" : "block" }">Home</button>
            <button on:click={()=>navigate("/our-buddies")} class="whitespace-nowrap py-2 text-2xl text-black text-left font-header {$page.url.pathname == "/our-buddies" ? "hidden" : "block" }">Our Buddies</button>
            <button on:click={()=>navigate("/join-us")} class="whitespace-nowrap py-2 text-2xl text-black text-left font-header {$page.url.pathname == "/join-us" ? "hidden" : "block" }">Join Us</button>
            <button on:click={()=>navigate("/jobs")} class="whitespace-nowrap py-2 text-2xl text-black text-left font-header {$page.url.pathname == "/jobs" ? "hidden" : "block" }">Jobs</button>
            <button on:click={()=>navigate("/find-buddies")} class="whitespace-nowrap py-2 text-2xl text-black text-left font-header {$page.url.pathname == "/find-buddies" ? "hidden" : "block" }">Find New Buddies</button>
            <button on:click={()=>navigate("/our-why")} class="whitespace-nowrap py-2 text-2xl text-black text-left font-header {$page.url.pathname == "/our-why" ? "hidden" : "block" }">Our Why</button>
            <button on:click={()=>navigate("/log-in")} class="whitespace-nowrap py-2 text-2xl text-black text-left font-header {$page.url.pathname == "/log-in" ? "hidden" : "block" }">Log In</button>
            <button on:click={()=>navigate("/sign-up")}><Button class="flex mt-6 sm:hidden w-24 h-10 px-5 py-0 items-center">Sign Up</Button></button>
        {/if}

    </div>
{/if}