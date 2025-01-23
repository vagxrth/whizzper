import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { ActiveAutomation } from '@/icons/active-automation'
import React from 'react'

type Props = {
  id: string
}

const ActivateAutomation = ({ id }: Props) => {
  return (
    <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4">
      <Loader2 />
      <ActiveAutomation />
      <p>Activate</p>
    </Button>
  )
}

export default ActivateAutomation