class Clock extends React.Component {

    // runs after the component output has been rendered to the DOM
    componentDidMount() {
        console.log("mount")
    }

    // component is ever removed from the DOM, React calls the componentWillUnmount()
    componentWillUnmount() {
        console.log("will unmount")
    }

    render() {
        return (
            <p>{new Date().toISOString()}</p>
        )
    }
}