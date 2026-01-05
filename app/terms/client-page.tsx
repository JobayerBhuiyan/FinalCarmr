"use client"

import Link from "next/link"
import { Scale, ShieldAlert, Gavel, FileWarning, Crown, AlertTriangle, Scale as ScaleIcon, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { BackButton } from "@/components/back-button"

export default function TermsPageClient() {
    const lastUpdated = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-12 text-center relative">
                    <div className="absolute left-0 top-0 hidden lg:block">
                        <BackButton />
                    </div>
                    <div className="lg:hidden mb-4 flex justify-start">
                        <BackButton />
                    </div>

                    <div className="mb-4 flex items-center justify-center gap-3">
                        <Scale className="h-10 w-10 text-primary" />
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Terms of Service</h1>
                    </div>

                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Please read these Terms carefully. They contain a binding arbitration agreement and class action waiver that affect your rights.
                    </p>
                    <p className="mt-4 text-sm font-medium text-muted-foreground">
                        Last updated: <span className="text-foreground">{lastUpdated}</span>
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-[250px_1fr]">
                    {/* Table of Contents (Sticky Sidebar) */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24 space-y-1 rounded-xl border bg-muted/30 p-4 text-sm">
                            <p className="mb-3 font-semibold uppercase tracking-wider text-muted-foreground">Section Index</p>
                            <nav className="space-y-1">
                                {[
                                    { id: 'important-notices', label: '1. Important Notices' },
                                    { id: 'access', label: '2. Access & Security' },
                                    { id: 'use', label: '3. Prohibited Use' },
                                    { id: 'billing', label: '4. Billing & Refunds' },
                                    { id: 'disclaimers', label: '5. Disclaimers' },
                                    { id: 'liability', label: '6. Liability Limits' },
                                    { id: 'disputes', label: '7. Dispute Resolution' },
                                    { id: 'general', label: '8. General Terms' },
                                    { id: 'contact', label: '9. Contact Us' },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className="block w-full text-left rounded-md px-3 py-2 font-medium text-muted-foreground transition-all hover:bg-background hover:text-primary hover:shadow-sm"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="space-y-12">

                        {/* 1. Important Notices (FCRA) */}
                        <section id="important-notices" className="scroll-mt-24">
                            <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-6 shadow-sm">
                                <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
                                    <ShieldAlert className="h-5 w-5 text-yellow-600" />
                                    1. Important Notices & FCRA Disclaimer
                                </h2>
                                <p className="text-sm font-medium leading-relaxed text-foreground">
                                    CarMR is <span className="underline decoration-yellow-500/50 decoration-2 underline-offset-2">NOT a consumer reporting agency</span> as defined by the Fair Credit Reporting Act (FCRA), 15 U.S.C. § 1681 et seq.
                                </p>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    You may <strong>NOT</strong> use our services or reports to make decisions regarding:
                                </p>
                                <ul className="mt-2 text-sm text-muted-foreground space-y-1 list-disc pl-5">
                                    <li>Employment screening or hiring.</li>
                                    <li>Tenant screening or housing eligibility.</li>
                                    <li>Credit or insurance underwriting.</li>
                                    <li>Any other purpose requiring FCRA compliance.</li>
                                </ul>
                            </div>
                        </section>

                        {/* 2. Access & Security */}
                        <section id="access" className="scroll-mt-24">
                            <h2 className="mb-4 text-2xl font-bold">2. Access, Accounts & Termination</h2>
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="rounded-lg border bg-card p-5">
                                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                                        <Crown className="h-4 w-4 text-primary" /> Eligibility
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        You must be at least <strong>18 years old</strong> to use CarMR. By creating an account, you warrant that all information you provide is accurate and current.
                                    </p>
                                </div>
                                <div className="rounded-lg border bg-card p-5">
                                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                                        <ShieldAlert className="h-4 w-4 text-destructive" /> Termination
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        We reserve the right to suspend or terminate your account immediately, without notice, if you breach these Terms or engage in suspicious activity.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 3. Prohibited Use */}
                        <section id="use" className="scroll-mt-24">
                            <h2 className="mb-4 text-2xl font-bold">3. Prohibited Uses & IP</h2>
                            <div className="space-y-4">
                                <p className="text-muted-foreground">
                                    CarMR grants you a limited, non-exclusive, non-transferable license to access reports for <strong>personal use only</strong>. You agree NOT to:
                                </p>
                                <ul className="grid gap-2 sm:grid-cols-2">
                                    {[
                                        "Resell or redistribute reports commercially.",
                                        "Use bots, scrapers, or spiders to access data.",
                                        "Reverse engineer any part of the service.",
                                        "Share your account credentials with others.",
                                        "Use reports for harassment or illegal tracking.",
                                        "Bypass any security measures or rate limits."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 rounded border bg-muted/20 p-3 text-sm">
                                            <FileWarning className="h-4 w-4 text-destructive shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-muted-foreground mt-4">
                                    All content, logos, and data compilations are the property of <strong>Bhuiyan Group LLC</strong> or its data providers and are protected by U.S. and international copyright laws.
                                </p>
                            </div>
                        </section>

                        {/* 4. Billing */}
                        <section id="billing" className="scroll-mt-24">
                            <h2 className="mb-4 text-2xl font-bold">4. Billing, Subscriptions & Refunds</h2>
                            <div className="space-y-4 rounded-xl border bg-card p-6">
                                <div className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        <strong className="text-foreground">Trials & Renewals:</strong> Promotional trials (e.g., 3-Day Pro Access) automatically convert to a paid monthly subscription unless canceled <strong>before</strong> the trial period ends. Use your account dashboard to cancel anytime.
                                    </p>
                                    <p>
                                        <strong className="text-foreground">Price Changes:</strong> We reserve the right to adjust pricing at any time. Active subscriptions will be notified email 30 days in advance of any price increase.
                                    </p>
                                    <p>
                                        <strong className="text-foreground">Refund Policy:</strong> All purchases are final unless they meet specific criteria outlined in our <Link href="/refund-policy" className="text-primary hover:underline">Refund Policy</Link>. Subscription fees are non-refundable once charged, except where required by law.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 5. Disclaimers */}
                        <section id="disclaimers" className="scroll-mt-24">
                            <h2 className="mb-4 text-2xl font-bold">5. Disclaimers</h2>
                            <div className="rounded-xl bg-muted/50 p-6">
                                <p className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">Provided "As Is" With No Warranty</p>
                                <p className="text-muted-foreground mb-4">
                                    Data in our reports is aggregated from third-party sources (NMVTIS, auctions, insurance). CarMR <strong>does not verify</strong> this data independently.
                                </p>
                                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                    <li>We do not guarantee that a report is complete, timely, or accurate.</li>
                                    <li>A "clean" report does not guarantee a vehicle is defect-free.</li>
                                    <li>We expressly disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.</li>
                                </ul>
                            </div>
                        </section>

                        {/* 6. Limitation of Liability */}
                        <section id="liability" className="scroll-mt-24">
                            <h2 className="mb-4 text-2xl font-bold text-destructive">6. Limitation of Liability</h2>
                            <p className="mb-4 text-muted-foreground">
                                To the maximum extent permitted by law, <strong>Bhuiyan Group LLC</strong> shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of the service.
                            </p>
                            <div className="rounded border-l-4 border-destructive bg-destructive/10 p-4">
                                <p className="text-sm font-bold text-destructive">
                                    Your sole remedy for dissatisfaction is to stop using the service. Our total liability for any claim shall not exceed the amount you paid us in the past 12 months, or $100 USD, whichever is greater.
                                </p>
                            </div>
                        </section>

                        {/* 7. Dispute Resolution */}
                        <section id="disputes" className="scroll-mt-24">
                            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                                <Gavel className="h-6 w-6 text-primary" />
                                7. Dispute Resolution & Arbitration
                            </h2>
                            <div className="space-y-6 text-sm text-muted-foreground">
                                <p>
                                    <strong>PLEASE READ THIS:</strong> It requires you to arbitrate disputes with CarMR and limits the manner in which you can seek relief.
                                </p>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded border p-4">
                                        <h4 className="font-bold text-foreground mb-1">Binding Arbitration</h4>
                                        <p>All disputes shall be resolved by final and binding arbitration administered by the <strong>American Arbitration Association (AAA)</strong>. <em>Exception:</em> You may take claims to small claims court if they qualify.</p>
                                    </div>
                                    <div className="rounded border p-4">
                                        <h4 className="font-bold text-foreground mb-1">Class Action Waiver</h4>
                                        <p>You agree to only resolve disputes on an individual basis and waive any right to participate in a class-action lawsuit or class-wide arbitration.</p>
                                    </div>
                                </div>
                                <p>
                                    <strong>Opt-Out:</strong> You may opt out of this agreement to arbitrate by emailing <a href="mailto:support@carmr.com" className="text-primary hover:underline">support@carmr.com</a> within 30 days of first accepting these Terms.
                                </p>
                                <p>
                                    <strong>Governing Law:</strong> These Terms are governed by the laws of the State of <strong>Wisconsin</strong>, without regard to conflict of law principles.
                                </p>
                            </div>
                        </section>

                        {/* 8. General */}
                        <section id="general" className="scroll-mt-24">
                            <h2 className="mb-4 text-xl font-bold">8. General Terms</h2>
                            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                <li><strong>Severability:</strong> If any provision is found invalid, the remaining provisions remain in full effect.</li>
                                <li><strong>Assignment:</strong> You may not assign your rights under these Terms. We may assign our rights without restriction.</li>
                                <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and CarMR regarding the service.</li>
                            </ul>
                        </section>

                        {/* 9. Contact */}
                        <section id="contact" className="scroll-mt-24 border-t pt-8">
                            <div className="flex flex-col items-center justify-center text-center">
                                <h2 className="mb-2 text-xl font-bold">9. Contact Us</h2>
                                <p className="text-muted-foreground mb-4">
                                    Questions about these Terms? We're here to help.
                                </p>
                                <a href="mailto:support@carmr.com" className="flex items-center gap-2 font-medium text-primary hover:underline">
                                    <Mail className="h-4 w-4" />
                                    support@carmr.com
                                </a>
                                <p className="mt-4 text-xs text-muted-foreground">
                                    Bhuiyan Group LLC<br />
                                    Wisconsin, USA
                                </p>
                            </div>
                        </section>

                    </main>
                </div>
            </div>
        </div>
    )
}
