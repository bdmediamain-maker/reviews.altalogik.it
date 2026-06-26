// ─────────────────────────────────────────────────────────────────────────────
// ALTALOGIK · /reviews · CONTENUTI EDITORIALI
// ─────────────────────────────────────────────────────────────────────────────
// Pagina-portfolio editoriale: video testimonianze, case study (PDF),
// articoli/news, clienti & partner. Sostituire i campi `*Url` quando
// il materiale reale è pronto. Quando tutto è in posizione → PREVIEW_MODE=false.
// ─────────────────────────────────────────────────────────────────────────────

export const PREVIEW_MODE = true;

// Faux-depth: quanti elementi "in più" mostrare bloccati/sfocati sotto ogni
// sezione, per suggerire profondità di catalogo prima di popolarla davvero.
export const moreTeasers = {
  videos: 0,
  caseStudies: 0,
};

// Link CTA — sostituire con calendario reale (Calendly / GHL / ecc.)
export const ctaLink = "https://cal.com/federicotrotta/altalogik-call";

export const brand = {
  name: "Altalogik",
  suffix: "/reviews",
};

// ── NAV ─────────────────────────────────────────────────────────────────────
export const nav = {
  links: [
    { label: "01 · Video", href: "#video" },
    { label: "02 · Case study", href: "#case-study" },
    { label: "03 · News", href: "#news" },
    { label: "04 · Partner", href: "#clienti" },
  ],
};

// ── HERO ────────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "Altalogik · Risultati reali",
  title: "Quello che abbiamo fatto.\nRaccontato da chi c'era.",
  subtitle:
    "Video, casi studio e rassegna stampa. Nessuna promessa: solo numeri già successi.",
  steps: [
    { label: "01 · Video", href: "#video" },
    { label: "02 · Casi studio", href: "#case-study" },
    { label: "03 · News", href: "#news" },
    { label: "04 · Partner", href: "#clienti" },
  ],
};

// ── STEP 01 · VIDEO TESTIMONIANZE ──────────────────────────────────────────
export const videos = [
  {
    id: 1,
    title: "Testimonianza",
    duration: "0:52",
    description:
      "Con loro si va dritti al punto: hanno capito subito le nostre esigenze e le hanno trasformate in soluzioni reali.",
    videoUrl: "/videos/testimonianza-1.mp4",
    posterUrl: "/posters/testimonianza-1.webp",
  },
  {
    id: 2,
    title: "Testimonianza",
    duration: "1:46",
    description:
      "Hanno una visione della tecnologia e dello sviluppo che pochissime altre realtà sul mercato possono vantare.",
    videoUrl: "/videos/testimonianza-2.mp4",
    posterUrl: "/posters/testimonianza-2.webp",
  },
  {
    id: 3,
    title: "Testimonianza",
    duration: "1:36",
    description:
      "Aiutate tantissimo a facilitare le cose: con voi si impara facendo, in modo super intuitivo.",
    videoUrl: "/videos/testimonianza-4.mp4",
    posterUrl: "/posters/testimonianza-4.webp",
  },
  {
    id: 4,
    title: "Testimonianza",
    duration: "1:09",
    description:
      "Avete centrato l'esigenza dell'agente immobiliare, ne sono rimasto molto sorpreso e felice del risultato.",
    videoUrl: "/videos/testimonianza-6.mp4",
    posterUrl: "/posters/testimonianza-6.webp",
  },
  {
    id: 5,
    title: "Testimonianza",
    duration: "0:52",
    description:
      "Mi sono convinto grazie alla vostra preparazione, stavo affrontando un argomento di cui non conoscevo nulla e grazie a voi siamo riusciti a superare questo ostacolo.",
    videoUrl: "/videos/testimonianza-5.mp4",
    posterUrl: "/posters/testimonianza-5.webp",
  },
  {
    id: 6,
    title: "Testimonianza",
    duration: "0:21",
    description:
      "Siete forti e onesti nella proposta: un livello di trasparenza e concretezza davvero raro.",
    videoUrl: "/videos/testimonianza-3.mp4",
    posterUrl: "/posters/testimonianza-3.webp",
  },
];

