import { RouteComponentProps } from "react-router-dom";
import { FormComponentProps } from "antd/lib/form";

export interface ITrialReport{
  serverinfo:string;
  seqid:string;
  module:string;
  accesskey:string;
  timestamp:string;
  event_code:string;
  event_name:string;
  event_level:string;
  current_status:string;
  next_status:string;
  info:string;
  ip:string;
  cab_id:string;
  vm_id:string;
  msg_id:string;
  month_id:string;
  day_id:string;
  hour:string;
}


export interface IClientReport {
  id: number;
  module: string;
  seqId: string;
  accesskey: string;
  timestamp: string;
  eventCode: number;
  eventName: string;
  eventLevel: number;
  currentStatus: number;
  nextStatus: number;
  info: string;
  ip: string;
  insertTime: string;
}
export interface ICsReport {
  id: number;
  module: string;
  userId: string;
  seqId: string;
  accesskey: string;
  cabId: string;
  vmId: string;
  timestamp: string;
  eventCode: number;
  eventName: string;
  eventLevel: number;
  currentStatus: number;
  nextStatus: number;
  info: string;
  ip: string;
  insertTime: string;
}

export interface IIceReport {
  id: number;
  module: string;
  accesskey: string;
  timestamp: string;
  eventCode: number;
  eventName: string;
  eventLevel: number;
  currentStatus: number;
  nextStatus: number;
  info: string;
  ip: string;
  insertTime: string;
}
export interface IVmReport {
  id: number;
  module: string;
  accesskey: string;
  msgId: string;
  cabId: string;
  vmId: string;
  timestamp: string;
  eventCode: number;
  eventName: string;
  eventLevel: number;
  currentStatus: number;
  nextStatus: number;
  info: string;
  ip: string;
  insertTime: string;
}
/**
 * state
 */
export interface IReportState {
  csColumnDefs:Array<{[key:string]:any}>;
  clientColumnDefs:Array<{[key:string]:any}>;
  iceColumnDefs:Array<{[key:string]:any}>;
  vmColumnDefs:Array<{[key:string]:any}>;
}
/**
 * props
 */
export interface IReportProps extends FormComponentProps, RouteComponentProps<any> {
  getOnceTrialReports:Function;
  onceTrialReports:Partial<IOnceTrialReports>
}
/**
 * store
 */
export interface IReportStore{
  onceTrialReports: Partial<IOnceTrialReports>;
}

export interface IOnceTrialReports {
  cs:Array<Partial<ITrialReport>>;
  ws:Array<Partial<ITrialReport>>;
  ice:Array<Partial<ITrialReport>>;
  vm:Array<Partial<ITrialReport>>;
}
/**
 * action
 */
export const GET_ONCE_TRIAL_REPORTS = 'GET_ONCE_TRIAL_REPORTS';
export type GET_ONCE_TRIAL_REPORTS = typeof GET_ONCE_TRIAL_REPORTS;
export const GET_ONCE_TRIAL_REPORTS_SUCCESS = 'GET_ONCE_TRIAL_REPORTS_SUCCESS';
export type GET_ONCE_TRIAL_REPORTS_SUCCESS = typeof GET_ONCE_TRIAL_REPORTS_SUCCESS;
export const GET_ONCE_TRIAL_REPORTS_FAIL = 'GET_ONCE_TRIAL_REPORTS_FAIL';
export type GET_ONCE_TRIAL_REPORTS_FAIL = typeof GET_ONCE_TRIAL_REPORTS_FAIL;

export interface IGetOnceTrialReportsAction {
  type: GET_ONCE_TRIAL_REPORTS;
  payload: any;
}

export interface IGetOnceTrialReportsSuccessAction {
  type: GET_ONCE_TRIAL_REPORTS_SUCCESS;
  data: IOnceTrialReports;
}
export interface IGetOnceTrialReportsFailAction{
  type: GET_ONCE_TRIAL_REPORTS_FAIL;
  message: string;
}

export type ActionType =
  | IGetOnceTrialReportsAction
  | IGetOnceTrialReportsSuccessAction
  | IGetOnceTrialReportsFailAction;

// action end
