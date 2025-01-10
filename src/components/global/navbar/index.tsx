import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import { usePath } from '@/hooks/use-path'
import React from 'react'

type Props = {
    slug: string
}

const Navbar = ({ slug }: Props) => {

    const { page } = usePath();
    const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug
  return (
    currentPage && <div className='flex flex-col'>
        <div className='flex gap-x-3 lg:gap-x-5 justify-end'>
            <span className='lg:hidden flex items-center flex-1 gap-x-2'>
                
            </span>
        </div>
    </div>
  )
}

export default Navbar