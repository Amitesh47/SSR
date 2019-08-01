import React from 'react'
import HomePage from './pages/HomePage'
import App from './App'
import UsersListPage from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'
import AdminsListPage from './pages/AdminsListPage'

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...AdminsListPage,
                path:'/admins'
            },
            {
                ...UsersListPage,
                path: '/users'
            
            },
            {
                ...NotFoundPage
            }

        ]
    }
]

