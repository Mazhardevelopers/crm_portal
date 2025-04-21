import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import UsersViewHeader from "@/components/usersView/UsersViewHeader";
import UsersContent from "@/components/usersView/UserContent";

const page = () => {
    return (
        <>
            <PageHeader>
                <UsersViewHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <UsersContent />
                </div>
            </div>
        </>
    );
};

export default page;
