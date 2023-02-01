# CypressLearning
Resenja zadataka JS

//1. Napisati program koji ispisuje sledeći string:
// "The memory of that scene for me is like a frame of film forever frozen at that moment: the red carpet, the green lawn, the white house, the leaden sky. The new president and his first lady. - Richard M. Nixon"
// Reči 'red', 'green' i 'white' u datom stringu iskoristiti iz sledećeg niza:
// var colors = ['white', 'green', 'red', 'blue', 'black'];
var colors = ['white', 'green', 'red', 'blue', 'black'];
console.log("The memory of that scene for me is like a frame of film forever frozen at that moment: the " + colors[2] + " carpet, the " + colors[1] + " lawn, the " + colors[0] + " house, the leaden sky. The new president and his first lady. - Richard M. Nixon")
// 2. Napisati program koji kreira niz: colors = ['white', 'green', 'red', 'blue', 'black'];
// i ispisuje njegove elemente. Koristiti for-of petlju
var colors = ['white', 'green', 'red', 'blue', 'black'];
for (var color of colors) {
    console.log(color);
}
// 3. Kreirati niz imena meseca u godini i pomoću for-of petlje ispisati sve elemente niza
var months = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'];
for (var month of months) {
    console.log(month);
}
// 4. Napraviti dva niza, a i b, sa proizvoljnim brojem elemenata. Ako je broj elementa u nizu a veći od broja elemeneta u nizu b, ispisati sve elemenete niza a. U suprotnom, ispisati elemente niza b
var a = [1, 2, 5, 7];
var b = [5, 1, 9];
if (a.length > b.length) {
    for (var num of a) {
        console.log(num);
    }
} else {
    for (var num of b) {
        console.log(num);
    }
}
// 5. Ispisati elemente proizvoljnog niza brojeva pomoću for petlje
var arr = [0, 3, 5, 7, 10];
for (var num of arr) {
    console.log(num);
}
// 6. Ispisati elemente proizvoljnog niza brojeva, uvećane za 1 (nije potrebno menjati sadržaj samog niza)
var arr = [0, 3, 5, 7, 10];
for (var num of arr) {
    console.log(num + 1);
}
// 7. Ispisati elemente proizvoljnog niza brojeva, duplirane (nije potrebno menjati sadržaj samog niza)
var arr = [0, 3, 5, 7, 10];
for (var num of arr) {
    console.log(num * 2);
}
// 8. Ispisati elemente proizvoljnog niza brojeva, unazad
var arr = [0, 3, 5, 7, 10];
for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
// 9. Ispisati svaki drugi element proizvoljnog niza
var arr = [0, 3, 5, 7, 10];
for (var i = 1; i < arr.length; i += 2) {
    console.log(arr[i]);
}
// 10. Sabrati sve elemente proizvoljnog niza brojeva i ispisati zbir na kraju
var arr = [0, 3, 5, 7, 10];
var sum = 0;
for (var num of arr) {
    sum += num;
}
console.log(sum);
// 11. Napisati program koji računa srednju vrednost elemenata proizvoljnog niza brojeva
var arr = [0, 3, 5, 7, 10];
var sum = 0;
for (var num of arr) {
    sum += num;
}
console.log(sum / arr.length);
// 12. Napisati program koji za dati niz objekata:
// var capitals = [
    // { country: 'Italy', city: 'Rome' },
    // { country: 'Netherlands', city: 'Amsterdam' },
    // { country: 'Belgium', city: 'Brussels' },
    // { country: 'Denmark', city: 'Copenhagen' },
    // { country: 'Finland', city: 'Helsinki' },
