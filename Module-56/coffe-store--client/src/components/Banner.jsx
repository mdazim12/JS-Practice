import BannerBg from '../assets/Rectangle 2.png'
const Banner = () => {
    return (
        <div className='min-[600px] bg-cover' style={{ backgroundImage: `url(${BannerBg})` }}>
            <div>
                

                <div className='container text-center '>
                    <div className='py-20'>
                        <h3 className='text-white text-5xl '> Would you like a Cup of Delicious Coffee?</h3>

                        <p className='text-lg text-white my-3'>
                            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                        </p>

                        <button className=' bg-yellow-700 px-5 py-2 '>Learn More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;