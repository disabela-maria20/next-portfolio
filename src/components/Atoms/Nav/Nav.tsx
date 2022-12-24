type props = {
    open: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Nav = ({ open }: props) => {
    return (
        <nav className="transition-[all] transform ease-in-out duration-200 left-0 top-79 md:top-0 md:w-auto absolute md:relative w-full overflow-hidden md:over">
            <ul className={`nav origin-center ${open ? '-translate-x-full' : '-translate-x-0'}`} >
                <li className="py-22  md:py-0">
                    <a href="#home" className="text-white hover:opacity-75 font-sans">
                        Home
                    </a>
                </li>
                <li className="pb-22  md:py-0 md:pl-31">
                    <a href="#trabalhos" className="text-white hover:opacity-75">
                        Trabalhos
                    </a>
                </li>
                <li className="pb-22 md:py-0 md:pl-31">
                    <a href="#sobre" className="text-white hover:opacity-75">
                        Sobre
                    </a>
                </li>
                <li className="pb-22  md:py-0 md:ml-31 hidden md:block">
                    <a href="#contato" className="text-white py-10 rounded-sm hover:opacity-75"> | </a>
                </li>
                <li className="pb-22  md:py-0 md:ml-31">
                    <a href="#contato" className="text-white py-10 rounded-sm hover:opacity-75">
                        Contato
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
