import { PostType, UserType } from '../types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


type PostCardProps = {
    post: PostType
    currentUser: UserType|null
}

export default function PostCard({ post, currentUser }: PostCardProps) {
  return (
    <Card className= 'my-3' bg='primary' text='white'>
        <Card.Header>{ post.dateCreated }</Card.Header>
        <Card.Body>
            <Card.Title>{ post.title }</Card.Title>
            <Card.Subtitle>{ post.author.username } </Card.Subtitle>
            <Card.Text>{ post.body }</Card.Text>
            {post.author.id === currentUser?.id && <Button variant='dark'>Edit Post</Button>}
        </Card.Body>
    </Card>
  )
}