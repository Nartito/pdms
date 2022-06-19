import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";


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
    ,
    {
        title: 'Car Accidents',
        path: '/caraccident',
        icon: <FaIcons.FaCarCrash />,
        cName: 'nav-text'
    }
    ,
    {
        title: 'Impounded Vehicles',
        path: '/impound',
        icon: <FaIcons.FaCarSide />,
        cName: 'nav-text'
    }
    ,
    {
        title: 'Parking Tickets',
        path: '/parkingticket',
        icon: <FaIcons.FaTicketAlt />,
        cName: 'nav-text'
    }
    ,
    {
        title: 'Non-Emergencies',
        path: '/nonemergency',
        icon: <FaIcons.FaTired />,
        cName: 'nav-text'
    }
    ,
    {
        title: 'Staff Duty',
        path: '/staffduty',
        icon: <FaIcons.FaTasks />,
        cName: 'nav-text'
    }
    ,
    {
        title: 'Prison Duty',
        path: '/prisonduty',
        icon: <FaIcons.FaCity />,
        cName: 'nav-text'
    }
    ,
    {
        title: 'Court Duty',
        path: '/courtduty',
        icon: <FaIcons.FaBalanceScaleLeft />,
        cName: 'nav-text'
    }
    ,
    {
        title: 'Convicted Felons',
        path: '/convictedfelon',
        icon: <FaIcons.FaUserSecret />,
        cName: 'nav-text'
    }
    ,
    {
        title: 'Investigations',
        path: '/investigation',
        icon: <FaIcons.FaSearch />,
        cName: 'nav-text'
    }
    ,
    {
        title: 'Evidence Room',
        path: '/evidenceroom',
        icon: <FaIcons.FaThumbtack />,
        cName: 'nav-text'
    }
    ,
    {
        title: 'Active Warrants',
        path: '/warrant',
        icon: <FaIcons.FaGavel />,
        cName: 'nav-text'
    },
    {
        title: 'Open Assignments',
        path: '/openassignment',
        icon: <FaIcons.FaBook />,
        cName: 'nav-text'
    }
]