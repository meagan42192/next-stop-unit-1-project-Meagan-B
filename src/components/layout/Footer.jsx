
const Footer = () => {
    let thisYear = new Date().getFullYear();

    return (
        <footer>
            <div>&copy; {thisYear} Next Stop</div>
        </footer>
    );
};

export default Footer;