// ── STEP 02 · CASE STUDIES (PDF) ───────────────────────────────────────────
// `client`, `keyMetric`, `keyMetricLabel` alimentano il preview brand-coerente
// quando previewUrl è null. Quando avrai screenshot reali del PDF, valorizzare
// `previewUrl` con il path locale (es. "/case-studies/cs-01-rebuyer-cover.jpg").
export const caseStudies = [
  {
    id: 1,
    sector: "REAL ESTATE — FIX & FLIP",
    client: "Rebuyer",
    title:
      "Rebuyer: analisi immobiliare da 2 ore a 4 minuti, opportunità intercettate +400%",
    abstract:
      "Piattaforma proprietaria per monitoraggio aste h24, analisi automatica delle opportunità, forecasting profitto e generazione preventivi. Tempo di ricerca giornaliera da 2 ore a 15 minuti.",
    keyMetric: "−97%",
    keyMetricLabel: "tempo analisi opportunità",
    pages: 3,
    previewUrl: "/case-studies/cs-01-rebuyer.webp",
    previewFit: "cover",
    pdfUrl: "/case-studies/cs-01-rebuyer.pdf",
  },
  {
    id: 2,
    sector: "E-COMMERCE — AGENZIA",
    client: "Matteo Elmi",
    title:
      "Matteo Elmi: recupero carrelli abbandonati dal 5% al 18-23% con AI behavior-driven",
    abstract:
      "Sistema AI multi-cliente che monitora il comportamento utente in tempo reale, attiva flussi di recupero personalizzati su 6 touchpoint e gestisce agenti vocali/testuali per i carrelli ad alto valore.",
    keyMetric: "18-23%",
    keyMetricLabel: "tasso recupero carrelli",
    pages: 3,
    previewUrl: "/case-studies/cs-02-elmi.webp",
    previewFit: "cover",
    pdfUrl: "/case-studies/cs-02-matteoelmi.pdf",
  },
  {
    id: 3,
    sector: "INDUSTRIA — MANUTENZIONE",
    client: "Tecno S.p.A.",
    title: "Tecn.. S.p.A.",
    abstract:
      "Assistente AI installato sui server interni, addestrato sull'intera documentazione tecnica. Risposte contestuali per macchina e componente, accesso h24 da tablet. Zero cloud, zero dati fuori.",
    keyMetric: "<60s",
    keyMetricLabel: "risposta su 40min prima",
    pages: 3,
    previewUrl: "/case-studies/cs-03-tecno.webp",
    previewFit: "cover",
    pdfUrl: "/case-studies/cs-03-tecno.pdf",
  },
  {
    id: 4,
    sector: "FINANZA — ADVISORY",
    client: "Kreios S.r.l.",
    title:
      "Kreios S.r.l.: analisi finanziaria da 3-5 ore a 15-20 minuti per azienda",
    abstract:
      "Piattaforma AI per matching automatico aziende/fondi/banche e valutazione finanziaria a 360°: finanziabilità bancaria, leasing, supply chain finance, indice di bancabilità con piano di miglioramento.",
    keyMetric: "−92%",
    keyMetricLabel: "tempo analisi dossier",
    pages: 3,
    previewUrl: "/case-studies/cs-04-kreios.webp",
    previewFit: "cover",
    pdfUrl: "/case-studies/cs-04-kreios.pdf",
  },
];

