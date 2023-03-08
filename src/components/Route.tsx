import { ReactElement } from 'react';
import useNavigation from '../hooks/useNavigation';

interface RouteType {
  path: string;
  children: ReactElement;
}

function Route({ path, children }: RouteType) {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