// ];
// ispisuje sledeće:
//     The capital of Italy is Rome 
//     The capital of Luxembourg is Luxembourg 
//     The capital of Belgium is Brussels
//     The capital of Denmark is Copenhagen
//     The capital of Finland is Helsinki
// Koristiti for-of petlju.
var capitals = [
    { country: 'Italy', city: 'Rome' },
    { country: 'Netherlands', city: 'Amsterdam' },
    { country: 'Belgium', city: 'Brussels' },
    { country: 'Denmark', city: 'Copenhagen' },
    { country: 'Finland', city: 'Helsinki' },
];
for (var capital of capitals) {
    console.log('The capital of ' + capital.country + ' is ' + capital.city);
}
// 13. Napraviti prazan niz u promenljivoj prirodniBrojevi. U ovaj niz ubaciti prvih 100 prirodnih brojeva pomoću for petlje. Ispisati u konzoli sadržaj niza na kraju
var prirodniBrojevi = [];
for (var i = 1; i <= 100; i++) {
    prirodniBrojevi.push(i);
}
console.log(prirodniBrojevi);
// 14. Napraviti dva prazna niza, parni i neparni. Koristeći jednu for petlju, postaviti sve parne brojeve od 1 do 100 u niz parni, i sve neparne brojeve od 1 do 100 u niz neparni. Ispisati sadržaj nizova
var parni = [];
var neparni = [];
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        parni.push(i);
    } else {
        neparni.push(i);
    }
}
console.log(parni);
console.log(neparni);
// 15. Napisati program koji pravi i ispisuje niz svih brojeva u intervalu od broja a do broja b
var interval = [];
var a = 34;
var b = 99;
for (var i = a; i <= b; i++) {
    interval.push(i);
}
console.log(interval);
// 16. Napisati program koji za dati niz arr i broj num proverava da li se taj broj nalazi u nizu. Ispisati 'Broj se nalazi u nizu' ako je pronađen, ili 'Broj se ne nalazi u nizu' ako nije
var arr = [19, 49, 10, 4, 93, 57];
var num = 10;
var numFound = false;
for (var element of arr) {
    if (element === num) {
        numFound = true;
        break;  // nije obavezan u ovom slucaju
    }
}
if (numFound) {
    console.log('Broj se nalazi u nizu');
} else {
    console.log('Broj se ne nalazi u nizu');
}
// 17. Napisati program koji nalazi i ispisuje najveći element proizvoljnog niza brojeva
var arr = [19, 49, 10, 4, 93, 57];
var maximum = arr[0];
for (var element of arr) {
    if (element > maximum) {
        maximum = element;
    }
}
console.log(maximum);
// 18. Napraviti dva niza, a i b, sa jednakim brojem elemenata tipa number. Proći kroz oba niza paralelno for petljom i ispisivati zbir elemenata nizova a i b. Dakle, ispisati zbir prvog elementa niza a sa prvim elementom niza b, zbir drugog a sa drugim iz b itd.
var a = [4, 6, 9, 0, 1, 3, 8];
var b = [21, 53, 12, 74, 88, 2, 5];
for (var i = 0; i < a.length; i++) {
    console.log(a[i] + b[i]);
}
// 19. Napraviti dva niza, a i b, koji sadrže po 10 stringova. Pomoću for petlje napraviti objekat c koji koristi elemente niza a kao ključeve, i elemente niza b kao vrednosti. Ispisati objekat c u konzoli
var a = ['Rome', 'Amsterdam', 'Brussels', 'Copenhagen', 'Helsinki', 'Athens', 'London', 'Moscow', 'Washington DC', 'Madrid'];
var b = ['Italy', 'Netherlands', 'Belgium', 'Denmark', 'Finland', 'Greece', 'UK', 'Russia', 'US', 'Spain'];
var c = {};
for (var i = 0; i < a.length; i++) {
    c[a[i]] = b[i];
}
console.log(c);
// 20. Napraviti promenljivu meseci i dodeliti joj vrednost niza objekata koji kao property-e sadrži ime meseca i broj dana u tom mesecu ([ { mesec: 'Januar', brojDana: 31 }, { mesec: 'Februar', brojDana: 28 }, ... ]). Prolazeći kroz ovaj niz, ispisati sve moguće datume u godini (dakle '1. Januar', '2. Januar'… '31. Januar', '1. Februar', '2. Februar'…)
var meseci = [
    {ime: 'Januar', brojDana: 31},
    {ime: 'Februar', brojDana: 28},
    {ime: 'Mart', brojDana: 31},
    {ime: 'April', brojDana: 30},
    {ime: 'Maj', brojDana: 31},
    {ime: 'Jun', brojDana: 30},
    {ime: 'Jul', brojDana: 31},
    {ime: 'Avgust', brojDana: 31},
    {ime: 'Septembar', brojDana: 30},
    {ime: 'Oktobar', brojDana: 31},
    {ime: 'Novembar', brojDana: 30},
    {ime: 'Decembar', brojDana: 31}
];
for (var mesec of meseci) {
    for (var d = 1; d <= mesec.brojDana; d++) {
        console.log(d + '. ' + mesec.ime);
    }
}

