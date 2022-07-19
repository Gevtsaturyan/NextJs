import Link from 'next/link'
import {SiBurgerking} from 'react-icons/si'

const Header = () => {
    return(
        <header>
            <div>
                <SiBurgerking/>
            </div>
            <nav>
               <Link href='/'><a href='/'>domoy </a></Link>
               <Link href='about'><a>o nas </a></Link>
               <Link href='review'><a> otziv </a></Link>
               <Link href='newBurgers'><a> burger</a></Link>
               
            </nav>
        </header>
    )
}
export default Header