import { Div, Text } from './Core-ui';
import { Modal, Button, Input, Radio } from 'antd';
import { Formik } from 'formik';
import moment from 'moment';
import { object, string, number } from 'yup';
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from 'redux/slices/modal'
import { removeData, updateData, addData } from 'redux/slices/todo'

const { Group, Button: RadioButton } = Radio

const validationSchema = object().shape({
    title: string().required('Title is required'),
    status: number().required('Status is required'),
})

function CustomizeModal() {
    const dispatch = useDispatch()
    const { modal } = useSelector(state => state)
    const { selectedItem, open } = modal
    const isEditing = Boolean(selectedItem)
    const deleteTodo = (id) => {
        dispatch(removeData(id))
        dispatch(closeModal())
    }
    return (
        <Formik
            enableReinitialize
            validationSchema={validationSchema}
            initialValues={{
                title: isEditing ? selectedItem?.title : '',
                description: isEditing ? selectedItem?.description : '',
                status: isEditing ? selectedItem.status : 0,
            }}
            onSubmit={(values, { resetForm }) => {
                if (isEditing) {
                    const newSelectedItem = {
                        ...selectedItem,
                        ...values,
                    }
                    dispatch(updateData(newSelectedItem))
                } else {
                    dispatch(addData([{
                        ...values,
                        createdAt: moment().format('YYYY-MM-DD hh:mm'),
                    }]))
                }
                dispatch(closeModal())
                resetForm()
            }}
        >
            {({ handleSubmit, handleChange, values, dirty, errors, touched }) => {
                const { title, description, status } = values
                return (
                    <Modal
                        title={isEditing ? 'Edit Todo' : 'Add Todo'}
                        visible={open}
                        onCancel={() => dispatch(closeModal())}
                        footer={[
                            <Button key="delete" type='danger' onClick={() => deleteTodo(selectedItem?.id)}>
                                {isEditing && selectedItem?.status !== 1 && (
                                    <Div>Delete</Div>
                                )}
                            </Button>,
                            <Button key={isEditing ? "update" : 'Save'} disabled={!dirty} onClick={() => handleSubmit()}>
                                <Div>{isEditing ? 'Update' : 'Save'}</Div>
                            </Button>
                        ]}
                    >
                        <Div style={styles.container}>
                            <Div style={styles.form}>
                                <Text>Title</Text>
                                <Div>
                                    <Input name='title' value={title} onChange={handleChange} />
                                    {errors.title && touched.title && (
                                        <Text style={styles.error}>{errors.title}</Text>
                                    )}
                                </Div>

                            </Div>
                            <Div style={styles.form}>
                                <Text>Description</Text>
                                <Input name='description' value={description} onChange={handleChange} />
                            </Div>
                            <Div style={styles.form}>
                                <Text>Status</Text>
                                <Div>
                                    <Group buttonStyle="solid" name='status' value={status} onChange={handleChange}>
                                        <RadioButton checked={status === 1} value={1}>Completed</RadioButton>
                                        <RadioButton checked={status === 0} value={0}>Active</RadioButton>
                                    </Group>
                                    {errors.status && touched.status && (
                                        <Text style={styles.error}>{errors.status}</Text>
                                    )}
                                </Div>

                            </Div>
                        </Div>
                    </Modal>
                )
            }}
        </Formik>
    )
}

const styles = {
    container: {
        display: 'grid',
        gridRowGap: '10px',
    },
    form: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        alignItems: 'center'
    },
    error: {
        color: 'red',
    }
}

export default CustomizeModal;