"use client"

import { SignOutButton, useUser } from "@clerk/nextjs"
import Link from "next/link"

import { UserButton, ClerkLoaded, ClerkLoading } from "@clerk/nextjs"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export const LoginButton = () => {
    const { user } = useUser()

    return (
        <>
            {user && (
                <div>
                    <ClerkLoaded>
                        <UserButton userProfileMode="modal"/>
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className="size-8 animate-spin text-slate-900"/>
                    </ClerkLoading>
                </div>
            )}
            {!user && (
                <div className="flex items-center justify-center gap-x-2">
                    <Link href="/sign-in">
                        <Button className="focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none bg-transparent text-black font-semibold text-sm hover:bg-gradient-to-l from-[#0047C9] via-[#0055D2] to-[#0068DE] hover:text-white transition">
                            Login
                        </Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button className="focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none bg-transparent text-black font-semibold text-sm hover:bg-gradient-to-l from-[#0047C9] via-[#0055D2] to-[#0068DE] hover:text-white transition">
                            Sign Up
                        </Button>
                    </Link>
                </div>
            )}
        </>
    )
}