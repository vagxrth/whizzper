import { onBoardUser } from '@/actions/user'
import { redirect } from 'next/navigation';
import React from 'react'


const page = async() => {

  const user = await onBoardUser();

  if (!user) return redirect('/signin');

  if (user.status === 200 || user.status === 201) {
    return redirect(`dashboard/${user.data?.firstName}${user.data?.lastName}`)
  }

  return redirect('/signin')

}

export default page