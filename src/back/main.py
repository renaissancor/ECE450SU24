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

@app.route('/total-projects', methods=['GET'])
def total_projects():
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    cur.execute("SELECT COUNT(*) FROM project")
    total = cur.fetchone()[0]
    return {"total_projects": total}

@app.route('/projects-2023', methods=['GET'])
def projects_2023():
    print(123)
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    cur.execute("SELECT COUNT(*) FROM project WHERE year = 2023")
    total = cur.fetchone()[0]
    return {"total_projects": total}

@app.route('/joint-institute-projects', methods=['GET'])
def joint_institute_projects():
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    cur.execute("SELECT COUNT(*) FROM project WHERE sponsor = 'Joint Institute'")
    total = cur.fetchone()[0]
    return {"total_projects": total}

@app.route('/mde-projects', methods=['GET'])
def mde_projects():
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    cur.execute("SELECT COUNT(*) FROM project WHERE course = 'Major Design Experience(MDE)'")
    total = cur.fetchone()[0]
    return {"total_projects": total}

@app.route('/projects-by-semester', methods=['GET'])
def projects_by_semester():
    start_year = int(request.args.get('startYear'))
    start_semester = request.args.get('startSemester').upper()
    end_year = int(request.args.get('endYear'))
    end_semester = request.args.get('endSemester').upper()
    
    con = sqlite3.connect("data.db")
    cur = con.cursor()

    # Ensure the order of semesters for comparison
    semesters_order = {'SUMMER': 1, 'FALL': 0}
    
    query = """
    SELECT year, UPPER(semester), COUNT(*) as total
    FROM project
    WHERE (year > ? OR (year = ? AND UPPER(semester) >= ?))
    AND (year < ? OR (year = ? AND UPPER(semester) <= ?))
    GROUP BY year, UPPER(semester)
    ORDER BY year, UPPER(semester)
    """
    
    cur.execute(query, (start_year, start_year, start_semester, end_year, end_year, end_semester))
    rows = cur.fetchall()
    data = [{"semester": f"{row[0]} {row[1].upper()}", "total": row[2]} for row in rows]
    
    return data

sponsors = [
    "Bosch (Shanghai) Smart Life Technology Ltd. (RBLC)",
    "Joint Institute",
    "United Automotive Electronic Systems (UAES)",
    "R&D Center, HASCO Vision Technology Co., Ltd.",
    "GM China",
    "Builder[x]",
    "Sophoton",
    "THE",
    "AIMS",
    "TerraQuanta",
    "AMD & University of Michigan",
    "NexMaterials",
    "Rockwell",
    "Sunway",
    "NIO"
]

@app.route('/projects-by-sponsor', methods=['GET'])
def projects_by_sponsor():
    start_year = int(request.args.get('startYear'))
    start_semester = request.args.get('startSemester').upper()
    end_year = int(request.args.get('endYear'))
    end_semester = request.args.get('endSemester').upper()

    con = sqlite3.connect("data.db")
    cur = con.cursor()

    data = []

    for sponsor in sponsors:
        query = """
        SELECT COUNT(*) as total
        FROM project
        WHERE (year > ? OR (year = ? AND UPPER(semester) >= ?))
            AND (year < ? OR (year = ? AND UPPER(semester) <= ?))
            AND sponsor LIKE ?
        """
        cur.execute(query, (start_year, start_year, start_semester, end_year, end_year, end_semester, f"%{sponsor}%"))
        count = cur.fetchone()[0]
        data.append({"sponsor": sponsor, "total": count})

    return {"data": data}

@app.route('/projects-by-course', methods=['GET'])
def projects_by_course():
    start_year = int(request.args.get('startYear'))
    start_semester = request.args.get('startSemester').upper()
    end_year = int(request.args.get('endYear'))
    end_semester = request.args.get('endSemester').upper()

    con = sqlite3.connect("data.db")
    cur = con.cursor()

    query = """
    SELECT course, COUNT(*) as total
    FROM project
    WHERE (year > ? OR (year = ? AND UPPER(semester) >= ?))
        AND (year < ? OR (year = ? AND UPPER(semester) <= ?))
    GROUP BY course
    """
    cur.execute(query, (start_year, start_year, start_semester, end_year, end_year, end_semester))
    
    rows = cur.fetchall()
    data = [{"course": row[0], "total": row[1]} for row in rows]
    return {"data": data}

instructors = [
    "Chong Han",
    "Chengbin Ma",
    "Jigang Wu",
    "David L.S. HUNG",
    "Kwee-Yan THE",
    "Yulian He",
    "Qiang Zhang",
    "Zhaoguang Wang",
    "Xinfei Guo",
    "Xuyang Lu",
    "An Zou"
]

@app.route('/projects-by-instructor', methods=['GET'])
def projects_by_instructor():
    start_year = int(request.args.get('startYear'))
    start_semester = request.args.get('startSemester').upper()
    end_year = int(request.args.get('endYear'))
    end_semester = request.args.get('endSemester').upper()

    con = sqlite3.connect("data.db")
    cur = con.cursor()

    data = []

    for instructor in instructors:
        query = """
        SELECT COUNT(*) as total
        FROM project
        WHERE (year > ? OR (year = ? AND UPPER(semester) >= ?))
            AND (year < ? OR (year = ? AND UPPER(semester) <= ?))
            AND instructor LIKE ?
        """
        cur.execute(query, (start_year, start_year, start_semester, end_year, end_year, end_semester, f"%{instructor}%"))
        count = cur.fetchone()[0]
        data.append({"instructor": instructor, "total": count})

    return {"data": data}

if __name__ == '__main__':
    app.run(debug=True) 