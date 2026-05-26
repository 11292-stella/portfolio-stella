export const qaReports = [
  {
    id: "01",
    titolo: "Security Audit — XSS / Script Injection",
    sistema: "Gestionale enterprise multi-modulo (hospitality & retail)",
    data: "Aprile 2026",
    stato: "⚠️ Criticità rilevate",
    statoClass: "warning",
    sintesi:
      "Vulnerabilità XSS confermata su moduli Admin e Kiosk. La validazione server è attiva solo su alcuni endpoint, lasciando altri completamente esposti a script injection. Vettore completo: Backend → Database → Rendering Kiosk cliente.",
    bugsAperti: [
      { area: "Info Azienda", desc: "XSS: tag script accettati senza sanitizzazione", severita: "🔴 CRITICA" },
      { area: "Catalogo / Kiosk", desc: "XSS propagato al Kiosk — Output Encoding assente", severita: "🔴 CRITICA" },
      { area: "Fatturazione fiscale", desc: "Bug validazione blocca emissione documenti fiscali", severita: "🟠 BLOCCANTE" },
    ],
    attivita: [
      "Security testing su 4 moduli",
      "Payload injection manuale",
      "Analisi root cause backend/frontend",
      "Bug report strutturato al team",
    ],
    badge: "danger",
  },
  {
    id: "02",
    titolo: 'Localization Testing — Bug "Lingua Volatile" (i18n)',
    sistema: "Gestionale enterprise multi-modulo · v1.8.10",
    data: "Maggio 2026",
    stato: "✅ Bug confermati e documentati",
    statoClass: "success",
    sintesi:
      "La preferenza lingua selezionata al login non viene persistita: il client recepisce la scelta ma non la passa al backend durante l'autenticazione. Al redirect, il backend ricarica la lingua dal profilo utente sovrascrivendo la preferenza.",
    bugsAperti: [
      { area: "Login flow", desc: "Lingua volatile — scelta ignorata dopo redirect", severita: "🔴 Alta" },
      { area: "UI statica", desc: "Bottoni Next/Back non collegati al sistema i18n", severita: "🟡 Media" },
      { area: "Scontrino", desc: "Campo Sconti vuoto nonostante sconto applicato", severita: "🟡 Media" },
    ],
    attivita: [
      "Test completo modulo i18n su tutte le app",
      "Analisi architetturale sistema traduzione (2 livelli)",
      "Flusso riproduzione step-by-step",
      "Root cause hypothesis con scenari alternativi",
    ],
    badge: "info",
  },
  {
    id: "03",
    titolo: "Test Report — Kiosk UI & Moduli Connessi",
    sistema: "Gestionale enterprise · kiosk_ui v1.8.0",
    data: "Maggio 2026",
    stato: "🔴 Bug multipli rilevati",
    statoClass: "danger",
    sintesi:
      "Test su 15 funzionalità del modulo Kiosk. 4 bug confermati: immagini categorie assenti in modalità non-griglia, avvisi inattività/manutenzione non funzionanti, errore salvataggio relazioni prodotti, contatore vendite Gratta e Vinci non aggiornato.",
    bugsAperti: [
      { area: "Visualizzazione", desc: "Immagini categorie assenti in modalità non-griglia", severita: "🔴 Alta" },
      { area: "Pagina iniziale", desc: "Avviso inattività/manutenzione non funzionanti", severita: "🔴 Alta" },
      { area: "Relazioni prodotti", desc: "Errore salvataggio — funzionalità inutilizzabile", severita: "🔴 Alta" },
    ],
    attivita: [
      "Test di 15 funzionalità Kiosk",
      "Verifica cross-modulo (cassa, KDS, signage)",
      "Analisi breakpoint CSS",
      "Documentazione note positive e comportamenti attesi",
    ],
    badge: "warning",
  },
]

export const kbAudits = [
  {
    id: "04",
    titolo: "KB Audit — Admin Ristoratore",
    articoli: 19,
    data: "Maggio 2026",
    sistema: "Gestionale enterprise · v1.9.4",
    risultati: { ok: 0, avvisi: 14, bocciati: 3, bloccati: 2 },
    critiche: [
      {
        label: "Target errato",
        desc: "Documentazione DevOps/Developer pubblicata su articoli per ristoratori (Keycloak, JWT, kubectl)",
      },
      {
        label: "Percorsi inesistenti",
        desc: "3 percorsi di navigazione errati verificati su interfaccia reale — l'AI restituirà istruzioni non riproducibili",
      },
      {
        label: 'Sezione «Vedi Anche»',
        desc: "Quasi tutti i rimandi puntano a /installer/ o /developer/ — fuori target sistematico",
      },
    ],
    output:
      "19 articoli auditati · Discrepanze software/doc verificate su interfaccia reale · Mappa rischi assistente AI · Lista termini tecnici fuori target con sostituzioni",
    badge: "warning",
  },
  {
    id: "05",
    titolo: "KB Audit — Installatore",
    articoli: 12,
    data: "Maggio 2026",
    sistema: "Gestionale enterprise · v1.9.4",
    risultati: { ok: 5, avvisi: 2, bocciati: 4, bloccati: 1 },
    critiche: [
      {
        label: "Articoli ibridi developer/installer",
        desc: "3 articoli iniziano come guide operative e scivolano in documentazione backend (JWT, Redis, Flutter) senza segnalarlo",
      },
      {
        label: "Gap di contenuto",
        desc: "Nessun articolo copre il modulo Gratta e Vinci — confermato dal test diretto sul chatbot AI",
      },
      {
        label: "Duplicati",
        desc: "ERR01.16 appare in 3 articoli distinti — rischio incoerenza nelle risposte AI",
      },
    ],
    output:
      "12 articoli auditati · Pattern ricorrenti identificati · Gap di contenuto confermato · Impatto su chatbot AI documentato · Azioni consigliate con priorità",
    badge: "info",
  },
  {
    id: "06",
    titolo: "KB Audit — Utente Operatore",
    articoli: 13,
    data: "Maggio 2026",
    sistema: "Gestionale enterprise · v1.9.4",
    risultati: { ok: 3, avvisi: 4, bocciati: 2, bloccati: 2 },
    critiche: [
      {
        label: "🔴 Vulnerabilità sicurezza",
        desc: "L'articolo dichiara blocco PIN dopo 3 tentativi — dal test reale: nessun limite applicato. Il chatbot AI informa gli operatori di una protezione che non esiste.",
      },
      {
        label: "Bug critici ordini asporto",
        desc: "4 bug attivi (KDS, sincronizzazione stati, pagamento, persistenza) rendono l'articolo non indicizzabile — genera istruzioni operative errate",
      },
      {
        label: "Termini backend in risposte AI",
        desc: "Redis, NATS, TTL, SALE/REFUND/FLOAT usati come nomi di campo — l'AI li restituisce agli operatori generando confusione",
      },
    ],
    output:
      "13 articoli auditati · Bug critici con riproduzione step-by-step · Segnalazione urgente vulnerabilità PIN · Rischi AI mappati per ogni articolo",
    badge: "danger",
  },
]
