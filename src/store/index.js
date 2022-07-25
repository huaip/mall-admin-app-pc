import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getUserCookie, removeUserCookie } from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于切换菜单的闭合状态，false表示不闭合，true表示闭合
    collapsed: false,
    // 用户信息
    user: getUserCookie,
  },
  mutations: {
    // 用于切换菜单的闭合状态
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    // 设置用户cookie
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    // 用户退出登录删除cookie
    logOut(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
  },
  actions: {
    // 用于切换菜单的闭合状态
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    // 设置用户cookie
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
      setCookie(userInfo);
    },
    // 用户退出登录删除cookie
    logOut({ commit }) {
      commit('logOut');
      removeUserCookie();
    },
  },
  modules: {},
});
