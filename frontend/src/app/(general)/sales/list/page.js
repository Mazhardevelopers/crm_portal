import SalesHeader from "@/components/sales/SalesHeader";
import SalesTable from "@/components/sales/SalesTable";
import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import React from "react";

const page = () => {
    return (
        <>
            <PageHeader>
                <SalesHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <SalesTable />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default page;
