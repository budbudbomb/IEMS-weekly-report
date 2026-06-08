const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let content = fs.readFileSync(appJsPath, 'utf8');

// 1. Add JUNE_COMMITMENTS data at the top of the file
const dataInjection = `
// ============================================
// JUNE COMMITMENTS DATA
// ============================================
const JUNE_COMMITMENTS = [
    {
        moduleId: 'preksha',
        goals: [
            'QA to be finished asap',
            'Client review to be done this week',
            'Documentation: Concept note',
            'Security audit',
            'UAT as soon as client approves',
            'Database audit: Implement Database Audit points by the end of this week',
            'UAT readiness by 16th June'
        ]
    },
    {
        moduleId: 'samadhan',
        goals: [
            'QA to be finished asap',
            'Client review to be done this week',
            'Documentation: Concept note',
            'Database Audit: To be done this week',
            'Security audit',
            'UAT as soon as client approves'
        ]
    },
    {
        moduleId: 'expenditure',
        goals: [
            'Planning: Shorten the entire booklet by creating a single form if possible',
            'Client review: Get the static screens reviewed by Pradeep sir',
            'Dynamic development: Finish it latest by Thursday next week',
            'Start QA by Monday next week',
            'Database audit: By Monday 3rd week of June',
            'Security audit: By Monday 3rd week of June',
            'UAT: As soon as client reviews are implemented and approved'
        ]
    },
    {
        moduleId: 'ipbms',
        goals: [
            'Blocker: Secure a sample of the hardware asap and start testing',
            'Client review: Present the module to Priyanka ma\\'am by wednesday and get her approval',
            'QA: Start by Monday coming week',
            'Database Audit: By coming week',
            'Security Audit: Once the Hardware testing is done',
            'UAT: As soon as client reviews are implemented and approved'
        ]
    },
    {
        moduleId: 'sugamta',
        goals: [
            'Dependency: Secure APIs to fetch Sector-Polling booth mapping data',
            'Requirement gathering: Aiming to to be done by Friday this week',
            'Static screens: Get Shakya sir\\'s review on Static screens and check with him about presenting to the DEOs',
            'Dynamic development: Aiming to be done by Monday last week of June',
            'Internal and Client reviews: Aiming to be done by the end of the last week of June',
            'QA: Aiming to be done by the Monday 2nd week of July',
            'Database Audit: Aiming to be done by last week of June',
            'Security Audit: Aiming to be done by 2nd week of July',
            'UAT: As soon as client reviews are implemented and approved'
        ]
    },
    {
        moduleId: 'evm',
        goals: [
            'On hold for now'
        ]
    }
];

`;

if (!content.includes('JUNE_COMMITMENTS = [')) {
    content = content.replace('// ============================================', dataInjection + '// ============================================');
}

// 2. Add renderJuneCommitments function
const renderFuncInjection = `
function renderJuneCommitments(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    JUNE_COMMITMENTS.forEach(commit => {
        const mod = MODULES[commit.moduleId];
        if (!mod) return;
        
        html += \`
            <div class="new-pres-card" style="border-top: 4px solid \${mod.color}; padding: 1.25rem; height: 100%; justify-content: flex-start; gap: 1rem;">
                <div class="pres-card-header" style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.75rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <div class="detail-module-icon" style="background: \${mod.color}15; color: \${mod.color}; border: 1px solid \${mod.color}25; width: 32px; height: 32px; font-size: 1rem; margin: 0; line-height: 1;">\${mod.icon}</div>
                        <div class="pres-card-title" style="font-size: 1.2rem; font-weight: 700; color: var(--text-primary);">\${mod.name}</div>
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 0.5rem; flex: 1; overflow-y: auto;">
                    \${commit.goals.map((goal, idx) => {
                        let icon = '🎯';
                        if (goal.toLowerCase().includes('qa') || goal.toLowerCase().includes('audit')) icon = '🔍';
                        if (goal.toLowerCase().includes('client') || goal.toLowerCase().includes('review')) icon = '👁️';
                        if (goal.toLowerCase().includes('blocker') || goal.toLowerCase().includes('dependency')) icon = '⚠️';
                        if (goal.toLowerCase().includes('hold')) icon = '⏸️';
                        
                        return \`
                            <div style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">
                                <span style="font-size: 0.9rem; margin-top: 0.1rem; opacity: 0.8;">\${icon}</span>
                                <span>\${goal}</span>
                            </div>
                        \`;
                    }).join('')}
                </div>
            </div>
        \`;
    });
    
    container.innerHTML = html;
}
`;

