import * as React from 'react';
import { Alert, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';

const columns = [
    {
        id: 'service_name',
        label: 'Sigorta Tipi',
        minWidth: 170,
    },
    {
        id: 'status',
        label: 'Durum',
        minWidth: 170,
    },
    {
        id: 'additional_info',
        label: 'Ek Bilgi',
        minWidth: 170,
    },
    {
        id: 'form_url',
        label: 'Form Linki',
        minWidth: 170,
    },
    {
        id: 'invoice_url',
        label: 'Fatura Linki',
        minWidth: 170,
    },
    {
        id: 'cost',
        label: 'Teklif',
        minWidth: 170,
    }
];


export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const { offers } = useSelector(state => state.servicepSlice);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <Paper sx={{ margin: 'auto', marginTop: 5, width: '90%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 540 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align="center"
                                    style={{ minWidth: column.minWidth }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {offers
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align="center">
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={offers.length}
                rowsPerPage={rowsPerPage}
                labelRowsPerPage="Sayfa başına gösterim"
                labelDisplayedRows={(page) => `${page.count} kayıttan ${page.from}-${page.to === -1 ? page.count : page.to} arasındaki kayıtlar gösteriliyor `}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>

    );
}