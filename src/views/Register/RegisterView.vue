<template>
  <div class="container mx-auto flex items-center flex-col justify-center mb-16">
    <div class="header flex items-center flex-col justify-center mb-6">
      <img src="@/assets/images/locaweb.png" class="my-8" alt="logo-locaweb" />
      <h1 class="text-3xl font-bold">
        Você está muito próximo de mudar a forma de
      </h1>
      <h1 class="underline text-[#F30168] text-3xl font-bold">
        hospedar seu site
      </h1>
    </div>
    <div class="content flex flex-row justify-center w-full">
      <div class="personal-data">
        <PersonalData />
      </div>
      <div class="plan" v-if="plan">
        <div class="flex justify-center">
        <p class="h-8 bg-black w-11/12 rounded-xl text-white flex justify-center text-sm/[18px] text-[14px] mb-4 items-center">PLANO ESCOLHIDO</p>
        </div>
        <div class="host-1 w-60">
          <div class="host-1 w-60">
            <div class="principal-info">
              <h1 class="text-3xl font-bold mb-5 text-[#666666]">{{ plan.name}}</h1>
              <h1 class="text-4xl font-bold text-[#F30168] mb-3.5">{{ plan.price }}</h1>
              <p class="text-sm/[18px] text-[14px] mb-3.5 text-[#666666]">
                {{ plan.firstDescription }}
              </p>
              <p class="text-sm/[18px] text-[14px] text-[#666666] mb-5">
                sem taxa de setup
              </p>
              <hr class="mb-4" />
              <h3 class="text-sm/[21px] text-[17px] font-normal text-[#666666] mb-5" style="white-space: pre;">
                {{ plan.thirdDescription }}
              </h3>
              <hr class="mb-5" />
            </div>
            <div class="secundary-info" v-for="(detail, indexDetail) in plan.details" :key="indexDetail">
              <div class="info-1 text-start">
                <h1>Seu site em servidores <u>no {{ detail.country }}.</u></h1>
                <p>
                  <font-awesome-icon :icon="['fas', 'check']" /> Servidores em nossos
                  data centers {{ detail.serverLocation }};
                </p>
                <p>
                  <font-awesome-icon :icon="['fas', 'check']" /> {{ detail.aspnet }}
                </p>
                <p>
                  <font-awesome-icon :icon="['fas', 'check']" /> {{ detail.countUser }} usuário de FTP para
                  upload ou download;
                </p>
                <p>
                  <font-awesome-icon :icon="['fas', 'check']" /> {{ detail.countEmail }} contas de e-mails
                  profissionais;
                </p>
                <p>
                  <font-awesome-icon :icon="['fas', 'check']" /> {{ detail.countSubdominio }}
                  <u>subdomínio</u> gratuito;
                </p>
                <h1>Suporte 24 horas, 7 dias por semana grátis;</h1>
                <h1>Aplicativos disponíveis;</h1>
                <p><font-awesome-icon :icon="['fas', 'check']" /> Wordpress;</p>
                <p><font-awesome-icon :icon="['fas', 'check']" /> Drupal;</p>
                <p><font-awesome-icon :icon="['fas', 'check']" /> entre outros...</p>
                <div v-if="detail.migration">
                  <h1>Migração Gratuita;</h1>
                  <p>
                    <font-awesome-icon :icon="['fas', 'check']" /> Migramos todos seus
                    sites para nossos servidores;
                  </p>
                </div>
                <h1>Você ainda tem</h1>
                <p>
                  <font-awesome-icon :icon="['fas', 'check']" /> Webmail RoundCube;
                </p>
                <p><font-awesome-icon :icon="['fas', 'check']" /> AntiSpam;</p>
                <p>
                  <font-awesome-icon :icon="['fas', 'check']" /> Painel de
                  gerenciamento de DNS;
                </p>
                <p>
                  <font-awesome-icon :icon="['fas', 'check']" /> Painel de controle
                  web;
                </p>
                <p>
                  <font-awesome-icon :icon="['fas', 'check']" /> Configurações de PHP
                  personalizáveis;
                </p>
                <p>
                  <font-awesome-icon :icon="['fas', 'check']" /> Certificado SSL
                  Grátis;
                </p>
                <p>
                  <font-awesome-icon :icon="['fas', 'check']" /> Transferência
                  ilimitada.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button class="h-14 w-full rounded-xl border border-black flex justify-center text-sm/[20px] text-[16px] mb-4 items-center" @click="$router.push('/choose-plan')">TROCAR PLANO</button>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalData from "@/components/PersonalData.vue";

export default {
  components: {
    PersonalData,
  },

  computed: {
    plan(){
      return this.$store.getters.getPlan;
    }
  }
};
</script>

<style>

.secundary-info p{
  font-weight: 400;
  font-size: 17px;
  color: #666666;
  margin-bottom: 10px;
}

.secundary-info h1{
  font-weight: 700;
  font-size: 17px;
  color: #666666;
  margin-bottom: 20px;
}

</style>
