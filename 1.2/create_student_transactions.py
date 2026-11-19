#!/usr/bin/env python3
"""Generiert ein fiktives Datenset für studentische Banktransaktionen."""

import calendar
import random
from datetime import date, timedelta
from pathlib import Path

import pandas as pd


START_DATE = date(2025, 1, 1)
END_DATE = date(2025, 6, 30)
OUTPUT_FILE = Path(__file__).with_name("student_transactions_germany_6months.csv")
RANDOM_SEED = 42

BANK_NAMES = [
    "BaFöG-Konto",
    "Studentenwerk",
    "Buchladen Berlin",
    "Buchladen Hamburg",
    "Buchladen München",
    "Buchladen Frankfurt",
    "Buchladen Köln",
    "Buchladen Stuttgart",
    "Buchladen Leipzig",
    "Buchladen Nürnberg",
    "Buchladen Hannover",
    "Buchladen Bremen",
    "Buchladen Kiel",
    "Buchladen Rostock",
    "Buchladen Magdeburg",
    "Online-Shop",
    "BahnCard",
    "Mensa-Abonnement",
    "Studienmaterial",
    "Studienheft",
]

BOOK_TITLES = [
    "Python für Einsteiger",
    "Datenanalyse mit Python",
    "Lineare Algebra",
    "Statistik für Informatiker",
    "Algorithmen",
    "Datenbanken",
    "Webentwicklung",
    "Künstliche Intelligenz",
    "Python-Programmierung",
    "Informatik Grundlagen",
    "Datenvisualisierung",
    "Studienheft",
]

CATEGORIES = [
    "Sozialleistungen",
    "Studium",
    "Lebensmittel",
    "Transport",
    "Studienmaterial",
]


def generate_iban() -> str:
    """Erzeugt eine nur für Demo-Zwecke geeignete, klar fiktive IBAN."""
    account_number = random.randint(10**17, 10**18 - 1)
    return f"DE00{account_number}"


def generate_betreff(category: str) -> str:
    if category == "Sozialleistungen":
        return "BaFöG-Zahlung"
    if category == "Studium":
        return f"Buch: {random.choice(BOOK_TITLES)}"
    if category == "Lebensmittel":
        return f"Mensa-{random.choice(['Monatskarte', 'Abonnement'])}"
    if category == "Transport":
        return "BahnCard-Abonnement"
    if category == "Studienmaterial":
        return "Studienmaterial"
    return "Sonstiges"


def random_date_in_month(year: int, month: int) -> date:
    last_day = calendar.monthrange(year, month)[1]
    return date(year, month, random.randint(1, last_day))


def create_student_transactions() -> pd.DataFrame:
    random.seed(RANDOM_SEED)
    data: list[dict[str, object]] = []
    current_month = START_DATE.replace(day=1)
    last_month = END_DATE.replace(day=1)

    while current_month <= last_month:
        for _ in range(random.randint(10, 15)):
            category = random.choice(CATEGORIES)
            data.append(
                {
                    "Datum": random_date_in_month(
                        current_month.year, current_month.month
                    ),
                    "Betrag": round(random.uniform(0.50, 300.00), 2),
                    "Sign": "+" if category == "Sozialleistungen" else "-",
                    "Konto-Name": random.choice(BANK_NAMES),
                    "IBAN": generate_iban(),
                    "BIC": "COBADEFFXXX",
                    "Betreff": generate_betreff(category),
                    "Kategorie": category,
                }
            )

        current_month += timedelta(days=32)
        current_month = current_month.replace(day=1)

    df = pd.DataFrame(data).sort_values("Datum").reset_index(drop=True)
    df["Datum"] = df["Datum"].map(lambda value: value.strftime("%d.%m.%Y"))
    df["Betrag"] = df["Betrag"].map(lambda value: f"{value:.2f}")
    return df


if __name__ == "__main__":
    transactions = create_student_transactions()
    transactions.to_csv(OUTPUT_FILE, index=False, encoding="utf-8")
    print(f"Datensatz erfolgreich erstellt: {OUTPUT_FILE}")
    print(f"Gesamtanzahl an Transaktionen: {len(transactions)}")
    print(
        f"Zeitraum: {transactions['Datum'].iloc[0]} "
        f"bis {transactions['Datum'].iloc[-1]}"
    )
