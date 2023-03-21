import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [
  'https://source.unsplash.com/800x400/?burger,pizza',
  'https://source.unsplash.com/800x400/?burger,meal',
  'https://source.unsplash.com/800x400/?arabic,meal',
  'https://source.unsplash.com/800x400/?biryani,meal',
  'https://source.unsplash.com/800x400/?food,fastfood',
];

// const images = [/* ... urls of images */];


function CardsCarousel() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
    withControls
    withThumbnails
    height={450}
  
    breakpoints={[
      { maxWidth: 600, height: 300, slideSize: '100%' },
      { maxWidth: 800, height: 300, slideSize: '100%' },
      { maxWidth: 1200, height: 300, slideSize: '100%' },
    ]}
    >
      {slides}
    </Carousel>
  );
}
export default CardsCarousel;