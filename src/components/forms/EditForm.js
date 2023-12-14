import React from 'react';
import { useSelector } from 'react-redux';

import Modal from "../Modal"
import {EDIT} from "../../constants/potofolio"
import FormFields from "../../containers/Portofolio/FormFields"


const EditForm = ({ show, onHide, id }) => {
    const data = useSelector((state) => state.items);
    const prevData = data.find((item) => item.id === id);

    return (
        <Modal
            show={show}
            onHide={onHide}
            title="Edit entry"
        >
            <FormFields
                onHide={onHide}
                item={prevData}
                action={EDIT}
            />
        </Modal>
    )
};

export default EditForm