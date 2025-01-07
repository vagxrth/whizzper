'use client'
import { usePath } from '@/hooks/use-path'
import React from 'react'
import Items from './items'
import { Separator } from '@/components/ui/separator'
import ClerkProfile from '../clerk-profile'
import { HelpDuoToneWhite } from '@/icons'
import Subscription from '../subscription'
import UpgradeCard from './upgrade'

type Props = {
    slug: string
}

const Sidebar = ({ slug }: Props) => {

    const { page } = usePath()

    return (
        <div className='w-[250px] border-[1px] radial fixed left-0 lg:inline-block border-[#545454] bg-gradient-to-b from-[#768BDD] via-[#171717] to-[#768BDD] hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden'>
            <div className='flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl'>
                <div className='flex gap-x-2 items-center p-5 justify-center'>
                    WHIZZPER
                </div>
                <div className='flex flex-col py-3'>
                    <Items page={page} slug={slug} />
                </div>
                <div>
                    <Separator orientation='horizontal' className='bg-[#333336]' />
                </div>
                <div className="px-3 flex flex-col gap-y-5">
                    <div className='flex gap-x-2'>
                        <ClerkProfile />
                        <p className='text-[#9B9CA0]'>Profile</p>
                    </div>
                    <div className='flex gap-x-3'>
                        <HelpDuoToneWhite />
                        <p className='text-[#9B9CA0]'>Help</p>
                    </div>
                </div>
                <Subscription type='FREE'>
                    <div className='flex-1 flex flex-col justify-end'>
                        <UpgradeCard />
                    </div>
                </Subscription>
            </div>
        </div>
    )
}

export default Sidebar