import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import RolesCreateHeader from "@/components/rolesCreate/RolesCreateHeader";
import RolesCreateContent from "@/components/rolesCreate/RolesCreateContent";

const page = () => {
    return (
        <>
            <PageHeader>
                <RolesCreateHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <RolesCreateContent />
                </div>
            </div>
        </>
    );
};

export default page;
