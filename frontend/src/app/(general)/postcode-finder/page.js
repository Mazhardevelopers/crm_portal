import React from "react";
import Image from 'next/image'
import Dropdown from '@/components/shared/Dropdown'
import { BsPatchCheckFill } from 'react-icons/bs'
import { FiFacebook, FiGithub, FiGlobe, FiLinkedin, FiLock, FiSettings, FiTwitter, FiUserCheck, FiUsers, FiYoutube } from 'react-icons/fi'
import { FiEdit, FiMail, FiUserPlus, FiMapPin, FiPhone, FiTrash2 } from 'react-icons/fi'
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import { teamMembersList } from '@/utils/fackData/teamMembersList'

export const applicantProfileOption = [
    { label: "Only Me", icon: <FiLock /> },
    { label: "Everyone", icon: <FiGlobe /> },
    { label: "Anonymous", icon: <FiUsers /> },
    { label: "People I Follow", icon: <FiUserCheck /> },
    { label: "Custom Selections Ever", icon: <FiSettings /> },
]

const page = () => {
    return (
        <>
            <PageHeader>
            </PageHeader>

            <div className="main-content">
                <div className="row">
                    <div className="col-xxl-3 col-xl-6">
                        <div className="card stretch stretch-full">
                            <div className="card-body">
                                <div className="mb-4 text-center">
                                    <div className="wd-150 ht-150 mx-auto mb-3 position-relative">
                                        <div className="avatar-image wd-150 ht-150 border border-5 border-gray-3">
                                            <Image width={140} height={140} sizes='100vw' src="/images/avatar/1.png" alt="img" className="img-fluid" />
                                        </div>
                                        <div className="wd-10 ht-10 text-success rounded-circle position-absolute translate-middle" style={{ top: "76%", right: "10px" }}>
                                            <BsPatchCheckFill size={16} />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <a href="#" className="fs-14 fw-bold d-block"> Alexandra Della</a>
                                        <a href="#" className="fs-12 fw-normal text-muted d-block">alex.della@outlook.com</a>
                                    </div>
                                    <div className="fs-12 fw-normal text-muted text-center d-flex flex-wrap gap-3 mb-4">
                                        <div className="flex-fill py-3 px-4 rounded-1 d-none d-sm-block border border-dashed border-gray-5">
                                            <h6 className="fs-15 fw-bolder">28.65K</h6>
                                            <p className="fs-12 text-muted mb-0">Followers</p>
                                        </div>
                                        <div className="flex-fill py-3 px-4 rounded-1 d-none d-sm-block border border-dashed border-gray-5">
                                            <h6 className="fs-15 fw-bolder">38.85K</h6>
                                            <p className="fs-12 text-muted mb-0">Following</p>
                                        </div>
                                        <div className="flex-fill py-3 px-4 rounded-1 d-none d-sm-block border border-dashed border-gray-5">
                                            <h6 className="fs-15 fw-bolder">43.67K</h6>
                                            <p className="fs-12 text-muted mb-0">Engagement</p>
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    <li className="hstack justify-content-between mb-4">
                                        <span className="text-muted fw-medium hstack gap-3"><FiMapPin size={16} />Location</span>
                                        <a href="#" className="float-end">California, USA</a>
                                    </li>
                                    <li className="hstack justify-content-between mb-4">
                                        <span className="text-muted fw-medium hstack gap-3"><FiPhone size={16} />Phone</span>
                                        <a href="#" className="float-end">+01 (375) 2589 645</a>
                                    </li>
                                    <li className="hstack justify-content-between mb-0">
                                        <span className="text-muted fw-medium hstack gap-3"><FiMail size={16} />Email</span>
                                        <a href="#" className="float-end">alex.della@outlook.com</a>
                                    </li>
                                </ul>
                                <div className="d-flex gap-2 text-center pt-4">
                                    <a href="#" className="w-50 btn btn-light-brand">
                                        <FiTrash2 size={16} className='me-2' />
                                        <span>Delete</span>
                                    </a>
                                    <a href="#" className="w-50 btn btn-primary">
                                        <FiEdit size={16} className='me-2' />
                                        <span>Edit Profile</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-9 col-xl-6">
                        <div className="card border-top-0">
                            <div className="card-header p-0">
                                <ul className="nav nav-tabs flex-wrap w-100 text-center customers-nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item flex-fill border-top" role="presentation">
                                        <a href="#" className="nav-link active" data-bs-toggle="tab" data-bs-target="#overviewTab" role="tab">Overview</a>
                                    </li>
                                    <li className="nav-item flex-fill border-top" role="presentation">
                                        <a href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#billingTab" role="tab">Billing</a>
                                    </li>
                                    <li className="nav-item flex-fill border-top" role="presentation">
                                        <a href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#activityTab" role="tab">Activity</a>
                                    </li>
                                    <li className="nav-item flex-fill border-top" role="presentation">
                                        <a href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#notificationsTab" role="tab">Notifications</a>
                                    </li>
                                    <li className="nav-item flex-fill border-top" role="presentation">
                                        <a href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#connectionTab" role="tab">Connection</a>
                                    </li>
                                    <li className="nav-item flex-fill border-top" role="presentation">
                                        <a href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#securityTab" role="tab">Security</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="overviewTab" role="tabpanel">
                                    <div className="card-body">
                                        <h5 className="card-title">Overview</h5>
                                        <p className="card-text">This is the overview tab content.</p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="billingTab" role="tabpanel">
                                    <div className="card-body">
                                        <h5 className="card-title">Billing</h5>
                                        <p className="card-text">This is the billing tab content.</p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="activityTab" role="tabpanel">
                                    <div className="card-body">
                                        <h5 className="card-title">Activity</h5>
                                        <p className="card-text">This is the activity tab content.</p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="notificationsTab" role="tabpanel">
                                    <div className="card-body">
                                        <h5 className="card-title">Notifications</h5>
                                        <p className="card-text">This is the notifications tab content.</p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="connectionTab" role="tabpanel">
                                    <div className="card-body">
                                        <h5 className="card-title">Connection</h5>
                                        <p className="card-text">This is the connection tab content.</p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="securityTab" role="tabpanel">
                                    <div className="card-body">
                                        <h5 className="card-title">Security</h5>
                                        <p className="card-text">This is the security tab content.</p>
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
