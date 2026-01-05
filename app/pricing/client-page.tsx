"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingColumns } from "@/components/pricing/pricing-columns"
import { PricingComparison } from "@/components/pricing/pricing-comparison"
import { TrustBadge } from "@/components/trust-badge"
import { useI18n } from "@/lib/i18n/context"

export function PricingPageClient() {
    const { t } = useI18n()

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-10 sm:py-12">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Plans and Pricing</h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Choose the plan that works for you. All plans include full vehicle history reports with AI-powered
                                summaries.
                            </p>
                        </div>

                        <PricingColumns className="mt-8" />

                        <div className="mt-4 mx-auto max-w-3xl space-y-3 text-sm text-muted-foreground">
                            <div className="mt-4 mx-auto max-w-3xl space-y-3 text-sm text-muted-foreground">
                                <p>
                                    <span className="font-semibold text-foreground">{t.unlimitedAccessTrial}:</span>{" "}
                                    {t.unlimitedAccessTrialDesc}
                                </p>
                                <p>
                                    <span className="font-semibold text-foreground">{t.satisfactionGuarantee}:</span>{" "}
                                    Purchases are backed by our money-back guarantee as outlined in our <Link href="/refund-policy" className="underline underline-offset-4 hover:text-primary">Refund Policy</Link>.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <TrustBadge />
                        </div>
                    </div>
                </section>

                <section className="bg-background py-10 sm:py-12">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">Compare Plans</h2>
                        <PricingComparison className="mt-8" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
