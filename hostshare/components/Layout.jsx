import Link from 'next/link'

export default function Layout({children}) {

    return (
        <div>
            <nav className="container bg-default-color h-20 min-w-full flex items-center justify-around">
                <Link href="/"><img src='./images/hostshareBlack.png' className="h-14 w-120"/></Link>
            </nav>
            {children}
        </div>
    )
}