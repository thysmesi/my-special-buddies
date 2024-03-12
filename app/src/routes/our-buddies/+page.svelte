<script>
    import Buddy from "./Buddy.svelte";
</script>

<svelte:head>
    <title>Our Buddies</title>
</svelte:head>

<main class="flex flex-col items-center px-10">
    <h2 class="font-bold font-header pt-20 pb-5 text-4xl text-center text-accent">Meet Our Buddies</h2>
    <h5 class="mb-20 max-w-[650px] text-center font-body text-2xl text-foreground-second">Here are just a few examples of some of our wonderful friends at Special Buddies.</h5>

    <div class="flex flex-col space-y-24">
        <Buddy image={"images/our-buddies/ashley.webp"} name={"Ashley"} aboutMe={"I am a student at UVU. Working with special needs individuals is very close to my heart. My experience in this field has taught me patience, empathy, and the importance of celebrating every individual's unique abilities and accomplishments. I love skiing, the ocean, going on walks, and cleaning."}/>
        <Buddy image={"images/our-buddies/autumn.webp"} name={"Autumn"} aboutMe={"Hello! I’m a dedicated nursing student at BYU. With over 5 years of babysitting and special needs experience, I've developed a strong understanding and love for working with children of all backgrounds. I’m known for my outgoing personality and my enthusiasm for making each day a little brighter!"}/>
        <Buddy image={"images/our-buddies/kai.webp"} name={"Kai"} aboutMe={"I am a pre-med student at UVU. My experience with special needs kids has been both enlightening and fulfilling. I'm always eager to meet new friends and spend time doing the things they love. I also love karaoke, crafts, and reading."}/>
        <Buddy image={"images/our-buddies/ellie.webp"} name={"Ellie"} aboutMe={"HI!! I am Ellie, and I'm from San Clemente, CA. I am currently pursuing a Pre-business major at BYU. Beyond the classroom, I enjoy hot yoga, reading, and spending time with friends. I have a special place in my heart for special needs teenagers, and love to make them feel loved."}/>
        <Buddy image={"images/our-buddies/gavin.webp"} name={"Gavin"} aboutMe={"I am a pre-business student at BYU. My favorite things to do are spend time with my family, work on cars, and brighten peoples days. I have loved working with special needs individuals as it has changed my perspective on life."}/>    
    </div>
</main>