import {
    Main,
    PopularCategory,
    Delivery, Restaurants,
    Download, Testimonials,
    Subscribe
} from '../../layouts/index'

const HomePage = () => {

    return (
        <>
            <Main />
            <PopularCategory />
            <Delivery />
            <Restaurants />
            <Download />
            <Testimonials />
            <Subscribe />
        </>
    );
}

export default HomePage;