if (!content.includes('function renderJuneCommitments')) {
    content = content + '\\n\\n' + renderFuncInjection;
}

// 3. Update navigation bounds (+2 instead of +1)
content = content.replace(/currentSlideIndex < MODULE_ORDER\.length \+ 1/g, 'currentSlideIndex < MODULE_ORDER.length + 2');
content = content.replace(/currentSlideIndex === MODULE_ORDER\.length \+ 1/g, 'currentSlideIndex === MODULE_ORDER.length + 1'); // leave team review alone

// Fix pres-next-btn condition
content = content.replace(/document\.getElementById\('pres-next-btn'\)\.disabled = \(currentSlideIndex === MODULE_ORDER\.length \+ 1\);/g, "document.getElementById('pres-next-btn').disabled = (currentSlideIndex === MODULE_ORDER.length + 2);");

// Update dots loops
content = content.replace(/for \(let i = 0; i <= MODULE_ORDER\.length \+ 1; i\+\+\)/g, "for (let i = 0; i <= MODULE_ORDER.length + 2; i++)");

// Update dots titles inside loop
const oldDotsLogic = \`
        } else if (i === MODULE_ORDER.length + 1) {
            title = 'Team Review';
            color = '#10b981';
        } else {
\`;
const newDotsLogic = \`
        } else if (i === MODULE_ORDER.length + 1) {
            title = 'Team Review';
            color = '#10b981';
        } else if (i === MODULE_ORDER.length + 2) {
            title = 'June Commitments';
            color = '#f59e0b';
        } else {
\`;
content = content.replace(oldDotsLogic, newDotsLogic);

// 4. Inject the slide render logic
const teamReviewLogic = \`
    } else if (currentSlideIndex === MODULE_ORDER.length + 1) {
        let html = \\\`
            <div class="landing-hero" style="padding: 1rem 0 1.5rem;">
                <h2 class="hero-title" style="font-size: 2rem;">Team Review</h2>
                <p class="hero-subtitle">Overall performance metrics and KPIs for the development team</p>
            </div>
            <div id="team-page-content-pres" class="team-page-content"></div>
        \\\`;
        container.innerHTML = html;
        renderTeamReview('team-page-content-pres');
\`;

const juneCommitmentsLogic = \`
    } else if (currentSlideIndex === MODULE_ORDER.length + 2) {
        let html = \\\`
            <div class="landing-hero" style="padding: 1rem 0 1.5rem;">
                <h2 class="hero-title" style="font-size: 2rem;">June Commitments</h2>
                <p class="hero-subtitle">Key targets, milestones, and blockers identified for the current sprint</p>
            </div>
            <div id="commitments-content-pres" class="new-pres-card-grid" style="grid-template-columns: repeat(3, 1fr); gap: 1rem; align-items: stretch; max-width: 1200px; margin: 0 auto;"></div>
        \\\`;
        container.innerHTML = html;
        renderJuneCommitments('commitments-content-pres');
\`;

if (!content.includes('June Commitments')) {
    content = content.replace(teamReviewLogic, teamReviewLogic + juneCommitmentsLogic);
}

fs.writeFileSync(appJsPath, content);
console.log('Successfully injected June Commitments logic into app.js');
