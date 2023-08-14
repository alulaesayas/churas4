function np(array) {
  return {
    shape:function(){
      let x = array;
      if(x.length!=0){
      for (let i = 0; i < x.length; i++) {
        if (typeof(x[i])=="object") {
          if (typeof(x[i][0])=="object") {
              return 3
            }
        else{
            return 2
          }
      }else{
        return 1
          }
        }
      }
   else{
    return 0
     }
    },
    adds:function(items){
      if(typeof(items)=="object" && array.length!=1){
        if (array.length==items.length) {
          let result=[]
          for (let i = 0; i < array.length; i++) {
            result.push(array[i]+items[i])
          }
          return result;
        }
        else{
          console.error("you use different length arrays")
        }
      }
      else if(typeof(items)!="object"){
        let outputs=[]
        for (let i = 0; i < array.length; i++) {
          outputs.push(array[i]+items)
        }
        return outputs;
      }else{
        let result=[]
        if (array.length==1) {
          for (let i = 0; i < items.length; i++) {
            result.push(array[0]+items[i])
          }
        }
      else{
        result=np(array).adds(items)
        }
          return result
      }
    },
    biadd:function(f){
      
      let result=[];
      
      for (let i = 0; i < array.length; i++) {
        result.push([])
        result[i]=np(array[i]).adds(f[0])
        
      }
    
      return result
    }
    ,
    subs:function(items){
      if(typeof(items)=="object" && array.length!=1){
        if (array.length==items.length) {
          let result=[]
          for (let i = 0; i < array.length; i++) {
            result.push(array[i]-items[i])
          }
          return result;
        }
        else{
          console.error("you use different length arrays")
        }
      }
      else if(typeof(items)!="object"){
        let outputs=[]
        for (let i = 0; i < array.length; i++) {
          outputs.push(array[i]-items)
        }
        return outputs;
      }else{
        let result=[]
        if (array.length==1) {
          for (let i = 0; i < items.length; i++) {
            result.push(array[0]-items[i])
          }
        }
      else{
        result=np(array).subs(items)
        }
          return result
      }
    },
    mal:function(items){
      if(typeof(items)=="object" && array.length!=1){
        if (array.length==items.length) {
          let result=[]
          for (let i = 0; i < array.length; i++) {
            result.push(array[i]*items[i])
          }
          return result;
        }
        else{
          console.error("you use different length arrays")
        }
      }
      else if(typeof(items)!="object"){
        let outputs=[]
        for (let i = 0; i < array.length; i++) {
          outputs.push(array[i]*items)
        }
        return outputs;
      }else{
        let result=[]
        if (array.length==1) {
          for (let i = 0; i < items.length; i++) {
            result.push(array[0]*items[i])
          }
        }
      else{
        result=np(array).mal(items)
        }
          return result
      }
    },
    div:function(items){
      
      if(typeof(items)=="object" && array.length!=1){
        if (array.length==items.length) {
          let result=[]
          for (let i = 0; i < array.length; i++) {
            result.push(array[i]/items[i])
          }
          return result;
        }
        else{
          console.error("you use different length arrays")
        }
      }
      else if(typeof(items)!="object"){
        let outputs=[]
        for (let i = 0; i < array.length; i++) {
          outputs.push(array[i]/items)
        }
        return outputs;
      }else{
        let result=[]
        if (array.length==1) {
          for (let i = 0; i < items.length; i++) {
            result.push(array[0]/items[i])
          }
        }
      else{
        result=np(array).div(items)
        }
          return result
      }
    },
    rounds:function(num){
      if (np(array).shape()==2) {
      let result=[]
      if (num==undefined) {
        for (let i = 0; i < array.length; i++) {
          result.push([])
          for (let v = 0; v < array[i].length; v++) {
          result[i].push(Math.round(array[i][v]))
          }
        }
      }
      else{
        for (let i = 0; i < array.length; i++) {
          result.push([])
          for (let v = 0; v < array[i].length; v++) {
          result[i].push(Math.round(array[i][v]*num)/num)
          }
        }
      }
      return result
      }
      else{
        return np(array).round(num)
      }
    },
    round:function(num){
      let first=array.slice()
      if (num==undefined) {
        for (let i = 0; i < array.length; i++) {
          first[i]=Math.round(array[i])
        }
      }
      else{
        for (let i = 0; i < array.length; i++) {
          first[i]=Math.round(array[i]*num)/num
        }
      }
      return first
    },
    ones:function(f){
      let arr=[]
      if (f!=undefined) {
        for (let i = 0; i < array; i++) {
          let point=[]
          for (let v = 0; v < f; v++) {
            point.push(1.0)
          }
          arr.push(point)
        }
      }
      else{
        for (let i = 0; i < array; i++) {
          arr.push(1.0)
        }
      }
      return arr
    }
    ,
    zeros:function(f){
      let arr=[]
      if (f!=undefined) {
        for (let i = 0; i < array; i++) {
          let point=[]
          for (let v = 0; v < f; v++) {
            point.push(0)
          }
          arr.push(point)
        }
      }
      else{
        for (let i = 0; i < array; i++) {
          arr.push(0)
        }
      }
      return arr
    }
    ,
    random:function(f){
      let arr=[]
      if (f!=undefined) {
        for (let i = 0; i < array; i++) {
          let point=[]
          for (let v = 0; v < f; v++) {
            point.push(Math.random())
          }
          arr.push(point)
        }
      }
      else{
        for (let i = 0; i < array; i++) {
          arr.push(Math.random())
        }
      }
      return arr
    },
    prods:function(axis=1){
      if (np(array).shape()==2) {
      let x=array;
      if (axis==0) {
        x=np(array).T()
      }
      function maltiple(y){
          let count=1;
          for (let i = 0; i < y.length; i++) {
            count*=y[i]
          }
          return count
        }
      let result=x.slice()
      for (let i = 0; i < x.length; i++) {
        result[i]=[maltiple(x[i])]
        }
      return result
      }
      else{
        function maltiple(y){
          let count=1;
          for (let i = 0; i < y.length; i++) {
            count*=y[i]
          }
          return count
        }
      return [maltiple(array)]
      }
    }
    ,
    swap:function(a,b){
      if (a==undefined) {
        let copy=JSON.parse(JSON.stringify(array));
        for (let i = 0; i < array.length; i++) {
          let v=(array.length-1)-i
            array[i]=copy[v]
        }
      }
      else{
        [array[a],array[b]]=[array[b],array[a]]
      }
    }
    ,
    sum:function(axis=1){
      if (np(array).shape()==1) {
      let outputs=0;
      for (let i = 0; i < array.length; i++) {
        outputs+=array[i]
      }
      return [outputs]
      }
      else{
        let x=array;
        if (axis==0) {
          x=np(array).T()
        }
        let result=[];
        for (let i = 0; i < x.length; i++) {
          result.push([])
          result[i].push(np(x[i]).sum()[0])
        }
        return result
      }
    },
    base:function(f,rate){
      let count=[[]];
      let tran=np(array).T(); 
      for (let i = 0; i < tran.length; i++) {
        let out=np(tran[i]).sum()
        count[0].push(out[0])
      }
      if (f!=undefined && rate==undefined) {
        let result=np(count).A(f)
        return result
      }
      else if(f!=undefined && rate!=undefined){
        let result=np(count).A(f)
        let outputs=np(result).M(rate)
        return outputs
      }
      
      return count
    }
    ,
    mean:function(axis=1){
      if (np(array).shape()==2) {
      let count=0;
      let x=array;
      if (axis==0) {
        x=np(array).T()
      }
      for (let i = 0; i < x.length; i++) {
        if (x[i].length==1) {
            count+=x[i][0]
        }
        else{
          let side=np(x[i]).sum();
          count+=side[0]
        }
      }
      return [[count/x.length]]
      }
      else{
        first=np(array).sum()
        second=first[0]/array.length
        return second
      }
      },
    linear:function(outputs,num){
      let inputes=array;
      let results=[]
      if (num==0 || num==undefined) {
        for (let i = 0; i < inputes.length; i++) {
          let first=np(inputes[i]).div(inputes[i][0])
          let second=np(outputs[i]).div(inputes[i][0])
          let final=second[0]-first[1];
          results.push([final])
        }
      }
    
    else{
      for (let i = 0; i < inputes.length; i++) {
        let first=np(inputes[i]).div(inputes[i][1])
        let second=np(outputs[i]).div(inputes[i][1])
        let final=second[0]-first[0];
        results.push([final])
      }
    }
    return results
    },
    victor:function(outputs){
      let inputes=array;
      let result=[];
      for (let i = 0; i < inputes.length; i++) {
        if (i==inputes.length-1) {
          break
        }
        let data=[];
        for (let v = 0; v < inputes[i].length; v++) {
          if (i==inputes.length-1) {
            break
         }
          let one=np(inputes[0]).div(-inputes[0][v])
          let step_one=np(outputs[0]).div(-inputes[0][v])
          let two=np(one).mal(inputes[i+1][v])
          let step_two=np(step_one).mal(inputes[i+1][v])
          let three=np(two).adds(inputes[i+1])
          let step_three=np(step_two).adds(outputs[i+1])
          let point=1-v
          let end=np([three]).linear([step_three,point],point)
          data.push(end[0][0])
        }
      result.push(data)
      }
      this.rewrite(result)
    return result;
    },
    rewrite:function(items){
      let same = JSON.parse(JSON.stringify(items));
      for (let i = 0; i < items.length; i++) {
        for (let v = 0; v < items[i].length; v++) {
         let count = (items[i].length - 1) - v;
          items[i][v] = same[i][count];
        }
      }
    },
    matrix:function(s){
      let f=array;
      let result=[]
      let inputes=[]
      let outputs=[]
      for (let i = 0; i < f[0].length; i+=2) {
        for (let v = 0; v < f.length; v++) {
          if (f.length-1==v) {
          continue;
        }
        let divided=np(f[0]).div(-f[0][i])
        let min_one=np(s[0]).div(-f[0][i])
        let maltiple=np(divided).mal(f[v+1][i])
        let min_two=np(min_one).mal(f[v+1][i])
        let additon=np(maltiple).adds(f[v+1])
        let min_three=np(min_two).adds(s[v+1])
        additon.splice(i,1)
        inputes.push(additon)
        outputs.push(min_three)
        if (inputes.length==2) {
          result.splice(0,0,np(inputes).victor(outputs)[0])
          inputes=[]
          outputs=[]
        }
      }
    }
    function clear(item) {
      for (let i = 0; i < item.length; i++) {
        if (i==0) {
          continue
        }
        item[i].splice(0,1)
      }
    }
     clear(result)
     let final_result=[result.flatMap(item => item.concat())];
     return final_result;
      },
    T:function(){
      let inputes=array;
      let result=[]
      for (let i = 0; i < inputes[0].length; i++) {
        result.push([])
        for (let v = 0; v < inputes.length; v++) {
            result[i].push(inputes[v][i])
         }
      }
      return result
    },
    products:function(f){
      return np(np(array).mal(f)).sum()
    }
    ,
    dots:function(b){
      let tran=np(b).T(); 
      let result=[]
      for (let i = 0; i < array.length; i++) {
        result.push([])
        for (let v = 0; v < tran.length; v++) {
          let outputs=np(array[i]).div(tran[v])
          let final_outputs=np(outputs).sum()
          result[i].push(final_outputs[0])
        }
      }
      return result
    }
    ,
    dot:function(b){
      let a=array;
      let outputs=[]
      let tran=np(b).T() 
      for (let i = 0; i < a.length; i++) {
        outputs.push([])
        for (let v = 0; v < b[0].length; v++) {
          let result=np(np(a[i]).mal(tran[v])).sum()
          outputs[i].push(result[0])
        }
      }
        return outputs
      },
      
      
    A:function(second,axis=1){
      if ((np(array).shape()==2 && array.length==second.length) || (typeof(second)!="object" && np(array).shape()==2)) {
      let b=second;
      let a=array;
      if (axis==0) {
        a=np(array).T() 
        b=np(second).T()
      }
      let result=[]
      if(typeof(b)=="object"){
        for (let i = 0; i < a.length; i++) {
          let answer=np(a[i]).adds(b[i])
          result.push(answer)
        }
      }
      else{
        for (let i = 0; i < a.length; i++) {
          let answer=np(a[i]).adds(b)
          result.push(answer)
        }
      }
      return result;
      }
      else if (np(array).shape()==1){
        return np(array).adds(second)
      }else{
        let result=[]
        if(array.length!=second.length){
          for (let i = 0; i < second.length; i++) {
            first=np(array[0]).adds(second[i])
            result.push(first)
          }
        }
          return result
      }
    }
    ,
    S:function(second,axis=1){
      if ((np(array).shape()==2 && array.length==second.length) || (typeof(second)!="object" && np(array).shape()==2)) {
      let b=second
      let a=array;
      if (axis==0) {
        a=np(array).T()
        b=np(second).T()
      }
      let result=[]
      if(typeof(b)=="object"){
        for (let i = 0; i < a.length; i++) {
          let answer=np(a[i]).subs(b[i])
          result.push(answer)
        }
      }
      else{
        for (let i = 0; i < a.length; i++) {
          let answer=np(a[i]).subs(b)
          result.push(answer)
        }
      }
      return result;
      }
      else if(np(array).shape()==1){
        return np(array).subs(second)
      }
      else{
        let result=[]
        if(array.length!=second.length){
          for (let i = 0; i < second.length; i++) {
            first=np(array[0]).subs(second[i])
            result.push(first)
          }
        }
          return result
      }
    },
    M:function(second,axis=1){
      if ((np(array).shape()==2 && array.length==second.length) || (typeof(second)!="object" && np(array).shape()==2)) {
      let a=array;
      let b=second
      if (axis==0) {
        a=np(array).T()
        b=np(second).T()
      }
      let result=[]
      if(typeof(b)=="object"){
        for (let i = 0; i < a.length; i++) {
          let answer=np(a[i]).mal(b[i])
          result.push(answer)
        }
      }
      else{
        for (let i = 0; i < a.length; i++) {
          let answer=np(a[i]).mal(b)
          result.push(answer)
        }
      }
      return result;
      }
      else if(np(array).shape()==1){
        return np(array).mal(second)
      }else{
        let result=[]
        if(array.length!=second.length){
          for (let i = 0; i < second.length; i++) {
            first=np(array[0]).mal(second[i])
            result.push(first)
          }
        }
          return result
      }
    }
    ,
    D:function(second,axis=1 ){
      if ((np(array).shape()==2 && array.length==second.length) || (typeof(second)!="object" && np(array).shape()==2)) {
      let a=array;
      let b=second;
      if (axis==0) {
        a=np(array).T()
        b=np(second).T()
      }
      let result=[]
      if(typeof(b)=="object"){
        for (let i = 0; i < a.length; i++) {
          let answer=np(a[i]).div(b[i])
          result.push(answer)
        }
      }
      else{
        for (let i = 0; i < a.length; i++) {
          let answer=np(a[i]).div(b)
          result.push(answer)
        }
      }
      return result;
      }
      else if(np(array).shape()==1){
        return np(array).div(second)
      }
      else{
        let result=[]
        if(array.length!=second.length){
          for (let i = 0; i < second.length; i++) {
            first=np(array[0]).div(second[i])
            result.push(first)
          }
        }
          return result
      }
    },
    exp:function(){
      let x=array;
      if (np(x).shape()==1) {
      let result=[]
      for (let i = 0; i < x.length; i++) {
        result.push(Math.exp(x[i]))
      }
        return result
      }
      else if(np(x).shape()==2){
        let result=[]
        for (let i = 0; i < x.length; i++) {
          result.push([])
          for (let v = 0; v < x[i].length; v++) {
            result[i].push(Math.exp(x[i][v]))
          }
        }
        return result
      }else if(np(x).shape()==3){
        let result=[]
        for (let i = 0; i < x.length; i++) {
          result.push(np(x[i]).exp())
        }
        return result
      }else{
        return Math.exp(x)
      }
     },
    churas:function(y=1){
      let x=array
      let one=[]
      if (np(x).shape()==1) {
      one=[y]
      }else{
        one=[[y]]
      }
      let negative=np(x).M(-1)
      let sigmoid=np(negative).exp()
      let simple=np(sigmoid).A(1)
      let result=np(one).D(simple)
      return result
      }
    }
  }
module.exports=np