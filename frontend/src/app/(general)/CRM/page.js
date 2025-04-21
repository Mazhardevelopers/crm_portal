import React from "react";
import Image from "next/image";
import Dropdown from "@/components/shared/Dropdown";
import { BsPatchCheckFill } from "react-icons/bs";
import {
    FiFacebook,
    FiGithub,
    FiGlobe,
    FiLinkedin,
    FiLock,
    FiSettings,
    FiTwitter,
    FiUserCheck,
    FiUsers,
    FiYoutube,
} from "react-icons/fi";
import {
    FiEdit,
    FiMail,
    FiUserPlus,
    FiMapPin,
    FiPhone,
    FiTrash2,
} from "react-icons/fi";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import { teamMembersList } from "@/utils/fackData/teamMembersList";

export const applicantProfileOption = [
    { label: "Only Me", icon: <FiLock /> },
    { label: "Everyone", icon: <FiGlobe /> },
    { label: "Anonymous", icon: <FiUsers /> },
    { label: "People I Follow", icon: <FiUserCheck /> },
    { label: "Custom Selections Ever", icon: <FiSettings /> },
];

const page = () => {
    return (
        <>
            <PageHeader></PageHeader>

            <div className="main-content">
                <div className="row">
                    <div className="col-xxl-12 col-xl-12">
                        <div className="card border-top-0">
                            <div className="card-header p-0">
                                <ul
                                    className="nav nav-tabs flex-wrap w-100 text-center customers-nav-tabs"
                                    id="myTab"
                                    role="tablist"
                                >
                                    <li
                                        className="nav-item flex-fill border-top"
                                        role="presentation"
                                    >
                                        <a
                                            href="#"
                                            className="nav-link active"
                                            data-bs-toggle="tab"
                                            data-bs-target="#overviewTab"
                                            role="tab"
                                        >
                                            Overview
                                        </a>
                                    </li>
                                    <li
                                        className="nav-item flex-fill border-top"
                                        role="presentation"
                                    >
                                        <a
                                            href="#"
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#billingTab"
                                            role="tab"
                                        >
                                            Billing
                                        </a>
                                    </li>
                                    <li
                                        className="nav-item flex-fill border-top"
                                        role="presentation"
                                    >
                                        <a
                                            href="#"
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#activityTab"
                                            role="tab"
                                        >
                                            Activity
                                        </a>
                                    </li>
                                    <li
                                        className="nav-item flex-fill border-top"
                                        role="presentation"
                                    >
                                        <a
                                            href="#"
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#notificationsTab"
                                            role="tab"
                                        >
                                            Notifications
                                        </a>
                                    </li>
                                    <li
                                        className="nav-item flex-fill border-top"
                                        role="presentation"
                                    >
                                        <a
                                            href="#"
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#connectionTab"
                                            role="tab"
                                        >
                                            Connection
                                        </a>
                                    </li>
                                    <li
                                        className="nav-item flex-fill border-top"
                                        role="presentation"
                                    >
                                        <a
                                            href="#"
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#securityTab"
                                            role="tab"
                                        >
                                            Security
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div
                                    className="tab-pane fade show active"
                                    id="overviewTab"
                                    role="tabpanel"
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">Overview</h5>
                                        <p className="card-text">
                                            This is the overview tab content.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="billingTab"
                                    role="tabpanel"
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">Billing</h5>
                                        <p className="card-text">
                                            This is the billing tab content.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="activityTab"
                                    role="tabpanel"
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">Activity</h5>
                                        <p className="card-text">
                                            This is the activity tab content.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="notificationsTab"
                                    role="tabpanel"
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Notifications
                                        </h5>
                                        <p className="card-text">
                                            This is the notifications tab
                                            content.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="connectionTab"
                                    role="tabpanel"
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Connection
                                        </h5>
                                        <p className="card-text">
                                            This is the connection tab content.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="securityTab"
                                    role="tabpanel"
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">Security</h5>
                                        <p className="card-text">
                                            This is the security tab content.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
