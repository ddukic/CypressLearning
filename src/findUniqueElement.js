a = [1]
a.sort();


function nadjiJediniBroj(a) {
   for(i=0; i<a.length; i++){
    if(a[i] != a[i-1] && a[i] != a[i+1]){
        return a[i];
    }
   }
}

console.log(nadjiJediniBroj(a))