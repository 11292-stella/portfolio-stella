# Test Report — Kiosk UI & Moduli Connessi

**Sistema:** Gestionale enterprise multi-modulo (hospitality & retail)  
**App testata:** kiosk_ui v1.8.0  
**Data:** Maggio 2026  
**Tester:** Stella Marucelli  
**Ambiente:** Demo (nota: sincronizzazione real-time non affidabile — test critici da ripetere in produzione)

---

## Riepilogo risultati

| Funzionalità testata | Esito | Sezione |
|---|---|---|
| Tipi di pagamento (cassa / kiosk) | ✅ Funziona | Impostazioni Kiosk |
| Configurazioni di visualizzazione | ⚠️ Parziale | Visualizzazione |
| Immagini categoria | ❌ Bug | Visualizzazione |
| Timeout di inattività | ✅ Funziona | Impostazioni Kiosk |
| Animazioni | ✅ Funziona | Impostazioni Kiosk |
| Overlay stagionali | ✅ Funziona | Impostazioni Kiosk |
| Creazione menu personalizzato | ✅ Funziona | Menu |
| Avviso inattività / manutenzione | ❌ Bug | Pagina iniziale |
| Scelta da portare via / mangiare qui | ⚠️ Da verificare | Flusso ordine |
| Creazione cataloghi personalizzati | ✅ Funziona | Cataloghi |
| Numerazione prefissi ordine | ⚠️ Non verificabile (demo) | Ordini |
| Configura Relazioni (abbinamenti) | ❌ Errore salvataggio | Relazioni |
| Icone e colori categorie | ✅ Funziona | Categorie |
| Assistente virtuale (app camerieri) | ⚠️ Parziale | App Camerieri |
| Modulo Gratta e Vinci — vendita | ❌ Bug contatore | Gratta e Vinci |

---

## Bug 1 — Immagini categoria non visibili (modalità non-griglia)

### Comportamento osservato

| Modalità visualizzazione | Immagini prodotti | Immagini categorie |
|---|---|---|
| Pagina intera (Griglia) | ✅ Visibili | ✅ Visibili |
| Sidebar laterale | ⚠️ Dipende dalla larghezza | ❌ Non visibili |
| Altre modalità | ✅ Visibili | ❌ Non visibili |

Durante il test è stato osservato che passando dalla modalità griglia alla sidebar, inizialmente sparivano anche le immagini dei prodotti — poi ricomparse allargando la finestra del browser. Le immagini categoria non sono ricomparse nemmeno dopo l'allargamento.

### Root cause hypothesis

Il problema potrebbe essere un **breakpoint CSS** che nasconde le immagini delle categorie sotto una certa larghezza, oppure un componente UI che non gestisce correttamente il ridimensionamento dinamico del layout.

**Azione consigliata:** testare su monitor full HD (1920×1080) e su schermi touch dedicati prima di classificare come bug confermato.

---

## Bug 2 — Avviso inattività e Avviso manutenzione non funzionanti

### Comportamento osservato

Le modifiche alle sezioni "Avviso inattività" e "Avviso manutenzione" nella configurazione pagina iniziale non producono alcun effetto visibile sull'interfaccia del kiosk.

Le impostazioni sembrano salvate correttamente dal back-office, ma non si riflettono sul frontend.

**Elemento chiave:** tutte le altre modifiche della pagina iniziale funzionano regolarmente → il problema è **isolato** a questi due componenti specifici, non sistemico.

**Azione consigliata:** verificare il binding front-end con le impostazioni del back-office per questi due componenti.

---

## Bug 3 — Errore salvataggio relazioni tra prodotti

### Comportamento osservato

Ogni tentativo di salvare una relazione tra prodotti (es. abbinamento Caffè Macchiato → Tortino al Cioccolato) restituisce il messaggio: `Errore nel salvare le relazioni`.

Bug riprodotto con diverse combinazioni di prodotti → **esclude** un problema specifico a una singola coppia. La funzionalità è completamente inutilizzabile.

**Azione consigliata:** analisi log API al momento del salvataggio.

---

## Bug 4 — Contatore vendite Gratta e Vinci non aggiornato

### Comportamento osservato

- Prodotti Gratta e Vinci venduti tramite cassa ✅
- Scontrini emessi correttamente ✅
- Sezione "Vendite" nel modulo GeV: contatore rimane invariato ❌

Non è chiaro se il problema riguardi la sincronizzazione real-time o un aggiornamento mancato del database.

---

## Da verificare con il team

**Codice accesso richiesto in modalità "Da portare via":** selezionando l'asporto, il sistema richiede un codice di accesso. Non è chiaro se sia una funzionalità intenzionale (riservata a operatori/clienti registrati) o un comportamento anomalo. Si richiede conferma al team di sviluppo.

---

## Note positive

- **Overlay stagionali:** particolarmente curati graficamente — contribuiscono significativamente alla qualità percepita dell'interfaccia
- **Assistente virtuale:** anche quando non fornisce risposta completa, indirizza correttamente l'utente verso la sezione giusta dell'app — utile per il personale
- **Icone MDI:** funzionano correttamente con formato `mdi-[nome] #[HEX]` — si suggerisce futuro miglioramento UX con selettore visivo per utenti non tecnici

---

## Bug aperti — priorità

| # | Problema | Priorità | Azione |
|---|---|---|---|
| 1 | Immagini categorie non visibili (non-griglia) | 🔴 Alta | Verificare breakpoint CSS / responsività |
| 2 | Avviso inattività e manutenzione non funzionanti | 🔴 Alta | Verificare binding front-end ↔ back-office |
| 3 | Errore salvataggio relazioni prodotti | 🔴 Alta | Analisi log API |
| 4 | Contatore vendite GеV non aggiornato | 🟡 Media | Verificare pipeline aggiornamento |
| 5 | Codice accesso in modalità asporto | ⚪ Da chiarire | Confermare se expected behavior |
| 6 | Numerazione prefissi ordine | 🟡 Media | Ripetere in produzione |

---

*Report prodotto nell'ambito di attività QA su sistema gestionale enterprise — dati aziendali omessi per NDA*
