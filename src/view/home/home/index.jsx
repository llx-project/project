import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as userAction from '../../../store/user/action';
import Tabs from '../../../common/component/tabs';
import List from '../component/list';
import './index.less';

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

@connect(
    state => ({
        user: state.user
    }),
    dispatch => ({
        actions: bindActionCreators({
            ...userAction
        }, dispatch)
    })
)
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

    handleSetNumber = () => {
        this.props.actions.addNumber();
    }

    handleSetAsynNumber = () => {
        this.props.actions.addAsynType();
    }

    render() {
        const { key } = this.state;
        const { user } = this.props;

        return (
            <div>
                <Tabs 
                    active={key}
                    options={tabsOptions}>
                </Tabs>
                <button onClick={this.handleSetNumber}>设置</button>
                <button onClick={this.handleSetAsynNumber}>设置异步</button>
                {user.number}
            </div>
        )
    }
}