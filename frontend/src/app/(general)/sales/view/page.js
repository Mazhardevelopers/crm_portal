import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import SalesViewHeader from "@/components/salesView/SaleViewHeader";
import SalesContent from "@/components/salesView/SaleContent";

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
