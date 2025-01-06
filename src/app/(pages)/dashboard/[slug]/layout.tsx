import Sidebar from '@/components/global/sidebar'
import React from 'react'

type Props = {
    children: React.ReactNode,
    params: Promise<{ slug: string }>
}

async function Layout({ children, params }: Props) {
    const { slug } = await params
  
    return (
        <div className='p-3'>
            <Sidebar slug={slug} />
            {children}
        </div>
    )
}

export default Layout