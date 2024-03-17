<script>
    import { App, User } from "../../app.js"
    import { isEmail } from "$lib"
    import Error from "../../components/Error.svelte";
    import { goto } from '$app/navigation';

    var error = null
    var loading = false
    var email, password, name, childName, bio, location, favoriteActivities, rememberMe
    
    async function onConfirmForm() {
        let data = {
            email: email.value,
            password: password.value,
            name: name.value,
            childName: childName.value,
            bio: bio.value,
            location: location.value,
            favoriteActivities: favoriteActivities.value
        }
        for (let [key, value] of Object.entries(data)) {
            data[key] = value.trim() 
        }
        if(!isEmail(data.email)) {error = "Email is invalid"; return}
        if(data.password.length < 6) {error = "Password must be greater than 6 digits"; return}
        if(data.password.length > 256) {error = "Password must be less than 256 digits"; return}
        if(data.name.length == 0) {error = "Name is required"; return}
        if(data.childName.length == 0) {error = "Child's name is required"; return}
        if(data.bio.length == 0) {error = "Bio is required"; return}
        if(data.location.length == 0) {error = "Location is required"; return}
        if(data.favoriteActivities.length == 0) {error = "Favorite activities is required"; return}

        let user = new User(data)
        
        loading = true
        try {
            await App.signUp(user)
            await App.login(user)
            goto("../authenticated/dashboard", { replaceState: false })
        } catch (err) {
            error = err
            loading = false
        }
    }
</script>

<svelte:head>
    <title>My Special Buddies: Login</title>
</svelte:head>

<main class="flex flex-col items-center px-24 pt-24">
    <section class="bg-white mt-8">
        <div class="w-[95vw] max-w-[600px] flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full relative bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Sign up to get started
                    </h1>
                    <div class="space-y-4 md:space-y-6">
                        <div class="space-y-4">
                            <input bind:this={email} type="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:accent-secondary focus:accent-secondary block w-full p-2.5 da" placeholder="Email" required="">
                            <input bind:this={password} type="password" name="password" id="password" placeholder="Password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:accent-secondary focus:accent-secondary block w-full p-2.5 " required="">
                            <input bind:this={name} type="text" name="full-name" id="full-name" placeholder="Full Name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:accent-secondary focus:accent-secondary block w-full p-2.5 " required="">
                            <input bind:this={childName} type="text" name="child-name" id="child-name" placeholder="Your Child's Name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:accent-secondary focus:accent-secondary block w-full p-2.5 " required="">
                            <input bind:this={location} type="text" name="location" id="location" placeholder="Enter Location" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:accent-secondary focus:accent-secondary block w-full p-2.5 " required="">
                            <input bind:this={favoriteActivities} type="text" name="favorite-activities" id="favorite-activities" placeholder="Favorite Activities" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:accent-secondary focus:accent-secondary block w-full p-2.5 " required="">
                            <textarea bind:this={bio} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:accent-secondary" placeholder="Write your bio here..."></textarea>
                        </div>                        
                        <button on:click={onConfirmForm} class="w-full text-white bg-accent hover:bg-accent-secondary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign up</button>
                        <p class="text-sm font-light text-gray-500 ">
                            Already have an account? <a href="../log-in" class="font-medium text-accent hover:underline ">Log in</a>
                        </p>
                    </div>
                </div>
                {#if loading} 
                    <div class="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-background rounded-lg">
                        <div role="status">
                            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-accent" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
      </section>  
</main>
<Error bind:error={error} />