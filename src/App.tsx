import './App.css';
import { Button } from './components/Button';
import { ButtonWEvent } from './components/ButtonWEvent';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Icon } from './components/Icon';
import { Container } from './components/Container';
import { Form } from './components/Form'

function App() {
  const personName = {
    first: 'Roberto',
    last: 'Vázquez'
  }
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]
  const categoria = [
    {
      field: 'id_categoria',      
      name: 'categoria',
      value: '',
      label: 'Categoria',
      type: 'number',
      placeholder: 'Categoria ID'
    },
    {
      field: 'descripcion',      
      name: 'descripcion',
      value: '',
      label: 'Descripcion',
      type: 'number',
      placeholder: 'Descripción categoria'      
    }
  ]
  return (
    <div className="App">
      <Greet name="Roberto" messageCount={10} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>

      <Status status='loading'/>
      <Heading>Placeholder textt</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicarpio</Heading>
      </Oscar>

      <Button handleClick={() => {
        console.log('Button Clicked')
      }}/>

      <ButtonWEvent handleClick={(event, id) => {
        console.log('Button clicked', event, id)
      }}/>

      <Input value='1' handleChange={(event) => console.log(event)}/>
      <hr/>
      
      <Icon icon='microfono' size={30}/>

      <Container styles={{border: '1px solid black', padding: '2rem', margin: '2rem'}}/>

      <Form fields={[
        {
          field: 'id_categoria',
          name: 'id_categoria',
          type: 'textbox',
          value: 0,
          placeholder: 'Escriba la categoria'
        }
      ]} />

    </div>
  );
}

export default App;
