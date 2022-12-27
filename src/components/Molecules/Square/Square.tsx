import React, { useEffect, useRef } from 'react'

const Square = () => {
  const block = useRef<HTMLDivElement | null>(null)
  const creactSquare = () => {
    let altura = window.innerHeight
    let largura = window.innerWidth

    let posisaoX = Math.floor(Math.random() * largura)
    let posisaoY = Math.floor(Math.random() * altura)

    let size = Math.floor(Math.random() * 50)
    let square = document.createElement('spam')

    square.style.width = 20 + size + 'px'
    square.style.height = 20 + size + 'px'

    square.style.background = '#ffffff59'
    square.className = `animateSquare`
    square.style.top = posisaoY + 'px'
    square.style.left = posisaoX + 'px'
    square.style.position = 'absolute'

    block.current?.appendChild(square)
    setTimeout(() => {
      square.remove()
    }, 6000)
  }

  useEffect(() => {
    setInterval(() => {
      creactSquare()
    }, 800)
  }, [])

  return (
    <>
      <section className='square relative overflow-hidden flex flex-col items-center justify-center bg-waves bg-no-repeat' ref={block}>
        <div className=" h-100">
          <h1 className='relative text-white font-serif text-center mb-15 leading-title after:content-[""] after:mt-15 after:absolute after:-bottom-8  after:bg-yellow after:w-185 after:h-2 after:left-0 after:right-0 after:m-auto after:z-40 '>
            Desenvolvedora<br /> Front-end
          </h1>
          <span className='text-white font-serif block text-center text-18'>React.js, Next.js & Typescript </span>
        </div>
      </section>
    </>
  )
}

export default Square


