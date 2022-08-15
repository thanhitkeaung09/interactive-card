<template>
        <div class="col-span-2">
            <form @submit.prevent="" class="w-full h-screen flex items-center justify-center">
                <div class="space-y-8 w-[55%]">
                    <div class="space-y-2">
                        <label for="">CARDHOLDER NAME</label>
                        <input type="text" class="border px-3 py-2 rounded-lg w-full border-black focus:outline-none" placeholder="Than Htike Aung" required>
                    </div>

                     <div class="space-y-2 ">
                        <label for="">CARD NUMBER</label>
                        <input type="text" class="border px-3 py-2 rounded-lg w-full border-black focus:outline-none" placeholder="Put your card number" required>
                    </div>

                    <div class="flex justify-between">
                        <div class="space-y-2 w-[20%]">
                            <label class="" for="grid-city">
                                    EXP.DATE
                            </label>
                            <input type="number" class="border px-3 py-2 rounded-lg w-full border-black focus:outline-none" placeholder="00" required>
                        </div>

                        <div class="space-y-2 w-[20%]">
                            <label class="pl-4" for="grid-city">
                                    (MM/YY)
                            </label>
                            <input type="text" class="border px-3 py-2 rounded-lg w-full border-black focus:outline-none" placeholder="YY" required>
                        </div>  

                        <div class="space-y-2 w-[50%]">
                            <label class="pl-8" for="grid-city">
                                    CVC
                            </label>
                            <input type="text" class="border px-3 py-2 rounded-lg w-full border-black focus:outline-none" placeholder="eg.123" required>
                        </div> 
                    </div>

                    <div class="">
                        <RouterLink :to="{name:'detail'}">
                            <button  type="submit" class="border w-full py-3 rounded-lg bg-very-dark-violet text-white hover:bg-gray-700  transition duration-200"  >Confirm</button>
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