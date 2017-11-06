<template>
  <div class="wrapper">
    <text class="desc">我是国际化文件aca</text>
    <text class="desc" style="background-color: #3cc;font-size: 60px;" @click="test">click me</text>
    <text class="desc" style="background-color: #9cc;font-size: 60px;" >{{intl["app.global.hello"]}}</text>

    <!-- <text class="desc">{{zh_cn[0]["app.global.title"]}}</text> -->
  </div>
</template>


<script>
const modal = weex.requireModule('modal')
const storage = weex.requireModule('storage')
import zh_cn from './locales/zh_CN.js'
import en_us from './locales/en_US.js'

const OBJ_LANGUAGE = {
    "zh": zh_cn,
    "en": en_us,
}
  export default {
    data() {
        return {
            intl: {}
        }
    },
    created() {
        this.setMessages()
    },
    methods: {
        setLanguage() {

        },
        /**
         * @return {String} 语言
         */
        getLanguage() {
            return 'en'
        },
        setMessages() {
            const lang = this.getLanguage()
            const messagesObj = {}
            OBJ_LANGUAGE[lang].forEach(item => messagesObj[item.id] = item.defaultMessage)
            this.intl = messagesObj
        }
    }
  }
</script>