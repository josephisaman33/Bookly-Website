 -- create book
 create table books(
    b_no int primary key,
    b_name varchar(50),
    b_desc varchar(50),
    b_rating float
  );

  -- create point table
   create table reflection(
   b_no int,
   reflection varchar(500),
   rating float,
   bookname varchar(500),
   foreign key(b_no) references books(b_no)
  );
  
-- input book data
insert into books values ('1','One Book','A big book',null);

-- python terminal input：python manage.py runserver
-- start app python


--review this website,for reflection and rate
--http://127.0.0.1:8000/app1/reviews/


--inquire score record
select * from reflection

--inquire average score
select * from books

