<script>
export default {
  name: 'NotFound'
}
</script>

<template>
  <div class="not-found-container bg-light">
    <div class="text-center">
      <h1 class="display-1 text-danger fw-bold">404</h1>
      <p class="lead text-secondary">Página no encontrada</p>
      <p class="custom-message">Lo sentimos, la página que intentas visitar no existe.</p>

      <router-link to="/" class="btn btn-success mt-3 shadow">
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
  padding: 40px;
  background-color: #f8f9fa; /* Bootstrap's light background */
}

.custom-message {
  font-size: 1.2rem;
  color: #6c757d; /* Bootstrap's text-secondary */
  font-family: 'Segoe UI', sans-serif;
}
</style>