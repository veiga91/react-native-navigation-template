import { ImageRequireSource } from 'react-native';
import { LayoutComponent } from 'react-native-navigation';

export interface ICreateStack {
  names: string[]
};

export interface ICreateBottomTabs {
  children: ICreateStack,
  id: string,
  icon: ImageRequireSource | string
};

export interface IStackChildrenMap {
  component: LayoutComponent
};

