import Header from './Header'
import Footer from './Footer'

interface Props extends React.HTMLAttributes<HTMLInputElement> {

}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout;