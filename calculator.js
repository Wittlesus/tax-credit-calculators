// TaxCreditCalculators.com - Solar Lease vs Buy Calculator
// Requires config.js loaded first

var stateData = {
  "AL": { name: "Alabama", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
  "AK": { name: "Alaska", credit: 0, perks: ["Local Utility Rebates Available"], leaseEligible: true },
  "AZ": { name: "Arizona", credit: 1000, perks: ["$1,000 State Income Tax Credit"], leaseEligible: false },
  "AR": { name: "Arkansas", credit: 0, perks: ["Net Metering 1:1 Available"], leaseEligible: true },
  "CA": { name: "California", credit: 1500, perks: ["SGIP Battery Rebate (Est. $1,500)"], leaseEligible: true },
  "CO": { name: "Colorado", credit: 2500, perks: ["State Solar Rebate Program"], leaseEligible: true },
  "CT": { name: "Connecticut", credit: 0, perks: ["Energy Storage Rebate Available"], leaseEligible: true },
  "DE": { name: "Delaware", credit: 1000, perks: ["Green Energy Grant Program"], leaseEligible: true },
  "FL": { name: "Florida", credit: 0, perks: ["100% Sales & Property Tax Exempt"], leaseEligible: true },
  "GA": { name: "Georgia", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
  "HI": { name: "Hawaii", credit: 5000, perks: ["35% Tax Credit (Max $5,000)"], leaseEligible: true },
  "ID": { name: "Idaho", credit: 0, perks: ["Income Tax Deduction Available"], leaseEligible: true },
  "IL": { name: "Illinois", credit: 10500, perks: ["IL Shines SREC (15yr Est): ~$10,500 - Retained by lessor"], leaseEligible: true },
  "IN": { name: "Indiana", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
  "IA": { name: "Iowa", credit: 0, perks: ["Sales Tax Exemption"], leaseEligible: true },
  "KS": { name: "Kansas", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
  "KY": { name: "Kentucky", credit: 0, perks: ["TVA Solar Incentive Programs"], leaseEligible: true },
  "LA": { name: "Louisiana", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
  "ME": { name: "Maine", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
  "MD": { name: "Maryland", credit: 1000, perks: ["Clean Energy Grant: $1,000"], leaseEligible: true },
  "MA": { name: "Massachusetts", credit: 1000, perks: ["$1,000 Tax Credit + SMART Program"], leaseEligible: false },
  "MI": { name: "Michigan", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
  "MN": { name: "Minnesota", credit: 0, perks: ["Sales Tax Exemption"], leaseEligible: true },
  "MS": { name: "Mississippi", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
  "MO": { name: "Missouri", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
  "MT": { name: "Montana", credit: 500, perks: ["$500 Alternative Energy Credit"], leaseEligible: true },
  "NE": { name: "Nebraska", credit: 0, perks: ["Low-Interest Solar Loans"], leaseEligible: true },
  "NV": { name: "Nevada", credit: 0, perks: ["NV Energy Storage Rebate"], leaseEligible: true },
  "NH": { name: "New Hampshire", credit: 1000, perks: ["$1,000 Residential Grant"], leaseEligible: true },
  "NJ": { name: "New Jersey", credit: 10200, perks: ["SuSI SREC-II (15yr Est): ~$10,200 - Retained by lessor"], leaseEligible: true },
  "NM": { name: "New Mexico", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
  "NY": { name: "New York", credit: 5000, perks: ["25% Tax Credit (Max $5,000) - LESSEE ELIGIBLE"], leaseEligible: true },
  "NC": { name: "North Carolina", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
  "ND": { name: "North Dakota", credit: 0, perks: ["5-Year Property Tax Exemption"], leaseEligible: true },
  "OH": { name: "Ohio", credit: 0, perks: ["SREC Market Eligibility"], leaseEligible: true },
  "OK": { name: "Oklahoma", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
  "OR": { name: "Oregon", credit: 2500, perks: ["Solar + Storage Rebate Program"], leaseEligible: true },
  "PA": { name: "Pennsylvania", credit: 0, perks: ["SREC Market Eligibility"], leaseEligible: true },
  "RI": { name: "Rhode Island", credit: 5000, perks: ["REF Grant: Up to $5,000"], leaseEligible: true },
  "SC": { name: "South Carolina", credit: 3500, perks: ["25% Tax Credit (Max $3,500) - Rarely available to lessees"], leaseEligible: false },
  "SD": { name: "South Dakota", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
  "TN": { name: "Tennessee", credit: 0, perks: ["Sales Tax Exemption"], leaseEligible: true },
  "TX": { name: "Texas", credit: 2500, perks: ["Utility Rebate (AEP/Austin Avg ~$2.5k)"], leaseEligible: true },
  "UT": { name: "Utah", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
  "VT": { name: "Vermont", credit: 0, perks: ["Sales Tax Exemption"], leaseEligible: true },
  "VA": { name: "Virginia", credit: 0, perks: ["SREC Market Eligibility"], leaseEligible: true },
  "WA": { name: "Washington", credit: 0, perks: ["Sales Tax Exemption"], leaseEligible: true },
  "WV": { name: "West Virginia", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true },
  "WI": { name: "Wisconsin", credit: 500, perks: ["Focus on Energy: $500 Rebate"], leaseEligible: true },
  "WY": { name: "Wyoming", credit: 0, perks: ["Property Tax Exemption"], leaseEligible: true }
};

// Populate state dropdown alphabetically
(function initDropdown() {
  var select = document.getElementById('stateSelect');
  if (!select) return;
  // Clear existing options
  while (select.firstChild) select.removeChild(select.firstChild);
  var keys = Object.keys(stateData).sort();
  for (var i = 0; i < keys.length; i++) {
    var opt = document.createElement('option');
    opt.value = keys[i];
    opt.textContent = stateData[keys[i]].name;
    select.appendChild(opt);
  }
})();

// Safe DOM helpers -- all use textContent, no innerHTML
function makeEl(tag, className, text) {
  var node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function makeRow(label, value, color) {
  var r = makeEl('div', 'results__row');
  r.appendChild(makeEl('span', 'results__row-label', label));
  var v = makeEl('span', 'results__row-value', value);
  v.style.color = color;
  r.appendChild(v);
  return r;
}

function makeNote(text, color) {
  var n = makeEl('div', 'results__note', text);
  n.style.color = color;
  return n;
}

function makePerk(text) {
  var p = makeEl('div', '', '* ' + text);
  p.style.fontSize = '12px';
  p.style.color = '#3c4043';
  p.style.marginBottom = '4px';
  return p;
}

// Store last calculation for lead form hidden fields
var lastCalcData = null;

function calculate() {
  var stateCode = document.getElementById('stateSelect').value;
  var cost = parseFloat(document.getElementById('systemCost').value);
  var method = document.getElementById('paymentMethod').value;

  if (!cost || cost < 1000) {
    alert('Please enter a valid system cost ($1,000 minimum).');
    return;
  }

  var info = stateData[stateCode];
  if (!info) return;

  var federalCredit = 0;
  var stateCredit = info.credit;

  var breakdown = document.getElementById('breakdown');
  while (breakdown.firstChild) breakdown.removeChild(breakdown.firstChild);

  // -- Federal section --
  var fedSection = document.createElement('div');
  fedSection.style.marginBottom = '16px';
  fedSection.appendChild(makeEl('div', 'results__section-header', 'Federal Incentives'));

  if (method === 'lease') {
    federalCredit = cost * 0.30;
    fedSection.appendChild(makeRow('Installer Tax Credit (Section 48E)', '+$' + federalCredit.toLocaleString(), '#1e8e3e'));
    fedSection.appendChild(makeNote('Claimed by lessor, ~40% passed to you via lower rates', '#70757a'));
  } else {
    fedSection.appendChild(makeRow('Federal Purchase Credit (Section 25D)', '$0', '#d93025'));
    fedSection.appendChild(makeNote('Expired 12/31/2025 per OBBBA (Public Law 119-21)', '#d93025'));
  }
  breakdown.appendChild(fedSection);

  // -- State section --
  var stSection = document.createElement('div');
  stSection.style.marginBottom = '16px';
  stSection.appendChild(makeEl('div', 'results__section-header', info.name + ' Incentives'));

  var effectiveStateCredit = stateCredit;
  if (method === 'lease' && !info.leaseEligible && stateCredit > 0) {
    effectiveStateCredit = 0;
    stSection.appendChild(makeRow('State Tax Credit', '$0', '#d93025'));
    stSection.appendChild(makeNote(info.name + ' credit available to system owners only, not lessees.', '#d93025'));
  } else if (effectiveStateCredit > 0) {
    stSection.appendChild(makeRow('State Incentive Value', '+$' + effectiveStateCredit.toLocaleString(), '#1e8e3e'));
  }

  for (var i = 0; i < info.perks.length; i++) {
    stSection.appendChild(makePerk(info.perks[i]));
  }
  breakdown.appendChild(stSection);

  // -- Totals --
  var totalBenefit = federalCredit + effectiveStateCredit;
  var passThrough = (typeof SITE_CONFIG !== 'undefined') ? SITE_CONFIG.passThroughRate : 0.40;
  var termMonths = ((typeof SITE_CONFIG !== 'undefined') ? SITE_CONFIG.leaseTermYears : 20) * 12;
  var customerSavings = totalBenefit * passThrough;
  var monthlySavings = Math.round(customerSavings / termMonths);

  if (monthlySavings < 25 && method === 'lease' && federalCredit > 0) {
    monthlySavings = 25;
  }

  var summary = makeEl('div', 'results__summary');
  summary.appendChild(makeRow('Total Installer Savings', '$' + totalBenefit.toLocaleString(), '#137333'));
  summary.appendChild(makeEl('div', 'results__summary-note',
    'Your est. benefit (~' + Math.round(passThrough * 100) + '% pass-through over ' + (termMonths / 12) + ' years)'));
  breakdown.appendChild(summary);

  // Warning for lease safe harbor
  var warning = document.getElementById('urgentNotice');
  if (method === 'lease') {
    warning.style.display = 'block';
    warning.textContent = 'SAFE HARBOR DEADLINE: Construction must begin by July 4, 2026 to qualify for Section 48E credits.';
  } else {
    warning.style.display = 'none';
  }

  // Display monthly savings
  var display = method === 'lease' ? '~$' + monthlySavings + '/mo' : '$0/mo';
  document.getElementById('monthlySavings').textContent = display;

  // Show results panel
  var resultsEl = document.getElementById('results');
  resultsEl.classList.add('is-visible');
  resultsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Store for lead form
  lastCalcData = {
    state: stateCode,
    stateName: info.name,
    systemCost: cost,
    method: method,
    federalCredit: federalCredit,
    stateCredit: effectiveStateCredit,
    monthlySavings: monthlySavings
  };

  // Show lead form after brief delay
  setTimeout(function() {
    var leadForm = document.getElementById('leadForm');
    if (leadForm) {
      leadForm.classList.add('is-visible');
      var stateLabel = document.getElementById('leadFormState');
      if (stateLabel) stateLabel.textContent = info.name;
      setHiddenField('lead_state', stateCode);
      setHiddenField('lead_systemCost', String(cost));
      setHiddenField('lead_method', method);
      setHiddenField('lead_monthlySavings', String(monthlySavings));
    }
  }, 400);
}

function setHiddenField(id, val) {
  var field = document.getElementById(id);
  if (field) field.value = val;
}

// Lead form submission
function submitLeadForm(e) {
  e.preventDefault();
  var form = e.target;

  var name = form.querySelector('[name="name"]').value.trim();
  var email = form.querySelector('[name="email"]').value.trim();
  var zip = form.querySelector('[name="zip"]').value.trim();

  if (!name || !email || !zip) {
    alert('Please fill in your name, email, and zip code.');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!/^\d{5}(-\d{4})?$/.test(zip)) {
    alert('Please enter a valid 5-digit zip code.');
    return;
  }

  var endpoint = (typeof SITE_CONFIG !== 'undefined') ? SITE_CONFIG.formEndpoint : '';

  if (!endpoint) {
    // No endpoint configured -- store locally as fallback
    var leads = JSON.parse(localStorage.getItem('tcc_leads') || '[]');
    leads.push({
      name: name,
      email: email,
      phone: form.querySelector('[name="phone"]').value.trim(),
      zip: zip,
      state: lastCalcData ? lastCalcData.state : '',
      systemCost: lastCalcData ? lastCalcData.systemCost : '',
      method: lastCalcData ? lastCalcData.method : '',
      monthlySavings: lastCalcData ? lastCalcData.monthlySavings : '',
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('tcc_leads', JSON.stringify(leads));
    showLeadSuccess();
    return;
  }

  // Submit to configured form endpoint
  var btn = form.querySelector('.btn--success');
  var originalText = btn.textContent;
  btn.textContent = 'Submitting...';
  btn.disabled = true;

  var data = new FormData(form);
  fetch(endpoint, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(function(resp) {
    if (resp.ok) {
      showLeadSuccess();
    } else {
      btn.textContent = originalText;
      btn.disabled = false;
      alert('Something went wrong. Please try again.');
    }
  }).catch(function() {
    btn.textContent = originalText;
    btn.disabled = false;
    alert('Connection error. Please try again.');
  });
}

function showLeadSuccess() {
  var fields = document.getElementById('leadFormFields');
  var success = document.getElementById('leadFormSuccess');
  if (fields) fields.style.display = 'none';
  if (success) success.classList.add('is-visible');
}

// FAQ accordion
document.addEventListener('DOMContentLoaded', function() {
  var questions = document.querySelectorAll('.faq__question');
  for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function() {
      this.parentElement.classList.toggle('is-open');
    });
  }
});
