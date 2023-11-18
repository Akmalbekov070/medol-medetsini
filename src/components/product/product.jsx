import { Box, Button, Grid, HStack, Heading, Image } from '@chakra-ui/react';
import React from 'react';

export default function Product({ product }) {
	return (
		<Box pt={12} px={{ base: 16, sm: 10, lg: 4, xl: 2 }}>
			<Heading color={'#0D4C93'} textAlign={'center'} fontSize={{ base: 'lg', lg: 'xl' }}>
				ПРОДУКЦИЯ
			</Heading>
			{/* {product.map(el => (
				<Box w={'full'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
					<HStack w={'full'} display={'flex'} flexWrap={'wrap'}>
						<Box w={'250px'} h={'300px'} boxShadow='2xl' rounded='md' bg='white'>
							<Image src={el.node.img.url} alt={el.node.text} />
						</Box>
					</HStack>
				</Box>
			))} */}
			<Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={6} mt={20}>
				{product.map(el => (
					<Box
						w={{ base: '200px', lg: '250px' }}
						h={'370px'}
						boxShadow='xl'
						rounded='md'
						bg='white'
						key={el.node.id}
						display={'flex'}
						flexDirection={'column'}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<Image w={'250px'} h={'200px'} src={el.node.img.url} alt={el.node.text} />
						<Heading textAlign={'center'} fontSize={'xl'}>
							{el.node.text}
						</Heading>
						<Button colorScheme={'teal'} variant={'solid'} borderRadius={'3xl'} my={10}>
							Посмотреть все
						</Button>
					</Box>
				))}
			</Grid>
		</Box>
	);
}
