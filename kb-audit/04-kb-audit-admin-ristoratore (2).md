# KB Audit — Admin Ristoratore (19 articoli)

**Sistema:** Gestionale enterprise multi-modulo (hospitality & retail)  
**Audience testata:** Admin Ristoratore  
**Versione software:** v1.9.4  
**Data:** Maggio 2026  
**Tester:** Stella Marucelli  
**Stato:** ✅ Audit completato — criticità rilevate e documentate

---

## Riepilogo risultati

| # | Articolo | Stato |
|---|---|---|
| 1 | Documentazione Amministratori | ⚠️ Validato con correzione minore |
| 2 | Configurazione Iniziale del Ristorante | ⚠️ Validato con correzioni |
| 3 | Varianti, Modificatori e Extra | ⚠️ Validato con discrepanza funzionale |
| 4 | Template Scontrini e Stampe | ⚠️ Validato con correzioni |
| 5 | Configurazione Stazioni Cucina | ❌ Non verificabile — bloccato |
| 6 | Soglie Varianza e Alert Automatici | ❌ Parzialmente verificabile — bloccato |
| 7 | Configurazione Slot e Capacità Prenotazioni | ⚠️ Validato — percorso errato |
| 8 | Sistema di Stampa: Regole e Blocchi | ❌ Bocciato — duplicato fuori target |
| 9 | Configurazione Sale e Disposizione Tavoli | ⚠️ Validato con discrepanze |
| 10 | Configurazione Registratori di Cassa e Causali | ⚠️ Validato con correzioni |
| 11 | Gestione Metodi di Pagamento | ⚠️ Validato con discrepanze |
| 12 | Gestione Menu | ❌ Bocciato — contenuto insufficiente |
| 13 | Configurazione Layout Cassa | ⚠️ Validato con correzioni |
| 14 | Gestione Utenti e Ruoli | ❌ Bocciato — target errato |
| 15 | Configurazione App Cameriere | ⚠️ Validato parzialmente |
| 16 | Configurazione Takeaway e Zone Consegna | ⚠️ Parzialmente verificabile |
| 17 | Configurazione Kiosk | ⚠️ Validato ma incompleto |
| 18 | Categorie Gerarchiche | ⚠️ Validato — da riscrivere nel linguaggio |
| 19 | Catalogo Prodotti: Creazione e Gestione | ⚠️ Validato — da rifinire nei termini |

**Sintesi:** 3 articoli bocciati, 2 non verificabili (bloccano la pubblicazione), 14 validati con correzioni di varia entità.

---

## Criticità principali

### ❌ Articoli bocciati o non pubblicabili

**Disaster Recovery e Backup** — Target errato  
L'articolo è tecnicamente ineccepibile ma completamente fuori target per l'audience. Il contenuto è estratto da un manuale DevOps (Continuous backup Oplog-based, NATS stateless, Redis Streams, GitOps) e non fornisce nulla di utile a un ristoratore. Il 70% del contenuto è composto da righe di comando (`atlas backups`, `kubectl`, `pg_dump`) inutilizzabili e pericolose per un utente non tecnico. Manca completamente la risposta alle domande operative reali: "La cassa può emettere scontrini durante un ripristino?"

**Gestione Utenti e Ruoli** — Contenuto misto, target errato  
L'articolo mescola due livelli di utenza incompatibili: la sezione "Operatori con PIN" (utile all'Admin) è sepolta sotto documentazione per sviluppatori (Keycloak, JWT, RS256, SSO, token dispositivo, `.env` con `SKIP_AUTH=true`). I "Vedi Anche" puntano a `/developer/architecture/`. Va separato in due articoli distinti.

**Gestione Menu** — Contenuto insufficiente  
Quasi vuoto: due sezioni con elenchi puntati minimali, nessun percorso di navigazione, nessuna istruzione operativa. L'assistente AI non ha materiale sufficiente per rispondere a domande specifiche.

