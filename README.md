## calcolo del prezzo del biglietto del treno

### Descrizione:

#### Raccolta dati
  - [ ] Il numero di chilometri da percorrere
  - [ ] Età del passeggero

#### Esecuzione logica
Se km è number AND età è number
  - [ ] creare il variabile prezzo al Km e discount
  - [ ] calcolo prezzo prima dell'ipotetica sconto
  ```
  Se minorenni 
     va applicato uno sconto del 20%
  Se over 65 
    va applicato uno sconto del 40%
  Altrimenti
    zero sconto
  ```
    
1. MILESTONE:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
2. MILESTONE:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.