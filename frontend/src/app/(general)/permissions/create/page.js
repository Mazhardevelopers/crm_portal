import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import PermissionsCreateHeader from "@/components/permissionsCreate/PermissionsCreateHeader";
import PermissionsCreateContent from "@/components/permissionsCreate/PermissionsCreateContent";

const page = () => {
    return (
        <>
            <PageHeader>
                <PermissionsCreateHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <PermissionsCreateContent />
                </div>
            </div>
        </>
    );
};

export default page;
