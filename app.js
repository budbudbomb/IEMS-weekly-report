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

// Preset visuals map
const EXISTING_VISUALS = {
    preksha: { color: '#6366f1', icon: ICONS.preksha },
    samadhan: { color: '#10b981', icon: ICONS.samadhan },
    expenditure: { color: '#f59e0b', icon: ICONS.expenditure },
    sugamta: { color: '#f43f5e', icon: ICONS.sugamta },
    ipbms: { color: '#8b5cf6', icon: ICONS.ipbms },
    evm: { color: '#06b6d4', icon: ICONS.evm }
};
// User types where Requirement Gathering and Static Screens don't apply
const EXEMPT_UT_PATTERNS = ['user management', 'user manag', 'baseline data', 'setup'];
const isExemptUT = (name) => EXEMPT_UT_PATTERNS.some(p => (name || '').toLowerCase().includes(p));


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
        remark: '<strong>Roll observer:</strong> Shared with the currently appointed "Roll Observers" for testing\n<strong>Election Observer:</strong> Need to get it reviewed from Sanju ma\'am on Monday',
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
                dependency: 'Review by "Narendra sir" and "Sondhiya sir"',
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
    if (s === 'done' || s === 'fixed' || s === 'updated' || s.startsWith('done') || s.startsWith('updated')) return `<span class="status-badge status-done">✓ ${status}</span>`;
    if (s === 'approved' || s.startsWith('approved')) return `<span class="status-badge status-approved">✓ ${status}</span>`;
    if (s.includes('in progress') || s === 'in progress' || s.includes('to be updated') || s === 'to be updated' || s === 'partial') return `<span class="status-badge status-progress">◐ ${status}</span>`;
    if (s.includes('on hold')) return `<span class="status-badge status-skipped">⊘ ${status}</span>`;
    if (s.includes('pending') || s.includes('pending to be reviewed')) return `<span class="status-badge status-pending">◷ ${status}</span>`;
    if (s.includes('not done') || s.includes('not started') || s.includes('not started yet') || s.includes('to be started')) return `<span class="status-badge status-not-done">✗ ${status}</span>`;
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
    // 0. Module-level accumulation (captures values from separator rows before any UT is set)
    if (mod._clRevPts && mod._clRevPts > 0) {
        return mod._clRevPts;
    }

    // 1. Check if any userType has explicit points parsed
    let hasUTExplicitPoints = false;
    let utCount = 0;
    mod.userTypes.forEach(ut => {
        if (ut.clientReviewPoints !== undefined && ut.clientReviewPoints > 0) {
            hasUTExplicitPoints = true;
            utCount += ut.clientReviewPoints;
        }
    });
    if (hasUTExplicitPoints) {
        return utCount;
    }

    // 2. Check if any pages have explicit points
    let count = 0;
    let hasExplicitPoints = false;
    mod.userTypes.forEach(ut => {
        ut.categories.forEach(cat => {
            cat.pages.forEach(p => {
                if (p.clientReview && typeof p.clientReview.points === 'number') {
                    count += p.clientReview.points;
                    if (p.clientReview.points > 0) {
                        hasExplicitPoints = true;
                    }
                }
            });
        });
    });
    if (hasExplicitPoints) {
        return count;
    }

    // 3. Fallback: count bullet-point lines in review text
    let fallbackCount = 0;
    mod.userTypes.forEach(ut => {
        ut.categories.forEach(cat => {
            cat.pages.forEach(p => {
                const r = (p.clientReview && p.clientReview.review) ? p.clientReview.review.trim() : '';
                if (!r || r === '-' || r.toLowerCase() === 'none' || r.toLowerCase() === 'no issues') return;
                const bullets = r.split('\n').filter(line => /^\s*[-•*]/.test(line));
                if (bullets.length > 0) {
                    fallbackCount += bullets.length;
                } else {
                    fallbackCount++;
                }
            });
        });
    });
    return fallbackCount;
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

