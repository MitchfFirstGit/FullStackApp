import { RouteProps } from 'react-router-dom';

export  type Props = {
    component: React.ComponentType<RouteProps>;
    isAuthenticated: boolean;
    loading: boolean;
};
