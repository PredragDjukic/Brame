drop table if exists users;
drop table if exists campaign;

create table users
(
    Id int primary key,
    username varchar(100) not null,
    password varchar(255) not null
);

insert into users
values(1, 'pedja', '$2b$06$ROIksKJzJ2PHhceOJlW64.ivW8MQxXSmvg6IsPS6xerFeL2Op5DdW');
insert into users
values(2, 'nikola', '$2b$06$ROIksKJzJ2PHhceOJlW64.ivW8MQxXSmvg6IsPS6xerFeL2Op5DdW');
insert into users
values(3, 'jana', '$2b$06$ROIksKJzJ2PHhceOJlW64.ivW8MQxXSmvg6IsPS6xerFeL2Op5DdW');

create table campaign
(
    Id serial primary key,
    name varchar(100) not null,
    status int not null,
    start_date timestamp null,
    image_path varchar(300) null
);

insert into campaign(name, status, start_date, image_path)
values ('Coca cola', 1, '2022-02-08 22:00:00', 'cocacola/imagepath');
insert into campaign(name, status, start_date, image_path)
values ('Plazma', 1, '2022-02-08 22:00:00', 'plazma/imagepath');
insert into campaign(name, status, start_date, image_path)
values ('Frolp,', 1, '2022-02-08 22:00:00', 'frikom/imagepath');