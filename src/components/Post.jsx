import './Post.css'
import Image from 'next/image'
import Avatar from './Avatar'

function Post() {
    return (
        <>
            <div className='post'>
                <div className='post-header'>
                    <Avatar src='/images/pfp.jpg' alt='Profile Picture'/>

                    <div className='post-header__info'>
                        <div className='post-header__user'>
                            <span className='post-header__username'>@ayeyovic</span>
                            <span className='post-header__chassis'>Nissan Silvia S13</span>
                        </div>
                        <div className='post-header__timestamp'>2h ago</div>
                    </div>
                    
                </div>

                <div className='post-content'>
                    <p className='post-text'>AN Lines completed for catch Can. Used PTFE lines. Evil Energy fittings. Yashio Factory style valve cover painted with Tropical Blitz Desert Rose Candy and Seductive Violet Mist coat. </p>
                    <div className='post-images'>
                        {/* <img src='/images/engine.jpg' alt='Engine' /> */}
                        <Image src='/images/engine.jpg' alt='Engine' fill quality={100} loading="eager" style={{ objectFit: 'cover' }} />
                    
                    </div>
                </div>

                <footer className='post-footer'>
                    <div className='post-footer__tags'>
                        <span className='post-footer-category'>Engine</span>
                    </div>
                    <div className='post-footer__engagement'>
                        <div className='post-footer__likes'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className='post-footer__like-count'>24</span>
                        </div>

                        <div className='post-footer__comments'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                                    stroke="currentColor"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className='post-footer__comment-count'>5</span>
                        </div>

                        <button className='post-footer__bookmark' aria-label="Bookmark">
                            <svg viewBox="0 0 24 24" stroke="currentColor" width="18" height="18" strokeWidth="2.5" fill="none">
                                <path d="M6 3h12v18l-6-4-6 4V3Z"></path>
                            </svg>                
                        </button>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Post