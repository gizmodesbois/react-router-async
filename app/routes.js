const routeList = {
    dashboard: () => {
        return import(/* webpackChunkName: "dashboard" */ '@containers/dashboard');
    },
    login: () => {
        return import(/* webpackChunkName: "login" */ '@containers/auth/login');
    },
};

export default routeList;
