import Vue from 'vue'
import HelloIndexPage from '@/components/HelloIndexPage'

describe('HelloIndexPage.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloIndexPage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      
  })
})
