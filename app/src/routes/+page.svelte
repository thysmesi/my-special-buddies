<script>
    import { Carousel, Thumbnails } from "flowbite-svelte";
    import { scale } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import Button from "./Button.svelte";
    import OutlinedButton from "./OutlinedButton.svelte";

    const scaleAnimation = (x) => scale(x, { duration: 1500, easing: quintOut });

    let jumboIndex = 0;
    const jumboImages = [
        {
            alt: "slide 1",
            src: "/images/home/jumbotron/item-1.webp",
            title: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
        },
        {
            alt: "slide 2",
            src: "/images/home/carousel/item-3.webp",
            title: "cristina-gottardi-CSpjU6hYo_0-unsplash.com",
        },
    ];

    let carouselIndex = 0;
    const carouselImages = [
        {
            alt: "Slide 1",
            src: "/images/home/carousel/item-1.webp",
            title: "Slide 1",
        },
        {
            alt: "Slide 2",
            src: "/images/home/carousel/item-2.webp",
            title: "Slide 2",
        },
        {
            alt: "Slide 3",
            src: "/images/home/carousel/item-3.webp",
            title: "Slide 3",
        },
        {
            alt: "Slide 4",
            src: "/images/home/carousel/item-4.webp",
            title: "Slide 4",
        },
        {
            alt: "Slide 5",
            src: "/images/home/carousel/item-5.webp",
            title: "Slide 5",
        },
        {
            alt: "Slide 6",
            src: "/images/home/carousel/item-6.webp",
            title: "Slide 6",
        },
        {
            alt: "Slide 7",
            src: "/images/home/carousel/item-7.webp",
            title: "Slide 7",
        },
        {
            alt: "Slide 8",
            src: "/images/home/carousel/item-8.webp",
            title: "Slide 8",
        },
        {
            alt: "Slide 9",
            src: "/images/home/carousel/item-9.webp",
            title: "Slide 9",
        },
        {
            alt: "Slide 10",
            src: "/images/home/carousel/item-10.webp",
            title: "Slide 10",
        },
    ];
</script>

<svelte:head>
    <title>My Special Buddies</title>
</svelte:head>

<main class="flex flex-col items-center px-10">
    <div class="min-h-[calc(100vh-6rem)] bg-background-second w-screen space-y-4">
        <Carousel class="min-h-[calc(100vh-6rem)] w-screen rounded-none " images={jumboImages} duration="5000" bind:index={jumboIndex}>
            <div slot="slide" let:Slide>
                {#if jumboIndex == 0}
                    <div class="bg-shadow flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] w-screen absolute z-10 text-background" transition:scaleAnimation={{}}>
                        <div class="flex flex-col items-center w-[950px] max-w-[80vw]">
                            <h4 class="py-4 text-2xl text-center">Connect with compatible individuals and explore a variety of friendships</h4>
                            <h1 class="font-bold font-header text-5xl text-center">Join the cause to improve the well-being of Special Needs individuals!</h1>
                            <a href="/join-us"><Button class="my-5">Make your difference now</Button></a>
                        </div>
                    </div>
                {/if}

                <Slide transition={scaleAnimation} image={jumboImages[jumboIndex]} />
            </div>
        </Carousel>
    </div>

    <h2 class="font-bold font-header pt-20 pb-5 text-4xl text-center text-accent max-w-[850px]">See How My Special Buddies Works: Start to Finish</h2>
    <h6 class=" font-body pb-12 max-w-[600px] text-center">Mikey's family found Hayden through My Special Buddies. Hayden and his friends took Mikey and Steven out to play some basketball.</h6>

    <iframe width="936" height="527" src="https://www.youtube.com/embed/6eXyTL8-2_A" title="Timelapse of a Cold Winter Day" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <h2 class="font-bold font-header pt-20 pb-8 text-4xl text-center text-accent max-w-[850px]">Our Buddies And Their Best Friends</h2>

    <div class="w-[500px]">
        <Carousel class="min-h-[600px] w-full" images={carouselImages} duration="6000" bind:index={carouselIndex} let:Controls>
            <Controls />
        </Carousel>
        <Thumbnails class="bg-transparent gap-3 pt-3" let:Thumbnail let:image let:selected images={carouselImages} bind:index={carouselIndex} />
    </div>

    <a class="mt-16" href="/our-buddies"><OutlinedButton>Meet our buddies</OutlinedButton></a>

    <h2 class="font-bold font-header pt-16 pb-12 text-4xl text-center text-accent max-w-[850px]">About My Special Buddies</h2>
    <div class="w-[1160px] h-[1400px] grid grid-rows-3 grid-cols-2 gap-4">
        <div><img src="images/home/grid/item-1.webp" alt="item-1" /></div>
        <div class="px-8">
            <h1 class="pb-8 font-bold font-header text-5xl text-center" >What Is My Special Buddies?</h1>
            <p class="text-lg font-body">Join us in our mission to ensure that every person with special needs finds so many best friends that they don't know what to do. We offer a platform with a wide variety of potential friends, ensuring that each match is based on shared interests and compatible personalities. Whether you're seeking a friend to share in everyday adventures, someone to listen, or a friend that just gets it, My Special Buddies is your go-to destination for friendships that bring happiness and break barriers.</p>
        </div>
        <div class="px-8">
            <h1 class="pb-8 font-bold font-header text-5xl text-center" >Safety Is Our Top Priority</h1>
            <h6>Safety, well-being, and compatibility are our priorities.</h6>
            <ul class="list-disc">
                <li class="text-lg font-body">We perform background checks for each potential friend.</li>
                <li class="text-lg font-body">Our diverse network has a variety of compassionate volunteers, seasoned professionals, and specialists trained to support a spectrum of special needs.</li>
                <li class="text-lg font-body">Additionally, we recommend doing a secure video call before any in person meetup.</li>
            </ul>
        </div>
        <div><img src="images/home/grid/item-2.webp" alt="item-2" /></div>
        <div><img src="images/home/grid/item-3.webp" alt="item-3" /></div>
        <div class="px-8">
            <h1 class="pb-8 font-bold font-header text-5xl text-center" >How Does It Work?</h1>
            <h6>Embrace the opportunity to build as many friendships as you want.</h6>
            <ol class="list-decimal">
                <li class="text-lg font-body">Begin by choosing a friend who aligns with your interests.</li>
                <li class="text-lg font-body">Message them to find out more</li>
                <li class="text-lg font-body">Take the next step with a secure video call to establish a connection.</li>
                <li class="text-lg font-body">Once you feel comfortable, you can arrange a meeting at a time and place that suits you both.</li>
            </ol>
        </div>
    </div>

    <a href="/join-us"><OutlinedButton class="my-5 w-72">Join us</OutlinedButton></a>
</main>
