/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { lazy, Suspense, useState } from 'react'
import { Title } from '../../Atoms'
import server from '../../../json/ServerProjescts.json'

const Project = React.lazy(() => import('../../Templates/THome/THome'))

const Projects: React.FC = (): JSX.Element => {
  const [select, setSelect] = useState('professional');

  return (
    <div className='container m-auto px-15' id='trabalhos'>
      <div className='md:mt-45 flex flex-col items-center md:justify-between md:flex-row mb-26'>
        <Title>
          Trabalhos
        </Title>
        <select className='px-10 py-10 border rounded-md w-164' defaultValue="professional" value={select ? select : ''} onChange={({ target }) => setSelect(target.value)}>
          <option value="professional" selected>Profissional</option>
          <option value="study">Estudo</option>
        </select>
      </div>

      <Suspense fallback={<div>teste</div>}>
        <article className='grid grid-cols-1 grid-rows-6 md:grid-rows-none sm:grid-cols-2 md:grid-cols-3 gap-26 md:gap-38'>
          {server
            .filter((e) => e.type === select)
            .map(data => (
              <div key={data.id} className="relative z-20">
                <img src={data.img} alt={`Projeto ${data.name}`} width="auto" height="auto" className=' relative -z-10 h-full object-cover' />
                <div className='absolute top-0 h-full w-full flex justify-center flex-col items-center bg-black bg-opacity-60 hover:blur-sm'>
                  <h3 className='text-white font-sans font-semibold text-18 hover:blur-none'>{data.name}</h3>
                  <img src={data.technology.icon} alt={`Projeto ${data.technology.name}`} width="auto" height="auto" className='relative -z-10 object-cover  w-22' />
                </div>
              </div>
            ))}
        </article>
      </Suspense>

    </div>
  )
}

export { Projects }