const Compo = (props) => {
    // console.log(props);
    // const name = props.name;
    const { name, email, age } = props;
    return (
        <div>
            <h1>Hello from component - {name}, {email}, {age}</h1>
        </div>
    )
}

export default Compo