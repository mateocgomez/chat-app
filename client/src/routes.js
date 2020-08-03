import React from 'react'


const Chat = React.lazy(() => import('./views/chat/Chat'))
const Join = React.lazy(() => import('./views/chat/Join'))
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Join', component: Join },
  { path: '/chat', name: 'Chat', component: Chat },
]

export default routes
