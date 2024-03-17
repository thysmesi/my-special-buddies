<script>
    import { Carousel, Thumbnails } from "flowbite-svelte";
    import { scale } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import Button from "../components/Button.svelte";
    import OutlinedButton from "../components/OutlinedButton.svelte";

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

<main class="flex flex-col items-center px-6 sm:px-10">
    <div class="min-h-screen bg-background-second w-screen space-y-4 bg-center bg-[url('/images/home/jumbotron/item-1.webp')] bg-cover">
        <div class="bg-shadow flex flex-col items-center justify-center min-h-screen w-screen absolute z-10 text-background">
            <div class="flex flex-col items-center w-[950px] max-w-[80vw]">
                <h4 class="py-4 text-2xl text-center">Connect with compatible individuals and explore a variety of friendships</h4>
                <h1 class="font-bold font-header text-5xl text-center">Join the cause to improve the well-being of Special Needs individuals!</h1>
                <a href="/join-us"><Button class="my-5">Make your difference now</Button></a>
            </div>
        </div>
    </div>

    <h2 class="font-bold font-header pt-20 pb-5 text-4xl text-center text-accent max-w-[850px]">See How My Special Buddies Works: Start to Finish</h2>
    <h6 class=" font-body pb-12 max-w-[600px] text-center">Mikey's family found Hayden through My Special Buddies. Hayden and his friends took Mikey and Steven out to play some basketball.</h6>

    <iframe style="width:80vw; height:calc(80vw * 0.56); overflow: auto;" src="https://www.youtube.com/embed/6eXyTL8-2_A" title="Timelapse of a Cold Winter Day" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <h2 class="font-bold font-header pt-20 pb-8 text-4xl text-center text-accent max-w-[850px]">Our Buddies And Their Best Friends</h2>

    <div class="max-w-[500px]">
        <Carousel class="min-h-[400px] sm:min-h-[900px] w-full" images={carouselImages} duration="6000" bind:index={carouselIndex} let:Controls>
            <Controls />
        </Carousel>
        <Thumbnails class="bg-transparent gap-3 pt-3" let:Thumbnail let:image let:selected images={carouselImages} bind:index={carouselIndex} />
    </div>

    <a class="mt-16" href="/our-buddies"><OutlinedButton>Meet our buddies</OutlinedButton></a>

    <h2 class="font-bold font-header pt-16 pb-12 text-4xl text-center text-accent max-w-[850px]">About My Special Buddies</h2>
    <div class="flex flex-col space-y-12 lg:grid lg:grid-rows-3 lg:grid-cols-2 lg:gap-4 max-w-[1124px] lg:h-[1400px]">
        <div class="lg:row-start:1 lg:col-start-2 lg:row-end-2 lg:col-end-3 pt-8 lg:pt-0 px-8">
            <h1 class="pb-8 font-bold font-header text-5xl text-center" >What Is My Special Buddies?</h1>
            <p class="text-lg font-body">Join us in our mission to ensure that every person with special needs finds so many best friends that they don't know what to do. We offer a platform with a wide variety of potential friends, ensuring that each match is based on shared interests and compatible personalities. Whether you're seeking a friend to share in everyday adventures, someone to listen, or a friend that just gets it, My Special Buddies is your go-to destination for friendships that bring happiness and break barriers.</p>
        </div>
        <div class="lg:row-start-1 lg:col-start-1 lg:row-end-2 lg-col-end-2">
            <img src="images/home/grid/item-1.webp" alt="item-1" />
        </div>
        <div class="lg:row-start:2 lg:col-start-1 lg:row-end-3 lg:col-end-2 pt-8 lg:pt-0 px-8">
            <h1 class="pb-8 font-bold font-header text-5xl text-center" >Safety Is Our Top Priority</h1>
            <h6>Safety, well-being, and compatibility are our priorities.</h6>
            <ul class="list-disc">
                <li class="text-lg font-body">We perform background checks for each potential friend.</li>
                <li class="text-lg font-body">Our diverse network has a variety of compassionate volunteers, seasoned professionals, and specialists trained to support a spectrum of special needs.</li>
                <li class="text-lg font-body">Additionally, we recommend doing a secure video call before any in person meetup.</li>
            </ul>
        </div>
        <div class="lg:row-start:2 lg:col-start-2 lg:row-end-3 lg:col-end-3">
            <img src="images/home/grid/item-2.webp" alt="item-2" />
        </div>
        <div class="lg:row-start:3 lg:col-start-2 lg:row-end-4 lg:col-end-3 pt-8 lg:pt-0 px-8">
            <h1 class="pb-8 font-bold font-header text-5xl text-center" >How Does It Work?</h1>
            <h6>Embrace the opportunity to build as many friendships as you want.</h6>
            <ol class="list-decimal">
                <li class="text-lg font-body">Begin by choosing a friend who aligns with your interests.</li>
                <li class="text-lg font-body">Message them to find out more</li>
                <li class="text-lg font-body">Take the next step with a secure video call to establish a connection.</li>
                <li class="text-lg font-body">Once you feel comfortable, you can arrange a meeting at a time and place that suits you both.</li>
            </ol>
        </div>
        <div class="lg:row-start-3 lg:col-start-1 lg:row-end-4 lg:col-end-2">
            <img src="images/home/grid/item-3.webp" alt="item-3" />
        </div>
    </div>
    <a class="mt-12 lg:mt-0" href="/join-us"><OutlinedButton class="w-72">Join us</OutlinedButton></a>
</main>