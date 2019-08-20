import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { withRouter } from 'react-router-dom';
import { Tabs, Form, Button, Input, DatePicker } from 'antd';
import moment from 'moment';

import style from './style/report.module.scss';
import action from './model/report.action';
import { IReportStore, IReportProps, IReportState } from './model/report.type';

import SearchBox from '../../components/form/SearchBox/SearchBox';
import EventTable from './component/EventTable';

const { TabPane } = Tabs;
const dateFormat = 'YYYY-MM-DD';

class Report extends Component<IReportProps, IReportState> {
  constructor(props: IReportProps, state: IReportState) {
    super(props);
  }

  componentDidMount() {
    //
  }

  componentWillUnmount() {}
  getOnceTrialReport(e: any) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.getOnceTrialReports({
          seqId: values.seqId,
          date:values.date && values.date.format("YYYY-MM-DD")
        });
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    let { getFieldDecorator } = this.props.form;
    let reports = this.props.onceTrialReports;
    return (
      <div style={{}}>
        <SearchBox>
          <Form layout="inline" onSubmit={this.getOnceTrialReport.bind(this)}>
            <Form.Item>
              {getFieldDecorator('seqId', {})(<Input placeholder="Session id" />)}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('date', {})(<DatePicker placeholder="Select date" format={dateFormat} />)}
              
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
            </Form.Item>
          </Form>
        </SearchBox>
        <Tabs defaultActiveKey="1" type="card" size="small">
          <TabPane tab="CS" key="1">
            <EventTable rowData={reports.cs}/>
          </TabPane>
          <TabPane tab="WS" key="2">
            <EventTable rowData={reports.ws} />
          </TabPane>
          <TabPane tab="ICE" key="3">
            <EventTable rowData={reports.ice} />
          </TabPane>
          <TabPane tab="VM" key="4">
            <EventTable rowData={reports.vm} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = (store: any) => {
  let report: IReportStore = store.report;
  return {
    onceTrialReports: report.onceTrialReports,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getOnceTrialReports: bindActionCreators(action.getOnceTrialReports, dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form.create()(Report))
);
