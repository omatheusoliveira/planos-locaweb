<template>
  <div class="personal-data-container text-left border w-10/12 pt-[28px] px-[30px] pb-[38px]">
    <div class="header">
      <h1 class="text-3xl font-bold mb-1">Dados pessoais</h1>
      <p class="mb-5">Informe seus dados pessoais para acesso à sua conta</p>
    </div>
    <form class="flex contents justify-center mb-[32px]">
      <div
        class="card"
      >
        <div class="text-left">
          <div class="login text-sm/[23px] text-[18px]">
            <div class="mb-[15px]">
              <label class="login text-sm/[20px] text-[16px]" for="email"
                >Nome completo</label
              >
              <input
                class="rounded-[5px] h-14 border border-solid w-full px-[16px]  mt-2 py-[30px]"
                type="text"
                block
                v-model="user.name.firstname"
                id="full-name"
                placeholder="Informe seu nome completo"
              />
            </div>

            <div class="mb-[5px]">
              <label class="text-sm/[20px] text-[16px]" for="password"
                >Celular</label
              >
              <input
                class="rounded-[5px] w-full h-14 border border-solid mt-2 px-[16px] py-[30px]"
                type="text"
                id="celphone"
                placeholder="(99) 99999-0000"
              />
            </div>

             <div class="mb-[15px]">
              <label class="login text-sm/[20px] text-[16px]" for="email"
                >E-mail</label
              >
              <input
                class="rounded-[5px] w-full h-14 border border-solid mt-2 px-[16px] py-[30px]"
                type="text"
                id="email"
                v-model="user.email"
                placeholder="Informe seu e-mail"
              />
            </div>
            <div class="mb-[5px]">
              <label class="login text-sm/[20px] text-[16px]" for="password"
                >Senha</label
              >
              <input
                class="rounded-[5px] w-full h-14 border border-solid mt-2 px-[16px] py-[30px]"
                type="password"
                id="password"
                v-model="user.password"
              />
              <p
              class="text-sm/[20px] text-[16px] text-[#515D74]"
              >No mínimo 8 caracteres</p>
            </div>
            <div class="mb-[5px] mt-4">
              <label class="login text-sm/[20px] text-[16px]" for="password"
                >Confirme sua senha</label
              >
              <input
                class="rounded-[5px] w-full h-14 border border-solid mt-2 px-[16px] py-[30px]"
                type="password"
                id="password"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
    <hr class="my-5">
    <div class="footer">
      <h1 class="text-3xl font-bold mb-4">Dados do seu site</h1>
      <div class="mb-[5px]">
        <label class="login text-sm/[20px] text-[16px]" for="password"
          >Nome do seu site</label
        >
        <input
          class="rounded-[5px] w-full h-14 border border-solid px-[16px] mt-2 py-[30px]"
          type="password"
          id="password"
          placeholder="Meu site"
        />
        <p
        class="text-sm/[20px] text-[16px] text-[#515D74]"
        >Exatamente igual ao título do seu site</p>
      </div>
      <hr class="my-5">
      <input
          id="checkbox"
          type="checkbox"
          class="mr-3"
        />

      <label class="text-sm/[20px] text-[16px]" for="checkbox" >Ao concluir com seu cadastro você concorda com nossos <u>termos de uso</u>  e <u>politicas de privacidade.</u> </label>
      
    </div>
    <button
      class="bg-[#F30168] h-20 mt-6 w-full rounded text-sm/[20px] text-[16px]"
      style="color: white"
      @click="register"
    >
      CRIAR CONTA
    </button>
  </div>
</template>

<script>
import { API } from "@/client/api";

export default {
    data() {
        return {
            user:{
                email: null,
                username: null,
                password: null,
                name:{
                    firstname: null,
                    lastname:''
                },
                address:{
                    city:'kilcoole',
                    street:'7835 new road',
                    number:3,
                    zipcode:'12926-3874',
                    geolocation:{
                        lat:'-37.3159',
                        long:'81.1496'
                    }
                },
                phone:'1-570-236-7033'
            }
        }
    },

    methods: {
        async register(){
        this.user.username = this.user.email
        const result = await API.post(`users`, JSON.stringify(this.user));
        if (result.status == 200) {
            this.$swal({
            title: "Sucesso!!!",
            text: "Registro feito com sucesso.",
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#4BB543",
            allowOutsideClick: true,
            }).then((res =>{
            if(res.isConfirmed){
                this.$router.push('/' )
            }
            }));
        } else {
            this.$swal({
            title: `ERROR!!!`,
            text: "Ocorreu um erro ao efetuar o registro.",
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#F27474",
            allowOutsideClick: true,
            });
        }
    },
  },
};
</script>

<style></style>
