export const qaStats = [
  { value: "47+", label: "Bug Documentati" },
  { value: "34+", label: "Fix Confermati" },
  { value: "72%", label: "Impatto Diretto" },
  { value: "8+", label: "Bug Critici Analizzati" },
]

export const testingActivities = [
  { icon: "🔁", label: "Regression Testing", desc: "Verifica sistematica dopo ogni rilascio" },
  { icon: "📱", label: "APK Troubleshooting", desc: "Analisi build Android su dispositivi reali" },
  { icon: "🌍", label: "Localization Testing", desc: "Verifica comportamento multilingua" },
  { icon: "🔗", label: "End-to-End Testing", desc: "Validazione flussi completi cross-app" },
  { icon: "🛡️", label: "Security Findings", desc: "Identificazione vulnerabilità XSS" },
  { icon: "📋", label: "Release Verification", desc: "Controllo qualità pre e post deploy" },
]

export const caseStudies = [
  {
    title: "Crash Android Kiosk",
    tipo: "Bug Investigation",
    problema: "L'app rimaneva bloccata sulla splash screen su dispositivi reali.",
    causa: "Libreria nativa libmpv.so assente nell'APK di produzione.",
    tool: "Android Studio, ADB, logcat",
    output: "Bug report strutturato consegnato al team con stack trace e steps to reproduce.",
    badge: "danger",
  },
  {
    title: "Loop Infinito Signage",
    tipo: "Regression Testing",
    problema: "Il refresh automatico causava freeze progressivi sull'intera piattaforma.",
    causa: "Comportamento sistemico cross-app non rilevato nei test precedenti.",
    tool: "Test case manuali, sessioni multi-istanza, report Notion",
    output: "Documentazione regressione con frequenza di riproduzione e impatto misurato.",
    badge: "warning",
  },
  {
    title: "Bug Localizzazione i18n",
    tipo: "Localization Testing",
    problema: "La lingua selezionata al login veniva persa dopo il redirect alla dashboard.",
    causa: "Stato client non persistito correttamente nel flusso di autenticazione.",
    tool: "Browser DevTools, network inspector, test multilingua",
    output: "Bug documentato con ipotesi tecnica, flow chart del problema e steps riproduzione.",
    badge: "info",
  },
]
