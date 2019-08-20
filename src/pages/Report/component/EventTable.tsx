import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import moment from 'moment';

export default class EventTable extends Component<any, any> {

  constructor(props: any, state: any) {
    super(props, state);
    this.state = {
      columnDefs: [
        { headerName: 'Seq ID', field: 'seqid', width: 100, filter: 'agNumberColumnFilter' },
        { headerName: 'Accesskey', field: 'accesskey',width: 120 },
        {
          headerName: 'Timestamp',
          field: 'timestamp',
          filter: 'agDateColumnFilter',
          sortable: true,
          valueFormatter: this.timeFormat
        },
        {
          headerName: 'Event Code',
          field: 'event_code',
          width: 130,
          filter: 'agNumberColumnFilter',
        },
        { headerName: 'Event Name', field: 'event_name', filter: 'agTextColumnFilter' },
        { headerName: 'Info',width:300, field: 'info', filter: 'agTextColumnFilter',  },
        { headerName: 'IP', field: 'ip', filter: 'agTextColumnFilter' },
        { headerName: 'Cab Id', field: 'cab_id', filter: 'agTextColumnFilter' },
        { headerName: 'VM ID', field: 'vm_id', filter: 'agTextColumnFilter', sortable: true },
        { headerName: 'Msg ID', field: 'msg_id', filter: 'agTextColumnFilter' },
      ],
      defaultColDef: {
        resizable: true,
        enableValue: true,
        enableRowGroup: true,
        enablePivot: true,
        editable:true
      },
    };
  }
  timeFormat(params:any){
    return moment(params.value*1).format("YYYY-MM-DD HH:mm:ss SSS")
  }
  render() {
    return (
      <div
        className="ag-theme-balham"
        // className="ag-theme-bootstrap"
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <AgGridReact
          domLayout="autoHeight"
          sideBar={{
            toolPanels: [
              {
                id: 'columns',
                labelDefault: 'Columns',
                labelKey: 'columns',
                iconKey: 'columns',
                toolPanel: 'agColumnsToolPanel',
              },
              {
                id: 'filters',
                labelDefault: 'Filters',
                labelKey: 'filters',
                iconKey: 'filter',
                toolPanel: 'agFiltersToolPanel',
              },
            ],
            defaultToolPanel: 'columns',
            hiddenByDefault: true,
          }}
          defaultColDef={this.state.defaultColDef}
          columnDefs={this.state.columnDefs}
          rowData={this.props.rowData}
        />
      </div>
    );
  }
}
