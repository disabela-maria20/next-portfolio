import { useState } from 'react'
import Buger from '../../Atoms/Burger/Buger'
import Logo from '../../Atoms/Logo/Logo'
import Nav from '../../Atoms/Nav/Nav'

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <header className="h-79">
      <div className="container m-auto">
        <div className="md:flex md:justify-between md:items-center">
          <div className="flex justify-between p-13 items-center md:block">
            <Logo />
            <Buger open={open} setOpen={() => setOpen(!open)} />
          </div>
          <Nav open={open} />
        </div>
      </div>
    </header>
  )
}

export default Menu