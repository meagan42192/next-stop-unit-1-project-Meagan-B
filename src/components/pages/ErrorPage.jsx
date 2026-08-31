import Header from "../layout/Header";

const ErrorPage = ({ children }) => {
    return (
        <>
        <Header />
        <main className="error-main">
            <h1>Uh-Oh</h1>
            <h2>This page or link does not exist.</h2>

            {children}
        </main>
        </>
    );
};

export default ErrorPage;