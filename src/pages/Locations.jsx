import SEO from '../components/SEO';

const LocationsPage = () => {
    return (
        <div className="pt-20">
            <SEO
                title="Locations - Order Authentic Biryani Near You"
                description="Find a Dumwala kitchen near you. Order authentic Hyderabadi Dum Biryani online in Indiranagar, Koramangala, and Whitefield."
                canonical="/locations"
            />
            <div className="bg-zinc-900 pt-20 pb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Order <span className="text-primary">Online</span></h1>
                <p className="text-gray-400 max-w-2xl mx-auto px-4">Select a kitchen near you for the freshest Dum Biryani delivery.</p>
            </div>
            <LocationsList />
        </div>
    );
};

export default LocationsPage;
