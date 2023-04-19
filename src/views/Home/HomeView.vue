<template>
    <div>
        <div>
            <div class="header flex items-center py-5 px-20 justify-between">
                <img src="@/assets/images/locaweb.png" alt="logo-locaweb" />
                <div class="user h-5">
                    <button class="flex items-center rounded-full text-white justify-center w-10 h-10 bg-gray-500" @click="toggleOptions">{{ user.user[0].toUpperCase() }}</button>
                    <p class="mt-2 cursor-pointer" v-show="this.btnLogout" @click="logout">Sair</p>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="content mx-auto w-6/12 flex flex-col justify-center text-start">
                <div class="intro mb-8">
                    <h1 class="mb-3.5 text-sm/[35px] text-[29px] font-bold">Olá {{ user.user }},</h1>
                    <p class="text-sm/[20px] text-[16px]">Seja bem vindo a sua conta de hospedagem.</p>
                </div>
                <div class="m-auto ">
                    <iframe src="https://www.youtube.com/embed/eV4UcOAIP-4" frameborder="0" width="976" height="654"></iframe>
                </div>
                <div class="footer mt-8">
                    <p>Caso tenha alguma dúvida, <u>visite nossa central de ajuda.</u></p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            user: this.parseJwt(localStorage.getItem('token')), 
            btnLogout: false,        
        }
    },

    methods: {

        toggleOptions(){
            this.btnLogout = !this.btnLogout
        },

        logout(){
            localStorage.removeItem('token');
            this.$router.push('/')
        },

        parseJwt (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        }

    },
}
</script>

<style>

</style>