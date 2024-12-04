import featureOne from '../assets/1 1.png'
import featureTwo from '../assets/2 1.png'
import featureThree from '../assets/3 1.png'
import featureFour from '../assets/4 1.png'



const Feature = () => {
    return (
        <div className='bg-gray-300 py-10'>
            <div className='container mx-auto'>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='m-4 p-4 shadow-2xl rounded-2xl'>
                        <img src={featureOne} alt="" />
                        <h3 className='text-2xl my-3'>Awesome Aroma</h3>
                        <p className='text-xl'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>

                    <div className='m-4 p-4 shadow-2xl rounded-2xl'>
                        <img src={featureTwo} alt="" />
                        <h3 className='text-2xl my-3'>High Quality</h3>
                        <p className='text-xl'>We served the coffee to you maintaining the best quality</p>
                    </div>

                    <div className='m-4 p-4 shadow-2xl rounded-2xl'>
                        <img src={featureThree} alt="" />
                        <h3 className='text-2xl my-3'>Pure Grades</h3>
                        <p className='text-xl'>The coffee is made of the green coffee beans which you will love</p>
                    </div>


                    <div className='m-4 p-4 shadow-2xl rounded-2xl'>
                        <img src={featureFour} alt="" />
                        <h3 className='text-2xl my-3'>Proper Roasting</h3>
                        <p className='text-xl'>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>

                   

                  


                    
               </div>
            </div>
        </div>
    );
};

export default Feature;