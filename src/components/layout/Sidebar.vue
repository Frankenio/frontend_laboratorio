<!-- filepath: src/components/layout/Sidebar.vue -->
<script setup>
// import { computed } from 'vue';
// import { sidebarItems } from './SidebarItems';
import { HomeIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/vue/24/outline';

// Simulación de rol (en producción, obtén esto del store o auth)
const userRole = 'docente'; // Cambia a 'estudiante' o 'director' para probar

// const items = computed(() => sidebarItems[userRole] || []);

const iconMap = {
  Dashboard: HomeIcon,
  'Mis Laboratorios': AcademicCapIcon,
  'Mi Horario': UserGroupIcon,
  'Gestionar Equipos': AcademicCapIcon,
  Estudiantes: UserGroupIcon,
  Laboratorios: AcademicCapIcon,
  Docentes: UserGroupIcon,
};
</script>

<template>
  <aside
    class="h-screen w-64 bg-gradient-to-b from-blue-800 to-blue-600 text-white shadow-lg flex flex-col"
  >
    <div class="p-6 text-2xl font-bold tracking-wide border-b border-blue-700">
      <span class="text-yellow-400">Lab</span>Manager
    </div>
    <nav class="flex-1 py-4">
      <ul>
        <li v-for="item in items" :key="item.name">
          <router-link
            :to="item.route"
            class="flex items-center gap-3 px-6 py-3 hover:bg-blue-700 transition-colors rounded-r-full"
            active-class="bg-blue-900"
          >
            <component :is="iconMap[item.name] || HomeIcon" class="w-6 h-6" />
            <span class="font-medium">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="p-4 border-t border-blue-700 text-sm text-blue-200">
      <span
        >Sesión: <b>{{ userRole }}</b></span
      >
    </div>
  </aside>
</template>

<style scoped>
/* Puedes agregar estilos adicionales aquí si lo necesitas */
</style>
