import { ComponentClass } from 'react'
import {
  connect as nativeConnect,
  MapDispatchToPropsParam,
  MapStateToPropsParam
} from 'react-redux'

export type ComponentDecorator<P = any> = <T extends ComponentClass<P>>(WrappedComponent: T) => T

export const connect: <P, S>(
  mapState: MapStateToPropsParam<Partial<P>, P, S>,
  mapDispatch?: MapDispatchToPropsParam<Partial<P>, P>
) => ComponentDecorator = nativeConnect as any