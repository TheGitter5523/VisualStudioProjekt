# Fictional Student Finance Dashboard

This website is an independent demonstration project showcasing fictional
student banking transactions in an interactive retro-futuristic dashboard.
It uses a client-side login simulation and a cyberpunk-inspired interface.
The login is not a real security mechanism.

## Files

- `index.html`
- `style.css`
- `script.js`
- `student_transactions.csv` (Dataset)
- `assets/euro_lowpoly_synthwave.gif`
- `Agents.md`

## Login

The dashboard has one fixed login. The combined credentials are validated
against a SHA-256 hash with the browser Web Crypto API. Use the following demo
credentials:

- **Username:** `Retro`
- **Password:** `wave`

There is no registration or visitor-controlled credential change.

## Dashboard Features

- Simulated account balance and CSV file-size display.
- Independent month selectors for income and expenses.
- English/German language switcher on the login screen and dashboard.
- Localized labels, month names, categories, descriptions, and currency values.
- Search across all transaction columns.
- Month and category filters.
- Clickable sorting for every visible table column.
- Individual show/hide controls for all ten CSV columns.
- Reset controls and clean state after logout.
- Responsive layout with a horizontally scrollable transaction table.
- Animated floating Euro background with reduced-motion support.

The monthly statistics default to the newest month in the CSV. The two
statistic selectors are independent of each other and of the table filters.
The original CSV values are not modified; German display translations are
defined centrally in `script.js`.

## CSV Format

The CSV uses semicolons (`;`) as separators. Dates use `DD.MM.YYYY`, and
monetary values use a comma as the decimal separator. The ten columns are:

- `Date`
- `TransactionID`
- `Amount`
- `Currency`
- `RecipientIBAN`
- `BIC`
- `Bank`
- `Description`
- `ReferenceID`
- `Category`

All transaction data is fictional and intended for demonstration purposes.

## Running Locally

Run the site through a local web server. Browsers may restrict both
`fetch()` and Web Crypto when a page is opened directly from `file://`.
Start a local static web server from this folder and open the displayed URL.
For example, use the Live Server extension in VS Code or another local static
HTTP server. Opening `index.html` directly may prevent the CSV request or
Web Crypto login validation from working.

## Author and License

Author: **TheGitter5523**

Project: **Fictional Student Finance Dashboard**

This website and the accompanying sample data are licensed under the MIT
License. 

*Notice: All banking transactions and financial information are fictional and
intended for demonstration purposes only. Some elements of this website and the Dataset were generated with AI assistance.