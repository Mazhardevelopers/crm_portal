import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import ApplicantsViewHeader from "@/components/applicantsView/ApplicantsViewHeader";
import ApplicantsContent from "@/components/applicantsView/ApplicantContent";

const page = () => {
    return (
        <>
            <PageHeader>
                <ApplicantsViewHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <ApplicantsContent />
                </div>
            </div>
        </>
    );
};

export default page;
