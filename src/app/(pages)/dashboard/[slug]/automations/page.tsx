import { Check } from 'lucide-react'
import React from 'react'

const Page = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
        <div className="lg:col-span-4">
            Automation List
        </div>
        <div className="lg:col-span-2">
            <div className='flex flex-col rounded-xl bg-background-80 gap-y-6 p-5 border-[1px] overflow-hidden border-in-active'>
                <div>
                    <h2 className='text-xl'>Automations</h2>
                    <p className='text-text-secondary'>Your Live Automations...</p>
                </div>
                <div className="flex flex-col gap-y-3">
                    {[1, 2, 3].map((item) => (<div key={item} className="flex items-start justify-between">
                        <div className="flex flex-col">
                            <h3>Automation Tasks</h3>
                            <p className="text-text-secondary text-sm">Jan 01, 2025</p>
                        </div>
                        <Check />
                    </div>))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page