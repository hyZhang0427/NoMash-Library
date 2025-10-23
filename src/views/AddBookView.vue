<template>
    <div>
        <h1>Add a Book</h1>
        <form @submit.prevent="addBook">
            <div>
                <label for="isbn">ISBN:</label>
                <input type="text" id="isbn" v-model="isbn" required />
            </div>
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" required />
            </div>
            <button type="submit">Add Book</button>
        </form>
        <Booklist />
    </div> 
</template>

<script>
import { ref } from 'vue';
import { db } from '../Firebase/init.js'; // Adjust the path as necessary
import { collection, addDoc } from "firebase/firestore";

import Booklist from '@/components/Booklist.vue';

export default {
    name: 'AddBookView',
    setup() {
        const isbn = ref('');
        const name = ref('');

        const addBook = async () => {
            try {
                const isbnNumber = Number(isbn.value);
                if (isNaN(isbnNumber)) {
                    alert('ISBN must be a number.');
                    return;
                }   

                await addDoc(collection(db, "books"), {
                    isbn: isbnNumber,
                    name: name.value
                });
                alert('Book added successfully!');
                isbn.value = '';
                name.value = '';
            } catch (e) {
                console.error("Error adding document: ", e);
                alert('Failed to add book.');
            }
        };

        return {
            isbn,
            name,
            addBook
        };
    },
    components: {
        Booklist
    }
};
</script>