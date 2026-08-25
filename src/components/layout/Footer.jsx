import { Link } from 'react-router-dom';

const Footer = () => {
    let thisYear = new Date().getFullYear();

    return (
        <footer>
            <div>&copy; {thisYear} Next Stop</div>
            <ul>
                <li>
                    <Link className="link" to="/about">
                    About
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;