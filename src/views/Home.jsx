import Card from 'react-bootstrap/Card';


function BasicExample() {
    return (
        <div className='m-0 row justify-content-center'>
            <Card style={{ width: '18rem' }} className='col-auto mt-5' id='card' >
                <Card.Title id='title'>Bienvenido a Happy Cake</Card.Title>
                <Card.Body>
                    <Card.Text>
                        El lugar de los pasteles felices
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="top" src="https://i.pinimg.com/564x/7e/7e/76/7e7e762dee8a7c873dbc9159833b6ba8.jpg" />
            </Card>
        </div>
    );
}

export default BasicExample;