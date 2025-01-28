import { onBoardUser } from '@/actions/user'
import React from 'react'


const page = async() => {

  const user = await onBoardUser();

  return (
    <div>page</div>
  )
}

export default page