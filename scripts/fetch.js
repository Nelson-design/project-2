// const displayBanner = document.querrySelector('#product-display')
// function handleSubmit(event) {
//         event.preventDefault();
//         const productId = event.target[0].value;
//         const productUrl = fetch('https://fakestoreapi.com/products?limit=5')
//         fetch(productUrl)
//         .then(res=>res.json())
//         .then((productData)=>console.log(json))
//         console.log(productUrl)
//         console.log(event)
// }




// function alertTimeUp() {
//     console.log('times up')


// const theTimeout = setTimeout(AlertTimeUp, 1000)


// clearTimeout(theTimeout)


// const GetTime = ()=> {
//     const now = new Date();
//     let second = now.getSeconds()
//     let minute = now.getMinutes()
//     let hour = now.getHours()
//     let day = now.toDateString()
//     console.log(second + 'sec'+ minute + "min")
// }
// }






// class shape {
//     constructor(width, height, area = this.width * this.height){ 
//         this.height = height;
//         this.width = width;
//         this.areaFunctiono = this.areaFunction
//         this.perimeterFunction = perimeterFunction

//     }

//     static parentName = 'shape'

//     get perimeter() {
//         return this.calculatePerimeter()
//     }

//     calculatePerimeter () {
//         return this.perimeterFunction(this.width, this.height)
//     }

//     calculateArea(){
//         return this.areaFunction(this.width, this.height)
//     }
// }


// const rectangle = new shape(4, 6, function(w, h){return w *h;},function(w, h){return 2 * w + 2* h;})

// rectangle.calculatePerimeter()
// rectangle.calculateArea()
// rectangle.perimeterFunction()



const promiseFunction = function (resolve, reject) {
    let boyeHere = true;
    if(boyeHere) {

        setTimeout(()=> resolve(" boye has arrived"), 3000)
        //resolve("boye has arrived")
    } else {
        setTimeout(()=> reject("boye has not arrived"))
        //reject("boye has not arrived")
    }
}


let boyePromise = new Promise(promiseFunction);

const successFunction = function (mesage) {
    console.log(message)
    return mesage
}


const failureFunction = function(message) {
    console.error(message)
    return message
}

boyePromise.then(succesFunction, failureFunction)
