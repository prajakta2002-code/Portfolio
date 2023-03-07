
/*const content = document.querySelector('#wrapper');
 content.addEventListener('click',function(event){
    console.log(event);
 }  ) 
 let myDiv =document.createElement('div');
 for(let i=1;i<=100;i++){
    let newElement = document = document.createElement('p');
     newElement.textContent='this is para' + i;
     newElement.addEventListener('click',function(event)  {
        console.log('i have clicked a para');

     });
     myDiv.appendChild(newElement);
 }
 document.body.appendChild(myDiv);
 */
/*function a(){
   console.log('hi');

}

function b(){
   console.log('hello');
}
a();
b();
let mydiv=document.createElement('p');
mydiv.textContent*/

/*async function prajakta(){
   return 4;
}
let maharastra = new promise(resolve,reject)=>{
   setTimeout{()=>{
       
   }}*/
   async function praj(){
   let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let op=content.text;
   console.log(op);
   };
   praj();
   
