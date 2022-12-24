type props = {
    open: boolean
    setOpen: () => void
}
const Buger = ({ open, setOpen }: props) => {
    return (
        <div
            className="flex flex-col justify-between align-center w-31 h-22 md:hidden"
            onClick={setOpen}
        >
            <span className={`line ${open ? 'active' : ''}`}></span>
            <span className={`line ${open ? 'active' : ''}`}></span>
            <span className={`line ${open ? 'active' : ''}`}></span>
        </div>
    )
}

export default Buger
