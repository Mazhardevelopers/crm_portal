import IpaddressesHeader from "@/components/ipaddresses/IpaddressesHeader";
import IpaddressesTable from "@/components/ipaddresses/IpaddressesTable";
import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import React from "react";

const page = () => {
    return (
        <>
            <PageHeader>
                <IpaddressesHeader />
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <IpaddressesTable />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default page;
