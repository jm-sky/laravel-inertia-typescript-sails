import "./bootstrap";
import "../css/app.css";

import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/scss/solid.scss'
import '@fortawesome/fontawesome-free/css/regular.css'
import '@fortawesome/fontawesome-free/css/brands.css'


import { createApp, h, type DefineComponent } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
  title: (title) => title ? `${title} - ${appName}` : appName,
  resolve: async (name) => await resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>('./Pages/**/*.vue')),
  setup ({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue)
      .mount(el)
  },
  progress: {
    color: "#4B5563",
  },
});
