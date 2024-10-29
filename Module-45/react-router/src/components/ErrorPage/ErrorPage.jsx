import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError()
    console.log(error)

    return (
        <div>
            <h1>OOPS Its Eror Page</h1>
            <p>
                {
                    error.statusText || error.message
                }

                {
                    error.status === 404 &&
                    <div>
                        <h3>Pagge Not found</h3>
                        <Link to = '/'>Home Page</Link>
                    </div>
                }
            </p>
        </div>
    );
};

export default ErrorPage;