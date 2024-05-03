import Image from 'next/image'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'

function Header() {
  return (
    <div className="flex justify-between pt-6 px-5 ">
      <Image alt="FSW Foods" src="/logo.png" height={30} width={100} />
      <Button
        size="icon"
        variant="outline"
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  )
}

export default Header
