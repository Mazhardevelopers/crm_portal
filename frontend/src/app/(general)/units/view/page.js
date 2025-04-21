import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import UnitsViewHeader from "@/components/unitsView/UnitsViewHeader";
import UnitsContent from "@/components/unitsView/UnitsContent";

const page = () => {
    return (
        <>
            <PageHeader>
                <UnitsViewHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <UnitsContent />
                </div>
            </div>
        </>
    );
};

export default page;
