// ============================================
// JUNE COMMITMENTS DATA
// ============================================
const JUNE_COMMITMENTS = [
    {
        moduleId: 'preksha',
        goals: [
            'QA to be finished asap',
            'Client review to be done this week',
            'Documentation : Concept note',
            'Security audit',
            'UAT as soon as client approves',
            'Database audit : Implement Database Audit points by the end of this week',
            'UAT readiness by 16th June'
        ]
    },
    {
        moduleId: 'samadhan',
        goals: [
            'QA to be finished asap',
            'Client review to be done this week',
            'Documentation : Concept note',
            'Database Audit : To be done this week',
            'Security audit',
            'UAT as soon as client approves'
        ]
    },
    {
        moduleId: 'expenditure',
        goals: [
            'Planning : Shorten the entire booklet by creating a single form if possible',
            'Client review : Get the static screens reviewed by Pradeep sir',
            'Dynamic development : Finish it latest by Thursday next week',
            'Start QA by Monday next week',
            'Database audit : By Monday 3rd week of June',
            'Security audit : By Monday 3rd week of June',
            'UAT : As soon as client reviews are implemented and approved'
        ]
    },
    {
        moduleId: 'ipbms',
        goals: [
            "Blocker : Secure a sample of the hardware asap and start testing",
            "Client review : Present the module to Priyanka ma'am by wednesday and get her approval",
            "QA : Start by Monday coming week",
            "Database Audit : By coming week",
            "Security Audit : Once the Hardware testing is done",
            "UAT : As soon as client reviews are implemented and approved"
        ]
    },
    {
        moduleId: 'sugamta',
        goals: [
            "Dependency : Secure APIs to fetch Sector-Polling booth mapping data",
            "Requirement gathering : Aiming to to be done by Friday this week",
            "Static screens : Get Shakya sir's review on Static screens and check with him about presenting to the DEOs",
            "Dynamic development : Aiming to be done by Monday last week of June",
            "Internal and Client reviews : Aiming to be done by the end of the last week of June",
            "QA : Aiming to be done by the Monday 2nd week of July",
            "Database Audit : Aiming to be done by last week of June",
            "Security Audit : Aiming to be done by 2nd week of July",
            "UAT : As soon as client reviews are implemented and approved"
        ]
    },
    {
        moduleId: 'evm',
        goals: [
            'On hold for now'
        ]
    }
];

// ============================================
// SVG INFOGRAPHIC ICONS
// ============================================
const ICONS = {
    preksha: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width: 60%; height: 60%; display: block;"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
    samadhan: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width: 60%; height: 60%; display: block;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="m9 10 2 2 4-4"></path></svg>`,
    expenditure: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width: 60%; height: 60%; display: block;"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>`,
    sugamta: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width: 60%; height: 60%; display: block;"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`,
    ipbms: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width: 60%; height: 60%; display: block;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    evm: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width: 60%; height: 60%; display: block;"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="9" y1="6" x2="15" y2="6"></line><line x1="9" y1="10" x2="15" y2="10"></line><line x1="9" y1="14" x2="15" y2="14"></line><circle cx="12" cy="18" r="1"></circle></svg>`
};

