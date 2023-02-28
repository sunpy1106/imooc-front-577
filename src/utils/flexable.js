import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from "@/constants"
import { useWindowSize } from '@vueuse/core'

const {width} = useWindowSize()
/*
判断当前是否是移动设备
判断依据： 当前屏幕宽度是否小于指定宽度（1280）
*/


export const isMobileTerminal = computed(() => {
    console.log("the width:" + width.value)
    return width.value < PC_DEVICE_WIDTH;
})

/*
动态指定REM基准值
根据用户的屏幕宽度进行计算，将计算出来的值赋值给html根标签作为fontsize的大小
*/

export const useREM = () =>{
    const MAX_FONT_SIZE = 40
    document.addEventListener('DOMContentLoaded',()=>{
        //拿到HTML标签
        const html = document.querySelector('html')
        //计算fontsize,根据屏幕宽度/10
        let fontsize = window.innerWidth / 10
        fontsize = fontsize < MAX_FONT_SIZE ? fontsize:MAX_FONT_SIZE
        //赋值给html
        html.style.fontSize = fontsize +'px';
    })
}