import { MdArrowDropDownCircle } from "react-icons/md"
import { AccordeonItem } from "@/components/AccordeonItem"
import { useState } from "react"

interface Item {
  value: string
  href: string
}

interface Props {
  menu: string
  items: Item[]
  onClick: any
}

export function AccordeonMenu({ menu, items, onClick }: Props) {
  const [showItems, setShowItems] = useState(false)

  const handleItems = () => {
    setShowItems(prev => !prev)
  }

  return (
    <div className="w-full hover:bg-second">
      <div className="w-full flex justify-between items-center">
        <span
          onClick={handleItems}
          className="w-full flex gap-4 items-center font-medium text-gray-900 py-6 px-8 cursor-pointer"
        >
          {menu}
        </span>
        <MdArrowDropDownCircle
          onClick={handleItems}
          className="absolute right-4 w-8 h-8 text-main cursor-pointer"
        />
      </div>

      {showItems && (
        <div onClick={onClick} className="w-full flex flex-col">
          {items.map(item => (
            <AccordeonItem
            key={item.value}
            item={{ value: item.value, href: item.href }}
          />
          ))}
        </div>
      )}
    </div>
  )
}
