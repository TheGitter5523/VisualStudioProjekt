const CSV_PATH = "student_transactions.csv";
const LOGIN_CREDENTIALS_HASH = "b0d4a30ed4fabf4ab602d6dac16d186aa66a0330f55bb9cbb9fca8826b300a3c";
const SIMULATED_BALANCE = 2347.8;
const COLUMNS = ["Date", "TransactionID", "Amount", "Currency", "RecipientIBAN", "BIC", "Bank", "Description", "ReferenceID", "Category"];

const translations = {
  en: {
    loginEyebrow: "[ SECURE STUDENT NETWORK ]", loginTitle: "STUDENT FINANCIAL DATABASE",
    loginSubtitle: "RESTRICTED ACCESS // CLASSIFIED STUDENT FINANCES", userLabel: "User",
    passwordLabel: "Password", accessButton: "ACCESS SYSTEM", accessDenied: "ACCESS DENIED",
    loginCryptoError: "LOGIN VALIDATION UNAVAILABLE. PLEASE USE A LOCAL WEB SERVER.",
    loginNote: "Educational simulation only. No real financial data or security system.",
    dashboardEyebrow: "[ ACCESS GRANTED // SESSION ACTIVE ]", dashboardTitle: "STUDENT FINANCIAL OVERVIEW",
    dashboardIntro: "Explore and analyze the fictional bank transactions from a regular student.",
    logoutButton: "LOG OUT", statsLabel: "Financial statistics", balanceLabel: "Simulated balance",
    balanceDetail: "Fictional starting snapshot", incomeLabel: "Monthly income",
    expenseLabel: "Monthly expenses", monthSelectLabel: "Month", fileSizeLabel: "CSV file size",
    fileSizeDetail: "Loaded from local data source", legendTitle: "Column legend",
    columnDate: "Date", columnTransactionId: "TransactionID", columnAmount: "Amount",
    columnCurrency: "Currency", columnRecipientIban: "RecipientIBAN", columnBic: "BIC",
    columnBank: "Bank", columnDescription: "Description", columnReferenceId: "ReferenceID",
    columnCategory: "Category",
    legendDate: "Transaction date in <code>DD.MM.YYYY</code> format.", legendTransactionId: "Unique transaction identifier.",
    legendAmount: "Positive values are income; negative values are expenses.", legendCurrency: "Currency used for the transaction.",
    legendRecipientIban: "Recipient's International Bank Account Number.", legendBic: "Recipient bank's Bank Identifier Code.",
    legendBank: "Name of the recipient bank.", legendDescription: "Short description of the transaction's purpose.",
    legendReferenceId: "Reference number associated with the transaction.",
    legendCategory: "Incoming Payment, Entertainment, Studies, Transportation, or Other.",
    streamEyebrow: "[ LIVE DATA STREAM ]", transactionsTitle: "Transaction log",
    controlsLabel: "Transaction controls", searchLabel: "Search all fields", searchPlaceholder: "Search transactions...",
    monthFilterLabel: "Month", categoryFilterLabel: "Category", allMonths: "All Months",
    allCategories: "All Categories", resetButton: "RESET FILTERS", columnsButton: "CUSTOMIZE COLUMNS",
    visibleColumns: "Visible columns", sourceLabel: "Source",
    authorLabel: "Author: TheGitter5523",
    projectLabel: "Project: Fictional Student Finance Dashboard",
    licenseText: "License: MIT License",
    disclaimerText: "Disclaimer: All banking transactions and financial information are fictional and intended for demonstration purposes only.",
    aiNotice: "Notice: Some elements of this website were generated with AI assistance.",
    showing: "Showing", of: "of", transactions: "transactions", noMatches: "NO MATCHING TRANSACTIONS",
    dataLoadError: "DATA LOAD ERROR", serverHint: "Start the site through a local web server and try again.",
    columnLabels: Object.fromEntries(COLUMNS.map((column) => [column, column])),
    categories: { "Incoming Payment": "Incoming Payment", Entertainment: "Entertainment", Studies: "Studies", Transportation: "Transportation", Other: "Other" },
    descriptions: {}
  },
  de: {
    loginEyebrow: "[ SICHERES STUDENTENNETZWERK ]", loginTitle: "STUDENTEN-FINANZDATENBANK",
    loginSubtitle: "ZUGANG BESCHRÄNKT // VERTRAULICHE STUDENTENFINANZEN", userLabel: "Benutzer",
    passwordLabel: "Passwort", accessButton: "SYSTEM ZUGRIFF", accessDenied: "ZUGRIFF VERWEIGERT",
    loginCryptoError: "ANMELDEPRÜFUNG NICHT VERFÜGBAR. BITTE EINEN LOKALEN WEBSERVER VERWENDEN.",
    loginNote: "Nur eine Bildungssimulation. Kein echtes Finanz- oder Sicherheitssystem.",
    dashboardEyebrow: "[ ZUGRIFF GEWÄHRT // SITZUNG AKTIV ]", dashboardTitle: "STUDENTEN-FINANZÜBERSICHT",
    dashboardIntro: "Erkunde und analysiere die fiktiven Banktransaktionen eines gewöhnlichen Studierenden.",
    logoutButton: "ABMELDEN", statsLabel: "Finanzstatistiken", balanceLabel: "Simuliertes Guthaben",
    balanceDetail: "Fiktive Anfangsübersicht", incomeLabel: "Monatliche Einnahmen",
    expenseLabel: "Monatliche Ausgaben", monthSelectLabel: "Monat", fileSizeLabel: "CSV-Dateigröße",
    fileSizeDetail: "Aus lokaler Datenquelle geladen", legendTitle: "Spaltenlegende",
    columnDate: "Datum", columnTransactionId: "Transaktions-ID", columnAmount: "Betrag",
    columnCurrency: "Währung", columnRecipientIban: "Empfänger-IBAN", columnBic: "BIC",
    columnBank: "Bank", columnDescription: "Beschreibung", columnReferenceId: "Referenz-ID",
    columnCategory: "Kategorie",
    legendDate: "Transaktionsdatum im Format <code>TT.MM.JJJJ</code>.", legendTransactionId: "Eindeutige Transaktionskennung.",
    legendAmount: "Positive Werte sind Einnahmen; negative Werte sind Ausgaben.", legendCurrency: "Für die Transaktion verwendete Währung.",
    legendRecipientIban: "Internationale Bankkontonummer des Empfängers.", legendBic: "Bankleitzahl der Empfängerbank.",
    legendBank: "Name der Empfängerbank.", legendDescription: "Kurze Beschreibung des Transaktionszwecks.",
    legendReferenceId: "Zugehörige Referenznummer der Transaktion.",
    legendCategory: "Geldeingang, Unterhaltung, Studium, Transport oder Sonstiges.",
    streamEyebrow: "[ LIVE-DATENSTROM ]", transactionsTitle: "Transaktionsprotokoll",
    controlsLabel: "Transaktionssteuerung", searchLabel: "Alle Felder durchsuchen", searchPlaceholder: "Transaktionen durchsuchen...",
    monthFilterLabel: "Monat", categoryFilterLabel: "Kategorie", allMonths: "Alle Monate",
    allCategories: "Alle Kategorien", resetButton: "FILTER ZURÜCKSETZEN", columnsButton: "SPALTEN ANPASSEN",
    visibleColumns: "Sichtbare Spalten", sourceLabel: "Quelle",
    authorLabel: "Autor: TheGitter5523",
    projectLabel: "Projekt: Fiktives Studenten-Finanzdashboard",
    licenseText: "Lizenz: MIT-Lizenz",
    disclaimerText: "Hinweis: Alle Banktransaktionen und Finanzinformationen sind fiktiv und dienen ausschließlich Demonstrationszwecken.",
    aiNotice: "Hinweis: Einige Elemente dieser Website wurden mit Unterstützung von KI generiert.",
    showing: "Zeige", of: "von", transactions: "Transaktionen", noMatches: "KEINE PASSENDEN TRANSAKTIONEN",
    dataLoadError: "FEHLER BEIM LADEN", serverHint: "Starte die Website über einen lokalen Webserver und versuche es erneut.",
    columnLabels: { Date: "Datum", TransactionID: "Transaktions-ID", Amount: "Betrag", Currency: "Währung", RecipientIBAN: "Empfänger-IBAN", BIC: "BIC", Bank: "Bank", Description: "Beschreibung", ReferenceID: "Referenz-ID", Category: "Kategorie" },
    categories: { "Incoming Payment": "Geldeingang", Entertainment: "Unterhaltung", Studies: "Studium", Transportation: "Transport", Other: "Sonstiges" },
    descriptions: {
      "BAföG Payment January 2025": "BAföG-Zahlung Januar 2025", "Book: Python for Beginners – Müller Bookstore": "Buch: Python für Anfänger – Müller Buchhandlung",
      "Rent January 2025 – Shared Flat Berlin": "Miete Januar 2025 – Wohngemeinschaft Berlin", "Train Ticket – University Departure": "Zugticket – Abfahrt zur Universität",
      "Food at Student Services – Cafeteria": "Essen beim Studierendenwerk – Cafeteria", "Netflix Subscription – Monthly Fee": "Netflix-Abonnement – Monatsgebühr",
      "Coffee at the University Café": "Kaffee im Universitätscafé", "Tuition Fees – University of Hamburg": "Studiengebühren – Universität Hamburg",
      "Book: Business Psychology – Amazon": "Buch: Wirtschaftspsychologie – Amazon", "Spotify Premium – Monthly Fee": "Spotify Premium – Monatsgebühr",
      "BAföG Payment February 2025": "BAföG-Zahlung Februar 2025", "Book: Data Analysis with Python – Müller Bookstore": "Buch: Datenanalyse mit Python – Müller Buchhandlung",
      "Rent February 2025 – Shared Flat Berlin": "Miete Februar 2025 – Wohngemeinschaft Berlin", "Book: Statistics for Social Scientists – Amazon": "Buch: Statistik für Sozialwissenschaftler – Amazon",
      "BAföG Payment March 2025": "BAföG-Zahlung März 2025", "Book: Artificial Intelligence – Fundamentals – Müller Bookstore": "Buch: Künstliche Intelligenz – Grundlagen – Müller Buchhandlung",
      "Rent March 2025 – Shared Flat Berlin": "Miete März 2025 – Wohngemeinschaft Berlin", "Book: Introduction to Machine Learning – Amazon": "Buch: Einführung in maschinelles Lernen – Amazon",
      "BAföG Payment April 2025": "BAföG-Zahlung April 2025", "Book: Databases for Beginners – Müller Bookstore": "Buch: Datenbanken für Anfänger – Müller Buchhandlung",
      "Rent April 2025 – Shared Flat Berlin": "Miete April 2025 – Wohngemeinschaft Berlin", "Book: Web Development with React – Amazon": "Buch: Webentwicklung mit React – Amazon",
      "BAföG Payment May 2025": "BAföG-Zahlung Mai 2025", "Book: Cryptography for Beginners – Müller Bookstore": "Buch: Kryptografie für Anfänger – Müller Buchhandlung",
      "Rent May 2025 – Shared Flat Berlin": "Miete Mai 2025 – Wohngemeinschaft Berlin", "Book: Artificial Intelligence in Practice – Amazon": "Buch: Künstliche Intelligenz in der Praxis – Amazon",
      "BAföG Payment June 2025": "BAföG-Zahlung Juni 2025", "Book: Data Visualization with Matplotlib – Müller Bookstore": "Buch: Datenvisualisierung mit Matplotlib – Müller Buchhandlung",
      "Rent June 2025 – Shared Flat Berlin": "Miete Juni 2025 – Wohngemeinschaft Berlin", "Book: Introduction to AI – Amazon": "Buch: Einführung in KI – Amazon"
    }
  }
};

