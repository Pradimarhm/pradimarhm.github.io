import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
// import { div } from 'three/src/nodes/math/OperatorNode.js';

const Marque = ({direction = 'left'}) => {
    const container = useRef();
    const slider = useRef();

    const items = [
        "Graphic Designer", "UI/UX", "IOT Dev", "Web Developer", "Graphic Designer", "Video Editor"
    ]

    useGSAP(() => {
        const isRight = direction === 'right';

        gsap.fromTo(slider.current, 
            {
                xPercent: isRight ? -25 : 0
            },
            {
                xPercent: isRight ? 0 : -25,
                duration: 15,
                ease: 'none',
                repeat: -1,
            }
        );
    }, {scope: container, dependencies: [direction]});

    const renderList = (isDuplicate = false) => (
        <div className='flex items-center flex-none'>
            {
                items.map((item, index) => (
                    <React.Fragment key={isDuplicate ? `dup-${index}` : index}>
                        <span className='font-semibold py-2.5 px-4'>{item}</span>
                        <span className='py-2.5'>•</span>
                    </React.Fragment>
                ))
            }
        </div>
    )

    return(
        <div 
            ref={container}
            className='w-full overflow-hidden bg-brand-1000 text-brand-100 border-y-2 border-brand-100 text-lg whitespace-nowrap mb-4'
        >
            <div ref={slider} className='flex w-fit'>
                {renderList()}
                {renderList(true)}
                {renderList(true)}
                {renderList(true)}
                {renderList(true)}
            </div>
        </div>
    )
}

export default Marque;