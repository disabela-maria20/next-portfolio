import React from 'react'
import { ITitleProps } from './type'

const Title: React.FC<ITitleProps> = ({ children }): JSX.Element => {
  return (
    <h2 className='text-center font-sans text-38 md:text-45 font-bold pt-26 pb-15 md:pt-45 md:text-31'>{children}</h2>
  )
}

export { Title }