<script>
    import Button from "../components/Button.svelte";

    export let error

    function close() {
        error = null
    }
</script>

{#if error != null}
    <div class="z-30 absolute left-0 top-0 w-screen h-screen bg-shadow flex flex-col justify-center items-center">
        <div class="bg-background min-w-52 min-h-24 flex flex-col items-center p-6 rounded-lg space-y-6">
            <p class="font-body text-xl">{error}</p>
            <button on:click={close}><Button class="px-6 py-2">Ok</Button></button>
        </div>
    </div>
{/if}