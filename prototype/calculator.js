const stateData = {
    "CA": { name: "California", credit: 1500, perks: ["SGIP Battery Rebate (Est. $1,500)"], leaseEligible: true },
    "TX": { name: "Texas", credit: 2500, perks: ["Utility Rebate (AEP/Austin Avg ~$2.5k)"], leaseEligible: true },
    "FL": { name: "Florida", credit: 0, perks: ["100% Sales & Property Tax Exempt"], leaseEligible: true },
    "NY": { name: "New York", credit: 5000, perks: ["25% Tax Credit (Max $5,000) - LESSEE ELIGIBLE"], leaseEligible: true },
    "IL": { name: "Illinois", credit: 10500, perks: ["IL Shines SREC (15yr Est): ~$10,500 - Retained by lessor"], leaseEligible: true },
    "PA": { name: "Pennsylvania", credit: 0, perks: ["SREC Market Eligibility"], leaseEligible: true },
    "OH": { name: "Ohio", credit: 0, perks: ["SREC Market Eligibility"], leaseEligible: true },
    "GA": { name: "Georgia", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
    "NC": { name: "North Carolina", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
    "MI": { name: "Michigan", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
    "NJ": { name: "New Jersey", credit: 10200, perks: ["SuSI SREC-II (15yr Est): ~$10,200 - Retained by lessor"], leaseEligible: true },
    "VA": { name: "Virginia", credit: 0, perks: ["SREC Market Eligibility"], leaseEligible: true },
    "WA": { name: "Washington", credit: 0, perks: ["Sales Tax Exemption"], leaseEligible: true },
    "AZ": { name: "Arizona", credit: 1000, perks: ["$1,000 State Income Tax Credit"], leaseEligible: false },
    "MA": { name: "Massachusetts", credit: 1000, perks: ["$1,000 Tax Credit + SMART Program"], leaseEligible: false },
    "TN": { name: "Tennessee", credit: 0, perks: ["Sales Tax Exemption"], leaseEligible: true },
    "IN": { name: "Indiana", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
    "MO": { name: "Missouri", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
    "MD": { name: "Maryland", credit: 1000, perks: ["Clean Energy Grant: $1,000"], leaseEligible: true },
    "WI": { name: "Wisconsin", credit: 500, perks: ["Focus on Energy: $500 Rebate"], leaseEligible: true },
    "CO": { name: "Colorado", credit: 2500, perks: ["State Solar Rebate Program"], leaseEligible: true },
    "MN": { name: "Minnesota", credit: 0, perks: ["Sales Tax Exemption"], leaseEligible: true },
    "SC": { name: "South Carolina", credit: 3500, perks: ["25% Tax Credit (Max $3,500) - Rarely available to lessees"], leaseEligible: false },
    "AL": { name: "Alabama", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
    "LA": { name: "Louisiana", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
    "KY": { name: "Kentucky", credit: 0, perks: ["TVA Solar Incentive Programs"], leaseEligible: true },
    "OR": { name: "Oregon", credit: 2500, perks: ["Solar + Storage Rebate Program"], leaseEligible: true },
    "OK": { name: "Oklahoma", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
    "CT": { name: "Connecticut", credit: 0, perks: ["Energy Storage Rebate Available"], leaseEligible: true },
    "UT": { name: "Utah", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
    "IA": { name: "Iowa", credit: 0, perks: ["Sales Tax Exemption"], leaseEligible: true },
    "NV": { name: "Nevada", credit: 0, perks: ["NV Energy Storage Rebate"], leaseEligible: true },
    "AR": { name: "Arkansas", credit: 0, perks: ["Net Metering 1:1 Available"], leaseEligible: true },
    "MS": { name: "Mississippi", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
    "KS": { name: "Kansas", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
    "NM": { name: "New Mexico", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
    "NE": { name: "Nebraska", credit: 0, perks: ["Low-Interest Solar Loans"], leaseEligible: true },
    "ID": { name: "Idaho", credit: 0, perks: ["Income Tax Deduction Available"], leaseEligible: true },
    "WV": { name: "West Virginia", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
    "HI": { name: "Hawaii", credit: 5000, perks: ["35% Tax Credit (Max $5,000) - Retained by lessor"], leaseEligible: true },
    "NH": { name: "New Hampshire", credit: 1000, perks: ["$1,000 Residential Grant"], leaseEligible: true },
    "ME": { name: "Maine", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
    "RI": { name: "Rhode Island", credit: 5000, perks: ["REF Grant: Up to $5,000"], leaseEligible: true },
    "MT": { name: "Montana", credit: 500, perks: ["$500 Alternative Energy Credit"], leaseEligible: true },
    "DE": { name: "Delaware", credit: 1000, perks: ["Green Energy Grant Program"], leaseEligible: true },
    "SD": { name: "South Dakota", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
    "ND": { name: "North Dakota", credit: 0, perks: ["5-Year Property Tax Exemption"], leaseEligible: true },
    "AK": { name: "Alaska", credit: 0, perks: ["Local Utility Rebates Available"], leaseEligible: true },
    "VT": { name: "Vermont", credit: 0, perks: ["Sales Tax Exemption"], leaseEligible: true },
    "WY": { name: "Wyoming", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true }
};

function createEl(tag, attrs, children) {
    const el = document.createElement(tag);
    if (attrs) {
        Object.entries(attrs).forEach(([k, v]) => {
            if (k === 'style' && typeof v === 'object') {
                Object.assign(el.style, v);
            } else {
                el[k] = v;
            }
        });
    }
    if (children) {
        if (typeof children === 'string') el.textContent = children;
        else children.forEach(c => el.appendChild(c));
    }
    return el;
}

function buildRow(label, value, color) {
    const row = createEl('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' } });
    row.appendChild(createEl('span', {}, label));
    row.appendChild(createEl('span', { style: { fontSize: '18px', fontWeight: '700', color: color } }, value));
    return row;
}

function buildNote(text, color) {
    return createEl('div', { style: { fontSize: '11px', color: color, marginBottom: '8px' } }, text);
}

function buildSectionHeader(text) {
    return createEl('div', {
        style: { fontSize: '11px', color: '#5f6368', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }
    }, text);
}

function calculate() {
    const state = document.getElementById('stateSelect').value;
    const cost = parseFloat(document.getElementById('systemCost').value);
    const method = document.getElementById('paymentMethod').value;

    const stateInfo = stateData[state];
    let federalCredit = 0;
    let stateCredit = stateInfo.credit;

    const breakdown = document.getElementById('breakdown');
    breakdown.replaceChildren();

    // Federal section
    const federalSection = createEl('div', { style: { marginBottom: '16px' } });
    federalSection.appendChild(buildSectionHeader('Federal Incentives'));

    if (method === 'lease') {
        federalCredit = cost * 0.30;
        federalSection.appendChild(buildRow('Installer Tax Credit (Section 48E)', '+' + federalCredit.toLocaleString(), '#1e8e3e'));
        federalSection.appendChild(buildNote('(Claimed by lessor, ~40% passed to you via rates)', '#70757a'));

        const notice = document.getElementById('urgentNotice');
        notice.style.display = 'block';
        notice.textContent = 'WARNING: SAFE HARBOR DEADLINE: Construction must begin by July 4, 2026 to qualify.';
    } else {
        federalSection.appendChild(buildRow('Federal Purchase Credit (Section 25D)', '$0', '#d93025'));
        federalSection.appendChild(buildNote('(Expired 12/31/2025)', '#d93025'));
        document.getElementById('urgentNotice').style.display = 'none';
    }
    breakdown.appendChild(federalSection);

    // State section
    const stateSection = createEl('div', { style: { marginBottom: '16px' } });
    stateSection.appendChild(buildSectionHeader(stateInfo.name + ' Incentives'));

    let effectiveStateCredit = stateCredit;
    if (method === 'lease' && !stateInfo.leaseEligible && stateCredit > 0) {
        effectiveStateCredit = 0;
        stateSection.appendChild(buildRow('State Tax Credit', '$0', '#d93025'));
        stateSection.appendChild(buildNote('* ' + stateInfo.name + ' credit available to system owners only, not lessees', '#d93025'));
    } else if (effectiveStateCredit > 0) {
        stateSection.appendChild(buildRow('State Incentive Value', '+' + effectiveStateCredit.toLocaleString(), '#1e8e3e'));
    }

    stateInfo.perks.forEach(function(perk) {
        stateSection.appendChild(createEl('div', { style: { fontSize: '12px', color: '#3c4043', marginBottom: '4px' } }, '* ' + perk));
    });
    breakdown.appendChild(stateSection);

    // Total
    const totalBenefit = federalCredit + effectiveStateCredit;
    const customerSavings = totalBenefit * 0.40;
    let monthlySavings = Math.round(customerSavings / 240);

    if (monthlySavings < 25 && method === 'lease' && federalCredit > 0) {
        monthlySavings = 25;
    }

    const summary = createEl('div', {
        style: { background: '#e6f4ea', border: '1px solid #1e8e3e', borderRadius: '8px', padding: '16px', marginTop: '16px' }
    });
    summary.appendChild(buildRow('Total Installer Savings', totalBenefit.toLocaleString(), '#137333'));
    summary.appendChild(createEl('div', { style: { fontSize: '11px', color: '#137333', marginTop: '4px' } }, 'Your est. benefit (~40% pass-through over 20 years)'));
    breakdown.appendChild(summary);

    document.getElementById('monthlySavings').textContent = '~' + monthlySavings + '/mo';
    document.getElementById('results').style.display = 'block';
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
