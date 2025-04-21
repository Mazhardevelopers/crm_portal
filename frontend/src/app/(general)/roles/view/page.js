import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import RolesViewHeader from "@/components/rolesView/RoleViewHeader";
import RolesContent from "@/components/rolesView/RoleContent";

const page = () => {
    return (
        <>
            <PageHeader>
                <RolesViewHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <RolesContent />
                </div>
            </div>
        </>
    );
};

export default page;
