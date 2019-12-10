<template>
    <div>
        <p>
            <input type="text" v-model="username" placeholder="用户名">
        </p>
        <p>
            <input type="password" v-model="password" placeholder="密码">
        </p>
        <p>
            <button v-on:clck="post">登录</button>
        </p>
        <p>
            <router-link to="/">返回注册界面</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name:'signup',
    data:function() {
        return {
            username:"",
            psw:""
        };
    },
    methods: {

    }
}
</script>