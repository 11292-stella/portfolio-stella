# KB Audit — Utente Operatore (13 articoli)

**Sistema:** Gestionale enterprise multi-modulo (hospitality & retail)  
**Audience testata:** Utente Operatore  
**Versione software:** v1.9.4  
**Data:** Maggio 2026  
**Tester:** Stella Marucelli  
**Stato:** ✅ Audit completato — bug critici e rischi AI documentati

---

## Riepilogo risultati

| # | Articolo | Stato |
|---|---|---|
| 1 | Prenotazioni: Creare, Modificare e Annullare | ✅ OK |
| 2 | Gestione Tavoli e Sale: Guida Operatore | ⚠️ Troppo tecnico |
| 3 | Ciclo di Vita della Sessione | ✅ OK — eccellente |
| 4 | Cos'è la Prima Nota | ⚠️ Da migliorare |
| 5 | Kitchen Display: Flusso Ordini in Cucina | ✅ OK |
| 6 | Guide Utente | ❌ Incompleto — non indicizzabile |
| 7 | Domande Frequenti | ⚠️ Da migliorare |
| 8/9 | Sconti, Promozioni e Note Ordine | ❌ Discrepanza software critica |
| 11 | Pagamenti: Contanti, Carta, Buoni Pasto e Split | ⚠️ Revisione UI necessaria |
| 12 | Ordini Asporto e Consegna | 🔴 Bug critici — escludere dall'AI |
| 13 | Guida Completa Operatore Cassa | 🔴 Errore di sicurezza |

**Sintesi:** 3 articoli OK, 4 da migliorare, 2 con bug critici che rendono il contenuto non pubblicabile, 1 con errore di sicurezza attivo, 1 incompleto.

---

## Criticità principali

### 🔴 Bug critici — articoli da escludere immediatamente

**Ordini Asporto e Consegna** — 4 bug funzionali attivi  
L'articolo descrive un flusso operativo che non corrisponde al comportamento reale del software nella versione v1.9.4. Bug rilevati durante il test:

1. **KDS:** righe prodotto vuote nel display cucina
2. **Sincronizzazione stati:** KDS e Cassa non si parlano — gli stati non si aggiornano in modo coerente
3. **Pagamento:** il sistema forza la chiusura immediata, eliminando di fatto l'opzione "pagamento al ritiro"
4. **Persistenza:** le comande rimangono bloccate sul KDS dopo la chiusura dell'ordine

Se indicizzato dall'assistente AI, questo articolo genererà istruzioni operative errate per ogni domanda sugli ordini asporto. Da escludere dall'indicizzazione fino alla risoluzione dei bug.

**Guida Completa Operatore Cassa** — Errore di sicurezza con vulnerabilità attiva  
L'articolo dichiara che il sistema blocca il PIN dopo 3 tentativi errati. Dal test sul software reale: il sistema non applica alcun limite — i tentativi di accesso sono illimitati. L'assistente AI informerà gli operatori di una protezione che non esiste, inducendoli a ritenere il sistema più sicuro di quanto non sia. Segnalazione urgente al team tecnico. Correzione dell'articolo non può attendere.

---

### ❌ Discrepanza software/documentazione

**Sconti, Promozioni e Note Ordine** — Comportamento silenzioso non documentato  
La guida descrive che l'applicazione di uno sconto genera una "riga separata negativa" nel riepilogo ordine. Dal test: il software applica lo sconto in modo silenzioso — il box "Sconti" nel riepilogo risulta vuoto (—), senza nessuna riga visibile. L'assistente AI fornirà istruzioni errate a ogni operatore che chiede come verificare se uno sconto è stato applicato. Azione: aggiornare la documentazione se il comportamento silenzioso è definitivo, oppure segnalare come bug se la riga visibile è il comportamento atteso.

---

### ⚠️ Articoli con linguaggio fuori target per l'AI

**Gestione Tavoli e Sale: Guida Operatore** — Termini backend che generano risposte fuorvianti  
L'articolo contiene riferimenti diretti a infrastrutture backend: Redis, NATS, TTL. Questi termini non sono comprensibili per un operatore non tecnico — e costituiscono un rischio specifico per l'assistente AI: se li indicizza, potrebbe restituirli nelle risposte all'utente quando descrive lo stato dei tavoli, generando confusione anziché supporto. Correzione: sostituire tutti i termini tecnici con linguaggio operativo (es. "aggiornamento in tempo reale" invece di "TTL Redis").

**Cos'è la Prima Nota** — Nomi di campi database nelle risposte AI  
L'articolo usa termini come `SALE`, `REFUND`, `FLOAT` (nomi di campi DB), `append-only`, "immutabile". Se restituiti dall'assistente AI in risposta a domande operative, questi termini generano confusione nel lettore non tecnico. Correzione: `SALE` → Vendita, `REFUND` → Rimborso, `FLOAT` → Fondo Cassa. Spiegare il concetto di non modificabilità con linguaggio operativo.

---

### ⚠️ Funzionalità documentate ma assenti dall'interfaccia

**Pagamenti: Contanti, Carta, Buoni Pasto e Split** — Funzionalità "Mancia" non implementata  
La guida descrive la gestione della mancia come funzionalità presente. Dal test: la funzionalità non esiste nell'interfaccia — viene gestita solo come "resto teorico" nel flusso banco, che chiude l'ordine istantaneamente impedendo qualsiasi gestione differenziata. Inoltre il flusso banco e il flusso tavolo non sono distinti nella guida, generando istruzioni inapplicabili a seconda del contesto. Correzione: distinguere esplicitamente i due flussi, rimuovere tutti i riferimenti alla mancia fino a implementazione.

---

### ✅ Articoli eccellenti — punti di forza

**Ciclo di Vita della Sessione** — Il migliore dell'intera KB per questa audience  
Spiega con chiarezza concetti operativi complessi (fondo cassa, conteggio blind, varianza) senza tecnicismi di codice. Particolarmente prezioso per l'assistente AI: fornisce il contesto necessario per spiegare a un operatore perché una sessione risulta bloccata in stato `pending_review` — uno dei casi di supporto più frequenti.

**Prenotazioni: Creare, Modificare e Annullare** — Completo e pronto  
Linguaggio adeguato al profilo operatore, FAQ che coprono efficacemente i casi d'uso principali. Pronto per l'indicizzazione AI senza modifiche.

**Kitchen Display: Flusso Ordini in Cucina** — Funzionale e preciso  
Descrizione accurata del funzionamento fisico (touch vs bump bar) e visivo (timer e stati). La sezione sulla gestione delle portate è essenziale per prevenire incomprensioni tra sala e cucina — uno dei casi di supporto più comuni.

---

## Output prodotto

- Audit di 13 articoli con giudizio strutturato
- Identificazione bug critici con riproduzione step-by-step
- Mappatura rischi specifici per l'assistente AI (risposte fuorvianti, dati di sicurezza errati, termini backend non filtrati)
- Discrepanze software vs documentazione documentate con evidenza
- Segnalazione vulnerabilità sicurezza PIN con richiesta di intervento urgente

---

*Report prodotto nell'ambito di attività QA su sistema gestionale enterprise — dati aziendali omessi per NDA*
