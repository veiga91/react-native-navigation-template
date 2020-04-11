import { ImageRequireSource } from 'react-native';
import { LayoutComponent, LayoutTabsChildren, LayoutBottomTabs, LayoutStack } from 'react-native-navigation';

export interface ICreateBottomTabs {
  children: ICreateStackParams,
  id: string,
  icon: ImageRequireSource | string
};

export interface ICreateStackParams {
  names: string[]
};

export interface IStackChildrenMap {
  component: LayoutComponent
};

export interface IBottomTabsMapChildrenFunction {
  (tab: ICreateBottomTabs): LayoutTabsChildren
};

export interface IStackMapChildrenFunction {
  (name: string): IStackChildrenMap
};

export interface ICreateBottomtabs {
  (id: string, tabs: ICreateBottomTabs[]): LayoutBottomTabs
};

export interface ICreateStack {
  ({ names }: ICreateStackParams): LayoutStack
};