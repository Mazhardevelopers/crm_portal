import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import UnitsCreateHeader from "@/components/unitsCreate/UnitsCreateHeader";
import UnitsCreateContent from "@/components/unitsCreate/UnitsCreateContent";

const page = () => {
    return (
        <>
            <PageHeader>
                <UnitsCreateHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <UnitsCreateContent />
                </div>
            </div>
        </>
    );
};

export default page;
