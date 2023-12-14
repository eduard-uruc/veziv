import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link, Image } from 'react-bootstrap-icons';

import { add, update } from '../../features/portofolioSlice';
import { ADD } from "../../constants/potofolio"

const FormFields = ({ onHide, item = {}, action = "" }) => {
    const dispatch = useDispatch();

    const initialData = {
        id: action === ADD ? Date.now() : item.id,
        title: item?.title || "",
        image: item?.image || null,
        website: item?.website || "",
        description: item?.description || "",
        hidden: item?.hidden || null
    }

    const [validated, setValidated] = useState(false);
    const [data, setData] = useState(initialData);
    const [isChecked, setChecked] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else {
            action === ADD ? dispatch(add(data)) : dispatch(update(data));
            action === ADD && setData(initialData);
            onHide()
        }

        setValidated(true);
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })

        if (e.target.id === "image") {
            const file = e.target.files[0];
            const reader = new FileReader();



            console.log('file: ', file)
            console.log('reader: ', reader)
            console.log('reader.result: ', reader.result)
            console.log(' ',)

            reader.onloadend = () => {
                setData({ ...data, [e.target.id]: reader.result })
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        }
    }

    const handleSwitchToggle = () => {
        setChecked(!isChecked);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md={action === ADD ? 6 : 12} controlId="title">
                    <Form.Label>Title</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Title"
                            defaultValue={data.title}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a title.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>


                {action === ADD
                    ? <Form.Group as={Col} md="6" controlId="image">
                        <Form.Label>Image</Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="inputGroupPrepend"><Image /></InputGroup.Text>
                            <Form.Control
                                type="file"
                                onChange={handleChange}
                            />
                        </InputGroup>
                    </Form.Group>
                    : <>
                        <Form.Group as={Col} md="6" controlId="image" className='mt-2'>
                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                                label="Upload new picture"
                                checked={isChecked}
                                onChange={handleSwitchToggle}
                            />
                        </Form.Group>

                        {isChecked && <Form.Group as={Col} md="6" controlId="image" className='mt-2'>
                            <Form.Label>Image</Form.Label>
                            <InputGroup>
                                <InputGroup.Text id="inputGroupPrepend"><Image /></InputGroup.Text>
                                <Form.Control
                                    type="file"
                                    onChange={handleChange}
                                />
                            </InputGroup>
                        </Form.Group>}
                    </>
                }

                <Form.Group as={Col} md="12" controlId="website">
                    <Form.Label>Website</Form.Label>
                    <InputGroup>
                        <InputGroup.Text id="inputGroupPrepend"><Link /></InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Website"
                            defaultValue={data.website}
                            onChange={handleChange}
                        />
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter description"
                        defaultValue={data.description}
                        onChange={handleChange}
                    />
                </Form.Group>

                <ButtonToolbar
                    className="justify-content-end mb-2"
                    aria-label="Toolbar with Button groups"
                >
                    <Button type='submit' variant='secondary' className='m-2'>{action}</Button>
                    <Button onClick={onHide} variant='light' className='m-2'>Close</Button>
                </ButtonToolbar>
            </Row>
        </Form >
    );
}

export default FormFields