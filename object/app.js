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
        
        //console.log(output)
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

// 
