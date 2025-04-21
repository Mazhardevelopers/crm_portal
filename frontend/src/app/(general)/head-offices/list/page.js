import HeadOfficesHeader from "@/components/headOffices/HeadOfficesHeader";
import HeadOfficesTable from "@/components/headOffices/HeadOfficesTable";
import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import React from "react";

const page = () => {
    return (
        <>
            <PageHeader>
                <HeadOfficesHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <HeadOfficesTable />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default page;
