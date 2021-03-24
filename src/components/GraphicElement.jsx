import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack} from 'victory';

const API = 'https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e&b=2020/03/08%2012:00:00&e=2020/09/08%2012:00:00&tzo=0';

let devList = []

export default class GraphicElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            devStatus: [],
            resDevices: [],
            graphicData:{
                adult: [
                    {quarter: 1, earnings: 0},
                    {quarter: 2, earnings: 0},
                    {quarter: 3, earnings: 0},
                    {quarter: 4, earnings: 0},
                    {quarter: 5, earnings: 0},
                    {quarter: 6, earnings: 0},
                    {quarter: 7, earnings: 0},
                ],
                kid: [
                    {quarter: 1, earnings: 0},
                    {quarter: 2, earnings: 0},
                    {quarter: 3, earnings: 0},
                    {quarter: 4, earnings: 0},
                    {quarter: 5, earnings: 0},
                    {quarter: 6, earnings: 0},
                    {quarter: 7, earnings: 0},
                ],
                old: [
                    {quarter: 1, earnings: 0},
                    {quarter: 2, earnings: 0},
                    {quarter: 3, earnings: 0},
                    {quarter: 4, earnings: 0},
                    {quarter: 5, earnings: 0},
                    {quarter: 6, earnings: 0},
                    {quarter: 7, earnings: 0},
                ],
                undef: [
                    {quarter: 1, earnings: 0},
                    {quarter: 2, earnings: 0},
                    {quarter: 3, earnings: 0},
                    {quarter: 4, earnings: 0},
                    {quarter: 5, earnings: 0},
                    {quarter: 6, earnings: 0},
                    {quarter: 7, earnings: 0},
                ],
                young: [
                    {quarter: 1, earnings: 0},
                    {quarter: 2, earnings: 0},
                    {quarter: 3, earnings: 0},
                    {quarter: 4, earnings: 0},
                    {quarter: 5, earnings: 0},
                    {quarter: 6, earnings: 0},
                    {quarter: 7, earnings: 0},
                ]
            },
        }
    }
    componentWillMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                this.setState({ resDevices: data.data.o });
            })
            .catch(error => console.log('error', error));
        // devList.push(...this.state.resDevices.n);

        // for(let i=0; i >= (this.state.resDevice.length - 1){
        //     console.log(this.state.resDevice[i])
        // }
    }





    render() {
        return (
            <div>

                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={20}
                >
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4, 5, 6, 7]}
                        tickFormat={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
                    />
                    {console.log(devList)}
                    <VictoryAxis
                        dependentAxis
                    />
                    <VictoryStack
                        // colorScale={"warm"}
                    >
                        <VictoryBar
                            data={this.state.graphicData.adult}
                            x="quarter"
                            y="earnings"
                        />
                        <VictoryBar
                            data={this.state.graphicData.kid}
                            x="quarter"
                            y="earnings"
                        />
                        <VictoryBar
                            data={this.state.graphicData.old}
                            x="quarter"
                            y="earnings"
                        />
                        <VictoryBar
                            data={this.state.graphicData.undef}
                            x="quarter"
                            y="earnings"
                        />
                        <VictoryBar
                            data={this.state.graphicData.young}
                            x="quarter"
                            y="earnings"
                        />
                    </VictoryStack>
                </VictoryChart>
                {console.log(this.state.devStatus)}
            </div>
        );
    }
}
