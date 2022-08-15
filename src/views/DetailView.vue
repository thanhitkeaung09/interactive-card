<template>
    <div class="col-span-2">
            <form @submit.prevent="" class="w-full h-screen flex items-center justify-center">
                <div class="space-y-4 w-[40%]">
                    <div class="flex flex-col items-center space-y-2 ">
                        <img src="../../images/icon-complete.svg" class="w-[20%]" alt="">
                        <h1 class="text-[30px]">THANK YOU!</h1>
                        <p class="text-[12px] text-gray-400">We've added your card details.</p>
                    </div>
                    <div class="">
                        <RouterLink :to="{name:'form'}">
                            <button type="submit" class="border w-full py-3 rounded-lg bg-very-dark-violet text-white hover:bg-gray-700  transition duration-200"  >Continue</button>
                        </RouterLink>
                    </div>

                </div>
            </form>
        </div>
</template>

<script>
import { RouterLink, useRouter } from 'vue-router';
export default {
    setup () {

    

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>