#!/usr/bin/env python
# -*- coding:utf-8 -*-
# @Time  : 2022/5/21 23:20
# @Author: Hehuyi_In
# @File  : pg_test.py

import psycopg2

conn = psycopg2.connect(database="postgres", user="postgres", password="cyy20010709", host="127.0.0.1", port="5432")
cur = conn.cursor()

cur.execute('''CREATE TABLE t1 (a int,b int);''')
print("Table created successfully")

cur.execute("INSERT INTO t1 VALUES (1,1)")
cur.execute("INSERT INTO t1 VALUES (2,2)")
print("Table inserted successfully")

cur.execute("SELECT a,b from t1")
rows = cur.fetchall()
for row in rows:
    print("a = ", row[0])
    print("b = ", row[1])

conn.commit()
conn.close()