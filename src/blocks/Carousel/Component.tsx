import { Carousel } from '@/components/Carousel'
import type { CarouselProps } from '@/components/Carousel'

export const CarouselBlock: React.FC<CarouselProps> = ({ items }) => {
    return <Carousel items={items} />
}