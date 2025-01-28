'use server'

import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export const onCurrentUser = async () => {
    const user = await currentUser()
    if (!user) return redirect('/signin')
  
    return user
}

export const onBoardUser = async() => {
    const user = await onCurrentUser();
    try {
        
    } catch (error) {
        
    }
}