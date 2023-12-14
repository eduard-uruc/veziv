import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'react-bootstrap/Image';
import { Pencil, Trash, EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import { Button, Nav } from 'react-bootstrap';

import EditForm from '../../components/forms/EditForm'
import DeleteAlert from '../../components/alerts/DeleteAlert'
import { hide } from '../../features/portofolioSlice';

const PortofolioItem = ({ item }) => {
    const dispatch = useDispatch();
    const [deleting, setDeleting] = useState(false);
    const [editing, setEditing] = useState(false);

    return (
        <>
            <tr>
                <td>{item.index + 1}</td>
                <td>{item.title}</td>
                <td>{item?.description}</td>
                <td>
                    <Nav.Link
                        href={item?.website}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item?.website}
                    </Nav.Link>
                </td>
                <td>
                    <Image src={item.image} rounded style={{ width: '8rem' }} />
                </td>
                <td>
                    <Button
                        className='me-2'
                        variant='primary'
                        onClick={() => setEditing(true)}
                    >
                        <Pencil />
                    </Button>
                    <Button
                        className='me-2'
                        variant='danger'
                        onClick={() => setDeleting(true)}
                    >
                        <Trash />
                    </Button>
                    <Button
                        className='me-2'
                        variant='light'
                        onClick={() => dispatch(hide({ id: item.id }))}
                    >
                        {!item?.hidden ? <EyeFill /> : <EyeSlashFill />}
                    </Button>

                </td>
            </tr>

            {editing &&
                <EditForm
                    show={editing}
                    onHide={() => setEditing(false)}
                    id={item.id}
                />
            }

            {deleting &&
                <DeleteAlert
                    show={deleting}
                    onHide={() => setDeleting(false)}
                    id={item.id}
                />
            }
        </>
    );
};

export default PortofolioItem;