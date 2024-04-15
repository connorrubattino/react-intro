type NavigationProps = {
    isLoggedIn:boolean
}

export default function Navigation({ isLoggedIn }: NavigationProps){
    return (
        <div>
            <h5>Connor's Blog</h5>
            <ul>
            { isLoggedIn ? (
                    <>
                        <li>Create Post</li>
                        <li>Sign Out</li>
                    </>
                ) : (
                    <>
                        <li>Sign Up</li>
                        <li>Log In</li>
                    </>
                ) }
            </ul>
        </div>
    )
}