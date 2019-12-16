<template>
    <div>
        <p>
            <input type="text" v-model="username" placeholder="用户名">
        </p>
        <p>
            <input type="password" v-model="password" placeholder="密码">
        </p>
        <p>
            <button v-on:click="post()">注册1</button>
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
        post:function() {
            // alert("yoyo");
            console.log(this.username);
            console.log(this.password);
            this.$http.post("http://localhost:3333/login",
                {
                    username:this.username,
                    password:this.password
                },
                {
                    withCredentials:true
                }
            )
            .then(
                function(res) {
                    if (res.ok) {
                        let str_content=JSON.stringify(res.data); 
                        let json_content=JSON.parse(str_content); 
                        $cookies.set("LogInUser", json_content["token"]);
                        this.$router.push({path:"/search"});
                    }
                    else {
                        alert("something error in result!");
                    }
                },
                function(err) {
                    alert("error in back-end:"+err);
                }
            );
        },

        guessMode: function() {
            $cookies.set("LogInUser", "guest");
        }
    }
}
</script>