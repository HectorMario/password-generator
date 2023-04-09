const { createApp } = Vue

createApp({
  data() {
    return {
      limit: 0,
      repeat: false,
      inputLet: false,
      inputNum: false,
      inputSim: false,
      lettere: "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
      numeri: "1234567890",
      simboli: "/*?=)(/&%$#!",
      password: ''
    }
  },
  methods: {
    yesorno(){
        this.repeat = !this.repeat
    },
    change(){
        lette = this.$refs.let
        num = this.$refs.num
        sim = this.$refs.sim
        if(lette.checked)  {
            this.inputLet = true
        } else{
            this.inputLet = false
        }
        if(num.checked)  {
            this.inputNum = true
        }else{
            this.inputNum = false
        }
        if(sim.checked)  {
            this.inputSim = true
        }else{
            this.inputSim = false
        }
    },
    generate(){
        password = "";
        if(!this.limit == 0){
            if(this.inputLet == true || this.inputNum == true || this.inputSim == true){
                if(this.repeat){
                    for (let i = 0; i < this.limit; i++ ){
                       if(password.length < this.limit){
                           if(this.inputLet){
                               random = Math.ceil(Math.random()*this.lettere.length - 1)
                               password += this.lettere[random]  
                           }
                           if(this.inputNum){
                               random = Math.ceil(Math.random()*this.numeri.length - 1)
                               password += this.numeri[random]  
                           }
                           if(this.inputSim){
                               random = Math.ceil(Math.random()*this.simboli.length - 1)
                               password += this.simboli[random]  
                           }
                       }
                    }
                }else{
                   for (let i = 0; i < this.limit; i++ ){
                           if(this.inputLet){
                               random = Math.ceil(Math.random()*this.lettere.length - 1)
                               if(!password.includes(this.lettere[random]) && password.length <= this.limit){
                                   password += this.lettere[random]  
                               } 
                           }
                           if(this.inputNum){
                               random = Math.ceil(Math.random()*this.numeri.length - 1)
                               if(!password.includes(this.numeri[random])&& password.length <= this.limit){
                                   password += this.numeri[random]  
                               }  
                           }
                           if(this.inputSim){
                               random = Math.ceil(Math.random()*this.simboli.length - 1)
                               if(!password.includes(this.simboli[random]) && password.length <= this.limit){
                                   password += this.simboli[random]  
                               }   
                           }
                    }
                }
                console.log(password);
            }
            else{
                alert("mettere caratteri")
            }
           
        } else{
            alert("metti la lunghezza ")
        }
         this.password = password
     }
    }

  

}).mount('#app')