import ApplicantsHeader from "@/components/applicants/ApplicantsHeader";
import ApplicantsTable from "@/components/applicants/ApplicantsTable";
import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import React from "react";

const page = () => {
    return (
        <>
            <PageHeader>
                <ApplicantsHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <ApplicantsTable />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default page;
