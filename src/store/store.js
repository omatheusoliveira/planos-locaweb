import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selectedPlan: null,
  },
  mutations: {
    SELECT_PLAN(state, plan) {
      state.selectedPlan = plan;
    },
  },
  actions: {
    selectPlan(context, plan) {
      context.commit("SELECT_PLAN", plan);
    },
  },
  getters: {
    getPlan(state){
      return state.selectedPlan;
    }
  }
});