import Navbar from '@/components/global/navbar'
import Sidebar from '@/components/global/sidebar'
import React from 'react'
import { QueryClient } from '@tanstack/react-query'

type Props = {
    children: React.ReactNode,
    params: Promise<{ slug: string }>
}

async function Layout({ children, params }: Props) {
    const { slug } = await params

    const query = new QueryClient()
  
    return (
        <div className='p-3'>
            <Sidebar slug={slug} />
            <div className='lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto'>
              <Navbar slug={slug}/>
              { children }
            </div>
        </div>
    )
}

export default Layout