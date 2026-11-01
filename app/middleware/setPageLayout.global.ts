// export default defineNuxtRouteMiddleware((to) => {
//   if (to.path !== "/") {
//     setPageLayout("default");
//   } else setPageLayout(false);
// });

export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/') {
    return
  }

  return navigateTo('/')
})
