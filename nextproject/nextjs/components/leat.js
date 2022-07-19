import Header from "./header"
import Footer from "./footer"

const Leat=({children})=>{
    return(
        <div className="content">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
export default Leat