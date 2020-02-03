import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import _ from 'lodash';

const renderEmptyResponse = () => (
    <TableBody>
        <TableRow>
            <TableCell component="th" scope="row" colSpan={2}>
                No Data
            </TableCell>
        </TableRow>
    </TableBody>
);

const renderRows = (rows = []) => {
    return (
        <TableBody>
            {rows.map((row, index) => (
                <TableRow key={index}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell component="th" align="center" scope="row">
                        {row.value}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

export default function SearchResult(props) {
    const { rows } = props;
    return (
        <TableContainer data-testid="result-table" component={Paper}>
            <Table aria-label="simple table">{_.isEmpty(rows) ? renderEmptyResponse() : renderRows(rows)}</Table>
        </TableContainer>
    );
}
