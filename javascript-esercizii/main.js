// Dichiara e inizializza 5 variabili, una per ogni tipo di dato primitivo visto a lezione.
// Dopo di che, stampa il tipo nella console.

// let a= 1;
// let b= 2;
// let c= 3;
// let d= 4;
// let e= 5;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// ---------------------------------//

// 2. Individua l’errore nel seguente codice e correggilo:
// let nome = 'Mario; let età = 30; const indirizzo = `Via Roma 10'; console.log(Nome);
// Il nome mario non è tra virgolette

//----------------------------------//

// Chiedi all’utente due numeri con il metodo prompt, salvali in delle variabili, poi calcola
// e stampa nella console: somma, differenza, prodotto, divisione, resto della divisione,
// ed il numero più grande dei due.
// Per aumentare la leggibilità, durante il console.log puoi spiegare a fianco cosa stai
// stampando usando una stringa. Esempio:
// console.log(“Questa è la somma”, sum);

// let num =Number(prompt("Inserisci un numero"));
// let num2 =Number( prompt("Inserisci un altro numero"));
// console.log(num + num2);
// console.log(num - num2);
// console.log(num * num2);
// console.log(num / num2);
// console.log(num % num2);
// console.log(Math.max(num,num2));

//---------------------------------//

// Chiedi all’utente il suo nome e cognome, dopo di che stampa in console la seguente
// frase:
// "Benvenuto, Mario Rossi!"
// Completare l’esercizio sia usando la string interpolation sia usando la
// concatenazione di stringhe.

// let nome = prompt("Inserisci il tuo nome");
// // console.log("Benvenuto" + " " + nome);

// console.log(`Benvenuto ${nome}`);

//---------------------------------//

// Chiedi all’utente di inserire un valore e verifica se il valore è truthy o falsy
// stampando il risultato nella console.
// (Come nell’esercizio della lezione, un semplice if/else, con dentro solo il console.log;
// in un caso stampa “il valore è truthy”, nell’altro stampa “il valore è falsy”)

// let nome = prompt("Inserisci il tuo nome");
// if (nome) { console.log(
//     "Il valore è TRUTHY"
// );
// } else {
//     console.log("Il valore è FALSY");
// }

//-------------------------------//
// Chiedi all’utente due numeri e verifica se:
// ● Entrambi sono maggiori di 10.
// ● Almeno uno dei due è maggiore di 10.

// let num =Number(prompt("Inserisci un numero"));
//  let num2 =Number( prompt("Inserisci un altro numero"));

// if (num>10 && num2>10) {
//     console.log("Entrambi i numeri sono maggiori");
// } else if (num>10 || num2>10){
//     console.log("Uno dei due è maggiore");
// } else {
//     console.log("E niente");  
// }

//---------------------------------//
// Inizializza due variabili, 5 e “5”, e verifica le seguenti condizioni:
// ● Se i numeri sono uguali.
// ● Se sono uguali anche nel tipo.
// ● Se sono diversi o strettamente diversi.
// Stampa i risultati nella console

// let var1= 5;
// let var2= "5";

// if (var1 == var2) {
//     console.log("Le variabili sono uguali");    
// }else {
//     console.log("Le variabili non sono uguali");
// }

// if (var1 === var2) {
//     console.log("Le variabili sono uguali anche nel tipo ");    
// }else {
//     console.log("Le variabili non sono uguali anche nel tipo");
// }

// if (var1 != var2) {
//     console.log("Le variabili sono diverse ");    
// }else {
//     console.log("Le variabili non sono diverse");
// }

// if (var1 !== var2) {
//     console.log("Le variabili sono strettamente diverse ");    
// }else {
//     console.log("Le variabili non strettamente diverse");
// }

//-------------------------------------------//
// Chiedi all’utente un numero e verifica se si trova in un determinato intervallo
// (esempio: tra 10 e 100). Stampa all’utente un messaggio dove confermi o meno se è
// dentro quell’intervallo.

// let num = prompt ("Inserisci un numero");
// if (num>10 && num<100) {
//     console.log("Il numero si trova tra 10 e 100");
    
// } else {
//     console.log("Il numero non si trova tra 10 e 100");
// }

//------------------------------------------//
// Chiedi all’utente di inserire la propria età e quella di un amico. Determina chi è più
// giovane, chi è più vecchio o se hanno la stessa età. Stampa il risultato

// let age = prompt("Inserisci la tua età")
// let friendlyage = prompt("Inserisci l'età del tuo amico")
 
// if (age>friendlyage) {
//     console.log("Sei più vecchio del tuo amico");
// } else if (age<friendlyage){
//     console.log("Sei più giovane del tuo amico");    
// } else {
//     console.log("Avete la stessa età");    
// }

//-------------------------------------------//
// 1. Lancio del dado
// Creare un programma che simuli il lancio di un dado e reagisca in base al risultato.
// Regole
// ● Utilizzare Math.random() e Math.round() per generare un numero casuale
// ● Simulare un dado a 6 facce
// ● Stampare un messaggio se il numero è maggiore di 3
// Scrivi un programma che:
// 1. Generi un numero casuale da 1 a 6
// 2. Verifichi se il numero è maggiore di 3
// 3. Stampi un messaggio in caso affermativo
// let dado = Math.round(Math.random() * 5) + 1;
// console.log(dado);

// if (dado>3) {
//     console.log("Il numero è maggiore di 3");    
// } else {
//     console.log("Il numero è minore o uguale a 3");    
// }

