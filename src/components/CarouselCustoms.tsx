import React from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

export const CustomPrevArrow = ({ onClick }: any) => (
  <div className="text-main text-4xl md:text-6xl absolute top-[50%] translate-y-[-30%] cursor-pointer z-10 left-0 xl:-left-12" onClick={onClick}>
    <BsFillArrowLeftCircleFill />
  </div>
)

export const CustomNextArrow = ({ onClick }: any) => (
  <div className="text-main text-4xl md:text-6xl absolute top-[50%] translate-y-[-30%] cursor-pointer z-10 right-0 xl:-right-12" onClick={onClick}>
    <BsFillArrowRightCircleFill />
  </div>
)
