<template>
    <div class="demo">
        {{ info }}
    </div>
</template>

<script>
    const axios = require("axios");
    axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
    export default {
        data() {
            return {
                info: null
            };
        },
        mounted() {
            axios.get("/greeting").then(response => (this.info = response.data));
        }
    };
</script>
