<!-- Home Page -->
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goToPrograms = () => router.push({ name: 'About' });
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col">
    <!-- Header -->
    <header
      class="w-full flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur border-b border-blue-100 shadow-sm"
    >
      <div class="flex items-center gap-2">
        <router-link :to="{ name: 'Home' }" class="text-2xl font-bold text-blue-800 tracking-tight"
          >Laboratorios SIS-INF</router-link
        >
        <span class="ml-2 px-2 py-0.5 rounded bg-blue-100 text-xs text-blue-600 font-semibold"
          >Educación Superior</span
        >
      </div>
      <nav class="flex gap-6">
        <router-link
          :to="{ name: 'Home' }"
          class="text-blue-700 hover:text-blue-900 font-medium transition"
          >Inicio</router-link
        >
        <router-link
          :to="{ name: 'About' }"
          class="text-blue-700 hover:text-blue-900 font-medium transition"
          >Nosotros</router-link
        >
      </nav>
      <router-link
        :to="{ name: 'Login' }"
        class="btn btn-sm btn-outline btn-primary rounded-full px-6 shadow hover:scale-105 transition"
      >
        Iniciar Sesión
      </router-link>
    </header>

    <!-- Hero Section -->
    <section class="flex-1 flex flex-col items-center justify-center text-center px-4">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 leading-tight">
          Bienvenido a <span class="text-primary">Laboratorios SIS-INF</span>
        </h1>
        <p class="text-lg md:text-xl text-blue-700 mb-8 font-light">
          Donde la excelencia académica y la innovación tecnológica se unen para formar líderes del
          mañana.
        </p>
        <button
          class="btn btn-primary btn-lg rounded-full px-8 shadow-lg hover:scale-105 transition"
          @click="goToPrograms"
        >
          Conoce nuestros programas
        </button>
      </div>
      <div class="mt-12">
        <img
          src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80"
          alt="Campus"
          class="rounded-3xl shadow-xl w-full max-w-xl mx-auto border-4 border-white"
        />
      </div>
    </section>

    <!-- Footer minimalista -->
    <footer class="w-full py-4 text-center text-blue-400 text-sm bg-transparent mt-auto">
      &copy; {{ new Date().getFullYear() }} UTO — Excelencia en Educación Superior
    </footer>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #4b6cb7, #182848);
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-link {
  margin: 0 1rem;
  color: #fff;
  text-decoration: none;
  position: relative;
}

.nav-link::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: #ffd700;
  transition: width 0.3s;
  position: absolute;
  bottom: -4px;
  left: 0;
}

.nav-link:hover::after {
  width: 100%;
}

.login-btn {
  background: #ffd700;
  color: #182848;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s;
}

.login-btn:hover {
  background: #ffea47;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: url('/images/hero-bg.jpg') center/cover no-repeat;
  color: #fff;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.cta-btn {
  background: #ffd700;
  color: #182848;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s;
}

.cta-btn:hover {
  transform: translateY(-3px);
}

.bg-gradient-to-br {
  background: linear-gradient(to bottom right, #ffffff, #ebf8ff, #d1eaff);
}

.backdrop-blur {
  backdrop-filter: blur(10px);
}

.border-blue-100 {
  border-color: #bee3f8;
}

.shadow-sm {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.text-primary {
  color: #3182ce;
}

.text-blue-800 {
  color: #2b6cb0;
}

.text-blue-700 {
  color: #2c5282;
}

.text-blue-900 {
  color: #1a365d;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.transition {
  transition: all 0.3s ease;
}

.btn {
  display: inline-block;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.btn-primary {
  background-color: #3182ce;
  color: #fff;
  border-color: #3182ce;
}

.btn-primary:hover {
  background-color: #276749;
  border-color: #276749;
}

.btn-outline {
  background-color: transparent;
  color: #3182ce;
  border-color: #3182ce;
}

.btn-outline:hover {
  background-color: #3182ce;
  color: #fff;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-3xl {
  border-radius: 1.5rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.mt-auto {
  margin-top: auto;
}

.text-sm {
  font-size: 0.875rem;
}

.text-xs {
  font-size: 0.75rem;
}

.font-semibold {
  font-weight: 600;
}

.font-medium {
  font-weight: 500;
}

.font-light {
  font-weight: 300;
}

.leading-tight {
  line-height: 1.25;
}

.max-w-2xl {
  max-width: 42rem;
}

.max-w-xl {
  max-width: 36rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.mt-12 {
  margin-top: 3rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.rounded {
  border-radius: 0.375rem;
}

.border {
  border-width: 1px;
}

.w-full {
  width: 100%;
}

.h-screen {
  height: 100vh;
}

.min-h-screen {
  min-height: 100vh;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-6 {
  gap: 1.5rem;
}

.mt-auto {
  margin-top: auto;
}

.text-center {
  text-align: center;
}

.bg-transparent {
  background-color: transparent;
}

.rounded-full {
  border-radius: 9999px;
}

.transition {
  transition: all 0.3s ease;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.backdrop-blur {
  backdrop-filter: blur(10px);
}

.border-b {
  border-bottom-width: 1px;
}

.shadow-sm {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.text-blue-400 {
  color: #63b3ed;
}

.text-blue-600 {
  color: #3182ce;
}

.text-blue-700 {
  color: #2c5282;
}

.text-blue-800 {
  color: #2b6cb0;
}

.text-blue-900 {
  color: #1a365d;
}

.bg-white {
  background-color: #fff;
}

.bg-white\/80 {
  background-color: rgba(255, 255, 255, 0.8);
}

.rounded-3xl {
  border-radius: 1.5rem;
}

.shadow-xl {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.border-4 {
  border-width: 4px;
}

.border-white {
  border-color: #fff;
}

.max-w-2xl {
  max-width: 42rem;
}

.max-w-xl {
  max-width: 36rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mt-12 {
  margin-top: 3rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.rounded {
  border-radius: 0.375rem;
}

.border {
  border-width: 1px;
}

.w-full {
  width: 100%;
}

.h-screen {
  height: 100vh;
}

.min-h-screen {
  min-height: 100vh;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-6 {
  gap: 1.5rem;
}

.mt-auto {
  margin-top: auto;
}

.text-center {
  text-align: center;
}

.bg-transparent {
  background-color: transparent;
}
</style>
