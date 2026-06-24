
#!/usr/bin/env python3
"""Interactively create or update the Momar LLC admin account."""

from __future__ import annotations

import sys
from getpass import getpass
from pathlib import Path

from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT))  # make project-root modules importable
load_dotenv(ROOT / ".env")

from config import settings  # noqa: E402
from database import Base, SessionLocal, engine, hash_password  # noqa: E402
from crud.crud import get_admin_by_email  # noqa: E402
from models.models import Admin  # noqa: E402


def prompt_value(label: str, default: str | None = None, secret: bool = False) -> str:
    suffix = f" [{default}]" if default else ""
    while True:
        raw = getpass(f"{label}{suffix}: ") if secret else input(f"{label}{suffix}: ")
        value = raw.strip() or (default or "").strip()
        if value:
            return value
        print(f"{label} is required.")


def prompt_password() -> str:
    while True:
        password = getpass("Admin password: ").strip()
        if len(password) < 8:
            print("Password must be at least 8 characters.")
            continue
        confirm = getpass("Confirm password: ").strip()
        if password != confirm:
            print("Passwords do not match.")
            continue
        return password


def main() -> int:
    print("Greez LLC admin bootstrap")
    print(f"Database: {settings.DATABASE_URL}")
    print(f"Using engine: {engine.url}")

    email = prompt_value("Admin email", default=settings.ADMIN_EMAIL)
    password = prompt_password()

    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        admin = get_admin_by_email(db, email)
        if admin is None:
            admin = Admin(email=email, password=hash_password(password), is_superuser=True)
            db.add(admin)
            action = "created"
        else:
            admin.password = hash_password(password)
            admin.is_superuser = True
            action = "updated"

        db.commit()
        print(f"Admin account {action}: {email}")
        return 0
    finally:
        db.close()


if __name__ == "__main__":
    raise SystemExit(main())
