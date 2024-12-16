// eslint-disable-next-line no-unused-vars
import React from 'react';
import Footer from '../../shared/Footer/Footer';
import useLoader from '../../shared/loader/Loader';
import FinalLoader from '../../shared/loader/FinalLoader';
const AboutUs = () => {
    const { loading, online } = useLoader();
    if (loading || !online) {
        return <FinalLoader />;
      }
    
    return (
        <div className='pt-28'>
            <div className='flex justify-center mb-20'>
                <div className='w-[80vw]'>
                    <h1 className='text-titleMd font-semibold'>About us</h1>
                    <img className='h-[70vh] w-full object-cover' src="https://img.freepik.com/free-photo/young-handsome-man-choosing-shoes-shop_1303-19707.jpg?t=st=1733122727~exp=1733126327~hmac=7585b935701fea7f163437cf2ece84377adee2b1839fabc425dcf326fae3b500&w=1380" alt="" />

                    <div className='flex justify-center mt-10'>
                        <div className='w-[80%]'>
                            <h1 className='text-titleSm'>OUR STORY</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt exercitationem saepe voluptate beatae animi voluptatibus eos minima dolores fuga quas, illum quod eligendi dicta at et totam excepturi! Praesentium tempora facere aut quidem id placeat. Eaque error omnis officia expedita asperiores quisquam quo enim similique sapiente! Odit, ad id repudiandae corporis deleniti, labore veritatis eum eaque fuga veniam tempore? Facere magni tempore perferendis nesciunt at id tenetur sed eius earum, animi, error distinctio ut amet aperiam impedit adipisci? Corrupti sint ullam, dolorum sapiente quasi iste. Maxime vel neque et quaerat esse facilis accusantium, cumque aspernatur illo! Vitae, ullam ipsum.</p>

                            <div className='flex justify-between gap-5 mt-10'>
                                <div>
                                    <h1 className='text-titleSm'>Our Mission</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos eaque vel quas tenetur animi amet itaque accusamus quaerat nulla?</p>
                                </div>
                                <div>
                                    <h1 className='text-titleSm'>Our vision</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos eaque vel quas tenetur animi amet itaque accusamus quaerat nulla?</p>
                                </div>
                            </div>

                            <div className='mt-10 flex items-center gap-10'>
                                <img className='rounded' src="https://avatars.githubusercontent.com/u/116562773?v=4" alt="" />
                                <div>
                                    <h1 className='text-titleSm'>The Company</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magni odio ab at maxime molestias repellendus eveniet explicabo unde nobis.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        <Footer/>
        </div>
    );
}

export default AboutUs;
