<template>
  <div class="container mx-auto mb-16">
    <div class="header flex items-center flex-col justify-center mb-6">
      <img src="@/assets/images/locaweb.png" class="my-8" alt="logo-locaweb" />
      <h1 class="text-3xl	font-bold">Você está muito próximo de mudar a forma de</h1>
      <h1 class="underline text-[#F30168] text-3xl font-bold">hospedar seu site</h1>
      <p class="my-5 text-[#0F1522] text-sm/[20px] text-[16px]">Escolha seu plano</p>
      <p class="w-32 h-8 bg-[#10C300] rounded-xl text-white flex justify-center text-sm/[18px] text-[14px] items-center">MAIS USADO</p>
    </div>
    <div class="plans">
      <PlanViewVue />
    </div>
  </div>
</template>

<script>
import PlanViewVue from '@/components/PlanView.vue'

export default {
  components: {
    PlanViewVue
  }
}
</script>
