import React from 'react';

import Modal from "../Modal"
import {ADD} from "../../constants/potofolio"
import FormFields from "../../containers/Portofolio/FormFields"


const AddForm = ({ show, onHide }) => (
    <Modal
        show={show}
        onHide={onHide}
        title="Add new entry"
    >
        <FormFields onHide={onHide} action={ADD} />
    </Modal>
)

export default AddForm