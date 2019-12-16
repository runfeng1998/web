<template>
    <div>
        <p>
            <input type="text" v-model="username" placeholder="用户名">
        </p>
        <p>
            <input type="password" v-model="password" placeholder="密码">
        </p>
        <p>
            <button v-on:click="post()">登录</button>
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
            password:""
        };
    },
    methods: { 
        post: function() {
            console.log(this.username);
            console.log(this.password);
            this.$http.post("http://localhost:3333/register",
                {
                    username:this.username,
                    password:this.password
                },
                {
                    withCredentials:true
                }
            )
            .then(
                res => {
                    if (res.ok) {
                        console.log(res);
                        if (res.data=="create a account\n") {
                            this.$router.push({path:'/'});
                        }
                        else {
                            alert("error"+res.data);
                        }
                    }
                },
                err => {
                    alert("error"+err);
                }
            )

        }
    }
}
</script>