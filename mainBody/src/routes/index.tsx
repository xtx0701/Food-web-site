import { Navigate } from 'react-router-dom'

import Portal from '../containers/Portal'
import Recipe from '../containers/Recipe'
import Subject from '../containers/Subject'
import Notes from '../containers/Notes'
// =
import Detail from '../containers/Notes/Detail'
import NoteContent from '../containers/Notes/NoteContent'
import SubjectContent from '../containers/Subject/SubjectContent'
// import CommunityContent from '../containers/Community/CommunityContent'
import RecipeDetail from '../containers/Recipe/RecipeDetail'
import RecipeContent from '../containers/Recipe/RecipeContent'
import Login from '../containers/Login'
import UserLogin from '../containers/Login/UserLogin'
import UserRegistered from '../containers/Login/UserRegistered'
import UserRelease from '../containers/UserRelease'
import SubjectDetail from '../containers/Subject/SubjectDetail'
// import CommunityDetail from '../containers/Community/CommunityDetail'
const element = [
    {
        path: 'userrelease',
        element: <UserRelease />
    },
    {
        path: '/login',
        element: <Login />,
        children: [
            {
                path: 'userlogin',
                element: <UserLogin />
            },
            {
                path: 'userregistered',
                element: <UserRegistered />
            },
            {
                path: '',
                element: <Navigate to='userlogin' />
            },
        ]
    },
    {
        path: '/portal',
        element: <Portal />
    },
    {
        path: '/recipe',
        element: <Recipe />,
        children: [
            {
                path: 'recipecontent',
                element: <RecipeContent />
            },
            {
                path: 'recipedetail',
                element: <RecipeDetail />
            },
            {
                path: '',
                element: <Navigate to='recipecontent' />
            }
        ]
    },
    {
        path: '/subject',
        element: <Subject />,
        children: [
            {
                path: 'subjectcontent',
                element: <SubjectContent />
            },
            {
                path: 'subjectdetail',
                element: <SubjectDetail />
            },
            {
                path: '',
                element: <Navigate to='subjectcontent' />
            }
        ]
    },
    {
        path: '/notes',
        element: <Notes />,
        children: [
            {
                path: 'notecontent',
                element: <NoteContent />
            },
            {
                path: 'detail',
                element: <Detail />
            },
            {
                path: '',
                element: <Navigate to='notecontent' />
            },
        ]
    },
    {
        path: '/',
        element: <Navigate to='/portal' />
    }
]

export default element