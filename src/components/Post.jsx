import './Post.css'

function Post() {
    return (
        <>
            <div className='post'>
                <h2>Post Title</h2>
                <img src='/images/engine.jpg' alt='Engine' />
                <p>Post content goes here.</p>
            </div>
        </>
    )
}

export default Post