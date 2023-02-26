import { createRouter,createWebHistory} from 'vue-router'

import { isMobileTerminal } from '../utils/flexable'

import mobileRouters  from './modules/mobile-routers'

import pcRouters from './modules/pc-routers'

//创建vue-router实例
const router=createRouter(
    {
        history:createWebHistory(),
        routes: isMobileTerminal.value ? mobileRouters:pcRouters
    }
)

export default router