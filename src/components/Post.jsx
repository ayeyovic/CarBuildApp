import './Post.css'
import Image from 'next/image'

function Post() {
    return (
        <>
            <div className='post'>
                <p className='post-text'>AN Lines completed for catch Can. Used PTFE lines. Evil Energy fittings FTW</p>
                <img src='/images/engine.jpg' alt='Engine' />
                <Image src='/images/engine.jpg' alt='Engine' width={1000} height={1000} quality={100} loading="eager" />

                
            </div>
        </>
    )
}

export default Post