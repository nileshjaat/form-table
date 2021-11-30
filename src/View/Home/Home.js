import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import Header from '../../Components/Header/Header';
import Form from '../../Components/Form/Form';
import Table from '../../Components/Table/Table';
import { saveDataInfo } from './Dispatch';

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { saveDataInfo } = this.props;
    const { tableData } = this.props.home;

    return (
      <div>
        <Header />
        <div className="form-table">
          <h3>Please fill in all the details to submit</h3>
          <Form saveDataInfo={saveDataInfo} tableData={tableData} />

          {tableData?.length > 0 && (
            <Table tableData={tableData} saveDataInfo={saveDataInfo} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};

export default connect(mapStateToProps, {
  saveDataInfo,
})(Home);
