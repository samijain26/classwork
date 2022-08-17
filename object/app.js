const car = {
            Color : 'Green',
            model : 'Tayota Camery',
            Cylender:6,
            canTalk:'false',
            speed: function(){
                console.log("super fast")}


}
const identity = {
    name : 'Sami',
    phone : '732-324-2345',
    add: 'herutage dr',
    smart:'true',
    language: ['Hindi','English'],
    race(){
        console.log("Indian")
    }
    }

    





console.log(identity.add)
car.speed()
identity.race()

console.log("Looping through car object")
for(let key in car){
    console.log("Key:",key)
    console.log(car[key])
}
for(let list in identity){
    console.log("Key:",list)
    console.log(identity[list])
}

const charecterCount = str =>{
    let output= {}
    
    for (let i =0 ;i < str.length ; i ++){
        let char=str[i]
        console.log(char)
        //console.log(output[char])
        if (output[char]){
            output[char]++
        }
      else{
        output[char]=1
      }

    }
    console.log(output)
    return output
}
charecterCount('hello')

// largest denomination
let denomination={}



function lDenomination(cost1, paid1){
     recAmount1 = paid1 - cost1
    recAmount1  =   recAmount1  *   100
    //console.log(recAmount1)
    while (recAmount1   >   0){
        if (recAmount1 >=   10000){
            recAmount1 = recAmount1 -10000
                if (denomination.hundred_count){
                    denomination.hundred_count = denomination.hundred_count + 1
                    }else{
                        denomination.hundred_count = 1
                }
           }
        else if (recAmount1 >=5000){
             recAmount1 = recAmount1 -5000
                 if (  denomination.fifty_count){
                    denomination.fifty_count = denomination.fifty_count + 1
                 }
                else {
                    denomination.fifty_count = 1
                 }
             
            }
        else if (recAmount1 >= 2000){
            recAmount1 = recAmount1 - 2000
                if (denomination.twenty_count){
                        denomination.twenty_count =  denomination.twenty_count +1
                }
                else {
                    denomination.twenty_count = 1
                }

            }
        else if (recAmount1 >= 1000){
            recAmount1 = recAmount1 - 1000
            denomination.ten_count =  denomination.ten_count + 1
            if (denomination.ten_count){
                denomination.ten_count =  denomination.ten_count + 1
            }else{
                denomination.ten_count = 1
            }

        }
        else if (recAmount1 >= 500) {
            recAmount1 = recAmount1 - 500
            if (  denomination.five_count){
            denomination.five_count= denomination.fifty_count + 1
            } else {
                denomination.five_count = 1
            }
           
        }
        
        else if (recAmount1 >=100) {
            recAmount1 = recAmount1 - 100
            if (  denomination.one_count){
                denomination.one_count= denomination.one_count + 1
                } else {
                    denomination.one_count = 1
                }
           
        }
       

        else if (recAmount1 >= 25) {
            recAmount1 = recAmount1 - 25
            if (  denomination.quater_count){
                denomination.quater_count= denomination.quater_count + 1
                } else {
                    denomination.quater_count = 1
                }
        }
        
        else if (recAmount1 >= 10) {
            recAmount1 = recAmount1 - 10
            if (  denomination.dime_count){
                denomination.dime_count= denomination.dime_count + 1
                } else {
                    denomination.dime_count = 1
                }
        }
       
        else if (recAmount1 >= 5 ){
            recAmount1 = recAmount1 - 5
            if (  denomination.nickle_count){
                denomination.nickle_count= denomination.nickle_count + 1
                } else {
                    denomination.nickle_count = 1
                }
        }
        

        else if (recAmount1 >=1 ){
            recAmount1 = recAmount1 - 1
            if (  denomination.penny_count){
                denomination.penny_count= denomination.penny_count + 1
                } else {
                    denomination.penny_count = 1
                }
        }
        //return recAmount1
    }
    return console.log(denomination)
}
    lDenomination(25.47,140)
    //console.log("Hundres : "+denomination.hundred_count)



