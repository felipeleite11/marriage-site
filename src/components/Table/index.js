import React from 'react'

import { TableContainer, Table } from './styles'

export default function({ title, headers, lines, footer, hidableColumnIndex }) {
	return (
		<TableContainer>
			<h1>{title}</h1>

			{lines?.length > 0 ? (
				<Table hidableColumnIndex={hidableColumnIndex}>
					<thead>
						<tr>
							{headers.map(header => (
								<th key={header.name}>
									{header.name}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{lines.map(line => (
							<tr key={line.id}>
								{headers.map(header => (
									<td key={header.prop}>
										{line[header.prop]}
									</td>
								))}
							</tr>
						))}
					</tbody>

					{footer && (
						<tfoot>
							<tr>
								<td></td>
								<td>Total</td>
								<td>{`${lines.length} pessoas`}</td>
							</tr>
						</tfoot>
					)}
				</Table>
			) : (
				<h1 className="preload-text">Aguarde...</h1>
			)}
		</TableContainer>
	)
}