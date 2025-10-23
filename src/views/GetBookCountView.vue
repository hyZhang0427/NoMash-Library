<template>
    <div id="app">
        <h1>Book Counter</h1>
        <button @click="GetBookCount">Get Book Count</button>
        <p v-if="bookCount !== null">Total Books: {{ count }}</p>
        <p v-if="error" style="color: red;">Error: {{ error }}</p>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                count: null,
                error: null
            };
        },
        methods: {
            async GetBookCount() {
                try {
                    const response = await axios.get('https://countbooks-zqg6u6hwra-uc.a.run.app');
                    this.count = response.data.count;
                    this.error = null; // Clear any previous errors
                } catch (error) {
                    this.error = 'Failed to fetch book count. Please try again later.';
                    console.error(error);
                }
            }
        }
    };
</script>