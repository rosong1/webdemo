<template>
  <div class="wrapper" @click="update">
    <image :src="logoUrl" class="logo"></image>
    <text class="desc" @click="jump('A')">跳到A</text>
    <text class="desc" @click="jump('B')">跳到B</text>
    <text class="desc" @click="jump('C')">跳到C</text>
    <text class="desc" @click="jump('Home')">跳到HOME</text>
    <text class="desc" @click="jump('i18n')">跳到i18n</text>
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
  export default {
    data: {
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: 'World'
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      },
      jump(url) {
        console.log(weex.config.bundleUrl)
        modal.alert({
						message: weex.config.bundleUrl,
						okTitle:'立即查看ab'
        }, () => {
          navigator.push({
            url: `http://192.168.155.1:8081/${url}.weex.js`
          })
        })
      }
    }
  }
</script>