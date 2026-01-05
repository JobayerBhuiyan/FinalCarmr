export type Language = "en" | "es" | "fr" | "ru" | "ar"

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
]

export type TranslationKeys = {
  // Header
  home: string
  pricing: string
  sampleReport: string
  signIn: string
  getStarted: string
  toggleTheme: string

  // Hero
  proVehicleHistory: string
  knowBeforeYouBuy: string
  knowBeforeYouBuyPlate: string
  heroSubtitle: string

  // VIN Input
  byVin: string
  byUsPlate: string
  enterVin: string
  checkVin: string
  checking: string
  scanBarcode: string
  plateNumber: string
  state: string
  lookUpPlate: string
  plateLookupComingSoon: string
  vinValidationError: string
  scanVinBarcode: string
  scanLicensePlate: string
  scanPlateInstructions: string
  cameraPreview: string
  scanningInstructions: string
  scanning: string

  // Trust Badges
  nmvtisVerified: string
  bankLevelSecurity: string
  privacyProtected: string
  trustNote: string
  extensiveReport: string
  secureCheckout: string
  refundEligible: string
  multiSourceData: string

  // How It Works
  howItWorks: string
  enterVinStep: string
  enterVinStepDesc: string
  instantAnalysis: string
  instantAnalysisDesc: string
  getReport: string
  getReportDesc: string

  // Features
  comprehensiveData: string
  comprehensiveDataDesc: string
  accidentHistory: string
  accidentHistoryDesc: string
  ownershipRecords: string
  ownershipRecordsDesc: string
  titleBrands: string
  titleBrandsDesc: string
  recallAlerts: string
  recallAlertsDesc: string
  marketValue: string
  marketValueDesc: string

  // Pricing
  choosePlan: string
  singleReport: string
  perReport: string
  bestValue: string
  proPass: string
  reports: string
  perReportSavings: string
  monthly: string
  perMonth: string
  unlimitedReports: string
  buyNow: string
  subscribe: string
  compareFeatures: string
  feature: string
  included: string
  notIncluded: string

  // Footer
  footerTagline: string
  product: string
  vinCheck: string
  company: string
  about: string
  contact: string
  careers: string
  legal: string
  privacyPolicy: string
  termsOfService: string
  refundPolicy: string
  dataProtection: string
  encrypted: string
  neverSellData: string
  allRightsReserved: string
  faq: string
  blog: string
  signOut: string



  // Trust Badges


  // Report
  aiSummary: string
  overview: string
  ownership: string
  history: string
  accidents: string
  recalls: string
  salesHistory: string

  // Report Status
  goodBuy: string
  caution: string
  highRisk: string
  miles: string
  owners: string
  titleStatus: string

  // Report Actions
  reportActions: string
  shareReport: string
  downloadPdf: string
  emailReport: string
  yourPlan: string
  currentPlan: string
  reportsRemaining: string
  expires: string
  upgradePlan: string
  upgradeNow: string
  noReportsRemaining: string
  rateLimited: string
  pleaseWait: string
  shareLinkCopied: string
  preparingPdf: string
  emailSent: string

  // Info Page
  infoAndLegal: string
  infoSubtitle: string
  faqTitle: string
  faqDesc: string
  howItWorksTitle: string
  howItWorksDesc: string
  blogTitle: string
  blogDesc: string
  careersTitle: string
  careersDesc: string
  supportTitle: string
  supportDesc: string
  cookiePolicy: string
  cookiePolicyDesc: string
  securityPrivacy: string
  securityPrivacyDesc: string
  systemStatus: string
  allSystemsOperational: string
  lastUpdated: string

  marketValueTab: string
  share: string
  download: string
  email: string
  verifiedReport: string
  reportId: string
  generatedFor: string

  // Auth
  emailLabel: string
  passwordLabel: string
  confirmPasswordLabel: string
  fullNameLabel: string
  rememberMe: string
  forgotPasswordLink: string
  signInTitle: string
  signInDesc: string
  signUpTitle: string
  signUpDesc: string
  orContinueWith: string
  alreadyHaveAccount: string
  dontHaveAccount: string
  createAccount: string
  sendResetInstructions: string
  backToSignIn: string
  checkInbox: string
  passwordStrength: string
  passwordTopNav: string
  resetSentTo: string
  tryAgain: string
  continueWithGoogle: string
  continueWithApple: string
  forgotPasswordDesc: string
  didntReceiveEmail: string

  // Pricing Extended
  unlimitedAccessTrial: string
  unlimitedAccessTrialDesc: string
  satisfactionGuarantee: string
  satisfactionGuaranteeDesc: string
}

