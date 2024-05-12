import React from 'react'
import classNames from 'classnames'

function CustomButton({ title, variant = "primary", handleButtonClick, type = "button" }: { title: string, variant?: "primary" | "secondary", handleButtonClick?: () => void, type?: any }) {
  const buttonType = {
    primary: "bg-[#262626]",
    secondary: "bg-[#8d2929]"
  }
  return (
    <button
      className={classNames("w-[120px] text-white rounded-md py-3 mt-3", buttonType[variant])}
      onClick={handleButtonClick}
      type={type}
    >
      {title}
    </button>
  )
}

export default CustomButton
