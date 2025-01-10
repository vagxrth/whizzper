import { usePath } from '@/hooks/use-path'
import React from 'react'

type Props = {
    slug: string
}

const Navbar = ({ slug }: Props) => {

    const { page } = usePath();

  return (
    <div>Navbar</div>
  )
}

export default Navbar