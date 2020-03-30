import React, { Component } from "react";
import styled from "styled-components";
import { Chart } from "react-charts";
import axios from "axios";
import { Loading } from "./Loading";

const minData = [
  [0, 5],
  [1, 5],
  [2, 18],
  [3, 1080],
  [4, 7650],
  [5, 25700],
  [6, 13300],
  [7, 4060],
  [8, 3640]
];

const maxData = [
  [0, 50],
  [1, 426],
  [2, 7340],
  [3, 56500],
  [4, 229000],
  [5, 288000],
  [6, 254000],
  [7, 165400],
  [8, 117000]
];

const ChartWrapper = styled.div`
  width: 66.6%;
  height: 300px;
  padding: 0 1rem;
  background-color: white;
  border-radius: 10px;
`;

const NoData = styled.h1`
  text-align: center;
`;

const xLabels = [1, 2, 3, 4, 5, 6, 7, 8];

var initialData = [
  { label: "Min", data: minData },
  { label: "Max", data: maxData },
  { label: "Waarde", data: [] }
];

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
      data: initialData,
      finalData: {},
      loading: false
    };
  }

  componentDidMount() {
    this.resetData();
    this.getPatientData();
  }

  resetData() {
    var tempData = this.state.data;
    tempData[0].data = minData;
    tempData[1].data = maxData;
    this.setState({ data: tempData });
  }

  getPatientData = () => {
    this.setState({ loading: true });
    const userId = this.props.patientId;
    axios
      .get(`http://localhost:8000/api/data?user=${userId}`)
      .then(res => {
        if (res.data.length && res.data.length > 1) {
          this.setState({ hasData: true });
          var tempArr = [];
          res.data.map((key, index) => {
            return tempArr.push([index, key.hcg_value]);
          });
          this.setData(tempArr);
        }
      })
      .catch(e => console.log(e));
  };

  setData(arr) {
    const patientData = arr;
    var data = this.state.data;
    data[0].data = data[0].data.slice(0, patientData.length);
    data[1].data = data[1].data.slice(0, patientData.length);
    data[2].data = patientData;
    this.setState({ finalData: data, loading: false });
  }

  render() {
    return (
      <ChartWrapper>
        {this.state.loading ? (
          <Loading />
        ) : (
          <>
            {this.state.hasData ? (
              <Chart
                data={this.state.finalData}
                axes={[
                  { primary: true, type: "linear", position: "bottom" },
                  { type: "linear", position: "left" }
                ]}
                tooltip
                getPrimary={(datum, i, series, seriesIndex, data) => xLabels[i]}
              />
            ) : (
              <NoData>Geen data beschikbaar</NoData>
            )}
          </>
        )}
      </ChartWrapper>
    );
  }
}

export default Graph;
