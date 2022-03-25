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
    },
    textHeader: {
        fontSize: 30
    },
    textColumn: {
        fontSize: 20,
        marginBottom: 10
    },
}

export default styles