import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AuthCardProps {
    title: string
    description?: string
    children: React.ReactNode
    footer?: React.ReactNode
    showLogo?: boolean
    breadcrumb?: string
}

export function AuthCard({ title, description, children, footer, showLogo = true, breadcrumb }: AuthCardProps) {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <div className="w-full max-w-[500px] mx-auto px-4 pt-4 sm:px-0">
                <nav className="flex items-center text-sm font-medium text-muted-foreground">
                    <Link
                        href="/"
                        className="hover:text-foreground transition-colors"
                    >
                        Home
                    </Link>
                    {breadcrumb && (
                        <>
                            <span className="mx-2">›</span>
                            <span className="text-foreground">{breadcrumb}</span>
                        </>
                    )}
                </nav>
            </div>

            <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
                <div className="w-full max-w-[500px] space-y-4">
                    {showLogo && (
                        <div className="flex justify-center">
                            <Link href="/">
                                <Image
                                    src="/images/carMR-logo-cropped.png"
                                    alt="CarMR"
                                    width={160}
                                    height={32}
                                    className="h-8 w-auto"
                                    priority
                                />
                            </Link>
                        </div>
                    )}

                    <Card className="border-border/50 shadow-sm">
                        <CardHeader className="space-y-1 text-center">
                            <CardTitle className="text-2xl">{title}</CardTitle>
                            {description && <CardDescription>{description}</CardDescription>}
                        </CardHeader>
                        <CardContent>{children}</CardContent>
                        {footer && <div className="px-6 pb-6 pt-0 text-center text-sm text-muted-foreground">{footer}</div>}
                    </Card>
                </div>
            </div>
        </div>
    )
}
