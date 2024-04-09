import React from "react"
import Link from 'next/link'

export default function SiteHeader() {
    return (
        <div className="flex">
            <div className="text-2xl">
                <Link href="/">Home</Link>
            </div>
            <div className="align">
                <Link href="Assignments.tsx">Assignments</Link>
            </div>
        </div>
    );
}