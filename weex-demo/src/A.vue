<template>
  <div class="wrapper" @click="update">
    <text class="desc">{{intl["app.global.A"]}}</text>
  </div>
</template>

<style>
  .wrapper { align-items: center; margin-top: 120px; }
  .title { padding-top:40px; padding-bottom: 40px; font-size: 48px; }
  .logo { width: 360px; height: 156px; }
  .desc { padding-top: 20px; color:#888; font-size: 24px;}
</style>

<script>
  const browser = weex.requireModule('browser')
	const navigator = weex.requireModule('navigator')
	const storage = weex.requireModule('storage')
  const modal = weex.requireModule('modal')
  import i18n from './i18n/i18n.vue'
  export default {
    extends: i18n,
    data: {
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: 'World'
    },
    methods: {
      update: function (e) {
        modal.alert({
						message: weex.config.bundleUrl,
						okTitle:'立即查看ab'
        })
      }
    }
  }
</script>