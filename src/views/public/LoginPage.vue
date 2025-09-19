<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// Importa los iconos de Heroicons
import { ExclamationTriangleIcon, LockClosedIcon } from '@heroicons/vue/24/outline';

const correo = ref('');
const password = ref('');
const error = ref('');
const isLoading = ref(false);

const router = useRouter();

/**
 * Aquí deberías importar tu función/composable de autenticación,
 * por ejemplo: import { login } from '@/composables/useAuth'
 * y usarla en handleLogin.
 */

// Validación de formato de correo y contraseña
function validateForm() {
  const emailRegex = /^[a-z]+\.[a-z]+@sistemas\.edu\.bo$/;
  const passwordRegex = /^\d{8}SISinf$/;

  if (!emailRegex.test(correo.value)) {
    error.value = 'El correo debe tener el formato nombre.apellido@sistemas.edu.bo';
    return false;
  }
  if (!passwordRegex.test(password.value)) {
    error.value = 'La contraseña debe tener el formato 8 dígitos seguidos de SISinf';
    return false;
  }
  return true;
}

// Manejo del envío del formulario
const handleLogin = async () => {
  error.value = '';
  if (!validateForm()) return;

  isLoading.value = true;

  // Aquí deberías hacer la petición al backend para autenticar
  /*
  try {
    const response = await login({ correo: correo.value, password: password.value });
    switch (response.rol) {
      case 'estudiante':
        router.push('/student-dashboard');
        break;
      case 'docente':
        router.push('/teacher-dashboard');
        break;
      case 'director':
        router.push('/director-dashboard');
        break;
      default:
        error.value = 'Rol no reconocido.';
    }
  } catch (e) {
    error.value = 'Usuario o contraseña incorrectos.';
  }
  */
  // Simulación para pruebas:
  setTimeout(() => {
    if (correo.value === 'juan.perez@sistemas.edu.bo' && password.value === '12345678SISinf') {
      router.push({ name: 'estudiante-dashboard' });
    } else {
      error.value = 'Usuario o contraseña incorrectos.';
    }
    isLoading.value = false;
  }, 1200);
};
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100"
  >
    <div class="w-full max-w-md p-8 rounded-3xl shadow-xl bg-white/90 border border-blue-100">
      <!-- Encabezado con icono Heroicons -->
      <div class="mb-8 text-center flex flex-col items-center">
        <LockClosedIcon class="w-12 h-12 text-blue-700 mb-2" />
        <h1 class="text-2xl font-bold text-blue-900 mb-2">Sistema de Gestión Estudiantil</h1>
        <h2 class="text-lg text-blue-700 font-medium mb-1">Iniciar Sesión</h2>
        <p class="text-sm text-blue-400">Ingresa tu correo institucional y contraseña</p>
      </div>

      <!-- Mensaje de error con icono Heroicons -->
      <div v-if="error" class="alert alert-error shadow mb-4 animate-shake flex items-center gap-2">
        <ExclamationTriangleIcon class="w-6 h-6 text-red-600" />
        <span>{{ error }}</span>
      </div>

      <!-- Formulario de login -->
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="correo" class="block text-sm font-semibold text-blue-800 mb-1"
            >Correo institucional</label
          >
          <input
            id="correo"
            v-model="correo"
            type="email"
            required
            placeholder="nombre.apellido@sistemas.edu.bo"
            class="input input-bordered w-full focus:input-primary transition"
            :disabled="isLoading"
            autocomplete="username"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-semibold text-blue-800 mb-1"
            >Contraseña</label
          >
          <input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="Ej: 12345678SISinf"
            class="input input-bordered w-full focus:input-primary transition"
            :disabled="isLoading"
            autocomplete="current-password"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary w-full rounded-full font-bold tracking-wide shadow hover:scale-105 transition"
          :disabled="isLoading || !correo || !password"
        >
          <LockClosedIcon class="w-5 h-5 inline-block mr-2" />
          {{ isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}
        </button>
      </form>

      <!-- Información de ayuda -->
      <div class="mt-8 text-xs text-blue-400 text-center">
        ¿Problemas para ingresar? Contacta a
        <a href="mailto:soporte@sistemas.edu.bo" class="underline hover:text-blue-700">
          soporte@sistemas.edu.bo
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-6px);
  }
  40% {
    transform: translateX(6px);
  }
  60% {
    transform: translateX(-4px);
  }
  80% {
    transform: translateX(4px);
  }
}
.animate-shake {
  animation: shake 0.4s;
}
</style>
