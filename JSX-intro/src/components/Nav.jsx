export default function NavBar(){
    return (
        <nav className="nav">
            <a href="/" className="site-title">Site Name</a>
            <ul>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/pricing">Pricing</a>
                </li>
            </ul>
        </nav>
    );
};