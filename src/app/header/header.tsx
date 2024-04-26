import Link from 'next/link'

export default function SiteHeader() {
    return (
        <div className="flex flex-row justify-evenly items-center">
            <div className="align-middle text-2xl">
                <Link href="/">Home</Link>
            </div>
            <div className="align-middle text-2xl relative ">
                <Link href="../Assignments" data-testid="">Assignments</Link>
            </div>
            <div className="align-middle text-2xl relative ">
                <Link href="../Subjects">Subjects</Link>
            </div>
            <div className="align-middle text-2xl relative ">
                <Link href="Results">Results</Link>
            </div>
            <div className="align-middle text-2xl relative ">
                <Link href="../University">University</Link>
            </div>
            <div className="align-middle text-2xl relative ">
                <Link href="../Shows">Shows</Link>
            </div>
            <div className="align-middle text-2xl relative ">
                <Link href="../Music">Music</Link>
            </div>
        </div>
    );
}
