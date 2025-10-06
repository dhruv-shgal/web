// console.log(x);
// let x =10;
// console.log(x);

// var a = 100;
// {
//     var a=10;
//     console.log(a);
// }
// console.log(a);

async function greet(){
    console.log("hello ....your name is ");
    for(let i=0;i<3;i++){
        setTimeout(()=>{
        if (i==2){
            console.log("Dhruv");
        }
        else{
            console.log("um....");
        }
    },i*1000)
    }
    console.log("your age is 20");
}
greet();