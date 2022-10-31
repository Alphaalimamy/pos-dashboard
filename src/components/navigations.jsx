import * as FiIcons from "react-icons/hi"
export const NavLinks = [
    {
        key: "dashboard",
        lable: "Dashboard",
        path: "/",
        icon: <FiIcons.HiOutlineViewGrid />
    },

    {
        key: "products",
        lable: "Products",
        path: "/product",
        icon: <FiIcons.HiOutlineCube />
    },
    {
        key: "customer",
        lable: "Customers",
        path: "/customer",
        icon: <FiIcons.HiUserCircle />
    },


    {
        key: "orders",
        lable: "Orders",
        path: "/order",
        icon: <FiIcons.HiOutlineShoppingCart />
    },
  
    {
        key: "transactions",
        lable: "Transactions",
        path: "/transaction",
        icon: <FiIcons.HiOutlineDocument />
    },
    
    {
        key: "message",
        lable: "Messages",
        path: "/message",
        icon: <FiIcons.HiOutlineAnnotation />
    }
]

export const DashboardLinks = [
    {
        key: "settings",
        lable: "Settings",
        path: "/setting",
        icon: <FiIcons.HiOutlineCog />
    },
    {
        key: "support",
        lable: "Support",
        path: "/support",
        icon: <FiIcons.HiOutlineQuestionMarkCircle />
    }
]