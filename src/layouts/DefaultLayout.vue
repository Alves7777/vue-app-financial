<template>
  <div>
    <TheHeader />
    <router-view />
    <!-- Outros componentes que você quer sempre no layout -->
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    TheHeader,
  }
}
</script>
