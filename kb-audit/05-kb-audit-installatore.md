# KB Audit — Installatore (12 articoli)

**Sistema:** Gestionale enterprise multi-modulo (hospitality & retail)  
**Audience testata:** Installatore  
**Versione software:** v1.9.4  
**Data:** Maggio 2026  
**Tester:** Stella Marucelli  
**Stato:** ✅ Audit completato (12/12 articoli) — criticità rilevate e documentate

---

## Riepilogo risultati

| # | Articolo | Stato |
|---|---|---|
| 1 | Guida allo Scaling della Piattaforma | ❌ Audience errata |
| 2 | Errori Comuni Stampanti e Soluzioni | ⚠️ Da migliorare |
| 3 | Errori Comuni | ❌ Da riscrivere — duplicato |
| 4 | Setup Dispositivi Cameriere (Tablet Android) | ✅ OK |
| 5 | Setup Hardware Kiosk | ✅ OK |
| 6 | Registrazione Dispositivi e Operatori | ❌ Da riscrivere — developer puro |
| 7 | Installazione App Cassa (Windows e Android) | ✅ OK |
| 8 | Documentazione Installatori | ❌ Da eliminare — guscio vuoto |
| 9 | Requisiti Rete e Infrastruttura | ✅ OK — verificare domini e IP |
| 10 | Stampanti Fiscali Epson FP: Protocollo e Configurazione | ❌ Audience errata — developer puro |
| 11 | Configurazione Stampanti | ❌ Da riscrivere — frammento incompleto |
| 12 | Configurazione Stampanti ESC/POS e di Rete | ✅ OK |

**Sintesi:** 5 articoli OK, 2 da migliorare, 4 da riscrivere o eliminare, 2 con audience errata.

---

## Criticità principali

### ❌ Articoli con audience errata

**Guida allo Scaling della Piattaforma** — Documentazione DevOps pura  
L'articolo è taggato `installer` ma contiene esclusivamente documentazione infrastrutturale avanzata: Kubernetes, file YAML, `kubectl`, Prometheus. Nessuna attinenza con l'installazione in loco. Un installatore che lo apre non trova nulla di utile — e l'assistente AI potrebbe utilizzarlo per rispondere a domande operative con contenuti completamente fuori target. Azione: riassegnare ad audience `developer/operations`.

**Stampanti Fiscali Epson FP: Protocollo e Configurazione** — Developer puro  
Il titolo promette "Configurazione" ma il contenuto è quasi interamente protocollo di comunicazione a basso livello: formato PDU (STX/ETX/CKS), codici hex, checksum, snippet Dart, link esplicito a `/developer/api/api-escpos`. Mancano completamente le istruzioni operative che servono a un installer: accesso al pannello fisico, configurazione IP statico, verifica rete, impostazione reparti IVA da interfaccia. Azione: spostare in KB developer. Creare guida operativa separata per installer.

---

### ❌ Articoli da riscrivere

**Registrazione Dispositivi e Operatori** — Codice tecnico che seppellisce la procedura  
La procedura operativa reale (genera OTP → inseriscilo nell'app) è sepolta sotto decine di righe di codice tecnico: `curl`, JWT, Redis, SHA-256. Un installer non sa cosa siano. L'articolo va riscritto interamente in linguaggio operativo, eliminando tutto il codice sorgente.

**Documentazione Installatori** — Guscio vuoto  
Solo 3 bullet senza contenuto reale. I link interni non esistono. Identico al pattern "Documentazione Distributori" già bocciato per la stessa ragione. Da eliminare o fondere con un articolo-indice reale.

**Errori Comuni** — Duplicato inutile  
Copia ridotta e peggiore di "Errori Comuni Stampanti". ERR01.16 è già coperto meglio altrove, i problemi di connessione sono troppo generici. Da eliminare o fondere.

**Configurazione Stampanti** — Frammento non finito  
Frammento incompleto: un bullet che ripete quanto già detto nell'art. 10. Il titolo dichiara una copertura generale (tutti i tipi di stampante) che il contenuto non raggiunge nemmeno lontanamente. Da riscrivere da zero con percorsi di navigazione completi nell'interfaccia Impronto.

---

### ⚠️ Articoli da migliorare

**Errori Comuni Stampanti e Soluzioni**  
Prima metà eccellente: errori pratici da campo, tabella codici Epson leggibile, formato utile. La seconda metà cade in documentazione developer pura: `PrintRouterService`, `EpsonFpDriver`, console Flutter. Le due parti vanno separate: la metà operativa rimane nell'articolo installer, la metà tecnica si sposta nella KB developer. Nota: ERR01.16 appare per la terza volta in tre articoli diversi — da centralizzare in un unico punto di riferimento.

---

### ✅ Articoli pubblicabili — punti di forza

**Setup Hardware Kiosk** — Uno degli articoli meglio realizzati dell'intera KB. Pratico, completo, zero tecnicismi. Copre tutti i passaggi di installazione fisica con linguaggio operativo. Unica verifica: la nota iOS indicata "in roadmap" potrebbe essere già disponibile in v1.9.4.

**Requisiti Rete e Infrastruttura** — Tabelle ben costruite, zero tecnicismi inutili. Copre porte, bandwidth, firewall, WiFi, LAN-only, VPN. FAQ particolarmente utile per domande da campo. Unico punto: verificare che i domini `*.pos-enterprise.com` e gli IP del broker NATS citati corrispondano all'ambiente di produzione reale.

**Configurazione Stampanti ESC/POS e di Rete** — Copre USB, Ethernet, Bluetooth, routing, troubleshooting. Nessun costrutto di codice sorgente. Tabella modelli, passi numerati, FAQ utile. Pubblicabile.

**Installazione App Cassa (Windows e Android)** — Chiaro, operativo, copre entrambe le piattaforme. Unico punto: la menzione della porta NATS 4222 potrebbe confondere un installer — aggiungere una riga di spiegazione non tecnica.

---

### 🔴 Problema strutturale trasversale — Articoli ibridi developer/installer

Pattern ricorrente in 3 articoli: l'AI generatrice della KB ha mescolato procedure operative e documentazione tecnica di backend nello stesso articolo. Il risultato è un testo che inizia come guida per installer e scivola progressivamente in documentazione per sviluppatori, senza segnalare il cambio di contesto.

**Impatto sull'assistente AI:** il chatbot di supporto potrebbe indicizzare questi articoli e restituire a un installer risposte con JWT, Redis, comandi `curl` e codice sorgente Flutter — contenuti non solo inutili ma potenzialmente disorientanti per chi deve fare un'installazione fisica.

**Correzione:** separazione netta dei layer di documentazione. Ogni articolo deve servire un solo profilo di lettore.

---

### 🟡 Gap di contenuto confermato

**Modulo Gratta e Vinci — Articolo assente**  
Confermato da test diretto sul chatbot AI: nessun articolo copre il modulo Gratta e Vinci. Il chatbot non è in grado di rispondere a domande su questa funzionalità. Articolo da creare ex novo.

---

## Output prodotto

- Audit di 12 articoli con giudizio strutturato (OK / Da migliorare / Da riscrivere / Audience errata)
- Identificazione pattern ricorrenti: articoli ibridi, duplicati, audience errata
- Verifica impatto su assistente AI per ogni criticità
- Gap di contenuto confermato (modulo Gratta e Vinci)
- Azioni consigliate con priorità

---

*Report prodotto nell'ambito di attività QA su sistema gestionale enterprise — dati aziendali omessi per NDA*
