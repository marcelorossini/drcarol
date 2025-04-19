'use client'

import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import AnimatedWrapper from './animated-wrapper';

export default function AfterBefore({ 
    images, 
    index = 0 
}: { 
    images: { before: string, after: string, title?: string },
    index?: number 
}) {
    const FIRST_IMAGE = {
        imageUrl: images.before,
        alt: `Antes - ${images.title || 'Resultado'}`
    };
    const SECOND_IMAGE = {
        imageUrl: images.after,
        alt: `Depois - ${images.title || 'Resultado'}`
    };

    return (
        <AnimatedWrapper index={index} className='rounded-4xl overflow-hidden'>
            <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
            />
        </AnimatedWrapper>
    )
}