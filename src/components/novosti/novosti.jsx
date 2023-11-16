import { Box, Button, Card, CardBody, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Novosti({ novosti }) {
	console.log(novosti);
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<>
			<Box pt={10}>
				<Heading color={'#0D4C93'} textAlign={'center'} fontSize={{ base: 'lg', lg: 'xl' }}>
					НОВОСТИ
				</Heading>
			</Box>
			<Box px={15}>
				<Carousel responsive={responsive}>
					{novosti.map(el => (
						<Box w={'250px'} h={'500px'} boxShadow='xl' rounded='md' bg='white' key={el.node.id}>
							<Image w={'250px'} h={'150px'} src={el.node.img.url} alt={el.node.text} />
							<Heading textAlign={'center'} fontSize={'xl'} py={4} color={'#0D4C93'}>
								{el.node.text}
							</Heading>
							<Text textAlign={'center'} color={'#0D4C93'}>
								{el.node.data}
							</Text>
							<Text textAlign={'center'} py={2}>
								{el.node.desc.slice(0, 100)}
							</Text>
							<Button mx={12} colorScheme={'teal'} variant={'solid'} borderRadius={'3xl'} my={10}>
								Посмотреть все
							</Button>
						</Box>
					))}
				</Carousel>
			</Box>
		</>
	);
}
