import { Navigate } from 'react-router-dom'

import Login from '../containers/Login';
import Main from '../containers/Main';
import Community from '../containers/Main/ManagementCommunity'
import Notes from '../containers/Main/ManagementNotes'
import Dishes from '../containers/Main/ManagementDishes'
import ReleaseDishes from '../containers/Main/ManagementDishes/ReleaseDishes';
import DishesContent from '../containers/Main/ManagementDishes/DishesContent'
const elemrnt = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/main',
        element: <Main />,
        children: [
            {
                path: 'community',
                element: <Community />
            },
            {
                path: 'notes',
                element: <Notes />
            },
            {
                path: 'dishes',
                element: <Dishes />,
                children: [
                    {
                        path: 'releasedishes',
                        element: <ReleaseDishes />
                    },
                    {
                        path: 'dishescontent',
                        element: <DishesContent />
                    },
                    {
                        path: '',
                        element: <Navigate to='dishescontent' />
                    }
                ]
            },
            {
                path: '',
                element: <Navigate to='notes' />
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to='login' />
    }
];

export default elemrnt;