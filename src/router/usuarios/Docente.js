export default [
  {
    path: '/dashboard/docente',
    name: 'docente-dashboard',
    component: () => import('@/views/dashboard/TeacherDashboard.vue'),
  },
  // {
  //   path: '/docentes',
  //   name: 'Docentes',
  //   component: () => import('@/views/docente/DocentesList.vue'),
  //   meta: { requiresAuth: true },
  // },
  // {
  //   path: '/docentes/crear',
  //   name: 'CrearDocente',
  //   component: () => import('@/views/docente/DocenteCreate.vue'),
  //   meta: { requiresAuth: true },
  // },
  // {
  //   path: '/docentes/:id',
  //   name: 'DetalleDocente',
  //   component: () => import('@/views/docente/DocenteDetail.vue'),
  //   props: true,
  //   meta: { requiresAuth: true },
  // },
  // {
  //   path: '/docentes/:id/editar',
  //   name: 'EditarDocente',
  //   component: () => import('@/views/docente/DocenteEdit.vue'),
  //   props: true,
  //   meta: { requiresAuth: true },
  // },
];
