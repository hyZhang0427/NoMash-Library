<template>
  <div class="booklist">
    <h2>Book with ISBN > 1000</h2>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.name }} - ISBN: {{ book.isbn }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { db } from '../Firebase/init.js'; // Adjust the path as necessary
import { collection, query, where, getDocs } from "firebase/firestore";

export default {
  setup() {
    const books = ref([]);

    const fetchBooks = async () => {
        try {
            const q = query(collection(db, "books"), where("isbn", ">", 1000));
            const querySnapshot = await getDocs(q);
            const bookArray = [];
            querySnapshot.forEach((doc) => {
                bookArray.push({ id: doc.id, ...doc.data() });
            });
            books.value = bookArray;
        } catch (e) {
            console.error("Error fetching documents: ", e);
        };
    };

    onMounted(() => {
      fetchBooks();
    });

    return {
      books
    };
  } 
};  
</script>