const state = {
  language: "en", transactions: [], visibleColumns: new Set(COLUMNS),
  selectedMonth: "all", search: "", category: "all",
  sortColumn: null, sortDirection: -1, incomeMonth: null, expenseMonth: null,
  loadGeneration: 0
};
const elements = {};

document.addEventListener("DOMContentLoaded", () => {
  Object.assign(elements, {
    loginView: document.querySelector("#login-view"), dashboardView: document.querySelector("#dashboard-view"),
    loginForm: document.querySelector("#login-form"), loginMessage: document.querySelector("#login-message"),
    logoutButton: document.querySelector("#logout-button"), balanceValue: document.querySelector("#balance-value"),
    incomeValue: document.querySelector("#income-value"), expenseValue: document.querySelector("#expense-value"),
    incomeSelect: document.querySelector("#income-month-select"), expenseSelect: document.querySelector("#expense-month-select"),
    fileSizeValue: document.querySelector("#file-size-value"), searchInput: document.querySelector("#search-input"),
    monthFilter: document.querySelector("#month-filter"), categoryFilter: document.querySelector("#category-filter"),
    resetButton: document.querySelector("#reset-button"), columnsButton: document.querySelector("#columns-button"),
    columnOptions: document.querySelector("#column-options"), tableHead: document.querySelector("#table-head"),
    tableBody: document.querySelector("#table-body"), transactionCount: document.querySelector("#transaction-count"),
    dataMessage: document.querySelector("#data-message")
  });
  document.querySelectorAll(".language-option").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
  elements.loginForm.addEventListener("submit", handleLogin);
  elements.logoutButton.addEventListener("click", showLogin);
  elements.searchInput.addEventListener("input", (event) => { state.search = event.target.value.trim().toLocaleLowerCase(state.language); renderTable(); });
  elements.monthFilter.addEventListener("change", (event) => { state.selectedMonth = event.target.value; renderTable(); });
  elements.categoryFilter.addEventListener("change", (event) => { state.category = event.target.value; renderTable(); });
  elements.incomeSelect.addEventListener("change", (event) => { state.incomeMonth = event.target.value; updateStatCards(); });
  elements.expenseSelect.addEventListener("change", (event) => { state.expenseMonth = event.target.value; updateStatCards(); });
  elements.resetButton.addEventListener("click", resetFilters);
  elements.columnsButton.addEventListener("click", toggleColumnMenu);
  document.addEventListener("click", closeColumnMenuOnOutsideClick);
  setLanguage("en");
  elements.balanceValue.textContent = formatCurrency(SIMULATED_BALANCE);
});

