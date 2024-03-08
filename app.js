var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    todos: [],
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // Make a GET request to fetch todos data
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => {
          // Assign the fetched data to the todos array
          this.todos = data;
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    },
  },
});
