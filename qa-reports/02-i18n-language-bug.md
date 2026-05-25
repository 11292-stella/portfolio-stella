# Localization Testing — Bug "Lingua Volatile" (i18n)

**Sistema:** Gestionale enterprise multi-modulo (hospitality & retail)  
**App testate:** Web App, App Cassa  
**Versione:** v1.8.10  
**Data:** Maggio 2026  
**Tester:** Stella Marucelli  
**Stato:** ✅ Test completato — bug confermati e documentati

---

## Scope del test

Verifica completa del modulo di localizzazione su tutte le applicazioni della piattaforma:
- Comportamento selezione lingua al login
- Traduzione elementi UI statici (bottoni, etichette)
- Traduzione contenuti dinamici da database
- Gestione finestre modali
- Logica di validazione modulo fatturazione SDI

---

## Riepilogo risultati

| Funzionalità | Esito | Note |
|---|---|---|
| Bug "Lingua Volatile" — selezione lingua al login | ❌ Bug | La lingua scelta viene ignorata dopo il redirect |
| Traduzione UI — bottoni ed etichette | ✅ Funziona | Carrello, Paga, Aggiungi: tutti corretti |
| Contenuto dinamico (titoli prodotti, passi procedura) | ✅ Funziona | Database configurato correttamente |
| Elementi hardcoded UI (Next, Back) | ⚠️ Parziale | Ancora in inglese — non collegati al sistema i18n |
| Finestre modali App Cassa | ✅ Funziona | Tutte le modali configurate correttamente tradotte |
| Modale Pagamento alla Cassa | ⚠️ Parziale | Rimasta in italiano — da verificare con il team |
| Fatturazione B2B — Validazione SDI | ✅ Funziona | Errore bloccante controllato confermato come expected |
| Campo "Sconti" nello scontrino | ⚠️ Parziale | Campo vuoto nonostante sconto applicato correttamente |

---

## Bug principale — "Lingua Volatile"

### Descrizione

La preferenza di lingua selezionata al login viene accettata superficialmente ma non viene persistita nel contesto applicativo. Il bug è riproducibile con consistenza.

### Flusso riproducibile

```
1. Login screen → utente seleziona "Italiano" dalla tendina lingua
   → I testi cambiano in tempo reale (es. "Sign in" → "Accedi")
   → Conferma che la selezione viene recepita lato CLIENT

2. Utente inserisce credenziali → autenticazione completata
   → Sistema esegue redirect verso Dashboard principale

3. Dashboard caricata → lingua torna alla configurazione di default (Inglese)
   → La scelta effettuata un istante prima viene completamente ignorata
   → Come se non fosse mai stata comunicata al backend
```

### Root cause hypothesis

Il client recepisce la selezione della lingua e la applica localmente, ma **non la passa al backend** durante il processo di autenticazione. Al redirect post-login, il backend carica la lingua dal profilo utente (o dal default di sistema), sovrascrivendo la preferenza espressa.

Possibili cause:
- La selezione lingua al login non viene inclusa nel payload della richiesta di autenticazione
- Il token di sessione non trasporta la preferenza linguistica
- Il backend non espone un endpoint per aggiornare la lingua prima del redirect

---

## Analisi struttura sistema i18n

Dal comportamento osservato, il sistema di traduzione è strutturato su due livelli con logiche distinte:

| Livello | Tipo | Descrizione | Stato |
|---|---|---|---|
| 1 | Hardcoded (UI statica) | Elementi come "Next" e "Back" compilati direttamente nel codice frontend — non collegati a un sistema i18n | ❌ Bug |
| 2 | Database (Contenuto dinamico) | Titoli prodotti e istruzioni recuperati dal DB in base alla lingua configurata | ✅ Funziona |

---

## Bug aperti — priorità

| # | Bug / Anomalia | Priorità |
|---|---|---|
| 1 | Lingua Volatile — selezione ignorata dopo login | 🔴 Alta |
| 2 | Bottoni hardcoded (Next, Back) non tradotti | 🟡 Media |
| 3 | Campo "Sconti" vuoto nello scontrino | 🟡 Media |
| 4 | Modale Pagamento alla Cassa in italiano | 🟢 Bassa |

---

## Output prodotto

- Bug report strutturato con flusso di riproduzione step-by-step
- Tabella elementi UI testati con esiti per ciascuno
- Analisi architetturale del sistema i18n (livelli hardcoded vs database)
- Root cause hypothesis con scenari alternativi per i casi ambigui
- Raccomandazioni prioritizzate al team di sviluppo

---

*Report prodotto nell'ambito di attività QA su sistema gestionale enterprise — dati aziendali omessi per NDA*
