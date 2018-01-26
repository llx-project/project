import './home.less';
import Tabs from 'common/component/tabs';

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
    render() {
        return (
            <div>
                <Tabs options={tabsOptions}>

                </Tabs>
            </div>
        )
    }
}