import AdminSubAdding from "../components/adminPanel/adminSubAdding";
import AdminLogin from "../components/adminPanel/login";
import AdminRegister from "../components/adminPanel/register";
import AdminDashboard from "../components/adminPanel/adminDashboard";
import AdminAddingGame from "../components/adminPanel/adminAddingGame";
import AdminRestAdding from "../components/adminPanel/restAddingGame";
import UserIndex from "../components/userpanel/userindex";
import UserInfo from "../components/userpanel/path/information";
import UserLogin from "../components/userpanel/userLogin";
import UserRegister from "../components/userpanel/userRegister";
import WhishList from "../components/userpanel/whishlist";
import ShopPanel from "../components/userpanel/shopPanel";
import addToCart from "../components/userpanel/addToCart";
import myOrders from "../components/userpanel/myorders";
import NotFoundPage from "../components/userpanel/NotFoundPage";
import MyOrderList from "../components/userpanel/MyOrderList";
import store from "../vuex";

const routes = [
    // {
    //     name: "admindashboard",
    //     path: "/admin/home",
    //     component: AdminDashboard,
    //      beforeEnter:(to,from,next)=>{
    //          if(!store.getters.adminData)
    //          {
    //           next('/admin/login');
    //          }else{
    //              next();
    //          }
    //      }
    // },
    {
        name: "AdminSubAdding",
        path: "/admin/sub",
        component: AdminSubAdding,
    },
    {
        name: "Login",
        path: "/admin/login",
        component: AdminLogin,
        beforeEnter: (to, from, next) => {
            if (!store.getters.adminData) {
                next();
            } else {
                next("/admin/dashboard");
            }
        },
    },
    {
        name: "Register",
        path: "/admin/register",
        component: AdminRegister,
        beforeEnter: (to, from, next) => {
            if (!store.getters.adminData) {
                next();
            } else {
                next("/admin/dashboard");
            }
        },
    },
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        component: AdminDashboard,
    },
    {
        name: "Adding Games",
        path: "/admin/addgame",
        component: AdminAddingGame,
    },
    {
        name: "Rest Adding",
        path: "/admin/addgame/restadd/:id",
        component: AdminRestAdding,
    },
    // User
    {
        name: "User Panel",
        path: "/",
        redirect: "/user/index",
        component: UserIndex,
    },
    {
        name: "User Index",
        path: "/user/index",
        component: UserIndex,
    },
    {
        name: "User information",
        path: "/user/index/info/:id",
        component: UserInfo,
    },
    {
        name: "UserLogin",
        path: "/user/login",
        component: UserLogin,
        beforeEnter: (to, from, next) => {
            if (store.getters.userData) {
                next("/user/index");
            } else {
                next();
            }
        },
    },
    {
        name: "UserRegister",
        path: "/user/register",
        component: UserRegister,
        beforeEnter: (to, from, next) => {
            if (store.getters.userData) {
                next("/user/index");
            } else {
                next();
            }
        },
    },
    {
        name: "WhishList",
        path: "/user/whishlist",
        component: WhishList,
        beforeEnter(to, from, next) {
            if (store.getters.userData) {
                next();
            } else {
                next("/user/login");
            }
        },
    },
    {
        name: "ShopPanel",
        path: "/user/shop/:platform",
        component: ShopPanel,
    },
    {
        name: "PS4paginate",
        path: "/user/shop/:platform/:current/:total",
        component: ShopPanel,
    },
    {
        name: "AddToCart",
        path: "/user/addtocart",
        component: addToCart,
        beforeEnter(to, from, next) {
            if (store.getters.userData) {
                next();
            } else {
                next("/user/login");
            }
        },
    },
    {
        name: "MyOrders",
        path: "/user/myorders",
        component: myOrders,
        beforeEnter(to, from, next) {
            if (store.getters.userData) {
                next();
            } else {
                next("/user/login");
            }
        },
    },
    {
        path: "*",
        name: "NotFoundPage",
        component: NotFoundPage,
    },
    {
        name: "MyOrderLists",
        path: "/user/myorderlists",
        component: MyOrderList,
    },
];
export default routes;