//21. Ispisati brojeve od 0 do 5 koristeći for petlju
console.log('1. vezba -------------------------------------------------------');
for (var i = 0; i <= 5; i++) {
    console.log(i);
}
// 22. Ispisati brojeve od 20 do 30 koristeći while petlju
console.log('2. vezba -------------------------------------------------------');
var i = 20;
while (i <= 30) {
    console.log(i);
    i++;
}
// 23. Ispisati parne brojeve od 0 do 10 koristeći for petlju
console.log('3. vezba -------------------------------------------------------');
for (var i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// 24. Ispisati prvih 10 neparnih prirodnih brojeva koristeći while petlju
console.log('4. vezba -------------------------------------------------------');
var i = 1;
var counter = 0;
while (counter < 10) {
    if (i % 2 === 1) {
        counter++;
        console.log(i);
    }
    i++;
}
// 25. Ispisati prvih 10 neparnih prirodnih brojeva koristeći for petlju
console.log('5. vezba -------------------------------------------------------');
var i = 1;
for (counter = 0; counter < 10; i++) {
    if (i % 2 === 1) {
        counter++;
        console.log(i);
    }
}
// 26. Ispisati sve brojeve od 10 do 0 (po opadajućem redosledu)
console.log('6. vezba -------------------------------------------------------');
for (var i = 10; i >= 0; i--) {
    console.log(i);
}
// 27. Ispisati sve brojeve u datom opsegu
// (definisati dve promenljive koje sadrze pocetak i kraj,i ispisati sve brojeve izmedju njih)
console.log('7. vezba -------------------------------------------------------');
var start = 21;
var end = 42;
for (var i = start; i <= end; i++) {
    console.log(i);
}
// 28. Napisati program koji sabira prvih 10 prirodnih brojeva kroz petlju. Ispisati rezultat
console.log('8. vezba -------------------------------------------------------');
var sum = 0;
for (var i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);
// 29. Napisati program koji sabira prvih 20 neparnih prirodnih brojeva. Ispisati rezultat
console.log('9. vezba -------------------------------------------------------');
var i = 1;
var counter = 0;
var sum = 0;
while (counter < 20) {
    if (i % 2 === 1) {
        sum += i;
        counter++;
    }
    i++;
}
console.log(sum);
// 30. Napisati program koji vrši množenje dva broja bez korišćenja operatora *,
// tako što sabira broj sa samim sobom više puta (npr. 4 * 5 se računa kao 5 + 5 + 5 + 5)
console.log('10. vezba -------------------------------------------------------');
var product = 0;
var a = 4;
var b = 5;
for (var i = 1; i <= a; i++) {
    product += b;
}
console.log(product);
// 31. Napisati program koji vrši stepenovanje dva broja, tako što množi broj sa samim sobom više puta
// (npr. 2⁵ se računa kao 2 * 2 * 2 * 2 * 2)
console.log('11. vezba -------------------------------------------------------');
var result = 1;
var a = 2;
var b = 5;
for (var i = 1; i <= b; i++) {
    result *= a;
}
console.log(result);
// 32. Napisati program koji za dati broj ispisuje proizvode svih brojeva od 1 do 10 sa tim brojem
// (npr. za zadati broj 7 ispisati 7, 14, 21, 28, 35, 42, 49, 56, 63, 70)
console.log('12. vezba -------------------------------------------------------');
var n = 7;
for (var i = 1; i <= 10; i++) {
    console.log(i * n);
}
// 33. Napisati program koji za dati broj ispisuje proizvode svih brojeva od 1 do 10 sa tim brojem,
// odvojene razmacima (npr. za zadati broj 7 ispisati string '7 14 21 28 35 42 49 56 63 70').
// Spajanje stringova se može izvršiti pomoću operatora + ili +=, npr:  var str = 'Hello'; str += ' world';
console.log('13. vezba -------------------------------------------------------');
var n = 7;
var str = '';
for (var i = 1; i <= 10; i++) {
    str += (i * n) + ' ';
}
console.log(str);
// 34. Napisati program koji računa faktorijel datog broja.
// Faktorijel nekog broja je proizvod svih brojeva od 1 do tog broja
// (npr. faktorijel broja 5 je 1 * 2 * 3 * 4 * 5 = 120)
console.log('14. vezba -------------------------------------------------------');
var n = 5;
var factorial = 1;
for (var i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(factorial);
// 35. Napisati program koji ispisuje brojeve od 1 do 100.
// Međutim, ako je broj deljiv sa 3 ispisati "Fizz" umesto tog broja,
// ako je deljiv sa 5 ispisati "Buzz" umesto broja,
// a ako je deljiv i sa 3 i sa 5 ispisati "FizzBuzz"
console.log('15. vezba -------------------------------------------------------');
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
// 36. Napisati program koji kroz petlju broji, i na kraju ispisuje, koliko brojeva od 1 do 100 je deljivo sa 3
// (rezultat treba da bude 33)
console.log('16. vezba -------------------------------------------------------');
var counter = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        counter++;
    }
}
console.log(counter);
// 37. Napisati program koji kroz petlju broji, i na kraju ispisuje, koliko brojeva u datom opsegu je deljivo sa 3
// (definisati dve promenljive koje sadrze pocetak i kraj)
console.log('17. vezba -------------------------------------------------------');
var counter = 0;
var start = 36;
var end = 88;
for (var i = start; i <= end; i++) {
    if (i % 3 === 0) {
        counter++;
    }
}
console.log(counter);
// 38. Napisati program koji kroz petlju broji, i na kraju ispisuje,
// koliko brojeva u datom opsegu je deljivo sa 3, a koliko sa 7
console.log('18. vezba -------------------------------------------------------');
var counter3 = 0;
var counter7 = 0;
var start = 36;
var end = 88;
for (var i = start; i <= end; i++) {
    if (i % 3 === 0) {
        counter3++;
    }
    if (i % 7 === 0) {
        counter7++;
    }
}
console.log('Deljivo sa 3:', counter3);
console.log('Deljivo sa 7:', counter7);
// 39. Ispisati prvih 10 stepeni dvojke (2, 4, 8, 16… 1024)
console.log('19. vezba -------------------------------------------------------');
var power = 1;
for (var i = 1; i <= 10; i++) {
    power *= 2;
    console.log(power);
}
// 40. Napisati program koji računa i ispisuje prvih 20 brojeva u Fibonačijevom nizu.
// Fibonačijev niz počinje od 1 i svaki sledeći broj je zbir prethodna dva.
// Npr. prvih deset brojeva su: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
console.log('20. vezba -------------------------------------------------------');
var previous = 0;
var current = 1;
for (var i = 1; i <= 20; i++) {
    console.log(current);
    var temporaryCurrent = current;
    current = previous + current;
    previous = temporaryCurrent;
}
// 41. Ispisati sve proste brojeve od 1 do 100
console.log('21. vezba -------------------------------------------------------');
for (var n = 2; n <= 100; n++) {
    var noDivisorsSoFar = true;
    for (var divisor = 2; divisor < n; divisor++) {
        if (n % divisor === 0) {
            noDivisorsSoFar = false;
            break;
        }
    }
    if (noDivisorsSoFar) {
        console.log(n);
    }
}
// 42. Napisati prvih 27 brojeva deljivih i sa 7 i sa 13
console.log('22. vezba -------------------------------------------------------');
var brojac = 1;
var nadjenoBrojeva = 0;
while (nadjenoBrojeva < 27) {
    if (brojac % 7 === 0 && brojac % 13 === 0) {
        console.log(brojac);
        nadjenoBrojeva++;
    }
    brojac++;
}
// 43. Bacati kockicu (sa 6 strana) dok ne dobijemo broj 6. Ispisati koliko puta smo bacili kocku dok nismo dobili broj 6.
// Koristiti Math.random() za bacanje kockice.
// https://www.w3schools.com/js/js_random.asp
console.log('23. vezba -------------------------------------------------------');
// Math.random() daje nasumacan broj od 0 do 1. Na primer: 0.822739637704438
// Math.floor() zaokruzuje broj na prvi manji ceo broj. Na primer: 5.7 postaje 5
var broj = Math.floor(Math.random() * 6) + 1;
var brojBacanja = 1;
console.log('Bacili smo broj: ' + broj);
while (broj !== 6) {
    broj = Math.floor(Math.random() * 6) + 1;
    console.log('Bacili smo broj ' + broj);
    brojBacanja++;
}
console.log('Dobili smo broj 6 iz: ' + brojBacanja + ' bacanja!');
