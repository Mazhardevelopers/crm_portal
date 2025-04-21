import UsersHeader from "@/components/users/UsersHeader";
import UsersTable from "@/components/users/UsersTable";
import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import React from "react";

const page = () => {
    return (
        <>
            <PageHeader>
                <UsersHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <UsersTable />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default page;
