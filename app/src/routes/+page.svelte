<script>
    import { IMAGES } from "$lib/constants.js";
    import { page } from "$app/stores";
    import Carousel from "./Carousel.svelte"
    import Button from "./Button.svelte"
</script>

<main>
    <div id="main-carousel-container">
        <Carousel duration={9000}> 
            <div id="main-carousel-1">
                <h1>Join the cause to improve the well-being of Special Needs individuals</h1>
                <h3>Connect with compatible individuals and explore a variety of friendships</h3>
            </div>
            <div id="main-carousel-2">
                <h1>We need you!</h1>
                <a on:click={()=>{console.log("clicked")}} class="button" href={"/volunteer"} aria-current={$page.url.pathname === "/volunteer"}>
                    <Button>
                        Become a friend now!
                    </Button>
                </a>
            </div>
        </Carousel>    
    </div>

    <img id="top-shaper" src="shaper.svg" class="shaper" alt=""/> 

    <div id="middle">
        <h2 id="friends-header">Our favorite buddies and their BFFs</h2>
        <div id="friends-carousel-container">
            <Carousel duration={5000} controls={true}> 
                <div id="friends-carousel-1"></div>
                <div id="friends-carousel-2"></div>
                <div id="friends-carousel-3"></div>
                <div id="friends-carousel-4"></div>
                <div id="friends-carousel-5"></div>
                <div id="friends-carousel-6"></div> 
            </Carousel>    
        </div>    
    </div>
    <div id="bottom-shaper-cover"></div>
    <img id="bottom-shaper" src="shaper.svg" class="shaper" alt=""/>

    <div id="bottom">
        <h2 id="grid-header">About Special Buddies</h2>
        <div id="grid-container">
            <div id="grid-1">
                <h3>What is Special Buddies?</h3>
                <p>At Special Buddies, we are committed to creating meaningful connections by pairing individuals with special needs with compassionate and compatible friends. Our platform is a celebration of diversity and companionship, designed with the belief that everyone deserves a friend who understands and appreciates them for who they are.</p>
                <p>We offer a curated experience where users can choose from a wide variety of potential friends, ensuring that each match is based on shared interests and compatible personalities. Our goal is to facilitate new friendships that promote mutual respect, empathy, and joy.</p>
                <p>Whether you're seeking a friend to share in everyday adventures, someone to listen, or a friend that just gets it, My Special Buddies is your go-to destination for friendships that enrich lives and break barriers. Join us in our mission to ensure that every person with special needs finds a best friend who can turn a first encounter into cherished memories.</p>
            </div>
            <div id="grid-2"></div>
            <div id="grid-3"></div>
            <div id="grid-4">
                <h3>Safety Is Our Top Priority</h3>
                <p>At Special Buddies, the safety, well-being, and compatibility of our members are the cornerstones of our community. We meticulously conduct extensive safety screenings for each potential friend, which includes detailed background checks to affirm their reliability and suitability as companions. Our diverse network comprises compassionate volunteers, seasoned professionals, and specialists trained to support a spectrum of special needs.</p>
                <p>We believe trust is the foundation of a meaningful friendship. To cultivate this, we arrange secure video calls that provide a protected and personal way for you to connect with potential friends. This crucial step helps confirm a harmonious match, giving you peace of mind before any in-person introduction. Choose Special Buddies to find new best friends.</p>
            </div>
            <div id="grid-5"> 
                <h3>What can you expect?</h3>
                <p>1. Begin by choosing a friend who aligns with your interests. 2. Take the next step with a secure video call to establish a connection. 3. Once you feel comfortable, you can arrange a meeting at a time and place that suits you both.</p>
                <p>Remember, the possibilities are endless—you're not limited to just one friend. Embrace the opportunity to build an expansive network of friends on Special Buddies, where you have the freedom to make as many friends as you wish.</p>
            </div>
            <div id="grid-6"></div>
        </div>    
    </div>
</main>

