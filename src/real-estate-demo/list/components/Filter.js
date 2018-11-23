import React from 'react';
import PropTypes from 'prop-types';
import {
	FilterWrapper
} from '../styles/list';

const data = {
	sortSection: {
		title: 'Ordenar por:',
		buttons: [
			{
				name: 'relevancia',
				text: 'Relevancia'
			},
			{
				name: 'menor-precio',
				text: 'Menor precio'
			},
			{
				name: 'mayor-precio',
				text: 'Mayor precio'
			}
		]
	},
	filterSection: {
		title: 'Filtrar por:',
		body: [
			{
				type: 'string',
				placeholder: 'Palabra clave',
				id: 'palabra-clave'
			},
			{
				placeholder: 'Precio Mínimo (USD)',
				type: 'number',
				id: 'precio-base'
			},
			{
				placeholder: 'Precio Máximo (USD)',
				type: 'number',
				id: 'precio-tope'
			}
		]
	},
	selectSection: [
		{
			title: 'Ambientes',
			id: 'ambientes',
			options: [
				{
					value: '',
					text: '',
				},
				{
					value: '1',
					text: '1',
				},
				{
					value: '2',
					text: '2',
				},
				{
					value: '3',
					text: '3',
				},
				{
					value: '4',
					text: '4 o más',
				}
			]
		},
		{
			title: 'Dormitorios',
			id: 'dormitorios',
			options: [
				{
					value: '',
					text: '',
				},
				{
					value: '1',
					text: '1',
				},
				{
					value: '2',
					text: '2',
				},
				{
					value: '3',
					text: '3',
				},
				{
					value: '4',
					text: '4 o más',
				}
			]
		},
		{
			title: 'Sup. cubierta (m²)',
			id: 'superficie-cubierta',
			options: [
				{
					value: '',
					text: ''
				},
				{
					value: 'A',
					text: 'Hasta 50'
				},
				{
					value: 'B',
					text: '50 - 100'
				},
				{
					value: 'C',
					text: 'Más de 100'
				}
			]
		},
		{
			title: 'Sup. total (m²)',
			id: 'superficie-total',
			options: [
				{
					value: '',
					text: ''
				},
				{
					value: 'A',
					text: 'Hasta 100'
				},
				{
					value: 'B',
					text: '100 - 400'
				},
				{
					value: 'C',
					text: 'Más de 400'
				}
			]
		}
	]
};

const Filter = ({
	criteria,
	sort,
	filterAll
}) => (
	<FilterWrapper id="filter">
		<div className="filter__title">{data.sortSection.title}</div>
		<div>
			{data.sortSection.buttons.map(button => (
				<button
					key={button.name}
					type="button"
					className={criteria === button.name ? 'active' : ''}
					onClick={() => { sort(`${button.name}`); }}
				>
					{button.text}
				</button>
			))}
		</div>

		<div className="filter__title">{data.filterSection.title}</div>
		{data.filterSection.body.map(input => (
			<input
				key={input.id}
				type={input.type}
				id={input.id}
				placeholder={input.placeholder}
				onChange={() => { filterAll(); }}
			/>
		))}

		{
			data.selectSection.map(select => (
				<div key={select.id} className="filter__select">
					<div className="filter__subtitle">{select.title}</div>
					<select id={select.id} onChange={filterAll}>
						{select.options.map(option => (
							<option key={option.value} value={option.value}>{option.text}</option>
						))}
					</select>
				</div>
			))
		}
	</FilterWrapper>
);

Filter.propTypes = {
	criteria: PropTypes.string.isRequired,
	sort: PropTypes.func.isRequired,
	filterAll: PropTypes.func.isRequired
};

export default Filter;
