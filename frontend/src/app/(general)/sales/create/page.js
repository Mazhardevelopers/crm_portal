import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import SalesCreateHeader from "@/components/salesCreate/SalesCreateHeader";
import SalesCreateContent from "@/components/salesCreate/SalesCreateContent";

const page = () => {
    return (
        <>
            <PageHeader>
                <SalesCreateHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <SalesCreateContent />
                </div>
            </div>
        </>
    );
};

export default page;
