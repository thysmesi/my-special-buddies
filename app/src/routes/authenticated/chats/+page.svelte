<script>
    import { App, User } from "../../../app.js"
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    var user = {}
    onMount(() => {
        if(App.user == null) {
            goto("/", { replaceState: false })
        } else {
            user = App.user
        }
    });
</script>