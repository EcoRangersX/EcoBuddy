#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sqlite3


conn = sqlite3.connect('database.db',check_same_thread=False)
cursor = conn.cursor()


cursor.execute(

    """
    CREATE TABLE IF NOT EXISTS users(
    name text,
    email  text,
    password text
    )

    """)

conn.commit()







