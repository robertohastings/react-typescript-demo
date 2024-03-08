type FormProps = {
    fields: [{
        field: string      
        name: string
        value: string | number
        label?:  string
        type: 'textbox',
        placeholder?: string
    }]
}

export const Form = (props: FormProps) => {
  return (
    <>
        <p>Form test</p>
        {console.log(props.fields)}
        {props.fields.map((field, index) => {
            return (
                < >
                    <p key={index}>{field.placeholder}</p>            
                    <p>pase</p>
                </>
            )
            // <p key={index}>{field.name}</p>
        })}
        
    </>
  )
}
