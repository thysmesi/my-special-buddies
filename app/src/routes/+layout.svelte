<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { NAVIGATION_MENU } from "$lib/constants.js";
	import Button from "./Button.svelte"
	import { fly } from 'svelte/transition';

	var mobileLayout = false
	var showMobileMenu = true

	function handleResize() {
		mobileLayout = window.innerWidth < 1000;
	}
	function closeMobileMenu() {
		showMobileMenu = false
	}
	function openMobileMenu() {
		showMobileMenu = true
	}

	onMount(() => {
		handleResize()
	})

</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">
</svelte:head>
<svelte:window on:resize={handleResize} />

<nav>
	<a href="/" aria-current={$page.url.pathname === "/"}> 
		<img class="logo" src="logo-white.png" alt="logo">
	</a>
	

	<div class="menu">
		{#if mobileLayout}
			<img on:click={openMobileMenu} class="bars" src="bars.svg" alt="">
		{:else}
			{#each Object.entries(NAVIGATION_MENU) as [name, { route }], i}
				<a href={route} aria-current={$page.url.pathname === route}>
					{name}
				</a>
			{/each}
		{/if}
		<a class="button" href={"/pricing"} aria-current={$page.url.pathname === "/pricing"}>
			<Button>
				Get Pricing!
			</Button>
		</a>	
	</div>
</nav>

<slot />

{#if showMobileMenu}
	<div id="mobile-menu" transition:fly={{ delay: 0, duration: 300, x: 100, y: 500, opacity: 0.5 }}>
		<div id="x-container">
			<img on:click={closeMobileMenu} class="x" src="x.svg" alt="">
		</div>	
		<a on:click={closeMobileMenu} href={'/'} aria-current={$page.url.pathname === '/'}>
			Home
		</a>
		{#each Object.entries(NAVIGATION_MENU) as [name, { route }], i}
			<a on:click={closeMobileMenu} href={route} aria-current={$page.url.pathname === route}>
				{name}
			</a>
		{/each}
	</div>
{/if}

<footer>
	<a href="https://www.facebook.com/groups/2758011841018693">
		<img class="icon" src="facebook.svg" alt="">
	</a>
	<a href="https://www.instagram.com/myspecialbuddiess/">
		<img class="icon" src="instagram.svg" alt="">
	</a>
</footer>

<style>
	.x {
		width: 20px;
		margin-right: 20px;
		margin-top: 20px;
		filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(166deg) brightness(108%) contrast(105%);
		cursor: pointer;
	}
	#x-container {
		display: flex;
		justify-content: end;
	}
	#mobile-menu {
		position: fixed;
		top: 0vh;
		width: 100vw;
		height: 100vh;
		background-color: #55939a;
		z-index: 7;
		display: flex;
		flex-direction: column;
		font-size: 26px;
	}
	#mobile-menu > a {
		margin: 10px 0px;
		margin-left: 20px;
	}
	#overflow-container {
		overflow-x: hidden;
	}

	.icon {
		width: 50px;
		height: 50px;
		filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(166deg) brightness(108%) contrast(105%);
	}

	footer {
		box-sizing: border-box;
		height: 100px;
		background-color: #404040;
		display: flex;
		align-items: center;
		padding-left: 50px;
		width: 100vw;
	}

	:global(:root){
		--background: #fcfaf6;
    	--accent: "#4e888f";
		font-family: "Quicksand", sans-serif;
		font-optical-sizing: auto;
    }
	:global(body){
		overflow-x: hidden;
		padding: 0px;
		margin: 0px;
	}
	:global(html){
		overflow-x: hidden;
	}

	nav {
		--height: 100px;

		position: absolute;

		box-sizing: border-box; 
		width: 100vw;
		height: var(--height);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0px min(2vw, 200px);

		background-color: transparent;
    	background-image: linear-gradient(180deg, #28253086 10%, #F2295B00 98%);

		font-weight: 600;
		font-size: 15px;
		z-index: 3;
	}

	.menu {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
	}

	.logo {
		width: 40vw;
		max-width: 300px;
	}

	a {
		margin: 0px 10px;
		color: white;
  		text-decoration: none; 
	} 
	.bars {
		cursor: pointer;
		width: 25px;
		margin-right: 10px;
		filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(166deg) brightness(108%) contrast(105%);
	}
</style>
