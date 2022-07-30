import { GetServerSideProps } from 'next';
import { Input, Progress, Select } from 'react-daisyui';
import AdminManuItem from './component/adminManuItem';
import { useAuth } from './component/Context/ManuContext';
import Footer from './component/Footer';
import Header from './component/Header';
import Heads from './component/Heads';
import ManuItem from './component/ManuItem';

export type posts = {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export const getStaticProps: GetServerSideProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: posts[] = await res.json();
    return {
        props: {
            posts,
        },
    }
}

const Home = ({ posts }: { posts: posts[] }) => {
    const { AdminManu } = useAuth()
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
                    {/* {
                        ManuList.map((x, key) => {
                            return (
                                <ManuItem key={key} itemName={x.itemName} imgSrc={x.image} />
                            )
                        })
                    } */}
                    {
                        AdminManu.map((x, id) => {
                            return (
                                <AdminManuItem key={id} itemName={x.itemName} prise={x.prise} imgSrc={x.imgSrc} />
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
