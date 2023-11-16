import {
	Box,
	Button,
	HStack,
	Heading,
	IconButton,
	Image,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Select,
	Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { GoLocation } from 'react-icons/go';
import { BiSearchAlt, BiLogoFacebook, BiPhoneCall } from 'react-icons/bi';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import { BsListNested } from 'react-icons/bs';

export default function Header({ header }) {
	return (
		<>
			<Box w={'full'} display={'flex'} alignItems={'center'} color={'black'}>
				<Box w={'full'} display={{ base: 'flex', lg: 'none' }} mt={-4}>
					<Menu colorScheme={'facebook'} variant={'solid'}>
						<MenuButton as={Button} color={'blue'}>
							<BsListNested size={'40'} />
						</MenuButton>
						<MenuList bg={'white'} color={'black'}>
							<MenuItem>Download</MenuItem>
							<MenuItem>Create a Copy</MenuItem>
							<MenuItem>Mark as Draft</MenuItem>
							<MenuItem>Delete</MenuItem>
							<MenuItem>Attend a Workshop</MenuItem>
						</MenuList>
					</Menu>
				</Box>
				<HStack gap={4} display={{ base: 'none', lg: 'flex', xl: 'flex' }}>
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
				<HStack w={'full'} px={2} display={{ base: 'none', lg: 'flex', xl: 'flex' }}>
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
					<Box w={{ base: '200px', lg: '400px', xl: '300px' }} px={10}>
						<Image
							overflow={'hidden'}
							src='https://files.glotr.uz/company/000/028/406/logo/2022-03-28-16-16-22-142639-813712f8978fe4eb14919fc399e81d7e.webp?_=gzauc'
							alt='img'
						/>
					</Box>
				</Link>
				<Box w={'full'} display={{ base: 'flex', lg: 'none' }} mt={-4}>
					<Menu colorScheme={'facebook'} variant={'solid'}>
						<MenuButton as={Button} color={'blue'}>
							<Box w={'full'} display={'flex'} alignItems={'center'} gap={2}>
								<Heading>All</Heading>
								<BsListNested size={'40'} />
							</Box>
						</MenuButton>
						<MenuList bg={'white'} color={'black'}>
							<MenuItem>МАГАЗИН</MenuItem>
							<MenuItem>О КОМПАНИИ</MenuItem>
							<MenuItem>ПРОДУКЦИЯ</MenuItem>
							<MenuItem>УСЛУГИ АКЦИИ И НОВОСТИ</MenuItem>
							<MenuItem>ОБРАТНАЯ СВЯЗЬ</MenuItem>
						</MenuList>
					</Menu>
				</Box>
				<HStack justifyContent={'space-between'} alignItems={'center'} gap={5} display={{ base: 'none', lg: 'flex', xl: 'flex' }}>
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
					<Box w={'full'} display={'flex'}>
						<Select w={'100px'} boxShadow='2xl' rounded='md' bg='white'>
							<option value='option1'>Rus</option>
							<option value='option2'>Uzb </option>
							<option value='option3'>Eng </option>
						</Select>
					</Box>
				</HStack>
			</Box>

			<Box
				w={'full'}
				h={'60px'}
				display={{ base: 'none', lg: 'flex' }}
				alignItems={'center'}
				bg={'gray.200'}
				mt={10}
				borderRadius={20}
				py={3}
				px={8}
			>
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
					<Box>
						<Heading w={'450px'} color={'#0D4C93'} fontSize={{ base: 'lg', lg: '2xl', xl: '7xl' }} pt={20}>
							{el.node.text.slice(0, 20)}
						</Heading>
						<Text w={{ base: '250px' }} color={'black'} py={4}>
							{el.node.decs.slice(0, 100)}
						</Text>
						<Button colorScheme={'teal'} variant={'solid'} borderRadius={'3xl'} px={7} py={6} mt={2}>
							Подробнее
						</Button>
					</Box>
					<Box w={'full'} display={{ base: 'none', lg: 'flex' }}>
						<Image mt={20} src={el.node.img.url} alt={el.node.text} />
					</Box>
				</Box>
			))}
		</>
	);
}
