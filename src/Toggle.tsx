import React, { useState } from 'react'

type Props = {
  children: ({ on, toggle }: { on: any; toggle: any }) => React.ReactElement
}

export const Toggle = ({ children }: Props) => {
  const [isToggled, setIsToggled] = useState({
    on: false,
  })
  const toggle = () => {
    setIsToggled({ on: !isToggled.on })
  }
  return children({
    on: isToggled.on,
    toggle: toggle,
  })
}
