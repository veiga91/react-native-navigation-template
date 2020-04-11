import { LayoutTabsChildren, LayoutStackChildren } from "react-native-navigation";
import { ICreateStack, ICreateBottomtabs, IBottomTabsMapChildrenFunction, IStackMapChildrenFunction } from './navigation.interface';

export const createStack: ICreateStack = ({ names }) => {
  const mapStackChildren: IStackMapChildrenFunction = (name) => ({ component: { name } });
  
  const mappedChildren: LayoutStackChildren[] = names.map(mapStackChildren);

  return {
    children: mappedChildren
  };
};


export const createBottomTabs: ICreateBottomtabs = (id, tabs) => {
  const mapTabsChildren: IBottomTabsMapChildrenFunction = (tab) => (
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
  );

  const mappedChildren: LayoutTabsChildren[] = tabs.map(mapTabsChildren);

  return {
    id,
    children: mappedChildren
  }
};
