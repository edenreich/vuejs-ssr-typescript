import Vue from 'vue';
import IndexPage from '@pages/Index.vue';

Vue.config.productionTip = true;

interface VueData {
    [key: string]: any;
};

export const createIndexPage = (data: VueData): Vue => {
    return new Vue({
        data: data,
        template: '<IndexPage />',
        components: { IndexPage }
    });
};