function getTexts() { return translations[state.language]; }

function setLanguage(language) {
  if (!translations[language]) return;
  state.language = language;
  document.documentElement.lang = language;
  document.title = language === "de" ? "Studenten-Finanzdatenbank" : "Student Financial Database";
  const texts = getTexts();
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.innerHTML = texts[element.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => { element.placeholder = texts[element.dataset.i18nPlaceholder]; });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => { element.setAttribute("aria-label", texts[element.dataset.i18nAriaLabel]); });
  document.querySelectorAll(".language-option").forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  elements.balanceValue.textContent = formatCurrency(SIMULATED_BALANCE);
  if (state.transactions.length) {
    populateFilters();
    populateStatMonthSelectors();
    renderColumnOptions();
    updateStatCards();
    renderTable();
  }
}

async function handleLogin(event) {
  event.preventDefault();
  const formData = new FormData(elements.loginForm);
  const username = formData.get("username");
  const password = formData.get("password");
  let credentialsHash;
  try {
    credentialsHash = await hashCredentials(username, password);
  } catch {
    elements.loginMessage.textContent = getTexts().loginCryptoError;
    elements.loginMessage.hidden = false;
    return;
  }
  if (credentialsHash !== LOGIN_CREDENTIALS_HASH) {
    elements.loginMessage.textContent = getTexts().accessDenied;
    elements.loginMessage.hidden = false;
    elements.loginForm.classList.remove("shake");
    void elements.loginForm.offsetWidth;
    elements.loginForm.classList.add("shake");
    return;
  }
  elements.loginMessage.hidden = true;
  elements.loginView.hidden = true;
  elements.dashboardView.hidden = false;
  loadDashboard(++state.loadGeneration);
}

