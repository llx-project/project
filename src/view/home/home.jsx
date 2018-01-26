import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Tabs from '../../common/component/tabs';
import List from './component/list';
import './home.less';

const tabsOptions = [
    {
        label: '测试1',
        key: 1
    },
    {
        label: '测试2',
        key: 2
    }
]

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            key: 1
        }
    }

    handleChange = (key) => {
        this.setState({
            key
        })
    }

    render() {
        const { key } = this.state;

        return (
            <div>
                <Tabs 
                    active={key}
                    options={tabsOptions}>
                </Tabs>
            </div>
        )
    }
}