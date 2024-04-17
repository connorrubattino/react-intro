import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { UserFormDataType } from '../types';
import { register } from '../lib/apiWrapper';


type Props = {}

export default function SignUp({ }: Props) {

    const [userFormData, setUserFormData] = useState<UserFormDataType>(
        {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        }
    )

    const [seePassword, setSeePassword] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserFormData({...userFormData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log(userFormData);

        let response = await register(userFormData);
        if (response.error){
            console.error(response.error);
        } else {
            let newUser = response.data!
            console.log(`Congrats ${newUser.firstName} ${newUser.lastName} has been created with the username ${newUser.username}`)
        }
        
    }

    const disableSubmit = !/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\#\$\.\%\&\*\!\?])(?=.*[a-zA-Z]).{8,16}$/.test(userFormData.password) || userFormData.password !== userFormData.confirmPassword
    // const disableSubmit = userFormData.password.length < 5 || userFormData.password !== userFormData.confirmPassword


    return (
        <>
            <h1 className="text-center m-5">Sign Up Here</h1>
            <Card>
                <Card.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Label htmlFor='firstName'>First Name</Form.Label>
                        <Form.Control className='mb-2' id='firstName' name='firstName' placeholder='Enter First Name' value={userFormData.firstName} onChange={handleInputChange}/>
          
                        <Form.Label htmlFor='lastName'>Last Name</Form.Label>
                        <Form.Control className='mb-2' id='lastName' name='lastName' placeholder='Enter Last Name' value={userFormData.lastName} onChange={handleInputChange}/>

                        <Form.Label htmlFor='email'>Email</Form.Label>
                        <Form.Control className='mb-2' id='email' name='email' type='email' placeholder='Enter Email' value={userFormData.email} onChange={handleInputChange}/>

                        <Form.Label htmlFor='username'>Username</Form.Label>
                        <Form.Control className='mb-2' id='username' name='username' placeholder='Enter Username' value={userFormData.username} onChange={handleInputChange}/>

                        <Form.Label htmlFor='password'>Password</Form.Label>
                        <InputGroup>
                            <Form.Control id='password' name='password' type={seePassword ? 'text' : 'password'} placeholder='Enter Password' value={userFormData.password} onChange={handleInputChange}/>
                            <InputGroup.Text onClick={() => setSeePassword(!seePassword)}><i className={seePassword ? "bi bi-eye-slash" : "bi bi-eye"}></i></InputGroup.Text>
                        </InputGroup>

                        <Form.Label htmlFor='confirmPassword'>Confirm Password</Form.Label>
                        <InputGroup>
                            <Form.Control id='confirmPassword' name='confirmPassword' type={seePassword ? 'text' : 'password'} placeholder='Confirm Password' value={userFormData.confirmPassword} onChange={handleInputChange}/>
                            <InputGroup.Text onClick={() => setSeePassword(!seePassword)}><i className={seePassword ? "bi bi-eye-slash" : "bi bi-eye"}></i></InputGroup.Text>
                        </InputGroup>

                        <Button disabled={disableSubmit} type='submit' variant='outline-primary' className='w-100 mt-3'>Create New User</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}