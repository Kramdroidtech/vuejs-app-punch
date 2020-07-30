var win = document.querySelector('#win');
var punched = document.querySelector('#punched');

alert('Under Development');
alert("Credits To The Net Ninja PNG My Own Features •Sound Effects •TheWayOfPunch");

new Vue({
  el:'#container',
  data:{
    health:100,
    ended:false,
    
  },
  methods:{
    punch:function(){
      this.health -= 20;
      punched.play();
      if(this.health <= 0){
        this.ended = true;
        win.play();
      }
    },
    restart:function(){
      this.health = 100;
      this.ended = false;
      win.pause();
      punched.pause();
    }
  }
})