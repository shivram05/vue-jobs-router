import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Jobs from "../views/job/Jobs.vue";
import JobDetails from "../views/job/JobDetails.vue";
import NotFound from '../views/NotFound.vue';
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about-us",
    name: "About",
    component: About,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true,
  },

  // redirect
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },

  //catch all not route found error 404 not found
  {
    path: '/:catchAll(.*)',
    name:'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
