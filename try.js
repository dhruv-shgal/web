// console.log(x);
// let x =10;
// console.log(x);

// var a = 100;
// {
//     var a=10;
//     console.log(a);
// }
// console.log(a);

function make(ms){
    return new Promise(resolve => setTimeout(resolve , ms)); 
}
async function greet(){
    console.log("hello ....your name is ");
    for(let i=0;i<3;i++){
        await make(1000);
        if (i==2){
            console.log("Dhruv");
        }
        else{
            console.log("um....");
        }
    }
    console.log("your age is 20");
}
greet();