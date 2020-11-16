import { Children, cloneElement, ReactNode, ReactElement, isValidElement } from 'react';
import { TriggerEvent } from '../types';
import { Item } from './Item';
import { Submenu } from './Submenu';

export function cloneItem (
  children: ReactNode,
  props: { nativeEvent: TriggerEvent; propsFromTrigger?: object }
): ReactNode[] {
  return Children.map(
    // remove null item
    Children.toArray(children).filter(child => Boolean(child)),
    child => {
      if (!isValidElement(child)) { return child }
      if (
        child.type !== Item &&
        child.type !== Submenu &&
        child.props.children
      ) {
        return cloneItem(child.props.children, props)
      }
      return cloneElement(child as ReactElement<any>, props)
    }
  );
}
