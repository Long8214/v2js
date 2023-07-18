<template>
<div>
    <el-input  v-model="password"  @input="reqTest()"  placeholder="请输入密码"></el-input>
    <div>输入的密码 : {{ password }}</div>
    <div>加密后的密码 : {{ rsaPassword }}</div>
    <div>解密后的密码 : {{ encPassword }}</div>
</div>
</template>

<script>
import Rsa from "../utils/rsa";
export default {
    name:'rsaEncryption',
    data(){
        return{
            password: "", //密码
            rsaPassword: "", //加密后的密码
            encPassword: "", //解密后的密码
        }
    },
    methods: {
        reqTest() {
            this.rsaPassword = Rsa.encrypt(this.password); // 加密
            this.encPassword = Rsa.decrypt(this.rsaPassword); // 解密
        }
    },

}

</script>

<style scoped lang="less">


</style>