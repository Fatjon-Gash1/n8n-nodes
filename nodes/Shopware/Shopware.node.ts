import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class Shopware implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Shopware',
		name: 'Shopware',
		icon: 'file:shopware.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Shopware node for CRUD operations on products, and orders',
		defaults: {
			name: 'Shopware',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'ShopwareApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://shopware.stoplight.io/docs/admin-api/8d53c59b2e6bc-shopware-admin-api',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Products',
						value: 'products',
					},
					{
						name: '',
						value: 'marsRoverPhotos',
					},
				],
				default: 'astronomyPictureOfTheDay',
			},
			// Operations will go here

		]	};
}
