import RolesHeader from "@/components/roles/RolesHeader";
import RolesTable from "@/components/roles/RolesTable";
import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import React from "react";

const page = () => {
    return (
        <>
            <PageHeader>
                <RolesHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <RolesTable />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default page;
