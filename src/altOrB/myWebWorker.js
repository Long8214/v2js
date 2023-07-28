self.onmessage = function(val){
    console.log('主线程传递的信息 : ' + val.data)
    // 给主线程发送消息
    self.postMessage(1000)
}   