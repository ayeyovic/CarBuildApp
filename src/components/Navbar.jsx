import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            {/* placeholder links — swap href="#" for next/link's <Link href="/feed">
                once those routes actually exist under src/app/ */}
            <div className="navbar__links">
                <a href="#">For you</a>
                <a href="#">Following</a>
                <a href="#">Explore</a>
            </div>


        </nav>
    );
}
        



export default Navbar;
