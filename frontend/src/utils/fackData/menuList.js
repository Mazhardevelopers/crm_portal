export const menuList = [
    {
        id: 0,
        name: "dashboards",
        path: "#",
        icon: "feather-airplay",
        dropdownMenu: [
            {
                id: 1,
                name: "CRM",
                path: "/",
                subdropdownMenu: false,
            },
            {
                id: 2,
                name: "Analytics",
                path: "/dashboards/analytics",
                subdropdownMenu: false,
            },
        ],
    },
    {
        id: 1,
        name: "applicants management",
        path: "#",
        icon: "feather-users",
        dropdownMenu: [
            {
                id: 1,
                name: "List",
                path: "/applicants/list",
                subdropdownMenu: false,
            },
            {
                id: 2,
                name: "Create",
                path: "/applicants/create",
                subdropdownMenu: false,
            },
        ],
    },
    {
        id: 2,
        name: "head offices management",
        path: "#",
        icon: "feather-briefcase",
        dropdownMenu: [
            {
                id: 1,
                name: "List",
                path: "/head-offices/list",
                subdropdownMenu: false,
            },
            {
                id: 2,
                name: "Create",
                path: "/head-offices/create",
                subdropdownMenu: false,
            },
        ],
    },
    {
        id: 3,
        name: "units management",
        path: "#",
        icon: "feather-gitlab",
        dropdownMenu: [
            {
                id: 1,
                name: "List",
                path: "/units/list",
                subdropdownMenu: false,
            },
            {
                id: 2,
                name: "Create",
                path: "/units/create",
                subdropdownMenu: false,
            },
        ],
    },
    {
        id: 4,
        name: "Sales management",
        path: "#",
        icon: "feather-bar-chart-2",
        dropdownMenu: [
            {
                id: 1,
                name: "List",
                path: "/sales/list",
                subdropdownMenu: false,
            },
            {
                id: 2,
                name: "Create",
                path: "/sales/create",
                subdropdownMenu: false,
            },
        ],
    },
    {
        id: 5,
        name: "CRM",
        path: "/CRM",
        icon: "feather-pie-chart",
        dropdownMenu: false,
    },
    {
        id: 6,
        name: "Resources",
        path: "#",
        icon: "feather-layers",
        dropdownMenu: [
            {
                id: 1,
                name: "Resource Applicants",
                path: "/resources/resource-applicants/list",
                subdropdownMenu: false,
            },
            {
                id: 2,
                name: "Direct Resources",
                path: "/resources/direct-resources/list",
                subdropdownMenu: false,
            },
            {
                id: 3,
                name: "Indirect Resources",
                path: "/resources/indirect-resources/list",
                subdropdownMenu: false,
            },
            {
                id: 4,
                name: "Rejected Applicants",
                path: "/resources/rejected-applicants/list",
                subdropdownMenu: false,
            },
            {
                id: 5,
                name: "Blocked Applicants",
                path: "/resources/blocked-applicants/list",
                subdropdownMenu: false,
            },
            {
                id: 6,
                name: "CRM Paid Applicants",
                path: "/resources/crm-paid-applicants/list",
                subdropdownMenu: false,
            },
            {
                id: 7,
                name: "No Job Applicants",
                path: "/resources/no-job-applicants/list",
                subdropdownMenu: false,
            },
        ],
    },
    {
        id: 7,
        name: "Quality Assurance",
        path: "#",
        icon: "feather-award",
        dropdownMenu: [
            {
                id: 1,
                name: "Applicants",
                path: "/quality/applicants",
                subdropdownMenu: false,
            },
            {
                id: 2,
                name: "Sales",
                path: "/quality/sales",
                subdropdownMenu: false,
            },
           
        ],
    },
    {
        id: 8,
        name: "Regions",
        path: "/regions",
        icon: "feather-globe",
        dropdownMenu: false
    },
    {
        id: 9,
        name: "administrations",
        path: "#",
        icon: "feather-shield",
        dropdownMenu: [
            {
                id: 1,
                name: "IP Addresses",
                path: "/IP-addresses/list",
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Roles & Permissions",
                path: "#",
                subdropdownMenu: [
                    {
                        id: 1,
                        name: "Roles",
                        path: "/roles/list",
                        subdropdownMenu: false,
                    },
                    {
                        id: 1,
                        name: "Permissions",
                        path: "/permissions/list",
                        subdropdownMenu: false,
                    },
                ],
            },
            {
                id: 3,
                name: "Users Management",
                path: "/users/list",
                subdropdownMenu: false
            },
        ],
    },
    {
        id: 10,
        name: "Communications",
        path: "#",
        icon: "feather-send",
        dropdownMenu: [
            {
                id: 1,
                name: "Chat",
                path: "/applications/chat",
                subdropdownMenu: false,
            },
            {
                id: 2,
                name: "Email",
                path: "/applications/email",
                subdropdownMenu: false,
            },
        ],
    },
    {
        id: 11,
        name: "settings",
        path: "#",
        icon: "feather-settings",
        dropdownMenu: [
            {
                id: 1,
                name: "Ganeral",
                path: "/settings/ganeral",
                subdropdownMenu: false,
            },
            {
                id: 2,
                name: "Email",
                path: "/settings/email",
                subdropdownMenu: false,
            },
            {
                id: 3,
                name: "Lead Sources",
                path: "/settings/leads",
                subdropdownMenu: false,
            },
            {
                id: 4,
                name: "Job Categories",
                path: "/settings/job-categories",
                subdropdownMenu: false,
            },
            {
                id: 4,
                name: "Job Titles",
                path: "/settings/job-titles",
                subdropdownMenu: false,
            },
            {
                id: 5,
                name: "Gateways",
                path: "/settings/gateways",
                subdropdownMenu: false,
            },
            {
                id: 6,
                name: "Localization",
                path: "/settings/localization",
                subdropdownMenu: false,
            },
        ],
    },
    {
        id: 12,
        name: "reports",
        path: "#",
        icon: "feather-cast",
        dropdownMenu: [
            {
                id: 5,
                name: "Sent Emails Report",
                path: "/reports/timesheets",
                subdropdownMenu: false,
            },
            {
                id: 6,
                name: "Users Login Report",
                path: "/reports/timesheets",
                subdropdownMenu: false,
            },
            {
                id: 7,
                name: "Users Daily Work Report",
                path: "/reports/timesheets",
                subdropdownMenu: false,
            },
        ],
    },
    {
        id: 13,
        name: "PostCode Finder",
        path: "/postcode-finder",
        icon: "feather-search",
        dropdownMenu: false,
    },
    {
        id: 0,
        name: "--------",
        path: "#",
        icon: "",
        dropdownMenu: false,
    },
    {
        id: 120,
        name: "applications",
        path: "#",
        icon: "feather-send",
        dropdownMenu: [
            {
                id: 1,
                name: "Chat",
                path: "/applications/chat",
                subdropdownMenu: false,
            },
            {
                id: 2,
                name: "Email",
                path: "/applications/email",
                subdropdownMenu: false,
            },
            {
                id: 3,
                name: "Tasks",
                path: "/applications/tasks",
                subdropdownMenu: false,
            },
            {
                id: 4,
                name: "Notes",
                path: "/applications/notes",
                subdropdownMenu: false,
            },
            {
                id: 5,
                name: "Storage",
                path: "/applications/storage",
                subdropdownMenu: false,
            },
            {
                id: 6,
                name: "Calendar",
                path: "/applications/calendar",
                subdropdownMenu: false,
            },
        ],
    },
    {
        id: 130,
        name: "proposal",
        path: "#",
        icon: "feather-at-sign",
        dropdownMenu: [
            {
                id: 1,
                name: "Proposal",
                path: "/proposal/list",
                subdropdownMenu: false,
            },
            {
                id: 2,
                name: "Proposal View",
                path: "/proposal/view",
                subdropdownMenu: false,
            },
            {
                id: 3,
                name: "Proposal Edit",
                path: "/proposal/edit",
                subdropdownMenu: false,
            },
            {
                id: 4,
                name: "Proposal Create",
                path: "/proposal/create",
                subdropdownMenu: false,
            },
        ],
    },
    {
        id: 140,
        name: "payment",
        path: "#",
        icon: "feather-dollar-sign",
        dropdownMenu: [
            {
                id: 1,
                name: "Payment",
                path: "/payment/list",
                subdropdownMenu: false,
            },
            {
                id: 2,
                name: "Invoice View",
                path: "/payment/view",
                subdropdownMenu: false,
            },
            {
                id: 4,
                name: "Invoice Create",
                path: "/payment/create",
                subdropdownMenu: false,
            },
        ],
    },
    {
        id: 150,
        name: "customers",
        path: "#",
        icon: "feather-users",
        dropdownMenu: [
            {
                id: 1,
                name: "Customers",
                path: "/customers/list",
                subdropdownMenu: false,
            },
            {
                id: 2,
                name: "Customers View",
                path: "/customers/view",
                subdropdownMenu: false,
            },
            {
                id: 3,
                name: "Customers Create",
                path: "/customers/create",
                subdropdownMenu: false,
            },
        ],
    },
    {
        id: 16,
        name: "leads",
        path: "#",
        icon: "feather-alert-circle",
        dropdownMenu: [
            {
                id: 1,
                name: "Leads",
                path: "/leads/list",
                subdropdownMenu: false,
            },
            {
                id: 2,
                name: "Leads View",
                path: "/leads/view",
                subdropdownMenu: false,
            },
            {
                id: 3,
                name: "Leads Create",
                path: "/leads/create",
                subdropdownMenu: false,
            },
        ],
    },
    {
        id: 17,
        name: "projects",
        path: "#",
        icon: "feather-briefcase",
        dropdownMenu: [
            {
                id: 1,
                name: "Projects",
                path: "/projects/list",
                subdropdownMenu: false,
            },
            {
                id: 2,
                name: "Projects View",
                path: "/projects/view",
                subdropdownMenu: false,
            },
            {
                id: 3,
                name: "Projects Create",
                path: "/projects/create",
                subdropdownMenu: false,
            },
        ],
    },
    {
        id: 18,
        name: "widgets",
        path: "#",
        icon: "feather-layout",
        dropdownMenu: [
            {
                id: 1,
                name: "Lists",
                path: "/widgets/lists",
                subdropdownMenu: false,
            },
            {
                id: 2,
                name: "Tables",
                path: "/widgets/tables",
                subdropdownMenu: false,
            },
            {
                id: 3,
                name: "Charts",
                path: "/widgets/charts",
                subdropdownMenu: false,
            },
            {
                id: 4,
                name: "Statistics",
                path: "/widgets/statistics",
                subdropdownMenu: false,
            },
            {
                id: 5,
                name: "Miscellaneous",
                path: "/widgets/miscellaneous",
                subdropdownMenu: false,
            },
        ],
    },
    {
        id: 19,
        name: "settings",
        path: "#",
        icon: "feather-settings",
        dropdownMenu: [
            {
                id: 1,
                name: "Ganeral",
                path: "/settings/ganeral",
                subdropdownMenu: false,
            },
            {
                id: 2,
                name: "SEO",
                path: "/settings/seo",
                subdropdownMenu: false,
            },
            {
                id: 3,
                name: "Tags",
                path: "/settings/tags",
                subdropdownMenu: false,
            },
            {
                id: 4,
                name: "Email",
                path: "/settings/email",
                subdropdownMenu: false,
            },
            {
                id: 5,
                name: "Tasks",
                path: "/settings/tasks",
                subdropdownMenu: false,
            },
            {
                id: 6,
                name: "Leads",
                path: "/settings/leads",
                subdropdownMenu: false,
            },
            {
                id: 7,
                name: "Support",
                path: "/settings/Support",
                subdropdownMenu: false,
            },
            {
                id: 8,
                name: "Finance",
                path: "/settings/finance",
                subdropdownMenu: false,
            },
            {
                id: 9,
                name: "Gateways",
                path: "/settings/gateways",
                subdropdownMenu: false,
            },
            {
                id: 10,
                name: "Customers",
                path: "/settings/customers",
                subdropdownMenu: false,
            },
            {
                id: 11,
                name: "Localization",
                path: "/settings/localization",
                subdropdownMenu: false,
            },
            {
                id: 12,
                name: "reCAPTCHA",
                path: "/settings/recaptcha",
                subdropdownMenu: false,
            },
            {
                id: 13,
                name: "Miscellaneous",
                path: "/settings/miscellaneous",
                subdropdownMenu: false,
            },
        ],
    },
    {
        id: 20,
        name: "authentication",
        path: "#",
        icon: "feather-power",
        dropdownMenu: [
            {
                id: 1,
                name: "login",
                path: "#",
                subdropdownMenu: [
                    {
                        id: 1,
                        name: "Cover",
                        path: "/authentication/login/cover",
                    },
                    {
                        id: 2,
                        name: "Minimal",
                        path: "/authentication/login/minimal",
                    },
                    {
                        id: 3,
                        name: "Creative",
                        path: "/authentication/login/creative",
                    },
                ],
            },
            {
                id: 2,
                name: "register",
                path: "#",
                subdropdownMenu: [
                    {
                        id: 1,
                        name: "Cover",
                        path: "/authentication/register/cover",
                    },
                    {
                        id: 2,
                        name: "Minimal",
                        path: "/authentication/register/minimal",
                    },
                    {
                        id: 3,
                        name: "Creative",
                        path: "/authentication/register/creative",
                    },
                ],
            },
            {
                id: 3,
                name: "Error 404",
                path: "#",
                subdropdownMenu: [
                    {
                        id: 1,
                        name: "Cover",
                        path: "/authentication/404/cover",
                    },
                    {
                        id: 2,
                        name: "Minimal",
                        path: "/authentication/404/minimal",
                    },
                    {
                        id: 3,
                        name: "Creative",
                        path: "/authentication/404/creative",
                    },
                ],
            },
            {
                id: 4,
                name: "Reset Pass",
                path: "#",
                subdropdownMenu: [
                    {
                        id: 1,
                        name: "Cover",
                        path: "/authentication/reset/cover",
                    },
                    {
                        id: 2,
                        name: "Minimal",
                        path: "/authentication/reset/minimal",
                    },
                    {
                        id: 3,
                        name: "Creative",
                        path: "/authentication/reset/creative",
                    },
                ],
            },
            {
                id: 5,
                name: "Verify OTP",
                path: "#",
                subdropdownMenu: [
                    {
                        id: 1,
                        name: "Cover",
                        path: "/authentication/verify/cover",
                    },
                    {
                        id: 2,
                        name: "Minimal",
                        path: "/authentication/verify/minimal",
                    },
                    {
                        id: 3,
                        name: "Creative",
                        path: "/authentication/verify/creative",
                    },
                ],
            },
            {
                id: 6,
                name: "Maintenance",
                path: "#",
                subdropdownMenu: [
                    {
                        id: 1,
                        name: "Cover",
                        path: "/authentication/maintenance/cover",
                    },
                    {
                        id: 2,
                        name: "Minimal",
                        path: "/authentication/maintenance/minimal",
                    },
                    {
                        id: 3,
                        name: "Creative",
                        path: "/authentication/maintenance/creative",
                    },
                ],
            },
        ],
    },
];
