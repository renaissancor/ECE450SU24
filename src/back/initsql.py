import sqlite3
con = sqlite3.connect("data.db")
cur = con.cursor()
cur.execute('''
create table IF NOT EXISTS project(projectid INTEGER PRIMARY KEY AUTOINCREMENT,
title text,year integer,semester text,course text,
sponsor text,members text,companymentor text,
instructor text,problem text
,concept text,description text,analysis text
,validation text,conclusion text,acknowledgement text
)
''')
con.commit()
cur.close()
con.close()