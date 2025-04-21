import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import UsersCreateHeader from "@/components/usersCreate/UsersCreateHeader";
import UsersCreateContent from "@/components/usersCreate/UsersCreateContent";

const page = () => {
    return (
        <>
            <PageHeader>
                <UsersCreateHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <UsersCreateContent />
                </div>
            </div>
        </>
    );
};

export default page;
