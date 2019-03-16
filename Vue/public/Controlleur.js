
Vue.component('days-item', {
    props: ['day'],
    template: '<li class="daysWeek">{{ day.text }}</li>',
  })


  Vue.component('nbdays-item', {
    props: ['nb'],
    template: `<li class="daysNb">{{ nb }}</li>`,
  })


  

var app = new Vue({
    el: '#fullDiv',
    data: {
      message: 'fuck',
      selectedM:(new Date()).getMonth(),
      selectedY:(new Date()).getFullYear(),
      test: '',
      Days: [
        { id: 0, text: 'Lundi' },
        { id: 1, text: 'Mardi' },
        { id: 2, text: 'Mercredi' },
        { id: 3, text: 'Jeudi' },
        { id: 4, text: 'Vendredi' },
        { id: 5, text: 'Samedi' },
        { id: 6, text: 'Dimanche' }
      ],
      Month:[
          { id : 0, text: 'Janvier'},
          { id : 1, text: 'Fevrier'},
          { id : 2, text: 'Mars'},
          { id : 3, text: 'Avril'},
          { id : 4, text: 'Mai'},
          { id : 5, text: 'Juin'},
          { id : 6, text: 'Juillet'},
          { id : 7, text: 'Aout'},
          { id : 8, text: 'Septembre'},
          { id : 9, text: 'Octobre'},
          { id : 10, text: 'Novembre'},
          { id : 11, text: 'Decembre'},
      ],
      Years:[
          {id : 2018, text:"2018"},
          {id : 2017, text:"2017"},
          {id : 2016, text:"2016"},
          {id : 2015, text:"2015"},
          {id : 2014, text:"2014"},
          {id : 2013, text:"2013"},
      ]
    },
  
    computed: {
        nbDays: (app)=>{
            var ok = new Date(app.selectedY,app.selectedM);
            var day1 = ok.getDay();
            let nbdays = getDaysInMonth(app.selectedM,app.selectedY)
            
       

            let arr = []
            for (let j = 1; j < day1; j++) {
                arr.push('')}
                
            for (let index = 1; index <= nbdays; index++) {
                arr.push(index)
            }
            return arr
        }
   

    }
   
})





// functions
// function liStyle(){
//     var winHeight = $(window).height();
//     var height = ( winHeight * 16.6666 ) / 100;
//     var lineHeight = height + "px";

//     $(".daysNb").css("line-height", lineHeight);
//     $("daysNb").css("height", height);
// }


function getDaysInMonth(month,year) {

   return new Date(year, month+1, 0).getDate();
  
  };

