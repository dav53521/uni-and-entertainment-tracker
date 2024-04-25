import React from "react"
import Link from 'next/link'

export default function SiteHeader() {
    return (
        <div className="flex flex-row justify-evenly items-center">
            <div className="align-middle text-2xl">
                <Link href="/">Home</Link>
            </div>
            <div className="align-middle text-2xl relative ">
                <Link href="Assignments.tsx" data-testid="">Assignments</Link>
            </div>
            <div className="align-middle text-2xl relative ">
                <Link href="Subjects.tsx">Subjects</Link>
            </div>
            <div className="align-middle text-2xl relative ">
                <Link href="Results.tsx">Results</Link>
            </div>
            <div className="align-middle text-2xl relative ">
                <Link href="University.tsx">University</Link>
            </div>
            <div className="align-middle text-2xl relative ">
                <Link href="Shows.tsx">Shows</Link>
            </div>
            <div className="align-middle text-2xl relative ">
                <Link href="Music.tsx">Music</Link>
            </div>
        </div>
    );
}
