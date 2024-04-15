import { useState } from 'react';
import Navigation from './components/Navigation';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


export default function App() {
    const name: string = 'Connor Rubattino';
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const posts: { id: number, title: string }[] = [
        {id: 1, title: 'Happy Monday'},
        {id: 2, title: 'React Rules!'},
        {id: 3, title: 'Spring has Sprung'}
    ]
// each child of a list must have a key prompt!!! when in map()

    const handleClick = () => {
        // console.log('The button has been clicked');
        setIsLoggedIn(!isLoggedIn)
    }

    return (
        <>
            <Navigation isLoggedIn={isLoggedIn}/>
            <Container>
            <h1>Hello World</h1>
            <Button variant='primary' onClick={handleClick}>Click me!</Button>
            <h2>{isLoggedIn ? `Welcome back ${name}` : 'please login or sign up'}</h2>
            {posts.map( p => <h4 key={p.id}>{p.title}</h4>)}
            </Container>
        </>
    )
}
