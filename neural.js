let np = require("./numpy");

function normal(inpute,hidden,outpute) {
  let weight=np(inpute).ones(hidden);
  let weight1=np(hidden).ones(outpute);
  let bais=np(1).zeros(hidden)
  let bais1=np(1).zeros(outpute)
  return{
    forwards:function(x){
      let one=np(x).dot(weight)
      this.first=np(one).biadd(bais)
      let two=np(this.first).dot(weight1)
      this.second=np(two).biadd(bais1)
    },
    backward:function(x,y,learn=0.1,change=1){
      let tran=np(weight1).T()
      let tran1=np(this.first).T()
      let tran2=np(x).T()
      
      let loss=np(y).S(this.second);
      let loss1;
      if (change==1) {
        loss1=np(loss).dot(tran);
      }else{
        loss1=np(loss).dots(tran);
      }
  
      this.amount=loss;
      
      bais1=np(loss).base(bais1,learn)
      bais=np(loss1).base(bais,learn)
      
      weight1_one=np(tran1).dot(loss)
      weight1_two=np(weight1_one).M(learn)
      weight1=np(weight1_two).A(weight1)
      
      weight_one=np(tran2).dot(loss1)
      weight_two=np(weight_one).M(learn)
      weight=np(weight_two).A(weight)
    
    },
    train:function(x,y,epoch,learn,change,loss){
      for (let i = 0; i < epoch; i++) {
        this.forwards(x);
        this.backward(x,y,learn,change)
        if (i%100==0 && loss!=undefined) {
          console.log(i,"percent",np(this.amount).mean())
        }
      }
    },
    predict:function(x){
      let one=np(x).dot(weight)
      firsts=np(one).biadd(bais)
      let two=np(firsts).dot(weight1)
      seconds=np(two).biadd(bais1)
      return seconds
    
    }
  }
}
function neural(inputes,hidden,outputes,range) {
  let weight=np(inputes).ones(hidden);
  let bais=np(1).ones(hidden)
  let weight1=np(hidden).ones(outputes)
  let bais1=np(1).ones(outputes)
  return {
    forward:function(x){
      let one=np(x).dot(weight)
      this.data=np(np(one).biadd(bais)).churas(range[0])
      let two=np(one).dot(weight1)
      this.data1=np(np(two).biadd(bais1)).churas(range[0])
      return this.data1
    },
    backward:function(x,y,learn){
      let tran=np(x).T()
      let tran0=np(this.data).T()
      let tran1=np(weight1).T()
      
      let loss=np(y).S(this.data1)
      let loss1=np(loss).dots(tran1)
      this.amount=loss;
      
      bais=np(loss1).base(bais.learn)
      bais1=np(loss).base(bais1,learn)
      
      let result=np(tran).dot(loss1)
      let result_out=np(result).M(learn)
      let result1=np(tran0).dot(loss)
      let result_out1=np(result1).M(learn)
      
      weight=np(weight).A(result_out)
      weight1=np(weight1).A(result_out1)
    },
    train:function(x,y,epoch,learn,loss){
      for (let i = 0; i < epoch; i++) {
        this.forward(x)
        this.backward(x,y,learn)
         if (i%100==0 && loss=="loss") {
          console.log(i,"percent",np(this.amount).mean())
        }
      }
    },
    predict:function(x){
       return this.forward(x)
     }
  }
}
module.exports={neural,normal,np}