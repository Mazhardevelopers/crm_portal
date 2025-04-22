'use client'
import React, { useState } from 'react'
import { FiCalendar, FiCamera, FiSave, FiUser } from 'react-icons/fi'
import TextArea from '@/components/shared/TextArea'
import SelectDropdown from '@/components/shared/SelectDropdown'
import Input from '@/components/shared/Input'

const UnitsCreateContent = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const customJobTitles = [
        { label: "Hotel Manager", value: "hotel-manager" },
        { label: "Front Desk Agent", value: "front-desk-agent" },
        { label: "Housekeeping Supervisor", value: "housekeeping-supervisor" },
        { label: "Chef", value: "chef" },
        { label: "Event Coordinator", value: "event-coordinator" },
        { label: "Concierge", value: "concierge" },
        { label: "Bartender", value: "bartender" },
        { label: "Waitstaff", value: "waitstaff" },
    ];
   
    const customJobProfessions = [
        { label: "Software Engineer", value: "software-engineer" },
        { label: "Data Scientist", value: "data-scientist" },
        { label: "Product Manager", value: "product-manager" },
        { label: "Graphic Designer", value: "graphic-designer" },
        { label: "Marketing Specialist", value: "marketing-specialist" },
        { label: "Sales Representative", value: "sales-representative" },
        { label: "Customer Support", value: "customer-support" },
        { label: "Human Resources Manager", value: "human-resources-manager" },
    ];
    
    const customSourceOptions = [
        { label: "Job Portal", value: "job-portal" },
        { label: "Employee Referral", value: "employee-referral" },
        { label: "Social Media", value: "social-media" },
        { label: "Company Website", value: "company-website" },
        { label: "Recruitment Agency", value: "recruitment-agency" },
        { label: "Career Fair", value: "career-fair" },
        { label: "Walk-in", value: "walk-in" },
        { label: "Other", value: "other" },
    ];

    return (
        <div className="col-lg-12">
            <div className="card border-top-0">
                <div className="card-body personal-info">
                    <div className="mb-4">
                        <h5 className="fw-bold mb-0">
                            <span className="d-block mb-2">Unit Information:</span>
                            <span className="fs-12 fw-normal text-muted">Following information is publicly displayed, be careful!</span>
                        </h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <label className="form-label">Job Title</label>
                            <SelectDropdown
                                options={customJobTitles}
                                selectedOption={selectedOption}
                                defaultSelect="Select Job Title"
                                onSelectOption={(option) => {
                                    fetchStates(option.label);
                                    fetchCities(option.label);
                                    setSelectedOption(option)
                                }}
                            />
                        </div>
                        <div className="col-lg-4 mb-4">
                            <label className="form-label">Job Profession</label>
                            <SelectDropdown
                                options={customJobProfessions}
                                selectedOption={selectedOption}
                                defaultSelect="Select Job Profession"
                                onSelectOption={(option) => {
                                    fetchStates(option.label);
                                    fetchCities(option.label);
                                    setSelectedOption(option)
                                }}
                            />
                        </div>

                        <div className="col-lg-4 mb-4">
                            <label className="form-label">Source</label>
                            <SelectDropdown
                                options={customSourceOptions}
                                selectedOption={selectedOption}
                                defaultSelect="Select Source"
                                onSelectOption={(option) => {
                                    fetchStates(option.label);
                                    fetchCities(option.label);
                                    setSelectedOption(option)
                                }}
                            />
                        </div>

                        <div className="col-lg-4 mb-4">
                            <label htmlFor="applicantNameInput" className="form-label">Name</label>
                            <Input
                                // icon='feather-user'
                                placeholder={"Enter Name"}
                                name={"applicantName"}
                            />
                        </div>

                        <div className="col-lg-4 mb-4">
                            <label htmlFor="emailInput" className="form-label">Email</label>&nbsp;
                            <span className="fs-10 fw-normal text-info">(You can add multiple emails with comma separator)</span>
                            <Input
                                // icon='feather-mail'
                                placeholder={"Enter Valid Email"}
                                name={"email"}
                                type={"email"}
                            />
                        </div>

                        <div className="col-lg-4 mb-4">
                            <label htmlFor="postcodeInput" className="form-label">PostCode</label>&nbsp;
                            <span className="fs-10 fw-normal text-info">(If postcode is not available then use current or last workplace postcode)</span>
                            <Input
                                // icon='feather-link-2'
                                placeholder={"Enter PostCode"}
                                name={"postcode"}
                            />
                        </div>

                        <div className="col-lg-4 mb-4">
                            <label htmlFor="phoneInput" className="form-label">Phone</label>
                            <Input
                                // icon='feather-phone'
                                placeholder={"Enter Phone"}
                                name={"phone"}
                            />
                        </div>
                        
                        <div className="col-lg-4 mb-4">
                            <label htmlFor="landlineInput" className="form-label">Landline</label>
                            <Input
                                // icon='feather-phone'
                                placeholder={"Enter Landline"}
                                name={"landline"}
                            />
                        </div>
                        <div className="col-lg-4 mb-4">
                            <label htmlFor="resumeInput" className="form-label">Attach Resume</label>
                            <Input
                                type="file"
                                name="resume"
                                accept=".pdf,.doc,.docx,.jpg,.png"
                                placeholder={"Upload Attachment"}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <label htmlFor="experienceInput" className="form-label">Experience</label>
                            <span className="fs-10 fw-normal text-info">(Optional)</span>

                            <TextArea
                                icon="feather-type"
                                placeholder={"Add Experience"}
                                name={"experience"}
                                row='5'
                            />
                        </div>
                        <div className="col-lg-6 mb-4">
                            <label htmlFor="noteInput" className="form-label">Notes</label>
                            <TextArea
                                icon="feather-type"
                                placeholder={"Add Notes"}
                                name={"note"}
                                row='5'
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-lg-4 mb-4">
                            <label className="form-label">Have Nursing Home Experience?</label>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="employmentType"
                                    id="yes"
                                    value="yes"
                                />
                                <label className="form-check-label" htmlFor="yes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="employmentType"
                                    id="no"
                                    value="no"
                                />
                                <label className="form-check-label" htmlFor="no">
                                    No
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="employmentType"
                                    id="none"
                                    value="" checked
                                />
                                <label className="form-check-label" htmlFor="none">
                                    Not a Nurse Category
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-end">
                            <button className="btn btn-primary me-2 d-flex align-items-center" type="button">
                                <FiSave className="me-2" size={14}/>
                                Save
                            </button>
                            <button className="btn btn-secondary" type="button">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnitsCreateContent