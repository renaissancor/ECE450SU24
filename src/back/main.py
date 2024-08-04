from flask import Flask, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)

# 允许所有域跨域访问
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/detail', methods=['POST'])
def detail():
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    data1 = request.get_json()
    print(data1)
    cur.execute("select * from project where projectid={0}".format(data1.get("projectid")))
    # 获取查询结果的列名（表头）
    columns = [description[0] for description in cur.description]

    # 将查询结果转换为字典列表
    rows = cur.fetchall()
    lst = [dict(zip(columns, row)) for row in rows]
    data = lst[0]
    return data

@app.route('/list', methods=['POST'])
def projectlist():
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    data1 = request.get_json()
    print(data1)
    where = "where 1==1 "
    if data1.get("project_search") and data1.get("project_search") != "":
        where += "and title like '%{0}%' ".format(data1.get("project_search"))
    if data1.get("courses") and data1.get("courses") != []:
        if len(data1.get("courses")) == 1:
            where += "and course = '{0}' ".format(data1.get("courses")[0])
        else:
            where += "and course in {0} ".format(tuple(data1.get("courses")))
    if data1.get("semesters") and data1.get("semesters") != []:
        where += "and ( "
        semetery = data1.get("semesters")[0].split(" ")
        where += "year={0} and UPPER(semester)='{1}' ".format(semetery[0], semetery[1].upper())
        print(where)
        for semetery_i in range(1, len(data1.get("semesters"))):
            print(data1.get("semesters")[semetery_i])
            semetery = data1.get("semesters")[semetery_i].split(" ")
            print(semetery)
            where += "or year={0} and UPPER(semester)='{1}' ".format(semetery[0], semetery[1].upper())
        where += ") "
    if data1.get("sponsors") and data1.get("sponsors") != []:
        sponsors = [
            "Bosch (Shanghai) Smart Life Technology Ltd. (RBLC)", 
            "United Automotive Electronic Systems (UAES)", 
            "HASCO Vision Technology Co., Ltd.", 
            "Rockwell", 
            "AIMS", 
            "NIO", 
            "AMD", 
            "University of Michiga", 
            "Sunway", 
            "Builder[x]", 
            "Joint Institute", 
            "TerraQuanta"
        ]
        if "Others" in data1.get("sponsors"):
            where += "and ("
            for sponsor in sponsors:
                where += " sponsor not like '%{0}%' and".format(sponsor)
            where = where.rstrip('and')
            where += ") "
        else:
            where += "and ("
            for sponsor in data1.get("sponsors"):
                where += " sponsor like '%{0}%' or".format(sponsor)
            where = where.rstrip('or')
            where += ") "
    print(where)
    cur.execute("select * from project " + where)
    # 获取查询结果的列名（表头）
    columns = [description[0] for description in cur.description]
    # 将查询结果转换为字典列表
    rows = cur.fetchall()
    lst = [dict(zip(columns, row)) for row in rows]
    # print(lst)

    result = {"code": 0, "list": lst}
    return result

if __name__ == '__main__':
    app.run(debug=True)