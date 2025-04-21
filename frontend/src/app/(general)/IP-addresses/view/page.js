import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import IpaddressViewHeader from "@/components/ipaddressesView/IpaddressViewHeader";
import IpaddressContent from "@/components/ipaddressesView/IpaddressContent";

const page = () => {
    return (
        <>
            <PageHeader>
                <IpaddressViewHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <IpaddressContent />
                </div>
            </div>
        </>
    );
};

export default page;
