<template>
  <div>
      <div class="bg-[url('../images/bg-main-mobile.png')] lg:bg-[url('../images/bg-main-desktop.png')] w-full h-screen bg-no-repeat object-cover">
      <img src="../images/bg-main-desktop.png" class="hidden" alt="">
      <img src="../images/bg-main-mobile.png" class="hidden" alt="">
         
         <div class="w-[90%] h-full mx-auto">

            <Background></Background>

         </div>

      </div>
  </div>
</template>

<script>
import Background from './components/Background.vue'
export default {
  components: { Background },
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>