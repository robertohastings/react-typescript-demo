

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// export const Input = (props: InputProps) => {
//   return (
//     <input type='text' value={props.value} onChange={props.handleChange}/>
//   )

// }

export const Input = ({ value, handleChange}: InputProps) => {
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      //console.log(event.target.value)
    }

  return (
    <input type='text' defaultValue={value} onChange={handleChange}/>
  )

}