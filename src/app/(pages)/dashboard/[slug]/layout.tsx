import Navbar from '@/components/global/navbar'
import Sidebar from '@/components/global/sidebar'
import React from 'react'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { PrefetchUserProfile } from '@/react-query/prefetch'

type Props = {
    children: React.ReactNode,
    params: Promise<{ slug: string }>
}

async function Layout({ children, params }: Props) {
    const { slug } = await params

    const query = new QueryClient()

    await PrefetchUserProfile(query)

    return (
        <HydrationBoundary state={dehydrate(query)}>
            <div className='p-3'>
                <Sidebar slug={slug} />
                <div className='lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto'>
                    <Navbar slug={slug} />
                    {children}
                </div>
            </div>
        </HydrationBoundary>
    )
}

export default Layout