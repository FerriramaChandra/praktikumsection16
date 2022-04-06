import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as FcIcons from "react-icons/fc"

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: "About",
        path: "/AboutApp",
        icon: <FcIcons.FcAbout/>,
        cName: 'nav-text'
    },
    {
        title: "About Author",
        path: "/AboutAuthor",
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },

]