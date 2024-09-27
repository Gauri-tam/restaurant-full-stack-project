import Header from './Header'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

interface Props extends React.HTMLAttributes<HTMLInputElement> {

}

const Layout: React.FC<Props> = ({ children }) => {

    const routerLocation = useLocation();

    const bookPlace = routerLocation.pathname === "/bookPlace"

    return (
        <>
            {bookPlace ? (

                <>{children}</>
            ) : (
                <>
                    <Header />
                    {children}
                    <Footer />
                </>
            )}
        </>
    )
}

export default Layout;