import React from 'react';

// UI
import ImageTilt from '../ui/imageSquareTilt';
import MainImageTilt from '../ui/mainImageTilt';
import Button from '../ui/button';

const BestProjectCard = ({title, description, mainImageUrl, image1Url, image2Url, toolTech}) => {
    return (
        <div className='flex flex-row w-full gap-2.5'>
            
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
                <Button
                    label={'Lihat Project Lainnya'}
                    onClick={'#'}
                    type='button'
                    variant='primary'
                />
            </div>
        </div>
    )
};

export default BestProjectCard;