import Home from './components/pages/Home'
import WhoOwnsItem from './components/pages/WhoOwnsItem'

const routes = {
  home: {
    path: '/',
    title: 'Home',
    next: 'who-owns-item',
    component: Home
  },

  'who-owns-item': {
    path: '/who-owns-item-xxx',
    title: 'Who owns the item?',
    next: 'home',
    component: WhoOwnsItem
  }
}

export default routes