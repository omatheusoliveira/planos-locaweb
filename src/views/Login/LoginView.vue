<template>
  <div class="w-full mt-44">
    <div class="flex justify-center logo mb-12">
      <img src="@/assets/images/locaweb.png" alt="logo-locaweb" />
    </div>
    <form class="flex justify-center mb-[32px]">
      <div
        class="card border w-[617px] h-[492px] pt-[28px] px-[30px] pb-[38px]"
      >
        <div class="text-left">
          <h1 class="text-sm/[35px] text-[31px] font-bold mb-[5px]">
            Entre na sua conta
          </h1>
          <p class="mb-[19px]">
            Para acessar sua conta informe seu e-mail e senha
          </p>
          <div class="login text-sm/[23px] text-[18px]">
            <div class="mb-[15px]">
              <label class="login text-sm/[20px] text-[16px]" for="email"
                >E-mail</label
              >
              <input
                class="rounded-[5px] w-[551px] h-20 border border-solid px-[16px] py-[30px]"
                type="text"
                v-model="username"
                id="email"
                placeholder="Seu e-mail"
              />
            </div>
            <div class="mb-[5px]">
              <label class="login text-sm/[20px] text-[16px]" for="password"
                >Senha</label
              >
              <input
                class="rounded-[5px] w-[551px] h-20 border border-solid px-[16px] py-[30px]"
                type="password"
                v-model="password"
                id="password"
                placeholder="Sua senha"
              />
            </div>
          </div>
          <div class="forget-password text-right mb-[25px]">
            <a
              class="text-sm/[20px] text-[16px]"
              style="color: #515d74"
              href="#"
              >Esqueci minha senha</a
            >
          </div>
          <button
            class="bg-[#F30168] w-[551px] h-20 rounded"
            style="color: white"
            @click="login"
          >
            FAZER LOGIN
          </button>
        </div>
      </div>
    </form>
    <h2 class="text-sm/[23px] text-[18px]">
      Ainda não tem conta?
      <router-link style="color: #f30168" class="text-sm/[20px] text-[16px]" to="/choose-plan">Cadastre-se</router-link>
    </h2>
  </div>
</template>

<script>
import { API } from "@/client/api";

export default {
  name: "LoginView",

  data() {
    return {
      username: null,
      password: null,
    };
  },

  methods: {
    async login() {
      const result = await API.post(`auth/login`, {
        username: this.username,
        password: this.password,
      });
      if (result.status == 200) {
        localStorage.setItem('token', result.data.token);
        this.$swal({
          title: "Sucesso!!!",
          text: "Login feito com sucesso.",
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#4BB543",
          allowOutsideClick: true,
        }).then((res =>{
          if(res.isConfirmed){
            this.$router.push('/home' )
          }
        }));
      } else {
        this.$swal({
          title: `ERROR!!!`,
          html: `Ocorreu um erro ao efetuar Login.<br> ${result.response.data}`,
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
