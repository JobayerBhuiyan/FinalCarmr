"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Share2, Download, Mail, AlertCircle, Clock } from "lucide-react"
import { toast } from "sonner"
import { UpgradeModal } from "@/components/report/upgrade-modal"
import { CaptchaPlaceholder } from "@/components/captcha-placeholder"
import { useDemoState } from "@/components/demo-state-provider"
import type { VehicleReport } from "@/lib/mock-data"
import { useI18n } from "@/lib/i18n/context"

interface ReportSidebarProps {
  report: VehicleReport
}

export function ReportSidebar({ report }: ReportSidebarProps) {
  const { t } = useI18n()
  const [upgradeOpen, setUpgradeOpen] = useState(false)
  const { demoState } = useDemoState()

  const handleShare = () => {
    toast.success(t.shareLinkCopied, {
      description: "Link expires in 7 days.",
    })
  }

  const handleDownload = () => {
    toast.success(t.preparingPdf, {
      description: "Download will start shortly.",
    })
  }

  const handleEmail = () => {
    toast.success(t.emailSent, {
      description: `Report sent to ${report.userEmail}`,
    })
  }

  // Demo state conditions
  const isOutOfReports = demoState === "out-of-reports"
  const isRateLimited = demoState === "rate-limited"
  const requiresCaptcha = demoState === "requires-captcha"

  // Normal state plan info
  const planInfo = {
    type: isOutOfReports ? "package" : "pro-pass",
    reportsRemaining: isOutOfReports ? 0 : 3,
    expiresAt: "2025-01-15",
  }

  return (
    <>
      <div className="rounded-2xl border bg-card p-4">
        <div className="sticky top-24 space-y-4">
          {/* Rate Limited Banner */}
          {isRateLimited && (
            <Card className="border-warning bg-warning/10">
              <CardContent className="flex items-center gap-3 p-4">
                <Clock className="h-5 w-5 text-warning" />
                <div>
                  <p className="font-medium text-warning">{t.rateLimited}</p>
                  <p className="text-sm text-muted-foreground">{t.pleaseWait}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Captcha Required */}
          {requiresCaptcha && <CaptchaPlaceholder />}

          {/* Actions Card */}
          <Card className="border-0 shadow-none bg-muted/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">{t.reportActions}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" onClick={handleShare} disabled={isRateLimited}>
                <Share2 className="mr-2 h-4 w-4" />
                {t.shareReport}
              </Button>
              <Button
                variant="outline"
                className="w-full bg-background"
                onClick={handleDownload}
                disabled={isRateLimited}
              >
                <Download className="mr-2 h-4 w-4" />
                {t.downloadPdf}
              </Button>
              <Button variant="outline" className="w-full bg-background" onClick={handleEmail} disabled={isRateLimited}>
                <Mail className="mr-2 h-4 w-4" />
                {t.emailReport}
              </Button>
            </CardContent>
          </Card>

          {/* Plan Status Card */}
          <Card className="border-0 shadow-none bg-muted/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">{t.yourPlan}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t.currentPlan}</span>
                  <Badge variant="outline" className="capitalize">
                    {planInfo.type.replace("-", " ")}
                  </Badge>
                </div>

                {planInfo.type === "package" && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{t.reportsRemaining}</span>
                    <span className="font-semibold">{planInfo.reportsRemaining}</span>
                  </div>
                )}

                {planInfo.type === "pro-pass" && planInfo.expiresAt && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{t.expires}</span>
                    <span className="font-semibold">{new Date(planInfo.expiresAt).toLocaleDateString()}</span>
                  </div>
                )}

                {isOutOfReports && (
                  <div className="mt-4 rounded-lg border border-danger/30 bg-danger/10 p-3">
                    <div className="flex items-center gap-2 text-danger">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">{t.noReportsRemaining}</span>
                    </div>
                    <Button className="mt-3 w-full" size="sm" onClick={() => setUpgradeOpen(true)}>
                      {t.upgradeNow}
                    </Button>
                  </div>
                )}

                {!isOutOfReports && (
                  <Button
                    variant="outline"
                    className="mt-2 w-full bg-background"
                    size="sm"
                    onClick={() => setUpgradeOpen(true)}
                  >
                    {t.upgradePlan}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <UpgradeModal open={upgradeOpen} onOpenChange={setUpgradeOpen} />
    </>
  )
}
