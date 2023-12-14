import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import PortofolioItem from './PortofolioItem';
import { ALL, VISIBLE, HIDDEN } from '../../constants/filters'

const PortofolioList = () => {
    const items = useSelector((state) => state.items);
    const filter = useSelector((state) => state.filter);
    
    const filteredItems = items.filter((item) => {
        if (filter === ALL) return true;
        if (filter === HIDDEN) return item.hidden;
        if (filter === VISIBLE) return !item.hidden;
        return true;
    });


    if (!filteredItems?.length) {
        return (
            <Container className='mt-3'>
                <Row>
                    <Col className='p-3 bg-light' >There is no entry</Col>
                </Row>
            </Container>
        )
    }

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Website</th>
                    <th>Logo</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {filteredItems.map((item, index) => (
                    <PortofolioItem
                        key={item.id}
                        item={{ ...item, index }}
                    />
                ))}
            </tbody>
        </Table>
    );
};

export default PortofolioList;
