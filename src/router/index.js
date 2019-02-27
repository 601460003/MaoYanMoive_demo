import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/iheader.vue'
import searchpage from '../components/searchPage'
import inTheaters from '../components/inTheaters'
import moviesmsg from '../components/moviesMsg'
import  smallcomment from '../components/smallComment'
import starmsg from '../components/starMsg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/searchpage',
      name: 'searchpage',
      component: searchpage
    },
    {
      path: '/inTheaters',
      name: 'inTheaters',
      component: inTheaters
    },
    {
      path: '/movie/:id',
      name: 'moviesmsg',
      component: moviesmsg
    },
    {
      path: '/smallComment/:id',
      name: 'smallcomment',
      component: smallcomment
    },
    {
      path: '/starmsg',
      name: 'starmsg',
      component: starmsg
    }
  ]
})