export const translations: Record<Language, TranslationKeys> = {
  en: {
    // Header
    home: "Home",
    pricing: "Pricing",
    sampleReport: "Sample Report",
    signIn: "Sign In",
    getStarted: "Get Started",
    toggleTheme: "Toggle theme",

    // Hero - Removed trailing periods
    proVehicleHistory: "Free Vehicle History",
    knowBeforeYouBuy: "Clarity for Every VIN",
    knowBeforeYouBuyPlate: "Clarity for Every License Plate",
    heroSubtitle: "AI-powered vehicle report",

    // VIN Input
    byVin: "By VIN",
    byUsPlate: "By US Plate",
    enterVin: "Enter 17-character VIN",
    checkVin: "Check VIN",
    checking: "Checking...",
    scanBarcode: "Scan",
    plateNumber: "Plate #",
    state: "State",
    lookUpPlate: "Look Up Plate",
    plateLookupComingSoon: "Enter or scan a 17-character VIN or a US license plate",
    vinValidationError: "VIN must be 17 characters. You entered",
    scanVinBarcode: "Scan VIN Barcode",
    scanLicensePlate: "Scan License Plate",
    scanPlateInstructions:
      "Position the license plate within the frame. Ensure the plate is clearly visible and well-lit.",
    cameraPreview: "Camera preview",
    scanningInstructions:
      "Position the VIN barcode within the frame. Usually found on the driver's door jamb or lower windshield.",
    scanning: "Scanning...",

    // Trust Badges
    nmvtisVerified: "NMVTIS Verified",
    bankLevelSecurity: "Bank-level Security",
    privacyProtected: "No Data Resale",
    trustNote: "Reports include data from 100+ sources including NMVTIS, insurance companies, and auto auctions.",
    extensiveReport: "Extensive Report",
    secureCheckout: "Secure Checkout",
    refundEligible: "Refund Eligible",
    multiSourceData: "Multi-source data",

    // How It Works - Updated step descriptions
    howItWorks: "How It Works",
    enterVinStep: "Enter VIN or Plate",
    enterVinStepDesc: "Enter or scan the vehicle's 17-character VIN, or its license plate",
    instantAnalysis: "Instant Analysis",
    instantAnalysisDesc: "We search millions of records in seconds",
    getReport: "Get Report",
    getReportDesc: "Review comprehensive history and make informed decisions",

    // Features
    comprehensiveData: "Comprehensive Data",
    comprehensiveDataDesc:
      "Access records from 100+ trusted sources including NMVTIS, insurance companies, and service records.",
    accidentHistory: "Accident History",
    accidentHistoryDesc: "Detailed accident reports with damage severity, airbag deployment, and repair estimates.",
    ownershipRecords: "Ownership Records",
    ownershipRecordsDesc: "Complete ownership timeline including registration history and title transfers.",
    titleBrands: "Title Brands",
    titleBrandsDesc: "Check for salvage, rebuilt, flood damage, lemon law, and other critical title brands.",
    recallAlerts: "Recall Alerts",
    recallAlertsDesc: "Active manufacturer recalls with completion status and remedy information.",
    marketValue: "Market Value",
    marketValueDesc: "Real-time market valuation based on condition, mileage, and comparable sales.",

    // Pricing
    choosePlan: "Choose Your Plan",
    singleReport: "Single Report",
    perReport: "per report",
    bestValue: "Best Value",
    proPass: "Pro Pass",
    reports: "reports",
    perReportSavings: "per report",
    monthly: "Monthly",
    perMonth: "per month",
    unlimitedReports: "Unlimited reports",
    buyNow: "Buy Now",
    subscribe: "Subscribe",
    compareFeatures: "Compare Features",
    feature: "Feature",
    included: "Included",
    notIncluded: "Not included",

    // Footer
    footerTagline: "Vehicle reports trusted by thousands.",
    product: "Product",
    vinCheck: "VIN Check",
    company: "Company",
    about: "About",
    contact: "Contact",
    careers: "Careers",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    refundPolicy: "Refund Policy",
    dataProtection: "Data Protection",
    encrypted: "Encrypted",
    neverSellData: "We never sell your data",
    allRightsReserved: "All rights reserved.",
    faq: "FAQ",
    blog: "Blog",
    signOut: "Sign Out",



    // Trust Badges


    // Report
    aiSummary: "AI Summary",
    overview: "Overview",
    ownership: "Ownership",
    history: "History & Events",
    accidents: "Accidents & Damage",
    recalls: "Recalls & Safety",
    salesHistory: "Sales History",

    // Report Status
    goodBuy: "GOOD BUY",
    caution: "CAUTION",
    highRisk: "HIGH RISK",
    miles: "Miles",
    owners: "Owners",
    titleStatus: "Title",

    // Report Actions
    reportActions: "Report Actions",
    shareReport: "Share Report Securely",
    downloadPdf: "Download PDF",
    emailReport: "Email Report",
    yourPlan: "Your Plan",
    currentPlan: "Current Plan",
    reportsRemaining: "Reports Remaining",
    expires: "Expires",
    upgradePlan: "Upgrade Plan",
    upgradeNow: "Upgrade Now",
    noReportsRemaining: "No reports remaining",
    rateLimited: "Rate Limited",
    pleaseWait: "Please wait 30 seconds",
    shareLinkCopied: "Share link copied!",
    preparingPdf: "Preparing PDF...",
    emailSent: "Email sent!",

    // Info Page
    infoAndLegal: "Information & Legal",
    infoSubtitle: "Everything you need to know about CarMR, our policies, and how we can help you.",
    faqTitle: "Frequently Asked Questions",
    faqDesc: "Find answers to the most common questions about our vehicle history reports and services.",
    howItWorksTitle: "How It Works",
    howItWorksDesc: "Getting a vehicle history report is quick and easy. Our streamlined process ensures you have all the information you need in seconds.",
    blogTitle: "Blog",
    blogDesc: "Stay informed with our latest articles on vehicle buying tips, industry news, and expert advice.",
    careersTitle: "Careers",
    careersDesc: "Join our team and help millions of car buyers make informed decisions.",
    supportTitle: "Support",
    supportDesc: "Our support team is here to help you with any questions or issues.",
    cookiePolicy: "Cookie Policy",
    cookiePolicyDesc: "We use cookies and similar technologies to provide, protect, and improve our services.",
    securityPrivacy: "Security & Privacy",
    securityPrivacyDesc: "Your data is protected with industry-standard encryption (TLS 1.3).",
    systemStatus: "System Status",
    allSystemsOperational: "All Systems Operational",
    lastUpdated: "Last updated:",


    marketValueTab: "Market Value",
    share: "Share",
    download: "Download",
    email: "Email",
    verifiedReport: "Verified Report",
    reportId: "Report ID",
    generatedFor: "Generated for",

    // Auth
    emailLabel: "Email",
    passwordLabel: "Password",
    confirmPasswordLabel: "Confirm Password",
    fullNameLabel: "User name",
    rememberMe: "Remember me",
    forgotPasswordLink: "Forgot password?",
    signInTitle: "Welcome back",
    signInDesc: "Sign in to your account to continue",
    signUpTitle: "Create an account",
    signUpDesc: "Start your vehicle history check today",
    orContinueWith: "Or continue with email",
    alreadyHaveAccount: "Already have an account?",
    dontHaveAccount: "Don't have an account?",
    createAccount: "Create Account",
    sendResetInstructions: "Send reset instructions",
    backToSignIn: "Back to Sign In",
    checkInbox: "Check your inbox",
    passwordStrength: "Password requirements:",
    passwordTopNav: "Forgot Password",
    resetSentTo: "We've sent password reset instructions to",
    tryAgain: "Try again",
    continueWithGoogle: "Continue with Google",
    continueWithApple: "Continue with Apple",
    forgotPasswordDesc:
      "Enter your email and we'll send you instructions to reset your password.",
    didntReceiveEmail: "Didn't receive the email?",

    // Pricing Extended
    unlimitedAccessTrial: "Unlimited Access Trial",
    unlimitedAccessTrialDesc:
      "Enjoy 3 days of Pro Access with up to 5 vehicle history reports daily. You can cancel online at any time. Unless canceled, your subscription will automatically renew at $39.99/month (plus tax) after the trial period.",
    satisfactionGuarantee: "Satisfaction Guarantee",
    satisfactionGuaranteeDesc:
      "Purchases are backed by our money-back guarantee as outlined in our Refund Policy.",
  },
  es: {
    // Header
    home: "Inicio",
    pricing: "Precios",
    sampleReport: "Informe de Muestra",
    signIn: "Iniciar Sesión",
    getStarted: "Comenzar",
    toggleTheme: "Cambiar tema",

    // Hero - Removed trailing periods
    proVehicleHistory: "Historial Vehicular Gratis",
    knowBeforeYouBuy: "Claridad para Cada VIN",
    knowBeforeYouBuyPlate: "Claridad para Cada Placa",
    heroSubtitle: "Reporte de vehículo con IA",

    // VIN Input
    byVin: "Por VIN",
    byUsPlate: "Por Placa US",
    enterVin: "Ingrese VIN de 17 caracteres",
    checkVin: "Verificar VIN",
    checking: "Verificando...",
    scanBarcode: "Escanear",
    plateNumber: "Placa #",
    state: "Estado",
    lookUpPlate: "Buscar Placa",
    plateLookupComingSoon: "Ingrese o escanee un VIN de 17 caracteres o una placa de EE.UU.",
    vinValidationError: "El VIN debe tener 17 caracteres. Ingresaste",
    scanVinBarcode: "Escanear Código VIN",
    scanLicensePlate: "Escanear Placa",
    scanPlateInstructions:
      "Posicione la placa dentro del marco. Asegúrese de que esté claramente visible y bien iluminada.",
    cameraPreview: "Vista previa de cámara",
    scanningInstructions:
      "Posicione el código de barras VIN dentro del marco. Usualmente se encuentra en el marco de la puerta del conductor o en el parabrisas inferior.",
    scanning: "Escaneando...",

    // Trust Badges
    nmvtisVerified: "Verificado NMVTIS",
    bankLevelSecurity: "Seguridad Bancaria",
    privacyProtected: "Sin Reventa de Datos",
    trustNote:
      "Los informes incluyen datos de más de 100 fuentes, incluyendo NMVTIS, compañías de seguros y subastas de autos.",
    extensiveReport: "Informe Extenso",
    secureCheckout: "Pago Seguro",
    refundEligible: "Elegible para Reembolso",
    multiSourceData: "Datos de múltiples fuentes",

    // How It Works - Updated step descriptions
    howItWorks: "Cómo Funciona",
    enterVinStep: "Ingrese VIN o Placa",
    enterVinStepDesc: "Ingrese o escanee el VIN de 17 caracteres del vehículo, o su placa",
    instantAnalysis: "Análisis Instantáneo",
    instantAnalysisDesc: "Buscamos millones de registros en segundos",
    getReport: "Obtener Informe",
    getReportDesc: "Revise el historial completo y tome decisiones informadas",

    // Features
    comprehensiveData: "Datos Completos",
    comprehensiveDataDesc:
      "Acceda a registros de más de 100 fuentes confiables, incluyendo NMVTIS, compañías de seguros y registros de servicio.",
    accidentHistory: "Historia de Accidentes",
    accidentHistoryDesc:
      "Informes detallados de accidentes con gravedad de daños, despliegue de bolsas de aire y estimaciones de reparación.",
    ownershipRecords: "Registros de Propiedad",
    ownershipRecordsDesc: "Línea de tiempo completa de propiedad, incluyendo historial de registro y transferencia de título.",
    titleBrands: "Marcas de Título",
    titleBrandsDesc:
      "Verifique salvamento, reconstrucción, daños por inundación, ley limón y otras marcas de título críticas.",
    recallAlerts: "Alertas de Retiro",
    recallAlertsDesc: "Retiros activos del fabricante con estado de finalización e información de reparación.",
    marketValue: "Valor de Mercado",
    marketValueDesc: "Valoración de mercado en tiempo real basada en condición, millaje y ventas comparables.",

    // Pricing
    // Pricing
    choosePlan: "Elige Tu Plan",
    singleReport: "Informe Individual",
    perReport: "por informe",
    bestValue: "Mejor Valor",
    proPass: "Pase Pro",
    reports: "informes",
    perReportSavings: "por informe",
    monthly: "Mensual",
    perMonth: "por mes",
    unlimitedReports: "Informes Ilimitados",
    buyNow: "Comprar Ahora",
    subscribe: "Suscribirse",
    compareFeatures: "Comparar Características",
    feature: "Característica",
    included: "Incluido",
    notIncluded: "No incluido",

    // Footer
    // Footer
    footerTagline: "Informes de vehículos en los que confían miles.",
    product: "Producto",
    vinCheck: "Verificación de VIN",
    company: "Empresa",
    about: "Acerca de",
    contact: "Contacto",
    careers: "Carreras",
    legal: "Legal",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    refundPolicy: "Política de Reembolso",
    dataProtection: "Protección de Datos",
    encrypted: "Encriptado",
    neverSellData: "Nunca vendemos sus datos",
    allRightsReserved: "Todos los derechos reservados.",
    faq: "Preguntas Frecuentes",
    blog: "Blog",
    signOut: "Cerrar Sesión",



    // Trust Badges


    // Report
    aiSummary: "Resumen IA",
    overview: "Visión General",
    ownership: "Propiedad",
    history: "Historial y Eventos",
    accidents: "Accidentes y Daños",
    recalls: "Retiros y Seguridad",
    salesHistory: "Historial de Ventas",

    // Report Status
    goodBuy: "BUENA COMPRA",
    caution: "PRECAUCIÓN",
    highRisk: "ALTO RIESGO",
    miles: "Millas",
    owners: "Propietarios",
    titleStatus: "Título",

    // Report Actions
    reportActions: "Acciones del Informe",
    shareReport: "Compartir Informe",
    downloadPdf: "Descargar PDF",
    emailReport: "Enviar por Correo",
    yourPlan: "Tu Plan",
    currentPlan: "Plan Actual",
    reportsRemaining: "Informes Restantes",
    expires: "Expira",
    upgradePlan: "Mejorar Plan",
    upgradeNow: "Mejorar Ahora",
    noReportsRemaining: "No quedan informes",
    rateLimited: "Límite Alcanzado",
    pleaseWait: "Por favor espere 30 segundos",
    shareLinkCopied: "¡Enlace copiado!",
    preparingPdf: "Preparando PDF...",
    emailSent: "¡Correo enviado!",

    // Info Page
    infoAndLegal: "Informada y Legal",
    infoSubtitle: "Todo lo que necesitas saber sobre CarMR, nuestras políticas y cómo podemos ayudarte.",
    faqTitle: "Preguntas Frecuentes",
    faqDesc: "Encuentra respuestas a las preguntas más comunes sobre nuestros informes de historial de vehículos.",
    howItWorksTitle: "Cómo Funciona",
    howItWorksDesc: "Obtener un informe de historial de vehículo es rápido y fácil.",
    blogTitle: "Blog",
    blogDesc: "Mantente informado con nuestros últimos artículos y consejos.",
    careersTitle: "Carreras",
    careersDesc: "Únete a nuestro equipo y ayuda a millones de compradores de autos.",
    supportTitle: "Soporte",
    supportDesc: "Nuestro equipo de soporte está aquí para ayudarte.",
    cookiePolicy: "Política de Cookies",
    cookiePolicyDesc: "Usamos cookies para proporcionar, proteger y mejorar nuestros servicios.",
    securityPrivacy: "Seguridad y Privacidad",
    securityPrivacyDesc: "Tus datos están protegidos con encriptación estándar (TLS 1.3).",
    systemStatus: "Estado del Sistema",
    allSystemsOperational: "Todos los sistemas operativos",
    lastUpdated: "Última actualización:",


    marketValueTab: "Valor de Mercado",
    share: "Compartir",
    download: "Descargar",
    email: "Email",
    verifiedReport: "Informe Verificado",
    reportId: "ID de Informe",
    generatedFor: "Generado para",

    // Auth
    emailLabel: "Correo electrónico",
    passwordLabel: "Contraseña",
    confirmPasswordLabel: "Confirmar contraseña",
    fullNameLabel: "Nombre completo (Opcional)",
    rememberMe: "Recuérdame",
    forgotPasswordLink: "¿Olvidaste tu contraseña?",
    signInTitle: "Bienvenido de nuevo",
    signInDesc: "Inicia sesión en tu cuenta para continuar",
    signUpTitle: "Crear una cuenta",
    signUpDesc: "Comienza tu verificación de historial vehicular hoy",
    orContinueWith: "O continúa con correo",
    alreadyHaveAccount: "¿Ya tienes una cuenta?",
    dontHaveAccount: "¿No tienes una cuenta?",
    createAccount: "Crear Cuenta",
    sendResetInstructions: "Enviar instrucciones",
    backToSignIn: "Volver a Iniciar Sesión",
    checkInbox: "Revisa tu bandeja de entrada",
    passwordStrength: "Requisitos de contraseña:",
    passwordTopNav: "Olvidé mi Contraseña",
    resetSentTo: "Hemos enviado instrucciones para restablecer la contraseña a",
    tryAgain: "Intentar de nuevo",
    continueWithGoogle: "Continuar con Google",
    continueWithApple: "Continuar con Apple",
    forgotPasswordDesc:
      "Ingresa tu correo y te enviaremos instrucciones para restablecer tu contraseña.",
    didntReceiveEmail: "¿No recibiste el correo?",

    // Pricing Extended (English for accuracy)
    unlimitedAccessTrial: "Unlimited Access Trial",
    unlimitedAccessTrialDesc:
      "Enjoy 3 days of Pro Access with up to 5 vehicle history reports daily. You can cancel online at any time. Unless canceled, your subscription will automatically renew at $39.99/month (plus tax) after the trial period.",
    satisfactionGuarantee: "Satisfaction Guarantee",
    satisfactionGuaranteeDesc:
      "Purchases are backed by our money-back guarantee as outlined in our Refund Policy.",
  },
  fr: {
    // Header
    home: "Accueil",
    pricing: "Tarifs",
    sampleReport: "Rapport Exemple",
    signIn: "Connexion",
    getStarted: "Commencer",
    toggleTheme: "Changer le thème",

    // Hero - Removed trailing periods
    proVehicleHistory: "Historique Véhicule Gratuit",
    knowBeforeYouBuy: "Clarté pour Chaque VIN",
    knowBeforeYouBuyPlate: "Clarté pour Chaque Plaque",
    heroSubtitle: "Rapport véhicule alimenté par IA",

    // VIN Input
    byVin: "Par VIN",
    byUsPlate: "Par Plaque US",
    enterVin: "Entrez le VIN à 17 caractères",
    checkVin: "Vérifier VIN",
    checking: "Vérification...",
    scanBarcode: "Scanner",
    plateNumber: "Plaque #",
    state: "État",
    lookUpPlate: "Rechercher Plaque",
    plateLookupComingSoon: "Entrez ou scannez un VIN à 17 caractères ou une plaque américaine",
    vinValidationError: "Le VIN doit comporter 17 caractères. Vous avez entré",
    scanVinBarcode: "Scanner Code-barres VIN",
    scanLicensePlate: "Scanner la Plaque",
    scanPlateInstructions:
      "Positionnez la plaque dans le cadre. Assurez-vous qu'elle soit clairement visible et bien éclairée.",
    cameraPreview: "Aperçu caméra",
    scanningInstructions:
      "Positionnez le code-barres VIN dans le cadre. Généralement situé sur le montant de porte conducteur ou le bas du pare-brise.",
    scanning: "Scan en cours...",

    // Trust Badges
    nmvtisVerified: "Vérifié NMVTIS",
    bankLevelSecurity: "Sécurité Bancaire",
    privacyProtected: "Pas de Revente de Données",
    trustNote:
      "Les rapports incluent des données de plus de 100 sources, y compris NMVTIS, compagnies d'assurance et автоаукционы.",
    extensiveReport: "Rapport Complet",
    secureCheckout: "Paiement Sécurisé",
    refundEligible: "Remboursement Possible",
    multiSourceData: "Données multi-sources",

    // How It Works - Updated step descriptions
    howItWorks: "Comment Ça Marche",
    enterVinStep: "Entrez VIN ou Plaque",
    enterVinStepDesc: "Entrez ou scannez le VIN à 17 caractères du véhicule, ou son numéro de plaque",
    instantAnalysis: "Analyse Instantanée",
    instantAnalysisDesc: "Nous recherchons des millions de dossiers en quelques secondes",
    getReport: "Obtenir le Rapport",
    getReportDesc: "Consultez l'historique complet et prenez des décisions éclairées",

    // Features
    comprehensiveData: "Données Complètes",
    comprehensiveDataDesc:
      "Accédez aux dossiers de plus de 100 sources fiables, y compris NMVTIS, compagnies d'assurance et service records.",
    accidentHistory: "Historique des Accidents",
    accidentHistoryDesc:
      "Rapports d'accidents détaillés avec gravité des dommages, acionnement de airbags et estimations de réparation.",
    ownershipRecords: "Registres de Propriété",
    ownershipRecordsDesc:
      "Chronologie complète de propriété incluant l'historique d'immatriculation et les transferts de titre.",
    titleBrands: "Marques de Titre",
    titleBrandsDesc:
      "Vérifiez les épaves, reconstructions, dommages d'inondation, loi citron et autres marques critiques de titre.",
    recallAlerts: "Оповещения об Отзывах",
    recallAlertsDesc: "Активные отзывы производителя со статусом выполнения и информацией о ремонте.",
    marketValue: "Рыночная Стоимость",
    marketValueDesc: "Оценка рыночной стоимости в реальном времени на основе состояния, пробега и сопоставимых продаж.",

    // Pricing
    choosePlan: "Choisissez Votre Plan",
    singleReport: "Rapport Unique",
    perReport: "par rapport",
    bestValue: "Meilleure Valeur",
    proPass: "Про Пропуск",
    reports: "rapports",
    perReportSavings: "par rapport",
    monthly: "Mensuel",
    perMonth: "в месяц",
    unlimitedReports: "Безлимитные отчёты",
    buyNow: "Acheter Maintenant",
    subscribe: "S'abonner",
    compareFeatures: "Comparer les Fonctionnalités",
    feature: "Fonctionnalité",
    included: "Inclus",
    notIncluded: "Non inclus",

    // Footer
    footerTagline: "Vehicle reports trusted by thousands.",
    product: "Product",
    vinCheck: "VIN-Prüfung",
    company: "Entreprise",
    about: "À propos",
    contact: "Contacto",
    careers: "Karriere",
    legal: "Légal",
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions d'utilisation",
    refundPolicy: "Politique de Remboursement",
    dataProtection: "Protection des Données",
    encrypted: "Chiffrement",
    neverSellData: "Nous ne vendons jamais vos données",
    allRightsReserved: "Tous droits réservés.",
    faq: "FAQ",
    blog: "Blog",
    signOut: "Déconnexion",



    // Trust Badges


    // Report
    aiSummary: "Résumé IA",
    overview: "Aperçu",
    ownership: "Propriété",
    history: "Historique",
    accidents: "Accidents",
    recalls: "Rappels",
    salesHistory: "Historique Ventes",

    // Report Status
    goodBuy: "BON ACHAT",
    caution: "ATTENTION",
    highRisk: "HAUT RISQUE",
    miles: "Miles",
    owners: "Propriétaires",
    titleStatus: "Titre",

    // Report Actions
    reportActions: "Actions du Rapport",
    shareReport: "Partager",
    downloadPdf: "Télécharger PDF",
    emailReport: "Envoyer par Email",
    yourPlan: "Votre Plan",
    currentPlan: "Plan Actuel",
    reportsRemaining: "Rapports Restants",
    expires: "Expire le",
    upgradePlan: "Mettre à niveau",
    upgradeNow: "Mettre à niveau maintenant",
    noReportsRemaining: "Aucun rapport restant",
    rateLimited: "Limite atteinte",
    pleaseWait: "Veuillez patienter 30 secondes",
    shareLinkCopied: "Lien copié !",
    preparingPdf: "Préparation du PDF...",
    emailSent: "Email envoyé !",

    // Info Page
    infoAndLegal: "Informations & Légal",
    infoSubtitle: "Tout ce que vous devez savoir sur CarMR, nos politiques et comment nous pouvons vous aider.",
    faqTitle: "Questions Fréquentes",
    faqDesc: "Trouvez des réponses aux questions les plus courantes sur nos rapports.",
    howItWorksTitle: "Comment ça Marche",
    howItWorksDesc: "Obtenir un rapport d'historique de véhicule est rapide et facile.",
    blogTitle: "Blog",
    blogDesc: "Restez informé avec nos derniers articles et conseils.",
    careersTitle: "Carrières",
    careersDesc: "Rejoignez notre équipe et aidez des millions d'acheteurs de voitures.",
    supportTitle: "Support",
    supportDesc: "Notre équipe de support est là pour vous aider.",
    cookiePolicy: "Politique de Cookies",
    cookiePolicyDesc: "Nous utilisons des cookies pour fournir, protéger et améliorer nos services.",
    securityPrivacy: "Sécurité & Confidentialité",
    securityPrivacyDesc: "Vos données sont protégées par un chiffrement standard (TLS 1.3).",
    systemStatus: "État du Système",
    allSystemsOperational: "Tous les systèmes opérationnels",
    lastUpdated: "Dernière mise à jour :",


    marketValueTab: "Valeur Marchande",
    share: "Partager",
    download: "Télécharger",
    email: "E-Mail",
    verifiedReport: "Rapport Vérifié",
    reportId: "ID du Rapport",
    generatedFor: "Généré pour",

    // Auth
    emailLabel: "Email ou numéro de téléphone",
    passwordLabel: "Mot de passe",
    confirmPasswordLabel: "Confirmer le mot de passe",
    fullNameLabel: "Nom complet (Optionnel)",
    rememberMe: "Se souvenir de moi",
    forgotPasswordLink: "Mot de passe oublié ?",
    signInTitle: "Bon retour",
    signInDesc: "Connectez-vous pour continuer",
    signUpTitle: "Créer un compte",
    signUpDesc: "Commencez votre vérification de véhicule aujourd'hui",
    orContinueWith: "Ou continuer avec email ou téléphone",
    alreadyHaveAccount: "Vous avez déjà un compte ?",
    dontHaveAccount: "Vous n'avez pas de compte ?",
    createAccount: "Créer un compte",
    sendResetInstructions: "Envoyer instructions",
    backToSignIn: "Retour à la connexion",
    checkInbox: "Vérifiez votre boîte de réception",
    passwordStrength: "Exigences du mot de passe :",
    passwordTopNav: "Mot de Passe Oublié",
    resetSentTo: "Nous avons envoyé les instructions de réinitialisation à",
    tryAgain: "Réessayer",
    continueWithGoogle: "Continuer avec Google",
    continueWithApple: "Continuer avec Apple",
    forgotPasswordDesc:
      "Entrez votre email ou téléphone et nous vous enverrons les instructions pour réinitialiser votre mot de passe.",
    didntReceiveEmail: "Vous n'avez pas reçu l'email ?",

    // Pricing Extended (English for accuracy)
    unlimitedAccessTrial: "Unlimited Access Trial",
    unlimitedAccessTrialDesc:
      "Enjoy 3 days of Pro Access with up to 5 vehicle history reports daily. You can cancel online at any time. Unless canceled, your subscription will automatically renew at $39.99/month (plus tax) after the trial period.",
    satisfactionGuarantee: "Satisfaction Guarantee",
    satisfactionGuaranteeDesc:
      "Purchases are backed by our money-back guarantee as outlined in our Refund Policy.",
  },
  ru: {
    // Header
    home: "Главная",
    pricing: "Цены",
    sampleReport: "Пример Отчёта",
    signIn: "Войти",
    getStarted: "Начать",
    toggleTheme: "Сменить тему",

    // Hero
    proVehicleHistory: "Бесплатная История Авто",
    knowBeforeYouBuy: "Ясность для Каждого VIN",
    knowBeforeYouBuyPlate: "Ясность для Каждого Номера",
    heroSubtitle: "Отчет об авто на базе ИИ",

    // VIN Input
    byVin: "По VIN",
    byUsPlate: "По Номеру US",
    enterVin: "Введите 17-значный VIN",
    checkVin: "Проверить VIN",
    checking: "Проверка...",
    scanBarcode: "Сканировать",
    plateNumber: "Номер",
    state: "Штат",
    lookUpPlate: "Найти Номер",
    plateLookupComingSoon: "Введите или отсканируйте 17-значный VIN или номер США",
    vinValidationError: "VIN должен содержать 17 символов. Вы ввели",
    scanVinBarcode: "Сканировать Штрих-код VIN",
    scanLicensePlate: "Сканировать Номер",
    scanPlateInstructions: "Расположите номерной знак в рамке. Убедитесь, что он хорошо виден и освещён.",
    cameraPreview: "Предпросмотр камеры",
    scanningInstructions:
      "Расположите штрих-код VIN в рамке. Обычно находится на дверной стойке водителя или нижней части лобового стекла.",
    scanning: "Сканирование...",

    // Trust Badges
    nmvtisVerified: "Проверено NMVTIS",
    bankLevelSecurity: "Банковская Безопасность",
    privacyProtected: "Без Перепродажи Данных",
    trustNote: "Отчёты включают данные из более чем 100 источников, включая NMVTIS, страховые компании и автоаукционы.",
    extensiveReport: "Полный Отчёт",
    secureCheckout: "Безопасная Оплата",
    refundEligible: "Возврат Возможен",
    multiSourceData: "Данные из множества источников",

    // How It Works - Updated step descriptions
    howItWorks: "Как Это Работает",
    enterVinStep: "Введите VIN или Номер",
    enterVinStepDesc: "Введите или отсканируйте 17-значный VIN автомобиля или его номерной знак",
    instantAnalysis: "Мгновенный Анализ",
    instantAnalysisDesc: "Мы ищем миллионы записей за секунды",
    getReport: "Получить Отчёт",
    getReportDesc: "Изучите полную историю и принимайте взвешенные решения",

    // Features
    comprehensiveData: "Полные Данные",
    comprehensiveDataDesc:
      "Доступ к записям из более чем 100 надёжных источников, включая NMVTIS, страховые компании и сервисные записи.",
    accidentHistory: "История Аварий",
    accidentHistoryDesc:
      "Детальные отчёты об авариях с указанием серьёзности повреждений, срабатывания подушек безопасности и оценки ремонта.",
    ownershipRecords: "Записи о Владении",
    ownershipRecordsDesc: "Полная хронология владения, включая историю регистрации и передачи права собственности.",
    titleBrands: "Марки Титула",
    titleBrandsDesc:
      "Проверьте на утилизацию, восстановление, затопление, лимонный закон и другие критические марки титула.",
    recallAlerts: "Оповещения об Отзывах",
    recallAlertsDesc: "Активные отзывы производителя со статусом выполнения и информацией о ремонте.",
    marketValue: "Рыночная Стоимость",
    marketValueDesc: "Оценка рыночной стоимости в реальном времени на основе состояния, пробега и сопоставимых продаж.",

    // Pricing
    choosePlan: "Выберите План",
    singleReport: "Один Отчёт",
    perReport: "за отчёт",
    bestValue: "Лучшая Цена",
    proPass: "Про Пропуск",
    reports: "отчётов",
    perReportSavings: "за отчёт",
    monthly: "Ежемесячно",
    perMonth: "в месяц",
    unlimitedReports: "Безлимитные отчёты",
    buyNow: "Купить Сейчас",
    subscribe: "Подписаться",
    compareFeatures: "Сравнить Функции",
    feature: "Функция",
    included: "Включено",
    notIncluded: "Не включено",

    // Footer
    footerTagline: "Отчеты об автомобилях, которым доверяют тысячи.",
    product: "Продукт",
    vinCheck: "VIN-Prüfung",
    company: "Компания",
    about: "О нас",
    contact: "Контакт",
    careers: "Karriere",
    legal: "Rechtliches",
    privacyPolicy: "Datenschutzrichtlinie",
    termsOfService: "Nutzungsbedingungen",
    refundPolicy: "Политика Возврата",
    dataProtection: "Datenschutz",
    encrypted: "Verschlüsselt",
    neverSellData: "Мы никогда не продаём ваши данные",
    allRightsReserved: "Все права защищены.",
    faq: "FAQ (ЧаВо)",
    blog: "Блог",
    signOut: "Выйти",



    // Trust Badges


    // Report
    aiSummary: "ИИ Резюме",
    overview: "Обзор",
    ownership: "Владение",
    history: "История",
    accidents: "ДТП и Ущерб",
    recalls: "Отозыв кампании",
    salesHistory: "Продажи",

    // Report Status
    goodBuy: "ХОРОШАЯ ЦЕНА",
    caution: "ВНИМАНИЕ",
    highRisk: "ВЫСОКИЙ РИСК",
    miles: "Пробег",
    owners: "Владельцы",
    titleStatus: "ПТС",

    // Report Actions
    reportActions: "Действия",
    shareReport: "Поделиться",
    downloadPdf: "Скачать PDF",
    emailReport: "Отправить Email",
    yourPlan: "Ваш План",
    currentPlan: "Текущий План",
    reportsRemaining: "Осталось",
    expires: "Истекает",
    upgradePlan: "Обновить План",
    upgradeNow: "Улучшить Сейчас",
    noReportsRemaining: "Нет доступных отчетов",
    rateLimited: "Лимит запросов",
    pleaseWait: "Подождите 30 секунд",
    shareLinkCopied: "Ссылка скопирована!",
    preparingPdf: "Подготовка PDF...",
    emailSent: "Email отправлен!",

    // Info Page
    infoAndLegal: "Инфо и Право",
    infoSubtitle: "Все, что нужно знать о CarMR, наших правилах и помощи.",
    faqTitle: "Частые Вопросы",
    faqDesc: "Ответы на популярные вопросы о наших отчетах.",
    howItWorksTitle: "Как это работает",
    howItWorksDesc: "Получить отчет об истории автомобиля быстро и легко.",
    blogTitle: "Блог",
    blogDesc: "Будьте в курсе последних новостей и советов.",
    careersTitle: "Карьера",
    careersDesc: "Присоединяйтесь к нашей команде.",
    supportTitle: "Поддержка",
    supportDesc: "Наша команда поддержки готова помочь вам.",
    cookiePolicy: "Политика Cookie",
    cookiePolicyDesc: "Мы используем cookies для улучшения сервиса.",
    securityPrivacy: "Безопасность",
    securityPrivacyDesc: "Ваши данные защищены шифрованием (TLS 1.3).",
    systemStatus: "Статус Системы",
    allSystemsOperational: "Все системы работают",
    lastUpdated: "Обновлено:",


    marketValueTab: "Рыночная Стоимость",
    share: "Поделиться",
    download: "Скачать",
    email: "E-Mail",
    verifiedReport: "Проверенный Отчёт",
    reportId: "ID Отчёта",
    generatedFor: "Сгенерировано для",

    // Auth
    emailLabel: "Email или номер телефона",
    passwordLabel: "Пароль",
    confirmPasswordLabel: "Подтвердите пароль",
    fullNameLabel: "Полное имя (Необязательно)",
    rememberMe: "Запомнить меня",
    forgotPasswordLink: "Забыли пароль?",
    signInTitle: "С возвращением",
    signInDesc: "Войдите в свой аккаунт, чтобы продолжить",
    signUpTitle: "Создать аккаунт",
    signUpDesc: "Начните проверку истории автомобиля сегодня",
    orContinueWith: "Или продолжить с email или телефоном",
    alreadyHaveAccount: "Уже есть аккаунт?",
    dontHaveAccount: "Нет аккаунта?",
    createAccount: "Создать Аккаунт",
    sendResetInstructions: "Отправить инструкции",
    backToSignIn: "Назад ко Входу",
    checkInbox: "Проверьте почту",
    passwordStrength: "Требования к паролю:",
    passwordTopNav: "Забыли Пароль",
    resetSentTo: "Мы отправили инструкции по сбросу пароля на",
    tryAgain: "Попробовать снова",
    continueWithGoogle: "Продолжить через Google",
    continueWithApple: "Продолжить через Apple",
    forgotPasswordDesc:
      "Введите email или телефон, и мы отправим инструкции по сбросу пароля.",
    didntReceiveEmail: "Не получили письмо?",

    // Pricing Extended (English for accuracy)
    unlimitedAccessTrial: "Unlimited Access Trial",
    unlimitedAccessTrialDesc:
      "Enjoy 3 days of Pro Access with up to 5 vehicle history reports daily. You can cancel online at any time. Unless canceled, your subscription will automatically renew at $39.99/month (plus tax) after the trial period.",
    satisfactionGuarantee: "Satisfaction Guarantee",
    satisfactionGuaranteeDesc:
      "Purchases are backed by our money-back guarantee as outlined in our Refund Policy.",
  },
  ar: {
    // Header
    home: "الرئيسية",
    pricing: "الأسعار",
    sampleReport: "تقرير نموذجي",
    signIn: "تسجيل الدخول",
    getStarted: "ابدأ الآن",
    toggleTheme: "تغيير المظهر",

    // Hero
    proVehicleHistory: "تاريخ المركبة مجاناً",
    knowBeforeYouBuy: "وضوح لكل رقم VIN",
    knowBeforeYouBuyPlate: "وضوح لكل لوحة ترخيص",
    heroSubtitle: "تقرير المركبة بالذكاء الاصطناعي",

    // VIN Input
    byVin: "بواسطة VIN",
    byUsPlate: "بواسطة لوحة US",
    enterVin: "أدخل رقم VIN المكون من 17 حرفاً",
    checkVin: "تحقق من VIN",
    checking: "جاري التحقق...",
    scanBarcode: "مسح",
    plateNumber: "رقم اللوحة",
    state: "الولاية",
    lookUpPlate: "البحث عن اللوحة",
    plateLookupComingSoon: "أدخل أو امسح رقم VIN المكون من 17 حرفاً أو لوحة أمريكية",
    vinValidationError: "يجب أن يتكون VIN من 17 حرفاً. أدخلت",
    scanVinBarcode: "مسح باركود VIN",
    scanLicensePlate: "مسح لوحة الترخيص",
    scanPlateInstructions: "ضع لوحة الترخيص داخل الإطار. تأكد من أنها مرئية بوضوح ومضاءة جيداً.",
    cameraPreview: "معاينة الكاميرا",
    scanningInstructions: "ضع باركود VIN داخل الإطار. يوجد عادة على إطار باب السائق أو أسفل الزجاج الأمامي.",
    scanning: "جاري المسح...",

    // Trust Badges
    nmvtisVerified: "معتمد NMVTIS",
    bankLevelSecurity: "أمان بمستوى البنوك",
    privacyProtected: "لا إعادة بيع للبيانات",
    trustNote: "تتضمن التقارير بيانات من أكثر من 100 مصدر بما في ذلك NMVTIS وشركات التأمين ومزادات السيارات.",
    extensiveReport: "تقرير شامل",
    secureCheckout: "دفع آمن",
    refundEligible: "مؤهل للاسترداد",
    multiSourceData: "بيانات متعددة المصادر",

    // How It Works - Updated step descriptions
    howItWorks: "كيف يعمل",
    enterVinStep: "أدخل VIN أو اللوحة",
    enterVinStepDesc: "أدخل أو امسح رقم VIN للمركبة المكون من 17 حرفاً، أو لوحة ترخيصها",
    instantAnalysis: "تحليل فوري",
    instantAnalysisDesc: "نبحث في ملايين السجلات في ثوانٍ",
    getReport: "احصل على التقرير",
    getReportDesc: "راجع التاريخ الشامل واتخذ قرارات مستنيرة",

    // Features
    comprehensiveData: "بيانات شاملة",
    comprehensiveDataDesc: "الوصول إلى سجلات من أكثر من 100 مصدر موثوق بما في ذلك NMVTIS وشركات التأمين وسجلات الخدمة.",
    accidentHistory: "تاريخ الحوادث",
    accidentHistoryDesc: "تقارير حوادث مفصلة مع شدة الضرر وانتشار الوسائد الهوائية وتقديرات الإصلاح.",
    ownershipRecords: "سجلات الملكية",
    ownershipRecordsDesc: "جدول زمني كامل للملكية بما في ذلك تاريخ التسجيل ونقل الملكية.",
    titleBrands: "علامات الملكية",
    titleBrandsDesc:
      "تحقق من الإنقاذ والإعادة والأضرار الناجمة عن الفيضانات وقانون الليمون وعلامات الملكية الحرجة الأخرى.",
    recallAlerts: "تنبيهات الاستدعاء",
    recallAlertsDesc: "استدعاءات الشركة المصنعة النشطة مع حالة الإكمال ومعلومات العلاج.",
    marketValue: "القيمة السوقية",
    marketValueDesc: "تقييم السوق في الوقت الفعلي بناءً على الحالة والمسافة المقطوعة والمبيعات المماثلة.",

    // Pricing
    choosePlan: "اختر خطتك",
    singleReport: "تقرير واحد",
    perReport: "لكل تقرير",
    bestValue: "أفضل قيمة",
    proPass: "تصريح برو",
    reports: "تقارير",
    perReportSavings: "لكل تقرير",
    monthly: "شهري",
    perMonth: "شهرياً",
    unlimitedReports: "تقارير غير محدودة",
    buyNow: "اشترِ الآن",
    subscribe: "اشترك",
    compareFeatures: "قارن الميزات",
    feature: "الميزة",
    included: "مشمول",
    notIncluded: "غير مشمول",

    // Footer
    footerTagline: "تقارير مركبات يثق بها الآلاف.",
    product: "المنتج",
    vinCheck: "فحص VIN",
    company: "الشركة",
    about: "حول",
    contact: "اتصل",
    careers: "الوظائف",
    legal: "قانوني",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    refundPolicy: "سياسة الاسترداد",
    dataProtection: "حماية البيانات",
    encrypted: "مشفر",
    neverSellData: "نحن لا نبيع بياناتك أبداً",
    allRightsReserved: "جميع الحقوق محفوظة.",
    faq: "الأسئلة الشائعة",
    blog: "المدونة",
    signOut: "تسجيل الخروج",



    // Trust Badges


    // Report
    aiSummary: "ملخص الذكاء الاصطناعي",
    overview: "نظرة عامة",
    ownership: "الملكية",
    history: "التاريخ والأحداث",
    accidents: "الحوادث والأضرار",
    recalls: "الاستدعاءات والسلامة",
    salesHistory: "تاريخ المبيعات",

    // Report Status
    goodBuy: "شراء جيد",
    caution: "تحذير",
    highRisk: "خطر مرتفع",
    miles: "ميل",
    owners: "الملاك",
    titleStatus: "اللقب",

    // Report Actions
    reportActions: "إجراءات التقرير",
    shareReport: "مشاركة التقرير",
    downloadPdf: "تحميل PDF",
    emailReport: "إرسال بالبريد",
    yourPlan: "خطتك",
    currentPlan: "الخطة الحالية",
    reportsRemaining: "التقارير المتبقية",
    expires: "ينتهي",
    upgradePlan: "ترقية الخطة",
    upgradeNow: "ترقية الآن",
    noReportsRemaining: "لا توجد تقارير متبقية",
    rateLimited: "تم تجاوز الحد",
    pleaseWait: "يرجى الانتظار 30 ثانية",
    shareLinkCopied: "تم نسخ الرابط!",
    preparingPdf: "جاري تحضير PDF...",
    emailSent: "تم إرسال البريد!",

    // Info Page
    infoAndLegal: "المعلومات والقانونية",
    infoSubtitle: "كل ما تحتاج معرفته عن CarMR، سياساتنا، وكيف يمكننا مساعدتك.",
    faqTitle: "الأسئلة الشائعة",
    faqDesc: "اعثر على إجابات للأسئلة الأكثر شيوعاً حول خدماتنا.",
    howItWorksTitle: "كيف يعمل",
    howItWorksDesc: "الحصول على تقرير تاريخ السيارة سريع وسهل.",
    blogTitle: "المدونة",
    blogDesc: "ابق على اطلاع بآخر مقالاتنا ونصائح شراء السيارات.",
    careersTitle: "الوظائف",
    careersDesc: "انضم إلى فريقنا وساعد الملايين في اتخاذ قرارات مستنيرة.",
    supportTitle: "الدعم",
    supportDesc: "فريق الدعم لدينا هنا لمساعدتك في أي استفسارات.",
    cookiePolicy: "سياسة ملفات تعريف الارتباط",
    cookiePolicyDesc: "نستخدم ملفات تعريف الارتباط لتحسين خدماتنا.",
    securityPrivacy: "الأمان والخصوصية",
    securityPrivacyDesc: "بياناتك محمية بتشفير قياسي (TLS 1.3).",
    systemStatus: "حالة النظام",
    allSystemsOperational: "جميع الأنظمة تعمل",
    lastUpdated: "آخر تحديث:",


    marketValueTab: "القيمة السوقية",
    share: "مشاركة",
    download: "تحميل",
    email: "البريد الإلكتروني",
    verifiedReport: "تقرير موثق",
    reportId: "معرف التقرير",
    generatedFor: "أُنشئ لـ",

    // Auth
    emailLabel: "البريد الإلكتروني أو رقم الهاتف",
    passwordLabel: "كلمة المرور",
    confirmPasswordLabel: "تأكيد كلمة المرور",
    fullNameLabel: "الاسم الكامل (اختياري)",
    rememberMe: "تذكرني",
    forgotPasswordLink: "نسيت كلمة المرور؟",
    signInTitle: "مرحبًا بعودتك",
    signInDesc: "سجل الدخول إلى حسابك للمتابعة",
    signUpTitle: "إنشاء حساب",
    signUpDesc: "ابدأ فحص تاريخ سيارتك اليوم",
    orContinueWith: "أو تابع باستخدام البريد الإلكتروني أو الهاتف",
    alreadyHaveAccount: "هل لديك حساب بالفعل؟",
    dontHaveAccount: "ليس لديك حساب؟",
    createAccount: "إنشاء حساب",
    sendResetInstructions: "إرسال التعليمات",
    backToSignIn: "العودة لتسجيل الدخول",
    checkInbox: "تحقق من بريدك الوارد",
    passwordStrength: "متطلبات كلمة المرور:",
    passwordTopNav: "نسيت كلمة المرور",
    resetSentTo: "لقد أرسلنا تعليمات إعادة تعيين كلمة المرور إلى",
    tryAgain: "حاول مرة أخرى",
    continueWithGoogle: "المتابعة مع Google",
    continueWithApple: "المتابعة مع Apple",
    forgotPasswordDesc:
      "أدخل بريدك الإلكتروني أو رقم هاتفك وسنرسل لك تعليمات إعادة تعيين كلمة المرور.",
    didntReceiveEmail: "لم تستلم البريد الإلكتروني؟",

    // Pricing Extended
    unlimitedAccessTrial: "Unlimited Access Trial",
    unlimitedAccessTrialDesc:
      "Enjoy 3 days of Pro Access with up to 5 vehicle history reports daily. You can cancel online at any time. Unless canceled, your subscription will automatically renew at $39.99/month (plus tax) after the trial period.",
    satisfactionGuarantee: "Satisfaction Guarantee",
    satisfactionGuaranteeDesc:
      "Purchases are backed by our money-back guarantee as outlined in our Refund Policy.",
  },
}
