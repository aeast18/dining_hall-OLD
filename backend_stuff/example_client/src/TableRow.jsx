import React, { Component } from 'react';

class TableRow extends Component{
    render(){
      var colList = this.props.data.map( (element) => (
        <td>{element}</td>
      ));
      return (
        <tr>
          {colList}
        </tr>
      );
    }
}

export default TableRow;