function countBugs(mod) {
    // 1. Check if any userType has explicit bugs parsed
    let hasUTBugs = false;
    let utCount = 0;
    mod.userTypes.forEach(ut => {
        if (ut.qaBugs !== undefined && ut.qaBugs > 0) {
            hasUTBugs = true;
            utCount += ut.qaBugs;
        }
    });
    if (hasUTBugs) {
        return utCount;
    }

    // 2. Sum pages bugs
    let count = 0;
    mod.userTypes.forEach(ut => {
        ut.categories.forEach(cat => {
            cat.pages.forEach(p => {
                if (p.qa && typeof p.qa.bugs === 'number') {
                    count += p.qa.bugs;
                }
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
    document.getElementById('quick-report-page').classList.add('hidden');
    document.getElementById('monthly-upload-page').classList.add('hidden');
    document.getElementById('monthly-pres-page').classList.add('hidden');
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
    document.getElementById('quick-report-page').classList.add('hidden');
    document.getElementById('monthly-upload-page').classList.add('hidden');
    document.getElementById('monthly-pres-page').classList.add('hidden');
    document.getElementById('back-btn').classList.add('hidden');
    document.getElementById('page-title').classList.remove('hidden');

    // Restore header buttons that other pages may have hidden
    const uploadBtn = document.getElementById('upload-btn');
    if (uploadBtn) uploadBtn.classList.remove('hidden');
    const qrBtn = document.getElementById('quick-report-btn');
    if (qrBtn) qrBtn.style.display = '';
    const monthlyBtn = document.getElementById('monthly-review-btn');
    if (monthlyBtn) monthlyBtn.style.display = '';
    const presBtn = document.getElementById('pres-toggle-btn');
    if (presBtn) presBtn.style.display = '';
}

function showTeamReview() {
    currentModule = null;
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('detail-page').classList.add('hidden');
    document.getElementById('team-page').classList.remove('hidden');
    document.getElementById('quick-report-page').classList.add('hidden');
    document.getElementById('monthly-upload-page').classList.add('hidden');
    document.getElementById('monthly-pres-page').classList.add('hidden');
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
    const bugCount = countBugs(currentModule);
    const tabs = [
        { id: 'overview', label: 'Overview', icon: '📋' },
        { id: 'development', label: 'Dynamic Development', icon: '⚡' },
        { id: 'review', label: 'Review', icon: '🔍' },
        { id: 'qa', label: 'QA', icon: '🧪', count: bugCount > 0 ? bugCount : undefined },
        { id: 'changes', label: 'Change Requests', icon: '🔄', count: countCRs(currentModule) },
        { id: 'documentation', label: 'Documentation', icon: '📄' },
        { id: 'team', label: 'Team', icon: '👥', count: currentModule.team.length }
    ];

    document.getElementById('tabs-nav').innerHTML = tabs.map(tab => `
        <button class="tab-btn ${currentTab === tab.id ? 'active' : ''}" onclick="switchTab('${tab.id}')" id="tab-${tab.id}">
            ${tab.label}
            ${tab.count !== undefined ? `<span class="tab-count ${tab.id === 'qa' ? 'status-bug' : ''}" style="${tab.id === 'qa' ? 'background: var(--color-bug); color: white;' : ''}">${tab.count}</span>` : ''}
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
        case 'qa': renderQA(container); break;
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

    // Dependencies — module-level + user-type-level
    {
        const modDep = (mod.dependency || '').trim();
        const utDeps = (mod.userTypes || [])
            .filter(ut => ut.dependency && ut.dependency.trim())
            .map(ut => ({ name: ut.name, dep: ut.dependency.trim() }));

        if (modDep || utDeps.length > 0) {
            let depBody = '';
            if (modDep) {
                depBody += `<div style="margin-bottom:${utDeps.length ? '0.75rem' : '0'}">${modDep.replace(/\n/g, '<br>')}</div>`;
            }
            utDeps.forEach(({ name, dep }) => {
                depBody += `
                    <div style="margin-bottom:0.5rem">
                        <span style="font-weight:600; font-size:0.8rem; opacity:0.75;">${name}:</span>
                        <span style="margin-left:0.35rem">${dep.replace(/\n/g, '<br>')}</span>
                    </div>`;
            });

            html += `
                <div class="alert-card" style="margin-bottom:1rem">
                    <div class="alert-title">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                        Dependency / Blocker
                    </div>
                    <div class="alert-body">${depBody}</div>
                </div>
            `;
        }
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

        if (ut.dependency) {
            html += `
                <div class="alert-card" style="margin: 0 1.25rem 1rem 1.25rem;">
                    <div class="alert-title">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                        Dependency / Blocker
                    </div>
                    <div class="alert-body">${ut.dependency.replace(/\n/g, '<br>')}</div>
                </div>
            `;
        }

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

        if (ut.dependency) {
            html += `
                <div class="alert-card" style="margin: 0 1.25rem 1rem 1.25rem;">
                    <div class="alert-title">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                        Dependency / Blocker
                    </div>
                    <div class="alert-body">${ut.dependency.replace(/\n/g, '<br>')}</div>
                </div>
            `;
        }

        ut.categories.forEach(cat => {
            html += `
                <div class="category-group">
                    <div class="category-label">${cat.name}</div>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Page</th>
                                <th class="text-center" style="width: 80px;">Int. Pts</th>
                                <th class="col-review">Internal Review</th>
                                <th class="text-center col-status">Internal Status</th>
                                <th class="text-center" style="width: 80px;">Cli. Pts</th>
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
                                    <td class="text-center font-semibold" style="vertical-align: middle;">
                                        ${(page.internalReview.points !== undefined && page.internalReview.points > 0) ? page.internalReview.points : '—'}
                                    </td>
                                    <td class="col-review">
                                        ${page.internalReview.review && page.internalReview.review !== '-' 
                                            ? `<div class="review-text">${page.internalReview.review}</div>` 
                                            : '<span class="status-badge status-na">—</span>'}
                                    </td>
                                    <td class="text-center col-status">${getStatusBadge(page.internalReview.status)}</td>
                                    <td class="text-center font-semibold" style="vertical-align: middle;">
                                        ${(page.clientReview.points !== undefined && page.clientReview.points > 0) ? page.clientReview.points : '—'}
                                    </td>
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

function renderQA(container) {
    const mod = currentModule;
    let html = `
        <div class="section-header">
            <div class="section-icon">🧪</div>
            <div>
                <div class="section-title">QA Status & Bugs</div>
                <div class="section-subtitle">QA verification progress and active bug tracking per page</div>
            </div>
        </div>
    `;

    mod.userTypes.forEach(ut => {
        const utPages = [];
        ut.categories.forEach(cat => {
            cat.pages.forEach(p => {
                utPages.push(p);
            });
        });
        
        if (utPages.length === 0) return;

        html += `
            <div class="user-type-group">
                <div class="user-type-header">
                    <div class="user-type-icon">${getInitials(ut.name)}</div>
                    <div class="user-type-name">${ut.name}</div>
                </div>
        `;

        ut.categories.forEach(cat => {
            if (cat.pages.length === 0) return;
            html += `
                <div class="category-group">
                    <div class="category-label">${cat.name}</div>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Page</th>
                                <th class="text-center col-status">QA Status</th>
                                <th class="text-center" style="width: 150px;">No. of Bugs</th>
                                <th class="text-center" style="width: 150px;">Bugs Fixed</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${cat.pages.map(page => {
                                const qa = page.qa || { status: '-', bugs: 0, fixed: 0 };
                                return `
                                <tr>
                                    <td>
                                        <div class="page-name">
                                            <div class="page-dot" style="background: ${getPageDotColor(page.dynamicDev)}"></div>
                                            ${page.name}
                                        </div>
                                    </td>
                                    <td class="text-center col-status">${getStatusBadge(qa.status)}</td>
                                    <td class="text-center font-bold" style="color: ${qa.bugs > 0 ? 'var(--color-bug, #e11d48)' : 'var(--text-muted)'};">
                                        ${qa.bugs || '0'}
                                    </td>
                                    <td class="text-center font-bold" style="color: ${qa.fixed > 0 ? 'var(--color-done, #16a34a)' : 'var(--text-muted)'};">
                                        ${qa.fixed || '0'}
                                    </td>
                                </tr>
                                `;
                            }).join('')}
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
    
    if (mod.userTypes && mod.userTypes.length > 0) {
        mod.userTypes.forEach(ut => {
            const processFlow = (ut.documentation && ut.documentation.processFlow) ? ut.documentation.processFlow.toString().trim() : '-';
            const userManual = (ut.documentation && ut.documentation.userManual) ? ut.documentation.userManual.toString().trim() : '-';
            if (processFlow !== '-' || userManual !== '-') {
                docNotes.push({
                    userType: ut.name,
                    processFlow: processFlow,
                    userManual: userManual
                });
            }
        });
    }

    if (docNotes.length === 0) {
        if (mod.id === 'samadhan') {
            docNotes.push({ userType: 'DEO', processFlow: 'Done', userManual: '-' });
            docNotes.push({ userType: 'RO', processFlow: 'Pending', userManual: '-' });
            docNotes.push({ userType: 'Admin', processFlow: 'Pending', userManual: '-' });
        } else if (mod.id === 'expenditure') {
            docNotes.push({ userType: 'DEO', processFlow: 'Done', userManual: 'Done' });
            docNotes.push({ userType: 'Candidate', processFlow: 'Pending', userManual: 'Pending' });
        }
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
    reader.onload = async function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            
            const boldCells = await extractBoldCells(e.target.result);
            const parsed = parseExcelToModules(workbook, boldCells);
            
            if (Object.keys(parsed).length === 0) {
                showToast('No module data could be parsed from this file. Check the format.', 'error');
                return;
            }

            // Update global MODULES
            MODULES = parsed;

            // Remove any legacy standalone documentation data so it doesn't override the fresh data
            localStorage.removeItem('project_dashboard_doc');

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

// ── Documentation Upload ─────────────────────────────────────────────────

/**
 * Returns the cell value at (r, c), resolving merged cells back to
 * their top-left master cell.
 */
function getMergedCellValue(worksheet, r, c) {
    if (c === -1 || c === undefined) return '';
    const merges = worksheet['!merges'] || [];
    for (const merge of merges) {
        if (r >= merge.s.r && r <= merge.e.r && c >= merge.s.c && c <= merge.e.c) {
            const masterRef = XLSX.utils.encode_cell({ r: merge.s.r, c: merge.s.c });
            const cell = worksheet[masterRef];
            return cell ? cell.v.toString() : '';
        }
    }
    const cellRef = XLSX.utils.encode_cell({ r, c });
    const cell = worksheet[cellRef];
    return cell ? cell.v.toString() : '';
}

function getDocMergedCellData(worksheet, r, c) {
    if (c === -1 || c === undefined) return { value: '', id: `r${r}c${c}` };
    const merges = worksheet['!merges'] || [];
    for (const merge of merges) {
        if (r >= merge.s.r && r <= merge.e.r && c >= merge.s.c && c <= merge.e.c) {
            const masterRef = XLSX.utils.encode_cell({ r: merge.s.r, c: merge.s.c });
            const cell = worksheet[masterRef];
            return {
                value: cell ? cell.v.toString() : '',
                id: `r${merge.s.r}c${merge.s.c}`
            };
        }
    }
    const cellRef = XLSX.utils.encode_cell({ r, c });
    const cell = worksheet[cellRef];
    return {
        value: cell ? cell.v.toString() : '',
        id: `r${r}c${c}`
    };
}

/**
 * Parses the 'Documentation' sheet of a workbook and returns a map of
 * { moduleId -> { userTypes: { utName -> { processFlow, userManual, brd, srs, conceptNote } } } }
 */
function parseDocumentationSheet(workbook) {
    const sheetName = workbook.SheetNames.find(n => n.toLowerCase() === 'documentation') || null;
    if (!sheetName) {
        throw new Error('No "Documentation" sheet found in the uploaded file.');
    }

    const worksheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });

    // Find the header row — the one that contains 'process flow' or 'user manual'
    let headerRowIndex = -1;
    for (let r = 0; r < Math.min(rows.length, 10); r++) {
        const row = rows[r];
        if (row && row.some(cell => {
            const c = (cell || '').toString().toLowerCase().trim();
            return c === 'process flow' || c === 'user manual' || c === 'brd' || c === 'srs';
        })) {
            headerRowIndex = r;
            break;
        }
    }
    if (headerRowIndex === -1) headerRowIndex = 1; // fallback

    // Resolve column indexes from the header row
    const colIdx = { module: 0, userType: 1, processFlow: 2, userManual: 3, brd: 4, srs: 5, conceptNote: 6 };
    const headerRow = rows[headerRowIndex] || [];
    headerRow.forEach((cell, idx) => {
        const s = (cell || '').toString().toLowerCase().trim();
        if (s.includes('module') && !s.includes('user')) colIdx.module = idx;
        else if (s.includes('user type') || s === 'usertype') colIdx.userType = idx;
        else if (s.includes('process flow')) colIdx.processFlow = idx;
        else if (s.includes('user manual')) colIdx.userManual = idx;
        else if (s === 'brd') colIdx.brd = idx;
        else if (s === 'srs') colIdx.srs = idx;
        else if (s.includes('concept note')) colIdx.conceptNote = idx;
    });

    const result = {};
    let currentModule = '';
    let currentUserType = '';

    for (let r = headerRowIndex + 1; r < rows.length; r++) {
        const row = rows[r];
        if (!row) continue;

        const modName = (row[colIdx.module] || '').toString().trim();
        const utName  = (row[colIdx.userType] || '').toString().trim();

        if (modName) currentModule = modName;
        if (utName)  currentUserType = utName;
        if (!currentModule) continue;

        const id = getModuleId(currentModule);
        if (!result[id]) result[id] = { name: currentModule, userTypes: {} };

        const utKey = currentUserType || 'General';

        // Use getMergedCellValue so merged cells across user-types are resolved correctly
        const processFlow  = getMergedCellValue(worksheet, r, colIdx.processFlow)  || '-';
        const userManual   = getMergedCellValue(worksheet, r, colIdx.userManual)   || '-';
        const brd          = getMergedCellValue(worksheet, r, colIdx.brd)          || '-';
        const srs          = getMergedCellValue(worksheet, r, colIdx.srs)          || '-';
        const conceptNote  = getMergedCellValue(worksheet, r, colIdx.conceptNote)  || '-';

        result[id].userTypes[utKey] = { processFlow, userManual, brd, srs, conceptNote };
    }

    return result;
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
function isCategoryHeader(row, colIdx, r, boldCells = {}) {
    const pageVal = (row[colIdx.pages] || '').toString().trim();
    if (!pageVal) return false;
    
    // Check if pages cell is bold (Style-based detection)
    if (typeof XLSX !== 'undefined') {
        const colLetter = XLSX.utils.encode_col(colIdx.pages);
        const cellRef = `${colLetter}${r + 1}`;
        const isBold = boldCells[cellRef] || false;
        if (isBold) {
            return true;
        }
    }
    
    // Fallback: precise check for category names (e.g. for CSV or if styles are missing)
    const pName = pageVal.toLowerCase();
    const categories = [
        'profile', 'main pages', 'reports', 'other pages', 'dashboard & management',
        'vehicle requisition', 'vehicle management', 'scanning',
        'registration', 'complaint management', 'user management', 'application & reports',
        'core',
        'मतदान से पूर्व', 'मतदान के दौरान', 'मतदाता खोजे', 'मतदाता रजिस्टर', 'मतदान समाप्ति'
    ];
    if (categories.some(cat => pName === cat || pName.startsWith(cat))) {
        return true;
    }
    
    const devVal = (row[colIdx.dynamicDev] || '').toString().trim();
    const isEmptyOrHyphen = (val) => val === '' || val === '-';
    
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

// Async helper: extract cell references that are bold from sheet1.xml + styles.xml
async function extractBoldCells(arrayBuffer) {
    const boldCells = {};
    if (typeof JSZip === 'undefined') {
        console.warn('JSZip is not loaded. Skipping bold formatting check.');
        return boldCells;
    }
    try {
        const zip = await JSZip.loadAsync(arrayBuffer);
        
        // 1. Read styles.xml
        const stylesFile = zip.file('xl/styles.xml');
        if (!stylesFile) return boldCells;
        const stylesXmlText = await stylesFile.async('text');
        const parser = new DOMParser();
        const stylesDoc = parser.parseFromString(stylesXmlText, 'text/xml');
        
        // Find which fonts are bold
        const fontNodes = stylesDoc.getElementsByTagName('font');
        const isFontBold = [];
        for (let i = 0; i < fontNodes.length; i++) {
            const b = fontNodes[i].getElementsByTagName('b');
            isFontBold.push(b.length > 0);
        }
        
        // Find cell format (xf) mappings to fonts
        const cellXfsNode = stylesDoc.getElementsByTagName('cellXfs')[0];
        const isFormatBold = [];
        if (cellXfsNode) {
            const xfNodes = cellXfsNode.getElementsByTagName('xf');
            for (let i = 0; i < xfNodes.length; i++) {
                const fontId = parseInt(xfNodes[i].getAttribute('fontId') || '0');
                isFormatBold.push(isFontBold[fontId] || false);
            }
        }
        
        // 2. Read sheet1.xml (assuming first sheet)
        const sheetFiles = Object.keys(zip.files).filter(f => f.startsWith('xl/worksheets/sheet'));
        if (sheetFiles.length === 0) return boldCells;
        
        // Prefer sheet1.xml if exists, otherwise fallback to first sheet
        const sheetFile = zip.file('xl/worksheets/sheet1.xml') || zip.file(sheetFiles[0]);
        const sheetXmlText = await sheetFile.async('text');
        const sheetDoc = parser.parseFromString(sheetXmlText, 'text/xml');
        
        const cNodes = sheetDoc.getElementsByTagName('c');
        for (let i = 0; i < cNodes.length; i++) {
            const cNode = cNodes[i];
            const ref = cNode.getAttribute('r');
            const s = parseInt(cNode.getAttribute('s') || '0');
            if (isFormatBold[s]) {
                boldCells[ref] = true;
            }
        }
    } catch (e) {
        console.error('Error parsing bold styles via JSZip:', e);
    }
    return boldCells;
}

// Excel data parser
function parseExcelToModules(workbook, boldCells = {}) {
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "", blankrows: true });

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

    // Default mapping (Columns A to W and shifted indices)
    let colIdx = {
        module: 0,
        userType: 1,
        pages: 2,
        reqGathering: 3,
        staticScreensCreation: 4,
        staticScreensPresentation: 5,
        staticScreensStatus: 6,
        dynamicDev: 7,
        internalReviewPoints: -1,
        internalReviewReview: 8,
        internalReviewStatus: 9,
        clientReviewPoints: -1,
        clientReviewReview: 10,
        clientReviewStatus: 11,
        qaStatus: -1,
        qaBugs: -1,
        qaBugsFixed: -1,
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
        else if (s.includes('internal') && (s.includes('point') || s.includes('no') || s.includes('pts'))) colIdx.internalReviewPoints = idx;
        else if (s.includes('internal') && s.includes('status')) colIdx.internalReviewStatus = idx;
        else if (s.includes('internal') && s.includes('review') && !s.includes('status') && !s.includes('point') && !s.includes('no') && !s.includes('pts')) colIdx.internalReviewReview = idx;
        else if (s.includes('client') && (s.includes('point') || s.includes('no') || s.includes('pts'))) colIdx.clientReviewPoints = idx;
        else if (s.includes('client') && s.includes('status')) colIdx.clientReviewStatus = idx;
        else if (s.includes('client') && s.includes('review') && !s.includes('status') && !s.includes('point') && !s.includes('no') && !s.includes('pts')) colIdx.clientReviewReview = idx;
        else if (s.includes('qa') && s.includes('status')) colIdx.qaStatus = idx;
        else if (s.includes('qa') && (s.includes('bug') || s.includes('no')) && !s.includes('fixed')) colIdx.qaBugs = idx;
        else if (s.includes('qa') && s.includes('fixed')) colIdx.qaBugsFixed = idx;
        else if (s.includes('cr') && s.includes('detail')) colIdx.crDetails = idx;
        else if (s.includes('cr') && s.includes('dev')) colIdx.crDevStatus = idx;
        else if (s.includes('cr') && s.includes('client')) colIdx.crClientReview = idx;
        else if (s.includes('cr') && s.includes('approval')) colIdx.crApproval = idx;
        else if (s.includes('final') && s.includes('status')) colIdx.finalStatus = idx;
        else if (s.includes('remark')) colIdx.remark = idx;
        else if (s.includes('dependency') || s.includes('blocker')) colIdx.dependency = idx;
        else if (s.includes('process') && s.includes('flow')) { colIdx.docProcessFlow = idx; console.log('Found docProcessFlow at col:', idx, 'header:', s); }
        else if (s.includes('user') && s.includes('manual')) { colIdx.docUserManual = idx; console.log('Found docUserManual at col:', idx, 'header:', s); }
        else if (s.includes('team') || s.includes('developer') || s === 'dev') colIdx.team = idx;
        else if (s.includes('time') || s.includes('duration') || s.includes('need')) colIdx.timeNeeded = idx;
    });

    // Positional fallback: if client review columns weren't detected by keyword,
    // find the 2nd occurrence of review-sub-column patterns (1st=internal, 2nd=client)
    if (colIdx.clientReviewPoints === -1 || colIdx.clientReviewReview === -1 || colIdx.clientReviewStatus === -1) {
        const reviewPtsIdx = [];
        const reviewTxtIdx = [];
        const reviewStsIdx = [];
        combinedHeaders.forEach((s, idx) => {
            if (s.includes('review') && (s.includes('no') || s.includes('point') || s.includes('pts')) && !s.includes('static') && !s.includes('dynamic') && !s.includes('final') && !s.includes('remark')) {
                reviewPtsIdx.push(idx);
            }
            if (s.includes('review') && s.includes('status') && !s.includes('static') && !s.includes('qa') && !s.includes('final') && !s.includes('cr')) {
                reviewStsIdx.push(idx);
            }
        });
        // Find pure 'review'-only sub-columns (no keywords like status/points/no/module/user/page/static/dynamic)
        combinedHeaders.forEach((s, idx) => {
            if (!s.includes('status') && !s.includes('no') && !s.includes('point') && !s.includes('pts')
                && !s.includes('static') && !s.includes('dynamic') && !s.includes('requirement')
                && !s.includes('user') && !s.includes('module') && !s.includes('page') && !s.includes('final')
                && !s.includes('remark') && !s.includes('dependency') && !s.includes('team') && !s.includes('time')
                && !s.includes('doc') && !s.includes('manual') && !s.includes('flow') && !s.includes('qa')
                && !s.includes('change') && !s.includes('cr') && !s.includes('approval') && !s.includes('live')
                && s.includes('review')) {
                reviewTxtIdx.push(idx);
            }
        });
        if (colIdx.internalReviewPoints === -1 && reviewPtsIdx[0] !== undefined) colIdx.internalReviewPoints = reviewPtsIdx[0];
        if (colIdx.clientReviewPoints  === -1 && reviewPtsIdx[1] !== undefined) colIdx.clientReviewPoints  = reviewPtsIdx[1];
        if (colIdx.internalReviewReview === -1 && reviewTxtIdx[0] !== undefined) colIdx.internalReviewReview = reviewTxtIdx[0];
        if (colIdx.clientReviewReview   === -1 && reviewTxtIdx[1] !== undefined) colIdx.clientReviewReview   = reviewTxtIdx[1];
        if (colIdx.internalReviewStatus === -1 && reviewStsIdx[0] !== undefined) colIdx.internalReviewStatus = reviewStsIdx[0];
        if (colIdx.clientReviewStatus   === -1 && reviewStsIdx[1] !== undefined) colIdx.clientReviewStatus   = reviewStsIdx[1];
        console.log('[PARSER] Positional fallback:', { reviewPtsIdx, reviewTxtIdx, reviewStsIdx, clientPts: colIdx.clientReviewPoints, clientRev: colIdx.clientReviewReview, clientSts: colIdx.clientReviewStatus });
    }

    // Fix clientReviewReview: if it's more than 3 cols away from clientReviewPoints,
    // it's likely a false positive (e.g. a CR 'client review' column). Snap it to
    // clientReviewPoints+1, which is always the Review sub-column.
    if (colIdx.clientReviewPoints !== -1 && colIdx.clientReviewReview !== -1 &&
        Math.abs(colIdx.clientReviewReview - colIdx.clientReviewPoints) > 3) {
        colIdx.clientReviewReview = colIdx.clientReviewPoints + 1;
        console.log('[PARSER] Snapped clientReviewReview to', colIdx.clientReviewReview);
    }
    // Similarly for internalReviewReview
    if (colIdx.internalReviewPoints !== -1 && colIdx.internalReviewReview !== -1 &&
        Math.abs(colIdx.internalReviewReview - colIdx.internalReviewPoints) > 3) {
        colIdx.internalReviewReview = colIdx.internalReviewPoints + 1;
    }

    // ── QA merge detection ──────────────────────────────────────────────────
    // rows[r] maps directly to worksheet row r (valid because blankrows:true).
    // Merges in the qaBugs column tell us which user types share a single
    // merged QA cell (e.g. Roll Observer + Election Observer).
    const _qaMergeMap = {};    // worksheetRowIdx → mergeGroupId
    const _qaMergeGroups = {}; // mergeGroupId → { startRow, endRow }
    if (colIdx.qaBugs !== -1 && worksheet['!merges']) {
        let _mgId = 0;
        worksheet['!merges'].forEach(merge => {
            const { s, e } = merge;
            // Only multi-row merges that overlap the qaBugs column
            if (s.c <= colIdx.qaBugs && e.c >= colIdx.qaBugs && e.r > s.r) {
                const gid = `_mg${_mgId++}`;
                _qaMergeGroups[gid] = { startRow: s.r, endRow: e.r };
                for (let ri = s.r; ri <= e.r; ri++) _qaMergeMap[ri] = gid;
            }
        });
    }
    console.log('[PARSER] QA merge groups:', Object.keys(_qaMergeGroups).length, JSON.stringify(_qaMergeGroups));

    // ── Remark merge detection ───────────────────────────────────────────────
    // Same approach as QA: if the remark cell is merged across ALL user types,
    // we suppress UT labels in the remark box (Sugamta, IPBMS, Samadhan, EVM).
    // If separate cells exist per UT (Preksha, Expenditure), labels are shown.
    const _remarkMergeMap = {};    // worksheetRowIdx → mergeGroupId
    const _remarkMergeGroups = {}; // mergeGroupId → { startRow, endRow }
    if (colIdx.remark !== -1 && worksheet['!merges']) {
        let _rmgId = 0;
        worksheet['!merges'].forEach(merge => {
            const { s, e } = merge;
            if (s.c <= colIdx.remark && e.c >= colIdx.remark && e.r > s.r) {
                const gid = `_rmg${_rmgId++}`;
                _remarkMergeGroups[gid] = { startRow: s.r, endRow: e.r };
                for (let ri = s.r; ri <= e.r; ri++) _remarkMergeMap[ri] = gid;
            }
        });
    }

    console.log('[HEADER PARSE] Final Column Indices:', JSON.stringify(colIdx));
    const parsedModules = {};
    const dataStartRowIndex = headerRowIndex + 3;
    let currentModuleName = '';
    let currentUserTypeName = '';
    let currentCategoryName = 'General';
    let lastUserTypeName = '';



    let inheritedProps = null;

    for (let r = dataStartRowIndex; r < rows.length; r++) {
        const row = rows[r];
        // Skip completely blank rows (all cells empty)
        if (!row || row.every(v => v === '' || v === undefined || v === null)) continue;

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
                remark: '',
                dependency: row[colIdx.dependency] || '',
                clientReviewPoints: (MODULES[id] && MODULES[id].clientReviewPoints) ? [...MODULES[id].clientReviewPoints] : [],
                documentation: {
                    processFlow: row[colIdx.docProcessFlow] || '-',
                    userManual: row[colIdx.docUserManual] || '-',
                    brd: '-',
                    srs: '-',
                    conceptNote: '-'
                },
                team: parseTeam(row[colIdx.team]),
                timeNeeded: row[colIdx.timeNeeded] || '',
                userTypes: []
            };
        }

        const mod = parsedModules[id];

        // Update module level fields if they were '-' but now have values
        const reqMergeMod = colIdx.reqGathering !== -1 ? getDocMergedCellData(worksheet, r, colIdx.reqGathering).value : undefined;
        const reqVal = reqMergeMod || row[colIdx.reqGathering];
        if (reqVal) {
            const val = reqVal.toString().trim();
            if (val !== '' && (mod.requirementGathering === '-' || (mod.requirementGathering.toLowerCase() === 'na' && val.toLowerCase() !== 'na'))) {
                mod.requirementGathering = val;
            }
        }
        // Static screens: update if still '-'; also override 'NA' if the current user type is not exempt (User Mgmt / Baseline Data)
        {
            const _exempt = EXEMPT_UT_PATTERNS.some(p => (currentUserTypeName || '').toLowerCase().includes(p));
            const _overrideNA = !_exempt; // for real user types, allow overriding an NA set by exempt rows
            const ssFields = [
                { col: 'staticScreensCreation',    key: 'creation'    },
                { col: 'staticScreensPresentation', key: 'presentation' }
                // Note: staticScreensStatus is per-page — derived in post-processing, not read per row
            ];
            ssFields.forEach(({ col, key }) => {
                const raw = (row[colIdx[col]] || '').toString().trim();
                const cur = (mod.staticScreens[key] || '').toLowerCase();
                if (!raw) return;
                if (cur === '-') { mod.staticScreens[key] = raw; return; }
                if (_overrideNA && cur === 'na' && raw.toLowerCase() !== 'na') { mod.staticScreens[key] = raw; }
            });
        }
        if (row[colIdx.finalStatus] && mod.finalStatus === '-') mod.finalStatus = row[colIdx.finalStatus];
        // Remark: use merge-aware helper so merged cells spanning multiple rows are read correctly
        if (colIdx.remark !== -1) {
            const remarkData = getDocMergedCellData(worksheet, r, colIdx.remark);
            const newRemark = (remarkData.value || '').toString().trim();
            if (newRemark && newRemark !== '-') {
                if (!mod.remark) {
                    mod.remark = newRemark;
                } else if (!mod.remark.includes(newRemark)) {
                    mod.remark += '\n' + newRemark;
                }
            }
        }
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
            const reqMerge = colIdx.reqGathering !== -1 ? getDocMergedCellData(worksheet, r, colIdx.reqGathering).value : '-';
            ut = {
                name: currentUserTypeName,
                reqGathering: reqMerge && reqMerge !== '-' ? reqMerge : (row[colIdx.reqGathering] || '-'),
                staticScreens: {
                    creation: row[colIdx.staticScreensCreation] || '-',
                    presentation: row[colIdx.staticScreensPresentation] || '-',
                    status: row[colIdx.staticScreensStatus] || '-'
                },
                timeNeeded: row[colIdx.timeNeeded] || '-',
                documentation: {
                    processFlow: row[colIdx.docProcessFlow] || '-',
                    userManual: row[colIdx.docUserManual] || '-',
                    brd: '-',
                    srs: '-',
                    conceptNote: '-'
                },
                dependency: row[colIdx.dependency] || '',
                categories: [],
                internalReviewPoints: 0,
                clientReviewPoints: 0,
                internalReviewStatus: '',
                clientReviewStatus: '',
                qaStatus: '',
                qaBugs: 0,
                qaBugsFixed: 0
            };
            mod.userTypes.push(ut);
        } else {
            const reqMerge = colIdx.reqGathering !== -1 ? getDocMergedCellData(worksheet, r, colIdx.reqGathering).value : '-';
            if (reqMerge && reqMerge !== '-' && ut.reqGathering === '-') {
                ut.reqGathering = reqMerge;
            } else if (row[colIdx.reqGathering] && ut.reqGathering === '-') {
                ut.reqGathering = row[colIdx.reqGathering];
            }
            if (row[colIdx.staticScreensCreation] && ut.staticScreens.creation === '-') ut.staticScreens.creation = row[colIdx.staticScreensCreation];
            if (row[colIdx.staticScreensPresentation] && ut.staticScreens.presentation === '-') ut.staticScreens.presentation = row[colIdx.staticScreensPresentation];
            if (row[colIdx.staticScreensStatus] && ut.staticScreens.status === '-') ut.staticScreens.status = row[colIdx.staticScreensStatus];
            if (row[colIdx.timeNeeded] && ut.timeNeeded === '-') ut.timeNeeded = row[colIdx.timeNeeded];
            if (row[colIdx.dependency] && !ut.dependency) ut.dependency = row[colIdx.dependency];
            
            if (!ut.documentation) {
                ut.documentation = { processFlow: '-', userManual: '-', brd: '-', srs: '-', conceptNote: '-' };
            }
            const pfData = getDocMergedCellData(worksheet, r, colIdx.docProcessFlow);
            const umData = getDocMergedCellData(worksheet, r, colIdx.docUserManual);
            console.log(`[DOC PARSE] Module: ${mod.name}, UT: ${ut.name} | Row: ${r} | docProcessFlow raw: '${row[colIdx.docProcessFlow]}', merged: '${pfData.value}' | docUserManual raw: '${row[colIdx.docUserManual]}', merged: '${umData.value}'`);
            if (pfData.value && pfData.value !== '-' && (ut.documentation.processFlow === '-' || ut.documentation.processFlow === '')) {
                ut.documentation.processFlow = pfData.value + '|||' + pfData.id;
            }
            if (umData.value && umData.value !== '-' && (ut.documentation.userManual === '-' || ut.documentation.userManual === '')) {
                ut.documentation.userManual = umData.value + '|||' + umData.id;
            }
        }

        // Accumulate user-type level review points and QA bugs/fixed if present in current row
        if (ut.internalReviewPoints === undefined) ut.internalReviewPoints = 0;
        if (ut.clientReviewPoints === undefined) ut.clientReviewPoints = 0;
        if (ut.qaBugs === undefined) ut.qaBugs = 0;
        if (ut.qaBugsFixed === undefined) ut.qaBugsFixed = 0;

        if (ut._intCellCount === undefined) ut._intCellCount = 0;
        if (ut._clCellCount === undefined) ut._clCellCount = 0;
        if (ut._intColPoints === undefined) ut._intColPoints = 0;
        if (ut._clColPoints === undefined) ut._clColPoints = 0;
        if (ut.internalReviews === undefined) ut.internalReviews = [];
        if (ut.clientReviews === undefined) ut.clientReviews = [];

        // Count J column cell (internal review) cell-by-cell if non-empty and non-bold
        if (colIdx.internalReviewReview !== -1) {
            const reviewVal = (row[colIdx.internalReviewReview] || '').toString().trim();
            if (reviewVal && reviewVal !== '-' && reviewVal.toLowerCase() !== 'none' && reviewVal.toLowerCase() !== 'no issues' && reviewVal.toLowerCase() !== 'no issue') {
                const colLetter = XLSX.utils.encode_col(colIdx.internalReviewReview);
                const cellRef = `${colLetter}${r + 1}`;
                const isBold = boldCells[cellRef] || false;
                if (!isBold) {
                    ut._intCellCount++;
                    const statusVal = colIdx.internalReviewStatus !== -1 ? (row[colIdx.internalReviewStatus] || '').toString().trim() : '';
                    ut.internalReviews.push({ text: reviewVal, status: statusVal });
                }
            }
        }

        // Count M column cell (client review) cell-by-cell if non-empty and non-bold
        if (colIdx.clientReviewReview !== -1) {
            const reviewVal = (row[colIdx.clientReviewReview] || '').toString().trim();
            if (reviewVal && reviewVal !== '-' && reviewVal.toLowerCase() !== 'none' && reviewVal.toLowerCase() !== 'no issues' && reviewVal.toLowerCase() !== 'no issue') {
                const colLetter = XLSX.utils.encode_col(colIdx.clientReviewReview);
                const cellRef = `${colLetter}${r + 1}`;
                const isBold = boldCells[cellRef] || false;
                if (!isBold) {
                    ut._clCellCount++;
                    const statusVal = colIdx.clientReviewStatus !== -1 ? (row[colIdx.clientReviewStatus] || '').toString().trim() : '';
                    ut.clientReviews.push({ text: reviewVal, status: statusVal });
                }
            }
        }

        // Also capture old explicit column values if any
        if (colIdx.internalReviewPoints !== -1 && row[colIdx.internalReviewPoints] !== undefined && row[colIdx.internalReviewPoints] !== '') {
            const val = parseInt(row[colIdx.internalReviewPoints]) || 0;
            if (val > 0) {
                ut._intColPoints = Math.max(ut._intColPoints, val);
            }
        }
        if (colIdx.clientReviewPoints !== -1 && row[colIdx.clientReviewPoints] !== undefined && row[colIdx.clientReviewPoints] !== '') {
            const val = parseInt(row[colIdx.clientReviewPoints]) || 0;
            if (val > 0) {
                ut._clColPoints = Math.max(ut._clColPoints, val);
            }
        }
        // Review status: capture once per user type (merged cell)
        if (colIdx.internalReviewStatus !== -1 && !ut.internalReviewStatus) {
            const s = (row[colIdx.internalReviewStatus] || '').toString().trim();
            if (s && s !== '-') ut.internalReviewStatus = s;
        }
        if (colIdx.clientReviewStatus !== -1 && !ut.clientReviewStatus) {
            const s = (row[colIdx.clientReviewStatus] || '').toString().trim();
            if (s && s !== '-') ut.clientReviewStatus = s;
        }
        // QA status: capture once per user type (merged cell)
        if (colIdx.qaStatus !== -1 && !ut.qaStatus) {
            const s = (row[colIdx.qaStatus] || '').toString().trim();
            if (s && s !== '-') ut.qaStatus = s;
        }
        if (colIdx.qaBugs !== -1 && row[colIdx.qaBugs] !== undefined && row[colIdx.qaBugs] !== '') {
            const val = parseInt(row[colIdx.qaBugs]) || 0;
            if (val > 0) ut.qaBugs += val;
        }
        if (colIdx.qaBugsFixed !== -1 && row[colIdx.qaBugsFixed] !== undefined && row[colIdx.qaBugsFixed] !== '') {
            const val = parseInt(row[colIdx.qaBugsFixed]) || 0;
            if (val > 0) ut.qaBugsFixed += val;
        }
        // Tag each user type with its QA merge group (if any)
        const _qaMergeGid = _qaMergeMap[r];
        if (_qaMergeGid && ut && !ut._qaMergeGid) ut._qaMergeGid = _qaMergeGid;
        // Tag each user type with its remark merge group (if any)
        const _remarkMergeGid = _remarkMergeMap[r];
        if (_remarkMergeGid && !ut._remarkMergeGid) ut._remarkMergeGid = _remarkMergeGid;
        // Store raw remark text on UT (no prefix — decided in render)
        if (!ut.remark && colIdx.remark !== -1) {
            const remarkData = getDocMergedCellData(worksheet, r, colIdx.remark);
            const remVal = (remarkData.value || '').toString().trim();
            if (remVal && remVal !== '-') ut.remark = remVal;
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
        if (isCategoryHeader(row, colIdx, r, boldCells)) {
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
        
        let intPts = 0;
        if (colIdx.internalReviewPoints !== -1) {
            const v = activeRow[colIdx.internalReviewPoints] || row[colIdx.internalReviewPoints];
            intPts = parseInt(v) || 0;
        }
        
        let clPts = 0;
        if (colIdx.clientReviewPoints !== -1) {
            const v = activeRow[colIdx.clientReviewPoints] || row[colIdx.clientReviewPoints];
            clPts = parseInt(v) || 0;
        }

        const ssCreationMerge = colIdx.staticScreensCreation !== -1 ? getDocMergedCellData(worksheet, r, colIdx.staticScreensCreation).value : '-';
        const ssPresentationMerge = colIdx.staticScreensPresentation !== -1 ? getDocMergedCellData(worksheet, r, colIdx.staticScreensPresentation).value : '-';
        const ssStatusMerge = colIdx.staticScreensStatus !== -1 ? getDocMergedCellData(worksheet, r, colIdx.staticScreensStatus).value : '-';

        const page = {
            name: pageName,
            dynamicDev: activeRow[colIdx.dynamicDev] || (row[colIdx.dynamicDev] || '-'),
            staticScreens: {
                creation: (ssCreationMerge && ssCreationMerge !== '-') ? ssCreationMerge : (activeRow[colIdx.staticScreensCreation] || (row[colIdx.staticScreensCreation] || '-')),
                presentation: (ssPresentationMerge && ssPresentationMerge !== '-') ? ssPresentationMerge : (activeRow[colIdx.staticScreensPresentation] || (row[colIdx.staticScreensPresentation] || '-')),
                status: (ssStatusMerge && ssStatusMerge !== '-') ? ssStatusMerge : (activeRow[colIdx.staticScreensStatus] || (row[colIdx.staticScreensStatus] || '-'))
            },
            internalReview: {
                review: activeRow[colIdx.internalReviewReview] || (row[colIdx.internalReviewReview] || '-'),
                status: activeRow[colIdx.internalReviewStatus] || (row[colIdx.internalReviewStatus] || '-'),
                points: intPts
            },
            clientReview: {
                review: activeRow[colIdx.clientReviewReview] || (row[colIdx.clientReviewReview] || '-'),
                status: activeRow[colIdx.clientReviewStatus] || (row[colIdx.clientReviewStatus] || '-'),
                points: clPts
            },
            qa: {
                status: colIdx.qaStatus !== -1 ? (activeRow[colIdx.qaStatus] || row[colIdx.qaStatus] || '-') : '-',
                bugs: colIdx.qaBugs !== -1 ? (parseInt(activeRow[colIdx.qaBugs] || row[colIdx.qaBugs]) || 0) : 0,
                fixed: colIdx.qaBugsFixed !== -1 ? (parseInt(activeRow[colIdx.qaBugsFixed] || row[colIdx.qaBugsFixed]) || 0) : 0
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
            
            // Recompute ut.staticScreens from pages if pages exist!
            const allPages = ut.categories.flatMap(c => c.pages);
            if (allPages.length > 0) {
                const _resolveSS = (key) => {
                    const vals = allPages.map(p => (p.staticScreens && p.staticScreens[key]) || '-').filter(v => v !== '-' && v !== '');
                    if (vals.length === 0) return '-';
                    const allDone = vals.every(v => v.toLowerCase() === 'done' || v.toLowerCase() === 'approved');
                    const allSkipped = vals.every(v => v.toLowerCase().includes('skip') || v.toLowerCase() === 'not done' || v.toLowerCase() === 'na');
                    // Only hasProgress for genuinely in-progress values (not done/skipped)
                    const hasProgress = vals.some(v => v.toLowerCase().includes('in progress') || v.toLowerCase().includes('partial'));
                    if (allDone) return 'Done';
                    if (allSkipped) return 'Skipped';
                    if (hasProgress) return 'In Progress';
                    // Mixed: if any skipped alongside done/progress treat as Skipped
                    const hasSkipped = vals.some(v => v.toLowerCase().includes('skip') || v.toLowerCase() === 'not done');
                    if (hasSkipped && !vals.some(v => v.toLowerCase().includes('progress'))) return 'Skipped';
                    return vals[0].charAt(0).toUpperCase() + vals[0].slice(1);
                };
                
                const hasAnySpecificPageValue = allPages.some(p => p.staticScreens && (p.staticScreens.creation !== '-' || p.staticScreens.presentation !== '-' || p.staticScreens.status !== '-'));
                
                if (hasAnySpecificPageValue) {
                    ut.staticScreens.creation = _resolveSS('creation');
                    ut.staticScreens.presentation = _resolveSS('presentation');
                    ut.staticScreens.status = _resolveSS('status');
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
        const applicableUTs = mod.userTypes.filter(ut => !isExemptUT(ut.name));
        if (applicableUTs.length > 0) {
            // Recompute requirementGathering
            const allReqs = applicableUTs.map(ut => (ut.reqGathering || '-').toLowerCase().trim());
            const hasReqInProgress = allReqs.some(r => r.includes('progress') || r.includes('pending'));
            const allReqDone = allReqs.every(r => r === 'done');
            const allReqNA = allReqs.every(r => r === 'na' || r === '-' || r === '');

            if (!allReqNA) {
                if (allReqDone) {
                    mod.requirementGathering = 'Done';
                } else if (hasReqInProgress) {
                    mod.requirementGathering = 'In Progress';
                }
            }

            // Recompute staticScreens from applicable user types only
            const ssCreations = applicableUTs.map(ut => ((ut.staticScreens && ut.staticScreens.creation) || '-').toLowerCase().trim());
            const ssPresentations = applicableUTs.map(ut => ((ut.staticScreens && ut.staticScreens.presentation) || '-').toLowerCase().trim());
            const ssStatuses = applicableUTs.map(ut => ((ut.staticScreens && ut.staticScreens.status) || '-').toLowerCase().trim());

            const resolveField = (values) => {
                const real = values.filter(v => v !== 'na' && v !== '-' && v !== '');
                if (real.length === 0) return null; // all NA/blank → leave as is
                const hasProgress = real.some(v => v.includes('progress') || v.includes('in progress'));
                const allDone = real.every(v => v === 'done');
                const hasSkipped = real.some(v => v.includes('skip'));
                if (allDone) return 'Done';
                if (hasProgress) return 'In Progress';
                if (hasSkipped) return 'Skipped';
                // Return the most informative non-NA value
                return real[0].charAt(0).toUpperCase() + real[0].slice(1);
            };

            const newCreation = resolveField(ssCreations);
            const newPresentation = resolveField(ssPresentations);
            const newStatus = resolveField(ssStatuses);

            if (newCreation !== null) mod.staticScreens.creation = newCreation;
            if (newPresentation !== null) mod.staticScreens.presentation = newPresentation;

            // Derive status from creation + presentation (don't use per-page status column)
            const c = (mod.staticScreens.creation || '').toLowerCase();
            const p = (mod.staticScreens.presentation || '').toLowerCase();
            const bothDone = c === 'done' && p === 'done';
            const anyProgress = c.includes('progress') || p.includes('progress');
            const anySkipped = c.includes('skip') || p.includes('skip');
            if (bothDone) mod.staticScreens.status = 'Done';
            else if (anyProgress) mod.staticScreens.status = 'In Progress';
            else if (anySkipped) mod.staticScreens.status = 'Skipped';
            else if (newCreation !== null || newPresentation !== null) mod.staticScreens.status = 'In Progress';
        }
    });

    // ── Build QA groups for per-UT breakdown display ──────────────────────
    Object.values(parsedModules).forEach(mod => {
        const nonExemptUTs = mod.userTypes.filter(ut => !isExemptUT(ut.name));
        const qaGroupMap = {}; // groupId → { utNames[], bugs, fixed }

        nonExemptUTs.forEach(ut => {
            if (ut._qaMergeGid) {
                // UT is inside a QA merged cell
                if (!qaGroupMap[ut._qaMergeGid]) {
                    qaGroupMap[ut._qaMergeGid] = { utNames: [], bugs: 0, fixed: 0 };
                }
                const g = qaGroupMap[ut._qaMergeGid];
                if (!g.utNames.includes(ut.name)) g.utNames.push(ut.name);
                g.bugs  += (ut.qaBugs      || 0);
                g.fixed += (ut.qaBugsFixed || 0);
            } else if (ut.qaBugs > 0 || ut.qaBugsFixed > 0) {
                // UT has its own (non-merged) QA data
                const gKey = `_ut_${ut.name}`;
                if (!qaGroupMap[gKey]) qaGroupMap[gKey] = { utNames: [ut.name], bugs: 0, fixed: 0 };
                qaGroupMap[gKey].bugs  += (ut.qaBugs      || 0);
                qaGroupMap[gKey].fixed += (ut.qaBugsFixed || 0);
            }
        });

        // Only keep groups that actually have bug data
        mod._qaGroups = Object.values(qaGroupMap).filter(g => g.bugs > 0 || g.fixed > 0);

        // Module-level = single group whose UTs cover (nearly) all non-exempt UTs
        const totalNonExempt = nonExemptUTs.length;
        const coveredUTs = mod._qaGroups.reduce((s, g) => s + g.utNames.length, 0);
        mod._qaModuleLevel = mod._qaGroups.length <= 1 &&
            (totalNonExempt === 0 || coveredUTs >= Math.max(1, totalNonExempt - 1));

        console.log(`[PARSER] QA groups for ${mod.name}: groups=${mod._qaGroups.length}, moduleLevel=${mod._qaModuleLevel}`,
            mod._qaGroups.map(g => `${g.utNames.join('+')}:${g.bugs}bugs`).join(', '));
    });

    // ── Build remark module-level flag ────────────────────────────────────
    // If the remark merged cell covers all/most non-exempt UTs → module-level
    // (suppress UT labels). Otherwise → per-UT labels.
    Object.values(parsedModules).forEach(mod => {
        const nonExemptUTs = mod.userTypes.filter(ut => !isExemptUT(ut.name));
        const remarkGroups = {}; // gid → [utName]
        const ungroupedWithRemark = [];

        mod.userTypes.forEach(ut => {
            if (ut._remarkMergeGid) {
                if (!remarkGroups[ut._remarkMergeGid]) remarkGroups[ut._remarkMergeGid] = [];
                remarkGroups[ut._remarkMergeGid].push(ut.name);
            } else if (ut.remark) {
                ungroupedWithRemark.push(ut.name);
            }
        });

        const mergeGroupCount = Object.keys(remarkGroups).length;
        const totalNonExempt = nonExemptUTs.length;

        if (mergeGroupCount === 1 && ungroupedWithRemark.length === 0) {
            const coveredUTs = Object.values(remarkGroups)[0].length;
            mod._remarkModuleLevel = coveredUTs >= Math.max(1, totalNonExempt - 1);
        } else if (mergeGroupCount === 0 && ungroupedWithRemark.length <= 1) {
            // 0 or 1 UT with a remark, no merge detected → module-level (no label)
            mod._remarkModuleLevel = true;
        } else {
            mod._remarkModuleLevel = false;
        }
        console.log(`[PARSER] Remark for ${mod.name}: moduleLevel=${mod._remarkModuleLevel}, mergeGroups=${mergeGroupCount}, ungrouped=${ungroupedWithRemark.length}`);
    });

    // Finalize review points (count review cells or fallback to column-based points)
    Object.values(parsedModules).forEach(mod => {
        let modIntCellTotal = 0;
        let modIntColTotal = 0;
        let modClCellTotal = 0;
        let modClColTotal = 0;
        
        mod.userTypes.forEach(ut => {
            modIntCellTotal += (ut._intCellCount || 0);
            modIntColTotal += (ut._intColPoints || 0);
            
            modClCellTotal += (ut._clCellCount || 0);
            modClColTotal += (ut._clColPoints || 0);
            
            if (ut._intCellCount && ut._intCellCount > 0) {
                ut.internalReviewPoints = ut._intCellCount;
            } else if (ut._intColPoints && ut._intColPoints > 0) {
                ut.internalReviewPoints = ut._intColPoints;
            } else {
                ut.internalReviewPoints = 0;
            }
            
            if (ut._clCellCount && ut._clCellCount > 0) {
                ut.clientReviewPoints = ut._clCellCount;
            } else if (ut._clColPoints && ut._clColPoints > 0) {
                ut.clientReviewPoints = ut._clColPoints;
            } else {
                ut.clientReviewPoints = 0;
            }
        });
        
        // Fix: Use the maximum of the module-level cell count and column points 
        // to prevent double counting when merged cells split texts and points across UTs
        mod._intRevPts = Math.max(modIntCellTotal, modIntColTotal);
        mod._clRevPts = Math.max(modClCellTotal, modClColTotal);
    });

    // DEBUG: log colIdx and review points for all modules
    console.log('[PARSER DEBUG] colIdx:', JSON.stringify(colIdx));
    Object.values(parsedModules).forEach(m => {
        console.log(`[PARSER DEBUG] Module: ${m.name} | _intRevPts=${m._intRevPts||0} | _clRevPts=${m._clRevPts||0}`);
        m.userTypes.forEach(ut => {
            console.log(`  UT: ${ut.name} | intPts=${ut.internalReviewPoints} | clPts=${ut.clientReviewPoints} | intStatus=${ut.internalReviewStatus} | clStatus=${ut.clientReviewStatus}`);
        });
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
    initMonthlyUploadListeners();
    startPresentationMode();
});

// ============================================
// QUICK REPORT VIEW
// ============================================

function getSubValClass(v) {
    const lv = (v || '').toLowerCase().trim();
    if (lv === 'done' || lv === 'completed') return 'qr-sub-done';
    if (lv.includes('progress')) return 'qr-sub-progress';
    if (lv === 'pending') return 'qr-sub-pending';
    if (lv === 'skipped') return 'qr-sub-skipped';
    if (lv === 'na' || lv === 'n/a' || lv === 'not applicable') return 'qr-sub-na';
    return 'qr-sub-neutral';
}

function getReviewStatusClass(status) {
    const s = (status || '').toLowerCase();
    if (s === 'done' || s === 'completed') return 'qr-review-done';
    if (s.includes('progress')) return 'qr-review-progress';
    if (s === 'pending') return 'qr-review-pending';
    return 'qr-review-neutral';
}

function getPhaseDetail(mod, stepName) {
    const totalPages = countPages(mod);
    const donePages = countDonePages(mod);
    const status = getStepStatus(mod, stepName);

    switch (stepName) {
        case 'Requirement Gathering': {
            const req = (mod.requirementGathering || '-').toString();
            if (req !== '-' && req.toLowerCase() !== 'na') {
                if (req.length > 60) return req.substring(0, 55) + '…';
                return req;
            }
            
            // Check non-exempt UTs if module string is not explicitly set or is 'NA'
            let allDone = true;
            let hasNonExempt = false;
            mod.userTypes.forEach(ut => {
                if (isExemptUT(ut.name)) return;
                hasNonExempt = true;
                const r = (ut.reqGathering || '').toLowerCase().trim();
                if (r !== 'done' && !r.includes('complete')) allDone = false;
            });
            
            if (hasNonExempt && allDone) return 'Done';
            return 'NA';
        }
        case 'Static screens': {
            const ss = mod.staticScreens;
            
            let ssDone = 0, ssSkipped = 0, ssProg = 0, ssTotal = 0;
            let allSameAsModule = true;
            
            mod.userTypes.forEach(ut => {
                if (isExemptUT(ut.name)) return;
                
                ut.categories.forEach(cat => {
                    cat.pages.forEach(p => {
                        const ps = (p.staticScreens.status || '').toLowerCase().trim();
                        if (ps && ps !== '-') {
                            ssTotal++;
                            if (ps === 'done' || ps.includes('complete') || ps.includes('approved') || ps.includes('reviewed')) ssDone++;
                            else if (ps === 'skipped' || ps === 'na' || ps === 'not required' || ps === 'not done') ssSkipped++;
                            else if (ps.includes('progress') || ps.includes('started')) ssProg++;
                            
                            if (ps !== (ss.status || '').toLowerCase().trim()) {
                                allSameAsModule = false;
                            }
                        }
                    });
                });
            });

            if (status === 'skipped') {
                return `<div class="qr-review-detail"><span class="qr-review-status-pill" style="background:rgba(148,163,184,0.15);color:#64748b;">⊘ Skipped</span></div>`;
            }

            const hasModuleValues = (ss.creation && ss.creation !== '-') || (ss.presentation && ss.presentation !== '-') || (ss.status && ss.status !== '-');
            
            if (hasModuleValues && (ssTotal === 0 || allSameAsModule)) {
                // Case 1
                const makeRow = (label, val) => {
                    if (!val || val === '-') return '';
                    return `<div class="qr-sub-row"><span class="qr-sub-key">${label}</span><span class="qr-sub-val ${getSubValClass(val)}">${val}</span></div>`;
                };
                const rows = [
                    makeRow('Creation', ss.creation),
                    makeRow('Presentation', ss.presentation),
                    makeRow('Status', ss.status)
                ].filter(Boolean);
                
                return rows.length > 0 ? `<div class="qr-sub-rows">${rows.join('')}</div>` : 'Not applicable';
            }
            
            if (ssTotal > 0) {
                // Cases 2 & 3
                const ssTbs = ssTotal - (ssDone + ssProg + ssSkipped);
                const hasBreakdown = (ssDone + ssProg + ssSkipped + ssTbs) > 0;
                const breakdownHtml = hasBreakdown ? `<div style="display:flex;flex-wrap:wrap;gap:2px;margin-top:3px;">${ssDone > 0 ? `<span class="qr-review-status-pill qr-review-done" style="font-size:0.55rem;padding:1px 5px;">✓ ${ssDone} Done</span>` : ''}${ssProg > 0 ? `<span class="qr-review-status-pill qr-review-progress" style="font-size:0.55rem;padding:1px 5px;">◐ ${ssProg} In Prog</span>` : ''}${ssSkipped > 0 ? `<span class="qr-review-status-pill" style="font-size:0.55rem;padding:1px 5px;background:rgba(148,163,184,0.15);color:#64748b;">⊘ ${ssSkipped} Skipped</span>` : ''}${ssTbs > 0 ? `<span class="qr-review-status-pill" style="font-size:0.55rem;padding:1px 5px;background:#f1f5f9;color:#64748b;border:1px solid #e2e8f0;">◷ ${ssTbs} TBS</span>` : ''}</div>` : '';
                return `<div class="qr-review-detail"><div class="qr-review-count-row"><span class="qr-review-num">${ssTotal}</span><span class="qr-review-pts-label">pages</span></div>${breakdownHtml}</div>`;
            }

            return 'Not applicable';
        }
        case 'Dynamic Development': {
            // Count per-status distribution across all pages
            let devDone2 = 0, devInProg = 0, devTBS = 0;
            mod.userTypes.forEach(ut => {
                ut.categories.forEach(cat => {
                    cat.pages.forEach(p => {
                        const s = (p.dynamicDev || '').toLowerCase().trim();
                        if (s === 'done') devDone2++;
                        else if (s.includes('progress') || s.includes('setup') || s.includes('partial')) devInProg++;
                        else devTBS++;
                    });
                });
            });
            const hasDevBreakdown = (devDone2 + devInProg + devTBS) > 0;
            const devBreakdownHtml = hasDevBreakdown ? `<div style="display:flex;flex-wrap:wrap;gap:2px;margin-top:3px;">${devDone2 > 0 ? `<span class="qr-review-status-pill qr-review-done" style="font-size:0.55rem;padding:1px 5px;">✓ ${devDone2} Done</span>` : ''}${devInProg > 0 ? `<span class="qr-review-status-pill qr-review-progress" style="font-size:0.55rem;padding:1px 5px;">◐ ${devInProg} In Prog</span>` : ''}${devTBS > 0 ? `<span class="qr-review-status-pill qr-review-pending" style="font-size:0.55rem;padding:1px 5px;">◷ ${devTBS} TBS</span>` : ''}</div>` : '';
            return `<div class="qr-review-detail"><div class="qr-review-count-row"><span class="qr-review-num">${totalPages}</span><span class="qr-review-pts-label">pages</span></div>${devBreakdownHtml}</div>`;
        }
        case 'Internal review': {
            const pts = countInternalReviewPoints(mod);
            // Build status breakdown from UT reviews
            // On Hold and Rejected shown as separate pills but excluded from green check
            let intDone = 0, intInProg = 0, intTBS = 0, intRejected = 0, intOnHold = 0;
            mod.userTypes.forEach(ut => {
                if (ut.internalReviews && ut.internalReviews.length > 0) {
                    ut.internalReviews.forEach(rev => {
                        const s = (rev.status || '').toLowerCase().trim();
                        if (s === 'done' || s === 'fixed') intDone++;
                        else if (s.includes('on hold')) intOnHold++;
                        else if (s === 'rejected') intRejected++;
                        else if (s.includes('progress')) intInProg++;
                        else intTBS++;
                    });
                }
            });
            const intBreakdownTotal = intDone + intInProg + intTBS + intRejected + intOnHold;
            // Use breakdown sum as the total when available so KPI + pills always match
            const intDisplayTotal = intBreakdownTotal > 0 ? intBreakdownTotal : pts;
            const hasBreakdown = intBreakdownTotal > 0;
            const breakdownHtml = hasBreakdown
                ? `<div style="display:flex;flex-wrap:wrap;gap:2px;margin-top:3px;">${intDone > 0 ? `<span class="qr-review-status-pill qr-review-done" style="font-size:0.55rem;padding:1px 5px;">✓ ${intDone} Done</span>` : ''}${intInProg > 0 ? `<span class="qr-review-status-pill qr-review-progress" style="font-size:0.55rem;padding:1px 5px;">◐ ${intInProg} In Prog</span>` : ''}${intTBS > 0 ? `<span class="qr-review-status-pill qr-review-pending" style="font-size:0.55rem;padding:1px 5px;">◷ ${intTBS} TBS</span>` : ''}${intOnHold > 0 ? `<span class="qr-review-status-pill" style="font-size:0.55rem;padding:1px 5px;background:rgba(251,191,36,0.15);color:#b45309;">⊘ ${intOnHold} On Hold</span>` : ''}${intRejected > 0 ? `<span class="qr-review-status-pill" style="font-size:0.55rem;padding:1px 5px;background:rgba(148,163,184,0.15);color:#64748b;">✗ ${intRejected} Rejected</span>` : ''}</div>`
                : '';
            return `<div class="qr-review-detail"><div class="qr-review-count-row"><span class="qr-review-num">${intDisplayTotal}</span><span class="qr-review-pts-label">review points</span></div>${breakdownHtml}</div>`;
        }
        case 'Client review': {
            const pts = countClientReviewPoints(mod);
            // Build status breakdown from UT reviews
            // On Hold and Rejected shown as separate pills but excluded from green check
            let clDone = 0, clInProg = 0, clTBS = 0, clRejected = 0, clOnHold = 0;
            mod.userTypes.forEach(ut => {
                if (ut.clientReviews && ut.clientReviews.length > 0) {
                    ut.clientReviews.forEach(rev => {
                        const s = (rev.status || '').toLowerCase().trim();
                        if (s === 'done' || s === 'approved') clDone++;
                        else if (s.includes('on hold')) clOnHold++;
                        else if (s === 'rejected') clRejected++;
                        else if (s.includes('progress')) clInProg++;
                        else clTBS++;
                    });
                }
            });
            const clBreakdownTotal = clDone + clInProg + clTBS + clRejected + clOnHold;
            const clDisplayTotal = clBreakdownTotal > 0 ? clBreakdownTotal : pts;
            const hasClBreakdown = clBreakdownTotal > 0;
            const clBreakdownHtml = hasClBreakdown
                ? `<div style="display:flex;flex-wrap:wrap;gap:2px;margin-top:3px;">${clDone > 0 ? `<span class="qr-review-status-pill qr-review-done" style="font-size:0.55rem;padding:1px 5px;">✓ ${clDone} Done</span>` : ''}${clInProg > 0 ? `<span class="qr-review-status-pill qr-review-progress" style="font-size:0.55rem;padding:1px 5px;">◐ ${clInProg} In Prog</span>` : ''}${clTBS > 0 ? `<span class="qr-review-status-pill qr-review-pending" style="font-size:0.55rem;padding:1px 5px;">◷ ${clTBS} TBS</span>` : ''}${clOnHold > 0 ? `<span class="qr-review-status-pill" style="font-size:0.55rem;padding:1px 5px;background:rgba(251,191,36,0.15);color:#b45309;">⊘ ${clOnHold} On Hold</span>` : ''}${clRejected > 0 ? `<span class="qr-review-status-pill" style="font-size:0.55rem;padding:1px 5px;background:rgba(148,163,184,0.15);color:#64748b;">✗ ${clRejected} Rejected</span>` : ''}</div>`
                : '';
            return `<div class="qr-review-detail"><div class="qr-review-count-row"><span class="qr-review-num">${clDisplayTotal}</span><span class="qr-review-pts-label">review points</span></div>${clBreakdownHtml}</div>`;
        }
        case 'QA': {
            // Always show the same format: big bug count + "bugs found" + fixed pill
            let bugs = 0, fixed = 0;
            if (mod._qaGroups && mod._qaGroups.length > 0) {
                bugs  = mod._qaGroups.reduce((s, g) => s + (g.bugs  || 0), 0);
                fixed = mod._qaGroups.reduce((s, g) => s + (g.fixed || 0), 0);
            } else {
                let hasUTBugs = false;
                mod.userTypes.forEach(ut => {
                    if (ut.qaBugs !== undefined && ut.qaBugs > 0) { hasUTBugs = true; bugs += ut.qaBugs; fixed += (ut.qaBugsFixed || 0); }
                });
                if (!hasUTBugs) {
                    mod.userTypes.forEach(ut => ut.categories.forEach(cat => cat.pages.forEach(p => { if (p.qa) { bugs += (p.qa.bugs||0); fixed += (p.qa.fixed||0); } })));
                }
            }

            if (bugs > 0) {
                const fixedPill = fixed > 0
                    ? `<span class="qr-review-status-pill qr-review-done">${fixed} fixed</span>`
                    : `<span class="qr-review-status-pill qr-review-progress">${status === 'done' ? 'Done' : 'In Progress'}</span>`;
                return `<div class="qr-review-detail"><div class="qr-review-count-row"><span class="qr-review-num">${bugs}</span><span class="qr-review-pts-label">bugs found</span></div>${fixedPill}</div>`;
            }
            // No bugs yet
            const noQaClass = status === 'done' ? 'qr-review-done' : status === 'in-progress' ? 'qr-review-progress' : 'qr-review-neutral';
            const noQaLabel = status === 'done' ? 'Completed' : status === 'in-progress' ? 'In Progress' : 'Not started';
            return `<div class="qr-review-detail"><span class="qr-review-status-pill ${noQaClass}">${noQaLabel}</span></div>`;
        }
        case 'Final Review': {
            // Only show done if finalStatus is explicitly Done — do NOT cascade from QA
            // if (mod.finalStatus && mod.finalStatus.toLowerCase().trim() === 'done') return 'Completed';
            return 'Awaiting data';
        }
        case 'Security implementation': {
            // if (mod.finalStatus && mod.finalStatus.toLowerCase().trim() === 'done') return 'Completed';
            return 'Awaiting data';
        }
        case 'UAT': {
            // if (mod.finalStatus && mod.finalStatus.toLowerCase().trim() === 'done') return 'Completed';
            return 'Awaiting data';
        }
        case 'Go Live': {
            // if (mod.finalStatus && mod.finalStatus.toLowerCase().trim() === 'done') return 'Deployed';
            return 'Awaiting data';
        }
        default:
            return '-';
    }
}

function getStatusDotColor(status) {
    switch (status) {
        case 'done': return 'var(--color-done)';
        case 'in-progress': return 'var(--color-progress)';
        case 'skipped': return 'var(--color-skipped)';
        case 'not-started': return '#cbd5e1';
        default: return '#cbd5e1';
    }
}

function showQuickReport() {
    // Hide all other pages
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('detail-page').classList.add('hidden');
    document.getElementById('team-page').classList.add('hidden');
    document.getElementById('presentation-page').classList.add('hidden');
    document.getElementById('monthly-upload-page').classList.add('hidden');
    document.getElementById('monthly-pres-page').classList.add('hidden');
    document.getElementById('quick-report-page').classList.remove('hidden');
    document.getElementById('back-btn').classList.remove('hidden');
    document.getElementById('page-title').classList.add('hidden');

    // Reset presentation mode if active
    if (presentationMode) {
        presentationMode = false;
        document.body.style.overflow = '';
        document.body.classList.remove('presentation-active');
        const btn = document.getElementById('pres-toggle-btn');
        if (btn) {
            btn.innerHTML = '<span>🎬 Presentation Mode</span>';
            btn.style.background = 'rgba(99, 102, 241, 0.12)';
            btn.style.color = '#4f46e5';
            btn.style.borderColor = 'rgba(99, 102, 241, 0.25)';
            btn.style.display = '';
        }
    }

    const uploadBtn = document.getElementById('upload-btn');
    if (uploadBtn) uploadBtn.classList.remove('hidden');

    const container = document.getElementById('qr-content');

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

    let html = '';

    MODULE_ORDER.forEach(mid => {
        const mod = MODULES[mid];
        if (!mod) return;

        const totalPages = countPages(mod);
        const donePages = countDonePages(mod);
        const progress = totalPages > 0 ? Math.round((donePages / totalPages) * 100) : 0;

        // Calculate tracker fill
        let lastDoneIndex = -1;
        const stepsStatus = trackerSteps.map((step, sIdx) => {
            const status = getStepStatus(mod, step);
            if (status === 'done') lastDoneIndex = sIdx;
            return status;
        });
        const fillPercent = trackerSteps.length > 1 ? (Math.max(0, lastDoneIndex) / (trackerSteps.length - 1)) * 100 : 0;

        html += `
            <div class="qr-module-row">
                <!-- Vertical Sidebar -->
                <div class="qr-module-sidebar" style="--mod-color: ${mod.color}; --mod-color-alpha: ${mod.color}cc;">
                    <div class="qr-module-name">${mod.name}</div>
                </div>

                <!-- Content Area -->
                <div class="qr-module-content">
                    <!-- Module Header -->
                    <div class="qr-module-header">
                        <div class="qr-module-header-left">
                            <div class="qr-module-icon" style="background: ${mod.color}12; color: ${mod.color}; border: 1px solid ${mod.color}25;">
                                ${ICONS[mod.id] || mod.icon}
                            </div>
                            <div class="qr-module-title">${mod.name}</div>
                        </div>
                        <div class="qr-module-meta">
                            <span class="qr-team-label">Team involved:</span>
                            <div class="qr-team-avatars">
                                ${mod.team.length > 0
                                    ? mod.team.map(name => {
                                        return `<div class="qr-team-badge" style="background: ${mod.color}10; color: ${mod.color}; border: 1px solid ${mod.color}25;">${name.trim()}</div>`;
                                    }).join('')
                                    : '<span class="qr-team-unassigned">Unassigned</span>'}
                            </div>
                        </div>
                    </div>

                    <!-- Compact Horizontal Tracker -->
                    <div class="qr-tracker">
                        <div class="qr-tracker-wrapper">
                            <div class="qr-tracker-line">
                                ${(() => {
                                    const n = trackerSteps.length;
                                    let segs = '';
                                    
                                    // Find last reached index (done, skipped, or in-progress)
                                    let lastReachedIndex = -1;
                                    for (let k = 0; k < n; k++) {
                                        const status = stepsStatus[k];
                                        if (status === 'done' || status === 'mixed-done' || status === 'skipped' || status === 'in-progress') {
                                            lastReachedIndex = k;
                                        }
                                    }
                                    
                                    for (let i = 0; i < n - 1; i++) {
                                        if (i >= lastReachedIndex) {
                                            continue; // Not reached yet (remains grey)
                                        }
                                        const leftPct  = (i / (n - 1)) * 100;
                                        const widthPct = (1 / (n - 1)) * 100;
                                        
                                        // Determine if we have passed through an "in progress" phase at or before step i
                                        let hasPassedInProgress = false;
                                        for (let k = 0; k <= i; k++) {
                                            if (stepsStatus[k] === 'in-progress') {
                                                hasPassedInProgress = true;
                                                break;
                                            }
                                        }
                                        
                                        const fill = hasPassedInProgress ? 'var(--color-progress)' : 'var(--color-done)';
                                        segs += `<div class="qr-tracker-seg" style="left:${leftPct.toFixed(2)}%;width:${widthPct.toFixed(2)}%;background:${fill};"></div>`;
                                    }
                                    return segs;
                                })()}
                            </div>
                            ${trackerSteps.map((step, sIdx) => {
                                const status = stepsStatus[sIdx];
                                let icon = sIdx + 1;
                                if (status === 'done' || status === 'mixed-done') icon = '✓';
                                else if (status === 'in-progress') icon = '◐';
                                
                                let dotStyle = '';
                                if (status === 'mixed-done') {
                                    dotStyle = 'style="background: linear-gradient(90deg, var(--color-done) 50%, #cbd5e1 50%); color: white; border: none;"';
                                }

                                let extraLabel = '';
                                if (status === 'skipped') extraLabel = '<br><span style="font-size:0.5rem;opacity:0.6;">(Skipped)</span>';
                                else if (status === 'mixed-done') extraLabel = '<br><span style="font-size:0.5rem;opacity:0.6;">(Done for some screens)</span>';

                                return `
                                    <div class="qr-tracker-step ${status === 'mixed-done' ? 'done' : status}">
                                        <div class="qr-tracker-dot" ${dotStyle}>${icon}</div>
                                        <div class="qr-tracker-label">${step}${extraLabel}</div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>

                    <!-- Phase Detail Boxes -->
                    <div class="qr-phase-grid">
                        ${trackerSteps.map((step, sIdx) => {
                            const status = stepsStatus[sIdx];
                            const detail = getPhaseDetail(mod, step);
                            const dotColor = getStatusDotColor(status);

                            return `
                                <div class="qr-phase-box qr-phase-${status === 'mixed-done' ? 'done' : status}">
                                    <div class="qr-phase-box-header">
                                        <div class="qr-phase-box-title">${step}</div>
                                        <div class="qr-phase-status-icon">${
                                            status === 'done'
                                            ? `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill="#16a34a"/><path d="M4 7.2l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
                                            : status === 'mixed-done'
                                            ? `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7,0 A7,7 0 0,0 7,14 Z" fill="#16a34a"/><path d="M7,0 A7,7 0 0,1 7,14 Z" fill="#cbd5e1"/><path d="M4 7.2l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
                                            : status === 'in-progress'
                                            ? `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill="#d97706"/><circle cx="7" cy="7" r="2.2" fill="#fff"/></svg>`
                                            : status === 'skipped'
                                            ? `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6.5" stroke="#94a3b8" stroke-width="1"/><path d="M4.5 9.5l5-5" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round"/></svg>`
                                            : `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6.5" stroke="#cbd5e1" stroke-width="1"/><path d="M7 4.5V7.2l1.8 1.3" stroke="#94a3b8" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`
                                        }</div>
                                    </div>
                                    <div class="qr-phase-box-detail">${detail}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>

                    <!-- Meta info row: Dependency + Documentation + Remark -->
                    <div class="qr-meta-row">
                        <div class="qr-meta-box qr-dep-box" style="border-color: ${mod.color}25; background: ${mod.color}05;">
                            <div class="qr-meta-label" style="color: ${mod.color};">
                                <span class="qr-meta-icon">⚠️</span> Dependency / Blocker
                            </div>
                            <div class="qr-meta-text">${(() => {
                                // Helper: treat "None", "-", empty as absent
                                const isBlank = v => {
                                    const s = (v || '').trim().toLowerCase();
                                    return !s || s === '-' || s === 'none' || s === 'n/a' || s === 'na';
                                };
                                const modDep = isBlank(mod.dependency) ? '' : (mod.dependency || '').trim();
                                const seenDeps = new Set(modDep ? [modDep.toLowerCase()] : []);
                                const utDeps = (mod.userTypes || [])
                                    .map(ut => ({ name: ut.name, dep: (ut.dependency || '').trim() }))
                                    .filter(({ dep }) => {
                                        if (isBlank(dep)) return false;
                                        const key = dep.toLowerCase();
                                        if (seenDeps.has(key)) return false; // duplicate of modDep or earlier UT
                                        seenDeps.add(key);
                                        return true;
                                    });
                                if (!modDep && utDeps.length === 0) return '<em>No active dependencies or blockers.</em>';
                                let out = '';
                                if (modDep) out += `<div style="margin-bottom:${utDeps.length ? '0.5rem' : '0'}">${modDep.replace(/\n/g, '<br>')}</div>`;
                                utDeps.forEach(({ name, dep }) => {
                                    out += `<div style="margin-bottom:0.35rem"><span style="font-weight:600;opacity:0.75;">${name}:</span> ${dep.replace(/\n/g, '<br>')}</div>`;
                                });
                                return out;
                            })()}</div>
                        </div>
                        <div class="qr-meta-box qr-doc-box" style="border-color: ${mod.color}25; background: ${mod.color}05;">
                            <div class="qr-meta-label" style="color: ${mod.color};">
                                <span class="qr-meta-icon">📄</span> Documentation
                            </div>
                            <div class="qr-doc-grid" style="display: flex; flex-direction: column; gap: 0.35rem;">
                                ${(() => {
                                    // UTs to exclude from documentation display
                                    const EXEMPT_DOC_UTS = ['user management', 'baseline data', 'baseline data configuration'];
                                    const isExemptDocUT = (name) => EXEMPT_DOC_UTS.some(e => (name || '').toLowerCase().includes(e));

                                    // Helper: strip the |||mergeId suffix added during doc parsing
                                    const cleanDocVal = (v) => {
                                        if (!v) return '-';
                                        const idx = v.indexOf('|||');
                                        return idx !== -1 ? v.substring(0, idx).trim() : v.trim();
                                    };

                                    const utDocs = [];
                                    if (mod.userTypes && mod.userTypes.length > 0) {
                                        mod.userTypes.forEach(ut => {
                                            if (isExemptDocUT(ut.name)) return; // skip User Mgmt / Baseline Data
                                            const pf = cleanDocVal((ut.documentation && ut.documentation.processFlow) ? ut.documentation.processFlow.toString() : '-');
                                            const um = cleanDocVal((ut.documentation && ut.documentation.userManual) ? ut.documentation.userManual.toString() : '-');
                                            if (pf !== '-' || um !== '-') {
                                                utDocs.push({ name: ut.name, processFlow: pf, userManual: um });
                                            }
                                        });
                                    }
                                    
                                    // Fallback to default mock data if empty
                                    if (utDocs.length === 0) {
                                        if (mod.id === 'samadhan') {
                                            utDocs.push({ name: 'DEO', processFlow: 'Done', userManual: '-' });
                                            utDocs.push({ name: 'RO', processFlow: 'Pending', userManual: '-' });
                                            utDocs.push({ name: 'Admin', processFlow: 'Pending', userManual: '-' });
                                        } else if (mod.id === 'expenditure') {
                                            utDocs.push({ name: 'DEO', processFlow: 'Done', userManual: 'Done' });
                                            utDocs.push({ name: 'Candidate', processFlow: 'Pending', userManual: 'Pending' });
                                        } else {
                                            utDocs.push({
                                                name: 'All Users',
                                                processFlow: cleanDocVal((mod.documentation && mod.documentation.processFlow) ? mod.documentation.processFlow : '-'),
                                                userManual: cleanDocVal((mod.documentation && mod.documentation.userManual) ? mod.documentation.userManual : '-')
                                            });
                                        }
                                    }

                                    // Helper: classify a doc status value into a CSS class
                                    const getDocClass = (val) => {
                                        const lv = val.toLowerCase();
                                        if (lv === 'done' || lv.includes('complete') || lv.includes('approve')) return 'qr-doc-done';
                                        if (lv.includes('to be updated') || lv.includes('updated') || lv.includes('update')) return 'qr-doc-updated';
                                        if (lv.includes('progress')) return 'qr-doc-progress';
                                        return 'qr-doc-pending';
                                    };
                                    
                                    let html = `
                                        <div style="display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) 1px minmax(0, 1fr); align-items: center; margin-bottom: 0.35rem; padding-bottom: 0.25rem; border-bottom: 1px solid rgba(0,0,0,0.06);">
                                            <div></div>
                                            <div style="text-align: center; font-size: 0.62rem; color: var(--text-secondary); font-weight: 700; padding-right: 0.2rem;">Process Flow</div>
                                            <div style="width: 1px; background: rgba(0,0,0,0.1); height: 1rem; justify-self: center;"></div>
                                            <div style="text-align: center; font-size: 0.62rem; color: var(--text-secondary); font-weight: 700; padding-left: 0.2rem;">User Manual</div>
                                        </div>
                                    `;
                                    
                                    html += utDocs.map((d, index) => {
                                        const pfStatus = d.processFlow !== '-' && d.processFlow !== '' ? d.processFlow : 'Pending';
                                        const umStatus = d.userManual !== '-' && d.userManual !== '' ? d.userManual : 'Pending';
                                        const pfClass = getDocClass(pfStatus);
                                        const umClass = getDocClass(umStatus);
                                        
                                        return `
                                            <div class="qr-doc-ut-section" style="display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) 1px minmax(0, 1fr); align-items: center; gap: 0; ${index > 0 ? 'border-top: 1px dashed rgba(0,0,0,0.08); padding-top: 0.35rem; margin-top: 0.15rem;' : ''}">
                                                <div class="qr-doc-ut-name" style="font-weight: 700; font-size: 0.62rem; color: ${mod.color}; opacity: 0.85; text-align: left; padding-right: 0.3rem;">${d.name}</div>
                                                <div style="display: flex; justify-content: center; padding-right: 0.2rem;">
                                                    <span class="qr-doc-val ${pfClass}" style="max-width: 100%; text-align: center;">${pfStatus}</span>
                                                </div>
                                                <div style="width: 1px; background: rgba(0,0,0,0.08); height: 100%; min-height: 1.2rem; justify-self: center;"></div>
                                                <div style="display: flex; justify-content: center; padding-left: 0.2rem;">
                                                    <span class="qr-doc-val ${umClass}" style="max-width: 100%; text-align: center;">${umStatus}</span>
                                                </div>
                                            </div>
                                        `;
                                    }).join('');
                                    
                                    return html;
                                })()}
                            </div>
                        </div>
                        <div class="qr-meta-box qr-remark-box-inline" style="border-color: ${mod.color}25; background: ${mod.color}05;">
                            <div class="qr-meta-label" style="color: ${mod.color};">
                                <span class="qr-meta-icon">💬</span> Remark
                            </div>
                            <div class="qr-meta-text">${(() => {
                                // Module-level (merged cell spanning all UTs): no UT labels
                                if (mod._remarkModuleLevel !== false) {
                                    return mod.remark
                                        ? mod.remark.replace(/\n/g, '<br>')
                                        : '<em>No remarks registered.</em>';
                                }
                                // Per-UT: show each UT's distinct remark with a bold label
                                const parts = [];
                                const seen = new Set();
                                (mod.userTypes || []).forEach(ut => {
                                    if (!ut.remark) return;
                                    const key = ut.remark.toLowerCase().trim();
                                    if (seen.has(key)) return;
                                    seen.add(key);
                                    parts.push(`<div style="margin-bottom:0.35rem"><span style="font-weight:600;opacity:0.75;">${ut.name}:</span> ${ut.remark.replace(/\n/g, '<br>')}</div>`);
                                });
                                // Always fall back to mod.remark if no UT-level remarks found
                                if (parts.length > 0) return parts.join('');
                                return mod.remark
                                    ? mod.remark.replace(/\n/g, '<br>')
                                    : '<em>No remarks registered.</em>';
                            })()}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function downloadQuickReportPDF() {
    const modal = document.getElementById('print-modal');
    if (modal) {
        modal.classList.add('active');
        selectPrintOption('landscape');
    } else {
        window.print();
    }
}

function closePrintModal() {
    const modal = document.getElementById('print-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function selectPrintOption(option) {
    const cards = document.querySelectorAll('.print-option-card');
    cards.forEach(card => {
        const input = card.querySelector('input');
        if (input.value === option) {
            input.checked = true;
            card.style.borderColor = '#6366f1';
            card.style.background = 'rgba(99, 102, 241, 0.05)';
        } else {
            input.checked = false;
            card.style.borderColor = '';
            card.style.background = '';
        }
    });
}

function confirmPrintLayout() {
    const selectedLayout = document.querySelector('input[name="print-layout-option"]:checked').value;
    
    // Remove old style tag if exists
    let dynamicStyle = document.getElementById('dynamic-print-rules');
    if (dynamicStyle) {
        dynamicStyle.remove();
    }
    
    dynamicStyle = document.createElement('style');
    dynamicStyle.id = 'dynamic-print-rules';
    
    if (selectedLayout === 'landscape') {
        dynamicStyle.innerHTML = `
            @media print {
                @page {
                    size: A4 landscape;
                    margin: 6mm 10mm;
                }
                /* 1 module per page in landscape */
                .qr-module-row {
                    display: flex !important;
                    break-inside: avoid !important;
                    page-break-inside: avoid !important;
                    break-after: page !important;
                    page-break-after: always !important;
                    margin-bottom: 0 !important;
                }
                .qr-module-row:last-of-type {
                    break-after: avoid !important;
                    page-break-after: avoid !important;
                }
                /* Reset any nth-of-type rules from base CSS */
                .qr-module-row:nth-of-type(2n),
                .qr-module-row:nth-of-type(3n) {
                    break-after: page !important;
                    page-break-after: always !important;
                }
                /* Larger fonts since full landscape page per module */
                .qr-module-title      { font-size: 1.0rem !important; }
                .qr-module-icon       { width: 22px !important; height: 22px !important; font-size: 0.75rem !important; }
                .qr-phase-box-title   { font-size: 0.72rem !important; }
                .qr-phase-box-detail  { font-size: 0.65rem !important; line-height: 1.2 !important; }
                .qr-review-num        { font-size: 1.1rem !important; }
                .qr-review-pts-label  { font-size: 0.65rem !important; }
                .qr-review-status-pill{ font-size: 0.63rem !important; padding: 0.1rem 0.45rem !important; }
                .qr-sub-key           { font-size: 0.65rem !important; }
                .qr-sub-val           { font-size: 0.63rem !important; padding: 0.08rem 0.4rem !important; }
                .qr-tracker-label     { font-size: 0.54rem !important; }
                .qr-tracker-dot       { width: 18px !important; height: 18px !important; font-size: 0.5rem !important; }
                .qr-tracker-line      { top: 9px !important; }
                .qr-meta-text         { font-size: 0.7rem !important; line-height: 1.35 !important; }
                .qr-meta-label        { font-size: 0.62rem !important; }
                .qr-team-badge, .qr-time-chip { font-size: 0.62rem !important; padding: 0.1rem 0.35rem !important; }
                .qr-team-label        { font-size: 0.62rem !important; }
                .qr-doc-key           { font-size: 0.65rem !important; }
                .qr-doc-val           { font-size: 0.62rem !important; padding: 0.08rem 0.35rem !important; }
                .qr-phase-box         { padding: 0.35rem 0.5rem !important; gap: 0.18rem !important; }
                .qr-phase-grid        { gap: 0.25rem !important; }
                .qr-sub-rows, .qr-review-detail { gap: 0.18rem !important; }
                .qr-meta-row {
                    display: grid !important;
                    grid-template-columns: 1fr 1fr 2fr !important;
                    grid-template-rows: auto !important;
                    gap: 0.4rem !important;
                }
                .qr-dep-box, .qr-doc-box, .qr-remark-box-inline {
                    grid-column: auto !important;
                    grid-row: auto !important;
                }
                .qr-module-sidebar {
                    display: flex !important;
                    flex-shrink: 0 !important;
                    width: 36px !important;
                    min-width: 36px !important;
                    overflow: hidden !important;
                    position: relative !important;
                    background: var(--mod-color) !important;
                }
                .qr-module-name {
                    position: absolute !important;
                    top: 50% !important; left: 50% !important;
                    writing-mode: horizontal-tb !important;
                    transform: translate(-50%, -50%) rotate(-90deg) !important;
                    font-size: 0.55rem !important;
                    letter-spacing: 0.04em !important;
                    white-space: nowrap !important;
                    max-width: 200px !important;
                    overflow: hidden !important;
                    text-overflow: ellipsis !important;
                    text-align: center !important;
                }
                .qr-tracker { padding: 0.4rem 0 !important; }
            }
        `;
    } else {
        dynamicStyle.innerHTML = `
            @media print {
                @page {
                    size: A4 portrait;
                    margin: 6mm 8mm;
                }
                /* 2 modules per page in portrait */
                .qr-module-row {
                    display: flex !important;
                    break-inside: avoid !important;
                    page-break-inside: avoid !important;
                    margin-bottom: 0.25rem !important;
                }
                /* Reset any nth-of-type rules from base CSS */
                .qr-module-row:nth-of-type(2n),
                .qr-module-row:nth-of-type(3n) {
                    break-after: avoid !important;
                    page-break-after: avoid !important;
                }
                /* Force exactly 2 modules per page */
                .qr-module-row:nth-of-type(2n) {
                    break-after: page !important;
                    page-break-after: always !important;
                }
                .qr-module-row:last-of-type {
                    break-after: avoid !important;
                    page-break-after: avoid !important;
                }
                /* Medium-large fonts for 2-per-page portrait */
                .qr-module-title      { font-size: 0.88rem !important; }
                .qr-module-icon       { width: 20px !important; height: 20px !important; font-size: 0.68rem !important; }
                .qr-phase-box-title   { font-size: 0.62rem !important; }
                .qr-phase-box-detail  { font-size: 0.58rem !important; line-height: 1.15 !important; }
                .qr-review-num        { font-size: 0.95rem !important; }
                .qr-review-pts-label  { font-size: 0.58rem !important; }
                .qr-review-status-pill{ font-size: 0.56rem !important; padding: 0.08rem 0.38rem !important; }
                .qr-sub-key           { font-size: 0.58rem !important; }
                .qr-sub-val           { font-size: 0.56rem !important; padding: 0.06rem 0.35rem !important; }
                .qr-tracker-label     { font-size: 0.48rem !important; }
                .qr-tracker-dot       { width: 15px !important; height: 15px !important; font-size: 0.46rem !important; }
                .qr-tracker-line      { top: 7.5px !important; }
                .qr-meta-text         { font-size: 0.62rem !important; line-height: 1.3 !important; }
                .qr-meta-label        { font-size: 0.56rem !important; }
                .qr-team-badge, .qr-time-chip { font-size: 0.56rem !important; padding: 0.08rem 0.28rem !important; }
                .qr-team-label        { font-size: 0.56rem !important; color: #475569 !important; }
                .qr-doc-key           { font-size: 0.58rem !important; }
                .qr-doc-val           { font-size: 0.55rem !important; padding: 0.06rem 0.28rem !important; }
                .qr-phase-box         { padding: 0.28rem 0.4rem !important; gap: 0.12rem !important; }
                .qr-phase-grid        { gap: 0.18rem !important; }
                .qr-sub-rows, .qr-review-detail { gap: 0.14rem !important; }
                .qr-meta-row {
                    display: grid !important;
                    grid-template-columns: 1fr 1.6fr !important;
                    grid-template-rows: auto auto !important;
                    gap: 0.25rem !important;
                }
                .qr-dep-box  { grid-column: 1 !important; grid-row: 1 !important; }
                .qr-doc-box  { grid-column: 1 !important; grid-row: 2 !important; }
                .qr-remark-box-inline { grid-column: 2 !important; grid-row: 1 / span 2 !important; }
                .qr-module-sidebar {
                    display: flex !important;
                    flex-shrink: 0 !important;
                    width: 34px !important;
                    min-width: 34px !important;
                    overflow: hidden !important;
                    position: relative !important;
                    background: var(--mod-color) !important;
                }
                .qr-module-name {
                    position: absolute !important;
                    top: 50% !important; left: 50% !important;
                    writing-mode: horizontal-tb !important;
                    transform: translate(-50%, -50%) rotate(-90deg) !important;
                    font-size: 0.5rem !important;
                    letter-spacing: 0.04em !important;
                    white-space: nowrap !important;
                    max-width: 190px !important;
                    overflow: hidden !important;
                    text-overflow: ellipsis !important;
                    text-align: center !important;
                }
                .qr-tracker { padding: 0.3rem 0 !important; }
            }
        `;
    }
    
    document.head.appendChild(dynamicStyle);
    
    // Close modal
    closePrintModal();
    
    // Trigger print
    window.print();
}

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
    const qrPage = document.getElementById('quick-report-page');
    if (qrPage) qrPage.classList.add('hidden');
    const monthlyUp = document.getElementById('monthly-upload-page');
    if (monthlyUp) monthlyUp.classList.add('hidden');
    const monthlyPres = document.getElementById('monthly-pres-page');
    if (monthlyPres) monthlyPres.classList.add('hidden');
    if (backBtn) backBtn.classList.add('hidden');
    if (pageTitle) pageTitle.classList.remove('hidden');
    if (uploadBtn) uploadBtn.classList.add('hidden');
    const qrBtn = document.getElementById('quick-report-btn');
    if (qrBtn) qrBtn.style.display = 'none';
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
    // 0. Module-level accumulation (captures values from separator rows before any UT is set)
    if (mod._intRevPts && mod._intRevPts > 0) {
        return mod._intRevPts;
    }

    // 1. Check if any userType has explicit points parsed
    let hasUTExplicitPoints = false;
    let utCount = 0;
    mod.userTypes.forEach(ut => {
        if (ut.internalReviewPoints !== undefined && ut.internalReviewPoints > 0) {
            hasUTExplicitPoints = true;
            utCount += ut.internalReviewPoints;
        }
    });
    if (hasUTExplicitPoints) {
        return utCount;
    }

    // 2. Check if any pages have explicit points
    let count = 0;
    let hasExplicitPoints = false;
    mod.userTypes.forEach(ut => {
        ut.categories.forEach(cat => {
            cat.pages.forEach(p => {
                if (p.internalReview && typeof p.internalReview.points === 'number') {
                    count += p.internalReview.points;
                    if (p.internalReview.points > 0) {
                        hasExplicitPoints = true;
                    }
                }
            });
        });
    });
    if (hasExplicitPoints) {
        return count;
    }

    // 3. Fallback: count bullet-point lines in review text (lines starting with '-' or '•')
    //    This correctly handles merged 'No of review points' cells that weren't detected.
    let fallbackCount = 0;
    mod.userTypes.forEach(ut => {
        ut.categories.forEach(cat => {
            cat.pages.forEach(p => {
                const r = (p.internalReview.review || '').trim();
                if (!r || r === '-' || r.toLowerCase() === 'none' || r.toLowerCase() === 'no issues') return;
                // Count lines starting with '-' or '•' as individual points
                const bullets = r.split('\n').filter(line => /^\s*[-•*]/.test(line));
                if (bullets.length > 0) {
                    fallbackCount += bullets.length;
                } else {
                    fallbackCount++; // treat entire review as 1 point if no bullets
                }
            });
        });
    });
    return fallbackCount;
}

function resolveReviewStatus(statuses) {
    // Apply the 5 rules:
    // 1. pending + done (no in-progress) → In Progress
    // 2. all pending → Pending
    // 3. all done → Done
    // 4. in-progress + done → In Progress
    // 5. all in-progress → In Progress
    // Note: 'on hold' and 'rejected' are EXCLUDED from the green check calculation.
    //       They are shown as separate pills in the Quick Report but do NOT affect the indicator.
    const real = statuses.map(s => s.toLowerCase().trim()).filter(s => s && s !== '-' && s !== '');
    if (real.length === 0) return null; // no data
    // Filter out 'on hold' and 'rejected' for tracker status determination
    const counted = real.filter(s => !s.includes('on hold') && !s.includes('rejected'));
    if (counted.length === 0) return null; // all items are on hold/rejected — don't affect indicator
    const hasProgress  = counted.some(s => s.includes('progress'));
    const hasPending   = counted.some(s => s.includes('pending') || s.includes('not started') || s.includes('to be started'));
    const hasDone      = counted.some(s => s.includes('done') || s.includes('approved') || s.includes('complete'));
    const allDone      = counted.every(s => s.includes('done') || s.includes('approved') || s.includes('complete'));
    const hasSkipped   = counted.some(s => s.includes('skip'));

    if (allDone) return 'Done';                               // all counted items done → green
    if (hasProgress) return 'In Progress';                    // rules 4 & 5
    if (hasPending && hasDone) return 'In Progress';          // rule 1
    if (hasPending && !hasDone && !hasProgress) return 'Pending'; // rule 2
    if (hasDone && !hasPending && !hasProgress) return 'Done';    // rule 3
    if (hasSkipped) return 'Skipped';
    // Fallback: return the first real value capitalised
    return counted[0].charAt(0).toUpperCase() + counted[0].slice(1);
}

function getInternalReviewStatus(mod) {
    // Collect all non-empty statuses from user-type level (merged cells) first
    const utStatuses = mod.userTypes
        .map(ut => (ut.internalReviewStatus || '').trim())
        .filter(s => s && s !== '-');

    if (utStatuses.length > 0) {
        const resolved = resolveReviewStatus(utStatuses);
        if (resolved) return resolved;
    }

    // Fallback: collect page-level statuses (ALL pages, including those without review text,
    // because the status merged cell may be on a page row that has no review text)
    const pageStatuses = [];
    let hasAnyReview = false;
    mod.userTypes.forEach(ut => {
        ut.categories.forEach(cat => {
            cat.pages.forEach(p => {
                const r = (p.internalReview.review || '').trim();
                const s = (p.internalReview.status || '').trim();
                if (r && r !== '-' && r.toLowerCase() !== 'none' && r.toLowerCase() !== 'no issues') hasAnyReview = true;
                if (s && s !== '-') pageStatuses.push(s);
            });
        });
    });

    if (pageStatuses.length > 0) {
        const resolved = resolveReviewStatus(pageStatuses);
        if (resolved) return resolved;
    }
    if (!hasAnyReview) return 'Done'; // No review points at all → done
    return 'Pending'; // Has review content but no status recorded
}

function getClientReviewStatus(mod) {
    // Collect all non-empty statuses from user-type level (merged cells) first
    const utStatuses = mod.userTypes
        .map(ut => (ut.clientReviewStatus || '').trim())
        .filter(s => s && s !== '-');

    if (utStatuses.length > 0) {
        const resolved = resolveReviewStatus(utStatuses);
        if (resolved) return resolved;
    }

    // Fallback: collect ALL page-level statuses
    const pageStatuses = [];
    let hasAnyReview = false;
    mod.userTypes.forEach(ut => {
        ut.categories.forEach(cat => {
            cat.pages.forEach(p => {
                const r = (p.clientReview && p.clientReview.review) ? p.clientReview.review.trim() : '';
                const s = (p.clientReview && p.clientReview.status) ? p.clientReview.status.trim() : '';
                if (r && r !== '-' && r.toLowerCase() !== 'none' && r.toLowerCase() !== 'no issues') hasAnyReview = true;
                if (s && s !== '-') pageStatuses.push(s);
            });
        });
    });

    if (pageStatuses.length > 0) {
        const resolved = resolveReviewStatus(pageStatuses);
        if (resolved) return resolved;
    }
    if (!hasAnyReview) return 'Done';
    return 'Pending';
}

function getStepStatus(mod, stepName) {
    const finalDone = mod.finalStatus && mod.finalStatus.toLowerCase().trim() === 'done';
    
    switch (stepName) {
        case 'Requirement Gathering': {
            const req = (mod.requirementGathering || '').toLowerCase().trim();
            if (req === 'done' || req.includes('complete')) return 'done';
            if (req.includes('progress') || req.includes('started')) return 'in-progress';
            
            let reqTotal = 0, reqDone = 0, reqProg = 0;
            mod.userTypes.forEach(ut => {
                if (isExemptUT(ut.name)) return;
                reqTotal++;
                const r = (ut.reqGathering || '').toLowerCase().trim();
                if (r === 'done' || r.includes('complete')) reqDone++;
                else if (r.includes('progress') || r.includes('started')) reqProg++;
            });
            if (reqTotal > 0 && reqDone === reqTotal) return 'done';
            if (reqProg > 0 || reqDone > 0) return 'in-progress';
            return 'not-started';
        }
        case 'Static screens': {
            let ssProg = 0, ssDone = 0, ssSkipped = 0, ssTotal = 0;
            mod.userTypes.forEach(ut => {
                if (isExemptUT(ut.name)) return;
                
                ut.categories.forEach(cat => {
                    cat.pages.forEach(p => {
                        const ps = (p.staticScreens.status || '').toLowerCase().trim();
                        if (ps && ps !== '-') {
                            ssTotal++;
                            if (ps === 'done' || ps.includes('complete') || ps.includes('approved') || ps.includes('reviewed')) ssDone++;
                            else if (ps === 'skipped' || ps === 'na' || ps === 'not required' || ps === 'not done') ssSkipped++;
                            else if (ps.includes('progress') || ps.includes('started')) ssProg++;
                        }
                    });
                });
            });
            
            if (ssTotal > 0) {
                if (ssProg > 0) return 'in-progress';
                if (ssSkipped === ssTotal) return 'skipped';
                if (ssDone + ssSkipped === ssTotal) {
                    if (ssSkipped > 0 && ssDone > 0) return 'mixed-done';
                    return 'done';
                }
                if (ssDone > 0 || ssSkipped > 0) return 'in-progress';
            }
            
            return 'not-started';
        }

        case 'Dynamic Development':
            const devTotal = countPages(mod);
            const devDone = countDonePages(mod);
            if (devTotal > 0 && devDone === devTotal) return 'done';
            if (devDone > 0) return 'in-progress';
            return 'not-started';
        case 'Internal review': {
            // Use UT-level status first (from merged cells)
            const intUtStatuses = mod.userTypes.map(ut => (ut.internalReviewStatus || '').trim()).filter(s => s && s !== '-');
            if (intUtStatuses.length > 0) {
                const resolved = resolveReviewStatus(intUtStatuses);
                if (resolved === 'Done') return 'done';
                if (resolved === 'In Progress') return 'in-progress';
                if (resolved === 'Pending') return 'not-started';
            }
            // Also check UT internalReviews array for done/pending counts
            // 'on hold' and 'rejected' are excluded from the green check (not counted)
            let intTotal = 0;
            let intDoneCount = 0;
            let intNotStartedCount = 0;
            mod.userTypes.forEach(ut => {
                // If UT has per-review data, use that
                if (ut.internalReviews && ut.internalReviews.length > 0) {
                    ut.internalReviews.forEach(rev => {
                        const s = (rev.status || '').toLowerCase().trim();
                        if (s.includes('on hold') || s.includes('rejected')) return; // excluded
                        intTotal++;
                        if (s === 'done' || s === 'fixed') intDoneCount++;
                        else if (!s || s === '-') intNotStartedCount++;
                    });
                } else {
                    ut.categories.forEach(cat => {
                        cat.pages.forEach(p => {
                            const s = (p.internalReview.status || '').toLowerCase().trim();
                            const r = (p.internalReview.review || '').toLowerCase().trim();
                            if (s.includes('on hold') || s.includes('rejected')) return; // excluded
                            intTotal++;
                            if (s === 'done' || s === 'fixed' || r === 'no issues') {
                                intDoneCount++;
                            } else if (s === '-' && (r === '-' || r === '')) {
                                intNotStartedCount++;
                            }
                        });
                    });
                }
            });
            if (intTotal > 0 && intDoneCount === intTotal) return 'done';
            if (intNotStartedCount === intTotal) return 'not-started';
            if (intTotal === 0) return 'not-started';
            return 'in-progress';
        }
        case 'Client review': {
            // Use UT-level status first (from merged cells)
            const clUtStatuses = mod.userTypes.map(ut => (ut.clientReviewStatus || '').trim()).filter(s => s && s !== '-');
            if (clUtStatuses.length > 0) {
                const resolved = resolveReviewStatus(clUtStatuses);
                if (resolved === 'Done') return 'done';
                if (resolved === 'In Progress') return 'in-progress';
                if (resolved === 'Pending') return 'not-started';
            }
            // Check UT clientReviews array for done/pending counts
            // 'on hold' and 'rejected' are excluded from the green check (not counted)
            let clTotal = 0;
            let clDoneCount = 0;
            let clNotStartedCount = 0;
            mod.userTypes.forEach(ut => {
                if (ut.clientReviews && ut.clientReviews.length > 0) {
                    ut.clientReviews.forEach(rev => {
                        const s = (rev.status || '').toLowerCase().trim();
                        if (s.includes('on hold') || s.includes('rejected')) return; // excluded
                        clTotal++;
                        if (s === 'approved' || s === 'done') clDoneCount++;
                        else if (!s || s === '-') clNotStartedCount++;
                    });
                } else {
                    ut.categories.forEach(cat => {
                        cat.pages.forEach(p => {
                            const s = (p.clientReview.status || '').toLowerCase().trim();
                            const r = (p.clientReview.review || '').toLowerCase().trim();
                            if (s.includes('on hold') || s.includes('rejected')) return; // excluded
                            clTotal++;
                            if (s === 'approved' || s === 'done') {
                                clDoneCount++;
                            } else if (s === '-' && (r === '-' || r === '')) {
                                clNotStartedCount++;
                            }
                        });
                    });
                }
            });
            if (clTotal > 0 && clDoneCount === clTotal) return 'done';
            if (clNotStartedCount === clTotal) return 'not-started';
            if (clTotal === 0) return 'not-started';
            return 'in-progress';
        }
        case 'QA': {
            if (finalDone) return 'done';
            
            // Check UT-level QA status (merged cell across all pages for a UT)
            const utQaStatuses = mod.userTypes.map(ut => (ut.qaStatus || '').trim()).filter(s => s && s !== '-');
            if (utQaStatuses.length > 0) {
                const allQaDone = utQaStatuses.every(s => s.toLowerCase() === 'done' || s.toLowerCase() === 'completed');
                if (allQaDone) return 'done';
                const anyQaProgress = utQaStatuses.some(s => s.toLowerCase().includes('progress') || s.toLowerCase() === 'in progress');
                if (anyQaProgress) return 'in-progress';
            }

            let qaTotal = 0;
            let qaDoneCount = 0;
            let qaNotStartedCount = 0;
            
            mod.userTypes.forEach(ut => {
                ut.categories.forEach(cat => {
                    cat.pages.forEach(p => {
                        if (p.qa) {
                            qaTotal++;
                            const s = (p.qa.status || '').toLowerCase().trim();
                            if (s === 'done' || s === 'completed' || s === 'approved') {
                                qaDoneCount++;
                            } else if (s === '-' || s === '' || s === 'not started') {
                                qaNotStartedCount++;
                            }
                        }
                    });
                });
            });
            
            if (qaTotal > 0) {
                // If QA status = 'Done' for all pages → green (regardless of bug count)
                if (qaDoneCount === qaTotal) return 'done';
                if (qaNotStartedCount === qaTotal) return 'not-started';
                return 'in-progress';
            }
            
            // Fallback: check bug data
            const hasAnyBugs = mod.userTypes.some(ut => (ut.qaBugs || 0) > 0) || 
                mod.userTypes.some(ut => ut.categories.some(cat => cat.pages.some(p => p.qa && p.qa.bugs > 0)));
            if (hasAnyBugs) return 'in-progress'; // has bugs but no status → in progress
            if (mod.id === 'preksha' || mod.id === 'samadhan') return 'in-progress';
            if (getStepStatus(mod, 'Client review') === 'done') return 'in-progress';
            return 'not-started';
        }
        case 'Final Review':
            // Only green if finalStatus is explicitly Done — no cascading from QA
            // if (mod.finalStatus && mod.finalStatus.toLowerCase().trim() === 'done') return 'done';
            return 'not-started';
        case 'Security implementation':
            // if (mod.finalStatus && mod.finalStatus.toLowerCase().trim() === 'done') return 'done';
            return 'not-started';
        case 'UAT':
            // if (mod.finalStatus && mod.finalStatus.toLowerCase().trim() === 'done') return 'done';
            return 'not-started';
        case 'Go Live':
            // if (mod.finalStatus && mod.finalStatus.toLowerCase().trim() === 'done') return 'done';
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
        document.body.classList.add('presentation-active');
        btn.innerHTML = '<span>📊 Dashboard Mode</span>';
        btn.style.background = 'rgba(16, 185, 129, 0.12)';
        btn.style.color = '#10b981';
        btn.style.borderColor = 'rgba(16, 185, 129, 0.25)';

        landingPage.classList.add('hidden');
        detailPage.classList.add('hidden');
        document.getElementById('quick-report-page').classList.add('hidden');
        backBtn.classList.add('hidden');
        pageTitle.classList.remove('hidden');
        if (uploadBtn) uploadBtn.classList.add('hidden');
        const qrBtn1 = document.getElementById('quick-report-btn');
        if (qrBtn1) qrBtn1.style.display = 'none';
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
        document.body.classList.remove('presentation-active');
        btn.innerHTML = '<span>🎬 Presentation Mode</span>';
        btn.style.background = 'rgba(99, 102, 241, 0.12)';
        btn.style.color = '#4f46e5';
        btn.style.borderColor = 'rgba(99, 102, 241, 0.25)';

        presPage.classList.add('hidden');
        if (uploadBtn) uploadBtn.classList.remove('hidden');
        const qrBtn2 = document.getElementById('quick-report-btn');
        if (qrBtn2) qrBtn2.style.display = '';
        
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
                        else if (status === 'mixed-done') icon = '◐';

                        let extraLabel = '';
                        if (status === 'skipped') extraLabel = '<br><span style="font-size: 0.6rem; opacity: 0.65; font-weight: 600; display: block; margin-top: 1px;">(Skipped)</span>';
                        else if (status === 'mixed-done') extraLabel = '<br><span style="font-size: 0.6rem; opacity: 0.65; font-weight: 600; display: block; margin-top: 1px;">(Done for some screens)</span>';

                        return `
                            <div class="tracker-step ${status === 'mixed-done' ? 'mixed-done' : status}">
                                <div class="tracker-dot">
                                    ${icon}
                                </div>
                                <div class="tracker-label">
                                    ${step}${extraLabel}
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

// ============================================
// MONTHLY PROGRESS PRESENTATION
// ============================================

let _monthlyOldParsed = null;
let _monthlyNewParsed = null;
let _monthlyComparison = null;
let _monthlySlideIndex = 0;
const _monthlyTotalSlides = 8; // Slide 0: Intro, Slide 1: Overview, Slide 2: Pending Work, Slide 3: Dependencies, Slide 4: Last Month Commitments, Slide 5: This Month's Commitment, Slide 6: Team Review, Slide 7: Thank You
let _monthlyPendingData = null;
let _monthlyPendingSelectedKpi = 'pagesPending';
let _monthlyCommitmentsParsed = null;
let _monthlyThisMonthCommitParsed = null;
let _monthlyTeamReviewParsed = null;

// ── Navigation ──────────────────────────────────────────────────────────

function showMonthlyUpload() {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('detail-page').classList.add('hidden');
    document.getElementById('team-page').classList.add('hidden');
    document.getElementById('quick-report-page').classList.add('hidden');
    document.getElementById('presentation-page').classList.add('hidden');
    document.getElementById('monthly-pres-page').classList.add('hidden');
    document.getElementById('monthly-upload-page').classList.remove('hidden');
    document.getElementById('back-btn').classList.remove('hidden');
    document.getElementById('page-title').classList.add('hidden');

    // Reset presentation mode if active
    if (presentationMode) {
        presentationMode = false;
        document.body.style.overflow = '';
        document.body.classList.remove('presentation-active');
    }

    const uploadBtn = document.getElementById('upload-btn');
    if (uploadBtn) uploadBtn.classList.add('hidden');
    const qrBtn = document.getElementById('quick-report-btn');
    if (qrBtn) qrBtn.style.display = 'none';
    const monthlyBtn = document.getElementById('monthly-review-btn');
    if (monthlyBtn) monthlyBtn.style.display = 'none';
    const presBtn = document.getElementById('pres-toggle-btn');
    if (presBtn) presBtn.style.display = 'none';
}

function exitMonthlyPresentation() {
    document.getElementById('monthly-pres-page').classList.add('hidden');
    document.body.style.overflow = '';
    showMonthlyUpload();
}

// ── Upload Listeners ────────────────────────────────────────────────────

function initMonthlyUploadListeners() {
    _setupMonthlyDropzone('old-month-dropzone', 'old-month-file', handleOldMonthUpload);
    _setupMonthlyDropzone('new-month-dropzone', 'new-month-file', handleNewMonthUpload);
    _setupMonthlyDropzone('commitments-dropzone', 'commitments-file', handleCommitmentsUpload);
    _setupMonthlyDropzone('thismonth-commit-dropzone', 'thismonth-commit-file', handleThisMonthCommitUpload);
    _setupMonthlyDropzone('team-review-dropzone', 'team-review-file', handleTeamReviewUpload);
}

function _setupMonthlyDropzone(dropzoneId, fileInputId, handler) {
    const dz = document.getElementById(dropzoneId);
    const fi = document.getElementById(fileInputId);
    if (!dz || !fi) return;

    dz.addEventListener('click', () => fi.click());

    dz.addEventListener('dragover', (e) => {
        e.preventDefault();
        dz.classList.add('drag-over');
    });
    dz.addEventListener('dragleave', () => dz.classList.remove('drag-over'));
    dz.addEventListener('drop', (e) => {
        e.preventDefault();
        dz.classList.remove('drag-over');
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handler(e.dataTransfer.files[0]);
        }
    });

    fi.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
            handler(e.target.files[0]);
        }
    });
}

function handleOldMonthUpload(file) {
    _processMonthlyFile(file, 'old', (parsed) => {
        _monthlyOldParsed = parsed;
        _showMonthlyFileStatus('old', file.name, parsed);
        _updateMonthlyGenerateBtn();
    });
}

function handleNewMonthUpload(file) {
    _processMonthlyFile(file, 'new', (parsed) => {
        _monthlyNewParsed = parsed;
        _showMonthlyFileStatus('new', file.name, parsed);
        _updateMonthlyGenerateBtn();
    });
}

function clearOldMonthFile() {
    _monthlyOldParsed = null;
    document.getElementById('old-month-status').classList.add('hidden');
    document.getElementById('old-month-dropzone').classList.remove('hidden');
    document.getElementById('old-month-card').classList.remove('uploaded');
    document.getElementById('old-month-file').value = '';
    _updateMonthlyGenerateBtn();
}

function clearNewMonthFile() {
    _monthlyNewParsed = null;
    document.getElementById('new-month-status').classList.add('hidden');
    document.getElementById('new-month-dropzone').classList.remove('hidden');
    document.getElementById('new-month-card').classList.remove('uploaded');
    document.getElementById('new-month-file').value = '';
    _updateMonthlyGenerateBtn();
}

function handleCommitmentsUpload(file) {
    _processCommitmentsFile(file, (parsed) => {
        _monthlyCommitmentsParsed = parsed;
        const fnEl = document.getElementById('commitments-filename');
        const stEl = document.getElementById('commitments-stats');
        fnEl.textContent = `✓ ${file.name}`;
        let goalCount = 0;
        Object.keys(parsed).forEach(m => { goalCount += parsed[m].length; });
        stEl.textContent = `${Object.keys(parsed).length} modules · ${goalCount} goals`;
        document.getElementById('commitments-dropzone').classList.add('hidden');
        document.getElementById('commitments-status').classList.remove('hidden');
        document.getElementById('commitments-card').classList.add('uploaded');
        _updateMonthlyGenerateBtn();
    });
}

function clearCommitmentsFile() {
    _monthlyCommitmentsParsed = null;
    document.getElementById('commitments-status').classList.add('hidden');
    document.getElementById('commitments-dropzone').classList.remove('hidden');
    document.getElementById('commitments-card').classList.remove('uploaded');
    document.getElementById('commitments-file').value = '';
    _updateMonthlyGenerateBtn();
}

function _processCommitmentsFile(file, callback) {
    if (!file) return;
    const name = file.name.toLowerCase();
    if (!name.endsWith('.xlsx') && !name.endsWith('.xls') && !name.endsWith('.csv')) {
        showToast('Please upload a valid Excel or CSV file (.xlsx, .xls, .csv)', 'error');
        return;
    }
    if (typeof XLSX === 'undefined') {
        showToast('SheetJS library not loaded.', 'error');
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            if (!rows || rows.length < 2) {
                showToast('No data found in commitments file.', 'error');
                return;
            }
            const parsed = {};
            let currentModule = '';
            for (let i = 1; i < rows.length; i++) {
                const row = rows[i];
                if (!row || row.length === 0) continue;
                const modCell = (row[0] || '').toString().trim();
                if (modCell) currentModule = modCell;
                if (!currentModule) continue;
                const goalText = (row[1] || '').toString().trim();
                if (!goalText) continue;
                
                const statusText = (row[2] || '').toString().trim();
                const remarkText = (row[3] || '').toString().trim();
                
                const goalsArr = goalText.split(/\r?\n/).map(s => s.trim());
                const statusArr = statusText.split(/\r?\n/).map(s => s.trim());
                const remarkArr = remarkText.split(/\r?\n/).map(s => s.trim());
                
                const maxLen = Math.max(goalsArr.length, statusArr.length, remarkArr.length);
                
                if (!parsed[currentModule]) parsed[currentModule] = [];
                for (let j = 0; j < maxLen; j++) {
                    const goal = goalsArr[j] || '';
                    if (!goal && maxLen > 1) continue;
                    const status = statusArr[j] || '';
                    const remark = remarkArr[j] || '';
                    parsed[currentModule].push({ goal, status, remark });
                }
            }
            if (Object.keys(parsed).length === 0) {
                showToast('No commitments data found in this file.', 'error');
                return;
            }
            callback(parsed);
            showToast('Commitments loaded successfully.', 'success');
        } catch (err) {
            console.error(err);
            showToast('Error parsing commitments file: ' + err.message, 'error');
        }
    };
    reader.onerror = () => showToast('Error reading file.', 'error');
    reader.readAsArrayBuffer(file);
}

// ── This Month's Commitment Upload ──────────────────────────────────────

function handleThisMonthCommitUpload(file) {
    _processThisMonthCommitFile(file, (parsed) => {
        _monthlyThisMonthCommitParsed = parsed;
        const fnEl = document.getElementById('thismonth-commit-filename');
        const stEl = document.getElementById('thismonth-commit-stats');
        fnEl.textContent = `✓ ${file.name}`;
        let targetCount = 0;
        Object.keys(parsed).forEach(m => { targetCount += parsed[m].length; });
        stEl.textContent = `${Object.keys(parsed).length} modules · ${targetCount} targets`;
        document.getElementById('thismonth-commit-dropzone').classList.add('hidden');
        document.getElementById('thismonth-commit-status').classList.remove('hidden');
        document.getElementById('thismonth-commit-card').classList.add('uploaded');
    });
}

function clearThisMonthCommitFile() {
    _monthlyThisMonthCommitParsed = null;
    document.getElementById('thismonth-commit-status').classList.add('hidden');
    document.getElementById('thismonth-commit-dropzone').classList.remove('hidden');
    document.getElementById('thismonth-commit-card').classList.remove('uploaded');
    document.getElementById('thismonth-commit-file').value = '';
}

function _processThisMonthCommitFile(file, callback) {
    if (!file) return;
    const name = file.name.toLowerCase();
    if (!name.endsWith('.xlsx') && !name.endsWith('.xls') && !name.endsWith('.csv')) {
        showToast('Please upload a valid Excel or CSV file (.xlsx, .xls, .csv)', 'error');
        return;
    }
    if (typeof XLSX === 'undefined') {
        showToast('SheetJS library not loaded.', 'error');
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            if (!rows || rows.length < 2) {
                showToast('No data found in this month\'s commitment file.', 'error');
                return;
            }
            // Detect merged cells for Module column
            const merges = worksheet['!merges'] || [];
            
            const parsed = {};
            let currentModule = '';
            for (let i = 1; i < rows.length; i++) {
                const row = rows[i];
                if (!row || row.length === 0) continue;
                const modCell = (row[0] || '').toString().trim();
                if (modCell) currentModule = modCell;
                if (!currentModule) continue;
                const targetText = (row[1] || '').toString().trim();
                if (!targetText) continue;
                const rawDate = row[2];
                let dateText = '';
                if (rawDate !== undefined && rawDate !== null && rawDate !== '') {
                    const rawStr = rawDate.toString().trim();
                    // Excel stores dates as integers (days since 1900-01-01)
                    const serial = parseInt(rawStr, 10);
                    if (!isNaN(serial) && serial > 40000 && serial < 60000 && String(serial) === rawStr) {
                        // Convert Excel serial to JS Date (Excel epoch is Dec 30, 1899)
                        const jsDate = new Date((serial - 25569) * 86400 * 1000);
                        const day = jsDate.getUTCDate();
                        const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
                        const suffix = day === 1 || day === 21 || day === 31 ? 'st' : day === 2 || day === 22 ? 'nd' : day === 3 || day === 23 ? 'rd' : 'th';
                        dateText = `${day}${suffix} ${monthNames[jsDate.getUTCMonth()]}`;
                    } else {
                        dateText = rawStr;
                    }
                }
                if (!parsed[currentModule]) parsed[currentModule] = [];
                parsed[currentModule].push({ target: targetText, date: dateText });
            }
            if (Object.keys(parsed).length === 0) {
                showToast('No commitment data found in this file.', 'error');
                return;
            }
            callback(parsed);
            showToast('This month\'s commitments loaded successfully.', 'success');
        } catch (err) {
            console.error(err);
            showToast('Error parsing file: ' + err.message, 'error');
        }
    };
    reader.onerror = () => showToast('Error reading file.', 'error');
    reader.readAsArrayBuffer(file);
}

// ── Team Review Upload ───────────────────────────────────────────

function handleTeamReviewUpload(file) {
    _processTeamReviewFile(file, (parsed) => {
        _monthlyTeamReviewParsed = parsed;
        const fnEl = document.getElementById('team-review-filename');
        const stEl = document.getElementById('team-review-stats');
        fnEl.textContent = `✓ ${file.name}`;
        stEl.textContent = `${parsed.length} developers`;
        document.getElementById('team-review-dropzone').classList.add('hidden');
        document.getElementById('team-review-status').classList.remove('hidden');
        document.getElementById('team-review-card').classList.add('uploaded');
    });
}

function clearTeamReviewFile() {
    _monthlyTeamReviewParsed = null;
    document.getElementById('team-review-status').classList.add('hidden');
    document.getElementById('team-review-dropzone').classList.remove('hidden');
    document.getElementById('team-review-card').classList.remove('uploaded');
    document.getElementById('team-review-file').value = '';
}

function _parseTeamReviewFraction(val) {
    if (val === undefined || val === null || val === '') return '-';
    if (typeof val === 'number' && val > 40000) {
        try {
            const d = XLSX.SSF.parse_date_code(val);
            return `${d.m}/${d.d}`;
        } catch(e) {}
    }
    return val.toString().trim() || '-';
}

function _parseTeamReviewUtil(val) {
    if (val === undefined || val === null || val === '') return '-';
    // If it's a number like 1, 0.8, etc., format it as a percentage
    if (typeof val === 'number' && val <= 10 && val >= 0) {
        return Math.round(val * 100) + '%';
    }
    return val.toString().trim() || '-';
}

function _processTeamReviewFile(file, callback) {
    if (!file) return;
    const name = file.name.toLowerCase();
    if (!name.endsWith('.xlsx') && !name.endsWith('.xls') && !name.endsWith('.csv')) {
        showToast('Please upload a valid Excel or CSV file (.xlsx, .xls, .csv)', 'error');
        return;
    }
    if (typeof XLSX === 'undefined') {
        showToast('SheetJS library not loaded.', 'error');
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            if (!rows || rows.length < 2) {
                showToast('No data found in team review file.', 'error');
                return;
            }
            const parsed = [];
            for (let i = 1; i < rows.length; i++) {
                const row = rows[i];
                if (!row || row.length === 0) continue;
                const developer = (row[0] || '').toString().trim();
                if (!developer) continue;
                parsed.push({
                    developer,
                    l1: _parseTeamReviewFraction(row[1]),
                    l2: _parseTeamReviewFraction(row[2]),
                    unit: _parseTeamReviewFraction(row[3]),
                    coordination: _parseTeamReviewFraction(row[4]),
                    ownership: _parseTeamReviewFraction(row[5]),
                    accountability: _parseTeamReviewFraction(row[6]),
                    taskFilled: _parseTeamReviewFraction(row[7]),
                    utilization: _parseTeamReviewUtil(row[8])
                });
            }
            if (parsed.length === 0) {
                showToast('No valid developer data found in this file.', 'error');
                return;
            }
            callback(parsed);
            showToast('Team review loaded successfully.', 'success');
        } catch (err) {
            console.error(err);
            showToast('Error parsing file: ' + err.message, 'error');
        }
    };
    reader.onerror = () => showToast('Error reading file.', 'error');
    reader.readAsArrayBuffer(file);
}

function _processMonthlyFile(file, which, callback) {
    if (!file) return;
    const name = file.name.toLowerCase();
    if (!name.endsWith('.xlsx') && !name.endsWith('.xls') && !name.endsWith('.csv')) {
        showToast('Please upload a valid Excel or CSV file (.xlsx, .xls, .csv)', 'error');
        return;
    }
    if (typeof XLSX === 'undefined') {
        showToast('SheetJS library not loaded.', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = async function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            
            const boldCells = await extractBoldCells(e.target.result);
            const parsed = parseExcelForComparison(workbook, boldCells);
            if (Object.keys(parsed).length === 0) {
                showToast('No module data found in this file.', 'error');
                return;
            }

            // The user explicitly requested that the Monthly Report reads documentation directly from 
            // the 'Main tracker' sheet of the 'last month' and 'this month' files, rather than the separate 'Documentation' sheet.
            // The parser already extracted the documentation columns from the Main tracker during `parseExcelForComparison`.

            callback(parsed);
            showToast(`${which === 'old' ? 'Last month' : 'This month'} report loaded successfully.`, 'success');
        } catch (err) {
            console.error(err);
            showToast('Error parsing file: ' + err.message, 'error');
        }
    };
    reader.onerror = () => showToast('Error reading file.', 'error');
    reader.readAsArrayBuffer(file);
}

function _showMonthlyFileStatus(which, filename, parsed) {
    const prefix = which === 'old' ? 'old-month' : 'new-month';
    const statusEl = document.getElementById(`${prefix}-status`);
    const dzEl = document.getElementById(`${prefix}-dropzone`);
    const cardEl = document.getElementById(`${prefix}-card`);
    const fnEl = document.getElementById(`${prefix}-filename`);
    const stEl = document.getElementById(`${prefix}-stats`);

    const moduleCount = Object.keys(parsed).length;
    let pageCount = 0;
    Object.values(parsed).forEach(m => {
        m.userTypes.forEach(ut => {
            ut.categories.forEach(c => { pageCount += c.pages.length; });
        });
    });

    fnEl.textContent = `✓ ${filename}`;
    stEl.textContent = `${moduleCount} modules · ${pageCount} pages`;
    dzEl.classList.add('hidden');
    statusEl.classList.remove('hidden');
    cardEl.classList.add('uploaded');
}

function _updateMonthlyGenerateBtn() {
    const btn = document.getElementById('monthly-generate-btn');
    if (_monthlyOldParsed && _monthlyNewParsed && _monthlyCommitmentsParsed) {
        btn.disabled = false;
        btn.classList.remove('disabled');
    } else {
        btn.disabled = true;
        btn.classList.add('disabled');
    }
}

// ── Parser for Comparison ───────────────────────────────────────────────

function parseExcelForComparison(workbook, boldCells = {}) {
    // Reuse the main parser
    const modules = parseExcelToModules(workbook, boldCells);

    // Post-process: for sheets that lack dedicated review point columns,
    // count review entries from the review text columns.
    // The main parser sets internalReviewPoints / clientReviewPoints to 0
    // when the column index is -1. We detect this and count from review text.
    Object.values(modules).forEach(mod => {
        mod.userTypes.forEach(ut => {
            let intPtsFromText = 0;
            let clPtsFromText = 0;

            ut.categories.forEach(cat => {
                cat.pages.forEach(page => {
                    // Internal review text counting
                    const intRev = (page.internalReview && page.internalReview.review)
                        ? page.internalReview.review.toString().trim() : '';
                    if (intRev && intRev !== '-' && intRev.toLowerCase() !== 'no issues' && intRev.toLowerCase() !== 'no issue') {
                        intPtsFromText++;
                    }

                    // Client review text counting
                    const clRev = (page.clientReview && page.clientReview.review)
                        ? page.clientReview.review.toString().trim() : '';
                    if (clRev && clRev !== '-' && clRev.toLowerCase() !== 'no issues' && clRev.toLowerCase() !== 'no issue') {
                        clPtsFromText++;
                    }
                });
            });

            // If the UT has 0 points from the column-based parser, use text-based count
            if (ut.internalReviewPoints === 0 && intPtsFromText > 0) {
                ut.internalReviewPoints = intPtsFromText;
            }
            if (ut.clientReviewPoints === 0 && clPtsFromText > 0) {
                ut.clientReviewPoints = clPtsFromText;
            }
        });
    });

    return modules;
}

// ── Comparison Engine ───────────────────────────────────────────────────

let _monthlySelectedKpi = 'pagesDeveloped'; // default selected KPI

const MONTHLY_KPI_DEFS = [
    { key: 'pagesDeveloped',       label: 'Pages Developed',          icon: '📄', accent: '#6366f1' },
    { key: 'internalReviewPoints', label: 'Internal Review Points',   icon: '🔍', accent: '#8b5cf6' },
    { key: 'clientReviewPoints',   label: 'Client Review Points',     icon: '💬', accent: '#f59e0b' },
    { key: 'staticScreens',        label: 'Static Screens Created',   icon: '🖼️', accent: '#a855f7' },
    { key: 'qa',                   label: 'QA',                       icon: '🐛', accent: '#ef4444' },
    { key: 'documentsCreated',     label: 'Documents Created',        icon: '📋', accent: '#f97316' },
];

const MONTHLY_PENDING_KPI_DEFS = [
    { key: 'pagesPending',       label: 'Pages Pending',            icon: '📄', accent: '#6366f1' },
    { key: 'staticScreensPending',label: 'Static Screens Pending',  icon: '🖼️', accent: '#a855f7' },
    { key: 'internalReviewPending',label: 'Internal Review Pending',icon: '🔍', accent: '#8b5cf6' },
    { key: 'clientReviewPending',label: 'Client Review Pending',    icon: '💬', accent: '#f59e0b' },
    { key: 'qaPending',          label: 'Bugs Pending',             icon: '🐛', accent: '#ef4444' },
    { key: 'documentsPending',   label: 'Documents Pending',        icon: '📋', accent: '#f97316' },
];

function _flattenPages(mod) {
    const map = new Map();
    // Secondary index: page name only → page data (for fallback when UT names differ)
    const byNameOnly = new Map();
    if (!mod) return map;
    mod.userTypes.forEach(ut => {
        ut.categories.forEach(cat => {
            cat.pages.forEach(page => {
                const key = `${ut.name}::${page.name}`;
                const entry = { ...page, _utName: ut.name };
                map.set(key, entry);
                // For the page-name-only index, store the first occurrence
                // (in case multiple UTs have same page name)
                if (!byNameOnly.has(page.name)) {
                    byNameOnly.set(page.name, entry);
                }
            });
        });
    });
    // Attach the fallback index to the map for use in comparison
    map._byNameOnly = byNameOnly;
    return map;
}

// Try to find a page in oldPages: first by UT::pageName key, then fallback to page name only
function _findInOldPages(oldPages, key, pageName) {
    if (oldPages.has(key)) {
        return oldPages.get(key);
    }
    // Fallback: try matching by page name only (handles UT name changes between sheets)
    if (oldPages._byNameOnly && oldPages._byNameOnly.has(pageName)) {
        return oldPages._byNameOnly.get(pageName);
    }
    return null;
}

function _flattenUserTypes(mod) {
    const map = new Map();
    if (!mod) return map;
    mod.userTypes.forEach(ut => {
        map.set(ut.name, ut);
    });
    return map;
}

function _getDocState(val) {
    const v = (val || '').toString().toLowerCase().trim();
    if (v === 'done' || v === 'completed') return 'DONE';
    if (v === 'updated') return 'UPDATED';
    if (v === 'to be updated') return 'NEEDS_UPDATE';
    return 'PENDING';
}

function _docProgressed(oldVal, newVal) {
    const oldState = _getDocState(oldVal);
    const newState = _getDocState(newVal);
    
    // It's progress if it wasn't done before, but is done/updated/needs_update now
    if (oldState === 'PENDING' && (newState === 'DONE' || newState === 'UPDATED' || newState === 'NEEDS_UPDATE')) return true;
    
    // It's ALSO progress if it was marked 'done' before, but was specifically 'updated' this month
    if (oldState === 'DONE' && newState === 'UPDATED') return true;

    // It's ALSO progress if it needed update before, and now it's updated or done
    if (oldState === 'NEEDS_UPDATE' && (newState === 'UPDATED' || newState === 'DONE')) return true;
    
    return false;
}

function _isDone(val) {
    const v = (val || '').toString().toLowerCase().trim();
    return v === 'done' || v === 'completed' || v === 'updated';
}

function _hasNoDevStatus(val) {
    // Returns true when the page had no development work assigned yet
    const v = (val || '').toString().toLowerCase().trim();
    return v === '' || v === '-' || v === 'not started';
}

function _isReviewStatusDone(status) {
    const ls = (status || '').toString().toLowerCase().trim();
    return ls.includes('done') || ls.includes('approved') || ls.includes('complete') || ls.includes('resolved') || ls.includes('fixed') || ls.includes('implemented');
}

function _compareReviews(newReviews = [], oldReviews = []) {
    const implemented = [];
    
    // Normalize and map old reviews by text
    const oldMap = new Map();
    oldReviews.forEach(r => {
        const norm = r.text.toLowerCase().replace(/\s+/g, ' ').trim();
        oldMap.set(norm, r.status);
    });
    
    newReviews.forEach(r => {
        const norm = r.text.toLowerCase().replace(/\s+/g, ' ').trim();
        const isNewDone = _isReviewStatusDone(r.status);
        
        if (isNewDone) {
            const oldStatus = oldMap.get(norm);
            if (oldStatus === undefined || !_isReviewStatusDone(oldStatus)) {
                // Implemented this month!
                implemented.push(r.text);
            }
        }
    });
    
    return implemented;
}

function computeComparison(oldModules, newModules) {
    const allModuleIds = new Set([...Object.keys(oldModules), ...Object.keys(newModules)]);
    const modules = [];

    let summary = {
        pagesDeveloped: 0,
        pagesDevelopedNew: 0,
        pagesDevelopedCompleted: 0,
        internalReviewPoints: 0, clientReviewPoints: 0,
        staticScreens: 0,
        qa: 0, qaBugsIdentified: 0,
        documentsCreated: 0,
    };

    allModuleIds.forEach(id => {
        const oldMod = oldModules[id];
        const newMod = newModules[id];

        const oldPages = _flattenPages(oldMod);
        const newPages = _flattenPages(newMod);
        const oldUTs = _flattenUserTypes(oldMod);
        const newUTs = _flattenUserTypes(newMod);

        // KPI 1: New Pages Developed
        // Count pages whose dynamicDev is "Done" in this month AND:
        //   (a) Are new (not present in last month's sheet) with status "Done"
        //   (b) Had blank/no status in last month but are "Done" this month
        // Do NOT count pages that were already "Done" in last month
        // Deduplicate repeating pages across user types.
        let newPagesCount = 0;
        const newPagesSet = new Set();
        newPages.forEach((page, key) => {
            if (!_isDone(page.dynamicDev)) return; // Only count pages marked "Done"

            const oldPage = _findInOldPages(oldPages, key, page.name);
            let isNewDone = false;
            if (!oldPage) {
                // New page this month with status "Done"
                isNewDone = true;
            } else {
                if (_hasNoDevStatus(oldPage.dynamicDev) && _isDone(page.dynamicDev)) {
                    // Was blank/no status in old, now "Done" this month
                    isNewDone = true;
                }
            }
            if (isNewDone) {
                if (!newPagesSet.has(page.name)) {
                    newPagesCount++;
                    newPagesSet.add(page.name);
                }
            }
        });

        // KPI 2: Pages Completed
        // Only count pages where dynamicDev was "In Progress" in last month
        // and is now "Done" in this month
        // Deduplicate repeating pages across user types.
        let pagesCompletedCount = 0;
        const pagesCompletedSet = new Set();
        newPages.forEach((newPage, key) => {
            if (_isDone(newPage.dynamicDev)) {
                const oldPage = _findInOldPages(oldPages, key, newPage.name);
                if (oldPage) {
                    const oldVal = (oldPage.dynamicDev || '').toString().toLowerCase().trim();
                    if (oldVal.includes('in progress')) {
                        if (!pagesCompletedSet.has(newPage.name)) {
                            pagesCompletedCount++;
                            pagesCompletedSet.add(newPage.name);
                        }
                    }
                }
            }
        });

        // KPI 3: Static screens created
        // Track at the PAGE level for detailed metrics
        let staticScreensCount = 0;
        const ssCompletedSet = new Set();
        newPages.forEach((newPage, key) => {
            const newCreation = (newPage.staticScreens && newPage.staticScreens.creation) || '';
            if (_isDone(newCreation)) {
                const oldPage = _findInOldPages(oldPages, key, newPage.name);
                const oldCreation = oldPage ? ((oldPage.staticScreens && oldPage.staticScreens.creation) || '') : '';
                if (!_isDone(oldCreation)) {
                    if (!ssCompletedSet.has(newPage.name)) {
                        staticScreensCount++;
                        ssCompletedSet.add(newPage.name);
                    }
                }
            }
        });
        
        // Fallback: Check UTs that have NO pages (e.g. User Management)
        newUTs.forEach((newUT, utName) => {
            if (isExemptUT(utName)) return;
            const hasPages = newUT.categories && newUT.categories.some(c => c.pages.length > 0);
            if (!hasPages) {
                const newCreation = (newUT.staticScreens && newUT.staticScreens.creation) || '';
                if (_isDone(newCreation)) {
                    const oldUT = oldUTs.get(utName);
                    const oldCreation = oldUT ? ((oldUT.staticScreens && oldUT.staticScreens.creation) || '') : '';
                    if (!_isDone(oldCreation)) {
                        staticScreensCount++;
                    }
                }
            }
        });

        // KPI 4 & 5: Combined QA (Bugs identified vs Bugs fixed)
        let newBugs = 0, oldBugs = 0;
        if (newMod) newMod.userTypes.forEach(ut => { newBugs += (ut.qaBugs || 0); });
        if (oldMod) oldMod.userTypes.forEach(ut => { oldBugs += (ut.qaBugs || 0); });
        const bugsIdentifiedCount = Math.max(0, newBugs - oldBugs);

        let newFixed = 0, oldFixed = 0;
        if (newMod) newMod.userTypes.forEach(ut => { newFixed += (ut.qaBugsFixed || 0); });
        if (oldMod) oldMod.userTypes.forEach(ut => { oldFixed += (ut.qaBugsFixed || 0); });
        const bugsFixedCount = Math.max(0, newFixed - oldFixed);

        // KPI 6: Documents created (processFlow + userManual going from non-done -> done or done -> updated)
        const docsCreatedSet = new Set();
        newUTs.forEach((newUT, utName) => {
            if (isExemptUT(utName)) return;
            const oldUT = oldUTs.get(utName);
            
            const newPF = (newUT.documentation && newUT.documentation.processFlow) || '';
            const oldPF = oldUT ? ((oldUT.documentation && oldUT.documentation.processFlow) || '') : '';
            if (_docProgressed(oldPF, newPF)) {
                const os = _getDocState(oldPF);
                const ns = _getDocState(newPF);
                const docId = newPF.includes('|||') ? newPF.split('|||')[1] : Math.random().toString();
                if (os === 'PENDING' && ns === 'NEEDS_UPDATE') docsCreatedSet.add('Process Flow (To be updated)|||' + docId);
                else if ((os === 'DONE' || os === 'NEEDS_UPDATE' || os === 'PENDING') && ns === 'UPDATED') docsCreatedSet.add('Process Flow (Updated)|||' + docId);
                else if (os === 'NEEDS_UPDATE' && ns === 'DONE') docsCreatedSet.add('Process Flow (Updated)|||' + docId);
                else docsCreatedSet.add('Process Flow|||' + docId);
            }
            
            const newUM = (newUT.documentation && newUT.documentation.userManual) || '';
            const oldUM = oldUT ? ((oldUT.documentation && oldUT.documentation.userManual) || '') : '';
            if (_docProgressed(oldUM, newUM)) {
                const os = _getDocState(oldUM);
                const ns = _getDocState(newUM);
                const docId = newUM.includes('|||') ? newUM.split('|||')[1] : Math.random().toString();
                if (os === 'PENDING' && ns === 'NEEDS_UPDATE') docsCreatedSet.add('User Manual (To be updated)|||' + docId);
                else if ((os === 'DONE' || os === 'NEEDS_UPDATE' || os === 'PENDING') && ns === 'UPDATED') docsCreatedSet.add('User Manual (Updated)|||' + docId);
                else if (os === 'NEEDS_UPDATE' && ns === 'DONE') docsCreatedSet.add('User Manual (Updated)|||' + docId);
                else docsCreatedSet.add('User Manual|||' + docId);
            }
        });
        const docsCreatedCount = docsCreatedSet.size;

        const mod = newMod || oldMod;
        const visuals = getVisuals(id, mod.name);

        const kpis = {
            pagesDeveloped: newPagesCount + pagesCompletedCount,
            pagesDevelopedNew: newPagesCount,
            pagesDevelopedCompleted: pagesCompletedCount,
            internalReviewPoints: 0, // will be set after review points computation
            clientReviewPoints: 0,   // will be set after review points computation
            staticScreens: staticScreensCount,
            qa: bugsFixedCount, // bugs fixed represents bugs resolved
            qaBugsIdentified: bugsIdentifiedCount,
            documentsCreated: docsCreatedCount,
        };

        summary.pagesDeveloped += kpis.pagesDeveloped;
        summary.pagesDevelopedNew += kpis.pagesDevelopedNew;
        summary.pagesDevelopedCompleted += kpis.pagesDevelopedCompleted;
        summary.staticScreens += kpis.staticScreens;
        summary.qa += kpis.qa;
        summary.qaBugsIdentified += kpis.qaBugsIdentified;
        summary.documentsCreated += kpis.documentsCreated;

        // ── Detail breakdowns for hover tooltips ──────────────────────────
        const details = {};

        // pagesDeveloped detail: per UT → combined list of new pages and completed pages
        const pagesDevelopedDetail = {};
        
        // 1. Group new pages
        newPages.forEach((page, key) => {
            if (!_isDone(page.dynamicDev)) return;
            let isNew = false;
            let reason = '';
            const oldPage = _findInOldPages(oldPages, key, page.name);
            if (!oldPage) {
                isNew = true;
                reason = '(new page, done)';
            } else {
                if (_hasNoDevStatus(oldPage.dynamicDev) && _isDone(page.dynamicDev)) {
                    isNew = true;
                    reason = '(was: no status → Done)';
                }
            }
            if (isNew) {
                const ut = page._utName || 'Unknown';
                const label = reason ? `${page.name} ${reason}` : page.name;
                (pagesDevelopedDetail[ut] = pagesDevelopedDetail[ut] || []).push(label);
            }
        });

        // 2. Group completed pages
        newPages.forEach((newPage, key) => {
            if (_isDone(newPage.dynamicDev)) {
                const oldPage = _findInOldPages(oldPages, key, newPage.name);
                if (oldPage) {
                    const oldVal = (oldPage.dynamicDev || '').toString().toLowerCase().trim();
                    if (oldVal.includes('in progress')) {
                        const ut = newPage._utName || 'Unknown';
                        const label = `${newPage.name} (was: In Progress → Done)`;
                        (pagesDevelopedDetail[ut] = pagesDevelopedDetail[ut] || []).push(label);
                    }
                }
            }
        });
        details.pagesDeveloped = pagesDevelopedDetail;

        // staticScreens detail: per UT → list of page names
        const staticScreensDetail = {};
        newUTs.forEach((newUT, utName) => {
            if (isExemptUT(utName)) return;
            const hasPages = newUT.categories && newUT.categories.some(c => c.pages.length > 0);
            const items = [];
            
            if (hasPages) {
                newUT.categories.forEach(cat => {
                    cat.pages.forEach(page => {
                        const newCreation = (page.staticScreens && page.staticScreens.creation) || '';
                        if (_isDone(newCreation)) {
                            const oldUT = oldUTs.get(utName);
                            let oldPage = null;
                            if (oldUT) {
                                oldUT.categories.forEach(oldCat => {
                                    if (oldCat.name === cat.name) {
                                        oldPage = oldCat.pages.find(p => p.name === page.name);
                                    }
                                });
                            }
                            const oldCreation = oldPage ? ((oldPage.staticScreens && oldPage.staticScreens.creation) || '') : '';
                            if (!_isDone(oldCreation)) {
                                items.push(page.name);
                            }
                        }
                    });
                });
            } else {
                const newCreation = (newUT.staticScreens && newUT.staticScreens.creation) || '';
                if (_isDone(newCreation)) {
                    const oldUT = oldUTs.get(utName);
                    const oldCreation = oldUT ? ((oldUT.staticScreens && oldUT.staticScreens.creation) || '') : '';
                    if (!_isDone(oldCreation)) {
                        items.push('Static Screens Created');
                    }
                }
            }
            if (items.length > 0) staticScreensDetail[utName] = items;
        });
        details.staticScreens = staticScreensDetail;

        // qa detail: per UT → count of resolved and identified bugs
        const qaDetail = {};
        if (newMod) newMod.userTypes.forEach(ut => {
            const oldUT = oldUTs.get(ut.name);
            const newCountFixed = ut.qaBugsFixed || 0;
            const oldCountFixed = (oldUT && oldUT.qaBugsFixed) || 0;
            const deltaFixed = newCountFixed - oldCountFixed;

            const newCountBugs = ut.qaBugs || 0;
            const oldCountBugs = (oldUT && oldUT.qaBugs) || 0;
            const deltaBugs = newCountBugs - oldCountBugs;

            const items = [];
            if (deltaFixed > 0) items.push(`${deltaFixed} bug${deltaFixed !== 1 ? 's' : ''} resolved`);
            if (deltaBugs > 0) items.push(`${deltaBugs} bug${deltaBugs !== 1 ? 's' : ''} identified`);

            if (items.length > 0) qaDetail[ut.name] = items;
        });
        details.qa = qaDetail;

        // documentsCreated detail: per UT → doc type names
        const documentsCreatedDetail = {};
        newUTs.forEach((newUT, utName) => {
            if (isExemptUT(utName)) return;
            const oldUT = oldUTs.get(utName);
            const items = [];
            const newPF = (newUT.documentation && newUT.documentation.processFlow) || '';
            const oldPF = oldUT ? ((oldUT.documentation && oldUT.documentation.processFlow) || '') : '';
            
            if (_docProgressed(oldPF, newPF)) {
                const os = _getDocState(oldPF);
                const ns = _getDocState(newPF);
                const docId = newPF.includes('|||') ? newPF.split('|||')[1] : Math.random().toString();
                if (os === 'PENDING' && ns === 'NEEDS_UPDATE') {
                    items.push('Process Flow (To be updated)|||' + docId);
                } else if ((os === 'DONE' || os === 'NEEDS_UPDATE' || os === 'PENDING') && ns === 'UPDATED') {
                    items.push('Process Flow (Updated)|||' + docId);
                } else if (os === 'NEEDS_UPDATE' && ns === 'DONE') {
                    items.push('Process Flow (Updated)|||' + docId); // Effectively an update was completed
                } else {
                    items.push('Process Flow|||' + docId);
                }
            }
            
            const newUM = (newUT.documentation && newUT.documentation.userManual) || '';
            const oldUM = oldUT ? ((oldUT.documentation && oldUT.documentation.userManual) || '') : '';
            
            if (_docProgressed(oldUM, newUM)) {
                const os = _getDocState(oldUM);
                const ns = _getDocState(newUM);
                const docId = newUM.includes('|||') ? newUM.split('|||')[1] : Math.random().toString();
                if (os === 'PENDING' && ns === 'NEEDS_UPDATE') {
                    items.push('User Manual (To be updated)|||' + docId);
                } else if ((os === 'DONE' || os === 'NEEDS_UPDATE' || os === 'PENDING') && ns === 'UPDATED') {
                    items.push('User Manual (Updated)|||' + docId);
                } else if (os === 'NEEDS_UPDATE' && ns === 'DONE') {
                    items.push('User Manual (Updated)|||' + docId); // Effectively an update was completed
                } else {
                    items.push('User Manual|||' + docId);
                }
            }
            if (items.length) documentsCreatedDetail[utName] = items;
        });
        details.documentsCreated = documentsCreatedDetail;

        // ── KPI & Detail: Internal & Client Review Points (Count Done review points implemented this month) ──
        const internalReviewPointsDetail = {};
        let totalIntImplemented = 0;
        
        const clientReviewPointsDetail = {};
        let totalClImplemented = 0;
        
        newUTs.forEach((newUT, utName) => {
            if (isExemptUT(utName)) return;
            const oldUT = oldUTs.get(utName);
            
            // 1. Internal reviews comparison
            const newIntReviews = newUT.internalReviews || [];
            const oldIntReviews = oldUT ? (oldUT.internalReviews || []) : [];
            
            if (newIntReviews.length > 0 || oldIntReviews.length > 0) {
                const implementedInt = _compareReviews(newIntReviews, oldIntReviews);
                if (implementedInt.length > 0) {
                    internalReviewPointsDetail[utName] = implementedInt;
                    totalIntImplemented += implementedInt.length;
                }
            } else {
                // Fallback to numeric delta logic
                const newCount = newUT.internalReviewPoints || 0;
                const oldCount = oldUT ? (oldUT.internalReviewPoints || 0) : 0;
                const delta = Math.max(0, newCount - oldCount);
                if (delta > 0) {
                    internalReviewPointsDetail[utName] = [`${delta} point${delta !== 1 ? 's' : ''} implemented (${oldCount} → ${newCount})`];
                    totalIntImplemented += delta;
                }
            }
            
            // 2. Client reviews comparison
            const newClReviews = newUT.clientReviews || [];
            const oldClReviews = oldUT ? (oldUT.clientReviews || []) : [];
            
            if (newClReviews.length > 0 || oldClReviews.length > 0) {
                const implementedCl = _compareReviews(newClReviews, oldClReviews);
                if (implementedCl.length > 0) {
                    clientReviewPointsDetail[utName] = implementedCl;
                    totalClImplemented += implementedCl.length;
                }
            } else {
                // Fallback to numeric delta logic
                const newCount = newUT.clientReviewPoints || 0;
                const oldCount = oldUT ? (oldUT.clientReviewPoints || 0) : 0;
                const delta = Math.max(0, newCount - oldCount);
                if (delta > 0) {
                    clientReviewPointsDetail[utName] = [`${delta} point${delta !== 1 ? 's' : ''} implemented (${oldCount} → ${newCount})`];
                    totalClImplemented += delta;
                }
            }
        });

        kpis.internalReviewPoints = totalIntImplemented;
        kpis.clientReviewPoints = totalClImplemented;
        
        summary.internalReviewPoints += totalIntImplemented;
        summary.clientReviewPoints += totalClImplemented;
        
        details.internalReviewPoints = internalReviewPointsDetail;
        details.clientReviewPoints = clientReviewPointsDetail;

        modules.push({ id, name: mod.name, color: visuals.color, icon: visuals.icon, kpis, details });
    });

    return { modules, summary };
}

function computePendingWork(newModules) {
    const modules = [];
    const summary = {
        pagesPending: 0,
        staticScreensPending: 0,
        internalReviewPending: 0,
        clientReviewPending: 0,
        qaPending: 0,
        documentsPending: 0
    };

    Object.keys(newModules).forEach(id => {
        const mod = newModules[id];
        const newUTs = _flattenUserTypes(mod);
        const newPages = _flattenPages(mod);
        const visuals = getVisuals(id, mod.name);
        
        const kpis = {
            pagesPending: 0,
            staticScreensPending: 0,
            internalReviewPending: 0,
            clientReviewPending: 0,
            qaPending: 0,
            documentsPending: 0
        };
        const details = {
            pagesPending: {},
            staticScreensPending: {},
            internalReviewPending: {},
            clientReviewPending: {},
            qaPending: {},
            documentsPending: {}
        };
        
        // 1. Pages Pending (Dynamic Dev is "In Progress" or "-" or "")
        const pagesPendingSet = new Set();
        newPages.forEach((page, key) => {
            const utName = page._utName;
            const dev = (page.dynamicDev || '').toString().toLowerCase().trim();
            if (dev === '' || dev === '-' || dev.includes('progress') || dev.includes('pending')) {
                if (!pagesPendingSet.has(page.name)) {
                    kpis.pagesPending++;
                    pagesPendingSet.add(page.name);
                    if (!details.pagesPending[utName]) details.pagesPending[utName] = [];
                    details.pagesPending[utName].push(page.name);
                }
            }
        });
        
        // 2. Static Screens Pending (Static screen creation is "In Progress")
        const ssPendingSet = new Set();
        newPages.forEach((page, key) => {
            const utName = page._utName;
            const sc = (page.staticScreens && page.staticScreens.creation || '').toString().toLowerCase().trim();
            if (sc.includes('progress') || sc.includes('pending')) {
                if (!ssPendingSet.has(page.name)) {
                    kpis.staticScreensPending++;
                    ssPendingSet.add(page.name);
                    if (!details.staticScreensPending[utName]) details.staticScreensPending[utName] = [];
                    details.staticScreensPending[utName].push(page.name);
                }
            }
        });
        
        newUTs.forEach((ut, utName) => {
            if (isExemptUT(utName)) return;
            const hasPages = ut.categories && ut.categories.some(c => c.pages.length > 0);
            if (!hasPages) {
                const sc = (ut.staticScreens && ut.staticScreens.creation || '').toString().toLowerCase().trim();
                if (sc.includes('progress') || sc.includes('pending')) {
                    kpis.staticScreensPending++;
                    if (!details.staticScreensPending[utName]) details.staticScreensPending[utName] = [];
                    details.staticScreensPending[utName].push('Static Screens In Progress');
                }
            }
        });
        
        // 3 & 4. Internal / Client Review Pending
        newUTs.forEach((ut, utName) => {
            if (isExemptUT(utName)) return;
            // Internal Review
            const intReviews = ut.internalReviews || [];
            const pendingInt = intReviews.filter(r => {
                const st = (r.status || '').toLowerCase().trim();
                return st !== '' && st !== '-' && st !== 'na' && st !== 'done' && st !== 'implemented' && st !== 'fixed';
            });
            if (pendingInt.length > 0) {
                kpis.internalReviewPending += pendingInt.length;
                details.internalReviewPending[utName] = pendingInt.map(r => r.text);
            }
            
            // Client Review
            const clReviews = ut.clientReviews || [];
            const pendingCl = clReviews.filter(r => {
                const st = (r.status || '').toLowerCase().trim();
                return st !== '' && st !== '-' && st !== 'na' && st !== 'done' && st !== 'implemented' && st !== 'fixed';
            });
            if (pendingCl.length > 0) {
                kpis.clientReviewPending += pendingCl.length;
                details.clientReviewPending[utName] = pendingCl.map(r => r.text);
            }
        });
        
        // 5. Bugs Pending (Total Bugs - Fixed Bugs)
        newUTs.forEach((ut, utName) => {
            if (isExemptUT(utName)) return;
            const bugs = parseInt(ut.qaBugs) || 0;
            const fixed = parseInt(ut.qaBugsFixed) || 0;
            const pendingBugs = Math.max(0, bugs - fixed);
            if (pendingBugs > 0) {
                kpis.qaPending += pendingBugs;
                details.qaPending[utName] = [`${pendingBugs} bug${pendingBugs !== 1 ? 's' : ''} left to resolve`];
            }
        });
        
        // 6. Documents Pending
        newUTs.forEach((ut, utName) => {
            if (isExemptUT(utName)) return;
            const pendingDocs = [];
            const pf = (ut.documentation && ut.documentation.processFlow || '').toString().toLowerCase().trim();
            if (pf.includes('progress') || pf.includes('to be updated') || pf === 'pending' || pf.includes('to be started') || pf.includes('not started')) {
                pendingDocs.push('Process Flow');
            }
            const um = (ut.documentation && ut.documentation.userManual || '').toString().toLowerCase().trim();
            if (um.includes('progress') || um.includes('to be updated') || um === 'pending' || um.includes('to be started') || um.includes('not started')) {
                pendingDocs.push('User Manual');
            }
            if (pendingDocs.length > 0) {
                kpis.documentsPending += pendingDocs.length;
                details.documentsPending[utName] = pendingDocs;
            }
        });
        
        summary.pagesPending += kpis.pagesPending;
        summary.staticScreensPending += kpis.staticScreensPending;
        summary.internalReviewPending += kpis.internalReviewPending;
        summary.clientReviewPending += kpis.clientReviewPending;
        summary.qaPending += kpis.qaPending;
        summary.documentsPending += kpis.documentsPending;
        
        modules.push({ id, name: mod.name, color: visuals.color, icon: visuals.icon, kpis, details });
    });

    return { modules, summary };
}

// ── Generate & Render ───────────────────────────────────────────────────

function generateMonthlyPresentation() {
    if (!_monthlyOldParsed || !_monthlyNewParsed) return;

    _monthlyComparison = computeComparison(_monthlyOldParsed, _monthlyNewParsed);
    _monthlyPendingData = computePendingWork(_monthlyNewParsed);
    _monthlySlideIndex = 0;
    _monthlySelectedKpi = 'pagesDeveloped';
    _monthlyPendingSelectedKpi = 'pagesPending';

    // Show presentation page
    document.getElementById('monthly-upload-page').classList.add('hidden');
    document.getElementById('monthly-pres-page').classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    renderMonthlySlide();
}

function selectMonthlyKpi(kpiKey) {
    if (_monthlySlideIndex >= 3) return;
    if (_monthlySlideIndex === 1) {
        _monthlySelectedKpi = kpiKey;
    } else if (_monthlySlideIndex === 2) {
        _monthlyPendingSelectedKpi = kpiKey;
    }
    // Update KPI card active states
    document.querySelectorAll('.monthly-kpi-card').forEach(card => {
        card.classList.toggle('active', card.dataset.kpi === kpiKey);
    });
    // Re-render only the chart
    const chartContainer = document.getElementById('monthly-chart-container');
    if (chartContainer) {
        const modules = _monthlySlideIndex === 1 ? _monthlyComparison.modules : _monthlyPendingData.modules;
        chartContainer.innerHTML = _buildMonthlyBarChart(modules, kpiKey);
    }
}

function renderMonthlySlide() {
    const container = document.getElementById('monthly-pres-slide-container');
    
    let comp, kpiDefs, selectedKpi, title, subtitle;
    
    if (_monthlySlideIndex === 0) {
        container.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; animation: tmc-card-enter 0.6s ease-out backwards; padding: 2rem;">
                <div style="margin-bottom: 2rem;">
                    <img src="./assets/logo.png" alt="Logo" style="max-width: 280px; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));" />
                </div>
                <h1 style="font-size: 3.5rem; font-weight: 800; color: var(--text-primary); letter-spacing: -0.03em; margin-bottom: 0.5rem; line-height: 1.1;">Integrated Election Management System</h1>
                <p style="font-size: 1.75rem; color: var(--text-secondary); font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 0.25rem;">June 2026</p>
                <p style="font-size: 1.25rem; color: var(--text-secondary); opacity: 0.8; font-weight: 500;">Monthly report</p>
            </div>
        `;
        _renderMonthlyDots();
        return;
    }

    if (_monthlySlideIndex === 1) {
        comp = _monthlyComparison;
        kpiDefs = MONTHLY_KPI_DEFS;
        selectedKpi = _monthlySelectedKpi;
        title = 'Work Done In This Month';
        subtitle = 'Click on any KPI to see per-module breakdown';
    } else if (_monthlySlideIndex === 2) {
        comp = _monthlyPendingData;
        kpiDefs = MONTHLY_PENDING_KPI_DEFS;
        selectedKpi = _monthlyPendingSelectedKpi;
        title = 'Pending Work';
        subtitle = 'Click on any KPI to see per-module breakdown';
    } else if (_monthlySlideIndex === 3) {
        title = 'Dependencies & Blockers';
        subtitle = 'Current active dependencies across all modules';
    } else if (_monthlySlideIndex === 4) {
        title = "Last Month's Commitment Status";
        subtitle = 'Goals, status, and remarks from the previous month';
    } else if (_monthlySlideIndex === 5) {
        title = "This Month's Commitment";
        subtitle = 'Targets and estimated completion dates for each module';
    } else if (_monthlySlideIndex === 6) {
        title = "Team Review";
        subtitle = 'Developer performance and review metrics';
    } else if (_monthlySlideIndex === 7) {
        title = "Thank You";
        subtitle = '';
    }
    
    if (!comp && _monthlySlideIndex !== 3 && _monthlySlideIndex !== 4 && _monthlySlideIndex !== 5 && _monthlySlideIndex !== 6 && _monthlySlideIndex !== 7) return;

    if (_monthlySlideIndex === 3) {
        let cardsHtml = '<div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem; width: 100%;">';
        Object.keys(_monthlyNewParsed || {}).forEach(id => {
            const mod = _monthlyNewParsed[id];
            
            const isBlank = v => {
                const s = (v || '').trim().toLowerCase();
                return !s || s === '-' || s === 'none' || s === 'n/a' || s === 'na';
            };
            const modDep = isBlank(mod.dependency) ? '' : (mod.dependency || '').trim();
            const seenDeps = new Set(modDep ? [modDep.toLowerCase()] : []);
            const utDeps = (mod.userTypes || [])
                .map(ut => ({ name: ut.name, dep: (ut.dependency || '').trim() }))
                .filter(({ dep }) => {
                    if (isBlank(dep)) return false;
                    const key = dep.toLowerCase();
                    if (seenDeps.has(key)) return false;
                    seenDeps.add(key);
                    return true;
                });
                
            let depHtml = '';
            if (!modDep && utDeps.length === 0) {
                depHtml = 'None';
            } else {
                depHtml = '<ul style="margin: 0; padding-left: 1.2rem;">';
                if (modDep) {
                    depHtml += `<li style="margin-bottom:0.25rem;">${utDeps.length ? '<strong>General:</strong> ' : ''}${modDep.replace(/\n/g, '<br>')}</li>`;
                }
                utDeps.forEach(({ name, dep }) => {
                    depHtml += `<li style="margin-bottom:0.25rem;"><strong>${name}:</strong> ${dep.replace(/\n/g, '<br>')}</li>`;
                });
                depHtml += '</ul>';
            }
            
            const visuals = getVisuals(id, mod.name);
            cardsHtml += `
                <div style="flex: 1 1 calc(33.333% - 1rem); min-width: 250px; background: white; border-radius: 8px; padding: 1.25rem; box-shadow: var(--shadow-sm); border-left: 4px solid ${visuals.color};">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                        <div style="background: ${visuals.color}15; color: ${visuals.color}; width: 32px; height: 32px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">${visuals.icon}</div>
                        <div style="font-weight: 700; color: var(--text-primary);">${mod.name}</div>
                    </div>
                    <div style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">${depHtml}</div>
                </div>
            `;
        });
        cardsHtml += '</div>';

        container.innerHTML = `
            <div class="monthly-slide-header">
                <div class="monthly-slide-title">${title}</div>
                <div class="monthly-slide-subtitle">${subtitle}</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding-right: 0.5rem; display: flex; align-content: flex-start;">
                ${cardsHtml}
            </div>
        `;
        _renderMonthlyDots();
        return;
    }

    if (_monthlySlideIndex === 4) {
        let cardsHtml = '<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; width: 100%; height: 100%; align-content: center;">';
        if (!_monthlyCommitmentsParsed || Object.keys(_monthlyCommitmentsParsed).length === 0) {
            cardsHtml = `<div style="width: 100%; text-align: center; padding: 3rem; color: var(--text-muted); font-style: italic;">No commitments data uploaded.</div>`;
        } else {
            Object.keys(_monthlyCommitmentsParsed).forEach(modName => {
                const goals = _monthlyCommitmentsParsed[modName];
                const visuals = getVisuals(modName.toLowerCase().replace(/\s+/g, ''), modName);
                
                const counts = { done: 0, progress: 0, pending: 0, na: 0 };
                goals.forEach(g => {
                    const s = (g.status + ' ' + g.remark).toLowerCase();
                    if (s.includes('done')) counts.done++;
                    else if (s.includes('progress') || s.includes('started')) counts.progress++;
                    else if (s.includes('na')) counts.na++;
                    else counts.pending++; // Defaults to pending
                });
                
                let total = counts.done + counts.progress + counts.pending + counts.na;
                if (total === 0) total = 1;
                
                let donePct = (counts.done / total) * 100;
                let progPct = (counts.progress / total) * 100;
                let pendPct = (counts.pending / total) * 100;
                
                let c1 = donePct;
                let c2 = c1 + progPct;
                let c3 = c2 + pendPct;
                
                let gradient = `conic-gradient(
                    #10b981 0% ${c1}%,
                    #3b82f6 ${c1}% ${c2}%,
                    #f59e0b ${c2}% ${c3}%,
                    #64748b ${c3}% 100%
                )`;
                
                cardsHtml += `
                    <div style="background: white; border-radius: 12px; padding: 1rem; box-shadow: var(--shadow-sm); border: 1px solid rgba(15,23,42,0.06); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.75rem;">
                        <div style="display: flex; align-items: center; gap: 0.5rem; width: 100%; justify-content: center; margin-bottom: 0.25rem;">
                            <div style="background: ${visuals.color}15; color: ${visuals.color}; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem;">${visuals.icon}</div>
                            <div style="font-weight: 800; color: var(--text-primary); font-size: 0.9rem; text-align: center; line-height: 1.1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${modName}</div>
                        </div>
                        
                        <div style="position: relative; width: 100px; height: 100px; border-radius: 50%; background: ${gradient}; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.05); cursor: pointer;" onmouseenter="_showCommitmentsTooltip(event, '${modName.replace(/'/g, "\\'")}')" onmouseleave="_hideCommitmentsTooltip()">
                            <div style="position: absolute; inset: 18px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-direction: column; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                                <span style="font-size: 1.1rem; font-weight: 800; color: var(--text-primary); line-height: 1;">${Math.round(donePct)}%</span>
                            </div>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; width: 100%; margin-top: 0.25rem;">
                            <div style="display: flex; align-items: center; gap: 0.25rem; font-size: 0.65rem; font-weight: 600; color: var(--text-secondary);">
                                <div style="width: 8px; height: 8px; border-radius: 2px; background: #10b981;"></div>
                                Done (${counts.done})
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem; font-size: 0.65rem; font-weight: 600; color: var(--text-secondary);">
                                <div style="width: 8px; height: 8px; border-radius: 2px; background: #3b82f6;"></div>
                                In Progress (${counts.progress})
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem; font-size: 0.65rem; font-weight: 600; color: var(--text-secondary);">
                                <div style="width: 8px; height: 8px; border-radius: 2px; background: #f59e0b;"></div>
                                Pending (${counts.pending})
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem; font-size: 0.65rem; font-weight: 600; color: var(--text-secondary);">
                                <div style="width: 8px; height: 8px; border-radius: 2px; background: #64748b;"></div>
                                N/A (${counts.na})
                            </div>
                        </div>
                    </div>
                `;
            });
            cardsHtml += '</div>';
        }

        let dataJson = '';
        if (_monthlyCommitmentsParsed) {
            dataJson = JSON.stringify(_monthlyCommitmentsParsed).replace(/"/g, '&quot;');
        }

        container.innerHTML = `
            <div class="monthly-slide-header" style="flex-shrink: 0; padding-bottom: 0;">
                <div class="monthly-slide-title">${title}</div>
                <div class="monthly-slide-subtitle">${subtitle}</div>
            </div>
            <div id="monthly-commitments-data" data-detail="${dataJson}" style="display:none;"></div>
            <div style="flex: 1; overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 0.5rem 0; position: relative;"
                 id="commitments-grid-container"
                 onwheel="_onCommitmentsWheel(event)"
                 onmouseleave="_hideCommitmentsTooltipNow()">
                ${cardsHtml}
                <div id="monthly-commitments-tooltip" class="monthly-bar-tooltip" style="display:none; max-width: 320px; z-index: 100; pointer-events: auto; scroll-behavior: smooth;" onmouseenter="_cancelHideCommitmentsTooltip()" onmouseleave="_hideCommitmentsTooltipNow()"></div>
            </div>
        `;
        _renderMonthlyDots();
        return;
    }

    if (_monthlySlideIndex === 5) {
        let cardsHtml = '';
        if (!_monthlyThisMonthCommitParsed || Object.keys(_monthlyThisMonthCommitParsed).length === 0) {
            cardsHtml = `<div style="width: 100%; text-align: center; padding: 3rem; color: var(--text-muted); font-style: italic;">No this month's commitment data uploaded.</div>`;
        } else {
            cardsHtml = '<div class="tmc-grid">';
            Object.keys(_monthlyThisMonthCommitParsed).forEach(modName => {
                const allTargets = _monthlyThisMonthCommitParsed[modName];
                const visuals = getVisuals(modName.toLowerCase().replace(/\s+/g, ''), modName);
                
                // Only keep targets that have dates
                const targets = allTargets.filter(t => t.date && t.date.trim() && t.date.trim() !== '-');
                if (targets.length === 0) return; // skip modules with no dated targets
                
                let rowsHtml = '';
                targets.forEach(t => {
                    const tLower = t.target.toLowerCase();
                    let icon = '📋';
                    if (tLower.includes('requirement')) icon = '📝';
                    else if (tLower.includes('static') || tLower.includes('screen')) icon = '🎨';
                    else if (tLower.includes('dynamic') || tLower.includes('development')) icon = '⚡';
                    else if (tLower.includes('internal') || tLower.includes('review')) icon = '🔍';
                    else if (tLower.includes('client')) icon = '👤';
                    else if (tLower.includes('qa') || tLower.includes('quality')) icon = '✅';
                    else if (tLower.includes('database') || tLower.includes('db')) icon = '🗄️';
                    else if (tLower.includes('security') || tLower.includes('audit')) icon = '🔒';
                    else if (tLower.includes('uat') || tLower.includes('testing')) icon = '🧪';
                    else if (tLower.includes('go live') || tLower.includes('launch') || tLower.includes('deploy')) icon = '🚀';
                    else if (tLower.includes('approval')) icon = '✍️';
                    else if (tLower.includes('final')) icon = '🏁';
                    
                    rowsHtml += `
                        <div class="tmc-target-row">
                            <div class="tmc-target-icon" style="background: ${visuals.color}10; color: ${visuals.color};">${icon}</div>
                            <div class="tmc-target-content">
                                <div class="tmc-target-name">${t.target}</div>
                            </div>
                            <span class="tmc-target-date-badge tmc-has-date">📅 ${t.date}</span>
                        </div>
                    `;
                });
                
                cardsHtml += `
                    <div class="tmc-module-card" style="--tmc-color: ${visuals.color};">
                        <div class="tmc-module-header">
                            <div class="tmc-module-icon" style="background: ${visuals.color}18; color: ${visuals.color}; overflow: hidden;">${visuals.icon}</div>
                            <div class="tmc-module-name">${modName}</div>
                            <div class="tmc-module-count" style="background: ${visuals.color}12; color: ${visuals.color};">${targets.length} target${targets.length !== 1 ? 's' : ''}</div>
                        </div>
                        <div class="tmc-targets-list">
                            ${rowsHtml}
                        </div>
                    </div>
                `;
            });
            cardsHtml += '</div>';
        }

        container.innerHTML = `
            <div class="monthly-slide-header" style="flex-shrink: 0; padding-bottom: 0;">
                <div class="monthly-slide-title">${title}</div>
                <div class="monthly-slide-subtitle">${subtitle}</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: 0.5rem 0;">
                ${cardsHtml}
            </div>
        `;
        _renderMonthlyDots();
        return;
    }

    if (_monthlySlideIndex === 6) {
        let cardsHtml = '';
        if (!_monthlyTeamReviewParsed || _monthlyTeamReviewParsed.length === 0) {
            cardsHtml = `<div style="width: 100%; text-align: center; padding: 3rem; color: var(--text-muted); font-style: italic;">No team review data uploaded.</div>`;
        } else {
            cardsHtml = '<div class="team-review-grid">';
            _monthlyTeamReviewParsed.forEach((dev, idx) => {
                const colorIdx = idx % PRESET_COLORS.length;
                const color = PRESET_COLORS[colorIdx];
                
                cardsHtml += `
                    <div class="team-dev-card" style="--dev-color: ${color};">
                        <div class="team-dev-header">
                            <div class="team-dev-avatar" style="background: ${color}18; color: ${color};">${dev.developer.substring(0,2).toUpperCase()}</div>
                            <div class="team-dev-name">${dev.developer}</div>
                            <div class="team-dev-util" style="background: ${color}12; color: ${color};">Util: ${dev.utilization}</div>
                        </div>
                        <div class="team-dev-stats">
                            <div class="team-stat-row">
                                <span class="team-stat-label">L1 Review</span>
                                <span class="team-stat-val ${dev.l1.toLowerCase() === 'done' ? 'stat-good' : ''}">${dev.l1}</span>
                            </div>
                            <div class="team-stat-row">
                                <span class="team-stat-label">L2 Indv. Review</span>
                                <span class="team-stat-val">${dev.l2}</span>
                            </div>
                            <div class="team-stat-row">
                                <span class="team-stat-label">Unit Testing</span>
                                <span class="team-stat-val">${dev.unit}</span>
                            </div>
                            <div class="team-stat-row">
                                <span class="team-stat-label">Coordination</span>
                                <span class="team-stat-val">${dev.coordination}</span>
                            </div>
                            <div class="team-stat-row">
                                <span class="team-stat-label">Ownership</span>
                                <span class="team-stat-val">${dev.ownership}</span>
                            </div>
                            <div class="team-stat-row">
                                <span class="team-stat-label">Accountability</span>
                                <span class="team-stat-val">${dev.accountability}</span>
                            </div>
                            <div class="team-stat-row">
                                <span class="team-stat-label">Task Filled</span>
                                <span class="team-stat-val">${dev.taskFilled}</span>
                            </div>
                        </div>
                    </div>
                `;
            });
            cardsHtml += '</div>';
        }

        container.innerHTML = `
            <div class="monthly-slide-header" style="flex-shrink: 0; padding-bottom: 0;">
                <div class="monthly-slide-title">${title}</div>
                <div class="monthly-slide-subtitle">${subtitle}</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: 0.5rem 0; width: 100%;">
                ${cardsHtml}
            </div>
        `;
        _renderMonthlyDots();
        return;
    }

    if (_monthlySlideIndex === 7) {
        container.innerHTML = `
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                text-align: center;
                gap: 1.5rem;
                animation: monthly-intro-fadein 0.8s ease-out;
            ">
                <div style="
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 12px 40px rgba(99, 102, 241, 0.35);
                    font-size: 2.5rem;
                    animation: monthly-intro-fadein 0.6s ease-out;
                ">🙏</div>
                <div>
                    <h1 style="
                        font-size: 3.5rem;
                        font-weight: 900;
                        color: var(--text-primary);
                        letter-spacing: -0.04em;
                        margin: 0 0 0.5rem;
                        line-height: 1;
                        background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    ">Thank You</h1>
                    <p style="
                        font-size: 1.1rem;
                        color: var(--text-secondary);
                        font-weight: 500;
                        margin: 0;
                        letter-spacing: 0.02em;
                    ">For your time and attention</p>
                </div>
                <div style="
                    display: flex;
                    gap: 0.6rem;
                    margin-top: 0.5rem;
                ">
                    ${Object.keys(_monthlyNewParsed || {}).map(id => {
                        const visuals = getVisuals(id, (_monthlyNewParsed[id] || {}).name || id);
                        return `<div style="
                            width: 10px;
                            height: 10px;
                            border-radius: 50%;
                            background: ${visuals.color};
                            opacity: 0.7;
                        "></div>`;
                    }).join('')}
                </div>
                <p style="
                    font-size: 0.9rem;
                    color: var(--text-muted);
                    font-weight: 500;
                    margin: 0;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                ">Integrated Election Management System &nbsp;·&nbsp; June 2026</p>
            </div>
        `;
        _renderMonthlyDots();
        return;
    }

    const s = comp.summary;

    // Build KPI cards
    let kpiHtml = '<div class="monthly-kpi-strip">';
    kpiDefs.forEach(def => {
        const val = s[def.key];
        const isActive = selectedKpi === def.key;
        kpiHtml += `
            <div class="monthly-kpi-card ${isActive ? 'active' : ''}" data-kpi="${def.key}"
                 style="--kpi-accent: ${def.accent}; cursor: pointer;"
                 onclick="selectMonthlyKpi('${def.key}')">
                <div class="monthly-kpi-label">${def.icon} ${def.label}</div>
                <div class="monthly-kpi-value">${val}</div>
            </div>
        `;
    });
    kpiHtml += '</div>';

    // Build chart
    const chartHtml = `<div id="monthly-chart-container">${_buildMonthlyBarChart(comp.modules, selectedKpi)}</div>`;

    container.innerHTML = `
        <div class="monthly-slide-header">
            <div class="monthly-slide-title">${title}</div>
            <div class="monthly-slide-subtitle">${subtitle}</div>
        </div>
        ${kpiHtml}
        ${chartHtml}
    `;

    _renderMonthlyDots();
}

function _buildMonthlyBarChart(modules, kpiKey) {
    let kpiDef = MONTHLY_KPI_DEFS.find(d => d.key === kpiKey);
    if (!kpiDef) kpiDef = MONTHLY_PENDING_KPI_DEFS.find(d => d.key === kpiKey);
    if (!kpiDef) kpiDef = MONTHLY_KPI_DEFS[0];

    // Get values per module for the selected KPI
    let maxVal;
    if (kpiKey === 'pagesDeveloped') {
        const allPageValues = [];
        modules.forEach(m => {
            allPageValues.push(m.kpis.pagesDevelopedNew || 0);
            allPageValues.push(m.kpis.pagesDevelopedCompleted || 0);
        });
        maxVal = Math.max(...allPageValues, 1);
    } else if (kpiKey === 'qa') {
        const allQAValues = [];
        modules.forEach(m => {
            allQAValues.push(m.kpis.qa || 0);
            allQAValues.push(m.kpis.qaBugsIdentified || 0);
        });
        maxVal = Math.max(...allQAValues, 1);
    } else {
        const values = modules.map(m => m.kpis[kpiKey] || 0);
        maxVal = Math.max(...values, 1);
    }

    // SVG dimensions
    const svgWidth = 900;
    const svgHeight = 280;
    const marginTop = 35;
    const marginBottom = 55;
    const marginLeft = 45;
    const marginRight = 20;
    const chartWidth = svgWidth - marginLeft - marginRight;
    const chartHeight = svgHeight - marginTop - marginBottom;

    const n = modules.length;
    if (n === 0) return '';

    const barWidth = Math.min(60, (chartWidth / n) * 0.55);
    const groupWidth = chartWidth / n;

    // Nice grid steps
    const gridSteps = 5;
    const stepVal = Math.ceil(maxVal / gridSteps);
    const gridMax = stepVal * gridSteps;

    // Grid lines
    let gridLines = '';
    for (let i = 0; i <= gridSteps; i++) {
        const y = marginTop + (chartHeight * (1 - i / gridSteps));
        const val = stepVal * i;
        gridLines += `<line x1="${marginLeft}" y1="${y}" x2="${svgWidth - marginRight}" y2="${y}" stroke="rgba(15,23,42,0.06)" stroke-width="1"/>`;
        gridLines += `<text x="${marginLeft - 8}" y="${y + 4}" fill="rgba(15,23,42,0.4)" font-size="10" font-weight="600" text-anchor="end" font-family="Inter, sans-serif">${val}</text>`;
    }

    // Bars
    let bars = '';
    // Store detail data as JSON in a script tag for tooltip access
    const detailData = modules.map(m => {
        let valText;
        if (kpiKey === 'qa') {
            valText = `${m.kpis.qa || 0} resolved / ${m.kpis.qaBugsIdentified || 0} identified`;
        } else if (kpiKey === 'pagesDeveloped') {
            valText = `${m.kpis.pagesDeveloped || 0} (${m.kpis.pagesDevelopedNew || 0} new / ${m.kpis.pagesDevelopedCompleted || 0} completed)`;
        } else {
            valText = m.kpis[kpiKey] || 0;
        }
        return {
            name: m.name,
            color: m.color,
            icon: m.icon,
            value: valText,
            detail: m.details ? (m.details[kpiKey] || {}) : {}
        };
    });

    // Add legend if active KPI is QA or Pages Developed
    let legend = '';
    if (kpiKey === 'qa') {
        legend = `
            <g transform="translate(${svgWidth - marginRight - 240}, 10)">
                <rect x="0" y="0" width="10" height="10" rx="2" fill="#ef4444"/>
                <text x="15" y="9" fill="rgba(15,23,42,0.6)" font-size="10" font-weight="700" font-family="Inter, sans-serif">Bugs Identified</text>
                <rect x="110" y="0" width="10" height="10" rx="2" fill="#10b981"/>
                <text x="125" y="9" fill="rgba(15,23,42,0.6)" font-size="10" font-weight="700" font-family="Inter, sans-serif">Bugs Resolved</text>
            </g>
        `;
    } else if (kpiKey === 'pagesDeveloped') {
        legend = `
            <g transform="translate(${svgWidth - marginRight - 275}, 10)">
                <rect x="0" y="0" width="10" height="10" rx="2" fill="#6366f1"/>
                <text x="15" y="9" fill="rgba(15,23,42,0.6)" font-size="10" font-weight="700" font-family="Inter, sans-serif">New Pages Developed</text>
                <rect x="135" y="0" width="10" height="10" rx="2" fill="#10b981"/>
                <text x="150" y="9" fill="rgba(15,23,42,0.6)" font-size="10" font-weight="700" font-family="Inter, sans-serif">Pages Completed</text>
            </g>
        `;
    }

    modules.forEach((mod, i) => {
        const cx = marginLeft + groupWidth * i + groupWidth / 2;
        const labelY = marginTop + chartHeight + 18;
        const nameWords = mod.name.split(' ');

        if (kpiKey === 'pagesDeveloped') {
            const valNew = mod.kpis.pagesDevelopedNew || 0;
            const valCompleted = mod.kpis.pagesDevelopedCompleted || 0;

            const barHNew = gridMax > 0 ? (valNew / gridMax) * chartHeight : 0;
            const barHCompleted = gridMax > 0 ? (valCompleted / gridMax) * chartHeight : 0;

            // Side by side double bars
            const spacing = 4;
            const doubleBarWidth = barWidth * 0.43;
            const barXNew = cx - doubleBarWidth - spacing / 2;
            const barXCompleted = cx + spacing / 2;

            const barYNew = marginTop + chartHeight - barHNew;
            const barYCompleted = marginTop + chartHeight - barHCompleted;

            // New Pages Developed bar (Indigo)
            bars += `<defs><linearGradient id="mbg_new_${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6366f1" stop-opacity="0.95"/><stop offset="100%" stop-color="#a5b4fc" stop-opacity="0.65"/></linearGradient></defs>`;
            bars += `<rect class="monthly-bar-rect" x="${barXNew}" y="${barYNew}" width="${doubleBarWidth}" height="${barHNew}" rx="4" fill="url(#mbg_new_${i})" style="animation-delay: ${i * 0.08}s"/>`;

            // Pages Completed bar (Green)
            bars += `<defs><linearGradient id="mbg_comp_${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#10b981" stop-opacity="0.95"/><stop offset="100%" stop-color="#6ee7b7" stop-opacity="0.65"/></linearGradient></defs>`;
            bars += `<rect class="monthly-bar-rect" x="${barXCompleted}" y="${barYCompleted}" width="${doubleBarWidth}" height="${barHCompleted}" rx="4" fill="url(#mbg_comp_${i})" style="animation-delay: ${i * 0.08}s"/>`;

            // Value labels
            if (valNew > 0) {
                bars += `<text x="${barXNew + doubleBarWidth / 2}" y="${barYNew - 6}" fill="#6366f1" font-size="10" font-weight="800" text-anchor="middle" font-family="Inter, sans-serif">${valNew}</text>`;
            }
            if (valCompleted > 0) {
                bars += `<text x="${barXCompleted + doubleBarWidth / 2}" y="${barYCompleted - 6}" fill="#10b981" font-size="10" font-weight="800" text-anchor="middle" font-family="Inter, sans-serif">${valCompleted}</text>`;
            }
        } else if (kpiKey === 'qa') {
            const valIdentified = mod.kpis.qaBugsIdentified || 0;
            const valResolved = mod.kpis.qa || 0;

            const barHIdentified = gridMax > 0 ? (valIdentified / gridMax) * chartHeight : 0;
            const barHResolved = gridMax > 0 ? (valResolved / gridMax) * chartHeight : 0;

            // Side by side double bars
            const spacing = 4;
            const doubleBarWidth = barWidth * 0.43;
            const barXIdentified = cx - doubleBarWidth - spacing / 2;
            const barXResolved = cx + spacing / 2;

            const barYIdentified = marginTop + chartHeight - barHIdentified;
            const barYResolved = marginTop + chartHeight - barHResolved;

            // Identified bar (Red)
            bars += `<defs><linearGradient id="mbg_id_${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ef4444" stop-opacity="0.95"/><stop offset="100%" stop-color="#fca5a5" stop-opacity="0.65"/></linearGradient></defs>`;
            bars += `<rect class="monthly-bar-rect" x="${barXIdentified}" y="${barYIdentified}" width="${doubleBarWidth}" height="${barHIdentified}" rx="4" fill="url(#mbg_id_${i})" style="animation-delay: ${i * 0.08}s"/>`;

            // Resolved bar (Green)
            bars += `<defs><linearGradient id="mbg_res_${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#10b981" stop-opacity="0.95"/><stop offset="100%" stop-color="#6ee7b7" stop-opacity="0.65"/></linearGradient></defs>`;
            bars += `<rect class="monthly-bar-rect" x="${barXResolved}" y="${barYResolved}" width="${doubleBarWidth}" height="${barHResolved}" rx="4" fill="url(#mbg_res_${i})" style="animation-delay: ${i * 0.08}s"/>`;

            // Value labels
            if (valIdentified > 0) {
                bars += `<text x="${barXIdentified + doubleBarWidth / 2}" y="${barYIdentified - 6}" fill="#ef4444" font-size="10" font-weight="800" text-anchor="middle" font-family="Inter, sans-serif">${valIdentified}</text>`;
            }
            if (valResolved > 0) {
                bars += `<text x="${barXResolved + doubleBarWidth / 2}" y="${barYResolved - 6}" fill="#10b981" font-size="10" font-weight="800" text-anchor="middle" font-family="Inter, sans-serif">${valResolved}</text>`;
            }
        } else {
            const val = mod.kpis[kpiKey] || 0;
            const barH = gridMax > 0 ? (val / gridMax) * chartHeight : 0;
            const barX = cx - barWidth / 2;
            const barY = marginTop + chartHeight - barH;

            // Bar gradient def
            bars += `<defs><linearGradient id="mbg${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${mod.color}" stop-opacity="0.9"/><stop offset="100%" stop-color="${mod.color}" stop-opacity="0.6"/></linearGradient></defs>`;
            bars += `<rect class="monthly-bar-rect" x="${barX}" y="${barY}" width="${barWidth}" height="${barH}" rx="5" fill="url(#mbg${i})" style="animation-delay: ${i * 0.08}s"/>`;

            // Value label
            if (val > 0) {
                bars += `<text x="${cx}" y="${barY - 8}" fill="${mod.color}" font-size="12" font-weight="800" text-anchor="middle" font-family="Inter, sans-serif">${val}</text>`;
            }
        }

        // Invisible hover zone covering full column height
        const hoverX = marginLeft + groupWidth * i;
        bars += `<rect class="monthly-bar-hover" x="${hoverX}" y="${marginTop}" width="${groupWidth}" height="${chartHeight + marginBottom - 10}" fill="transparent" data-modindex="${i}" style="cursor: pointer;"/>`;

        // Module name label
        if (nameWords.length > 1 && mod.name.length > 8) {
            bars += `<text x="${cx}" y="${labelY}" fill="rgba(15,23,42,0.55)" font-size="10" font-weight="700" text-anchor="middle" font-family="Inter, sans-serif">${nameWords[0]}</text>`;
            bars += `<text x="${cx}" y="${labelY + 13}" fill="rgba(15,23,42,0.55)" font-size="10" font-weight="700" text-anchor="middle" font-family="Inter, sans-serif">${nameWords.slice(1).join(' ')}</text>`;
        } else {
            bars += `<text x="${cx}" y="${labelY}" fill="rgba(15,23,42,0.55)" font-size="10" font-weight="700" text-anchor="middle" font-family="Inter, sans-serif">${mod.name}</text>`;
        }

        // Module icon
        bars += `<text x="${cx}" y="${labelY + (nameWords.length > 1 && mod.name.length > 8 ? 28 : 16)}" fill="rgba(15,23,42,0.25)" font-size="14" text-anchor="middle">${mod.icon}</text>`;
    });

    // Store detail data in a hidden element for JS access
    const detailJson = JSON.stringify(detailData).replace(/"/g, '&quot;');

    return `
        <div class="monthly-chart-section" style="position: relative;"
             onmousemove="_onChartMouseMove(event)"
             onmouseleave="_hideMonthlyTooltipNow()"
             onwheel="_onChartWheel(event)">
            <div class="monthly-chart-title">
                <span class="icon">${kpiDef.icon}</span>
                ${kpiDef.label} — Per Module Breakdown
            </div>
            <div id="monthly-bar-detail-data" data-detail="${detailJson}" style="display:none;"></div>
            <div id="monthly-bar-tooltip" class="monthly-bar-tooltip" style="display:none; pointer-events: none;"></div>
            <svg id="monthly-chart-svg" width="100%" viewBox="0 0 ${svgWidth} ${svgHeight}" preserveAspectRatio="xMidYMid meet" style="display: block; overflow: visible;">
                ${gridLines}
                ${legend}
                <line x1="${marginLeft}" y1="${marginTop}" x2="${marginLeft}" y2="${marginTop + chartHeight}" stroke="rgba(15,23,42,0.08)" stroke-width="1"/>
                <line x1="${marginLeft}" y1="${marginTop + chartHeight}" x2="${svgWidth - marginRight}" y2="${marginTop + chartHeight}" stroke="rgba(15,23,42,0.08)" stroke-width="1"/>
                ${bars}
            </svg>
        </div>
    `;
}

// ── Bar Hover Tooltip ────────────────────────────────────────────────────

let _monthlyTooltipHideTimer = null;
let _monthlyTooltipCurrentMod = -1;

function _onChartWheel(event) {
    // If tooltip is visible and a bar is active, scroll the tooltip
    const tooltip = document.getElementById('monthly-bar-tooltip');
    if (!tooltip || tooltip.style.display === 'none' || _monthlyTooltipCurrentMod < 0) return;
    // Check if tooltip actually has overflow to scroll
    if (tooltip.scrollHeight > tooltip.clientHeight) {
        event.preventDefault();
        event.stopPropagation();
        tooltip.scrollTop += event.deltaY;
    }
}

function _onChartMouseMove(event) {
    // Find which hover rect we're over
    const target = event.target;
    const modIndex = target.dataset && target.dataset.modindex !== undefined
        ? parseInt(target.dataset.modindex, 10)
        : -1;

    const tooltip = document.getElementById('monthly-bar-tooltip');
    if (!tooltip) return;

    if (modIndex >= 0) {
        if (modIndex !== _monthlyTooltipCurrentMod) {
            _monthlyTooltipCurrentMod = modIndex;
            _buildTooltipContent(modIndex);
        }
        // Always reposition on move
        _positionTooltip(event, tooltip);
        tooltip.style.display = 'block';
    } else {
        // Mouse is over chart area but not a bar — keep showing last tooltip
        if (_monthlyTooltipCurrentMod >= 0) {
            _positionTooltip(event, tooltip);
        }
    }
}

function _positionTooltip(event, tooltip) {
    const container = tooltip.closest('.monthly-chart-section') || tooltip.parentElement;
    const rect = container.getBoundingClientRect();
    let left = event.clientX - rect.left + 18;
    let top = event.clientY - rect.top - 10;

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';

    // Prevent right overflow
    const tRect = tooltip.getBoundingClientRect();
    if (tRect.right > window.innerWidth - 16) {
        left = event.clientX - rect.left - tRect.width - 18;
        tooltip.style.left = left + 'px';
    }
    // Prevent bottom overflow
    if (tRect.bottom > window.innerHeight - 16) {
        top = event.clientY - rect.top - tRect.height - 10;
        tooltip.style.top = top + 'px';
    }
}

function _hideMonthlyTooltipNow() {
    const tooltip = document.getElementById('monthly-bar-tooltip');
    if (tooltip) tooltip.style.display = 'none';
    _monthlyTooltipCurrentMod = -1;
}

function _buildTooltipContent(modIndex) {
    const dataEl = document.getElementById('monthly-bar-detail-data');
    const tooltip = document.getElementById('monthly-bar-tooltip');
    if (!dataEl || !tooltip) return;

    let data;
    try {
        data = JSON.parse(dataEl.dataset.detail.replace(/&quot;/g, '"'));
    } catch(e) { return; }

    const mod = data[modIndex];
    if (!mod) return;

    const detail = mod.detail;
    const utNames = Object.keys(detail);

    let innerHtml = `
        <div class="mbt-header" style="border-left: 3px solid ${mod.color};">
            <span class="mbt-module">${mod.name}</span>
            <span class="mbt-count" style="color: ${mod.color};">${mod.value}</span>
        </div>
    `;

    if (utNames.length === 0) {
        innerHtml += `<div class="mbt-empty">No changes this month</div>`;
    } else {
        const itemGroups = {};
        utNames.forEach(ut => {
            const items = detail[ut] || [];
            items.forEach(item => {
                if (!itemGroups[item]) itemGroups[item] = [];
                itemGroups[item].push(ut);
            });
        });

        const reverseGroup = {};
        Object.entries(itemGroups).forEach(([item, uts]) => {
            const uniqueUts = [...new Set(uts)];
            const utKey = uniqueUts.join(', ');
            if (!reverseGroup[utKey]) reverseGroup[utKey] = [];
            reverseGroup[utKey].push(item);
        });

        Object.entries(reverseGroup).forEach(([combinedUtName, items]) => {
            innerHtml += `
                <div class="mbt-ut-group">
                    <div class="mbt-ut-name">${combinedUtName} <span class="mbt-ut-count">(${items.length})</span></div>
                    <ul class="mbt-items">
                        ${items.map(item => `<li>${item.split('|||')[0]}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
    }

    tooltip.innerHTML = innerHtml;
}

// Legacy: called by old inline handlers if any remain
function _showMonthlyTooltip(event, modIndex) {
    _monthlyTooltipCurrentMod = modIndex;
    _buildTooltipContent(modIndex);
    const tooltip = document.getElementById('monthly-bar-tooltip');
    if (tooltip) {
        tooltip.style.display = 'block';
        _positionTooltip(event, tooltip);
    }
}

function _scheduleHideTooltip() { _hideMonthlyTooltipNow(); }
function _hideMonthlyTooltip() { _hideMonthlyTooltipNow(); }

// ── Commitments Hover Tooltip ────────────────────────────────────────────

let _monthlyCommitmentsTooltipTimer = null;
let _monthlyCommitmentsCurrentMod = null;

function _onCommitmentsWheel(event) {
    const tooltip = document.getElementById('monthly-commitments-tooltip');
    if (!tooltip || tooltip.style.display === 'none' || !_monthlyCommitmentsCurrentMod) return;
    if (tooltip.scrollHeight > tooltip.clientHeight) {
        event.preventDefault();
        event.stopPropagation();
        tooltip.scrollTop += event.deltaY * 0.8;
    }
}

function _hideCommitmentsTooltipNow() {
    const tooltip = document.getElementById('monthly-commitments-tooltip');
    if (tooltip) tooltip.style.display = 'none';
    _monthlyCommitmentsCurrentMod = null;
}

function _cancelHideCommitmentsTooltip() {
    if (_monthlyCommitmentsTooltipTimer) {
        clearTimeout(_monthlyCommitmentsTooltipTimer);
        _monthlyCommitmentsTooltipTimer = null;
    }
}

function _showCommitmentsTooltip(event, modName) {
    if (_monthlyCommitmentsTooltipTimer) {
        clearTimeout(_monthlyCommitmentsTooltipTimer);
        _monthlyCommitmentsTooltipTimer = null;
    }

    const dataEl = document.getElementById('monthly-commitments-data');
    const tooltip = document.getElementById('monthly-commitments-tooltip');
    if (!dataEl || !tooltip) return;

    let data;
    try {
        data = JSON.parse(dataEl.dataset.detail.replace(/&quot;/g, '"'));
    } catch(e) { return; }

    const goals = data[modName] || [];
    const visuals = getVisuals(modName.toLowerCase().replace(/\s+/g, ''), modName);

    // Sticky header + scrollable list — single scroll layer on the tooltip itself
    let innerHtml = `
        <div class="mbt-header" style="border-left: 3px solid ${visuals.color}; position: sticky; top: 0; background: #fff; z-index: 1; margin-bottom: 0; padding-bottom: 0.5rem;">
            <span class="mbt-module">${modName} Commitments</span>
        </div>
        <div style="padding: 0.5rem 0.25rem 0.25rem 0.25rem;">
    `;

    if (goals.length === 0) {
        innerHtml += `<div class="mbt-empty">No commitments found</div>`;
    } else {
        goals.forEach(g => {
            const statusLower = (g.status + ' ' + g.remark).toLowerCase();
            let statusColor = '#64748b'; // N/A / Default
            if (statusLower.includes('done')) statusColor = '#10b981';
            else if (statusLower.includes('progress') || statusLower.includes('started')) statusColor = '#3b82f6';
            else if (statusLower.includes('pending') || statusLower.includes('not started') || statusLower.includes('hold')) statusColor = '#f59e0b';
            
            innerHtml += `
                <div style="margin-bottom: 0.85rem; border-left: 2px solid ${statusColor}; padding-left: 0.6rem;">
                    <div style="font-weight: 600; color: var(--text-primary); font-size: 0.8rem; line-height: 1.35;">${g.goal}</div>
                    <div style="font-size: 0.65rem; color: ${statusColor}; font-weight: 700; text-transform: uppercase; margin-top: 0.25rem;">${g.status || '-'}</div>
                    ${g.remark && g.remark !== '-' ? `<div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.25rem; line-height: 1.3;">${g.remark}</div>` : ''}
                </div>
            `;
        });
    }
    innerHtml += '</div>';

    tooltip.innerHTML = innerHtml;
    _monthlyCommitmentsCurrentMod = modName;
    tooltip.style.display = 'block';
    tooltip.scrollTop = 0; // Reset scroll on new display

    const container = document.getElementById('commitments-grid-container') || document.body;
    const rect = container.getBoundingClientRect();
    let left = event.clientX - rect.left + 20;
    let top = event.clientY - rect.top - 10;

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';

    const tRect = tooltip.getBoundingClientRect();
    if (left + tRect.width > rect.width) {
        left = event.clientX - rect.left - tRect.width - 20;
        tooltip.style.left = left + 'px';
    }
    if (top + tRect.height > rect.height) {
        top = rect.height - tRect.height - 10;
        if (top < 0) top = 10;
        tooltip.style.top = top + 'px';
    }
}

function _scheduleHideCommitmentsTooltip() {
    _hideCommitmentsTooltipNow();
}

function _hideCommitmentsTooltip() {
    _hideCommitmentsTooltipNow();
}

// ── Monthly Presentation Navigation ─────────────────────────────────────

function _renderMonthlyDots() {
    const dotsContainer = document.getElementById('monthly-pres-dots');
    if (!dotsContainer) return;
    let html = '';
    for (let i = 0; i < _monthlyTotalSlides; i++) {
        html += `<span class="pres-dot ${i === _monthlySlideIndex ? 'active' : ''}" onclick="_monthlyGoToSlide(${i})"></span>`;
    }
    dotsContainer.innerHTML = html;
}

function _monthlyGoToSlide(index) {
    _monthlySlideIndex = index;
    renderMonthlySlide();
}

function monthlyPrevSlide() {
    if (_monthlySlideIndex > 0) {
        _monthlySlideIndex--;
        renderMonthlySlide();
    }
}

function monthlyNextSlide() {
    if (_monthlySlideIndex < _monthlyTotalSlides - 1) {
        _monthlySlideIndex++;
        renderMonthlySlide();
    }
}

// Keyboard navigation for monthly presentation
document.addEventListener('keydown', (e) => {
    const monthlyPage = document.getElementById('monthly-pres-page');
    if (!monthlyPage || monthlyPage.classList.contains('hidden')) return;

    if (e.key === 'ArrowRight' || e.key === ' ') {
        monthlyNextSlide();
    } else if (e.key === 'ArrowLeft') {
        monthlyPrevSlide();
    } else if (e.key === 'Escape') {
        exitMonthlyPresentation();
    }
});
