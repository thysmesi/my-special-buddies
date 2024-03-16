<svelte:head>
    <title>Join Us</title>
</svelte:head>

<main class="flex flex-col items-center px-12 sm:px-24 pt-24">
    <h2 class="mb-10 font-bold font-header pt-20 pb-5 text-4xl text-center text-accent max-w-[850px]">Click the best option to get started</h2>

    <div class="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-12 w-full">
        <a href="./find-buddies" class="group overflow-hidden relative rounded-lg w-full lg:w-1/2 max-w-[500px] h-[500px] ">
        <div class="w-full max-w-[500px] h-[500px] rounded-lg bg-center bg-[url('/images/join-us/item-2.webp')] bg-cover">
            <div class="gradient rounded-lg absolute top-0 left-0 w-full h-full"></div>
            <div class="px-8 pointer-events-none rounded-lg absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <h2 class="group-hover:text-[2.5em] transition-all font-bold font-header text-4xl text-center text-white">I want to find new buddies</h2>
            </div>
            <div class="rounded-lg pointer-events-none flex flex-col justify-end w-full h-full bg-gradient-to-t from-shadow to-shadow-clear">
                <h3 class="translate-y-52 group-hover:translate-y-0 mb-4 transition-all font-body text-2xl text-center text-white">Start your search for a new friend</h3>
            </div>
        </div>
        </a>

        <a href="./jobs" class="group overflow-hidden relative rounded-lg w-full lg:w-1/2 max-w-[500px] h-[500px] ">
        <div class="group relative rounded-lg w-full max-w-[500px] h-[500px] bg-center bg-[url('/images/join-us/item-1.webp')] bg-cover">
            <div class="gradient rounded-lg absolute top-0 left-0 w-full h-full"></div>
            <div class="px-8 pointer-events-none rounded-lg absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <h2 class="group-hover:text-[2.5em] transition-all font-bold font-header text-4xl text-center text-white">I want a job / volunteer</h2>
            </div>
            <div class="rounded-lg pointer-events-none flex flex-col justify-end w-full h-full bg-gradient-to-t from-shadow to-shadow-clear">
                <h3 class="px-12 translate-y-52 group-hover:translate-y-0 mb-4 transition-all font-body text-2xl text-center text-white">Create a profile to search for a job or volunteer</h3>
            </div>
        </div>
        </a>
    </div>
</main>

<style>
    .gradient {
        background: linear-gradient(#000000ad, #00000000);

        -webkit-transition: background 0.25s ease-in;
        -moz-transition: background 0.25s ease-in;
        -o-transition: background 0.25s ease-in;
        transition: background 0.25s ease-in;

        background-size: 1px 300%;
        border-radius: 10px;
        cursor: pointer;
    }
    .gradient:hover {
        background-position: 1000px;
    }
</style>
