<template>
  <AppNavbar />
  <router-view />
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue'
</script>

<!--<template>-->
<!--  <TheHeader v-if="showHeader && !isCategoryRoute" />-->
<!--  <div v-if="!isCategoryRoute">-->
<!--    <router-view />-->

<!--    <div v-show="showName">-->
<!--      Nome: {{ firstName }} <br />-->
<!--      Sobrenome: {{ lastName }}-->
<!--    </div>-->

<!--    <div>-->
<!--      <label for="account-number">Número da conta</label>-->
<!--      <input-->
<!--          id="account-number"-->
<!--          v-model="account_number"-->
<!--          placeholder="Digite o número da conta"-->
<!--      />-->
<!--      <button @click="searchAccount">Buscar Conta</button>-->
<!--      <button @click="goToCategory">Categoria</button>-->
<!--    </div>-->

<!--    <div v-if="accountData">-->
<!--      <h3>Resultado da Conta:</h3>-->
<!--      <pre>{{ accountData }}</pre>-->
<!--    </div>-->

<!--    <img alt="Vue logo" src="./assets/logo.png" />-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
<!--  </div>-->

<!--  <router-view v-else />-->
<!--</template>-->


<!--<script>-->
<!--import HelloWorld from './components/HelloWorld.vue'-->
<!--import TheHeader from './components/TheHeader.vue'-->

<!--const API_URL = `http://localhost:8090/api/v1/account`-->

<!--export default {-->
<!--  name: 'App',-->
<!--  components: {-->
<!--    HelloWorld,-->
<!--    TheHeader,-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      showHeader: true,-->
<!--      firstName: 'Lucas',-->
<!--      lastName: 'Alves',-->
<!--      showName: true,-->
<!--      account_number: '',-->
<!--      accountData: null,-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    async searchAccount() {-->
<!--      if (!this.account_number) {-->
<!--        alert('Por favor, digite um número de conta.')-->
<!--        return-->
<!--      }-->

<!--      try {-->
<!--        const response = await fetch(`${API_URL}?account_number=${this.account_number}`)-->
<!--        const data = await response.json()-->
<!--        this.accountData = data-->
<!--      } catch (error) {-->
<!--        console.error('Erro ao buscar a conta:', error)-->
<!--        alert('Erro ao buscar conta.')-->
<!--      }-->
<!--    },-->

<!--    async goToCategory() {-->
<!--      this.$router.push({ name: 'Category' })-->
<!--    }-->
<!--  },-->
<!--  computed: {-->
<!--    isCategoryRoute() {-->
<!--      return this.$route.name === 'Category' // ou 'CategoryView', dependendo da sua rota-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
