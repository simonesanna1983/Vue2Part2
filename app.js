var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    todos: [],
    photos: [],
    cats: [],
    isLoading: false
  },
  mounted() {
    let appData = this;
    appData.isLoading = true;

    this.fetchData();
  },
  methods: {
    
    fetchData() {
      let appData = this;
      // Make a GET request to fetch todos data
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => {
          // Assign the fetched data to the todos array
          this.todos = data.slice(0,5);          
          appData.isLoading = false;
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });

        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((data) => {
          this.photos = data.slice(0,5);          
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });     
           

        fetch('https://65eb385843ce164189338214.mockapi.io/photos')
        .then((response) => response.json())
        .then((data) => {
          this.cats = data;          
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });  

    },

    deleteTodo: function (id) {
      debugger;
      let appData = this;

      appData.todos = appData.todos.filter(x => x.id !== id);

    }
  },
});
