import Link from "next/link"
import { Shield, Cookie, Server, FileCheck, Lock } from "lucide-react"
import { BackButton } from "@/components/back-button"
import { Header } from "@/components/header"

export const metadata = {
    title: "Privacy Policy | CarMR",
    description: "Privacy policy and data protection information for CarMR.",
}

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 text-center relative">
                    <div className="absolute left-0 top-0 hidden lg:block">
                        <BackButton />
                    </div>
                    <div className="lg:hidden mb-4 flex justify-start">
                        <BackButton />
                    </div>

                    <div className="mb-4 flex items-center justify-center gap-3">
                        <Lock className="h-10 w-10 text-primary" />
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Privacy Policy</h1>
                    </div>
                    <p className="text-lg text-muted-foreground">
                        We value your privacy and are committed to protecting your personal data. This policy outlines exactly how we collect, use, and secure your information.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Main Privacy Section */}
                    <section id="general-privacy">
                        <div className="mb-6 flex items-center gap-3">
                            <Shield className="h-6 w-6 text-primary" />
                            <h2 className="text-2xl font-semibold">Data Collection & Usage</h2>
                        </div>
                        <div className="rounded-lg border border-border bg-card p-6 shadow-sm space-y-4">
                            <p className="text-foreground">
                                We collect only the essential data needed to provide our service:
                            </p>
                            <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                                <li><strong>Account Info:</strong> Your email address for account access and report delivery.</li>
                                <li><strong>Vehicle Data:</strong> VINs or license plates you search (to generate reports).</li>
                                <li><strong>Payment Info:</strong> Processed securely via Stripe. We never see or store your full card details.</li>
                            </ul>
                            <p className="text-muted-foreground pt-2">
                                <strong>We do not sell your personal data</strong> to third parties. Your search history is private and is only used to provide the reports you request.
                            </p>
                            <p className="text-sm text-muted-foreground pt-2 border-t mt-4">
                                Your data is protected with industry-standard encryption (TLS 1.3) in transit and at rest.
                            </p>
                        </div>
                    </section>

                    {/* Cookie Policy Section */}
                    <section id="cookies">
                        <div className="mb-6 flex items-center gap-3">
                            <Cookie className="h-6 w-6 text-primary" />
                            <h2 className="text-2xl font-semibold">Cookie Policy</h2>
                        </div>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                We use cookies and similar technologies to provide, protect, and improve our services.
                            </p>
                            <p>
                                <strong>Essential cookies</strong> are required for basic site functionality (like keeping you logged in) and cannot be disabled.
                                <strong> Analytics cookies</strong> help us understand how visitors use our site so we can improve it.
                            </p>
                            <p>
                                You can manage your cookie preferences at any time through your browser settings.
                            </p>
                        </div>
                    </section>

                    {/* Subprocessors Section */}
                    <section id="subprocessors">
                        <div className="mb-6 flex items-center gap-3">
                            <Server className="h-6 w-6 text-primary" />
                            <h2 className="text-2xl font-semibold">Subprocessors</h2>
                        </div>
                        <p className="mb-4 text-muted-foreground">
                            We work with trusted third-party service providers (subprocessors) to deliver our services. These partners
                            are bound by strict data protection agreements.
                        </p>
                        <div className="rounded-lg border border-border bg-muted/30 p-4">
                            <ul className="list-disc ml-5 space-y-1 text-sm text-muted-foreground">
                                <li><strong>Vercel:</strong> Web hosting and infrastructure</li>
                                <li><strong>Stripe:</strong> Payment processing</li>
                                <li><strong>AWS:</strong> Cloud infrastructure and storage</li>
                                <li><strong>Data Providers:</strong> Sources for vehicle history information</li>
                            </ul>
                        </div>
                    </section>

                    {/* DPA Section */}
                    <section id="dpa">
                        <div className="mb-6 flex items-center gap-3">
                            <FileCheck className="h-6 w-6 text-primary" />
                            <h2 className="text-2xl font-semibold">Data Rights</h2>
                        </div>
                        <p className="mb-4 text-muted-foreground">
                            Our Data Processing practices comply with GDPR, CCPA, and other applicable regulations.
                            Personal data is retained only as long as needed for the purposes outlined in this policy.
                        </p>
                        <p className="text-muted-foreground">
                            To exercise your privacy rights (such as deletion or access requests), please contact our Data Protection Officer at{" "}
                            <a href="mailto:support@carmr.com" className="text-primary hover:underline">support@carmr.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
