
import React from "react"

type ButtonWEventProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id:number) => void
}

export const ButtonWEvent = (props: ButtonWEventProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
  )
}
