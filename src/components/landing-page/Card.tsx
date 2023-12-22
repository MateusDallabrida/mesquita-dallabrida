import { RichText } from '@/components/RichText'
import { CMSIcon } from '@/components/CMSIcon'

interface Props {
  props: {
    title: string
    description?: any
    custom?: string
    icon?: any
  }
}

export function Card({ props }: Props) {
  return (
    <div className={`w-full bg-main rounded-md p-4 ${props.custom}`}>
      <div className="flex justify-between items-start">        
        <h3 className="w-full text-second text-lg sm:text-xl font-bold">
          {props.title}
        </h3>
        <CMSIcon icon={props.icon} />
      </div>
      {props.description && (
        <div className="text-white text-base sm:text-lg mt-4">
          <RichText content={props.description} />
        </div>
      )}
    </div>
  )
}