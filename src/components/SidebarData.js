import React from 'react';
import * as AiIcons from "react-icons/ai";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Staff',
        path: '/staff',
        icon: <AiIcons.AiFillContacts />,
        cName: 'nav-text'
    },
    {
        title: 'Public Announcements',
        path: '/publicannouncements',
        icon: <AiIcons.AiFillAlert />,
        cName: 'nav-text'
    },
    {
        title: 'Report A Crime',
        path: '/reportacrime',
        icon: <AiIcons.AiFillEye />,
        cName: 'nav-text'
    }
]