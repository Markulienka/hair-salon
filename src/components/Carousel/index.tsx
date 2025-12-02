'use client'

import { useState } from 'react'
import { Media } from '@/components/Media'
import type { Media as MediaType } from '@/payload-types'

export type CarouselProps = {
    items: {
        image: string | MediaType
    }[]
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        )
    }

    if (!items || items.length === 0) {
        console.log('No items provided')
        return null
    }

    return (
        <div className="w-full py-8">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-300 ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                }`}
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="max-w-full max-h-full p-4">
                                    <Media
                                        resource={item.image}
                                        className="max-w-full max-h-[calc(100vh-200px)] mx-auto object-contain"
                                        imgClassName="max-w-full max-h-[calc(100vh-200px)] mx-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
                        aria-label="Previous slide"
                    >
                        &larr;
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
                        aria-label="Next slide"
                    >
                        &rarr;
                    </button>
                </div>
            </div>
        </div>
    )
}