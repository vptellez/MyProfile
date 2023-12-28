import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Loader from "./Loader"
import {Suspense} from "react"
import "../styles/Layout.css"

const Layout = () => {
    return (
        <div>
            <Header />
            <main>  
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>              
            </main>
            <Footer />
        </div>
    )
}

export default Layout;