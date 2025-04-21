import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import PermissionViewHeader from "@/components/permissionsView/PermissionViewHeader";
import PermissionContent from "@/components/permissionsView/PermissionContent";

const page = () => {
    return (
        <>
            <PageHeader>
                <PermissionViewHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <PermissionContent />
                </div>
            </div>
        </>
    );
};

export default page;
