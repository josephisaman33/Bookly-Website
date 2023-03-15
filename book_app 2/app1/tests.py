import pymysql
db = pymysql.connect(host="localhost",port=3306,user="root",passwd="root",db="testdb",charset='utf8')
cursor = db.cursor()
sql1 = """
insert into ReflechionAndRating values ('1','my reflechion',5);
 """
sql2 = """
 update books set b_rating=(select avg(rating) from ReflechionAndRating where b_no='1') where 1=1
"""
cursor.execute(sql2)
db.commit()
try:
	cursor.execute(sql1)
	db.commit()
except:
    db.rollback()

try:
	cursor.execute(sql2)
	db.commit()
except:
    db.rollback()
db.close()