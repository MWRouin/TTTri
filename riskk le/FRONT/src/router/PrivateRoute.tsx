import { Navigate, useLocation } from 'react-router-dom';

// helpers
import { APICore } from '../helpers/api/apiCore';
import { useUser } from '../hooks';

// hooks

type PrivateRouteProps = {
    component: React.ComponentType;
    roles?: string | string[];
};

/**
 * Private Route forces the authorization before the route can be accessed
 * @param {*} param0
 * @returns
 */
const PrivateRoute = ({ component: RouteComponent, roles, ...rest }: PrivateRouteProps) => {
    const location = useLocation();
    const [loggedInUser] = useUser();
    const api = new APICore();

    // Not logged in, redirect to login page with the return URL
    if (!api.isUserAuthenticated()) {
        return <Navigate to={'/auth/boxed-signin'} state={{ from: location }} replace />;
    }

    // Check if roles are specified
    if (roles) {
        // If roles is a string, convert it to an array
        const rolesArray = Array.isArray(roles) ? roles : [roles];
        // Check if the user's role is included in the allowed roles
        const userRole = loggedInUser.role?.description?.toLowerCase();

        if (!rolesArray.map((role) => role.toLowerCase()).includes(userRole)) {
            return <Navigate to={{ pathname: '/home' }} />;
        }
    }

    return <RouteComponent {...rest} />;
};

export default PrivateRoute;
