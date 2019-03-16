var source = new EventSource('http://localhost:3000/movies');



{
  Vue.component('todo-item', {
    props: ['item'],
    template: `
      <li class="item" ><h3>{{ item.title }}</h3></li>
    `,
  })

  const vm = new Vue({
    el: '#app',
    created:function(){
      fetch('http://localhost:3000/movies')
      .then((res) =>{
        return res.json()
      })
      .then( (myJson) =>{
        console.log(myJson)
        myJson.forEach(element => {
          this.items.push(element)
        });
      })
      .catch(err =>{
        console.log(err)
      
        
      })
    }
    ,
    data: {
      taskInput:'',
      items: [],
      title: 'TOUT DOUX',
      
    },
    computed: {
      count: function() {
        return this.items.length
      },
    },
    methods: {
      update:function(){

        fetch("http://localhost:3000/movies",
        {
        headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(this.items)
        })
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })
      },
      
      add: function() {
        const index = this.items.length

        this.items.push({
          "_id": (index+1).toString(), "task": this.taskInput, "edit": false
        })

          fetch("http://localhost:3000/movies",
          {
          headers: {
          // 'Accept': 'application/json',
          'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(this.items)
          })
          .then(function(res){ console.log(res) })
          .catch(function(res){ console.log(res) })


      },
      del: function (arg){
        console.log('args', arg, 'items' , this.items[0]._id)

        fetch("http://localhost:3000/movies",
          {
          headers: {
          // 'Accept': 'application/json',
          'Content-Type': 'application/json'
          },
          method: "DELETE",
          body: JSON.stringify(this.items)
          })
          .then(function(res){ console.log(res) })
          .catch(function(res){ console.log(res) })
       

      }
    },
  })
}
// FIN VUE





