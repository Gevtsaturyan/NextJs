
import Head from "next/head"



const Review=({ reviews})=>{

    console.log(reviews);
    return(
        <>
        <Head>
        <title>Jirnye burgery | Glavnaya</title>
        <meta name='title' content='Jirney burgery'/>
        </Head>
        <div>
            <h1>otziv klientov</h1>
            <div className='reviews'>
                { !!reviews.length && reviews.slice(0,20).map(res=>{
                    return(
                        <div key={res.id} className='review'>
                            {res.id}{ '  '}
                            {`${res.body.slice(0,90)}...`}
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export async function getServerSideProps(){
    const response=await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();
    return {
        props:{
            reviews:data.slice(0,20)
        }
    }
}
export default Review