<style>
    :global(body) {
        position: absolute;
        top: 0px;
    }
    #friends-header {
        font-size: max(3vw, 30px);
        margin: 20px 20px;
        text-align: center;
    }
    #middle {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #404040;
        background-color: white;
        margin-bottom: 50px;
        justify-content: space-between;
        z-index: 1;
    }

    #grid-header {
        margin-top: 70px;
        color: #55939a;
        font-size: max(3vw, 30px);
    }
    #grid-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        font-family: "DM Sans", sans-serif;
        max-width: 1000px;
        margin-bottom: 50px;
    }

    #grid-1 { 
        grid-area: 1 / 1 / 2 / 2;
        border-radius: 7px;
        box-sizing: border-box;
        padding: 10px;
        background-color: white; 
        -webkit-box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.095); 
        box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.095);

    }
    #grid-2 { 
        grid-area: 1 / 2 / 2 / 3; 
        background: url("/home/IMG_1935.19ea66f39efb883cada0.jpg");      
        background-size: cover;  
        border-radius: 7px;
    }
    #grid-3 { 
        grid-area: 2 / 1 / 3 / 2;
        background: url("/home/3.62a304d232af1b2ef432.png");      
        background-size: cover;  
        border-radius: 7px;
    }
    #grid-4 { 
        grid-area: 2 / 2 / 3 / 3;
        background-color: #55939a; 
        border-radius: 7px;
        box-sizing: border-box;
        padding: 10px;
        color: white;
        -webkit-box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.095); 
        box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.095);

    }
    #grid-5 { 
        grid-area: 3 / 1 / 4 / 2;
        border-radius: 7px;
        box-sizing: border-box;
        padding: 10px;
        background-color: white; 
        -webkit-box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.095); 
        box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.095);
    }
    #grid-6 { 
        grid-area: 3 / 2 / 4 / 3;        
        background: url("/home/IMG_2238.f809cc82b8e73eb9435e.jpg");      
        background-size: cover;  
        border-radius: 7px;
    }

    @media only screen and (max-width: 1000px) {
        #grid-container {
            /* display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(6, 1fr);
            grid-column-gap: 20px;
            grid-row-gap: 20px; */
            display: flex;
            flex-direction: column;
            padding: 0px 20px 
        }

        #grid-1 { 
            /* grid-area: 1 / 1 / 2 / 2; */
        }
        #grid-2 { 
            /* grid-area: 2 / 1 / 3 / 2; */
            aspect-ratio: 1145 / 1428;
        }
        #grid-4 { 
            grid-area: 3 / 1 / 4 / 2; 
        }
        #grid-3 { 
            grid-area: 4 / 1 / 5 / 2; 
        }
        #grid-5 { 
            grid-area: 5 / 1 / 6 / 2; 
        }
        #grid-6 { 
            grid-area: 6 / 1 / 7 / 2;      
        }
    }

    a {
		margin: 0px;
		color: white;
  		text-decoration: none;
        font-weight: 600;
		font-size: 15px;
	}
    h1 {
        margin: 0px;
        font-size: 60px;
    }
    h2 {
        margin: 20px 0px;
		font-weight: 700;
		font-size: 40px;
    }
    h3 {
		font-weight: 500;
		font-size: 25px;
        margin: 0px;
    } 
    main {
        width: 100vw;
        overflow-x: hidden;
        color: white;
    }
    #bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #404040;
        background-color: #fcfaf6;
        z-index: -4;
    }
    #main-carousel-container {
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }
    #main-carousel-1 {
        background-image: url("pexels-rdne-stock-project-7403043.jpg");
        background-position: center center;
        background-size: cover;
        width: 100vw;
        height: 100vh;
    }
    #main-carousel-1 > h1 {
        position: relative;
        left: 30px;
        top: 130px;
        font-size: max(3vw, 30px);
        width: 85vw;
        max-width: 900px;
    }
    #main-carousel-1 > h3 {
        position: relative;
        left: 30px;
        top: 160px;
        width: 400px;
        font-size: max(2vw, 20px);
    }

    #main-carousel-2 {
        background-image: url("pexels-tara-winstead-8386122.jpg");
        background-position: center center;
        background-size: cover;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #main-carousel-2 > h1 {
        position: relative;
        top: -20px;
        width: 400px;
        font-size: max(3vw, 30px);
        text-align: center;
    }

    #friends-carousel-container {
        --friends-carousel-width: min(500px, 90vw);
        width: var(--friends-carousel-width);
        height: 600px;
        clip-path: inset(0% 0% 0% 0% round 7px);
    }
    #friends-carousel-1 {
        background-image: url("/home/carousel/1.46e57f0c8ce59d1af548.png");
        background-size: cover;
        width: var(--friends-carousel-width);
        height: 600px;
    }
    #friends-carousel-2 {
        background-image: url("/home/carousel/bre.d3f0c1c954ec302196a7.png");
        background-size: cover;
        width: var(--friends-carousel-width);
        height: 600px;
    }
    #friends-carousel-3 {
        background-image: url("/home/carousel/brreya.83fa5a5b2d14eddb2edd.png");
        background-size: cover;
        width: var(--friends-carousel-width);
        height: 600px;
    }
    #friends-carousel-4 {
        background-image: url("/home/carousel/IMG_0361.c3246a70ecd01164a2af.jpg");
        background-size: cover;
        width: var(--friends-carousel-width);
        height: 600px;
    }
    #friends-carousel-5 {
        background-image: url("/home/carousel/IMG_1576.4ba3dfaad428232b9673.jpg");
        background-size: cover;
        width: var(--friends-carousel-width);
        height: 600px;
    }
    #friends-carousel-6 {
        background-image: url("/home/carousel/IMG_4742.4af9b8e2e02630e5d0f2.jpg");
        background-size: cover;
        width: var(--friends-carousel-width);
        height: 600px;
    }

    #top-shaper {
        position: absolute;
        top: calc(100vh - calc(100vw * 0.014));
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(166deg) brightness(108%) contrast(105%);
        z-index: 3;
    }
    #bottom-shaper-cover {
        position: absolute;
        width: 100vw;
        height: 50px;
        background-color: white;
        transform: translateY(calc(-50px + calc(100vw * 0.014))) rotateX(180deg);
        z-index: 2;
    }
    #bottom-shaper {
        position: absolute;
        transform: translateY(calc(-1px + calc(100vw * 0.014))) rotateX(180deg);
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(166deg) brightness(108%) contrast(105%) drop-shadow(0px 0px 25px #0000003c);
        z-index: 0;
    }

    .shaper {
        color: white;
        height: calc(100vw * 0.015);
        /* min-width: 1000px; */
        width: 100vw;
    }
</style>