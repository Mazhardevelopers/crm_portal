import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import ApplicantsCreateHeader from "@/components/applicantsCreate/ApplicantsCreateHeader";
import ApplicantCreateContent from "@/components/applicantsCreate/ApplicantsCreateContent";

const page = () => {
    return (
        <>
            <PageHeader>
                <ApplicantsCreateHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <ApplicantCreateContent />
                </div>
            </div>
        </>
    );
};

export default page;
