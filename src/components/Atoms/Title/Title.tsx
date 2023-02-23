import React from 'react'
import { ITitleProps } from './type'

const Title: React.FC<ITitleProps> = ({ children }): JSX.Element => {
  return (
    <h2 className='relative font-sans font-bold pt-26 pb-15 md:pt-45 inline-block
    after:content-[""] after:mt-0 after:absolute after:bottom-18 after:bg-yellow after:w-55 after:h-4 after:-right-26 after:z-40'>{children}</h2>
  )
}

export { Title }