import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { useState } from 'react';
import { object, string, number, date, InferType } from 'yup';
import { useFormik } from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function Property(props) {

    const [open, setOpen] = React.useState(false);
    const [data, setdata] = useState([]);
    const [update, setUpdate] = useState(null);

    let propertySchema = object({
        property_name: string().required("please enter property name"),
        description: string().required("please enter description"),
    });

    const columns = [
        { field: 'property_name', headerName: 'Property Name', width: 130 },
        { field: 'description', headerName: 'Property Description', width: 190 },
        {
            field: 'delete', headerName: 'Delete',
            renderCell: (params) => (
                <DeleteIcon onClick={() => handleDelete(params.row.id)} />
            ),
        },
        {
            field: 'edit', headerName: 'Edit', width: 190,
            renderCell: (params) => (
                <EditIcon onClick={() => handleEdit(params.row)} />
            ),
        },

    ];

    const handleDelete = (id) => {
        console.log(id);
        let localData = JSON.parse(localStorage.getItem('property'));
        let newData = localData.filter((v) => v.id !== id)
        localStorage.setItem('property', JSON.stringify(newData));
        getdata()

    }
    const handleUpdate = (data) => {
        let localdata = JSON.parse(localStorage.getItem('property'));
        let index = localdata.findIndex(v => v.id === data.id)
        localdata[index] = data;
        localStorage.setItem("property", JSON.stringify(localdata))
        getdata();
    }
    const handleEdit = (data) => {
        console.log(data);
        setOpen(true)
        formik.setValues(data)
        setUpdate(data)
    }

    const formik = useFormik({
        initialValues: {
            property_name: '',
            description: '',
        },
        validationSchema: propertySchema,
        onSubmit: (values, { resetForm }) => {
            if (update) {
                handleUpdate(values)
            } else {
                handleAdd(values)

            }
            handleClose()
        },
    });
    const { handleSubmit, handleChange, handleBlur, values, touched, errors } = formik

    const handleAdd = (data) => {
        console.log(data);
        const rNo = Math.floor(Math.random() * 1000);

        let localData = JSON.parse(localStorage.getItem("property"));

        if (localData) {
            localData.push({ ...data, id: rNo });
            localStorage.setItem('property', JSON.stringify(localData));
        } else {
            localStorage.setItem('property', JSON.stringify([{ ...data, id: rNo }]));
        }
        getdata();
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        formik.resetForm(data)
        setUpdate(null)
    };

    const getdata = () => {
        let localData = JSON.parse(localStorage.getItem('property'));
        if (localData) {
            setdata(localData)
        }
    }

    useEffect(() => {
        getdata()
    }, [])


    return (
        <>
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    add property
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle>Property Dateils</DialogTitle>
                    <form onSubmit={handleSubmit}>
                        <DialogContent>
                            <TextField
                                margin="dense"
                                id="property_name"
                                name="property_name"
                                label="property name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.property_name}
                                error={errors.property_name && errors.property_name ? true : false}
                                helperText={errors.property_name && touched.property_name ? errors.property_name : ''}
                            />
                            <TextField
                                margin="dense"
                                id="description"
                                name="description"
                                label="description"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                                error={errors.description && errors.description ? true : false}
                                helperText={errors.description && touched.description ? errors.description : ''}
                            />
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type="submit">{update ? 'Update' : 'Add'}</Button>
                            </DialogActions>
                        </DialogContent>
                    </form>

                </Dialog>
            </React.Fragment>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </>
    );
}

export default Property;