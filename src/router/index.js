import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "../views/ContactBook.vue";
import ContactForm from "../components/ContactForm.vue";


const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("../views/NotFound.vue"),
    },
    {
        path: "/contacts/add",
        name: "contact.add",
        component: ContactForm,
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("../views/ContactEdit.vue"),
        props: true, // Truyền các biến trong $route.params vào làm props
    },
    {
    path: "/contacts/add",
    name: "contact.add",
    component: () => import("../views/ContactAdd.vue"),
  },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
