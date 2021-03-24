import React from 'react';

const API = 'https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e&b=2020/03/08%2012:00:00&e=2020/09/08%2012:00:00&tzo=0'

export default class ResponseJson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            devices: []
        };
    }

    componentWillMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                console.log('data', data); // обратите внимание на этот вывод
                this.setState({ devices: data.data.o });
            })
            .catch(error => console.log('error', error)); // этот выполнится в случае ошибки
    }

    render() {
        // const { devices } = this.state;
        // console.log(this.state.devices);
        return (
            <div>

            </div>
        );
    }
}