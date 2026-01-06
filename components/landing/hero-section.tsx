"use client"

import { useState, useCallback } from "react"
import { VinInput } from "@/components/vin-input"
import { TrustBadge, SourcesLine } from "@/components/trust-badge"
import { useI18n } from "@/lib/i18n/context"

export function HeroSection() {
  const { t } = useI18n()
  const [mode, setMode] = useState<"vin" | "plate">("vin")

  const handleModeChange = useCallback((newMode: "vin" | "plate") => {
    setMode(newMode)
  }, [])

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 pt-6 pb-12 sm:px-6 sm:pt-10 sm:pb-16 lg:px-8 lg:pt-12 lg:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">{t.proVehicleHistory}</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight leading-[1.1] sm:text-5xl lg:text-6xl max-w-[18ch] mx-auto [text-wrap:balance] min-h-[2.5em] flex items-center justify-center">
              {mode === "vin" ? t.knowBeforeYouBuy : t.knowBeforeYouBuyPlate}
            </h1>
            <p className="mt-2 text-lg text-foreground/80 text-balance sm:text-xl font-medium">{t.heroSubtitle}</p>
          </div>

          <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center">
            <VinInput onModeChange={handleModeChange} />
          </div>

          <div className="mt-3 space-y-2">
            <TrustBadge />
            <SourcesLine />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/3 blur-3xl" />
      </div>
    </section>
  )
}
