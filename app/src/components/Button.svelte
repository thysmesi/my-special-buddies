<script>
    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
    import { twMerge } from 'tailwind-merge';

    let divClass = "font-body active:bg-accent-second active:shadow-none bg-accent font-bold cursor-pointer text-background px-8 py-3 rounded-lg"

    function onClick() {
        dispatch('click', 'button')
    }
</script>

<button on:click={onClick} class={twMerge(divClass, $$props.class)}>
    <slot />
</button>

<style>
    button {
        box-shadow: 0 3px 0 #086d75;
        text-decoration: none !important;
    }

    button:active {
		transform: translateY(3px);
    }
</style>