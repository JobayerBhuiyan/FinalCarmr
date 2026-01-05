"use client"

import { useState, useTransition } from "react"
import Link from "next/link"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, ArrowLeft, CheckCircle2 } from "lucide-react"
import { AuthCard } from "@/components/auth/auth-card"
import { useI18n } from "@/lib/i18n/context"

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
})

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>

export default function ForgotPasswordPage() {
  const { t } = useI18n()
  const [isPending, startTransition] = useTransition()
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  })

  // Watch email for success message
  const emailValue = form.watch("email")

  function onSubmit(data: ForgotPasswordValues) {
    setServerError(null)

    startTransition(async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      // Demo: Always succeed
      setIsSuccess(true)
    })
  }

  if (isSuccess) {
    return (
      <AuthCard
        title={t.checkInbox}
        showLogo={true}
      >
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-6 w-6 text-primary" />
          </div>

          <p className="text-sm text-muted-foreground">
            {t.resetSentTo}{" "}
            <span className="font-medium text-foreground">{emailValue}</span>
          </p>

          <div className="w-full space-y-2">
            <Button asChild className="w-full h-10 text-sm">
              <Link href="/sign-in">{t.backToSignIn}</Link>
            </Button>
            <p className="text-xs text-muted-foreground pt-2">
              {t.didntReceiveEmail}{" "}
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="font-medium text-primary hover:underline"
              >
                {t.tryAgain}
              </button>
            </p>
          </div>
        </div>
      </AuthCard>
    )
  }

  return (
    <AuthCard
      title={t.passwordTopNav}
      description={t.forgotPasswordDesc}
      showLogo={true}
    >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="min-h-[22px] flex items-center justify-center">
          {serverError && (
            <div className="w-full rounded-md bg-destructive/15 p-2 text-xs text-destructive font-medium border border-destructive/20 text-center relative">
              {serverError}
            </div>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-xs">{t.emailLabel}</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            autoComplete="username"
            disabled={isPending}
            className={`h-10 text-sm ${form.formState.errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
            {...form.register("email")}
          />
          <div className="min-h-[14px] px-0.5">
            {form.formState.errors.email && (
              <p className="text-[10px] text-destructive leading-tight">{form.formState.errors.email.message}</p>
            )}
          </div>
        </div>

        <Button type="submit" className="w-full h-11 text-sm font-medium" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            t.sendResetInstructions
          )}
        </Button>

        <div className="text-center pt-2">
          <Link
            href="/sign-in"
            className="inline-flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            {t.backToSignIn}
          </Link>
        </div>
      </form>
    </AuthCard>
  )
}
