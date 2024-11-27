import './assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


createApp(App).use(router).mount('#app');

//Global Components
import BasketBtn from "./components/UI/BasketBtn.vue"
import GiftBtn from "./components/UI/GiftBtn.vue"
import DownloandBtn from "./components/UI/DownloandBtn.vue"
import ShopBtn from "./components/UI/ShopBtn.vue"
import OrderCBtn from "./components/UI/OrderCBtn.vue"
import FoodMBtn from "./components/UI/FoodMBtn.vue"
import DiscoverMBtn from "./components/UI/DiscoverMBtn.vue"
import OrderBtn from "./components/UI/OrderBtn.vue"
import SubscribeBtn from "./components/UI/SubscribeBtn.vue"

app.component('basket-btn', BasketBtn)
app.component('gift-btn', GiftBtn)
app.component('downloand-btn', DownloandBtn)
app.component('shop-btn', ShopBtn)
app.component('orderc-btn', OrderCBtn)
app.component('foodm-btn', FoodMBtn)
app.component('discoverm-btn', DiscoverMBtn)
app.component('order-btn', OrderBtn)
app.component('subscribe-btn', SubscribeBtn)

app.use(createPinia())
app.use(router)

app.mount('#app')
