"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function BackButton() {
    const router = useRouter()

    return (
        <Button
            variant="ghost"
            onClick={() => router.back()}
            className="group mb-6 flex items-center gap-2 pl-0 text-muted-foreground hover:text-foreground hover:bg-transparent"
        >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back
        </Button>
    )
}
