<template>
  <nav class="navbar">
    <ul class="nav-list">
      <li><router-link to="/" class="nav-link" exact-active-class="active">Home</router-link></li>
      <li><router-link to="/about" class="nav-link" exact-active-class="active">Sobre</router-link></li>
      <li><router-link to="/category" class="nav-link" exact-active-class="active">Categoria</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
}
</script>

<style scoped>
.navbar {
  background-color: #2c3e50; /* azul escuro */
  padding: 1rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.5rem;
}

.nav-link {
  color: #ecf0f1; /* cinza claro */
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  padding-bottom: 0.2rem;
  border-bottom: 2px solid transparent;
}

.nav-link:hover {
  color: #1abc9c; /* verde água */
  border-bottom-color: #1abc9c;
}

.active {
  color: #1abc9c;
  border-bottom-color: #1abc9c;
}

/* Responsivo: menu fica vertical em telas pequenas */
@media (max-width: 600px) {
  .nav-list {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
