/**
 * 应用容器
 * @author zhiyong.xu <zhiyong.xui@wenba100.com>
 * @since 2018-01-26 16:37:45
 */

export default class extends React.Component {
    render() {
        return (
            <div className="app">
                {this.props.children}
            </div>
        )
    }
}