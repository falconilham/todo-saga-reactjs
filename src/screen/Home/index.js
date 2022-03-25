import React, { useEffect, useMemo } from 'react'
//Redux
import { useSelector } from 'react-redux'
//Component
import { Div, Text } from '../../component/Core-ui'
import { Button } from 'antd'
//Function
import { getData } from '../../helper/request'
import { addData } from '../../redux/slices/data'
import { changeSelectedItem, openModal } from '../../redux/slices/modal'
import { sortAscending, sortDescending } from '../../helper/sorting'
//Style
import Styles from './styles'

function Home() {
    const state = useSelector(state => state)
    const { data } = state
    const { dataTodo } = data

    const callData = async () => {
        const response = await getData()
        addData(response)
    }

    useEffect(() => {
        callData()
    }, [])

    //still need to fix sort by date
    const activeTodo = useMemo(() => {
        const result = dataTodo.filter(({ status }) => !status)
        const sortDesc = sortDescending(result)
        return sortDesc
    }, [dataTodo])

    const completedTodo = useMemo(() => {
        const result = dataTodo.filter(({ status }) => status)
        const sortAsc = sortAscending(result)
        return sortAsc
    }, [dataTodo])

    const setSelectedItem = (id) => {
        const result = dataTodo.find((item) => item.id === id)
        changeSelectedItem(result)
        return result
    }

    const listItem = useMemo(() => {
        const mapItem = [
            {
                title: 'Active Todo',
                data: activeTodo,
            },
            {
                title: 'Completed Todo',
                data: completedTodo,
            }
        ]
        return mapItem
    }, [activeTodo, completedTodo])

    return (
        <Div>
            <Text style={Styles.textHeader}>To do list</Text>
            <Div style={Styles.root}>
                {listItem.map(({ title, data }, index) => (
                    <Div key={index}>
                        <Text style={Styles.textColumn}>{title}</Text>
                        {data.map(({ id, title }, i) => (
                            <Div key={i} onClick={() => setSelectedItem(id)} style={Styles.columns}>
                                <Text link={true}>{title}</Text>
                            </Div>
                        ))}
                    </Div>
                ))}
            </Div>
            <Button onClick={() => openModal()}>Add Todo</Button>
        </Div>
    )
}

export default Home

