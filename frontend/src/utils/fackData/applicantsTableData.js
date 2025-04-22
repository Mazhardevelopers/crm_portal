import { applicantListStatusOptions, applicantListTagsOptions } from "../options"

const tags = applicantListTagsOptions
const status = applicantListStatusOptions

export const applicantsTableData = [
    {
        "id": 1,
        "applicant_name": {
            "name": "John Doe",
            "img": "/images/avatar/1.png"
        },
        "email": "john.doe@example.com",
        "phone": "+1 (123) 456-7890",
        "postcode": "XY12 3AB",
        "landline": "+1 (123) 456-7890",
        "date": "2023-05-01, 10:00AM",
        "status": { status, defaultSelect: "active" },
        "job_title": "Software Engineer",
        "job_category": "IT",
        "source": "LinkedIn",
        "notes": "Experienced in full-stack development."
    },
    {
        "id": 2,
        "applicant_name": {
            "name": "Jane Smith",
            "img": "/images/avatar/2.png"
        },
        "email": "jane.smith@example.com",
        "phone": "+1 (987) 654-3210",
        "postcode": "AB34 5CD",
        "landline": "+1 (987) 654-3210",
        "date": "2023-05-02, 02:30PM",
        "status": { status, defaultSelect: "inactive" },
        "job_title": "Data Analyst",
        "job_category": "Analytics",
        "source": "Indeed",
        "notes": "Proficient in Python and SQL."
    },
    {
        "id": 3,
        "applicant_name": {
            "name": "Alice Johnson",
            "img": "/images/avatar/3.png"
        },
        "email": "alice.johnson@example.com",
        "phone": "+1 (555) 123-4567",
        "postcode": "CD56 7EF",
        "landline": "+1 (555) 123-4567",
        "date": "2023-05-03, 11:15AM",
        "status": { status, defaultSelect: "active" },
        "job_title": "Project Manager",
        "job_category": "Management",
        "source": "Glassdoor",
        "notes": "Strong leadership and organizational skills."
    },
    {
        "id": 4,
        "applicant_name": {
            "name": "Bob Brown",
            "name": "Henry Leach",
            "img": "/images/avatar/3.png"
        },
        "email": "henry.leach@outlook.com",
        "phone": "(258) 9514 657",
        "postcode": "YH12 4CD",
        "landline": "(258) 9514 657",
        "date": "2023-04-10, 05:25PM",
        "status": { status, defaultSelect: "inactive" },
        "job_title": "Assistant Chef",
        "job_category": "Chef",
        "source": "Indeed",
        "notes" : ""
    },
    {
        "id": 5,
        "applicant_name": {
            "name": "Marianne Audrey",
            "img": "/images/avatar/7.png"
        },
        "email": "marine.adrey@outlook.com",
        "phone": "(456) 6547 524",
        "postcode": "AB12 3CD",
        "landline": "(456) 6547 524",
        "date": "2023-04-12, 12:02PM",
        "status": { status, defaultSelect: "active" },
        "job_title": "Nursery Practitioner",
        "job_category": "Nursery",
        "source": "CV-Library",
        "notes" : ""
    },
    {
        "id": 6,
        "applicant_name": {
            "name": "Alexandra Della",
            "img": "/images/avatar/4.png"
        },
        "email": "alex.della@outlook.com",
        "phone": "(375) 8523 456",
        "postcode": "CD12 3CD",
        "landline": "(375) 8523 456",
        "date": "2023-04-15, 02:40PM",
        "status": { status, defaultSelect: "active" },
        "job_title": "Care Assistant",
        "job_category": "Non Nurse",
        "source": "Indeed",
        "notes" : ""
    },
    {
        "id": 7,
        "applicant_name": {
            "name": "Nancy Elliot",
            "img": "/images/avatar/5.png"
        },
        "email": "nancy.elliot@outlook.com",
        "phone": "(632) 5486 662",
        "landline": "(632) 5486 662",
        "postcode": "CD12 3CD",
        "date": "2023-04-25, 03:42PM",
        "status": { status, defaultSelect: "active" },
        "job_title": "Care Assistant",
        "job_category": "Non Nurse",
        "source": "Indeed",
        "notes" : ""
    },
    {
        "id": 8,
        "applicant_name": {
            "name": "Green Cute",
            "img": "/images/avatar/6.png"
        },
        "email": "green.cute@outlook.com",
        "phone": "(951) 5478 884",
        "landline": "(951) 5478 884",
        "date": "2023-04-14, 03:32PM",
        "postcode": "YH12 4CD",
        "status": { status, defaultSelect: "blocked" },
        "job_title": "Senior Care Assistant",
        "job_category": "Non Nurse",
        "source": "Reed",
        "notes" : ""
    },
    {
        "id": 9,
        "applicant_name": {
            "name": "Henry Leach",
            "img": ""
        },
        "email": "henry.leach@outlook.com",
        "phone": "(556) 2457 586",
        "landline": "(556) 2457 586",
        "postcode": "DH12 3CD",
        "date": "2023-04-20, 01:47PM",
        "status": { status, defaultSelect: "active" },
        "job_title": "Senior Care Assistant",
        "job_category": "Non Nurse",
        "source": "Reed",
        "notes" : ""
    },
    {
        "id": 10,
        "applicant_name": {
            "name": "Alexandra Della",
            "img": "/images/avatar/4.png"
        },
        "email": "alex.della@outlook.com",
        "phone": "(554) 2478 663",
        "landline": "(554) 2478 663",
        "postcode": "SH12 3CD",
        "date": "2023-04-22, 02:12PM",
        "status": { status, defaultSelect: "active" },
        "job_title": "Senior Care Assistant",
        "job_category": "Non Nurse",
        "source": "Reed",
        "notes" : ""
    },
    {
        "id": 11,
        "applicant_name": {
            "name": "Alexandra Della",
            "img": ""
        },
        "email": "alex.della@outlook.com",
        "phone": " (654) 2478 665",
        "landline": " (654) 2478 665",
        "postcode": "RE42 3CD",
        "date": "2023-04-25, 03:42PM",
        "status": { status, defaultSelect: "declined" },
        "job_title": "Senior Care Assistant",
        "job_category": "Non Nurse",
        "source": "Reed",
        "notes" : ""
    },
    {
        "id": 12,
        "applicant_name": {
            "name": "Elliot Nancy",
            "img": "/images/avatar/9.png"
        },
        "email": "elliot.nancy@outlook.com",
        "phone": "(554) 2478 663",
        "landline": "(554) 2478 663",
        "date": "2023-04-25, 03:42PM",
        "postcode": "WE12 3CD",
        "status": { status, defaultSelect: "inactive" },
        "job_title": "Senior Care Assistant",
        "job_category": "Non Nurse",
        "source": "Reed",
        "notes" : ""
    },
    {
        "id": 13,
        "applicant_name": {
            "name": "Green Cute",
            "img": "/images/avatar/5.png"
        },
        "email": "elliot.nancy@outlook.com",
        "phone": "(554) 2478 663",
        "landline": "(554) 2478 663",
        "postcode": "PE12 3CD",
        "date": "2023-04-25, 03:42PM",
        "status": { status, defaultSelect: "inactive" },
        "job_title": "Senior Care Assistant",
        "job_category": "Non Nurse",
        "source": "Reed",
        "notes" : "d"
    },
]