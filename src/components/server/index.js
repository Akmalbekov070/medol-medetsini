import { request, gql } from 'graphql-request';

const grahqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const getHeaders = async () => {
	const query = gql`
		query Assets {
			hedersConnection {
				edges {
					node {
						decs
						id
						text
						img {
							url
						}
					}
				}
			}
		}
	`;
	const result = await request(grahqlAPI, query);
	return result.hedersConnection.edges;
};
export const getProduct = async () => {
	const query = gql`
		query Assets {
			productsConnection {
				edges {
					node {
						id
						img {
							url
						}
						text
					}
				}
			}
		}
	`;
	const result = await request(grahqlAPI, query);
	return result.productsConnection.edges;
};
export const getUslugi = async () => {
	const query = gql`
		query Assets {
			uslugisConnection {
				edges {
					node {
						desc
						id
						text
						img {
							url
						}
					}
				}
			}
		}
	`;
	const result = await request(grahqlAPI, query);
	return result.uslugisConnection.edges;
};
export const getNovosti = async () => {
	const query = gql`
		query Assets {
			novostisConnection {
				edges {
					node {
						data
						desc
						id
						img {
							url
						}
						text
					}
				}
			}
		}
	`;
	const result = await request(grahqlAPI, query);
	return result.novostisConnection.edges;
};
