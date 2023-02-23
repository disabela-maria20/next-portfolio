import React from 'react'
import { Title } from '../../Atoms'

const About: React.FC = (): JSX.Element => {
  return (
    <section className='container m-auto p-15' id='sobre'>
      <div className='mb-26 md:mt-55 '>
        <Title>Sobre</Title>
        <p>Formada em análise e desenvolvimento de sistemas, atuo mercado como front-end desde 2020 e desde então venho trabalhando para entregar produtos de alta qualidade no mercado como Experimentador e Brandlovrs.</p>
      </div>


    </section>
  )
}

export { About }