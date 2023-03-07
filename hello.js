
console.log("hello world");
let answer ='babbbar';
let firstName = new String('Love');
let last=[1,3,2,4,5,6];
let numb=[23,12,45,67,1];
numb.sort();
console.log(numb);
numb.reverse();
console.log(numb);


let person={
    firstName:'prajakta',
    age:21,
    height:'5-3',
    weight:48,
    place:'kaiga'
};
person['age'];
console.log(5===3);
console.log(2!==3);



let age=19;
let status=(age>=18)?'yes vote':'no vote';
console.log(status);



 let rectangle ={
    length:1,
    breadth:2,
    draw :function(){
        console.log('drawing rectangle');
    }
 };
 console.log(rectangle); 

 function createrectangle(len ,bre){
    return rectangle={
        length:len,
       breadth:bre,
       draw(){
        console.log('drawing rectangle');
       }
    };
 }
 let rectangleobj1=createrectangle(4,5);

 function run(){
    console.log('running ');
 };
 run();

  let stand = function bark(){
    console.log('barking');
  };
  stand();
  let jump= stand;
  jump(); 
  let b=jump;
  b();


  let a=function(){
    console.log('heyyy');
  };
  a();

  function prod(a,b){
    return a*b;
  };
  console.log('product is:',prod  (2,4));


  function sum(num,value,meet,...args){
   console.log(num,value,meet,args);
  }
  sum(1,2,3,4,5,6);

  function interest(p,r=6,t=9){
   return p*r*t/100; 
  }
  console.log(interest(9500,6,4));

  let insaan={
   fname:'love',
   lname:'babbar',
   mname:'kabbar',
    get fulName(){
      return `${insaan.fname}  ${insaan.lname} ${insaan.mname}`;
     },
  
  set fulName(value){
   let parts = value.split(' ');
   this.fname=parts[0];
   this.lname=parts[1];
   this.mname=parts[2];
  }
  };
  insaan.fulName='rahal kumar labbar';
  console.log(insaan.fulName);


  for(let i=0;i<10;i++){

  }
  console.log(i);

  if(true){
   let a=5;
  }
  console.log(a);

  function ab(){
   const ab=5;
  }
  const ab =5;
  function b(){
   const ab=5;
  }


  let arr=[1,2,3,4,5];
    let sum=0;
  for(let val of arr)
       sum =sum+val;
       console.log(sum);
       




  











