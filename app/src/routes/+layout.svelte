<script>
    import "flowbite";
    import "../app.css";
    import { page } from '$app/stores';  

    const pathname = $page.url.pathname  
    console.log(pathname)
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=League+Spartan:wght@100..900&display=swap" rel="stylesheet" />
</svelte:head>

<nav class="px-6 flex justify-between items-center h-24 bg-background">
    <a href="/"><img class="w-72 object-contain" src="assets/logo.png" alt="logo" /></a>

    <div class="space-x-4">
        <a class="{$page.url.pathname == "/our-buddies" ? "text-accent" : ""}" href="/our-buddies">Our Buddies</a>
        <a class="{$page.url.pathname == "/join-us" ? "text-accent" : ""}" href="/join-us">Join Us</a>
        <a class="{$page.url.pathname == "/jobs" ? "text-accent" : ""}" href="/jobs">Jobs</a>
        <a class="{$page.url.pathname == "/find-buddies" ? "text-accent" : ""}" href="/find-buddies">Find New Buddies</a>
        <a class="{$page.url.pathname == "/our-why" ? "text-accent" : ""}" href="/our-why">Our Why</a>
        <a class="{$page.url.pathname == "/log-in" ? "text-accent" : ""}" href="/log-in">Log In</a>
        <a class="{$page.url.pathname == "/pricing" ? "text-accent" : ""}" href="/pricing">Pricing</a>
    </div>
</nav>
<div class="absolute w-screen flex justify-center z-20 text-background">
    <div class="w-14">
        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 24">
            <g id="Layer_1-2" data-name="Layer 1">
                <path fill="currentColor" class="cls-1" d="M26.5,24L53,0H0l26.5,24Z" />
            </g>
        </svg>    
    </div>
</div>

<div class="min-h-[calc(100vh-24rem)]">
    <slot />
</div>

<div class="mt-16"></div>
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
        <a href="https://www.facebook.com/profile.php?id=61553700502793"><img class="size-10"  src="assets/facebook.svg" alt="facebook"></a>
        <a href="https://www.instagram.com/myspecialbuddiess/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="><img class="size-10" src="assets/instagram.svg" alt="instagram"></a>
    </div>
    <p class="my-1 text-sm">My Special Buddies</p>
    <a class="my-1 text-sm text-accent" href="tel:+19494416508">(949) 441-6508</a>
    <div class="mt-12 flex w-full">
        <p class="text-sm">COPYRIGHT © 2024 MY SPECIAL BUDDIES - ALL RIGHTS RESERVED.</p>
    </div>
</footer>
