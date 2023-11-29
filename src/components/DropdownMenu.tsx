import Link from "next/link"
import { useState } from "react"
import { DropdownItem } from "@/components/DropdownItem"
import { RiArrowDropDownFill } from "react-icons/ri"

interface Item {
  value: string
  href: string
}

interface Props {
  menu: {
    value: string
    href: string
  }
  items: Item[]
}

export function DropdownMenu({ menu, items }: Props) {
  const [dropdownVisivel, setDropdownVisivel] = useState(false)

  const mostrarDropdown = () => {
    setDropdownVisivel(true)
  }

  const esconderDropdown = () => {
    setDropdownVisivel(false)
  }

  return (
    <div
      onMouseEnter={mostrarDropdown}
      onMouseLeave={esconderDropdown}
      className="relative inline-block text-left group"
    >
      <Link className="relative hover:underline underline-offset-4 font-bold pb-4" href={menu.href}>
        {menu.value}
      <RiArrowDropDownFill className="absolute -top-2 -right-8 text-4xl" />
      </Link>

      {dropdownVisivel && (
        <div className="absolute left-0 mt-3 w-64 shadow-md bg-white">
          <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map(item => (
              <DropdownItem
                key={item.value}
                item={item}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}