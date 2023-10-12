import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Onboarding from '../Components/Onboarding/Onboarding'
import LandLordSignUp from '../Components/LandLordSignUp/LandLordSignUp'
import LandLordSubscription from '../Components/LandLordSubscription/LandLordSubscription'
import PaymentMethodSignUp from '../Components/PaymentMethodSignUp/PaymentMethodSignUp'
import LandLordSignIn from '../Components/LandLordSignIn/LandLordSignIn'
import TenantSignUp from '../Components/TenantSignUp/TenantSignUp'
import TenantSignUpInvite from '../Components/TenantSignUpInvite/TenantSignUpInvite'
import TenantSignIn from '../Components/TenantSignIn/TenantSignIn'
import ForgotPassword from '../Components/ForgotPassword/ForgotPassword'
import CheckYourEmail from '../Components/CheckYourEmail/CheckYourEmail'
import ResetPassword from '../Components/ResetPassword/ResetPassword'
import LandLordDashboard from '../Components/LandLordDashboard/LandLordDashboard'
import AccountingPage from '../Pages/AccountingPage/AccountingPage'
import WorkOrderPage from '../Pages/WorkOrderPage/WorkOrderPage'
import TenantReportsPage from '../Pages/TenantReportsPage/TenantReportsPage'
import TaskReportsPage from '../Pages/TaskReportsPage/TaskReportsPage'
import TaskDetailsPage from '../Pages/TaskDetailsPage/TaskDetailsPage'
import RenewLeasePage from '../Pages/RenewLeasePage/RenewLeasePage'
import PropertyReportPage from '../Pages/PropertyReportPage/PropertyReportPage'
import PropertyDetailsViewPage from '../Pages/PropertyDetailsViewPage/PropertyDetailsViewPage'
import PropertiesDashboardPage from '../Pages/PropertiesDashboardPage/PropertiesDashboardPage'
import PropertiesDashboardListViewPage from '../Pages/PropertiesDashboardListViewPage/PropertiesDashboardListViewPage'
import NonRenewalPage from '../Pages/NonRenewalPage/NonRenewalPage'
import NewLeasePage from '../Pages/NewLeasePage/NewLeasePage'
import LeaseDetailsPage from '../Pages/LeaseDetailsPage/LeaseDetailsPage'
import InvoiceReportsPage from '../Pages/InvoiceReportsPage/InvoiceReportsPage'
import AllWorkOrderPage from '../Pages/AllWorkOrderPage/AllWorkOrderPage'
import AllTasksPage from '../Pages/AllTasksPage/AllTasksPage'
import AllProspectPage from '../Pages/AllProspectPage/AllProspectPage'
import AllLeasePage from '../Pages/AllLeasePage/AllLeasePage'
import AllFilePage from '../Pages/AllFilePage/AllFilePage'
import AddProspectDetailsPage from '../Pages/AddProspectDetailsPage/AddProspectDetailsPage'
import AddPropertyDetailsPage from '../Pages/AddPropertyDetailsPage/AddPropertyDetailsPage'
import AllReportsPage from '../Pages/AllReportsPage/AllReportsPage'
import EditFilePage from '../Pages/EditFilePage/EditFilePage'
import AddAccountPage from '../Pages/AddAccountPage/AddAccountPage'
import AccountDetailPage from '../Pages/AccountDetailPage/AccountDetailPage'
import MileagePage from '../Pages/MileagePage/MileagePage'
import AddMileagePage from '../Pages/AddMileagePage/AddMileagePage'
import SettingPage from '../Pages/SettingPage/SettingPage'
import PropertiesUnitsEditPage from '../Pages/PropertiesUnitsEditPage/PropertiesUnitsEditPage'
import PropertiesUnitsViewPage from '../Pages/PropertiesUnitsViewPage/PropertiesUnitsViewPage'
import PayablePage from '../Pages/PayablePage/PayablePage'
import PayableOverViewPage from '../Pages/PayableOverViewPage/PayableOverViewPage'
import { useEffect } from 'react'
import CreatePayablePage from '../Pages/CreatePayablePage/CreatePayablePage'
import ChatPage from '../Pages/ChatPage/ChatPage'
import AllTenantsPage from '../Pages/AllTenantsPage/AllTenantsPage'
import AddTenantDetailsPage from '../Pages/AddTenantDetailsPage/AddTenantDetailsPage'
import ArchiveChats from '../Components/Chat/ArchiveChats/ArchiveChats'
import ArchiveChatsPage from '../Pages/ArchiveChatsPage/ArchiveChatsPage'
import ArchiveChatUserPage from '../Pages/ArchiveChatUserPage/ArchiveChatUserPage'
import NotificationPage from '../Pages/NotificationPage/NotificationPage'
const Routing = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>

                    {/* Home Route */}
                    <Route path="/" element={<Onboarding />} />
                    {/* Home End */}

                    {/* Land Lord Route */}
                    <Route path="/land-lord-signup" element={<LandLordSignUp />} />
                    <Route path="/land-lord-subscription" element={<LandLordSubscription />} />
                    <Route path="/land-lord-payment-method" element={<PaymentMethodSignUp />} />
                    <Route path="/land-lord-sign-in" element={<LandLordSignIn />} />
                    <Route path="/land-lord-dashboard" element={<LandLordDashboard />} />
                    {/* Land Lord Route End */}

                    {/* Tenants Routes */}
                    <Route path="/tenant-sign-up" element={<TenantSignUp />} />
                    <Route path="/tenant-sign-up-invite" element={<TenantSignUpInvite />} />
                    <Route path="/tenant-sign-in" element={<TenantSignIn />} />
                    {/* Tenants Routes End*/}

                    {/* Validation Route */}
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/check-your-email" element={<CheckYourEmail />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    {/* Validation Route End */}

                    {/* Properties Route */}
                    <Route path="/properties-dashboard" element={<PropertiesDashboardPage />} />
                    <Route path="/properties-dashboard-list" element={<PropertiesDashboardListViewPage />} />
                    <Route path="/add-property-details" element={<AddPropertyDetailsPage />} />
                    <Route path="/property-details-view" element={<PropertyDetailsViewPage />} />
                    <Route path="/properties-units-edit" element={<PropertiesUnitsEditPage />} />
                    <Route path="/properties-units-view" element={<PropertiesUnitsViewPage />} />
                    {/* Properties Route End */}

                    {/* Task Route */}
                    <Route path="/all-task" element={<AllTasksPage />} />
                    <Route path="/task-details" element={<TaskDetailsPage />} />
                    {/* Task Route End */}

                    {/* Work Order Route */}
                    <Route path="/work-order" element={<WorkOrderPage />} />
                    <Route path="/all-work-order" element={<AllWorkOrderPage />} />
                    <Route path="/all-tenants" element={<AllTenantsPage />} />
                    <Route path="/add-tenant-details" element={<AddTenantDetailsPage />} />
                    {/* Work Order Route End */}

                    {/* Prospect Route */}
                    <Route path="/all-prospect" element={<AllProspectPage />} />
                    <Route path="/add-prospect-details" element={<AddProspectDetailsPage />} />
                    {/* Prospect Route End */}

                    {/* Lease Route  */}
                    <Route path="/new-lease" element={<NewLeasePage />} />
                    <Route path="/lease-detail" element={<LeaseDetailsPage />} />
                    <Route path="/renew-lease" element={<RenewLeasePage />} />
                    <Route path="/non-renew-lease" element={<NonRenewalPage />} />
                    {/* Lease Route End  */}

                    {/* Reports Route */}
                    <Route path="/all-reports" element={<AllReportsPage />} />
                    <Route path="/property-reports" element={<PropertyReportPage />} />
                    <Route path="/tenant-reports" element={<TenantReportsPage />} />
                    <Route path="/invoice-reports" element={<InvoiceReportsPage />} />
                    <Route path="/task-reports" element={<TaskReportsPage />} />
                    {/* Reports Route End */}

                    {/* Files Route  */}
                    <Route path="/all-files" element={<AllFilePage />} />
                    <Route path="/edit-file" element={<EditFilePage />} />
                    <Route path="/all-lease" element={<AllLeasePage />} />
                    {/* Files Route End */}
                    {/* Account Route */}

                    <Route path="/accounting" element={<AccountingPage />} />
                    <Route path="/add-account" element={<AddAccountPage />} />
                    <Route path="/account-details" element={<AccountDetailPage />} />
                    {/* Account Route End */}

                    {/* Mileage Route */}
                    <Route path="/mileage" element={<MileagePage />} />
                    <Route path="/add-mileage" element={<AddMileagePage />} />
                    {/* Mileage Route End */}

                    {/* Setting Route */}
                    <Route path="/settings" element={<SettingPage />} />
                    {/* Setting Route End */}

                    {/* Payable Route  */}
                    <Route path="/payable" element={<PayablePage />} />
                    <Route path="/payable-overview" element={<PayableOverViewPage />} />
                    <Route path="/create-payable" element={<CreatePayablePage />} />
                    {/* Payable Route End */}

                    {/* Chat Route */}
                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/archive-chat" element={<ArchiveChatsPage />} />
                    <Route path="/archive-user" element={<ArchiveChatUserPage />} />
                    {/* Chat Route End*/}

                    {/* Notification Route */}
                    <Route path="/notification" element={<NotificationPage />} />
                    {/* Notification Route End */}
                </Routes>

            </BrowserRouter>
        </>
    )
}
export default Routing
