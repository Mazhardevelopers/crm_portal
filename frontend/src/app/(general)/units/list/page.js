import UnitsHeader from "@/components/units/UnitsHeader";
import UnitsTable from "@/components/units/UnitsTable";
import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import React from "react";

const page = () => {
    return (
        <>
            <PageHeader>
                <UnitsHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <UnitsTable />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default page;
