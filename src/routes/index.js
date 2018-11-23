import Home from '../pages/Home'
import Category from '../pages/Category'
import Article from '../pages/Article'
import Editor from '../pages/Editor'
import SignIn from '../pages/SignIn'
import Profile from '../pages/Profile'

const routes = [
  {
    path: '/',
    exact: true,
    activeClassName: "active",
    component: Home
  },
  {
    path: '/category',
    exact: true,
    component: Category
  },
  {
    path: '/blog/:id',
    exact: true,
    component: Article
  },
  {
    path: '/editor',
    exact: true,
    component: Editor
  },
  {
    path: '/signin',
    exact: true,
    component: SignIn
  },
  {
    path: '/profile/:id',
    exact: true,
    component: Profile
  },{
    path: '/tag/:id',
    exact: true,
    component: Category
  }
]

export default routes