import { Box, Button, Grid, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function Uslugi({ uslugi }) {
	console.log(uslugi);
	return (
		<Box pt={10} px={{ base: 16, sm: 24, xl: 4 }}>
			<Heading color={'#0D4C93'} textAlign={'center'} fontSize={{ base: 'lg', lg: 'xl' }}>
				УСЛУГИ
			</Heading>
			<Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6} mt={20}>
				{uslugi.map(el => (
					<Box
						w={'250px'}
						h={'520px'}
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
							{el.node.desc}
						</Text>
						<Button colorScheme={'teal'} variant={'solid'} borderRadius={'3xl'} my={10}>
							Посмотреть все
						</Button>
					</Box>
				))}
			</Grid>
			<Box>
				<Heading color={'#0D4C93'} textAlign={'center'} pt={10} fontSize={{ base: 'lg', lg: 'xl' }}>
					О КОМПАНИИ
				</Heading>
				<Box w={'full'} display={'flex'} alignItems={'center'} pt={6} gap={10}>
					<Box
						w={'400px'}
						display={{ base: 'none', lg: 'flex' }}
						h={'400px'}
						border='4px'
						borderColor='blue.200'
						borderRadius={'50%'}
						position={'relative'}
						overflow={'hidden'}
					>
						<Image
							w={'200px'}
							position={'absolute'}
							bottom={'150px'}
							left={'90px'}
							src='https://files.glotr.uz/company/000/028/406/logo/2022-03-28-16-16-22-142639-813712f8978fe4eb14919fc399e81d7e.webp?_=gzauc'
							alt='img'
						/>
					</Box>
					<Box>
						<Text w={{ base: '300px ', lg: '350px', xl: '450px' }}>
							{`	Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за
							плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в
							разных уголках Земли. 2011 году MEDOL зарегистрировал в Узбекистане ИП “Medical Online Services". Цель компании
							построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в
							систему здравоохранения Республики Узбекистан.`}
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
