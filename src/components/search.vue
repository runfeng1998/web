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
    }
}
</script>