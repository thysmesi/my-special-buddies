<script>
    export let duration = 8000;
    export let controls = false

    import { onMount } from "svelte";
    import anime from "animejs";

    var carouselNode, carousel, carouselIndex = 0

    onMount(()=>{
        carousel = new Carousel(carouselNode,duration)
        carousel.start()
    })

    class Carousel {
        constructor(node, delay) {
            this.node = node
            this.index = 0
            this.delay = delay
            this.images = node.children
            
            for(let i = 0; i < this.images.length; i++) {
                if(this.index != i) {
                    this.images[i].style.zIndex = 2
                    this.images[i].style.transform = `translate(${this.node.clientWidth}px,0px)`
                    this.images[i].style.opacity = 0
                } else {
                    this.images[i].style.zIndex = 1
                }
            }
        }
        
        setIndex(index) {
            const newIndex = index % this.images.length

            for(let i = 0; i < this.images.length; i++) {
                if(i == this.index) {
                    anime({
                        targets: this.images[i],
                        translateX: this.node.clientWidth,
                        opacity: 0,
                        easing: 'easeInOutQuad',
                        duration: 1500,
                        complete: ()=>{
                            this.images[i].style.zIndex = 2
                        }
                    });
                } else if (i == newIndex) {
                    this.images[i].style.transform = 'scale(0.95)'
                    this.images[i].style.opacity = 0.6
                    anime({
                        targets: this.images[i],
                        translateX: 0,
                        scale: 1,
                        opacity: 1,
                        duration: 1500,
                        easing: 'easeInOutQuad',
                        complete: ()=>{
                            this.images[i].style.zIndex = 1
                        }
                    });
                }
            }

            this.index = newIndex
            carouselIndex = newIndex
        }

        start() {
            setTimeout(()=>{
                this.setIndex(this.index + 1)

                setInterval(()=>{
                    this.setIndex(this.index + 1)
                }, this.delay)
            }, this.delay / 2)
        }
    }

    // function handleResize() {
	// 	console.log(carousel.node.clientWidth)
	// }
</script>

<!-- <svelte:window on:resize={handleResize} /> -->
<div bind:this={carouselNode} class="carousel">
    <slot />
</div>

{#if controls && carouselNode != undefined}
    <div id="controls" style={`position:relative;top:${-15}px;`}>
        {#each {length: carousel.images.length} as _, i}
            <div class="dot" style = { `opacity: ${i == carouselIndex ? 1 : 0.6 };`}></div>
        {/each}
    </div>
{/if}

<style>
    #controls {
        position: relative;
        display: flex;
        width: 100%;
        justify-content: center;
        z-index: 2;
    }
    .dot {
        background-color: white;
        width: 20px;
        height: 4px;
        border-radius: 1px;
        margin: 0px 3px;
    }
    .carousel {
        height: 100%;
    }
    .carousel :global(> *) {
        position: absolute;
        z-index: 1;
    }  
</style>