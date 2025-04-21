import React from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import IpaddressesCreateHeader from "@/components/ipaddressesCreate/IpaddressesCreateHeader";
import IpaddressesCreateContent from "@/components/ipaddressesCreate/IpaddressesCreateContent";

const page = () => {
    return (
        <>
            <PageHeader>
                <IpaddressesCreateHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <IpaddressesCreateContent />
                </div>
            </div>
        </>
    );
};

export default page;
