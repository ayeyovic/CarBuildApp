import './Header.css'

function Header() {
    return (
        <header className="header">
            <h2 className="header__title">Car Build App</h2>
            <div className="header__search-wrap">
                <svg
                    className="header__search-icon"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input type="text" className="header__search" placeholder="Search builds, parts, people" />
            </div>    
                <div className="header-actions">
                    <div className="notification-icon">
                        <svg viewBox="-0.5 0 56 56" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                fill="currentColor"
                                d="M28 38c1.105 0 2-.895 2-2h-4c0 1.105.895 2 2 2zm0-20c3.441 0 6.882 3.529 7 6.697v3.636s2 1.167 2 2.672c0 2.043-1.34 2.995-2.993 2.995h-12.015c-1.64 0-2.993-1-2.993-2.995v-.509c0-.552.385-1.22.86-1.497l1.14-.665v-3.636c.118-3.168 3.559-6.697 7-6.697zm0 2c-2.277 0-4.92 2.589-5 4.697v4.785l-.992.579-1.14.665c.139-.081.132-.07.132-.231v.509c0 .729.289.995.993.995h12.015c.735 0 .993-.235.993-.995 0-.002-.115-.198-.385-.457-.244-.234-.498-.414-.623-.487l-.992-.579v-1.149l.001-3.562c-.081-2.183-2.724-4.771-5.001-4.771z"
                            />
                        </svg>

                    </div>

                <div className="user-icon">
                    <img src="/images/pfp.jpg" alt="Profile Picture" width="40" height="40"    />
                </div>


            </div>    
        </header>
    )
}

export default Header