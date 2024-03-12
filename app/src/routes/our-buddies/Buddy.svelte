<script>
    export let image, name, aboutMe
</script>

<div class="w-[1160px] h-[650px] flex items-center space-x-12">
    <img class="h-full w-[440px] object-cover" src={image} alt="profile">
    <div class="flex flex-col items-start">
        <h1 class="font-bold font-header pt-20 pb-5 text-4xl text-center text-accent">{name} - 5 ⭐</h1>
        <h5 class="font-body text-2xl text-foreground-second"><strong>About Me: </strong>{aboutMe}</h5>
        <a href="/join-us" class="pt-12 text-center text-accent font-body font-bold text-lg  underline underline-offset-8">Find out more</a>
    </div>
</div>