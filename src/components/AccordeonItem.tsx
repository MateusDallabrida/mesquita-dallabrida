import Link from "next/link"

interface Props {
  item: {
    value: string
    href: string
  }
}

export function AccordeonItem({ item }: Props) {
  return (
    <Link
        href={item.href}
        className="w-full text-base text-gray-900 bg-white hover:bg-second p-3 px-8"
      >
      {item.value}
    </Link>
  )
}