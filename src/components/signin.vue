<template>
    <div>
        <p>
            <input type="text" v-model="username" placeholder="用户名">
        </p>
        <p>
            <input type="password" v-model="password" placeholder="密码">
        </p>
        <p>
            <button v-on:clck="post">注册</button>
        </p>
        <p>
            <a href="#/search">以游客方式登录</a>
        </p>
        <p>
            <router-link to="/signup">登录</router-link>
        </p>
    </div>
</template>


<script>
export default {
    name:'signin',
    data:function() {
        return {
            username:"",
            password:""
        };
    },
    methods: {
        
    }
}
</script>