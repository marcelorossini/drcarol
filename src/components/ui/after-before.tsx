'use client'

import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

export default function AfterBefore() {
    const FIRST_IMAGE = {
        imageUrl: 'https://placehold.co/400'
    };
    const SECOND_IMAGE = {
        imageUrl: 'https://placehold.co/400'
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