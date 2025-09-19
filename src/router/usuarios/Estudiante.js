export default [
  {
    path: '/dashboard/estudiante',
    name: 'estudiante-dashboard',
    component: () => import('@/views/dashboard/StudentDashboard.vue'),
  },
  // {
  //   path: '/estudiantes',
  //   name: 'Estudiantes',
  //   component: () => import('@/views/estudiante/EstudiantesList.vue'),
  //   meta: { requiresAuth: true },
  // },
  // {
  //   path: '/estudiantes/crear',
  //   name: 'EstudianteCrear',
  //   component: () => import('@/views/estudiante/EstudianteCrear.vue'),
  //   meta: { requiresAuth: true },
  // },
  // {
  //   path: '/estudiantes/:id',
  //   name: 'EstudianteDetalle',
  //   component: () => import('@/views/estudiante/EstudianteDetalle.vue'),
  //   props: true,
  //   meta: { requiresAuth: true },
  // },
  // {
  //   path: '/estudiantes/:id/editar',
  //   name: 'EstudianteEditar',
  //   component: () => import('@/views/estudiante/EstudianteEditar.vue'),
  //   props: true,
  //   meta: { requiresAuth: true },
  // },
];
