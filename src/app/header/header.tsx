import React from "react"
import Link from 'next/link'

export default function SiteHeader() {
    return (
        <div className="flex flex-row justify-center items-center">
            <div className="align-middle text-2xl">
                <Link href="/">Home</Link>
            </div>
            <div className="align-middle text-2xl relative left-3">
                <Link href="Assignments.tsx">Assignments</Link>
            </div>
            <div className="align-middle text-2xl relative left-6 ">
                <Link href="Subjects.tsx">Subjects</Link>
            </div>
        </div>
    );
}