// ============================================
// DEFAULT MODULE DATA
// ============================================
const DEFAULT_MODULES = {
    preksha: {
        id: 'preksha',
        name: 'Preksha',
        icon: ICONS.preksha,
        color: '#6366f1',
        requirementGathering: 'Done',
        staticScreens: { creation: 'Skipped', presentation: 'Skipped', status: 'Not done' },
        finalStatus: 'In progress',
        remark: '',
        dependency: '',
        clientReviewPoints: [],
        documentation: { processFlow: 'Done', userManual: 'Done', conceptNote: '-' },
        team: ['Arjun', 'Ashutosh', 'Jay', 'Mahaveer'],
        timeNeeded: '1 day',
        userTypes: [
            {
                name: 'Roll Observer',
                reqGathering: 'Done',
                staticScreens: { creation: 'Skipped', presentation: 'Skipped', status: 'Not done' },
                categories: [
                    {
                        name: 'Profile',
                        pages: [
                            {
                                name: 'प्रेक्षक प्रोफाइल',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues', status: '-' },
                                clientReview: { review: 'Done', status: 'Approved' },
                                changeRequest: { details: 'Add new fields as per the presentation shared', devStatus: 'Done', clientReview: '-', approval: '-' }
                            },
                            {
                                name: 'बैंक विवरण',
                                dynamicDev: 'Done',
                                internalReview: { review: 'Bug: Flow was breaking', status: 'Done' },
                                clientReview: { review: 'Done', status: 'Approved' },
                                changeRequest: { details: 'None', devStatus: '-', clientReview: '-', approval: '-' }
                            },
                            {
                                name: 'प्रोफाइल परिवर्तन',
                                dynamicDev: 'Done',
                                internalReview: { review: 'A table added to show user the "status" of their request for change in profile details. Added another feature asking user\'s permission to change the mobile no in "bank details" as well', status: 'Done' },
                                clientReview: { review: 'Done', status: 'Approved' },
                                changeRequest: null
                            },
                            {
                                name: 'डाउनलोड आईडी कार्ड',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues', status: 'Done' },
                                clientReview: { review: 'Done', status: 'Approved' },
                                changeRequest: { details: 'The ID card should contain all the details added while "Prekshak Panjiyan"', devStatus: 'Done', clientReview: 'Pending', approval: 'Pending' }
                            }
                        ]
                    },
                    {
                        name: 'Main Pages',
                        pages: [
                            {
                                name: 'जिले से संबंधित जानकारी',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues', status: '-' },
                                clientReview: { review: 'Done', status: 'Approved' },
                                changeRequest: null
                            },
                            {
                                name: 'अपीलीय अधिकारी से सम्बंधित जानकारी',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues', status: '-' },
                                clientReview: { review: 'Done', status: 'Approved' },
                                changeRequest: null
                            },
                            {
                                name: 'रजिस्ट्रीकरण अधिकारी से सम्बंधित जानकारी',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues', status: '-' },
                                clientReview: { review: 'Done', status: 'Approved' },
                                changeRequest: null
                            },
                            {
                                name: 'प्रथम चरण रिपोर्ट',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues', status: '-' },
                                clientReview: { review: 'Done', status: 'Approved' },
                                changeRequest: null
                            },
                            {
                                name: 'आगमन और प्रस्थान रिपोर्ट दर्ज करें',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues', status: 'Done' },
                                clientReview: { review: 'Pending', status: '-' },
                                changeRequest: { details: 'Add a form and report to add/view arrival and departure details', devStatus: 'Done', clientReview: 'Pending', approval: 'Pending' }
                            }
                        ]
                    },
                    {
                        name: 'Reports',
                        pages: [
                            {
                                name: 'रिपोर्ट (प्रथम चरण रिपोर्ट देखें)',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues', status: 'Done' },
                                clientReview: { review: 'Nagariya Nikaya field was coming empty', status: 'Pending to be reviewed' },
                                changeRequest: null
                            },
                            {
                                name: 'आगमन और प्रस्थान रिपोर्ट सूची',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues - Possibility of fetching details via API. Needs client review for this', status: 'Done' },
                                clientReview: { review: 'Pending', status: 'Pending to be reviewed' },
                                changeRequest: { details: 'Add a report to view the details filled in arrival and departure', devStatus: 'Done', clientReview: 'Pending', approval: 'Pending' }
                            }
                        ]
                    },
                    {
                        name: 'Other Pages',
                        pages: [
                            {
                                name: 'प्रशिक्षण संबन्धित जानकारी',
                                dynamicDev: 'Done',
                                internalReview: { review: '-', status: '-' },
                                clientReview: { review: '-', status: '-' },
                                changeRequest: { details: 'None', devStatus: '-', clientReview: '-', approval: '-' }
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Election Observer',
                reqGathering: 'Done',
                staticScreens: { creation: 'Skipped', presentation: 'Skipped', status: 'Not done' },
                categories: [
                    {
                        name: 'Profile',
                        pages: [
                            {
                                name: 'प्रेक्षक प्रोफाइल',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues', status: 'Done' },
                                clientReview: { review: '-', status: '-' },
                                changeRequest: null
                            },
                            {
                                name: 'बैंक विवरण',
                                dynamicDev: 'Done',
                                internalReview: { review: 'Bug: Flow was breaking. Fixed', status: '-' },
                                clientReview: { review: '-', status: '-' },
                                changeRequest: null
                            },
                            {
                                name: 'प्रोफाइल परिवर्तन',
                                dynamicDev: 'Done',
                                internalReview: { review: 'A table added to show user the "status" of their request for change in profile details. Added another feature asking user\'s permission to change the mobile no in "bank details" as well', status: '-' },
                                clientReview: { review: '-', status: '-' },
                                changeRequest: null
                            },
                            {
                                name: 'डाउनलोड आईडी कार्ड',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues - Possibility of fetching details via API. Needs client review', status: 'Done' },
                                clientReview: { review: '-', status: '-' },
                                changeRequest: null
                            }
                        ]
                    },
                    {
                        name: 'Main Pages (Panchayat)',
                        pages: [
                            { name: 'जिले में पहुँचने के पश्चात्', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'नामनिर्देशन पत्रों की संवीक्षा एवं प्रतीक आवंटन के उपरांत', dynamicDev: 'Done', internalReview: { review: 'Review points shared with the dev', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'अभ्यर्थियों की बैठक के पश्चात्', dynamicDev: 'Done', internalReview: { review: 'Review points shared with the dev', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'मतदान कर्मियों के प्रशिक्षण एवं मतदान तैयारी के सम्बन्ध में', dynamicDev: 'Done', internalReview: { review: 'Review points shared with the dev', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'मतदान समाप्ति के पश्चात्', dynamicDev: 'Done', internalReview: { review: 'Review points shared with the dev', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'खण्ड स्तरीय मतगणना की स्तिथि में', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'परिणाम की घोषणा के उपरान्त', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'समय-समय पर अन्य महत्वपूर्ण घटनाओं के संबंध में', dynamicDev: 'Done', internalReview: { review: 'Review points shared with the dev', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null }
                        ]
                    },
                    {
                        name: 'Main Pages (Nagariya Nikaya)',
                        pages: [
                            { name: 'जिले में पहुँचने के पश्चात्', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'नामनिर्देशन पत्रों की संवीक्षा एवं प्रतीक आवंटन के उपरांत', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'अभ्यर्थियों की बैठक के पश्चात्', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'मतदान कर्मियों के प्रशिक्षण एवं मतदान तैयारी के सम्बन्ध में', dynamicDev: 'Done', internalReview: { review: 'Review points shared with the dev', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'मतदान समाप्ति के पश्चात्', dynamicDev: 'Done', internalReview: { review: 'Review points shared with the dev', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'मतगणना की स्थिति में', dynamicDev: 'Done', internalReview: { review: 'Review points shared with the dev', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'समय-समय पर अन्य महत्वपूर्ण घटनाओं के संबंध में', dynamicDev: 'Done', internalReview: { review: 'Review points shared with the dev', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null }
                        ]
                    },
                    {
                        name: 'Reports',
                        pages: [
                            { name: 'आगमन और प्रस्थान रिपोर्ट सूची', dynamicDev: 'Done', internalReview: { review: 'No issues - Possibility of fetching details via API. Needs client review', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'त्रिस्तरीय पंचायत रिपोर्ट देखें', dynamicDev: 'Done', internalReview: { review: 'Modification: Creating a single page for all reports with table view. A view button in each row will open the report as a modal (print button in modal itself)', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'नगरीय निकाय रिपोर्ट देखें', dynamicDev: 'Done', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null }
                        ]
                    }
                ]
            },
            {
                name: 'MPSEC',
                reqGathering: 'Done',
                staticScreens: { creation: 'Skipped', presentation: 'Skipped', status: 'Not done' },
                categories: [
                    {
                        name: 'Dashboard & Management',
                        pages: [
                            { name: 'Master Dashboard', dynamicDev: 'Done', internalReview: { review: 'Done', status: '-' }, clientReview: { review: 'Pending', status: '-' }, changeRequest: null },
                            { name: 'प्रेक्षक पंजीयन', dynamicDev: 'Done', internalReview: { review: 'Requires UI fixes', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'प्रेक्षक मोबाइल नंबर परिवर्तन प्रबंधन', dynamicDev: 'Done', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null }
                        ]
                    }
                ]
            }
        ]
    },

    samadhan: {
        id: 'samadhan',
        name: 'Samadhan',
        icon: ICONS.samadhan,
        color: '#10b981',
        requirementGathering: 'Done',
        staticScreens: { creation: 'Done', presentation: 'Done', status: 'Approved' },
        finalStatus: 'In progress',
        remark: 'Malviya sir reviewed it once, gave some changes which were implemented. But he doesn\'t give any formal approval. Pradeep sir has approved it. He asked to show it to Sanju ma\'am but Sanju ma\'am said that she has no knowledge of this domain',
        dependency: '',
        clientReviewPoints: [],
        documentation: { processFlow: 'Done', userManual: 'Done', conceptNote: '-' },
        team: ['Ashmit'],
        timeNeeded: '1 day',
        userTypes: [
            {
                name: 'Voter',
                categories: [
                    {
                        name: 'Complaint Management',
                        pages: [
                            {
                                name: 'Register a complaint',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues', status: 'Done' },
                                clientReview: { review: 'Regarding EPIC no API: Pradeep sir suggested to keep only login via mobile and remove EPIC no as not everyone has it. Add "Forward to SP" and "Forward to MPSEC"', status: 'Pending to be reviewed' },
                                changeRequest: null
                            },
                            {
                                name: 'Complaint list',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues', status: 'Done' },
                                clientReview: { review: '-', status: '-' },
                                changeRequest: null
                            },
                            {
                                name: 'Check complaint status',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues', status: 'Done' },
                                clientReview: { review: '-', status: '-' },
                                changeRequest: null
                            }
                        ]
                    }
                ]
            },
            {
                name: 'DEO',
                categories: [
                    {
                        name: 'Complaint Management',
                        pages: [
                            {
                                name: 'Complaint list',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues', status: 'Done' },
                                clientReview: { review: 'Pending', status: 'Pending' },
                                changeRequest: null
                            }
                        ]
                    }
                ]
            },
            {
                name: 'RO',
                categories: [
                    {
                        name: 'Complaint Management',
                        pages: [
                            {
                                name: 'Complaint list',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues', status: 'Done' },
                                clientReview: { review: 'Pending', status: 'Pending' },
                                changeRequest: null
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Admin',
                categories: [
                    {
                        name: 'User Management',
                        pages: [
                            {
                                name: 'User Management',
                                dynamicDev: 'Done',
                                internalReview: { review: 'User Management: Office registration to be added', status: 'Done' },
                                clientReview: { review: 'Pending', status: 'Pending' },
                                changeRequest: null
                            }
                        ]
                    }
                ]
            }
        ]
    },

    expenditure: {
        id: 'expenditure',
        name: 'Expenditure',
        icon: ICONS.expenditure,
        color: '#f59e0b',
        requirementGathering: 'Done',
        staticScreens: { creation: '-', presentation: '-', status: '-' },
        finalStatus: 'In Progress',
        remark: 'All approved from Pradeep sir. He asked to show it to Sanju ma\'am (given that she\'s the IT head) or Shrivastava sir',
        dependency: '',
        clientReviewPoints: [],
        documentation: { processFlow: 'Partial', userManual: 'Partial', conceptNote: '-' },
        team: ['Nayan', 'Kapil', 'Jay'],
        timeNeeded: '7-8 days (Candidate)',
        userTypes: [
            {
                name: 'DEO',
                categories: [
                    {
                        name: 'Application & Reports',
                        pages: [
                            {
                                name: 'Candidate application review',
                                dynamicDev: 'Done',
                                internalReview: { review: 'Pending', status: '-' },
                                clientReview: { review: '-', status: '-' },
                                changeRequest: null
                            },
                            {
                                name: 'परिशिष्ट-36',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues', status: 'Done' },
                                clientReview: { review: 'Pradeep sir asked to add a dropdown to select the "Nagariya Nikaya" prakar', status: 'Approved' },
                                changeRequest: null
                            },
                            {
                                name: 'परिशिष्ट-36 रिपोर्ट',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues', status: 'Done' },
                                clientReview: { review: 'No issues', status: '-' },
                                changeRequest: null
                            },
                            {
                                name: 'परिशिष्ट-36 (क)',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues', status: 'Done' },
                                clientReview: { review: 'Pradeep sir asked to add a dropdown to select the "Nagariya Nikaya" prakar', status: 'Approved' },
                                changeRequest: null
                            },
                            {
                                name: 'परिशिष्ट-36 (क) रिपोर्ट',
                                dynamicDev: 'Done',
                                internalReview: { review: 'No issues', status: 'Done' },
                                clientReview: { review: 'No issues', status: '-' },
                                changeRequest: null
                            },
                            {
                                name: 'Dashboard',
                                dynamicDev: 'Done',
                                internalReview: { review: '-', status: '-' },
                                clientReview: { review: 'Pradeep sir confirmed to show "Expenditure limit crossed"KPI', status: 'Approved' },
                                changeRequest: null
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Candidate',
                reqGathering: 'Done',
                staticScreens: { creation: 'Skipped', presentation: 'Skipped', status: 'Not done' },
                categories: [
                    {
                        name: 'Registration',
                        pages: [
                            {
                                name: 'Candidate signup and registration',
                                dynamicDev: 'Done',
                                internalReview: { review: 'Pending', status: '-' },
                                clientReview: { review: '-', status: '-' },
                                changeRequest: { details: 'New requirement', devStatus: 'In Progress', clientReview: '-', approval: '-' }
                            }
                        ]
                    },
                    {
                        name: 'Main Pages',
                        pages: [
                            { name: 'Pro-forma (क)', dynamicDev: 'Done', internalReview: { review: 'Pending', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'Pro-forma (ख)', dynamicDev: 'In Progress', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'Pro-forma (ग)', dynamicDev: 'In Progress', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'अनुसूचि 1', dynamicDev: 'In Progress', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'अनुसूचि 2', dynamicDev: '-', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'अनुसूचि 3', dynamicDev: '-', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'अनुसूचि 4', dynamicDev: '-', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'अनुसूचि 5', dynamicDev: '-', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'अनुसूचि 6', dynamicDev: 'In Progress', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'अनुसूचि 7', dynamicDev: '-', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'अनुसूचि 8', dynamicDev: '-', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'अनुसूचि 9', dynamicDev: '-', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null }
                        ]
                    },
                    {
                        name: 'Reports',
                        pages: [
                            { name: 'भाग 1', dynamicDev: '-', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'भाग 2', dynamicDev: '-', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'भाग 3', dynamicDev: '-', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null }
                        ]
                    }
                ]
            }
        ]
    },

    sugamta: {
        id: 'sugamta',
        name: 'Sugamta',
        icon: ICONS.sugamta,
        color: '#f43f5e',
        requirementGathering: 'In Progress - Got the requirement for everything related to the commutation of "polling parties" in "Panchayat elections"\n\nPending For :\n- Nagariya Elections\n- Sector Officer\n- Sector Magistrate',
        staticScreens: { creation: 'In Progress', presentation: 'Done - Client has asked to add (Vehicle fitness and Insurance check)', status: 'In Progress' },
        finalStatus: 'In progress',
        remark: 'Sanju ma\'am is mainly interested in this module. She won\'t review Preksha alone. Aiming to present Election Observer in the coming week while conveying the progress in Pithasin module.\nNeed to visit Shakya sir to get his review on the Static screen (as he gave a few suggestions regarding the module)',
        dependency: 'Dependency\nAPIs to fetch Polling booth info Sector wise:\n- Polling booth name\n- Polling booth number\n- Polling booth sthan/Bhawan',
        clientReviewPoints: [],
        documentation: { processFlow: 'In progress', userManual: '-', conceptNote: '-' },
        team: ['Ashmit', 'Mahaveer', 'Arjun'],
        timeNeeded: '12-14 days',
        projectSetup: 'In progress',
        userTypes: [
            {
                name: 'Pithasin officer',
                categories: [
                    {
                        name: 'Core',
                        pages: [
                            {
                                name: 'Vehicle transit log',
                                dynamicDev: 'Not started yet',
                                internalReview: { review: '-', status: '-' },
                                clientReview: { review: '-', status: '-' },
                                changeRequest: null
                            }
                        ]
                    }
                ]
            },
            {
                name: 'RO',
                categories: [
                    {
                        name: 'Route Planning',
                        pages: [
                            {
                                name: 'Route planning',
                                dynamicDev: 'Not started yet',
                                internalReview: { review: '-', status: '-' },
                                clientReview: { review: '-', status: '-' },
                                changeRequest: null
                            },
                            {
                                name: 'Vehicle release',
                                dynamicDev: 'Not started yet',
                                internalReview: { review: '-', status: '-' },
                                clientReview: { review: '-', status: '-' },
                                changeRequest: null
                            }
                        ]
                    }
                ]
            },
            {
                name: 'DEO',
                categories: [
                    {
                        name: 'Management & Dashboard',
                        pages: [
                            { name: 'Route plan review', dynamicDev: 'Not started yet', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'Sector officer appointment', dynamicDev: 'Not started yet', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'Fuel station allocation', dynamicDev: 'Not started yet', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'Payment log', dynamicDev: 'Not started yet', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'Dashboard', dynamicDev: 'Not started yet', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null }
                        ]
                    }
                ]
            },
            {
                name: 'RTO',
                categories: [
                    {
                        name: 'Vehicle Requisition',
                        pages: [
                            { name: 'Vehicle requisition', dynamicDev: 'Not started yet', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null }
                        ]
                    }
                ]
            },
            {
                name: 'Sector Officer',
                categories: [
                    {
                        name: 'Vehicle Management',
                        pages: [
                            { name: 'Vehicle allocation', dynamicDev: 'Not started yet', internalReview: { review: '-', status: '-' }, clientReview: { review: '-', status: '-' }, changeRequest: null }
                        ]
                    }
                ]
            }
        ]
    },

    ipbms: {
        id: 'ipbms',
        name: 'IPBMS',
        icon: ICONS.ipbms,
        color: '#8b5cf6',
        requirementGathering: 'Done',
        staticScreens: { creation: 'Skipped', presentation: 'Skipped', status: 'Not done' },
        finalStatus: 'In progress',
        remark: 'Sanju ma\'am is mainly interested in this module. She won\'t review Preksha alone. Aiming to present Election Observer in the coming week while conveying the progress in Pithasin module',
        dependency: 'Dependency: Securing a sample of the device and testing it.\n\nPriyanka ji said, that Utkarsh sir should convey to Sanju ma\'am that dept will need to purchase 1 sample for quick development of the module.',
        clientReviewPoints: [
            '✓ "Matdan Khojein" shouldn\'t be clickable until "Matdan ke dauran ki jankariyan" is filled (Done)',
            '✓ Prapatra 14 is replaced with prapatra 17 (क) and Prapatra 15 with prapatra 18 (क) (Done)',
            '✓ Highlighted "Search bar" in "Matdan Khojein" (Done)',
            '✓ Reports saved in a folder on Desktop (Implemented)',
            '✓ Reports signed with DSC (Implemented)'
        ],
        documentation: { processFlow: 'Pending', userManual: 'Pending', conceptNote: '-' },
        team: ['Mahaveer'],
        timeNeeded: '2 days',
        userTypes: [
            {
                name: 'Presiding Officer',
                categories: [
                    {
                        name: 'मतदान से पूर्व की जानकारियां',
                        pages: [
                            { name: 'मतदान से पूर्व की जानकारियां', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: 'Copy change in Login and dashboard screen. Communicated to the Dev. Fingerprint cum signature hardware identified and details shared with Nupur sir.', status: 'In progress' }, changeRequest: null },
                            { name: 'मतदान दल की जानकारी', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'निर्वाचन क्षेत्र एवं वार्ड की जानकारी', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'मतदान दल द्वारा प्राप्त सामग्री की जानकारी', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'अभिकर्ताओं की जानकारी', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'अभ्यर्थी और उनके अभिकर्ताओं की जानकारी', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null }
                        ]
                    },
                    {
                        name: 'मतदान के दौरान की जानकारियां',
                        pages: [
                            { name: 'मतदान के दौरान की जानकारियां', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'दिखावटी मतदान (मॉकपोल) प्रमाणपत्र', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'मतदान आरम्भ होने के पूर्व की घोषणा', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'पश्चातवर्ती ई.वी.एम. के लिए दिखावटी मतदान (मॉकपोल) प्रमाणपत्र', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'पश्चातवर्ती ई.वी.एम. के उपयोग की घोषणा', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'विजिट शीट', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'अभ्याक्षेपित मतों की सूची', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'अंधे/शिथिलांग मतदाता के साथी द्वारा घोषणापत्र', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'निर्वाचन अपराध की जानकारी - शिकायत एवं त्रुटियों, महत्वपूर्ण घटना, मतदान में बाधा से संबंधित', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'अभ्याक्षेप के लिए जमा की गई राशि की रसीद', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'थाना प्रभारी को भेजी जाने वाली लिखित शिकायत का प्रारूप', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'मतदान / मतगणना के स्थगन की सूचना का प्रारूप', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null }
                        ]
                    },
                    {
                        name: 'मतदाता खोजे',
                        pages: [
                            { 
                                name: 'मतदाता खोजे', 
                                dynamicDev: 'Done', 
                                internalReview: { review: 'No issues', status: 'Done' }, 
                                clientReview: { review: 'Search bar highlighted. Clickability restricted until "मतदान के दौरान की जानकारियां" is filled.', status: 'Approved' }, 
                                changeRequest: { details: 'Restrict access until mandatory form is filled and highlight search UI', devStatus: 'Done', clientReview: 'Approved', approval: 'Done' } 
                            }
                        ]
                    },
                    {
                        name: 'मतदाता रजिस्टर',
                        pages: [
                            { name: 'मतदाता रजिस्टर', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'प्रारूप 17 (क)', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: 'Label updated from प्रारूप 14-क', status: 'Approved' }, changeRequest: null },
                            { name: 'मतदान न करने वाले मतदाताओं हेतु टिप्पणी दर्ज करें', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null }
                        ]
                    },
                    {
                        name: 'मतदान समाप्ति',
                        pages: [
                            { name: 'मतदान समाप्ति', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null }
                        ]
                    },
                    {
                        name: 'मतदान समाप्ति के पश्चात की जानकारियां',
                        pages: [
                            { 
                                name: 'मतदान समाप्ति के पश्चात की जानकारियां', 
                                dynamicDev: 'Done', 
                                internalReview: { review: 'No issues', status: 'Done' }, 
                                clientReview: { review: 'All reports now support DSC and are saved in a Desktop folder.', status: 'Approved' }, 
                                changeRequest: { details: 'Add DSC to reports and implement saving to Desktop folder', devStatus: 'Done', clientReview: 'Approved', approval: 'Done' } 
                            },
                            { name: 'मतदान मशीन(ई.वी.एम.) को मोहरबंद करने के पश्चात की घोषणा', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'मतदान से सम्बंधित महत्वपूर्ण जानकारी', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'प्रारूप-18क(अभिलिखित मतों का लेखा)', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: 'Label updated from प्रारूप 15-क', status: 'Approved' }, changeRequest: null },
                            { name: 'अभिलिखित मतों के लेखा की पावती', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'मतपत्र लेखा की पावती', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null },
                            { name: 'निविदत्त मतपत्रों की सूची', dynamicDev: 'Done', internalReview: { review: 'No issues', status: 'Done' }, clientReview: { review: '-', status: '-' }, changeRequest: null }
                        ]
                    }
                ]
            }
        ]
    },

    evm: {
        id: 'evm',
        name: 'EVM Tracking & Management',
        icon: ICONS.evm,
        color: '#06b6d4',
        requirementGathering: 'Done',
        staticScreens: { creation: 'Done', presentation: 'Done', status: 'Reviewed internally' },
        finalStatus: 'In progress',
        remark: 'Got the requirement from Mukul Gupta (DySecretary). The app needs to go live by Monday',
        dependency: '',
        clientReviewPoints: [],
        documentation: { processFlow: '-', userManual: '-', conceptNote: '-' },
        team: [],
        timeNeeded: '2 days',
        userTypes: [
            {
                name: 'Admin',
                categories: [
                    {
                        name: 'User Management',
                        pages: [
                            {
                                name: 'User Management',
                                dynamicDev: 'In Progress',
                                internalReview: { review: '-', status: '-' },
                                clientReview: { review: '-', status: '-' },
                                changeRequest: null
                            }
                        ]
                    }
                ]
            },
            {
                name: 'DEO (within MP)',
                categories: [
                    {
                        name: 'Scanning',
                        pages: [
                            {
                                name: 'Scan and stock',
                                dynamicDev: 'In Progress',
                                internalReview: { review: '-', status: '-' },
                                clientReview: { review: '-', status: '-' },
                                changeRequest: null
                            }
                        ]
                    }
                ]
            },
            {
                name: 'DEO (Other States)',
                categories: [
                    {
                        name: 'Scanning',
                        pages: [
                            {
                                name: 'Scan and Send',
                                dynamicDev: 'In Progress',
                                internalReview: { review: '-', status: '-' },
                                clientReview: { review: '-', status: '-' },
                                changeRequest: null
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

// ============================================
// TEAM REVIEW DATA
// ============================================
const TEAM_REVIEW_DATA = [
    {
        developer: 'Ashmit',
        l1Review: 'Done',
        l2Ind: '2/2',
        unitTesting: '4/5',
        coordination: '5/5',
        ownership: '5/5',
        accountability: '5/5',
        taskFilled: '19/21',
        utilization: '90%',
        remark: "There were a couple of days when the dev's utilization was not 100% as only simple review points were being implemented in Samadhan. However, now with Sugamta, the he has clear requirements to stay completely occupied for at least 2 weeks."
    },
    {
        developer: 'Jay malviya',
        l1Review: 'Done',
        l2Ind: '2/2',
        unitTesting: '4/5',
        coordination: '5/5',
        ownership: '5/5',
        accountability: '5/5',
        taskFilled: '19/21',
        utilization: '90%',
        remark: 'There were a couple of days before I personally started reviewed Preksha, there was not sufficient work to keep him completely occupied. However, I would like to highlight that during that time Jay voluntarily went for the L2 review. Now with the new requirement of "Candidate\'s" expenditure, he\'ll be entirely occupied for at least 8-10 days. Another, plus point with him is that he\'s willing to understand the entire flow of the module rather than just focusing on the assigned pages'
    },
    {
        developer: 'Kapil Nagar',
        l1Review: 'Done',
        l2Ind: '1/2',
        unitTesting: '5/5',
        coordination: '5/5',
        ownership: '5/5',
        accountability: '5/5',
        taskFilled: '17/19',
        utilization: '100%',
        remark: 'It\'s worth pointing out that in order to simplify the Candidate\'s form in "Expenditure" module - Kapil went out of his way to create a version all by himself without any help.'
    },
    {
        developer: 'Nayan Lakhra',
        l1Review: 'Done',
        l2Ind: '0/2',
        unitTesting: '-',
        coordination: '-',
        ownership: '-',
        accountability: '-',
        taskFilled: '1/1',
        utilization: '100%',
        remark: "Recently joined the IEMS team. So far all good with him. Need to spend more time with him in order to leave a remark. L2 review doesn't apply for him in IEMS project"
    },
    {
        developer: 'Arjun Kushwah',
        l1Review: 'Done',
        l2Ind: '1/2',
        unitTesting: '3/5',
        coordination: '5/5',
        ownership: '5/5',
        accountability: '5/5',
        taskFilled: '20/21',
        utilization: '100%',
        remark: 'Quick exection but can improve on Unit testing'
    },
    {
        developer: 'Mahaveer Sisodiya',
        l1Review: 'Done',
        l2Ind: '1/2',
        unitTesting: '5/5',
        coordination: '5/5',
        ownership: '5/5',
        accountability: '5/5',
        taskFilled: '16/17',
        utilization: '100%',
        remark: 'Exceptional as always'
    }
];

// ============================================
// DATA PERSISTENCE & LOAD
// ============================================
let MODULES = DEFAULT_MODULES;
try {
    const savedData = localStorage.getItem('project_dashboard_modules');
    if (savedData) {
        MODULES = JSON.parse(savedData);
        // Force up-to-date SVG icons and color schemes from our presets
        for (const mid in MODULES) {
            if (ICONS[mid]) {
                MODULES[mid].icon = ICONS[mid];
            }
            if (EXISTING_VISUALS[mid]) {
                MODULES[mid].color = EXISTING_VISUALS[mid].color;
            }
        }
    }
} catch (e) {
    console.error('Error loading data from localStorage', e);
}

// ============================================
// HELPER FUNCTIONS
// ============================================
function getStatusBadge(status) {
    if (!status || status === '-' || status === '') return '<span class="status-badge status-na">—</span>';
    const s = status.toLowerCase().trim();
    if (s === 'done' || s === 'fixed' || s.startsWith('done')) return `<span class="status-badge status-done">✓ ${status}</span>`;
    if (s === 'approved' || s.startsWith('approved')) return `<span class="status-badge status-approved">✓ ${status}</span>`;
    if (s.includes('in progress') || s.includes('in progress') || s === 'in progress') return `<span class="status-badge status-progress">◐ ${status}</span>`;
    if (s.includes('pending') || s.includes('pending to be reviewed')) return `<span class="status-badge status-pending">◷ ${status}</span>`;
    if (s.includes('not done') || s.includes('not started') || s.includes('not started yet')) return `<span class="status-badge status-not-done">✗ ${status}</span>`;
    if (s.includes('skipped')) return `<span class="status-badge status-skipped">⊘ ${status}</span>`;
    if (s.includes('bug')) return `<span class="status-badge status-bug">⚠ Bug</span>`;
    if (s.includes('reviewed internally')) return `<span class="status-badge status-done">✓ ${status}</span>`;
    if (s.includes('project setup')) return `<span class="status-badge status-progress">◐ ${status}</span>`;
    return `<span class="status-badge status-progress">${status}</span>`;
}

function getPageDotColor(status) {
    if (!status || status === '-') return 'var(--color-na)';
    const s = status.toLowerCase();
    if (s === 'done') return 'var(--color-done)';
    if (s.includes('in progress') || s.includes('project setup')) return 'var(--color-progress)';
    if (s.includes('pending')) return 'var(--color-pending)';
    if (s.includes('not done')) return 'var(--color-not-done)';
    return 'var(--color-na)';
}

function countPages(mod) {
    let count = 0;
    mod.userTypes.forEach(ut => {
        ut.categories.forEach(cat => {
            count += cat.pages.length;
        });
    });
    return count;
}

function countDonePages(mod) {
    let count = 0;
    mod.userTypes.forEach(ut => {
        ut.categories.forEach(cat => {
            cat.pages.forEach(p => {
                if (p.dynamicDev && p.dynamicDev.toLowerCase() === 'done') count++;
            });
        });
    });
    return count;
}

function calculateUserTypeProgress(ut) {
    let total = 0;
    let done = 0;
    ut.categories.forEach(cat => {
        cat.pages.forEach(p => {
            total++;
            if (p.dynamicDev && p.dynamicDev.toLowerCase() === 'done') {
                done++;
            }
        });
    });
    return {
        total,
        done,
        percent: total > 0 ? Math.round((done / total) * 100) : 0
    };
}

function countClientReviewPoints(mod) {
    let count = 0;
    mod.userTypes.forEach(ut => {
        ut.categories.forEach(cat => {
            cat.pages.forEach(p => {
                const r = (p.clientReview && p.clientReview.review) ? p.clientReview.review.trim() : '';
                if (r !== '' && r !== '-' && r.toLowerCase() !== 'none' && r.toLowerCase() !== 'no issues') {
                    count++;
                }
            });
        });
    });
    return count;
}

function countCRs(mod) {
    let count = 0;
    mod.userTypes.forEach(ut => {
        ut.categories.forEach(cat => {
            cat.pages.forEach(p => {
                if (p.changeRequest && p.changeRequest.details && p.changeRequest.details !== 'None' && p.changeRequest.details !== '-') count++;
            });
        });
    });
    return count;
}

function getAvatarColor(name) {
    const colors = ['#6366f1', '#10b981', '#f59e0b', '#f43f5e', '#06b6d4', '#8b5cf6', '#ec4899', '#14b8a6'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return colors[Math.abs(hash) % colors.length];
}

function getInitials(name) {
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

// ============================================
// STATE
// ============================================
let currentModule = null;
let currentTab = 'overview';

// ============================================
// RENDER LANDING PAGE
// ============================================
function renderLanding() {
    const grid = document.getElementById('modules-grid');
    grid.innerHTML = '';

    Object.values(MODULES).forEach((mod, i) => {
        const totalPages = countPages(mod);
        const donePages = countDonePages(mod);
        const progress = totalPages > 0 ? Math.round((donePages / totalPages) * 100) : 0;
        const crs = countCRs(mod);
        const reviewPts = countClientReviewPoints(mod);

        const card = document.createElement('div');
        card.className = 'module-card';
        card.style.setProperty('--accent', mod.color);
        card.style.setProperty('--accent-glow', mod.color + '40');
        card.style.animationDelay = `${i * 0.1}s`;
        card.onclick = () => showModule(mod.id);
        card.id = `module-card-${mod.id}`;

        card.innerHTML = `
            <div class="card-accent"></div>
            <div class="card-header">
                <div class="card-icon">${ICONS[mod.id] || mod.icon}</div>
                ${getStatusBadge(mod.finalStatus)}
            </div>
            <div class="card-title">${mod.name}</div>
            <div class="card-desc">${mod.userTypes.length} user type${mod.userTypes.length > 1 ? 's' : ''} · ${totalPages} pages · ${mod.team.length} team member${mod.team.length !== 1 ? 's' : ''}</div>
            <div class="card-stats">
                <div class="stat-item">
                    <div class="stat-value">${totalPages}</div>
                    <div class="stat-label">Pages</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${donePages}</div>
                    <div class="stat-label">Done</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${reviewPts}</div>
                    <div class="stat-label">Reviews</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${crs}</div>
                    <div class="stat-label">CRs</div>
                </div>
            </div>
            <div class="card-progress">
                ${mod.userTypes.map((ut, idx) => {
                    const utProgress = calculateUserTypeProgress(ut);
                    return `
                        <div class="user-type-progress-item" style="margin-bottom: ${idx === mod.userTypes.length - 1 ? '0' : '0.6rem'};">
                            <div class="progress-bar" style="height: 5px;">
                                <div class="progress-fill" style="width: ${utProgress.percent}%; background: linear-gradient(90deg, ${mod.color}, ${mod.color}99)"></div>
                            </div>
                            <div class="progress-label" style="margin-top: 0.25rem; display: flex; justify-content: space-between;">
                                <span>${ut.name} Progress</span>
                                <span>${utProgress.percent}%</span>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
            <div class="card-footer">
                <div class="team-avatars">
                    ${mod.team.slice(0, 4).map(name => `<div class="team-avatar" style="background: ${getAvatarColor(name)}" title="${name}">${getInitials(name)}</div>`).join('')}
                    ${mod.team.length > 4 ? `<div class="team-avatar" style="background: #374151">+${mod.team.length - 4}</div>` : ''}
                    ${mod.team.length === 0 ? '<span style="font-size:0.72rem;color:var(--text-muted)">Not assigned</span>' : ''}
                </div>
                <div class="time-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    ${mod.timeNeeded}
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// ============================================
// RENDER MODULE DETAIL
// ============================================
function showModule(moduleId) {
    currentModule = MODULES[moduleId];
    currentTab = 'overview';

    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('detail-page').classList.remove('hidden');
    document.getElementById('team-page').classList.add('hidden');
    document.getElementById('back-btn').classList.remove('hidden');
    document.getElementById('page-title').classList.add('hidden');

    renderDetailHeader();
    renderTabs();
    renderTabContent();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showLanding() {
    currentModule = null;
    renderLanding();
    document.getElementById('landing-page').classList.remove('hidden');
    document.getElementById('detail-page').classList.add('hidden');
    document.getElementById('team-page').classList.add('hidden');
    document.getElementById('back-btn').classList.add('hidden');
    document.getElementById('page-title').classList.remove('hidden');
}

function showTeamReview() {
    currentModule = null;
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('detail-page').classList.add('hidden');
    document.getElementById('team-page').classList.remove('hidden');
    document.getElementById('back-btn').classList.remove('hidden');
    document.getElementById('page-title').classList.add('hidden');
    renderTeamReview();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderTeamReview(targetId = 'team-page-content') {
    const container = document.getElementById(targetId);
    
    let html = '<div class="dev-review-grid" style="padding-bottom: 0.5rem; align-items: stretch;">';
    
    TEAM_REVIEW_DATA.forEach(dev => {
        let avatarColor = getAvatarColor(dev.developer);
        let initials = getInitials(dev.developer);
        
        let unitTestColor = dev.unitTesting === '5/5' ? 'var(--color-done)' : (dev.unitTesting === '-' ? 'var(--text-muted)' : 'var(--color-progress)');
        let coordColor = dev.coordination === '5/5' ? 'var(--color-done)' : (dev.coordination === '-' ? 'var(--text-muted)' : 'var(--color-progress)');
        let ownColor = dev.ownership === '5/5' ? 'var(--color-done)' : (dev.ownership === '-' ? 'var(--text-muted)' : 'var(--color-progress)');
        let accColor = dev.accountability === '5/5' ? 'var(--color-done)' : (dev.accountability === '-' ? 'var(--text-muted)' : 'var(--color-progress)');
        
        // Parse tasks "19/21" -> progress bar
        let taskProgress = 0;
        let taskFilledStr = dev.taskFilled || '0/0';
        let parts = taskFilledStr.split('/');
        if (parts.length === 2 && parseInt(parts[1]) > 0) {
            taskProgress = Math.round((parseInt(parts[0]) / parseInt(parts[1])) * 100);
        }
        
        let utilProgress = 0;
        if (dev.utilization && dev.utilization.includes('%')) {
            utilProgress = parseInt(dev.utilization.replace('%', ''));
        }
        
        html += `
        <div class="dev-review-card">
            <div class="dev-card-header">
                <div class="dev-avatar" style="background: ${avatarColor}">${initials}</div>
                <div class="dev-info">
                    <div class="dev-name">${dev.developer}</div>
                    <div class="dev-role">Developer</div>
                </div>
                <div class="dev-utilization">
                    <div class="util-val" style="color: ${utilProgress === 100 ? 'var(--color-done)' : 'var(--color-progress)'}">${dev.utilization}</div>
                    <div class="util-label">Utilization</div>
                </div>
            </div>
            
            <div class="dev-metrics-grid" style="grid-template-columns: repeat(2, 1fr);">
                <div class="dev-metric">
                    <span class="m-label">L1 Review</span>
                    <span class="m-val ${dev.l1Review === 'Done' ? 'm-done' : ''}">${dev.l1Review || '-'}</span>
                </div>
                <div class="dev-metric">
                    <span class="m-label">L2 Individual</span>
                    <span class="m-val">${dev.l2Ind || '-'}</span>
                </div>
            </div>
            
            <div class="dev-bars-section">
                <div class="dev-bar-item">
                    <div class="db-header">
                        <span class="db-label">Unit Testing</span>
                        <span class="db-val" style="color: ${unitTestColor}">${dev.unitTesting}</span>
                    </div>
                </div>
                <div class="dev-bar-item">
                    <div class="db-header">
                        <span class="db-label">Coordination</span>
                        <span class="db-val" style="color: ${coordColor}">${dev.coordination}</span>
                    </div>
                </div>
                <div class="dev-bar-item">
                    <div class="db-header">
                        <span class="db-label">Ownership</span>
                        <span class="db-val" style="color: ${ownColor}">${dev.ownership}</span>
                    </div>
                </div>
                <div class="dev-bar-item">
                    <div class="db-header">
                        <span class="db-label">Accountability</span>
                        <span class="db-val" style="color: ${accColor}">${dev.accountability}</span>
                    </div>
                </div>
                
                <div class="dev-progress-item">
                    <div class="dp-header">
                        <span class="dp-label">Tasks Filled</span>
                        <span class="dp-val">${dev.taskFilled}</span>
                    </div>
                    <div class="dp-track">
                        <div class="dp-fill" style="width: ${taskProgress}%"></div>
                    </div>
                </div>
            </div>
            
            <div class="dev-remark">
                <div class="rem-title"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg> Remark</div>
                <div class="rem-body" style="font-size: 0.85rem; line-height: 1.4;">${dev.remark ? dev.remark : '<em>No remarks provided.</em>'}</div>
            </div>
        </div>
        `;
    });
    
    html += '</div>';

    // Append Personal Footnote about Task Quality / API checking
    html += `
    <div style="max-width: 1200px; margin: 1rem auto 0; padding: 1rem 1.5rem; border-radius: 8px; background: rgba(0,0,0,0.03); border-left: 4px solid var(--border-subtle);">
        <p style="color: var(--text-secondary); font-size: 0.85rem; line-height: 1.5; margin: 0; font-style: italic;">
            <strong style="color: var(--text-primary);">Note:</strong> Regarding the "Quality of the tasks filled", I don't think I'm best fit when it comes to understanding the technical explanations mentioned in the "remark" in the portal. 
            The best I can do is ask the developers to share a screenshot of the frontend so that I can verify the changes/additions done. 
            For the Backend, "Akash" once mentioned a tool that can check if APIs are working as per the task assigned or not.
        </p>
    </div>
    `;

    container.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDetailHeader() {
    const mod = currentModule;
    const totalPages = countPages(mod);
    const donePages = countDonePages(mod);
    const crs = countCRs(mod);

    document.getElementById('detail-header').innerHTML = `
        <div class="detail-module-icon" style="background: ${mod.color}15; color: ${mod.color}; border: 1px solid ${mod.color}30">${ICONS[mod.id] || mod.icon}</div>
        <div class="detail-info">
            <div class="detail-title">${mod.name}</div>
            <div class="detail-meta">
                <div class="meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    ${mod.userTypes.length} User Types
                </div>
                <div class="meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    ${totalPages} Pages
                </div>
                <div class="meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    ${mod.timeNeeded}
                </div>
            </div>
        </div>
        <div class="detail-summary-cards">
            <div class="summary-card">
                <div class="sc-label">Status</div>
                <div class="sc-value">${getStatusBadge(mod.finalStatus)}</div>
            </div>
            <div class="summary-card">
                <div class="sc-label">Done</div>
                <div class="sc-value" style="color: var(--color-done)">${donePages}/${totalPages}</div>
            </div>
            <div class="summary-card">
                <div class="sc-label">Change Req.</div>
                <div class="sc-value" style="color: var(--color-progress)">${crs}</div>
            </div>
        </div>
    `;
}

function renderTabs() {
    const tabs = [
        { id: 'overview', label: 'Overview', icon: '📋' },
        { id: 'development', label: 'Dynamic Development', icon: '⚡' },
        { id: 'review', label: 'Review', icon: '🔍' },
        { id: 'changes', label: 'Change Requests', icon: '🔄', count: countCRs(currentModule) },
        { id: 'documentation', label: 'Documentation', icon: '📄' },
        { id: 'team', label: 'Team', icon: '👥', count: currentModule.team.length }
    ];

    document.getElementById('tabs-nav').innerHTML = tabs.map(tab => `
        <button class="tab-btn ${currentTab === tab.id ? 'active' : ''}" onclick="switchTab('${tab.id}')" id="tab-${tab.id}">
            ${tab.label}
            ${tab.count !== undefined ? `<span class="tab-count">${tab.count}</span>` : ''}
        </button>
    `).join('');
}

function switchTab(tabId) {
    currentTab = tabId;
    renderTabs();
    renderTabContent();
}

function renderTabContent() {
    const container = document.getElementById('tab-content');
    container.innerHTML = '';

    switch (currentTab) {
        case 'overview': renderOverview(container); break;
        case 'development': renderDevelopment(container); break;
        case 'review': renderReview(container); break;
        case 'changes': renderChanges(container); break;
        case 'documentation': renderDocumentation(container); break;
        case 'team': renderTeam(container); break;
    }
}

// ============================================
// TAB RENDERERS
// ============================================

function renderOverview(container) {
    const mod = currentModule;

    let html = `<div class="overview-grid">`;

    // Requirement Gathering
    html += `
        <div class="info-card">
            <div class="ic-header">
                <div class="ic-icon" style="background: rgba(99,102,241,0.12); color: #818cf8">📋</div>
                <div class="ic-title">Requirement Gathering</div>
            </div>
            <div class="ic-body">
                ${mod.requirementGathering.length > 20 
                    ? `<div style="font-size: 0.82rem; line-height: 1.5; color: var(--text-secondary);">${mod.requirementGathering.replace(/\n/g, '<br>')}</div>`
                    : `<p>${getStatusBadge(mod.requirementGathering)}</p>`}
            </div>
        </div>
    `;

    // Static Screens
    html += `
        <div class="info-card">
            <div class="ic-header">
                <div class="ic-icon" style="background: rgba(16,185,129,0.12); color: #34d399">🖥️</div>
                <div class="ic-title">Static Screens</div>
            </div>
            <div class="ic-body">
                <p><span class="label">Creation:</span> ${getStatusBadge(mod.staticScreens.creation)}</p>
                <p><span class="label">Presentation:</span> ${getStatusBadge(mod.staticScreens.presentation)}</p>
                <p><span class="label">Status:</span> ${getStatusBadge(mod.staticScreens.status)}</p>
            </div>
        </div>
    `;

    // Final Status
    html += `
        <div class="info-card">
            <div class="ic-header">
                <div class="ic-icon" style="background: rgba(245,158,11,0.12); color: #fbbf24">🎯</div>
                <div class="ic-title">Final Status</div>
            </div>
            <div class="ic-body">
                <p>${getStatusBadge(mod.finalStatus)}</p>
                <p style="margin-top:0.5rem"><span class="label">Time Estimate:</span> ${mod.timeNeeded}</p>
            </div>
        </div>
    `;

    // User Types Summary
    html += `
        <div class="info-card">
            <div class="ic-header">
                <div class="ic-icon" style="background: rgba(6,182,212,0.12); color: #22d3ee">👥</div>
                <div class="ic-title">User Types</div>
            </div>
            <div class="ic-body">
                ${mod.userTypes.map(ut => {
                    const utProgress = calculateUserTypeProgress(ut);
                    const timeStr = ut.timeNeeded && ut.timeNeeded !== '-' && ut.timeNeeded !== 'NA' ? ` • ${ut.timeNeeded}` : '';
                    return `
                        <div style="margin-bottom: 0.8rem;">
                            <div style="display:flex; justify-content:space-between; margin-bottom: 0.25rem; font-size: 0.8rem;">
                                <span>${ut.name}<span style="color:var(--text-muted); font-size:0.75rem;">${timeStr}</span></span>
                                <span class="label" style="font-weight: 500;">${utProgress.percent}% (${utProgress.done}/${utProgress.total} done)</span>
                            </div>
                            <div class="progress-bar" style="height: 4px; background: rgba(255, 255, 255, 0.04);">
                                <div class="progress-fill" style="width: ${utProgress.percent}%; background: linear-gradient(90deg, ${mod.color}, ${mod.color}99)"></div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    html += `</div>`;

    // Remarks
    if (mod.remark) {
        html += `
            <div class="alert-card alert-info" style="margin-bottom:1rem">
                <div class="alert-title">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    Remarks
                </div>
                <div class="alert-body">${mod.remark.replace(/\n/g, '<br>')}</div>
            </div>
        `;
    }

    // Dependencies
    if (mod.dependency) {
        html += `
            <div class="alert-card" style="margin-bottom:1rem">
                <div class="alert-title">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    Dependency / Blocker
                </div>
                <div class="alert-body">${mod.dependency.replace(/\n/g, '<br>')}</div>
            </div>
        `;
    }

    container.innerHTML = html;
}

function renderDevelopment(container) {
    const mod = currentModule;
    let html = `
        <div class="section-header">
            <div class="section-icon">⚡</div>
            <div>
                <div class="section-title">Dynamic Development Status</div>
                <div class="section-subtitle">Page-wise development progress across all user types</div>
            </div>
        </div>
    `;

    if (mod.projectSetup) {
        html += `
            <div class="project-setup-banner" style="margin-bottom: 1.5rem; padding: 1rem 1.25rem; background: var(--bg-card); border: 1px solid var(--border-accent); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; gap: 1rem; box-shadow: var(--shadow-sm);">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <span style="font-size: 1.25rem;">🚀</span>
                    <div>
                        <div style="font-weight: 600; color: var(--text-primary); font-size: 0.9rem;">Preliminary Project Setup</div>
                        <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.15rem;">Initial configuration, repository initialization, and repository setup tasks</div>
                    </div>
                </div>
                <div>
                    ${getStatusBadge(mod.projectSetup)}
                </div>
            </div>
        `;
    }

    html += `
        <div class="user-types-grid">
    `;

    mod.userTypes.forEach(ut => {
        const totalPages = ut.categories.reduce((s, c) => s + c.pages.length, 0);

        html += `
            <div class="user-type-group">
                <div class="user-type-header">
                    <div class="user-type-icon">${getInitials(ut.name)}</div>
                    <div class="user-type-name">${ut.name}</div>
                    <div class="user-type-count">${totalPages} pages</div>
                </div>
        `;

        ut.categories.forEach(cat => {
            html += `
                <div class="category-group">
                    <div class="category-label">${cat.name}</div>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Page</th>
                                <th class="text-center col-status">Development Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${cat.pages.map(page => `
                                <tr>
                                    <td>
                                        <div class="page-name">
                                            <div class="page-dot" style="background: ${getPageDotColor(page.dynamicDev)}"></div>
                                            ${page.name}
                                        </div>
                                    </td>
                                    <td class="text-center col-status">${getStatusBadge(page.dynamicDev)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        });

        html += `</div>`;
    });

    html += `</div>`;

    container.innerHTML = html;
}

function renderReview(container) {
    const mod = currentModule;
    let html = `
        <div class="section-header">
            <div class="section-icon">🔍</div>
            <div>
                <div class="section-title">Review Status</div>
                <div class="section-subtitle">Internal and client review progress for each page</div>
            </div>
        </div>
    `;

    // Module-level client review points
    if (mod.clientReviewPoints && mod.clientReviewPoints.length > 0) {
        html += `
            <div class="alert-card alert-info" style="margin-bottom:1.5rem">
                <div class="alert-title">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    Client Review Points (${mod.clientReviewPoints.length})
                </div>
                <div class="alert-body">
                    <ul style="margin:0.5rem 0 0 1.2rem; list-style: disc;">
                        ${mod.clientReviewPoints.map(pt => `<li style="margin-bottom:0.4rem">${pt}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    mod.userTypes.forEach(ut => {
        html += `
            <div class="user-type-group">
                <div class="user-type-header">
                    <div class="user-type-icon">${getInitials(ut.name)}</div>
                    <div class="user-type-name">${ut.name}</div>
                </div>
        `;

        ut.categories.forEach(cat => {
            html += `
                <div class="category-group">
                    <div class="category-label">${cat.name}</div>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Page</th>
                                <th class="col-review">Internal Review</th>
                                <th class="text-center col-status">Internal Status</th>
                                <th class="col-review">Client Review</th>
                                <th class="text-center col-status">Client Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${cat.pages.map(page => `
                                <tr>
                                    <td>
                                        <div class="page-name">
                                            <div class="page-dot" style="background: ${getPageDotColor(page.dynamicDev)}"></div>
                                            ${page.name}
                                        </div>
                                    </td>
                                    <td class="col-review">
                                        ${page.internalReview.review && page.internalReview.review !== '-' 
                                            ? `<div class="review-text">${page.internalReview.review}</div>` 
                                            : '<span class="status-badge status-na">—</span>'}
                                    </td>
                                    <td class="text-center col-status">${getStatusBadge(page.internalReview.status)}</td>
                                    <td class="col-review">
                                        ${page.clientReview.review && page.clientReview.review !== '-' 
                                            ? `<div class="review-text">${page.clientReview.review}</div>` 
                                            : '<span class="status-badge status-na">—</span>'}
                                    </td>
                                    <td class="text-center col-status">${getStatusBadge(page.clientReview.status)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        });

        html += `</div>`;
    });

    container.innerHTML = html;
}

function renderChanges(container) {
    const mod = currentModule;
    let html = `
        <div class="section-header">
            <div class="section-icon">🔄</div>
            <div>
                <div class="section-title">Change Requests & New Requirements</div>
                <div class="section-subtitle">All change requests and new requirements across pages</div>
            </div>
        </div>
    `;

    let hasCRs = false;

    mod.userTypes.forEach(ut => {
        ut.categories.forEach(cat => {
            cat.pages.forEach(page => {
                if (page.changeRequest && page.changeRequest.details && page.changeRequest.details !== 'None' && page.changeRequest.details !== '-') {
                    hasCRs = true;
                    html += `
                        <div class="cr-card">
                            <div class="cr-header">
                                <div class="cr-page">${page.name}</div>
                                <div class="cr-user-type">${ut.name} · ${cat.name}</div>
                            </div>
                            <div class="cr-details">${page.changeRequest.details}</div>
                            <div class="cr-statuses">
                                <div class="cr-status-item">
                                    <div class="cr-status-label">Development</div>
                                    ${getStatusBadge(page.changeRequest.devStatus)}
                                </div>
                                <div class="cr-status-item">
                                    <div class="cr-status-label">Client Review</div>
                                    ${getStatusBadge(page.changeRequest.clientReview)}
                                </div>
                                <div class="cr-status-item">
                                    <div class="cr-status-label">Approval</div>
                                    ${getStatusBadge(page.changeRequest.approval)}
                                </div>
                            </div>
                        </div>
                    `;
                }
            });
        });
    });

    if (!hasCRs) {
        html += `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                <p>No change requests for this module</p>
            </div>
        `;
    }

    container.innerHTML = html;
}

function renderDocumentation(container) {
    const mod = currentModule;

    let html = `
        <div class="section-header">
            <div class="section-icon">📄</div>
            <div>
                <div class="section-title">Documentation Status</div>
                <div class="section-subtitle">Process flow, user manual, and concept note status</div>
            </div>
        </div>
        <div class="doc-grid">
            <div class="doc-card">
                <div class="doc-icon" style="background: rgba(99,102,241,0.12); color: #818cf8">📊</div>
                <div class="doc-title">Process Flow</div>
                ${getStatusBadge(mod.documentation.processFlow)}
            </div>
            <div class="doc-card">
                <div class="doc-icon" style="background: rgba(16,185,129,0.12); color: #34d399">📖</div>
                <div class="doc-title">User Manual</div>
                ${getStatusBadge(mod.documentation.userManual)}
            </div>
            <div class="doc-card">
                <div class="doc-icon" style="background: rgba(245,158,11,0.12); color: #fbbf24">💡</div>
                <div class="doc-title">Concept Note</div>
                ${getStatusBadge(mod.documentation.conceptNote)}
            </div>
        </div>
    `;

    // Per user-type documentation if available (Samadhan DEO/RO have individual doc statuses)
    const docNotes = [];
    if (mod.id === 'samadhan') {
        docNotes.push({ userType: 'DEO', processFlow: 'Done', userManual: '-' });
        docNotes.push({ userType: 'RO', processFlow: 'Pending', userManual: '-' });
        docNotes.push({ userType: 'Admin', processFlow: 'Pending', userManual: '-' });
    }
    if (mod.id === 'expenditure') {
        docNotes.push({ userType: 'DEO', processFlow: 'Done', userManual: 'Done' });
        docNotes.push({ userType: 'Candidate', processFlow: 'Pending', userManual: 'Pending' });
    }

    if (docNotes.length > 0) {
        html += `
            <div class="section-header" style="margin-top:1.5rem">
                <div class="section-icon">📊</div>
                <div>
                    <div class="section-title">Per User-Type Documentation</div>
                </div>
            </div>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>User Type</th>
                        <th class="text-center col-status">Process Flow</th>
                        <th class="text-center col-status">User Manual</th>
                    </tr>
                </thead>
                <tbody>
                    ${docNotes.map(d => `
                        <tr>
                            <td>${d.userType}</td>
                            <td class="text-center col-status">${getStatusBadge(d.processFlow)}</td>
                            <td class="text-center col-status">${getStatusBadge(d.userManual)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    container.innerHTML = html;
}

function renderTeam(container) {
    const mod = currentModule;

    let html = `
        <div class="section-header">
            <div class="section-icon">👥</div>
            <div>
                <div class="section-title">Team Members</div>
                <div class="section-subtitle">Assigned developers and their tracking fields</div>
            </div>
        </div>
    `;

    if (mod.team.length === 0) {
        html += `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
                <p>No team members assigned yet</p>
            </div>
        `;
    } else {
        html += `<div class="team-grid">`;

        mod.team.forEach(member => {
            const color = getAvatarColor(member);
            html += `
                <div class="team-card">
                    <div class="team-card-header">
                        <div class="team-avatar-lg" style="background: ${color}">${getInitials(member)}</div>
                        <div>
                            <div class="team-name">${member}</div>
                            <div class="team-role">${mod.name} Developer</div>
                        </div>
                    </div>
                    <div class="team-fields">
                        <div class="team-field">
                            <span class="team-field-label">Office Discipline</span>
                            <span class="team-field-value status-badge status-na">Not Set</span>
                        </div>
                        <div class="team-field">
                            <span class="team-field-label">Quality of Work</span>
                            <span class="team-field-value status-badge status-na">Not Set</span>
                        </div>
                        <div class="team-field">
                            <span class="team-field-label">Code Review & Checklist</span>
                            <span class="team-field-value status-badge status-na">Not Set</span>
                        </div>
                        <div class="team-field">
                            <span class="team-field-label">Portal Task Status</span>
                            <span class="team-field-value status-badge status-na">Not Set</span>
                        </div>
                    </div>
                </div>
            `;
        });

        html += `</div>`;
    }

    container.innerHTML = html;
}

// ============================================
// HEADER STATS
// ============================================
function renderHeaderStats() {
    const totalModules = Object.keys(MODULES).length;
    let totalPages = 0;
    let donePagesAll = 0;

    Object.values(MODULES).forEach(mod => {
        totalPages += countPages(mod);
        donePagesAll += countDonePages(mod);
    });

    document.getElementById('header-stats').innerHTML = `
        <div class="header-stat">
            <div class="dot" style="background: var(--module-preksha)"></div>
            ${totalModules} Modules
        </div>
        <div class="header-stat">
            <div class="dot" style="background: var(--color-done)"></div>
            ${donePagesAll}/${totalPages} Pages Done
        </div>
    `;
}

// ============================================
// UPLOAD & PARSING IMPLEMENTATION
// ============================================

function openUploadModal() {
    document.getElementById('upload-modal').classList.add('active');
}

function closeUploadModal() {
    document.getElementById('upload-modal').classList.remove('active');
}

function initUploadListeners() {
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('file-input');

    if (!dropzone || !fileInput) return;

    // Trigger file input on click
    dropzone.addEventListener('click', () => {
        fileInput.click();
    });

    // Handle drag over/leave styling
    ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropzone.classList.add('dragover');
        }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropzone.classList.remove('dragover');
        }, false);
    });

    // Handle dropped file
    dropzone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files && files.length > 0) {
            handleFileUpload(files[0]);
        }
    });

    // Handle selected file
    fileInput.addEventListener('change', (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            handleFileUpload(files[0]);
        }
    });
}

function handleFileUpload(file) {
    if (!file) return;

    // Check file extension
    const name = file.name.toLowerCase();
    if (!name.endsWith('.xlsx') && !name.endsWith('.xls') && !name.endsWith('.csv')) {
        showToast('Please upload a valid Excel or CSV file (.xlsx, .xls, .csv)', 'error');
        return;
    }

    if (typeof XLSX === 'undefined') {
        showToast('SheetJS library not loaded. Please connect to the internet and try again.', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            
            const parsed = parseExcelToModules(workbook);
            
            if (Object.keys(parsed).length === 0) {
                showToast('No module data could be parsed from this file. Check the format.', 'error');
                return;
            }

            // Update global MODULES
            MODULES = parsed;
            localStorage.setItem('project_dashboard_modules', JSON.stringify(MODULES));
            
            // Re-render
            renderHeaderStats();
            showLanding();
            
            // Calculate statistics for the toast
            let moduleCount = Object.keys(parsed).length;
            let pageCount = 0;
            Object.values(parsed).forEach(m => {
                m.userTypes.forEach(ut => {
                    ut.categories.forEach(c => {
                        pageCount += c.pages.length;
                    });
                });
            });

            showToast(`Dashboard updated! Loaded ${moduleCount} modules and ${pageCount} pages.`, 'success');
            closeUploadModal();
        } catch (error) {
            console.error(error);
            showToast('Error reading or parsing file: ' + error.message, 'error');
        }
    };
    
    reader.onerror = function() {
        showToast('Error reading file.', 'error');
    };

    reader.readAsArrayBuffer(file);
}

function resetToDefault() {
    if (confirm('Are you sure you want to reset all data back to defaults? This will erase any uploaded spreadsheet updates.')) {
        localStorage.removeItem('project_dashboard_modules');
        MODULES = DEFAULT_MODULES;
        renderHeaderStats();
        showLanding();
        showToast('Reset dashboard data to hardcoded defaults.', 'success');
        closeUploadModal();
    }
}

// Helper: Parse comma/slash-separated team members
function parseTeam(val) {
    if (!val) return [];
    const str = val.toString().trim();
    if (str === '' || str === '-' || str.toLowerCase() === 'none') return [];
    
    // Split by comma, slash, and, semicolon
    const parts = str.split(/[,/\&;]|\band\b/i);
    return parts
        .map(p => p.trim())
        .filter(p => p !== '' && p !== '-');
}

// Helper: Map module names to IDs
function getModuleId(name) {
    const n = name.toLowerCase().trim();
    if (n.includes('preksha')) return 'preksha';
    if (n.includes('samadhan') || n.includes('grievance')) return 'samadhan';
    if (n.includes('expenditure') || n.includes('expense')) return 'expenditure';
    if (n.includes('sugamta') || n.includes('route')) return 'sugamta';
    if (n.includes('pithasin') || n.includes('polling') || n.includes('ipbms')) return 'ipbms';
    if (n.includes('evm')) return 'evm';
    
    // Fallback: slugify name
    return name.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

// Preset visuals map
const EXISTING_VISUALS = {
    preksha: { color: '#6366f1', icon: ICONS.preksha },
    samadhan: { color: '#10b981', icon: ICONS.samadhan },
    expenditure: { color: '#f59e0b', icon: ICONS.expenditure },
    sugamta: { color: '#f43f5e', icon: ICONS.sugamta },
    ipbms: { color: '#8b5cf6', icon: ICONS.ipbms },
    evm: { color: '#06b6d4', icon: ICONS.evm }
};

const PRESET_COLORS = ['#3b82f6', '#ec4899', '#14b8a6', '#f43f5e', '#8b5cf6', '#10b981', '#f59e0b', '#06b6d4'];
let colorIndex = 0;

function getVisuals(moduleId, name) {
    if (EXISTING_VISUALS[moduleId]) {
        return EXISTING_VISUALS[moduleId];
    }
    const color = PRESET_COLORS[colorIndex % PRESET_COLORS.length];
    colorIndex++;
    const icon = name.substring(0, 2).toUpperCase();
    return { color, icon };
}

// Heuristic: Check if row is a category header
function isCategoryHeader(row, colIdx) {
    const pageVal = (row[colIdx.pages] || '').toString().trim();
    if (!pageVal) return false;
    
    const devVal = (row[colIdx.dynamicDev] || '').toString().trim();
    const isEmptyOrHyphen = (val) => val === '' || val === '-';
    
    // Precise check for category names
    const pName = pageVal.toLowerCase();
    const categories = [
        'profile', 'main pages', 'reports', 'other pages', 'dashboard & management',
        'route planning', 'vehicle requisition', 'vehicle management', 'scanning',
        'registration', 'complaint management', 'user management', 'application & reports',
        'core'
    ];
    if (categories.some(cat => pName === cat || pName.startsWith(cat))) {
        return true;
    }
    
    const intRevVal = (row[colIdx.internalReviewReview] || '').toString().trim();
    const intStatusVal = (row[colIdx.internalReviewStatus] || '').toString().trim();
    const cliRevVal = (row[colIdx.clientReviewReview] || '').toString().trim();
    const cliStatusVal = (row[colIdx.clientReviewStatus] || '').toString().trim();
    
    const reqVal = (row[colIdx.reqGathering] || '').toString().trim();
    const finalVal = (row[colIdx.finalStatus] || '').toString().trim();
    
    // Category headers are typically blank in almost all other fields
    if (isEmptyOrHyphen(devVal) && isEmptyOrHyphen(intRevVal) && isEmptyOrHyphen(intStatusVal) && 
        isEmptyOrHyphen(cliRevVal) && isEmptyOrHyphen(cliStatusVal) && 
        isEmptyOrHyphen(reqVal) && isEmptyOrHyphen(finalVal)) {
        return true;
    }
    
    return false;
}

function parseTimeToDays(str) {
    if (!str) return [0, 0];
    const s = str.toString().toLowerCase().trim();
    const clean = s.replace(/[^a-z]/g, '');
    if (clean === '' || clean === 'na' || clean === 'none' || clean === 'notapplicable' || clean === 'notavailable') {
        return [0, 0];
    }
    const matches = s.match(/\d+/g);
    if (!matches || matches.length === 0) {
        return [0, 0];
    }
    if (matches.length >= 2) {
        const min = parseInt(matches[0], 10);
        const max = parseInt(matches[1], 10);
        return [min, max];
    } else {
        const val = parseInt(matches[0], 10);
        return [val, val];
    }
}

// Excel data parser
function parseExcelToModules(workbook) {
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });

    if (rows.length === 0) {
        throw new Error('Workbook sheet is empty');
    }

    // Find header row by scanning for "Pages"
    let headerRowIndex = -1;
    for (let r = 0; r < Math.min(rows.length, 10); r++) {
        const row = rows[r];
        if (row && row.some(cell => cell && cell.toString().toLowerCase().trim() === 'pages')) {
            headerRowIndex = r;
            break;
        }
    }

    if (headerRowIndex === -1) {
        headerRowIndex = 1; // Default fallback to index 1 (row 2 in excel)
    }

    // Default mapping (Columns A to W)
    let colIdx = {
        module: 0,
        userType: 1,
        pages: 2,
        reqGathering: 3,
        staticScreensCreation: 4,
        staticScreensPresentation: 5,
        staticScreensStatus: 6,
        dynamicDev: 7,
        internalReviewReview: 8,
        internalReviewStatus: 9,
        clientReviewReview: 10,
        clientReviewStatus: 11,
        crDetails: 12,
        crDevStatus: 13,
        crClientReview: 14,
        crApproval: 15,
        finalStatus: 16,
        remark: 17,
        dependency: 18,
        docProcessFlow: 19,
        docUserManual: 20,
        team: 21,
        timeNeeded: 22
    };

    // Generate combined headers to handle multi-row and merged group headers
    const row1 = rows[headerRowIndex] || [];
    const row2 = rows[headerRowIndex + 1] || [];
    const row3 = rows[headerRowIndex + 2] || [];
    const combinedHeaders = [];
    const maxCols = Math.max(row1.length, row2.length, row3.length);
    
    let group1 = '';
    let group2 = '';
    for (let c = 0; c < maxCols; c++) {
        const val1 = (row1[c] || '').toString().trim();
        if (val1 !== '') {
            group1 = val1;
            group2 = ''; // Reset group2 when a new group1 starts
        }
        const val2 = (row2[c] || '').toString().trim();
        if (val2 !== '') {
            group2 = val2;
        }
        const val3 = (row3[c] || '').toString().trim();
        
        let parts = [];
        if (group1) parts.push(group1);
        if (group2 && group2.toLowerCase() !== group1.toLowerCase()) parts.push(group2);
        if (val3 && val3.toLowerCase() !== (group2 || group1).toLowerCase()) parts.push(val3);
        
        combinedHeaders.push(parts.join(' ').toLowerCase().trim());
    }

    // Attempt to map headers based on keywords
    combinedHeaders.forEach((s, idx) => {
        if (s.includes('module')) colIdx.module = idx;
        else if (s.includes('user type') || s.includes('usertype')) colIdx.userType = idx;
        else if (s === 'pages' || s === 'page' || s.includes('page name')) colIdx.pages = idx;
        else if ((s.includes('requirement') || s.includes('requiement') || s.includes('requiemernt')) && !s.includes('change') && !s.includes('cr') && !s.includes('new') && !s.includes('approval')) colIdx.reqGathering = idx;
        else if (s.includes('static') && s.includes('creation')) colIdx.staticScreensCreation = idx;
        else if (s.includes('static') && s.includes('presentation')) colIdx.staticScreensPresentation = idx;
        else if (s.includes('static') && s.includes('status')) colIdx.staticScreensStatus = idx;
        else if (s.includes('dynamic') && !s.includes('status') && !s.includes('review') && !s.includes('detail') && !s.includes('approval') && !s.includes('cr')) colIdx.dynamicDev = idx;
        else if (s.includes('internal') && s.includes('review') && !s.includes('status') && !s.includes('change') && !s.includes('cr') && !s.includes('new') && !s.includes('approval')) colIdx.internalReviewReview = idx;
        else if (s.includes('internal') && s.includes('status') && !s.includes('change') && !s.includes('cr') && !s.includes('new') && !s.includes('approval')) colIdx.internalReviewStatus = idx;
        else if (s.includes('client') && s.includes('review') && !s.includes('status') && !s.includes('change') && !s.includes('cr') && !s.includes('new') && !s.includes('approval')) colIdx.clientReviewReview = idx;
        else if (s.includes('client') && s.includes('status') && !s.includes('change') && !s.includes('cr') && !s.includes('new') && !s.includes('approval')) colIdx.clientReviewStatus = idx;
        else if (s.includes('cr') && s.includes('detail')) colIdx.crDetails = idx;
        else if (s.includes('cr') && s.includes('dev')) colIdx.crDevStatus = idx;
        else if (s.includes('cr') && s.includes('client')) colIdx.crClientReview = idx;
        else if (s.includes('cr') && s.includes('approval')) colIdx.crApproval = idx;
        else if (s.includes('final') && s.includes('status')) colIdx.finalStatus = idx;
        else if (s.includes('remark')) colIdx.remark = idx;
        else if (s.includes('dependency') || s.includes('blocker')) colIdx.dependency = idx;
        else if (s.includes('process') && s.includes('flow')) colIdx.docProcessFlow = idx;
        else if (s.includes('user') && s.includes('manual')) colIdx.docUserManual = idx;
        else if (s.includes('team') || s.includes('developer') || s === 'dev') colIdx.team = idx;
        else if (s.includes('time') || s.includes('duration') || s.includes('need')) colIdx.timeNeeded = idx;
    });

    const parsedModules = {};
    const dataStartRowIndex = headerRowIndex + 3;
    let currentModuleName = '';
    let currentUserTypeName = '';
    let currentCategoryName = 'General';
    let lastUserTypeName = '';

    let inheritedProps = null;

    for (let r = dataStartRowIndex; r < rows.length; r++) {
        const row = rows[r];
        if (!row) continue;

        // Merged cells carrying forward values
        const moduleVal = row[colIdx.module];
        const userTypeVal = row[colIdx.userType];
        const pageVal = row[colIdx.pages];

        if (moduleVal && moduleVal.toString().trim() !== '') {
            currentModuleName = moduleVal.toString().trim();
        }
        if (userTypeVal && userTypeVal.toString().trim() !== '') {
            currentUserTypeName = userTypeVal.toString().trim();
        }

        const id = getModuleId(currentModuleName);
        if (!parsedModules[id]) {
            const visuals = getVisuals(id, currentModuleName);
            parsedModules[id] = {
                id: id,
                name: currentModuleName,
                icon: visuals.icon,
                color: visuals.color,
                requirementGathering: row[colIdx.reqGathering] || '-',
                staticScreens: {
                    creation: row[colIdx.staticScreensCreation] || '-',
                    presentation: row[colIdx.staticScreensPresentation] || '-',
                    status: row[colIdx.staticScreensStatus] || '-'
                },
                finalStatus: row[colIdx.finalStatus] || '-',
                remark: row[colIdx.remark] || '',
                dependency: row[colIdx.dependency] || '',
                clientReviewPoints: (MODULES[id] && MODULES[id].clientReviewPoints) ? [...MODULES[id].clientReviewPoints] : [],
                documentation: {
                    processFlow: row[colIdx.docProcessFlow] || '-',
                    userManual: row[colIdx.docUserManual] || '-',
                    conceptNote: '-'
                },
                team: parseTeam(row[colIdx.team]),
                timeNeeded: row[colIdx.timeNeeded] || '',
                userTypes: []
            };
        }

        const mod = parsedModules[id];

        // Update module level fields if they were '-' but now have values
        if (row[colIdx.reqGathering] && mod.requirementGathering === '-') mod.requirementGathering = row[colIdx.reqGathering];
        if (row[colIdx.staticScreensCreation] && mod.staticScreens.creation === '-') mod.staticScreens.creation = row[colIdx.staticScreensCreation];
        if (row[colIdx.staticScreensPresentation] && mod.staticScreens.presentation === '-') mod.staticScreens.presentation = row[colIdx.staticScreensPresentation];
        if (row[colIdx.staticScreensStatus] && mod.staticScreens.status === '-') mod.staticScreens.status = row[colIdx.staticScreensStatus];
        if (row[colIdx.finalStatus] && mod.finalStatus === '-') mod.finalStatus = row[colIdx.finalStatus];
        if (row[colIdx.remark] && mod.remark === '') mod.remark = row[colIdx.remark];
        if (row[colIdx.dependency] && mod.dependency === '') mod.dependency = row[colIdx.dependency];
        if (row[colIdx.docProcessFlow] && mod.documentation.processFlow === '-') mod.documentation.processFlow = row[colIdx.docProcessFlow];
        if (row[colIdx.docUserManual] && mod.documentation.userManual === '-') mod.documentation.userManual = row[colIdx.docUserManual];
        if (row[colIdx.timeNeeded] && mod.timeNeeded === '') mod.timeNeeded = row[colIdx.timeNeeded];

        const newTeam = parseTeam(row[colIdx.team]);
        newTeam.forEach(member => {
            if (!mod.team.includes(member)) mod.team.push(member);
        });

        // Project setup check
        if (pageVal) {
            const pageName = pageVal.toString().trim();
            if (pageName !== '' && pageName.toLowerCase() === 'project setup') {
                mod.projectSetup = row[colIdx.dynamicDev] || 'Not started';
                continue;
            }
        }

        if (!currentUserTypeName) {
            continue; // Skip until we have both contexts
        }

        // Find or create user type
        let ut = mod.userTypes.find(u => u.name === currentUserTypeName);
        if (!ut) {
            ut = {
                name: currentUserTypeName,
                reqGathering: row[colIdx.reqGathering] || '-',
                staticScreens: {
                    creation: row[colIdx.staticScreensCreation] || '-',
                    presentation: row[colIdx.staticScreensPresentation] || '-',
                    status: row[colIdx.staticScreensStatus] || '-'
                },
                timeNeeded: row[colIdx.timeNeeded] || '-',
                categories: []
            };
            mod.userTypes.push(ut);
        } else {
            if (row[colIdx.reqGathering] && ut.reqGathering === '-') ut.reqGathering = row[colIdx.reqGathering];
            if (row[colIdx.staticScreensCreation] && ut.staticScreens.creation === '-') ut.staticScreens.creation = row[colIdx.staticScreensCreation];
            if (row[colIdx.staticScreensPresentation] && ut.staticScreens.presentation === '-') ut.staticScreens.presentation = row[colIdx.staticScreensPresentation];
            if (row[colIdx.staticScreensStatus] && ut.staticScreens.status === '-') ut.staticScreens.status = row[colIdx.staticScreensStatus];
            if (row[colIdx.timeNeeded] && ut.timeNeeded === '-') ut.timeNeeded = row[colIdx.timeNeeded];
        }

        // Reset category if user type changes
        if (currentUserTypeName !== lastUserTypeName) {
            currentCategoryName = 'General';
            lastUserTypeName = currentUserTypeName;
        }

        if (!pageVal) continue;
        const pageName = pageVal.toString().trim();
        if (pageName === '') continue;

        // Category header detection
        if (isCategoryHeader(row, colIdx)) {
            currentCategoryName = pageName;
            
            // Check if the category header row accidentally contains data due to merged cells
            const devVal = (row[colIdx.dynamicDev] || '').toString().trim();
            if (devVal && devVal !== '-') {
                inheritedProps = row;
            }
            continue;
        }

        // Find or create category in this user type
        let cat = ut.categories.find(c => c.name === currentCategoryName);
        if (!cat) {
            cat = {
                name: currentCategoryName,
                pages: []
            };
            ut.categories.push(cat);
        }

        // Parse page properties
        const activeRow = inheritedProps || row;
        const page = {
            name: pageName,
            dynamicDev: activeRow[colIdx.dynamicDev] || (row[colIdx.dynamicDev] || '-'),
            internalReview: {
                review: activeRow[colIdx.internalReviewReview] || (row[colIdx.internalReviewReview] || '-'),
                status: activeRow[colIdx.internalReviewStatus] || (row[colIdx.internalReviewStatus] || '-')
            },
            clientReview: {
                review: activeRow[colIdx.clientReviewReview] || (row[colIdx.clientReviewReview] || '-'),
                status: activeRow[colIdx.clientReviewStatus] || (row[colIdx.clientReviewStatus] || '-')
            },
            changeRequest: null
        };

        const crDetails = (activeRow[colIdx.crDetails] || (row[colIdx.crDetails] || '')).toString().trim();
        if (crDetails && crDetails !== '-' && crDetails !== '') {
            page.changeRequest = {
                details: crDetails,
                devStatus: activeRow[colIdx.crDevStatus] || (row[colIdx.crDevStatus] || '-'),
                clientReview: activeRow[colIdx.crClientReview] || (row[colIdx.crClientReview] || '-'),
                approval: activeRow[colIdx.crApproval] || (row[colIdx.crApproval] || '-')
            };
        }

        inheritedProps = null;

        cat.pages.push(page);
    }

    // Filter out empty categories and calculate dynamic timeNeeded sums
    Object.values(parsedModules).forEach(mod => {
        mod.userTypes.forEach(ut => {
            ut.categories = ut.categories.filter(c => c.pages.length > 0);
        });

        // Sum user type time estimations
        let totalMin = 0;
        let totalMax = 0;
        let anyUserTypeTimeSet = false;

        mod.userTypes.forEach(ut => {
            if (ut.timeNeeded && ut.timeNeeded !== '-') {
                const [min, max] = parseTimeToDays(ut.timeNeeded);
                if (min > 0 || max > 0) {
                    totalMin += min;
                    totalMax += max;
                    anyUserTypeTimeSet = true;
                }
            }
        });

        if (anyUserTypeTimeSet) {
            if (totalMin === totalMax) {
                mod.timeNeeded = `${totalMin} day${totalMin !== 1 ? 's' : ''}`;
            } else {
                mod.timeNeeded = `${totalMin}-${totalMax} days`;
            }
        } else if (mod.timeNeeded === '' || mod.timeNeeded === '-') {
            mod.timeNeeded = 'NA';
        }
    });

    return parsedModules;
}

// Toast notification helper
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? '✓' : '⚠';
    
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-message">${message}</span>
    `;
    
    container.appendChild(toast);
    
    // Trigger entry transition
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Remove after 4s
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4000);
}

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderLanding();
    renderHeaderStats();
    initUploadListeners();
    startPresentationMode();
});

// ============================================
// PRESENTATION MODE STATE & HELPERS
// ============================================
let presentationMode = false;
let currentSlideIndex = 0;
const MODULE_ORDER = ['preksha', 'samadhan', 'expenditure', 'sugamta', 'ipbms', 'evm'];

function startPresentationMode() {
    // Directly boot into presentation mode without toggling
    presentationMode = true;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('presentation-active');
    const presPage = document.getElementById('presentation-page');
    const landingPage = document.getElementById('landing-page');
    const detailPage = document.getElementById('detail-page');
    const backBtn = document.getElementById('back-btn');
    const pageTitle = document.getElementById('page-title');
    const uploadBtn = document.getElementById('upload-btn');
    const btn = document.getElementById('pres-toggle-btn');
    if (landingPage) landingPage.classList.add('hidden');
    if (detailPage) detailPage.classList.add('hidden');
    if (backBtn) backBtn.classList.add('hidden');
    if (pageTitle) pageTitle.classList.remove('hidden');
    if (uploadBtn) uploadBtn.classList.add('hidden');
    if (btn) btn.style.display = 'none';
    if (presPage) presPage.classList.remove('hidden');
    currentSlideIndex = 0;
    renderSlide();
}

// Keyboard navigation listener
document.addEventListener('keydown', (e) => {
    if (!presentationMode) return;
    if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'Escape') {
        togglePresentationMode();
    }
});

function countInternalReviewPoints(mod) {
    let count = 0;
    mod.userTypes.forEach(ut => {
        ut.categories.forEach(cat => {
            cat.pages.forEach(p => {
                const r = (p.internalReview.review || '').trim();
                if (r !== '' && r !== '-' && r.toLowerCase() !== 'none' && r.toLowerCase() !== 'no issues') {
                    count++;
                }
            });
        });
    });
    return count;
}

function getInternalReviewStatus(mod) {
    let hasInProgress = false;
    let hasPending = false;
    let hasDone = false;
    let pointsCount = 0;
    
    mod.userTypes.forEach(ut => {
        ut.categories.forEach(cat => {
            cat.pages.forEach(p => {
                const r = (p.internalReview.review || '').trim();
                const s = (p.internalReview.status || '').toLowerCase().trim();
                
                if (r !== '' && r !== '-' && r.toLowerCase() !== 'none' && r.toLowerCase() !== 'no issues') {
                    pointsCount++;
                    if (s.includes('progress')) hasInProgress = true;
                    else if (s.includes('pending')) hasPending = true;
                    else if (s.includes('done') || s.includes('approved')) hasDone = true;
                }
            });
        });
    });
    
    if (pointsCount === 0) return 'Done';
    if (hasInProgress) return 'In Progress';
    if (hasPending) return 'Pending';
    if (hasDone) return 'Done';
    return 'In Progress';
}

function getClientReviewStatus(mod) {
    let hasInProgress = false;
    let hasPending = false;
    let hasDone = false;
    let pointsCount = 0;
    
    mod.userTypes.forEach(ut => {
        ut.categories.forEach(cat => {
            cat.pages.forEach(p => {
                const r = (p.clientReview && p.clientReview.review) ? p.clientReview.review.trim() : '';
                const s = (p.clientReview && p.clientReview.status) ? p.clientReview.status.trim().toLowerCase() : '';
                
                if (r !== '' && r !== '-' && r.toLowerCase() !== 'none' && r.toLowerCase() !== 'no issues') {
                    pointsCount++;
                    if (s.includes('progress')) hasInProgress = true;
                    else if (s.includes('pending')) hasPending = true;
                    else if (s.includes('done') || s.includes('approved')) hasDone = true;
                }
            });
        });
    });
    
    if (pointsCount === 0) return 'Done';
    if (hasInProgress) return 'In Progress';
    if (hasPending) return 'Pending';
    if (hasDone) return 'Approved';
    return 'In Progress';
}

function getStepStatus(mod, stepName) {
    // Sugamta overrides as explicitly requested: both show as in-progress
    if (mod.id === 'sugamta') {
        if (stepName === 'Requirement Gathering' || stepName === 'Static screens') {
            return 'in-progress';
        }
    }

    const finalDone = mod.finalStatus && mod.finalStatus.toLowerCase().trim() === 'done';
    
    switch (stepName) {
        case 'Requirement Gathering':
            const req = (mod.requirementGathering || '').toLowerCase().trim();
            if (req === 'done' || req.includes('complete')) return 'done';
            if (req.includes('progress') || req.includes('started')) return 'in-progress';
            return 'not-started';
        case 'Static screens':
            const sc = (mod.staticScreens.status || '').toLowerCase().trim();
            if (sc === 'skipped' || sc === 'not done' || sc === 'na') return 'skipped';
            if (sc === 'done' || sc.includes('complete') || sc.includes('reviewed') || sc.includes('approved')) return 'done';
            if (sc.includes('progress') || sc.includes('started') || sc.includes('partial')) return 'in-progress';
            return 'not-started';
        case 'Dynamic Development':
            const devTotal = countPages(mod);
            const devDone = countDonePages(mod);
            if (devTotal > 0 && devDone === devTotal) return 'done';
            if (devDone > 0) return 'in-progress';
            return 'not-started';
        case 'Internal review':
            let intTotal = 0;
            let intDoneCount = 0;
            let intNotStartedCount = 0;
            mod.userTypes.forEach(ut => {
                ut.categories.forEach(cat => {
                    cat.pages.forEach(p => {
                        intTotal++;
                        const s = (p.internalReview.status || '').toLowerCase().trim();
                        const r = (p.internalReview.review || '').toLowerCase().trim();
                        if (s === 'done' || s === 'fixed' || r === 'no issues') {
                            intDoneCount++;
                        } else if (s === '-' && (r === '-' || r === '')) {
                            intNotStartedCount++;
                        }
                    });
                });
            });
            if (intTotal > 0 && intDoneCount === intTotal) return 'done';
            if (intNotStartedCount === intTotal) return 'not-started';
            return 'in-progress';
        case 'Client review':
            let clTotal = 0;
            let clDoneCount = 0;
            let clNotStartedCount = 0;
            mod.userTypes.forEach(ut => {
                ut.categories.forEach(cat => {
                    cat.pages.forEach(p => {
                        clTotal++;
                        const s = (p.clientReview.status || '').toLowerCase().trim();
                        const r = (p.clientReview.review || '').toLowerCase().trim();
                        if (s === 'approved' || s === 'done') {
                            clDoneCount++;
                        } else if (s === '-' && (r === '-' || r === '')) {
                            clNotStartedCount++;
                        }
                    });
                });
            });
            if (clTotal > 0 && clDoneCount === clTotal) return 'done';
            if (clNotStartedCount === clTotal) return 'not-started';
            return 'in-progress';
        case 'QA':
            if (finalDone) return 'done';
            if (mod.id === 'preksha' || mod.id === 'samadhan') return 'in-progress';
            if (getStepStatus(mod, 'Client review') === 'done') return 'in-progress';
            return 'not-started';
        case 'Final Review':
            if (finalDone) return 'done';
            if (getStepStatus(mod, 'QA') === 'done') return 'in-progress';
            return 'not-started';
        case 'Security implementation':
            if (finalDone) return 'done';
            if (getStepStatus(mod, 'Final Review') === 'done') return 'in-progress';
            return 'not-started';
        case 'UAT':
            if (finalDone) return 'done';
            if (getStepStatus(mod, 'Security implementation') === 'done') return 'in-progress';
            return 'not-started';
        case 'Go Live':
            if (finalDone) return 'done';
            if (getStepStatus(mod, 'UAT') === 'done') return 'in-progress';
            return 'not-started';
        default:
            return 'not-started';
    }
}

function togglePresentationMode() {
    presentationMode = !presentationMode;
    const btn = document.getElementById('pres-toggle-btn');
    const presPage = document.getElementById('presentation-page');
    const landingPage = document.getElementById('landing-page');
    const detailPage = document.getElementById('detail-page');
    const backBtn = document.getElementById('back-btn');
    const pageTitle = document.getElementById('page-title');
    const uploadBtn = document.getElementById('upload-btn');

    if (presentationMode) {
        document.body.style.overflow = 'hidden';
        btn.innerHTML = '<span>📊 Dashboard Mode</span>';
        btn.style.background = 'rgba(16, 185, 129, 0.12)';
        btn.style.color = '#10b981';
        btn.style.borderColor = 'rgba(16, 185, 129, 0.25)';

        landingPage.classList.add('hidden');
        detailPage.classList.add('hidden');
        backBtn.classList.add('hidden');
        pageTitle.classList.remove('hidden');
        if (uploadBtn) uploadBtn.classList.add('hidden');
        presPage.classList.remove('hidden');

        // Context-aware slide index
        if (currentModule) {
            const idx = MODULE_ORDER.indexOf(currentModule.id);
            currentSlideIndex = idx !== -1 ? idx + 1 : 0;
        } else {
            currentSlideIndex = 0;
        }
        renderSlide();
    } else {
        document.body.style.overflow = '';
        btn.innerHTML = '<span>🎬 Presentation Mode</span>';
        btn.style.background = 'rgba(99, 102, 241, 0.12)';
        btn.style.color = '#4f46e5';
        btn.style.borderColor = 'rgba(99, 102, 241, 0.25)';

        presPage.classList.add('hidden');
        if (uploadBtn) uploadBtn.classList.remove('hidden');
        
        if (currentSlideIndex >= 1 && currentSlideIndex <= MODULE_ORDER.length) {
            const mid = MODULE_ORDER[currentSlideIndex - 1];
            showModule(mid);
        } else if (currentSlideIndex === MODULE_ORDER.length + 1) {
            showTeamReview();
        } else {
            showLanding();
        }
    }
}

function prevSlide() {
    if (!presentationMode) return;
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        renderSlide();
    }
}

function nextSlide() {
    if (!presentationMode) return;
    if (currentSlideIndex < MODULE_ORDER.length + 3) {
        currentSlideIndex++;
        renderSlide();
    }
}

function goToSlide(index) {
    if (!presentationMode) return;
    currentSlideIndex = index;
    renderSlide();
}

function renderSlide() {
    const container = document.getElementById('presentation-slide-container');
    const dotsContainer = document.getElementById('pres-dots');
    
    document.getElementById('pres-next-btn').disabled = (currentSlideIndex === MODULE_ORDER.length + 3);

    let dotsHtml = '';
    for (let i = 0; i <= MODULE_ORDER.length + 3; i++) {
        let title = '';
        let color = '';
        if (i === 0) {
            title = 'Overview';
            color = '#6366f1';
        } else if (i === MODULE_ORDER.length + 1) {
            title = 'Team Review';
            color = '#10b981';
        } else if (i === MODULE_ORDER.length + 2) {
            title = 'June Commitments';
            color = '#f59e0b';
        } else if (i === MODULE_ORDER.length + 3) {
            title = 'CMMI5 Readiness';
            color = '#ec4899';
        } else {
            title = MODULES[MODULE_ORDER[i-1]].name;
            color = MODULES[MODULE_ORDER[i-1]].color;
        }
        const style = i === currentSlideIndex ? `style="background: ${color}; opacity: 1; transform: scale(1.3);"` : '';
        dotsHtml += `<div class="pres-dot ${i === currentSlideIndex ? 'active' : ''}" ${style} onclick="goToSlide(${i})" title="${title}"></div>`;
    }
    dotsContainer.innerHTML = dotsHtml;

    if (currentSlideIndex === 0) {
        let html = `
            <div class="landing-hero" style="padding: 1rem 0 2rem;">
                <h2 class="hero-title" style="font-size: 2rem;">IEMS Modules</h2>
                <p class="hero-subtitle">High-level executive status overview across all systems</p>
            </div>
            <div class="pres-grid">
        `;

        MODULE_ORDER.forEach((mid, idx) => {
            const mod = MODULES[mid];
            if (!mod) return;
            const totalPages = countPages(mod);
            const donePages = countDonePages(mod);
            const progress = totalPages > 0 ? Math.round((donePages / totalPages) * 100) : 0;
            const internalPts = countInternalReviewPoints(mod);
            const internalStatus = getInternalReviewStatus(mod);
            const clientPts = countClientReviewPoints(mod);
            const clientStatus = getClientReviewStatus(mod);

            html += `
                <div class="new-pres-card" onclick="goToSlide(${idx + 1})" style="border-left: 5px solid ${mod.color}">
                    <div class="pres-card-header" style="border: none; padding-bottom: 0;">
                        <div class="pres-card-title" style="font-size: 1.4rem; font-weight: 800; color: var(--text-primary);">${mod.name}</div>
                        <div class="detail-module-icon" style="background: ${mod.color}15; color: ${mod.color}; border: 1px solid ${mod.color}25; width: 36px; height: 36px; font-size: 1.1rem; margin: 0; line-height: 1;">${ICONS[mid] || mod.icon}</div>
                    </div>
                    <div class="new-pres-card-grid">
                        <div class="new-kpi-box">
                            <div class="new-kpi-label">PAGES DONE</div>
                            <div class="new-kpi-val" style="color: var(--color-done)">${donePages} / ${totalPages}</div>
                        </div>
                        <div class="new-kpi-box">
                            <div class="new-kpi-label">DAYS REQUIRED</div>
                            <div class="new-kpi-val" style="color: #4f46e5">${mod.timeNeeded || 'NA'}</div>
                        </div>
                        <div class="new-kpi-box" style="justify-content: space-between;">
                            <div class="new-kpi-label">INTERNAL REVIEWS</div>
                            <div style="display: flex; align-items: center;">
                                <div class="new-kpi-val" style="color: var(--text-primary); flex: 1; min-width: max-content;">${internalPts} pts</div>
                                <div style="width: 2px; height: 1rem; background: rgba(0,0,0,0.08); margin: 0 0.4rem; flex-shrink: 0;"></div>
                                <div class="new-kpi-val" style="color: var(--text-primary); flex: 1; font-size: 0.68rem; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">(${internalStatus})</div>
                            </div>
                        </div>
                        <div class="new-kpi-box" style="justify-content: space-between;">
                            <div class="new-kpi-label">CLIENT REVIEWS</div>
                            <div style="display: flex; align-items: center;">
                                <div class="new-kpi-val" style="color: var(--text-primary); flex: 1; min-width: max-content;">${clientPts} pts</div>
                                <div style="width: 2px; height: 1rem; background: rgba(0,0,0,0.08); margin: 0 0.4rem; flex-shrink: 0;"></div>
                                <div class="new-kpi-val" style="color: var(--text-primary); flex: 1; font-size: 0.68rem; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">(${clientStatus})</div>
                            </div>
                        </div>
                    </div>
                    <div class="new-pres-progress-container">
                        <div style="display:flex; justify-content:space-between; margin-bottom: 0.4rem; font-size: 0.85rem; color: var(--text-secondary); font-weight:700;">
                            <span>Dynamic Development</span>
                            <span>${progress}%</span>
                        </div>
                        <div class="progress-bar" style="height: 4px; background: rgba(0,0,0,0.06);">
                            <div class="progress-fill" style="width: ${progress}%; background: ${mod.color}"></div>
                        </div>
                    </div>
                </div>
            `;
        });

        html += `</div>`;
        container.innerHTML = html;
    } else if (currentSlideIndex === MODULE_ORDER.length + 1) {
        let html = `
            <div class="landing-hero" style="padding: 0.25rem 0 0.5rem;">
                <h2 class="hero-title" style="font-size: 2rem;">Team Review</h2>
                <p class="hero-subtitle">Overall performance metrics and KPIs for the development team</p>
            </div>
            <div id="team-page-content-pres" class="team-page-content"></div>
        `;
        container.innerHTML = html;
        renderTeamReview('team-page-content-pres');
    } else if (currentSlideIndex === MODULE_ORDER.length + 2) {
        let html = `
            <div class="landing-hero" style="padding: 1rem 0 1rem; margin-bottom: 0;">
                <h2 class="hero-title" style="font-size: 2rem;">June Commitments</h2>
                <p class="hero-subtitle">Key targets, milestones, and blockers identified for the current sprint</p>
            </div>
            <div id="commitments-content-pres" class="new-pres-card-grid" style="grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 1fr); gap: 1rem; align-items: stretch; max-width: 1200px; margin: 0 auto; height: calc(100vh - 200px);"></div>
        `;
        container.innerHTML = html;
        renderJuneCommitments('commitments-content-pres');
    } else if (currentSlideIndex === MODULE_ORDER.length + 3) {
        let html = `
            <div class="landing-hero" style="padding: 1rem 0 1rem; margin-bottom: 0;">
                <h2 class="hero-title" style="font-size: 2rem;">CMMI5 Readiness: Documentation</h2>
                <p class="hero-subtitle">Current status of required documents for Level 5 compliance.</p>
            </div>

            <div style="max-width: 860px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: start;">

                <!-- Left Column: Document Status Table -->
                <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: 12px; box-shadow: var(--shadow-sm); overflow: hidden;">
                    <table style="width: 100%; border-collapse: collapse; text-align: left;">
                        <thead>
                            <tr style="background: rgba(6,182,212,0.06); border-bottom: 2px solid var(--border-subtle);">
                                <th style="padding: 0.75rem 1rem; color: #06b6d4; font-weight: 800; font-size: 0.78rem; letter-spacing: 0.02em;">Document Name</th>
                                <th style="padding: 0.75rem 1rem; color: #06b6d4; font-weight: 800; font-size: 0.78rem;">Current Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-subtle);">
                                <td style="padding: 0.65rem 1rem; font-weight: 600; color: var(--text-primary); font-size: 0.85rem;">Project Plan</td>
                                <td style="padding: 0.65rem 1rem;"><span class="status-badge" style="background: rgba(245,158,11,0.15); color: #b45309; padding: 0.2rem 0.55rem; font-size: 0.75rem;">⏳ Pending</span></td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-subtle);">
                                <td style="padding: 0.65rem 1rem; font-weight: 600; color: var(--text-primary); font-size: 0.85rem;">DPR</td>
                                <td style="padding: 0.65rem 1rem;"><span class="status-badge" style="background: var(--color-done-bg); color: var(--color-done); padding: 0.2rem 0.55rem; font-size: 0.75rem;">✓ Prepared</span></td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-subtle);">
                                <td style="padding: 0.65rem 1rem; font-weight: 600; color: var(--text-primary); font-size: 0.85rem;">RTM</td>
                                <td style="padding: 0.65rem 1rem;"><span class="status-badge" style="background: rgba(245,158,11,0.15); color: #b45309; padding: 0.2rem 0.55rem; font-size: 0.75rem;">⏳ Pending</span></td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-subtle);">
                                <td style="padding: 0.65rem 1rem; font-weight: 600; color: var(--text-primary); font-size: 0.85rem;">Concept note</td>
                                <td style="padding: 0.65rem 1rem;"><span class="status-badge" style="background: rgba(245,158,11,0.15); color: #b45309; padding: 0.2rem 0.55rem; font-size: 0.75rem;">⏳ Pending</span></td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-subtle);">
                                <td style="padding: 0.65rem 1rem; font-weight: 600; color: var(--text-primary); font-size: 0.85rem;">BRD</td>
                                <td style="padding: 0.65rem 1rem;"><span class="status-badge" style="background: var(--bg-page); color: var(--text-muted); border: 1px solid var(--border-subtle); padding: 0.2rem 0.55rem; font-size: 0.75rem;">◌ To be started</span></td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-subtle);">
                                <td style="padding: 0.65rem 1rem; font-weight: 600; color: var(--text-primary); font-size: 0.85rem;">SRS</td>
                                <td style="padding: 0.65rem 1rem;"><span class="status-badge" style="background: var(--bg-page); color: var(--text-muted); border: 1px solid var(--border-subtle); padding: 0.2rem 0.55rem; font-size: 0.75rem;">◌ To be started</span></td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-subtle);">
                                <td style="padding: 0.65rem 1rem; font-weight: 600; color: var(--text-primary); font-size: 0.85rem;">Process flows</td>
                                <td style="padding: 0.65rem 1rem;"><span class="status-badge" style="background: var(--color-progress-bg); color: var(--color-progress); padding: 0.2rem 0.55rem; font-size: 0.75rem;">◐ In progress</span></td>
                            </tr>
                            <tr>
                                <td style="padding: 0.65rem 1rem; font-weight: 600; color: var(--text-primary); font-size: 0.85rem;">User Manuals</td>
                                <td style="padding: 0.65rem 1rem;"><span class="status-badge" style="background: var(--color-progress-bg); color: var(--color-progress); padding: 0.2rem 0.55rem; font-size: 0.75rem;">◐ In progress</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Right Column: Note + Legend -->
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div style="padding: 1.1rem 1.25rem; border-radius: 12px; background: rgba(236,72,153,0.06); border: 1px solid rgba(236,72,153,0.2); box-shadow: var(--shadow-sm);">
                        <p style="color: var(--text-primary); font-size: 0.88rem; line-height: 1.6; margin: 0;">
                            <span style="font-weight: 800; color: #ec4899; display: block; margin-bottom: 0.4rem; font-size: 0.92rem;">📌 Note:</span>
                            While the <strong>DPR</strong> was already created, I need to learn to create the other category of documents required for CMMI5.
                        </p>
                    </div>
                    <div style="padding: 1rem 1.25rem; border-radius: 12px; background: var(--bg-surface); border: 1px solid var(--border-subtle); box-shadow: var(--shadow-sm);">
                        <div style="font-weight: 700; color: var(--text-secondary); font-size: 0.75rem; margin-bottom: 0.6rem; letter-spacing: 0.04em; text-transform: uppercase;">Legend</div>
                        <div style="display: flex; flex-direction: column; gap: 0.4rem;">
                            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.82rem;"><span style="color: var(--color-done);">✓</span> <span style="color: var(--text-secondary);">Prepared / Done</span></div>
                            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.82rem;"><span style="color: var(--color-progress);">◐</span> <span style="color: var(--text-secondary);">In Progress</span></div>
                            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.82rem;"><span style="color: #b45309;">⏳</span> <span style="color: var(--text-secondary);">Pending (to be started soon)</span></div>
                            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.82rem;"><span style="color: var(--text-muted);">◌</span> <span style="color: var(--text-secondary);">Not yet started</span></div>
                        </div>
                    </div>
                </div>

            </div>
        `;
        container.innerHTML = html;
    } else {
        const mod = MODULES[MODULE_ORDER[currentSlideIndex - 1]];
        if (!mod) return;

        const totalPages = countPages(mod);
        const donePages = countDonePages(mod);
        const progress = totalPages > 0 ? Math.round((donePages / totalPages) * 100) : 0;
        const internalPts = countInternalReviewPoints(mod);
        const internalStatus = getInternalReviewStatus(mod);
        const clientPts = countClientReviewPoints(mod);
        const clientStatus = getClientReviewStatus(mod);

        const trackerSteps = [
            'Requirement Gathering',
            'Static screens',
            'Dynamic Development',
            'Internal review',
            'Client review',
            'QA',
            'Final Review',
            'Security implementation',
            'UAT',
            'Go Live'
        ];

        let lastDoneIndex = -1;
        const stepsStatus = trackerSteps.map((step, sIdx) => {
            const status = getStepStatus(mod, step);
            if (status === 'done') {
                lastDoneIndex = sIdx;
            }
            return status;
        });

        const fillPercent = trackerSteps.length > 1 ? (Math.max(0, lastDoneIndex) / (trackerSteps.length - 1)) * 100 : 0;

        let html = `
            <div class="landing-hero" style="padding: 1rem 0 1.5rem; text-align: left; display: flex; align-items: center; justify-content: space-between;">
                <div>
                    <h2 class="hero-title" style="font-size: 2rem; display: flex; align-items: center; gap: 0.75rem;">
                        <span class="detail-module-icon" style="background: ${mod.color}15; color: ${mod.color}; border: 1px solid ${mod.color}25; width: 44px; height: 44px; font-size: 1.4rem; margin: 0; display: inline-flex; line-height: 1;">${ICONS[mod.id] || mod.icon}</span>
                        ${mod.name}
                    </h2>
                </div>
                <div style="font-size: 0.88rem; font-weight: 700; color: var(--text-secondary); background: var(--bg-glass); border: 1px solid var(--border-subtle); padding: 0.4rem 1rem; border-radius: var(--radius-md);">
                    Estimate: <span style="color: ${mod.color}">${mod.timeNeeded || 'NA'}</span>
                </div>
            </div>

            <!-- Horizontal Step Tracker -->
            <div class="tracker-container">
                <div class="tracker-wrapper">
                    <div class="tracker-line">
                        <div class="tracker-line-fill" style="width: ${fillPercent}%; background: var(--color-done);"></div>
                    </div>
                    ${trackerSteps.map((step, sIdx) => {
                        const status = stepsStatus[sIdx];
                        let icon = sIdx + 1;
                        if (status === 'done') icon = '✓';
                        else if (status === 'in-progress') icon = '◐';

                        return `
                            <div class="tracker-step ${status}">
                                <div class="tracker-dot">
                                    ${icon}
                                </div>
                                <div class="tracker-label">
                                    ${step}
                                    ${status === 'skipped' ? '<br><span style="font-size: 0.6rem; opacity: 0.65; font-weight: 600; display: block; margin-top: 1px;">(Skipped)</span>' : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <!-- Slide detail content -->
            <div class="slide-details-grid">
                <!-- Left panel: Remarks and Page list -->
                <div class="slide-details-left">
                    <!-- Remarks card -->
                    <div class="alert-card alert-info" style="margin: 0;">
                        <div class="alert-title">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                            Remarks / Highlights
                        </div>
                        <div class="alert-body">${mod.remark ? mod.remark.replace(/\n/g, '<br>') : 'No remarks or blocker items registered.'}</div>
                    </div>

                    <!-- User type page list -->
                    <div class="pres-user-types-grid">
                        ${mod.userTypes.map(ut => {
                            const utProgress = calculateUserTypeProgress(ut);
                            const timeStr = ut.timeNeeded && ut.timeNeeded !== '-' && ut.timeNeeded !== 'NA' ? ` • ${ut.timeNeeded}` : '';
                            return `
                                <div class="pres-user-type-card">
                                    <div class="user-type-header" style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem; margin-bottom: 0.75rem; display: flex; align-items: center; justify-content: space-between; flex-shrink: 0;">
                                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                                            <div class="user-type-icon" style="background: ${mod.color}15; color: ${mod.color}; font-weight: 700; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem;">
                                                ${getInitials(ut.name)}
                                            </div>
                                            <div>
                                                <div class="user-type-name" style="font-weight: 700; font-size: 0.9rem; color: var(--text-primary);">${ut.name}</div>
                                                <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 0.1rem;">${utProgress.done} / ${utProgress.total} pages done${timeStr}</div>
                                            </div>
                                        </div>
                                        <span class="status-badge" style="background: ${utProgress.percent === 100 ? 'var(--color-done-bg); color: var(--color-done);' : 'var(--color-progress-bg); color: var(--color-progress);'}; font-size: 0.7rem; padding: 0.15rem 0.5rem;">
                                            ${utProgress.percent}%
                                        </span>
                                    </div>

                                    <div class="pres-user-type-card-scrollable">
                                        ${ut.categories.map(cat => `
                                            <div class="category-group" style="margin-bottom: 0.75rem; margin-left: 0;">
                                                <div class="category-label" style="font-size: 0.68rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.4rem; letter-spacing: 0.05em; border-left: 2px solid ${mod.color}; padding-left: 0.4rem;">${cat.name}</div>
                                                <table class="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Page Name</th>
                                                            <th class="text-center" style="width: 110px;">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        ${cat.pages.map(p => `
                                                            <tr>
                                                                <td style="font-weight: 500; color: var(--text-primary); padding: 0.4rem 0.5rem;">${p.name}</td>
                                                                <td class="text-center" style="padding: 0.4rem 0.5rem;">${getStatusBadge(p.dynamicDev)}</td>
                                                            </tr>
                                                        `).join('')}
                                                    </tbody>
                                                </table>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- Right panel: Metadata & Docs -->
                <div class="slide-details-right">
                    <!-- Documentation card -->
                    <div class="info-card" style="margin: 0; height: auto;">
                        <div class="ic-header">
                            <div class="ic-icon" style="background: rgba(16,185,129,0.12); color: #34d399">📝</div>
                            <div class="ic-title">Documentation Status</div>
                        </div>
                        <div class="ic-body" style="display: flex; flex-direction: column; gap: 0.75rem;">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <span class="label">Process Flow</span>
                                ${getStatusBadge(mod.documentation.processFlow)}
                            </div>
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <span class="label">User Manual</span>
                                ${getStatusBadge(mod.documentation.userManual)}
                            </div>
                        </div>
                    </div>
                    <!-- Dependencies card -->
                    <div class="info-card" style="margin: 0; height: auto;">
                        <div class="ic-header">
                            <div class="ic-icon" style="background: rgba(239,68,68,0.12); color: #ef4444">⚠️</div>
                            <div class="ic-title">Dependencies & Blockers</div>
                        </div>
                        <div class="ic-body" style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">
                            ${mod.dependency && mod.dependency !== '-' ? mod.dependency.replace(/\n/g, '<br>') : '<span style="font-style: italic; opacity: 0.8;">No active dependencies or blockers.</span>'}
                        </div>
                    </div>

                    <!-- Team card -->
                    <div class="info-card" style="margin: 0; height: auto;">
                        <div class="ic-header">
                            <div class="ic-icon" style="background: rgba(99,102,241,0.12); color: #818cf8">👥</div>
                            <div class="ic-title">Development Team</div>
                        </div>
                        <div class="ic-body">
                            <div class="team-avatars" style="margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
                                ${mod.team.map(name => `
                                    <div style="display:flex; align-items:center; gap:0.5rem; width: 100%; margin-bottom: 0.4rem;">
                                        <div class="team-avatar" style="background: ${getAvatarColor(name)}; width: 28px; height: 28px; font-size: 0.75rem; margin: 0;">${getInitials(name)}</div>
                                        <span style="font-size:0.85rem; font-weight:500; color: var(--text-primary);">${name}</span>
                                    </div>
                                `).join('')}
                            </div>
                            ${mod.team.length === 0 ? '<span style="font-size:0.85rem;color:var(--text-muted)">No developers assigned</span>' : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML = html;
    }
}

function renderJuneCommitments(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    JUNE_COMMITMENTS.forEach(commit => {
        const mod = MODULES[commit.moduleId];
        if (!mod) return;
        
        html += `
            <div class="new-pres-card" style="border-top: 4px solid ${mod.color}; padding: 1rem; height: 100%; display: flex; flex-direction: column; justify-content: flex-start; gap: 0.75rem; box-shadow: var(--shadow-md); min-height: 0; overflow: hidden;">
                <div class="pres-card-header" style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem; flex-shrink: 0;">
                    <div style="display: flex; align-items: center; gap: 0.6rem;">
                        <div class="detail-module-icon" style="background: ${mod.color}15; color: ${mod.color}; border: 1px solid ${mod.color}25; width: 32px; height: 32px; font-size: 1rem; margin: 0; line-height: 1;">${ICONS[mod.id] || mod.icon}</div>
                        <div class="pres-card-title" style="font-size: 1.1rem; font-weight: 800; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${mod.name}</div>
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 0.4rem; flex: 1; overflow-y: auto; min-height: 0; padding-right: 0.4rem;">
                    ${commit.goals.map((goal, idx) => {
                        let icon = '🎯'; // default target
                        if (goal.toLowerCase().includes('qa') || goal.toLowerCase().includes('audit')) icon = '🔍';
                        if (goal.toLowerCase().includes('client') || goal.toLowerCase().includes('review')) icon = '👁️';
                        if (goal.toLowerCase().includes('blocker') || goal.toLowerCase().includes('dependency')) icon = '⚠️';
                        if (goal.toLowerCase().includes('hold')) icon = '⏸️';
                        
                        return `
                            <div style="display: flex; align-items: flex-start; gap: 0.4rem; font-size: 0.78rem; color: var(--text-secondary); line-height: 1.3; background: rgba(0,0,0,0.02); padding: 0.4rem 0.5rem; border-radius: 6px; border: 1px solid rgba(0,0,0,0.03);">
                                <span style="font-size: 0.85rem; margin-top: 0.05rem;">${icon}</span>
                                <span>${goal}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}
