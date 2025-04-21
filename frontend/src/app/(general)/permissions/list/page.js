import PermissionsHeader from "@/components/permissions/PermissionsHeader";
import PermissionsTable from "@/components/permissions/PermissionsTable";
import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import React from "react";

const page = () => {
    return (
        <>
            <PageHeader>
                <PermissionsHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <PermissionsTable />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default page;
