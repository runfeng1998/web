<template>
    <div>
        <div>
            <p>
                <router-link to='/'>注册</router-link>
            </p>
            <p>
                <router-link to='/signup'>登录</router-link>
            </p>
        </div>
        <div>
            <input placeholder="搜索" v-model="search_content">
            <button @click="get()">搜索</button>
        </div>
        <div id="result">
            <textarea v-model="search_result" rows="20" cols="60"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name:'search',
    data:function() {
        return {
            search_content:"",
            search_result:""
        };
    },
    methods: {
        get: function() {
            let flag= /^([a-z]{1,10}((\/[0-9]*)|(\/\?page\=\d)))?$/.test(this.search_content);
            if (!flag) {
                alert("input error");
                return;
            }
            this.$http.get("http://localhost:3333/api/"+this.search_content).then(
                function(res) {
                    if (res.ok) {
                        this.search_result=JSON.stringify(res.data, null, 4);
                    }
                },
                function(err) {
                    alert("server error"+err);
                }
            )
        }
    }
}
</script>