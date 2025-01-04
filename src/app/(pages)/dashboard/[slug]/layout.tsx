import React from 'react'

type Props = {
    children: React.ReactNode,
    params: Promise<{ slug: string }>
}

const Layout = ({ children, params }: Props) => {
  return (
    <div className='p-3'>
        { children }
    </div>
  )
}

export default Layout