create table users
(
    Id int primary key,
    username varchar(100) not null,
    password varchar(255) not null
)

create table campaign
(
    Id int primary key,
    name varchar(100) not null,
    status int not null,
    startDate timestamp null,
    imagePath varchar(300) null
)