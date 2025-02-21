import RegistrarPanel from '../../components/official/registrar/RegistrarPanel';
import AppealShow from '../../components/official/registrar/AppealShow';
import OfficialRemarks from '../../components/official/registrar/OfficialRemarks';
import PaymentDetail from '../../components/official/registrar/PaymentDetail';
import Checklist from '../../components/official/registrar/Checklist';
import ChecklistEdit from '../../components/official/registrar/ChecklistEdit';
import AppealAction from '../../components/official/registrar/AppealAction';
import BenchList from '../../components/official/registrar/BenchList';

const routes = [
    { path: '/official/registrar', exact: true, name: 'Registrar' },

    {
        path: '/official/registrar/panel',
        exact: true,
        name: 'RegistrarPanel',
        component: RegistrarPanel,
    },

    {
        path: '/official/registrar/appeals',
        exact: true,
        name: 'RegistrarPanel',
        component: RegistrarPanel,
    },
    {
        path: '/official/registrar/appeals/:id',
        exact: true,
        name: 'AppealShow',
        component: AppealShow,
    },
    {
        path: '/official/registrar/appeals/:id/remarks',
        exact: true,
        name: 'OfficialRemarks',
        component: OfficialRemarks,
    },
    {
        path: '/official/registrar/appeals/:id/paymentdetail',
        exact: true,
        name: 'PaymentDetail',
        component: PaymentDetail,
    },
    {
        path: '/official/registrar/appeals/:id/checklist',
        exact: true,
        name: 'Checklist',
        component: Checklist,
    },
    {
        path: '/official/registrar/appeals/:id/checklist/edit',
        exact: true,
        name: 'ChecklistEdit',
        component: ChecklistEdit,
    },
    {
        path: '/official/registrar/appeals/:id/action',
        exact: true,
        name: 'AppealAction',
        component: AppealAction,
    },
    {
        path: '/official/registrar/bench',
        exact: true,
        name: 'BenchList',
        component: BenchList,
    },
];

export default routes;
