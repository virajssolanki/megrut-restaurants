import Footer from './component/Footer';
import Header from './component/Header';
import Heads from './component/Heads';
import ManuItem from './component/ManuItem';

const Home = () => {
    const ManuList = [
        {
            itemName: "Pizza",
            image: "/imags/1.jpg"
        },
        {
            itemName: "Pizza",
            image: "/imags/2.jpeg"
        },
        {
            itemName: "Pizza",
            image: "/imags/3.jpeg"
        },
        {
            itemName: "Pizza",
            image: "/imags/4.jpeg"
        },
        {
            itemName: "Pizza",
            image: "/imags/1.jpg"
        },
        {
            itemName: "Pizza",
            image: "/imags/5.jpg"
        }
    ]
    return (
        <div>
            <Heads title='Megrut Restaurant' />
            <Header />
            <div className="py-6 px-3 md:py-16 md:px-8">
                <h1 className="text-2xl md:text-4xl font-semibold mb-3 md:mb-8 text-center">Prahlad Nagar Restaurants, Ahmedabad</h1>
                <div className='container mx-auto grid sm:grid-cols-2 md:grid-cols-2 items-center lg:grid-cols-3 gap-10 justify-center'>
                    {
                        ManuList.map((x, key) => {
                            return (
                                <ManuItem key={key} itemName={x.itemName} imgSrc={x.image} />
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

// export async function getStaticProps() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await res.json();
//     return {
//         props: { posts },
//     };
// }

// type DataProps = any

// export const getServerSideProps = async () => {
//     const data: any = await fetch("https://jsonplaceholder.typicode.com/posts");
  
//     return {
//         props: {
//             data,
//         },
//     }
// }
export default Home;
