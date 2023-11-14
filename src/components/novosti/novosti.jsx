import { Box, Button, Card, CardBody, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Carousel from 'react-multi-carousel';

export default function Novosti({ novosti }) {
	console.log(novosti);
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<Box w={'full'} pt={10}>
			<Heading color={'#0D4C93'} textAlign={'center'}>
				УСЛУГИ
			</Heading>
			<Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={6} mt={20}>
				{novosti.map(el => (
					<Box
						w={'250px'}
						h={'500px'}
						boxShadow='xl'
						rounded='md'
						bg='white'
						key={el.node.id}
						display={'flex'}
						flexDirection={'column'}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<Image w={'250px'} h={'150px'} src={el.node.img.url} alt={el.node.text} />
						<Heading textAlign={'center'} fontSize={'xl'} py={4} color={'#0D4C93'}>
							{el.node.text}
						</Heading>
						<Text textAlign={'center'} py={2}>
							{el.node.desc.slice(0, 100)}
						</Text>
						<Button colorScheme={'teal'} variant={'solid'} borderRadius={'3xl'} my={10}>
							Посмотреть все
						</Button>
					</Box>
				))}
			</Grid>
		</Box>
	);
}
