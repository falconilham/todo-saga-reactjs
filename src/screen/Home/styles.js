const styles = {
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        marginTop: 10,
        padding: 10,
        gridGap: 10,
    },
    columns: {
        border: '1px solid #ccc',
        padding: 10,
        display: 'grid',
        gridGap: 10,
        textAlign: 'left',
        justifyContent: 'start',
        marginBottom: 15,
        cursor: 'pointer'
    },
    textHeader: {
        fontSize: 30
    },
    textColumn: {
        fontSize: 20,
        marginBottom: 10
    },
    wrapperInput: {
        marginBottom: 10,
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gridGap: 10
    }
}

export default styles