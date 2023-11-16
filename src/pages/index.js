import { Box } from '@chakra-ui/react';
import Header from '@/components/heder/header';
import Product from '@/components/product/product';
import Uslugi from '@/components/uslugi/uslugi';
import Novosti from '@/components/novosti/novosti';
import Partnor from '@/components/partnor/partnor';
import { getHeaders, getNovosti, getProduct, getUslugi } from '@/components/server';

export default function Home({ header, product, uslugi, novosti }) {
	return (
		<Box w={'full'} bg={'white'} px={{ sm: '20px', lg: '25px', xl: '200px' }} py={'20px'} color={'black'}>
			<Header header={header} />
			<Product product={product} />
			<Uslugi uslugi={uslugi} />
			<Novosti novosti={novosti} />
			<Partnor />
		</Box>
	);
}
export async function getStaticProps() {
	const header = (await getHeaders()) || [];
	const product = (await getProduct()) || [];
	const uslugi = (await getUslugi()) || [];
	const novosti = (await getNovosti()) || [];

	return {
		props: { header, product, uslugi, novosti },
	};
}
