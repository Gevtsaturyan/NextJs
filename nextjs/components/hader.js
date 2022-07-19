import Link from 'next/link'
import {GiHamburger} from 'react-icons/gi'

const Hader =()=>{
    return(
            <header>
                <div>
                    <GiHamburger/>
                </div>
                <nav>
                <Link href='/'><a>Home</a></Link> 
               <Link href='/about'><a>About</a></Link>
               <Link href='/sdf'><a>Coments</a></Link>
               <Link href='/burgers'><a>Burgers</a></Link>

                </nav>

            </header>
    )
}
export default Hader