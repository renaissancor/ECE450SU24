import sqlite3
import pandas as pd
df = pd.read_csv("data.csv")
con = sqlite3.connect("data.db")
df.to_sql("project",con,if_exists="append",index=False)
