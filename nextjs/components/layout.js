import Footer from "./footer"
import Hader from "./hader"

const Layout=({children})=>{
    return(
        <div className="content">
            <Hader/>
            {children}
            <Footer/>
        </div>
    )
}
export default Layout;