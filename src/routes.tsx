import Home from './components/pages/Home'
import WhoOwnsItem from './components/pages/WhoOwnsItem'
import Feedback from './components/pages/Feedback'
import ItemType from './components/pages/ItemType'
import ManualAddress from './components/pages/ManualAddress'

const routes = {
  home: {
    path: '/',
    title: 'Home',
    next: 'item-type',
    component: Home
  },

  'item-type': {
    path: '/item-type',
    title: 'What type of item is it?',
    next: 'who-owns-item',
    component: ItemType
  },

  'who-owns-item': {
    path: '/who-owns-item',
    title: 'Who owns the item?',
    next: 'manual-address',
    component: WhoOwnsItem
  },

  'manual-address': {
    path: '/manual-address',
    title: 'What is your address?',
    next: 'home',
    component: ManualAddress
  },

  'feedback': {
    path: '/feedback',
    title: 'Please give us feedback',
    component: Feedback
  }
}

export default routes