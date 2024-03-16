<script>
    import "flowbite";
    import Drawer from "../components/Drawer.svelte"
    import "../app.css";
    import { page } from '$app/stores'; 
    import Button from "../components/Button.svelte";
    import { App } from "../app.js"
    import { goto } from '$app/navigation';
    
    let drawerShown = false

    function openDrawer() {
        drawerShown = true
    }
    function logOut() {
        App.logout()
        goto("/", { replaceState: false })
    }
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=League+Spartan:wght@100..900&display=swap" rel="stylesheet" />
</svelte:head>

<Drawer bind:show={drawerShown} />
<nav class="z-20 absolute px-6 flex w-screen justify-between items-center h-24 {$page.url.pathname == "/" ? 'bg-gradient-to-b from-shadow to-shadow-clear text-white' : 'border' }">
    <a href="/"><img class="w-52 sm:w-72 object-contain" src="{$page.url.pathname == "/" ? '/assets/logo-white.png' : '/assets/logo.png' }" alt="logo" /></a>

        <div class="sm:space-x-4 flex items-center">
            {#if $page.url.pathname.includes("authenticated")}
                <a class="hidden lg:block {$page.url.pathname == "/authenticated/dashboard" ? "before:content-[''] before:inline-block before:w-[10px] before:h-[10px] before:rounded-full before:bg-accent before:mr-1" : ""}" href="/authenticated/dashboard">Dashboard</a>
                <a class="hidden lg:block {$page.url.pathname == "/authenticated/chats" ? "before:content-[''] before:inline-block before:w-[10px] before:h-[10px] before:rounded-full before:bg-accent before:mr-1" : ""}" href="/authenticated/chats">Chats</a>
                <a class="hidden lg:block {$page.url.pathname == "/authenticated/edit-profile" ? "before:content-[''] before:inline-block before:w-[10px] before:h-[10px] before:rounded-full before:bg-accent before:mr-1" : ""}" href="/authenticated/edit-profile">Edit Profile</a>
                <a class="hidden lg:block {$page.url.pathname == "/authenticated/meet-buddies" ? "before:content-[''] before:inline-block before:w-[10px] before:h-[10px] before:rounded-full before:bg-accent before:mr-1" : ""}" href="/authenticated/meet-buddies">Meet Buddies</a>
                <button on:click={openDrawer}><img class="lg:hidden {$page.url.pathname == "/" ? 'invert' : '' } w-8" src="/assets/bars.svg" alt=""></button>
                <Button on:click={logOut} class="hidden sm:flex w-24 h-10 px-5 py-0 items-center">Log Out</Button>
                    
            {:else}
                <a class="hidden lg:block {$page.url.pathname == "/our-buddies" ? "before:content-[''] before:inline-block before:w-[10px] before:h-[10px] before:rounded-full before:bg-accent before:mr-1" : ""}" href="/our-buddies">Our Buddies</a>
                <a class="hidden lg:block {$page.url.pathname == "/join-us" ? "before:content-[''] before:inline-block before:w-[10px] before:h-[10px] before:rounded-full before:bg-accent before:mr-1" : ""}" href="/join-us">Join Us</a>
                <a class="hidden lg:block {$page.url.pathname == "/jobs" ? "before:content-[''] before:inline-block before:w-[10px] before:h-[10px] before:rounded-full before:bg-accent before:mr-1" : ""}" href="/jobs">Jobs</a>
                <a class="hidden lg:block {$page.url.pathname == "/find-buddies" ? "before:content-[''] before:inline-block before:w-[10px] before:h-[10px] before:rounded-full before:bg-accent before:mr-1" : ""}" href="/find-buddies">Find New Buddies</a>
                <a class="hidden lg:block {$page.url.pathname == "/our-why" ? "before:content-[''] before:inline-block before:w-[10px] before:h-[10px] before:rounded-full before:bg-accent before:mr-1" : ""}" href="/our-why">Our Why</a>
                <a class="hidden lg:block {$page.url.pathname == "/log-in" ? "before:content-[''] before:inline-block before:w-[10px] before:h-[10px] before:rounded-full before:bg-accent before:mr-1" : ""}" href="/log-in">Log In</a>
                <button on:click={openDrawer}><img class="lg:hidden {$page.url.pathname == "/" ? 'invert' : '' } w-8" src="/assets/bars.svg" alt=""></button>
                <a href="/sign-up"><Button class="hidden sm:flex w-24 h-10 px-5 py-0 items-center">Sign Up</Button></a>
            {/if}
        </div>
</nav>

<div class="min-h-[calc(100vh-6rem)]">
    <slot />
</div>

<div class="mt-8"></div>
<div class="rotate-180 w-screen flex justify-center z-20 text-background-second">
    <div class="w-14">
    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 24">
        <g id="Layer_1-2" data-name="Layer 1">
            <path fill="currentColor" class="cls-1" d="M26.5,24L53,0H0l26.5,24Z" />
        </g>
    </svg>
    </div>
</div>
<footer class="px-32 flex flex-col py-14 items-center bg-background-second">
    <div class="flex items-center">
        <a href="https://www.facebook.com/profile.php?id=61553700502793"><img class="size-10"  src="/assets/facebook.svg" alt="facebook"></a>
        <a href="https://www.instagram.com/myspecialbuddiess/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="><img class="size-10" src="/assets/instagram.svg" alt="instagram"></a>
    </div>
    <p class="my-1 text-sm">My Special Buddies</p>
    <a class="my-1 text-sm text-accent" href="tel:+19494416508">(949) 441-6508</a>
    <div class="mt-12 flex w-full">
        <p class="text-sm">COPYRIGHT © 2024 MY SPECIAL BUDDIES - ALL RIGHTS RESERVED.</p>
    </div>
</footer>
