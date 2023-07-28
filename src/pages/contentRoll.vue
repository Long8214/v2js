<template>
    <div>
      <div class="notice" ref="container">
        <p ref="notice">{{notice}}</p>
      </div>
    </div>
    </template>
    <script>
    import { throttle } from '../utils'
    export default {
      data () {
        return {
          defaultTxt: '测试环境用于测试测试环境用于测试测试环境用于测试测试环境用于...',
          notice: ''
        }
      },
      mounted () {
        this.getStyle()
        window.addEventListener('resize', throttle(this.getStyle, 1000, true))
      },
      methods: {
        getStyle () {
          this.notice = this.defaultTxt
          this.$nextTick(() => {
            let containerW = this.$refs.container.clientWidth
            let noticeW = this.$refs.notice.clientWidth
            console.log(containerW, noticeW)
            if (noticeW > containerW) {
              this.notice = this.defaultTxt + this.defaultTxt
              this.$refs.notice.className = 'run'
              this.$refs.notice.style.animationDuration = noticeW / 50 + 's' // 匀速
            } else {
              this.notice = this.defaultTxt
              this.$refs.notice.className = ''
              this.$refs.notice.style.animationDuration = 0
            }
          })
        }
      },
      destroyed () {
        window.onresize = null
      }
    }
    </script>
    <style lang="scss" scoped>
    .notice {
      position: relative;
      width: 100px;
      overflow: hidden;
      height: 30px;
      line-height: 30px;
      background: rgb(247, 225, 225);
      color: #666;
      @keyframes run {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
      p {
        position: absolute;
        top: 0;
        left: 0;
        white-space: nowrap;
      }
      .run {
        animation: 1s run linear infinite;
      }
    }
    </style>
    