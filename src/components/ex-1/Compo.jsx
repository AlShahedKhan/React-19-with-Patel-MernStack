import { Compo2 } from './Compo2';
const Compo = ({name, email, age}) => {
    // console.log(props);
    // const name = props.name;
    // const { name, email, age } = props;
    return (
        <div>
            <h1>Hello from component - {name}, {email}, {age}</h1>
            <Compo2 name={name} email={email} age={age}/>
        </div>
    )
}

export default Compo