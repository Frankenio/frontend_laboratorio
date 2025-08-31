<script></script>


<template>
  <div class="not-found-container">
    <div class="text-center">
      <h1 class="display-1">404</h1>
      <p class="lead">Página no encontrada</p>
      <p>Lo sentimos, la página que intentas visitar no existe.</p>
      
      <router-link to="/" class="btn btn-primary mt-3">
        Volver a la página de inicio
      </router-link>
    </div>
  </div>
</template>


<style scoped>
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  padding: 20px;
}
</style>