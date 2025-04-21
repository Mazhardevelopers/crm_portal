import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import HeadOfficesCreateHeader from "@/components/headOfficesCreate/HeadOfficesCreateHeader";
import HeadOfficesCreateContent from "@/components/headOfficesCreate/HeadOfficesCreateContent";

const page = () => {
    return (
        <>
            <PageHeader>
                <HeadOfficesCreateHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <HeadOfficesCreateContent />
                </div>
            </div>
        </>
    );
};

export default page;
