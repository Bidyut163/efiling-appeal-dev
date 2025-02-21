import Dashboard from '../../components/appellant/Dashboard';
import AppealShow from '../../components/appellant/AppealShow';
import PaymentStatus from '../../components/appellant/PaymentStatus';
import AppealStatus from '../../components/appellant/AppealStatus';

const routes = [
    { path: '/appellant/dashboard', exact: true, name: 'Appellant' },

    {
        path: '/appellant/dashboard',
        exact: true,
        name: 'Dashboard',
        component: Dashboard,
    },

    // {
    //     path: '/appellant/appeals',
    //     exact: true,
    //     name: 'AppealList',
    //     component: AppealList,
    // },
    {
        path: '/appellant/appeals/:id',
        exact: true,
        name: 'AppealShow',
        component: AppealShow,
    },
    {
        path: '/appellant/appeals/:id/paymentstatus',
        exact: true,
        name: 'PaymentStatus',
        component: PaymentStatus,
    },
    {
        path: '/appellant/appeals/:id/appealstatus',
        exact: true,
        name: 'AppealStatus',
        component: AppealStatus,
    },
];

export default routes;
