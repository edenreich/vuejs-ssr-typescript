import Vue from 'vue';
import ContactPage from '@pages/Contact.vue';

Vue.config.productionTip = false;

interface VueData {
    [key: string]: any;
};

export const createContactPage = (data: VueData): Vue => {
    return new Vue({
        data: data,
        render: h => h(ContactPage)
    });
};