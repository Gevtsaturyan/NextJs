import Link from "next/link"
import { useEffect } from "react";
import {useRouter} from 'next/router'

const NotFoundPage=()=>{
    const router = useRouter();
    useEffect(()=>{
        setTimeout(() => {
            router.push('/')
        }, 3000);
    },[])
    return(
        <div className="not-found">
            <h1>Oy...</h1>
            <h2>tenc ban CHKA...</h2>
            <p>pereyti na <Link href='/'><a>Glavnaya stanica</a></Link></p>
        </div>
    )
}
export default NotFoundPage;