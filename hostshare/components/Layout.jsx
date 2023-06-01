
export default function Layout({children}) {

    return (
        <div>
            <nav className="container bg-default-color h-20 min-w-full flex items-center justify-around">
                <img src='./images/hostshareBlack.png' className="h-14 w-120"/>
            </nav>
            {children}
        </div>
    )
}