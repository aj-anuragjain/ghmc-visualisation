import React from 'react'
import budgetSummary from './budgetSummary.json'
import ReactHighcharts from 'react-highcharts';


class BarGraphs extends React.Component {
    render() {
        return (
            <React.Fragment>
                {
                    budgetSummary.map((object, key) => {
                        const yAxisTitle = object['Particulars'];

                        const series = [];
                        let yearList = [];
                        let yearListHash = {};

                        const keys = Object.keys(object);
                        keys.shift();

                        const yearListKey = [];

                        keys.forEach(key => {
                            yearListKey.push(key.substring(0, key.indexOf(' ')))
                        });

                        yearListKey.forEach(key => {
                            if(yearListHash[key] !== key){
                                yearListHash[key] = key;
                                yearList.push(key)
                            }
                        });



                        const actuals = {};
                        const budgetEstimates = {};
                        const revisedEstimates = {};

                        yearList.forEach(yearItem => {
                            const actualsKey = `${yearItem} Actuals`
                            if(Object.prototype.hasOwnProperty.call(object, actualsKey)){
                                actuals[yearItem] = object[actualsKey]
                            }

                            const budgetEstimatesKey = `${yearItem} Budget Estimates`
                            if(Object.prototype.hasOwnProperty.call(object, budgetEstimatesKey)){
                                budgetEstimates[yearItem] = object[budgetEstimatesKey]
                            }

                            const revisedEstimatesKey = `${yearItem} Revised Estimates`
                            if(Object.prototype.hasOwnProperty.call(object, revisedEstimatesKey)){
                                revisedEstimates[yearItem] = object[revisedEstimatesKey]
                            }
                        })

                        const actualsSeries = yearList.map(year => {
                            if(Object.prototype.hasOwnProperty.call(actuals, year)){
                                return actuals[year];
                            }
                            return null;
                        })

                        const budgetEstimatesSeries = yearList.map(year => {
                            if(Object.prototype.hasOwnProperty.call(budgetEstimates, year)){
                                return budgetEstimates[year];
                            }
                            return null;
                        });

                        const revisedEstimatesSeries = yearList.map(year => {
                            if(Object.prototype.hasOwnProperty.call(revisedEstimates, year)){
                                return revisedEstimates[year];
                            }
                            return null;
                        });

                        series.push({
                            name: 'Actuals',
                            data: actualsSeries,
                        });
                        series.push({
                            name: 'Budget Estimates',
                            data: budgetEstimatesSeries,
                        });
                        series.push({
                            name: 'Revised Estimates',
                            data: revisedEstimatesSeries
                        });

                        const config = {
                            chart: {
                                type: 'column'
                            },
                            title: {
                                text: `Budget Summary - ${yAxisTitle}`
                            },
                            subtitle: {
                                text: 'Great Hyderabad Municipal Corporation'
                            },
                            credits: {
                                enabled: false
                            },
                            xAxis: {
                                categories: yearList,
                                // crosshair: true
                            },
                            yAxis: {
                                title: {
                                    text: yAxisTitle
                                }
                            },
                            tooltip: {
                                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                                footerFormat: '</table>',
                                shared: true,
                                useHTML: true
                            },
                            plotOptions: {
                                column: {
                                    pointPadding: 0.2,
                                    borderWidth: 0
                                }
                            },
                            series,
                        };

                        return (
                            <div key={key} className="col s12 m6">
                                <ReactHighcharts config={config}></ReactHighcharts>
                            </div>
                        )
                    })
                }
            </React.Fragment>
        )
        
    }
}


function BudgetSummary(){
    return (
        <React.Fragment>
            <div className="">
                <div className="row">
                    <BarGraphs />
                </div>
            </div>
        </React.Fragment>
    );
}


export default BudgetSummary;
