/*  exo en js  */
Array1=[3, 1, 7, 9]
Array2=[2, 4, 1, 9, 3,10]
console.log(Array1)
 
let somme1=0
let somme2=0
let somme=0
let stock1
let stock2
let isegale=false
for (let i = 0; i < Array1.length; i++) {
   isdistincts=false
   for (let j = 0; j < Array2.length; j++) {
      if (Array1[i]==Array2[j]) {
         isdistincts=true
         break 
      }
   }
   if (isdistincts==false) {
      stock1=Array1[i]
      somme1=somme1+stock1
      console.log(somme1)
    }   
 }
for (let j = 0; j < Array2.length; j++) {
   isdistincts=false
   for (let i = 0; i < Array1.length; i++) {
      if (Array1[i]==Array2[j]) {
         isdistincts=true
         break 
      }
   }
   if (isdistincts==false) {
      stock2=Array2[j]
      somme2=somme2+stock2
      console.log(somme2)
    }   
 }
 somme=somme1+somme2
 console.log(somme)
 


 