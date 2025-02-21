import ReceptionistPanel from '../../components/official/receptionist/ReceptionistPanel';
import AppealShow from '../../components/official/receptionist/AppealShow';
import Checklist from '../../components/official/receptionist/Checklist';
import ChecklistEdit from '../../components/official/receptionist/ChecklistEdit';
import AppealForward from '../../components/official/receptionist/AppealForward';

const routes = [
    { path: '/official/receptionist', exact: true, name: 'Receptionist' },

    {
        path: '/official/receptionist/panel',
        exact: true,
        name: 'ReceptionistPanel',
        component: ReceptionistPanel,
    },

    {
        path: '/official/receptionist/appeals',
        exact: true,
        name: 'ReceptionistPanel',
        component: ReceptionistPanel,
    },
    {
        path: '/official/receptionist/appeals/:id',
        exact: true,
        name: 'AppealShow',
        component: AppealShow,
    },
    {
        path: '/official/receptionist/appeals/:id/checklist',
        exact: true,
        name: 'Checklist',
        component: Checklist,
    },
    {
        path: '/official/receptionist/appeals/:id/checklist/edit',
        exact: true,
        name: 'ChecklistEdit',
        component: ChecklistEdit,
    },
    {
        path: '/official/receptionist/appeals/:id/forward',
        exact: true,
        name: 'AppealForward',
        component: AppealForward,
    },
];

export default routes;
