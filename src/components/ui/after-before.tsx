'use client'

import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

export default function AfterBefore({ images }: { images: { before: string, after: string } }) {
    const FIRST_IMAGE = {
        imageUrl: images.before
    };
    const SECOND_IMAGE = {
        imageUrl: images.after
    };

    return (
        <div className='rounded-4xl overflow-hidden'>
            <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
            />
        </div>
    )

}