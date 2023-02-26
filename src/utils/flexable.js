import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from "@/constants"
import { useWindowSize } from '@vueuse/core'

const {width} = useWindowSize()
/*
判断当前是否是移动设备
判断依据： 当前屏幕宽度是否小于指定宽度（1280）
*/


export const isMobileTerminal = computed(() => {
    console.log("the width:" + width)
    return width.value < PC_DEVICE_WIDTH;
})