import React from 'react';
import { Link } from "react-router-dom";

// UI
import ImageTilt from '../ui/imageSquareTilt';
import MainImageTilt from '../ui/mainImageTilt';
import CustomButtonUrl from '../ui/buttonUrl';

const BestProjectCard = ({title, description, mainImageUrl, image1Url, image2Url, toolTech}) => {
    return (
        <div className='flex flex-row w-full h-fit gap-2.5'>
            
            <div className='flex flex-row w-full gap-2.5'>
                    <MainImageTilt
                        imageUrl={mainImageUrl}
                    />
                <div className='flex flex-col w-full h-full gap-2.5'>
                    <ImageTilt
                        imageUrl={image1Url}
                    />
                    <ImageTilt
                        imageUrl={image2Url}
                    />
                </div>
            </div>
            
            <div className='flex flex-col gap-5 w-full'>
                <div className="flex flex-col gap-5 w-full p-4 border border-brand-0">
                    <h3 className="text-5xl font-bold text-brand-0">{title}</h3>
                    <p className="text-lg font-normal text-brand-50 ml-8">{description}</p>
                    
                    
                    <div className="flex flex-row gap-4">
                        {toolTech.map((icon, i)=> (
                            <img key={i} className="w-10 h-10 shadow-md shadow-black/80 transition-transform duration-300" src={icon} alt={icon-{i}} />
                        ))}
                    </div>
                </div>
                <Link
                    className='w-full h-fit flex justify-center p-2 bg-brand-500 text-brand-0 hover:bg-brand-600 duration-300'
                    to={'/myProject'}
                >
                    Lihat Project Lainnya
                </Link>
                
                {/* <a className='w-full h-fit flex justify-center p-2 bg-brand-500 text-brand-0 hover:bg-brand-600 duration-300' href="/myProject">Lihat Project Lainnya</a> */}
                {/* <CustomButtonUrl
                    label={'Lihat Project Lainnya'}
                    onClick={'#'}
                    type='button'
                    variant='primary'
                    url={'/myProject'}
                /> */}
            </div>
        </div>
    )
};

export default BestProjectCard;