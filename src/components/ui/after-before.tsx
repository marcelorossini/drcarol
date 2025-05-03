'use client'

import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import AnimatedWrapper from './animated-wrapper';
import { Mark } from './image';
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
            <div className='relative' onContextMenu={(e) => e.preventDefault()}>
                <ReactBeforeSliderComponent
                    firstImage={FIRST_IMAGE}
                    secondImage={SECOND_IMAGE}
                />
                <div className='absolute bottom-0 w-full flex justify-center p-2'>
                    <Mark />
                </div>
            </div>
        </AnimatedWrapper>
    )
}