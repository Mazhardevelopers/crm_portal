import ApplicantsTable from "@/components/quality/ApplicantsTable";
import Footer from "@/components/shared/Footer";
import {
    FiBarChart,
    FiBriefcase,
    FiDollarSign,
    FiEye,
    FiFilter,
    FiFlag,
    FiPaperclip,
    FiPlus,
    FiUserCheck,
    FiUserMinus,
    FiUsers,
} from "react-icons/fi";
import {
    BsFiletypeCsv,
    BsFiletypeExe,
    BsFiletypePdf,
    BsFiletypeTsx,
    BsFiletypeXml,
    BsPrinter,
} from "react-icons/bs";
import Dropdown from "@/components/shared/Dropdown";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import React from "react";

const filterAction = [
    { label: "All", icon: <FiEye /> },
    { label: "Group", icon: <FiUsers /> },
    { label: "Country", icon: <FiFlag /> },
    { label: "Invoice", icon: <FiDollarSign /> },
    { label: "Project", icon: <FiBriefcase /> },
    { label: "Active", icon: <FiUserCheck /> },
    { label: "Inactive", icon: <FiUserMinus /> },
];
const fileType = [
    { label: "PDF", icon: <BsFiletypePdf /> },
    { label: "CSV", icon: <BsFiletypeCsv /> },
    { label: "XML", icon: <BsFiletypeXml /> },
    { label: "Text", icon: <BsFiletypeTsx /> },
    { label: "Excel", icon: <BsFiletypeExe /> },
    { label: "Print", icon: <BsPrinter /> },
];


const page = () => {
    return (
        <>
            <PageHeader>
                <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
                    <a
                        href="#"
                        className="btn btn-icon btn-light-brand"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                    >
                        <FiBarChart size={16} strokeWidth={1.6} />
                    </a>
                    <Dropdown
                        dropdownItems={filterAction}
                        triggerPosition={"0, 12"}
                        triggerIcon={<FiFilter size={16} strokeWidth={1.6} />}
                        triggerClass="btn btn-icon btn-light-brand"
                        isAvatar={false}
                    />
                    <Dropdown
                        dropdownItems={fileType}
                        triggerPosition={"0, 12"}
                        triggerIcon={
                            <FiPaperclip size={16} strokeWidth={1.6} />
                        }
                        triggerClass="btn btn-icon btn-light-brand"
                        iconStrokeWidth={0}
                        isAvatar={false}
                    />
                </div>
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
