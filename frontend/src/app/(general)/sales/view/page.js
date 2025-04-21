import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import SalesViewHeader from "@/components/salesView/SalesViewHeader";
import SalesContent from "@/components/salesView/SalesContent";

const page = () => {
    return (
        <>
            <PageHeader>
                <SalesViewHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <SalesContent />
                </div>
            </div>
        </>
    );
};

export default page;
