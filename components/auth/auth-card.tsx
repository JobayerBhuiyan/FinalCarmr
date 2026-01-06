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

            <div className="flex-1 flex items-center justify-center p-2">
                <div className="w-full max-w-[500px] space-y-2">
                    {showLogo && (
                        <div className="flex justify-center">
                            <Link href="/">
                                <Image
                                    src="/images/carMR-logo-cropped.png"
                                    alt="CarMR"
                                    width={130}
                                    height={26}
                                    className="h-6 w-auto"
                                    priority
                                />
                            </Link>
                        </div>
                    )}

                    <Card className="border-border/50 shadow-sm">
                        <CardHeader className="space-y-0.5 text-center py-2">
                            <CardTitle className="text-lg">{title}</CardTitle>
                            {description && <CardDescription className="text-xs">{description}</CardDescription>}
                        </CardHeader>
                        <CardContent className="px-4 pb-1.5">{children}</CardContent>
                        {footer && <div className="px-4 pb-4 pt-2 text-center text-xs text-muted-foreground">{footer}</div>}
                    </Card>
                </div>
            </div>
        </div>
    )
}
