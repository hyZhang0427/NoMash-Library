<template>
    <div id="app">
        <h1>Book Counter</h1>
        <button @click="GetBookCountAPI">Get Book Count</button>
        <p v-if="jsondata && jsondata.count !== undefined">
            Total Books: {{ jsondata.count }}
        </p>
        <p v-if="error" style="color: red;">Error: {{ error }}</p>
        <pre v-if="jsondata">
            {{ JSON.stringify(jsondata, null, 2) }}
        </pre>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {

        name: 'CountBookAPI',
        data() {
            return {
                jsondata: null,
                error: null
            };
        },
        mounted() {
            this.GetBookCountAPI();
        },
        methods: {
            async GetBookCountAPI() {
                try {
                    const response = await axios.get('https://countbooks-zqg6u6hwra-uc.a.run.app'); // Replace with your actual API endpoint
                    this.jsondata = response.data; // Adjust based on your API response structure
                    this.error = null;
                } catch (err) {
                    console.error('Error fetching book count:', err);
                    this.error = this.error;
                    this.count = null;
                }   
        }
    }
    };
</script>