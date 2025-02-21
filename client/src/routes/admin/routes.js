import Users from '../../components/official/admin/users/Users';
import UserForm from '../../components/official/admin/users/UserForm';
import UserEdit from '../../components/official/admin/users/UserEdit';
import ResetPassword from '../../components/official/admin/utilities/ResetPassword';

const routes = [
    { path: '/official/admin', exact: true, name: 'Admin' },
    {
        path: '/official/admin/dashboard',
        exact: true,
        name: 'Users',
        component: Users,
    },
    {
        path: '/official/admin/users/new',
        exact: true,
        name: 'UserFrom',
        component: UserForm,
    },
    {
        path: '/official/admin/users',
        exact: true,
        name: 'Users',
        component: Users,
    },
    {
        path: '/official/admin/users/:id/edit',
        exact: true,
        name: 'UserEdit',
        component: UserEdit,
    },
    {
        path: '/official/admin/utilities/reset-password',
        exact: true,
        name: 'ResetPassword',
        component: ResetPassword,
    },
];

export default routes;
