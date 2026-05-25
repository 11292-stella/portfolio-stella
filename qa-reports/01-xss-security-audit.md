# Security Audit — XSS / Script Injection

**Sistema:** Gestionale enterprise multi-modulo (hospitality & retail)  
**Ambiente:** Demo — accesso utente base  
**Data:** Aprile 2026 · Sessione Vol. V  
**Tester:** Stella Marucelli  
**Stato:** ⚠️ Criticità rilevate — vulnerabilità confermata  

---

## Contesto

Durante una sessione di security audit focalizzata sulla resistenza del sistema ad attacchi di tipo Script Injection, è emersa un'incoerenza critica nella sanitizzazione degli input: la validazione lato server è attiva solo su alcuni moduli, lasciando altri completamente esposti.

---

## Risultati del test — modulo per modulo

| Modulo / Ambito | Payload testato | Esito | Analisi tecnica |
|---|---|---|---|
| Anagrafica Operatori | `<script>alert(1)</script>` | ✅ PROTETTO | HTTP 422 — validazione server attiva. Console: `Parameters validation error` |
| Info Generali Azienda (Nome, Cognome, Ragione Sociale) | `<script>alert(1)</script>` | ❌ VULNERABILE | Il sistema accetta e salva il tag script senza alcun filtro. Campi non sanitizzati. **Criticità: Alta** |
| Catalogo Prodotti | `<script>window.location...</script>` | ❌ VULNERABILE | Script memorizzato nel database e visualizzato letteralmente nel backend senza filtro in output |
| Interfaccia Kiosk (cliente) | Payload propagato da Catalogo | ❌ VULNERABILE (GRAVE) | Lo script iniettato lato backend viene propagato e renderizzato sul Kiosk clienti. Output Encoding assente nel layer di rendering |

---

## Root cause hypothesis

Il sistema applica la validazione in modo **non uniforme** tra i moduli:

- I moduli protetti restituiscono HTTP 422 con validazione server-side
- I moduli vulnerabili non implementano né **input sanitization** né **output encoding**
- La propagazione al Kiosk conferma che il dato viene passato raw tra layer senza alcuna trasformazione

Il vettore di attacco completo è:  
`Backend admin (campo prodotto) → Database → Rendering Kiosk cliente`

---

## Impatto

Un attaccante con accesso al pannello admin (anche limitato) può iniettare payload nel catalogo prodotti che vengono propagati e renderizzati sull'interfaccia pubblica del Kiosk rivolta al cliente finale.

---

## Output prodotto

- Bug report strutturato consegnato al team di sviluppo
- Tabella moduli testati con esiti e analisi tecnica per ciascuno
- Ipotesi root cause backend/frontend documentata
- Raccomandazione: implementare output encoding consistente su tutti i layer di rendering

---

## Bug aperti — riepilogo severità

| # | Area | Descrizione | Severità |
|---|---|---|---|
| 1 | Info Azienda | XSS: tag script accettati e salvati senza sanitizzazione | 🔴 CRITICA |
| 2 | Catalogo / Kiosk | XSS propagato al Kiosk cliente — Output Encoding assente | 🔴 CRITICA |
| 3 | Fatturazione fiscale | Bug validazione blocca emissione di tutti i documenti fiscali | 🟠 BLOCCANTE |
| 4 | Digital Signage | Impossibile cambiare profilo e playlist — test bloccato | 🟠 BLOCCANTE |
| 5 | Kiosk — Logo & Header | Logo e header assenti in tutte le configurazioni | 🟡 ALTA |
| 6 | Playlist & Palinsesti | Eliminazione non definitiva — elementi riappaiono | 🟡 ALTA |
| 7 | App Tavoli/Asporto | Font tema scuro illeggibili — menu non fruibile | 🟡 ALTA |

---

*Report prodotto nell'ambito di attività QA su sistema gestionale enterprise — dati aziendali omessi per NDA*
