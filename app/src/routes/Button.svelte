<script>
      import { twMerge } from 'tailwind-merge';

    let divClass = "font-body active:bg-accent-second active:shadow-none bg-accent font-bold cursor-pointer text-background px-8 py-3 rounded-lg"
</script>

<div class={twMerge(divClass, $$props.class)}>
    <slot />
</div>

<style>
    div {
        box-shadow: 0 3px 0 #086d75;
        text-decoration: none !important;
    }

    div:active {
		transform: translateY(3px);
    }
</style>