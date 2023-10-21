import React from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

export const CustomPrevArrow = ({ onClick }: any) => (
  <div className="text-main text-2xl absolute top-[50%] cursor-pointer z-10 left-2" onClick={onClick}>
    <BsFillArrowLeftCircleFill />
  </div>
)

export const CustomNextArrow = ({ onClick }: any) => (
  <div className="text-main text-2xl absolute top-[50%] cursor-pointer z-10 right-2" onClick={onClick}>
    <BsFillArrowRightCircleFill />
  </div>
)
