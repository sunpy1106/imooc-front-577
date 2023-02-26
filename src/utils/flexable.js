import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from "../constants"

/*
判断当前是否是移动设备
判断依据： 当前屏幕宽度是否小于指定宽度（1280）
*/


export const isMobileTerminal = computed(() => {
    console.log("the width:" + document.documentElement.clientWidth)
    return document.documentElement.clientWidth < PC_DEVICE_WIDTH;
})