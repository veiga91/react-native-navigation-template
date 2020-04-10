import { LayoutStack, LayoutBottomTabs, LayoutTabsChildren } from "react-native-navigation";
import { ICreateStack, ICreateBottomTabs, IStackChildrenMap } from './navigation.interface';

export const createStack = ({ names }: ICreateStack): LayoutStack => {
  const mappedChildren = names.map((name): IStackChildrenMap => ({ component: { name } }));

  return {
    children: mappedChildren
  };
};


export const createBottomTabs = (id: string, tabs: ICreateBottomTabs[]): LayoutBottomTabs => {
  const mappedChildren = tabs.map((tab):LayoutTabsChildren => (
    {
      stack: {
        id: tab.id,
        ...createStack(tab.children),
        options: {
          bottomTab: {
            icon: tab.icon
          }
        }
      }
    }
  ));

  return {
    id,
    children: mappedChildren
  }
};
