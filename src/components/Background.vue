<template>
    <div>   
         <div class="grid grid-cols-4">
            <div class="col-span-4 md:col-span-3 lg:col-span-2">
                <div class="w-full h-screen flex items-center justify-center">
                        <div class="flex flex-col items-center">
                            <img src="../../images/bg-card-front.png" class="pt-5 w-[80%]" alt="">
                            <img src="../../images/bg-card-back.png" class="pt-5 w-[80%] " alt="">
                        </div>
                </div>
            </div>

            <RouterView>
            </RouterView>

        </div>
    </div>
</template>

<script>
import FormCom from '../views/FormComView.vue';
import { RouterLink, RouterView } from 'vue-router';


export default {
    setup() {
        return {};
    },
    components: { FormCom }
}
</script>

<style lang="scss" scoped>

</style>