// ── STEP 03 · NEWS & ARTICOLI ──────────────────────────────────────────────
// `imageFit`: "cover" (default, foto edge-to-edge) o "contain" (logo con padding)
export const articles = [
  {
    id: 1,
    outlet: "Easy News Web",
    date: "MAG 2026",
    title:
      "AI Agentica, il 2026 è lo spartiacque per le PMI italiane — Altalogik porta il software su misura per cavalcare l'innovazione prima dei concorrenti",
    excerpt:
      "L'83,6% delle aziende italiane non utilizza ancora intelligenza artificiale. Altalogik propone sistemi AI su misura costruiti attorno ai processi reali dell'impresa, con codice di proprietà del cliente e zero lock-in.",
    url: "https://www.easynewsweb.com/ai-agentica-il-2026-e-lo-spartiacque-per-le-pmi-italiane-altalogik-porta-il-software-su-misura-per-cavalcare-linnovazione-prima-dei-concorrenti/",
    imageUrl:
      "https://www.easynewsweb.com/wp-content/uploads/2026/05/Logo_AltaLogik-1-768x419.png",
    imageFit: "contain",
  },
  {
    id: 2,
    outlet: "Easy News Web",
    date: "MAG 2026",
    title:
      "Federico Trotta, 23 anni da Bologna: il fondatore di Altalogik che porta l'AI su misura nelle PMI italiane",
    excerpt:
      "Un giovane imprenditore bolognese ha fondato Altalogik, software house specializzata in soluzioni AI personalizzate per le aziende. L'obiettivo: democratizzare l'accesso all'AI tra le PMI italiane.",
    url: "https://www.easynewsweb.com/federico-trotta-23-anni-da-bologna-il-fondatore-di-altalogik-che-porta-lai-su-misura-nelle-pmi-italiane/",
    imageUrl: "/articles/federico-trotta.webp",
    imageFit: "cover",
  },
  {
    id: 3,
    outlet: "Easy News Web",
    date: "MAG 2026",
    title:
      "Federico Trotta — Il dietro le quinte di Altalogik: portare l'AI su misura alle PMI",
    excerpt:
      "Approfondimento sul metodo in sei passi di Altalogik per integrare l'AI nei processi aziendali. Trotta spiega l'approccio engineering-driven che parte dai problemi operativi.",
    url: "https://www.easynewsweb.com/federico-trotta-il-dietro-le-quinte-di-altalogik-portare-lai-su-misura-alle-pmi/",
    imageUrl:
      "https://www.easynewsweb.com/wp-content/uploads/2026/05/Screenshot-2026-05-30-alle-23.05.16-768x684.png",
    imageFit: "cover",
  },
  {
    id: 4,
    outlet: "StartupItalia",
    date: "MAG 2026",
    title:
      "AI e robotica sono i trend indiscussi del 2026: ma sono presenti nelle imprese (e nelle PMI) italiane?",
    excerpt:
      "L'adozione dell'AI raddoppia nelle imprese italiane, con forte crescita nei servizi e nei processi aziendali — ma resta un netto divario tecnologico tra grandi aziende e PMI.",
    url: "https://startupitalia.eu/tech/ai-e-robotica-sono-i-trend-indiscussi-del-2026-ma-sono-presenti-nelle-imprese-e-nelle-pmi-italiane/",
    imageUrl:
      "https://cdn-magazine.startupitalia.eu/wp-content/uploads/2026/05/17110317/robot-produzione-auto-1024x574.jpg",
    imageFit: "cover",
  },
  {
    id: 5,
    outlet: "Forbes Italia",
    topic: "Under 20 / Imprenditoria giovane",
    date: "GIU 2026",
    title:
      "TeenVentures: a Milano la carica degli under 20 che vogliono ridisegnare il futuro del business italiano",
    excerpt:
      "Focus sui giovani talenti e le startup tech italiane emergenti. L'evento celebra progetti innovativi, tra cui spiccano soluzioni AI per l'automazione dei processi.",
    url: "https://nextleaders.forbes.it/articoli/teenventures-a-milano-la-carica-degli-under-20-che-vogliono-ridisegnare-il-futuro-del-business-italiano",
    imageUrl: "/forbes-teenventures.webp",
    imageFit: "cover",
  },
  {
    id: 6,
    outlet: "Il Sole 24 Ore",
    topic: "AI Act & PMI",
    date: "DIC 2025",
    title:
      "AI Act e trasformazione digitale: Microsoft Italia ed ENIA siglano il protocollo per le PMI italiane",
    excerpt:
      "Nasce la prima sandbox normativa tecnico-giuridica italiana per le imprese che intendono sviluppare o integrare sistemi AI in piena conformità all'AI Act europeo.",
    url: "https://ntplusdiritto.ilsole24ore.com/art/ai-act-e-trasformazione-digitale-microsoft-italia-ed-enia-siglano-protocollo-le-pmi-italiane-AItl6GK",
    imageUrl: "/sole24ore-aiact.webp",
    imageFit: "cover",
  },
  {
    id: 7,
    outlet: "StartupItalia",
    date: "NOV 2024",
    title:
      "La via italiana all'intelligenza artificiale. «L'AI made in Italy essenziale per restare al passo coi tempi»",
    excerpt:
      "I risultati del bando CrescerAI promuovono l'adozione dell'AI per le PMI del Made in Italy, confermando l'urgenza di digitalizzare il tessuto produttivo nazionale.",
    url: "https://startupitalia.eu/startup/crescerai-pmi-made-in-italy-ai/",
    imageUrl:
      "https://cdn-magazine.startupitalia.eu/wp-content/uploads/2024/11/13190635/FRD_050_AI_CONNECT_ROMA-1536x1024.jpg",
    imageFit: "cover",
  },
];

// ── STEP 04 · PARTNER TECNOLOGICI ──────────────────────────────────────────
// Stessi partner mostrati su https://altalogik.it/partner — cloud & infra.
export const partners = [
  { id: 1, name: "AWS", imageUrl: "/partners/aws.webp" },
  { id: 2, name: "Google Cloud", imageUrl: "/partners/google-cloud.webp" },
  { id: 3, name: "Microsoft Azure", imageUrl: "/partners/microsoft-azure.webp" },
  { id: 4, name: "Vercel", imageUrl: "/partners/vercel.webp" },
  { id: 5, name: "Stripe", imageUrl: "/partners/stripe.webp" },
  { id: 6, name: "Twilio", imageUrl: "/partners/twilio.webp" },
  { id: 7, name: "Datadog", imageUrl: "/partners/datadog.webp" },
  { id: 8, name: "Supabase", imageUrl: "/partners/supabase.webp" },
];

// ── FOOTER ──────────────────────────────────────────────────────────────────
export const footer = {
  copyright: `© ${new Date().getFullYear()} Altalogik · Software AI per PMI italiane`,
  links: [
    {
      label: "Privacy",
      href: "https://www.iubenda.com/privacy-policy/78964261",
    },
    {
      label: "Cookie",
      href: "https://www.iubenda.com/privacy-policy/78964261/cookie-policy",
    },
    { label: "Note legali", href: "#" },
  ],
  navLinks: [
    { label: "Video", href: "#video" },
    { label: "Case study", href: "#case-study" },
    { label: "News", href: "#news" },
    { label: "Partner", href: "#clienti" },
  ],
  legal:
    "Altalogik è un prodotto di Altalogik SRL · Sedi operative: Bologna · Milano, IT",
};
