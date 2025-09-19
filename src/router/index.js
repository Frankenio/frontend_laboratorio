import { createRouter, createWebHistory } from 'vue-router';

// import DirectorRoutes from './usuarios/Director';
import EstudianteRoutes from './usuarios/Estudiante';
import DocenteRoutes from './usuarios/Docente';
import publicRoutes from './public/public-routes';

const userRoutes = [...EstudianteRoutes, ...DocenteRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes: [...publicRoutes, ...userRoutes],
});

export default router;
