<template>
  <div class="content flex justify-around">
    <div class="host-1 w-60" v-for="(plan, index) in plans" :key="index">
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
      <button class="bg-[#F30168] w-64 h-14 rounded text-white mb-6" @click="selectPlan(plan)">
        ESCOLHER ESSE PLANO
      </button>
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
</template>

<script>
export default {

  data() {
    return {
      plans:[

        {
          name: 'Hospedagem 1',
          price: 'Gratis',
          firstDescription: 'você não paga nada para usar',
          thirdDescription: 'Ideal para quem está \ncomeçando.',
          details: [
            {
              country: 'Estados Unidos',
              serverLocation: 'americanos',
              aspnet: 'ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0',
              countUser: '1',
              countEmail: '1',
              countSubdominio: '1',
              migration: false,
            }
          ]
        },

        {
          name: 'Hospedagem 2',
          price: 'R$499/mês',
          firstDescription: 'cobrado mensalmente',
          thirdDescription: 'Ideal para site com mais mais \nde 30k de visitas.',
          details: [
            {
              country: 'Estados Unidos',
              serverLocation: 'americanos',
              aspnet: 'ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0',
              countUser: '10',
              countEmail: '30',
              countSubdominio: '10',
              migration: true,
            }
          ]
        },

        {
          name: 'Hospedagem 3',
          price: 'R$999/mês',
          firstDescription: 'você não paga nada para usar',
          thirdDescription: 'Ideal para site com mais mais \nde 60k de visitas.',
          details: [
            {
              country: 'Estados Unidos',
              serverLocation: 'americanos',
              aspnet: 'ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0',
              countUser: 'Ilimitado',
              countEmail: 'Ilimitado',
              countSubdominio: '50',
              migration: true,
            }
          ]
        },
        
      ]
    }
  },

  methods: {
    selectPlan(plan){
      this.$store.dispatch('selectPlan', plan)
      this.$router.push('/register')
    }
  },

};
</script>

<style scoped>

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
