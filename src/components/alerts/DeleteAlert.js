import React from 'react';
import { useDispatch } from 'react-redux';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { Button } from 'react-bootstrap';

import Modal from "../Modal"

import { remove } from '../../features/portofolioSlice';

const DeleteAlert = ({ show, onHide, id }) => {
    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(remove(id));
    };


    return (
        <Modal
            show={show}
            onHide={onHide}
            title="Are you sure you want to delete this item?"
        >
            <ButtonToolbar
                className="justify-content-center"
                aria-label="Toolbar with Button groups"
            >
                <Button onClick={() => handleRemoveItem(id)} variant='danger' className='mx-2'>Delete</Button>
                <Button onClick={onHide} variant='light' className='mx-2'>Close</Button>
            </ButtonToolbar>
        </Modal>
    )
};

export default DeleteAlert