async function hashCredentials(username, password) {
  const input = new TextEncoder().encode(`${username}:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", input);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function showLogin() {
  elements.dashboardView.hidden = true;
  elements.loginView.hidden = false;
  elements.loginForm.reset();
  elements.loginMessage.hidden = true;
  resetDashboardState();
}

function resetDashboardState() {
  state.loadGeneration += 1;
  state.transactions = [];
  state.visibleColumns = new Set(COLUMNS);
  state.selectedMonth = "all"; state.search = ""; state.category = "all";
  state.sortColumn = null; state.sortDirection = -1; state.incomeMonth = null; state.expenseMonth = null;
  elements.searchInput.value = ""; elements.monthFilter.value = "all"; elements.categoryFilter.value = "all";
  elements.columnsButton.setAttribute("aria-expanded", "false"); elements.columnOptions.hidden = true;
}

async function loadDashboard(generation) {
  clearDataMessage();
  try {
    const response = await fetch(CSV_PATH, { cache: "no-store" });
    if (generation !== state.loadGeneration) return;
    if (!response.ok) throw new Error(`CSV request failed with status ${response.status}.`);
    const csvText = await response.text();
    if (generation !== state.loadGeneration) return;
    state.transactions = parseCsv(csvText);
    if (!state.transactions.length) throw new Error("The CSV file contains no transactions.");
    populateFilters();
    populateStatMonthSelectors();
    renderColumnOptions();
    updateStatCards();
    renderTable();
    updateFileSize(response, csvText);
  } catch (error) {
    if (generation !== state.loadGeneration) return;
    showDataMessage(`${getTexts().dataLoadError}: ${error.message} ${getTexts().serverHint}`);
  }
}

function parseCsv(csvText) {
  const rows = []; let row = []; let field = ""; let quoted = false;
  for (let index = 0; index < csvText.length; index += 1) {
    const character = csvText[index]; const nextCharacter = csvText[index + 1];
    if (character === '"') {
      if (quoted && nextCharacter === '"') { field += '"'; index += 1; } else quoted = !quoted;
    } else if (character === ";" && !quoted) { row.push(field); field = ""; }
    else if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && nextCharacter === "\n") index += 1;
      row.push(field); if (row.some((value) => value.trim() !== "")) rows.push(row);
      row = []; field = "";
    } else field += character;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const headers = rows.shift().map((header) => header.trim());
  return rows.map((values) => {
    const transaction = {};
    headers.forEach((header, index) => { transaction[header] = (values[index] || "").trim(); });
    transaction.amountValue = parseAmount(transaction.Amount);
    transaction.dateValue = parseDate(transaction.Date);
    transaction.monthKey = transaction.Date.slice(3);
    return transaction;
  });
}

function parseAmount(value) { return Number.parseFloat(value.replace(/\./g, "").replace(",", ".")) || 0; }
function parseDate(value) { const [day, month, year] = value.split(".").map(Number); return new Date(year, month - 1, day); }
function formatMonth(date) { return new Intl.DateTimeFormat(state.language === "de" ? "de-DE" : "en-US", { month: "long", year: "numeric" }).format(date); }
function formatCurrency(value) { return new Intl.NumberFormat(state.language === "de" ? "de-DE" : "en-US", { style: "currency", currency: "EUR" }).format(value); }
function displayCategory(value) { return getTexts().categories[value] || value; }
function displayDescription(value) { return getTexts().descriptions[value] || value; }
function displayValue(transaction, column) {
  if (column === "Description") return displayDescription(transaction[column]);
  if (column === "Category") return displayCategory(transaction[column]);
  return column === "Amount" ? formatCurrency(transaction.amountValue) : transaction[column];
}

function getMonthEntries() {
  return [...new Map(state.transactions.slice().sort((a, b) => b.dateValue - a.dateValue)
    .map((transaction) => [transaction.monthKey, formatMonth(transaction.dateValue)]))];
}

function populateFilters() {
  const months = getMonthEntries();
  elements.monthFilter.innerHTML = `<option value="all">${getTexts().allMonths}</option>`;
  months.forEach(([value, label]) => elements.monthFilter.add(new Option(label, value)));
  elements.monthFilter.value = state.selectedMonth;
  const categories = [...new Set(state.transactions.map((transaction) => transaction.Category))]
    .sort((a, b) => displayCategory(a).localeCompare(displayCategory(b), state.language));
  elements.categoryFilter.innerHTML = `<option value="all">${getTexts().allCategories}</option>`;
  categories.forEach((category) => elements.categoryFilter.add(new Option(displayCategory(category), category)));
  elements.categoryFilter.value = state.category;
}

function populateStatMonthSelectors() {
  const months = getMonthEntries();
  const latest = months[0]?.[0] || null;
  if (!state.incomeMonth || !months.some(([value]) => value === state.incomeMonth)) state.incomeMonth = latest;
  if (!state.expenseMonth || !months.some(([value]) => value === state.expenseMonth)) state.expenseMonth = latest;
  [elements.incomeSelect, elements.expenseSelect].forEach((select) => {
    const selected = select === elements.incomeSelect ? state.incomeMonth : state.expenseMonth;
    select.innerHTML = "";
    months.forEach(([value, label]) => select.add(new Option(label, value)));
    select.value = selected;
  });
  elements.incomeSelect.setAttribute("aria-label", `${getTexts().incomeLabel} ${getTexts().monthSelectLabel}`);
  elements.expenseSelect.setAttribute("aria-label", `${getTexts().expenseLabel} ${getTexts().monthSelectLabel}`);
}

function updateStatCards() {
  const incomeTransactions = state.transactions.filter((transaction) => transaction.monthKey === state.incomeMonth);
  const expenseTransactions = state.transactions.filter((transaction) => transaction.monthKey === state.expenseMonth);
  elements.incomeValue.textContent = formatCurrency(incomeTransactions.filter((t) => t.amountValue > 0).reduce((sum, t) => sum + t.amountValue, 0));
  elements.expenseValue.textContent = formatCurrency(expenseTransactions.filter((t) => t.amountValue < 0).reduce((sum, t) => sum + Math.abs(t.amountValue), 0));
}

function getFilteredTransactions() {
  return state.transactions.filter((transaction) => {
    const matchesMonth = state.selectedMonth === "all" || transaction.monthKey === state.selectedMonth;
    const matchesCategory = state.category === "all" || transaction.Category === state.category;
    const matchesSearch = !state.search || COLUMNS.some((column) => displayValue(transaction, column).toLocaleLowerCase(state.language).includes(state.search));
    return matchesMonth && matchesCategory && matchesSearch;
  }).sort((first, second) => {
    let comparison;
    if (state.sortColumn === "Amount") comparison = first.amountValue - second.amountValue;
    else if (state.sortColumn === "Date" || !state.sortColumn) comparison = first.dateValue - second.dateValue;
    else comparison = displayValue(first, state.sortColumn).localeCompare(displayValue(second, state.sortColumn), state.language, { numeric: true, sensitivity: "base" });
    return comparison * state.sortDirection;
  });
}

function renderTable() {
  const transactions = getFilteredTransactions();
  const visibleColumns = COLUMNS.filter((column) => state.visibleColumns.has(column));
  elements.tableHead.innerHTML = `<tr>${visibleColumns.map((column) => {
    const active = state.sortColumn === column;
    const arrow = active ? (state.sortDirection === -1 ? " ↓" : " ↑") : "";
    return `<th scope="col" class="${active ? "sort-active" : ""}"><button type="button" class="sort-header" data-sort-column="${column}" aria-label="${escapeHtml(getTexts().columnLabels[column])}">${escapeHtml(getTexts().columnLabels[column])}<span aria-hidden="true">${arrow}</span></button></th>`;
  }).join("")}</tr>`;
  elements.tableHead.querySelectorAll("[data-sort-column]").forEach((button) => button.addEventListener("click", () => sortByColumn(button.dataset.sortColumn)));
  elements.tableBody.innerHTML = transactions.length ? transactions.map((transaction) => `<tr>${visibleColumns.map((column) => renderCell(transaction, column)).join("")}</tr>`).join("")
    : `<tr><td class="empty-state" colspan="${Math.max(visibleColumns.length, 1)}">${getTexts().noMatches}</td></tr>`;
  elements.transactionCount.textContent = `${getTexts().showing} ${transactions.length} ${getTexts().of} ${state.transactions.length} ${getTexts().transactions}`;
}

function sortByColumn(column) {
  if (state.sortColumn === column) state.sortDirection *= -1;
  else { state.sortColumn = column; state.sortDirection = -1; }
  renderTable();
}

function renderCell(transaction, column) {
  const value = escapeHtml(displayValue(transaction, column));
  if (column === "Amount") return `<td class="${transaction.amountValue >= 0 ? "amount-positive" : "amount-negative"}">${value}</td>`;
  return `<td>${value}</td>`;
}

function renderColumnOptions() {
  elements.columnOptions.innerHTML = `<legend>${getTexts().visibleColumns}</legend>`;
  COLUMNS.forEach((column) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" value="${column}" ${state.visibleColumns.has(column) ? "checked" : ""}> ${escapeHtml(getTexts().columnLabels[column])}`;
    label.querySelector("input").addEventListener("change", (event) => {
      if (event.target.checked) state.visibleColumns.add(column);
      else if (state.visibleColumns.size > 1) state.visibleColumns.delete(column);
      else event.target.checked = true;
      renderTable();
    });
    elements.columnOptions.append(label);
  });
}

function toggleColumnMenu(event) {
  event.stopPropagation();
  const isHidden = elements.columnOptions.hidden;
  elements.columnOptions.hidden = !isHidden;
  elements.columnsButton.setAttribute("aria-expanded", String(isHidden));
}
function closeColumnMenuOnOutsideClick(event) {
  if (!event.target.closest(".column-menu")) { elements.columnOptions.hidden = true; elements.columnsButton.setAttribute("aria-expanded", "false"); }
}
function resetFilters() {
  state.selectedMonth = "all"; state.search = ""; state.category = "all"; state.sortColumn = null; state.sortDirection = -1;
  elements.searchInput.value = ""; elements.monthFilter.value = "all"; elements.categoryFilter.value = "all"; renderTable();
}
function updateFileSize(response, csvText) {
  const size = Number(response.headers.get("content-length")) || new Blob([csvText]).size;
  elements.fileSizeValue.textContent = `${(size / 1024).toFixed(2)} KB`;
}
function showDataMessage(message) { elements.dataMessage.textContent = message; elements.dataMessage.hidden = false; }
function clearDataMessage() { elements.dataMessage.hidden = true; elements.dataMessage.textContent = ""; }
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
}
