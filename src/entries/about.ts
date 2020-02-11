import Vue from 'vue';
import AboutPage from '@pages/About.vue';

Vue.config.productionTip = false;

interface VueData {
    [key: string]: any;
};

export const createAboutPage = (data: VueData): Vue => {
    return new Vue({
        data: data,
        render: h => h(AboutPage)
    });
};