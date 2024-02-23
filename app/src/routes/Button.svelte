<script>
    var down = false

    function handleMouseDown() {
        down = true
    }

    function handleMouseUp() {
        down = false
    }

</script>

<div class={down ? "down" : ""} on:mousedown={handleMouseDown} on:mouseup={handleMouseUp}>
    <slot />
</div>

<style>
    div {
        box-sizing: border-box;
        padding: 10px;
        background-color: #5ea2aa;
        box-shadow: 0 3px 0 #55939a;
        width: fit-content;

        border-radius: 6px;
        cursor: pointer;
        color: white;
        text-decoration: none !important;
    }

    .down {
        background-color: #55939a;
		box-shadow: none;
		transform: translateY(3px);
    }
</style>