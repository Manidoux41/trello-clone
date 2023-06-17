import Image from "next/image"
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid"

function Header() {
  return (
    <header>
      <Image
        src="https://links.papareact.com/c2cdd5"
        alt="Trello Logo"
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
      />
      <div>
        {/* Search Box */}
        <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
          <input type="text" placeholder="Search" className="flex-1"/>
          <button hidden>Search</button>
        </form>
      </div>
    </header>
  )
}
export default Header
