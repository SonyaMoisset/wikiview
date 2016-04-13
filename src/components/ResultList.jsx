import React from 'react';
import SingleResult from './SingleResult';

export default class ResultList extends React.Component {
  render() {
    var results = this.props.results[1].map((result, index) => {
        return (<SingleResult
          key={index}
          title={this.props.results[1][index]}
          description={this.props.results[2][index]}
          url={this.props.results[3][index]}
          />);
      });

    return (
      <div className="result-list">{results}</div>
    );
  }
}
