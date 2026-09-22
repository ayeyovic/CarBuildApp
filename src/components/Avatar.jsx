import './Avatar.css'
import Image from 'next/image'

function Avatar({ src, alt, size = 50 }) {
    return (
        <div className='avatar' style={{ width: size, height: size }}>
            <Image src={src} alt={alt} width={size} height={size} quality={100} />
        </div>
    )
}

export default Avatar