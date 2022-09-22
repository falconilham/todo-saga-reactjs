import React, { useEffect, useMemo, useState } from 'react'
//Redux
import { useSelector, useDispatch } from 'react-redux'
//Component
import { Div, Text } from 'component/Core-ui'
import { Button, Input, Select, DatePicker } from 'antd'
//Function
import { getData } from 'redux/slices/todo'
import { changeItem, openModal } from 'redux/slices/modal'
//Style
import styles from './styles'

const { Option } = Select

function Home() {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    useEffect(() => dispatch(getData()), [dispatch])
    const { data } = state
    const { dataTodo } = data
    const [search, setSearch] = useState({
        activeFilter: null,
        completedFilter: null,
        categoryActive: null,
        categoryCompleted: null
    })
    const { activeFilter, completedFilter, categoryActive, categoryCompleted } = search
    const setFilter = (field, value) => setSearch((state) => ({
        ...state,
        [field]: value
    }))

    const filterByString = (arr, string, category) => arr.filter((item) => item[category].toLowerCase().includes(string.toLowerCase()))

    const activeTodo = useMemo(() => {
        const filterByActive = dataTodo.filter(({ status }) => !status)
        if (activeFilter) {
            return filterByString(filterByActive, activeFilter, (categoryActive || 'title'))
        } else {
            return filterByActive
        }
    }, [dataTodo, activeFilter, categoryActive])

    const completedTodo = useMemo(() => {
        const filterByCompleted = dataTodo.filter(({ status }) => status)
        if (completedFilter) {
            return filterByString(filterByCompleted, completedFilter, (categoryCompleted || 'title'))
        } else {
            return filterByCompleted
        }
    }, [dataTodo, completedFilter, categoryCompleted])

    const setSelectedItem = (id) => {
        const result = dataTodo.find((item) => item.id === id)
        dispatch(changeItem(result))
    }

    const listItem = useMemo(() => [
        {
            title: 'Active Todo',
            data: activeTodo,
            placeholder: 'Active todo search',
            keyFilter: 'activeFilter',
            keyCategory: 'categoryActive'
        },
        {
            title: 'Completed Todo',
            data: completedTodo,
            placeholder: 'Completed todo search',
            keyFilter: 'completedFilter',
            keyCategory: 'categoryCompleted'
        }
    ], [activeTodo, completedTodo])

    const listCategory = [
        {
            key: 'title',
            title: 'Title'
        },
        {
            key: 'description',
            title: 'Description'
        },
        {
            key: 'createdAt',
            title: 'Created at'
        },
    ]
    return (
        <Div>
            <Text style={styles.textHeader}>To Do</Text>
            <Div style={styles.root}>
                {listItem.map(({ title, data, placeholder, keyFilter, keyCategory }, index) => (
                    <Div key={index}>
                        <Text style={styles.textColumn}>{title}</Text>
                        <Div style={styles.wrapperInput}>
                            {search[keyCategory] === 'createdAt' ? (
                                <DatePicker onChange={(_, dateString) => setFilter(keyFilter, dateString)} />
                            ) : (
                                <Input
                                    placeholder={placeholder}
                                    onChange={(e) => setFilter(keyFilter, e.target.value)}
                                    value={search[keyFilter]}
                                />
                            )}
                            <Select
                                onChange={(value) => setFilter(keyCategory, value)}
                                value={search[keyCategory]}
                                placeholder="Select category"
                            >
                                {listCategory.map(({ key, title }, i) => (
                                    <Option key={i} value={key}>{title}</Option>
                                ))}
                            </Select>
                        </Div>
                        {data.map(({ id, title }, i) => (
                            <Div key={i} onClick={() => setSelectedItem(id)} style={styles.columns}>
                                <Text link={true}>{title}</Text>
                            </Div>
                        ))}
                    </Div>
                ))}
            </Div>
            <Button onClick={() => dispatch(openModal())}>Add Todo</Button>
        </Div>
    )
}

export default Home

