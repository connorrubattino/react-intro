import Navigation from './components/Navigation';


export default function App() {
    const name: string = 'Connor Rubattino';
    const isLoggedIn: boolean = true;

    const posts: { id: number, title: string }[] = [
        {id: 1, title: 'Happy Monday'},
        {id: 2, title: 'React Rules!'},
        {id: 3, title: 'Spring has Sprung'}
    ]
// each child of a list must have a key prompt!!! when in map()

    return (
        <>
            <Navigation isLoggedIn={isLoggedIn}/>
            <h1>Hello World</h1>
            <h2>{isLoggedIn ? `Welcome back ${name}` : 'please login or sign up'}</h2>
            {posts.map( p => <h4 key={p.id}>{p.title}</h4>)}
        </>
    )
}