//------------------------------------------//
// Creare un mini-programma che classifichi un voto scolastico in base al punteggio.
// Scale di Valutazione
// ● 90-100: "Ottimo!"
// ● 70-89: "Buono!"
// ● 60-69: "Sufficiente"
// ● Sotto 60: "Insufficiente"
// Scrivi un programma che:
// 1. Definisca un voto numerico
// 2. Utilizzi le istruzioni if-else
// 3. Classifichi il voto secondo le scale indicate
// 4. Stampi a schermo la corrispondente valutazione
// 3. Identificazione della stagione

// let voto = Math.round(Math.random() * 100)
// console.log(voto + " " + "Voto generato casualmente");
// if (voto>=90) {
//     console.log("Ottimo!")
// } else if (voto>=70) {
//     console.log("Buono!")
// } else if (voto>=60) {
//     console.log("Sufficiente")
// } else if (voto<=59) {
//     console.log("Insufficiente")
// } 


//-----------------------------------------//
// Creare un mini-programma che identifichi la stagione in base al numero del mese.
// Stagioni e Mesi
// ● Inverno: Dicembre (12), Gennaio (1), Febbraio (2)
// ● Primavera: Marzo (3), Aprile (4), Maggio (5)
// ● Estate: Giugno (6), Luglio (7), Agosto (8)
// ● Autunno: Settembre (9), Ottobre (10), Novembre (11)
// Consegna
// Scrivi un programma che:
// 1. Definisca un numero di mese (1-12)
// 2. Utilizzi l'istruzione switch
// 3. Identifichi la stagione corrispondente
// 4. Stampi a schermo il nome della stagione
// let gennaio = 1;
// let febbraio = 2;
// let marzo = 3;
// let aprile = 4;
// let maggio = 5;
// let giugno = 6;
// let luglio = 7;
// let agosto = 8;
// let settembre = 9;
// let ottobre = 10;
// let novembre = 11;
// let dicembre = 12;
// let mese = Math.round(Math.random () * 11) + 1;
// console.log(mese);
// let season = ""
// switch (mese) {
//   case 1:
//   console.log("gennaio"); 
//   break
//   case 2:
//   console.log("febbraio");
//   break
//   case 3:
//   console.log("marzo");
//   break
//   case 4:
//   console.log("aprile");
//   break
//   case 5:
//   console.log("maggio");
//   break
//   case 6:
//   console.log("giugno");
//   break
//   case 7:
//   console.log("luglio");
//   break
//   case 8:
//   console.log("agosto");
//   break
//   case 9:
//   console.log("settembre");
//   break
//   case 10:
//   console.log("ottobre");
//   break
//   case 11:
//   console.log("novembre");
//   break
//   case 12:
//   console.log("dicembre");
//   break
// }

// switch (mese) {
//     case 1:
//     console.log("Inverno");
//     break 
//     case 2:
//     console.log("Inverno");
//     break
//     case 12:
//     console.log("Inverno");
//     break
//     case 3:
//     console.log("Primavera")
//     break
//     case 4:
//     console.log("Primavera");
//     break
//     case 5:
//     console.log("Primavera");
//     break
//     case 6:
//     console.log("Estate");
//     break
//     case 7:
//     console.log("Estate");
//     break
//     case 8:
//     console.log("Estate");
//     break
//     case 9:
//     console.log("Autunno");
//     break
//     case 10:
//     console.log("Autunno"); 
//     break  
//     case 11:
//     console.log("Autunno");
//     break
//   }

//------------------------------------------//
// Utilizzare l'operatore ternario per determinare lo stato anagrafico di una persona in
// base all'età.
// ● Maggiorenne: età ≥ 18 anni
// ● Minorenne: età < 18 anni
// Scrivi un programma che:
// 1. Definisca un'età
// 2. Utilizzi l'operatore ternario
// 3. Determini lo stato anagrafico
// 4. Stampi a schermo il risultato usando una stringa
// Esempio di output: “Età: 16, stato: minorenne”

// let age = prompt("Quanti anni hai?");
// (age>=18 ? console.log("Sei maggiorenne") : console.log("Sei minorenne"));

//------------------------------------------//
// Esercizio bonus
// Sommatore di Numeri Pari
// Creare un programma che calcoli la somma di tutti i numeri pari fino a un
// determinato limite.
// Regole
// ● Usare un ciclo while
// ● Identificare i numeri pari con l'operatore modulo %
// ● Calcolare la somma dei numeri pari
// Scrivi un programma che:
// 1. Definisca un limite massimo
// 2. Usi un ciclo while
// 3. Identifichi i numeri pari
// 4. Calcoli la loro somma
// 5. Stampi il risultato finale
// Esempio: con un limite di 10, la somma dei numeri pari sarà 20 (0+2+4+6+8+10)


// let numMax = prompt("Inserisci un numero massimo");
// let i = 0;
// let somma = 0;
// while (i<= numMax) {
//     if (i%2==0) {
//         somma= somma + i;
//     } 
//     i++;
// }
// console.log(somma);



//--------------------------------------------//
// Bonus 1: Indovina il numero segreto
// Creare un mini-gioco di indovinare un numero generato casualmente.
// Regole
// ● Generare un numero segreto tra 1 e 10
// ● Chiedere all'utente di indovinare
// ● Dare suggerimenti se il numero è troppo alto o troppo basso
// ● Continuare finché non si indovina il numero
// Scrivi un programma che:
// 1. Generi un numero segreto casuale tra 1 e 10
// 2. Chieda ripetutamente all'utente di indovinare
// 3. Dia suggerimenti
// 4. Termini quando il numero è indovinato
// Esempio:
// Numero segreto generato
// Indovina il numero (1-10):
// 5
// Troppo basso!
// Indovina il numero (1-10):
// 8
// Troppo alto!
// Indovina il numero (1-10):
// 6
// Complimenti! Hai indovinato in 3 tentativi
