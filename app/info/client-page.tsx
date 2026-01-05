"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BackButton } from "@/components/back-button"
import {
    CheckCircle,
    Shield,
    FileText,
    Users,
    HelpCircle,
    Cookie,
    Scale,
    Server,
    FileCheck,
    Activity,
    ArrowRight,
    Info as InfoIcon,
    ShieldAlert,
    Gavel,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { useI18n } from "@/lib/i18n/context"
import { Button } from "@/components/ui/button"

export default function InfoPageClient() {
    const { t } = useI18n()

    const lastUpdated = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })

    // Smooth scroll handler
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">

                {/* Header Area */}
                <div className="mb-12 text-center relative">
                    <div className="absolute left-0 top-0 hidden lg:block">
                        <BackButton />
                    </div>
                    <div className="lg:hidden mb-4 flex justify-start">
                        <BackButton />
                    </div>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">{t.infoAndLegal}</h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Transparency, trust, and comprehensive data. Everything you need to know about how CarMR works and how we protect you.
                    </p>
                    <p className="mt-4 text-sm font-medium text-muted-foreground">
                        Last updated: <span className="text-foreground">{lastUpdated}</span>
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-[250px_1fr]">
                    {/* Table of Contents (Sticky Sidebar) */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24 space-y-1 rounded-xl border bg-muted/30 p-4">
                            <p className="mb-3 font-semibold text-sm uppercase tracking-wider text-muted-foreground">Quick Links</p>
                            <nav className="space-y-1">
                                {[
                                    { id: 'definitions', label: 'Key Definitions', icon: InfoIcon },
                                    { id: 'faq', label: t.faqTitle, icon: HelpCircle },
                                    { id: 'how-it-works', label: t.howItWorksTitle, icon: CheckCircle },
                                    { id: 'blog', label: t.blogTitle, icon: FileText },
                                    { id: 'careers', label: t.careersTitle, icon: Users },
                                    { id: 'support', label: t.supportTitle, icon: HelpCircle },
                                    { id: 'legal', label: 'Legal & Privacy', icon: Scale },
                                    { id: 'subprocessors', label: 'Subprocessors', icon: Server },
                                    { id: 'status', label: t.systemStatus, icon: Activity },
                                ].map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={(e) => scrollToSection(e, item.id)}
                                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-background hover:text-primary hover:shadow-sm"
                                    >
                                        <item.icon className="h-4 w-4" />
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="space-y-16">

                        {/* Definitions Section */}
                        <section id="definitions" className="scroll-mt-24">
                            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 shadow-sm">
                                <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
                                    <InfoIcon className="h-5 w-5 text-primary" />
                                    Key Definitions
                                </h2>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div>
                                        <h3 className="font-semibold text-foreground">Single Report</h3>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            A one-time purchase of a comprehensive history check for a uniquely identified vehicle (by VIN or License Plate).
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">3-Day Trial (Pro Access)</h3>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            Temporary access to improved pricing and features for 72 hours. Automatically converts to a monthly subscription if not canceled.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Subscription</h3>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            Recurring monthly plan providing ongoing access to reports at discounted rates. Cancel anytime via your account dashboard.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Refund-Eligible</h3>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            Transactions meeting our <Link href="/refund-policy" className="text-primary hover:underline underline-offset-4">Refund Policy</Link> criteria (e.g., technical failures, duplicate charges) within 14 days.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                                <HelpCircle className="h-6 w-6 text-primary" />
                                {t.faqTitle}
                            </h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-medium">Where do you get your data?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        We aggregate data from the <strong className="text-foreground">National Motor Vehicle Title Information System (NMVTIS)</strong>, insurance carriers, auto auctions, and salvage yards. This ensures you see the same data used by dealers and insurance professionals.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-medium">What counts as a "Failed Lookup"?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        If our system cannot find <strong>any</strong> records for a valid VIN, the search is considered a "failed lookup" and you will not be charged (or a credit will not be deducted). Note that "no accidents found" is a valid result, not a failure.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left font-medium">How do subscriptions work?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        Our <strong>Pro Access</strong> plan starts with a 3-day trial. If you don't cancel within 72 hours, it renews into a monthly subscription at $39.99/mo. You can cancel instantly from your profile page—no phone calls required.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-left font-medium">Is my payment info safe?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        Yes. We use <strong>Stripe</strong> for all payment processing. We never store your full credit card number on our servers. All connections are encrypted via TLS 1.3.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger className="text-left font-medium">How can I get a refund?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        If you experienced a technical error or are unsatisfied with a blank report, visit our <Link href="/refund-policy" className="text-primary font-medium hover:underline">Refund Policy</Link> page to submit a request within 14 days.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </section>

                        {/* How It Works Section */}
                        <section id="how-it-works" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                                <CheckCircle className="h-6 w-6 text-primary" />
                                {t.howItWorksTitle}
                            </h2>
                            <div className="grid gap-8 sm:grid-cols-3">
                                <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">1</div>
                                    <h3 className="mb-2 font-bold">Enter VIN or Plate</h3>
                                    <p className="text-sm text-muted-foreground">Input the unique 17-character VIN or US License Plate. Our system validates it instantly.</p>
                                </div>
                                <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">2</div>
                                    <h3 className="mb-2 font-bold">Real-Time Scan</h3>
                                    <p className="text-sm text-muted-foreground">We query over 100+ data points including Title brands, Odometer checks, and Theft records.</p>
                                </div>
                                <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">3</div>
                                    <h3 className="mb-2 font-bold">Instant Report</h3>
                                    <p className="text-sm text-muted-foreground">View your report immediately online. Download as PDF or share via a secure link.</p>
                                </div>
                            </div>
                        </section>

                        {/* Blog Section */}
                        <section id="blog" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                                <FileText className="h-6 w-6 text-primary" />
                                {t.blogTitle}
                            </h2>
                            <div className="grid gap-4">
                                {[
                                    { title: "Avoid the Lemon: 10 Used Car Red Flags", desc: "Rust spots, mismatched paint, and damp carpets—what to look for during inspection." },
                                    { title: "Salvage vs. Rebuilt Titles Explained", desc: "Why a rebuilt title might be a bargain, and when it's a dangerous money pit." },
                                    { title: "Odometer Rollback FRAUD is Rising", desc: "Digital odometers aren't immune. Learn how to verify true mileage with our reports." }
                                ].map((post, i) => (
                                    <div key={i} className="group cursor-pointer rounded-lg border bg-card p-4 transition-all hover:bg-muted/50 hover:shadow-sm">
                                        <h3 className="font-semibold group-hover:text-primary transition-colors">{post.title}</h3>
                                        <p className="mt-1 text-sm text-muted-foreground">{post.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Support Section */}
                        <section id="support" className="scroll-mt-24">
                            <div className="rounded-xl bg-muted/50 p-8 shadow-sm">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                                        <HelpCircle className="h-8 w-8 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold">{t.supportTitle}</h2>
                                    <p className="mb-6 max-w-lg text-muted-foreground">
                                        Our dedicated team is ready to assist. We pride ourselves on response times under 2 hours during business hours.
                                    </p>
                                    <div className="grid gap-2 text-sm">
                                        <p><strong className="text-foreground">Email:</strong> <a href="mailto:support@carmr.com" className="text-primary hover:underline">support@carmr.com</a></p>
                                        <p><strong className="text-foreground">Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM EST</p>
                                        <p className="text-xs text-muted-foreground mt-2">Please include your <strong>Order ID</strong> for faster resolution.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Careers Section */}
                        <section id="careers" className="scroll-mt-24">
                            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                                <Users className="h-6 w-6 text-primary" />
                                {t.careersTitle}
                            </h2>
                            <div className="rounded-lg border border-dashed p-6 text-center">
                                <p className="mb-4 text-muted-foreground">
                                    We're building the most transparent vehicle marketplace on the web. We hire globally for remote-first roles.
                                </p>
                                <p className="text-sm font-medium">
                                    Currently hiring: <span className="text-foreground">Senior Full Stack Engineer</span>, <span className="text-foreground">Data Scientist (Vehicle Valuation)</span>.
                                </p>
                                <p className="mt-4 text-sm text-muted-foreground">
                                    Send your portfolio/CV to <a href="mailto:careers@carmr.com" className="text-primary hover:underline">careers@carmr.com</a>
                                </p>
                            </div>
                        </section>

                        {/* Legal Section Group */}
                        <div id="legal" className="scroll-mt-24 space-y-12 border-t pt-12">

                            {/* Terms of Service */}
                            <section>
                                <div className="mb-4 flex items-center gap-2">
                                    <Scale className="h-6 w-6 text-primary" />
                                    <h2 className="text-2xl font-bold">{t.termsOfService}</h2>
                                </div>

                                <div className="mb-6 rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4 text-sm">
                                    <p className="font-semibold text-yellow-600 mb-2 flex items-center gap-2">
                                        <ShieldAlert className="h-4 w-4" /> Important Notice: Not a Consumer Reporting Agency
                                    </p>
                                    <p className="text-muted-foreground">
                                        CarMR is <strong>NOT</strong> a consumer reporting agency under the FCRA. You may <strong>NOT</strong> use our reports for employment screening, tenant screening, credit underwriting, or insurance eligibility.
                                    </p>
                                </div>

                                <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                                    <p>
                                        <strong>Operator:</strong> CarMR is operated by <strong className="text-foreground">Bhuiyan Group LLC</strong>. By accessing our platform, you agree to be bound by our full <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>.
                                    </p>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="rounded border p-4 bg-muted/20">
                                            <h4 className="font-semibold text-foreground mb-2">Prohibited Uses</h4>
                                            <ul className="list-disc pl-4 space-y-1 text-xs">
                                                <li>Commercial resale or redistribution.</li>
                                                <li>Automated scraping or bot access.</li>
                                                <li>Harassment or illegal tracking.</li>
                                            </ul>
                                        </div>
                                        <div className="rounded border p-4 bg-muted/20">
                                            <h4 className="font-semibold text-foreground mb-2">Limitation of Liability</h4>
                                            <ul className="list-disc pl-4 space-y-1 text-xs">
                                                <li>Data provided "AS IS" without warranty.</li>
                                                <li>We are not liable for vehicle decisions.</li>
                                                <li>Liability capped at $100 USD.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="rounded-lg border p-4">
                                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                                            <Gavel className="h-4 w-4" /> Dispute Resolution
                                        </h4>
                                        <p className="text-xs">
                                            Any disputes shall be resolved by <strong>binding arbitration (AAA)</strong>, except for qualifying small claims. You explicitly <strong>waive your right to participate in a class-action lawsuit</strong>. You may opt out within 30 days of account creation by emailing <a href="mailto:support@carmr.com" className="text-primary hover:underline">support@carmr.com</a>.
                                        </p>
                                    </div>

                                    <p className="text-xs pt-2">
                                        Governing Law: <strong>Wisconsin, USA</strong>.
                                    </p>
                                </div>
                            </section>
                            {/* Privacy & Cookies */}
                            <section className="grid gap-8 sm:grid-cols-2">
                                <div>
                                    <h3 className="flex items-center gap-2 text-xl font-bold mb-3">
                                        <Shield className="h-5 w-5 text-primary" />
                                        {t.securityPrivacy}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        We employ <strong>TLS 1.3 encryption</strong> for all data in transit. We collect minimal data:
                                    </p>
                                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                        <li><strong>Account:</strong> Email, hashed password.</li>
                                        <li><strong>Sales:</strong> Transaction ID (we do not store cards).</li>
                                        <li><strong>Usage:</strong> VINs searched, IP address for security.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="flex items-center gap-2 text-xl font-bold mb-3">
                                        <Cookie className="h-5 w-5 text-primary" />
                                        {t.cookiePolicy}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        We use cookies to maintain your session and analyze site performance.
                                    </p>
                                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                        <li><strong>Essential:</strong> Login & payment security.</li>
                                        <li><strong>Analytics:</strong> Anonymous usage metrics.</li>
                                        <li><strong>Marketing:</strong> We do not sell your personal data.</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Subprocessors & DPA */}
                            <section id="subprocessors" className="scroll-mt-24">
                                <div className="mb-4 flex items-center gap-2">
                                    <Server className="h-6 w-6 text-primary" />
                                    <h2 className="text-xl font-bold">Subprocessors & DPA</h2>
                                </div>
                                <div className="rounded-lg border bg-card p-6">
                                    <p className="mb-4 text-sm text-muted-foreground">
                                        To deliver our service, we share data with select compliant providers under strict <strong>Data Processing Agreements (DPA)</strong>.
                                    </p>
                                    <div className="grid gap-2 text-sm font-medium">
                                        <div className="flex justify-between border-b pb-2"><span>Payment Processing</span> <span>Stripe, Inc.</span></div>
                                        <div className="flex justify-between border-b pb-2"><span>Cloud Infrastructure</span> <span>AWS / Vercel</span></div>
                                        <div className="flex justify-between border-b pb-2"><span>Email Delivery</span> <span>Resend / AWS SES</span></div>
                                        <div className="flex justify-between"><span>Data Sources</span> <span>NMVTIS, NVS, & Partners</span></div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* System Status */}
                        <section id="status" className="scroll-mt-24">
                            <div className="mb-4 flex items-center gap-2">
                                <Activity className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-bold">{t.systemStatus}</h2>
                            </div>
                            <div className="flex items-center gap-4 rounded-lg border border-green-500/20 bg-green-500/5 p-4 text-green-600">
                                <div className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </div>
                                <span className="font-semibold">{t.allSystemsOperational}</span>
                            </div>
                        </section>

                    </main>
                </div>
            </div>
        </div>
    )
}
