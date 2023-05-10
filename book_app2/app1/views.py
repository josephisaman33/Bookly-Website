
import psycopg2
from django.shortcuts import render, redirect, HttpResponse
from app1.models import *

def reviews(request):
    if request.method == "GET":
        return render(request, 'reflection.html')
    if request.method == "POST":
        reflection = request.POST.get("reflection", None)
        stars = request.POST.get("stars", None)
        name = request.POST.get("name", None)
        id = request.POST.get("id", None)
        print(reflection, stars)

        db = psycopg2.connect(database="postgres", user="postgres", password="cyy20010709", host="127.0.0.1",
                                port="5432")
        cursor = db.cursor()

        sql1 = "insert into reflection values ('1','"+reflection+"',"+stars+",'"+name+"');"
        sql2 = """
         update books set b_rating=(select avg(rating) from reflection where b_no='"""+id+"""') where 1=1;
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

        sql3 = """
          select b_rating from books  where b_no="""+id+""";
         """
        cursor.execute(sql3)
        avg_rating = cursor.fetchone()[0]
        print(avg_rating)
        # print(avg_rating.b_rating)
        # print(avg_rating.b_rating)
        #  {{ mod_obj.b_rating }}
        db.close()
        return render(request, 'result.html', {'avg_rating': avg_rating})
