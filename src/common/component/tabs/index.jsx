
 class Tabs extends React.Component {

    renderTabs = (options) => {
        return options.map(({ key, label }) => {
            return <span key={key}>{label}</span>
        })
    }

    render() {
        const { children, options } = this.props;
        const tabs = this.renderTabs(options);
        return (
            <div>
                <div>{tabs}</div>
                <div>{children}</div>
            </div>
        )
    }
}

export default Tabs;