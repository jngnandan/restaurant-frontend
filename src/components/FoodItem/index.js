import { createStyles, Image, Card, Text, Group, Button, getStylesRef, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconStar } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  carousel: {
    '&:hover': {
      [`& .${getStylesRef('carouselControls')}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef('carouselControls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(6),
    transition: 'width 250ms ease',

    '&[data-active]': {
      width: rem(16),
    },
  },
}));

const images = [
  'https://source.unsplash.com/800x400/?burger,pizza',
  'https://source.unsplash.com/800x400/?burger,meal',
  'https://source.unsplash.com/800x400/?arabic,meal',
  'https://source.unsplash.com/800x400/?biryani,meal',
  'https://source.unsplash.com/800x400/?food,fastfood',
];

const foodList = [
  {id: 1,
   name: 'Food 1',
   pic: 'https://source.unsplash.com/400x400/?burger,pizza',
   price: '£10',
  },
  {id: 2,
      name: 'Food 2',
      pic: 'https://source.unsplash.com/400x400/?burger,meal',
      price: '£20',
    },
  {id: 3,
      name: 'Food 3',
      pic: 'https://source.unsplash.com/400x400/?dinner,pizza',
      price: '£30',
    },
     {id: 4,
      name: 'Food 3',
      pic: 'https://source.unsplash.com/400x400/?arabic,food',
      price: '£15',
    },
     {id: 5,
      name: 'Food 3',
      pic: 'https://source.unsplash.com/400x400/?food,breakfast',
      price: '£5',
    },
     {id: 6,
      name: 'Food 3',
      pic: 'https://source.unsplash.com/400x400/?chicken,food',
      price: '£25',
    }
]

export default function FoodItem() {
  const { classes } = useStyles();

  const {id} = useParams()
  console.log(id)

  const foodItem = foodList.find(eachitem => eachitem.id == id)
  console.log(foodItem.pic)

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder padding="xl">
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group position="apart" mt="lg">
        <Text fw={500} fz="lg">
          {foodItem.name}
        </Text>

        <Group spacing={5}>
          <IconStar size="1rem" />
          <Text fz="xs" fw={500}>
            4.5
          </Text>
        </Group>
      </Group>
   
      <Text fz="sm" c="dimmed" mt="sm">
      Arabic cuisine is known for its rich flavors and diverse ingredients. From hearty stews and grilled meats to aromatic rice dishes and savory pastries, the cuisine is a celebration of the region's culinary heritage. Many dishes incorporate ingredients like olive oil, dates, chickpeas, and a variety of spices, creating a unique and unforgettable taste. Whether you're looking for a satisfying meal or a unique culinary adventure, Arabic cuisine has something to offer for everyone. Indulge in the vibrant flavors and warm hospitality of the Middle East, and experience the magic of Arabic cuisine today.      </Text>

      <Group position="apart" mt="md">
        <div>
          <Text fz="xl" span fw={500} className={classes.price}>
            {foodItem.price}
          </Text>
          <Text span fz="sm" c="dimmed">
            {' '}
            / item
          </Text>
        </div>

        <Button className='bg-blue-500' radius="md">Buy now</Button>
      </Group>
    </Card>
  );
}