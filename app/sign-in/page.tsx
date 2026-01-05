"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2 } from "lucide-react"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

import { AuthCard } from "@/components/auth/auth-card"
import { PasswordInput } from "@/components/auth/password-input"
import { useAuth } from "@/lib/auth/context"
import { useI18n } from "@/lib/i18n/context"

const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Please enter a valid password" }),
  rememberMe: z.boolean().default(false),
})

type SignInFormValues = z.infer<typeof signInSchema>

export default function SignInPage() {
  const router = useRouter()
  const { signIn } = useAuth()
  const { t } = useI18n()
  const [isPending, startTransition] = useTransition()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  async function onSubmit(data: SignInFormValues) {
    setServerError(null)

    startTransition(async () => {
      try {
        const result = await signIn(data.email, data.password)

        if (result.success) {
          router.push("/")
        } else {
          setServerError(result.error || "Invalid email or password")
        }
      } catch (err) {
        setServerError("An unexpected error occurred. Please try again.")
      }
    })
  }

  return (
    <AuthCard
      title={t.signInTitle}
      description={t.signInDesc}
      breadcrumb={t.signIn}
      footer={
        <div className="text-center">
          {t.dontHaveAccount}{" "}
          <Link href="/sign-up" className="font-semibold text-primary hover:underline">
            {t.signUpTitle}
          </Link>
        </div>
      }
    >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="min-h-[40px] flex items-center justify-center">
          {serverError && (
            <div className="w-full rounded-md bg-destructive/15 p-2 text-xs text-destructive font-medium border border-destructive/20 text-center relative">
              {serverError}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            type="button"
            className="w-full h-10 text-xs sm:text-sm font-medium bg-background text-foreground border-input dark:bg-zinc-950 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-foreground hover:border-input transition-colors"
            disabled={isPending}
          >
            <Icons.google className="mr-2 h-4 w-4" />
            {t.continueWithGoogle}
          </Button>
          <Button
            variant="outline"
            type="button"
            className="w-full h-10 text-xs sm:text-sm font-medium bg-background text-foreground border-input dark:bg-zinc-950 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-foreground hover:border-input transition-colors"
            disabled={isPending}
          >
            <Icons.apple className="mr-2 h-4 w-4" />
            {t.continueWithApple}
          </Button>
        </div>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase">
            <span className="bg-background px-2 text-muted-foreground">{t.orContinueWith}</span>
          </div>
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

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-xs">{t.passwordLabel}</Label>
            <Link
              href="/forgot-password"
              className="text-xs font-medium text-primary hover:underline"
              tabIndex={-1}
            >
              {t.forgotPasswordLink}
            </Link>
          </div>
          <PasswordInput
            id="password"
            autoComplete="current-password"
            placeholder="••••••••••"
            disabled={isPending}
            className="h-10 text-sm"
            error={!!form.formState.errors.password}
            {...form.register("password")}
          />
          <div className="min-h-[14px] px-0.5">
            {form.formState.errors.password && (
              <p className="text-[10px] text-destructive leading-tight">{form.formState.errors.password.message}</p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2 py-1">
          <Checkbox
            id="rememberMe"
            checked={form.watch("rememberMe")}
            onCheckedChange={(checked) => form.setValue("rememberMe", checked as boolean)}
            disabled={isPending}
          />
          <Label
            htmlFor="rememberMe"
            className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {t.rememberMe}
          </Label>
        </div>

        <Button type="submit" className="w-full h-11 text-sm font-medium mt-2" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t.signIn}...
            </>
          ) : (
            t.signIn
          )}
        </Button>
      </form>
    </AuthCard>
  )
}
