import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
const datas = [
  { id: 1, name: "nabin" },
  { id: 2, name: "ravi" },
  { id: 3, name: "kalu" },
  { id: 4, name: "suraj" },
  { id: 5, name: "mohan" },
  { id: 6, name: "sam" },
  { id: 7, name: "tej" },
  { id: 8, name: "anish" },
  { id: 9, name: "kendra" }
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      currentIndex: 1,
      pageLimit: 4
    };
  }

  render() {
    let rem = Math.ceil(datas.length / 4);

    const handlePagination = (i) => {
      this.setState(
        {
          currentIndex: i
        },
        () => {
          chunkedData();
        }
      );
    };
    const chunkedData = () => {
      const finalRecord = this.state.currentIndex * this.state.pageLimit;
      const initialRecord = finalRecord - this.state.pageLimit;
      const chunkedVal = datas.slice(initialRecord, finalRecord);
      this.setState({
        dataArray: chunkedVal
      });
    };
    const mapperChunk = this.state.dataArray.map((item, i) => {
      return (
        <>
          <ul>
            <li>{item.name}</li>
          </ul>
        </>
      );
    });
    let count = 0;
    let arr = [];
    for (let i = 0; i < rem; i++) {
      count = i + 1;
      arr.push(count);
    }

    return (
      <Grid>
        <Row>
          {/* <Col>{value}</Col> */}
          {/* Length of data:{datas.length} */}
          <Col>current state: {this.state.currentIndex}</Col>

          <Col>
            {arr.map((a, i) => {
              return (
                <>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handlePagination(arr[i]);
                    }}
                    id={arr[i]}
                    key={i}
                  >
                    {arr[i]}
                  </button>
                </>
              );
            })}
          </Col>
          <Col>{mapperChunk}</Col>
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
