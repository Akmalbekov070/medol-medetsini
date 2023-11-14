import { Box, Button, HStack, Heading, IconButton, Image, Link, Select, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GoLocation } from 'react-icons/go';
import { BiSearchAlt, BiLogoFacebook, BiPhoneCall } from 'react-icons/bi';

export default function Header({ header }) {
	return (
		<>
			<Box w={'full'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} color={'black'}>
				<HStack gap={4} justifyContent={'space-between'} alignItems={'center'}>
					<IconButton
						isRound={true}
						variant='solid'
						colorScheme='teal'
						color={'white'}
						aria-label='Done'
						fontSize='25px'
						icon={<GoLocation />}
					/>

					<Text w={'140px'} fontSize={'sm'}>
						г.Ташкент, Чиланзар 10 квартал, дом 3/1
					</Text>
				</HStack>
				<HStack px={2}>
					<IconButton
						isRound={true}
						variant='solid'
						colorScheme='teal'
						color={'white'}
						aria-label='Done'
						fontSize='25px'
						icon={<BiPhoneCall />}
					/>

					<Text w={'140px'} fontSize={'sm'}>
						+998 71 276-62-53 +998 71 276-62-54
					</Text>
				</HStack>
				<Link href='/'>
					<Box w={'full'} px={10}>
						<Image src='https://files.glotr.uz/company/000/028/406/logo/2022-03-28-16-16-22-142639-813712f8978fe4eb14919fc399e81d7e.webp?_=gzauc' />
					</Box>
				</Link>
				<HStack pl={'20px'} justifyContent={'space-between'} alignItems={'center'} gap={5}>
					<IconButton
						isRound={true}
						variant='solid'
						colorScheme='teal'
						color={'white'}
						aria-label='Done'
						fontSize='25px'
						icon={<BiSearchAlt />}
					/>
					<Button colorScheme={'teal'} variant={'outline'} color='blue'>
						<BiLogoFacebook />
						<Text fontSize={'10px'}>Мы на Facebook</Text>
					</Button>
					<Select w={'100px'} boxShadow='2xl' rounded='md' bg='white'>
						<option value='option1'>Rus</option>
						<option value='option2'>Uzb </option>
						<option value='option3'>Eng </option>
					</Select>
				</HStack>
			</Box>
			<Box w={'full'} h={'60px'} display={'flex'} alignItems={'center'} bg={'gray.200'} mt={10} borderRadius={20} py={3} px={8}>
				<HStack w={'full'} fontSize={'10px'} cursor={'pointer'}>
					<Box className='hover:text-lime-950' w={'full'} color={'blue'}>
						МАГАЗИН
					</Box>
					<Box w={'1px'} h={'60px'} bg={'gray.300'}></Box>
					<Box w={'full'} color={'green'} pl={10}>
						О КОМПАНИИ
					</Box>
					<Box w={'1px'} h={'60px'} bg={'gray.300'}></Box>
					<Box className='hover:text-lime-950' w={'full'} color={'blue'} pl={10}>
						ПРОДУКЦИЯ
					</Box>
					<Box w={'1px'} h={'60px'} bg={'gray.300'}></Box>
					<Box className='hover:text-lime-950' w={'full'} color={'blue'} pl={10}>
						УСЛУГИ АКЦИИ И НОВОСТИ
					</Box>
					<Box w={'1px'} h={'60px'} bg={'gray.300'}></Box>
					<Box className='hover:text-lime-950' w={'full'} color={'blue'} pl={8}>
						ОБРАТНАЯ СВЯЗЬ
					</Box>
				</HStack>
			</Box>
			{header.map(el => (
				<Box w={'full'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} key={el.node.id} gap={10}>
					<Box w={'full'}>
						<Heading w={'450px'} color={'#0D4C93'} fontSize={'7xl'} pt={20}>
							{el.node.text.slice(0, 20)}
						</Heading>
						<Text w={'490px'} color={'black'} py={4}>
							{el.node.decs}
						</Text>
						<Button colorScheme={'teal'} variant={'solid'} borderRadius={'3xl'} px={7} py={6} mt={2}>
							Подробнее
						</Button>
					</Box>
					<Box w={'full'}>
						<Image mt={20} src={el.node.img.url} alt={el.node.text} />
					</Box>
				</Box>
			))}
		</>
	);
}
