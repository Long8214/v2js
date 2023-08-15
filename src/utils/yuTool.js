export default {
    // 将秒 处理为 时分秒格式 (例如 1217 --> 00:03:02)
    formateSec(secondTime) {
        if (!secondTime && secondTime !== 0) return ''
        // let secondTime = parseInt(second / 1000)
        // // var haomiao = parseInt(second % 1000)
        let min = 0 // 初始化分
        let h = 0 // 初始化小时
        let result = ''
        if (secondTime >= 60) { // 如果秒数大于60，将秒数转换成整数
            min = parseInt(secondTime / 60) // 获取分钟，除以60取整数，得到整数分钟
            secondTime = parseInt(secondTime % 60) // 获取秒数，秒数取佘，得到整数秒数
            if (min >= 60) { // 如果分钟大于60，将分钟转换成小时
                h = parseInt(min / 60) // 获取小时，获取分钟除以60，得到整数小时
                min = parseInt(min % 60) // 获取小时后取佘的分，获取分钟除以60取佘的分
            }
        }
        result = `${h.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${secondTime.toString().padStart(2, '0')}`
        return result
    },

    // 将节目时长处理为HH:MM:SS格式
    dealMin(value) {
        const hours = Math.floor(value / 3600);
        const minutes = Math.floor((value % 3600) / 60);
        const remainingSeconds = value % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    },

    // 将时间戳处理为日期
   parseTime(time) {
    const date = new Date(time)
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay(),
        ms: date.getMilliseconds()
    }

    return `${formatObj.y}-${formatObj.m.toString().padStart(2, '0')}-${formatObj.d.toString().padStart(2, '0')} ${formatObj.h.toString().padStart(2, '0')}:${formatObj.i.toString().padStart(2, '0')}:${formatObj.s.toString().padStart(2, '0')}.${formatObj.ms.toString().padStart(3, '0')}`
}
}