**Sistema di Stampa: Regole e Blocchi** — Duplicato  
Contenuto sostanzialmente identico all'articolo "Template Scontrini e Stampe" ma in versione ancora più tecnica e priva degli esempi pratici. Tutti i rimandi puntano a sezioni per installatori e sviluppatori.

---

### ⚠️ Discrepanze software/documentazione rilevate

**Varianti, Modificatori e Extra**  
L'articolo dichiara che "la pressione lunga su un tasto prodotto forza l'apertura del pannello varianti". Dal test reale: il pannello si apre con pressione normale. La sezione "Pressione Lunga in Cassa" va aggiornata o eliminata. Stessa discrepanza confermata anche nell'articolo Configurazione Layout Cassa.

**Assistente AI (Widget di Supporto)**  
L'articolo indica che l'assistente è accessibile tramite un "Overlay nel menu impostazioni" dell'App Cassa. Dai test sulla versione 1.9.4+b904 la funzionalità non risulta presente. Nessun widget o voce di menu dedicata individuata.

**Configurazione Slot e Capacità Prenotazioni**  
Il percorso indicato `Capacità > Configurazione Slot` non esiste. La sezione reale si raggiunge da `Gestione Locale > Capacità Produzione`.

**Configurazione Kiosk**  
L'articolo indica `Impostazioni > Kiosk`. Il percorso reale è `Dispositivi > Kiosks`. L'articolo copre circa il 20% delle funzionalità reali disponibili.

**Configurazione Stazioni Cucina** — Bloccato  
Il percorso `/admin/configuration/stazioni-cucina` non è mai stato trovato nonostante 5 percorsi alternativi verificati. Se pubblicato, l'assistente AI risponderà con percorsi inesistenti.

---

### 🔴 Problema strutturale trasversale — Sezione "Vedi Anche"

In quasi tutti gli articoli analizzati, i rimandi "Vedi Anche" puntano a documentazione fuori target:
- `/installer/` — guide per installatori tecnici
- `/developer/` — documentazione per sviluppatori
- `/developer/architecture/` — architettura di sistema

**Impatto:** il ristoratore che segue questi rimandi si trova su documentazione incomprensibile. L'assistente AI potrebbe indicizzare contenuti fuori target e usarli per rispondere a domande del ristoratore in modo inappropriato.

**Correzione:** tutti i rimandi negli articoli filtrati per Admin Ristoratore devono puntare esclusivamente ad altri articoli dello stesso filtro.

---

### 🟡 Pattern ricorrente — Nomenclatura tecnica fuori target

Quasi tutti gli articoli validati contengono termini tecnici inutilizzabili per l'audience:

| Termine tecnico | Sostituzione consigliata |
|---|---|
| `valuationMethod` | Metodo di valorizzazione magazzino |
| `SKU` | Codice articolo |
| `isSaleable`, `isStockable` | Descrivere il comportamento operativo |
| `categoryId`, `parentId` | Non necessari all'utente |
| `PrinterDevice`, `PrintLayout` | Stampante, Modello di stampa |
| `CASH`, `CARD`, `MIXED` | Contanti, Carta, Misto |
| Snippet JSON (vari articoli) | Da eliminare o isolare fuori dall'indicizzazione AI |

---

## Output prodotto

- Audit di 19 articoli con giudizio strutturato (Approvato / Validato con correzioni / Bocciato)
- Verifica percorsi di navigazione su interfaccia reale per ogni articolo
- Identificazione discrepanze software vs documentazione con riproduzione step-by-step
- Mappatura rischi per l'assistente AI (risposte fuorvianti, percorsi inesistenti, dati non verificati)
- Lista completa termini tecnici fuori target con sostituzioni consigliate
- Analisi problema strutturale trasversale sezione "Vedi Anche"

---

*Report prodotto nell'ambito di attività QA su sistema gestionale enterprise — dati aziendali omessi per NDA*
