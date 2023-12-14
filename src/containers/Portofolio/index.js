import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import PortofolioList from './PortofolioList';
import FilterDropdown from '../../components/FilterDropdown';
import AddForm from '../../components/forms/AddForm';

import { setFilter } from '../../features/filterSlice';
import { ALL, VISIBLE, HIDDEN } from '../../constants/filters'

const Portofolio = () => {
    const dispatch = useDispatch()
    const [modalShow, setModalShow] = React.useState(false);
    const filter = useSelector((state) => state.filter);
    const filterOptions = [ALL, VISIBLE, HIDDEN];

    const handleFilterChange = (newFilter) => {
        dispatch(setFilter(newFilter));
    };

    return (
        <Container className='mt-3'>
            <ButtonToolbar
                className="justify-content-between mb-2"
                aria-label="Toolbar with Button groups"
            >
                <Button variant="secondary" size="md" onClick={() => setModalShow(true)}>
                    Add new entry
                </Button>
                <FilterDropdown
                    filterOptions={filterOptions}
                    selectedFilter={filter}
                    onSelectFilter={handleFilterChange}
                />
            </ButtonToolbar>

            <PortofolioList />

            {modalShow && <AddForm show={modalShow} onHide={() => setModalShow(false)} />}
        </Container>
    )

}

export default Portofolio