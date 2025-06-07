SHOW DATABASES;
CREATE database logistic_db;
SHOW DATABASES;
USE logistic_db;
CREATE TABLE Customers(
   customer_id INT primary key auto_increment not null,
   customer_name VARCHAR(40),
   contact_number VARCHAR(20),
   Email varchar(20) unique,
   address text);
CREATE TABLE Orders(
  order_id INT primary key auto_increment,
  order_date date NOT NULL,
  delivery_status varchar(30),
  total_amount DECIMAL(10,2) NOT NULL,
  customer_id INT,
  supplier_id INT,
  vessel_id INT,
  aeroplane_id INT,
  constraint fk_customer_id Foreign key(customer_id) references Customers(customer_id),
   constraint fk_vessel_id foreign key(vessel_id) references Vessels(vessel_id),
   constraint fk_aeroplane_id foreign key(aeroplane_id) references aeroplanes(aeroplane_id),
   constraint fk_supplier_id foreign key(supplier_id) references suppliers(supplier_id)
  );
  CREATE TABLE Employees(
   employee_id INT Primary key auto_increment,
   customer_id INT,
   employee_name varchar(50),
   role varchar(50),
   contact_number varchar(50),
   salary DECIMAL(10,2) NOT null,
   supplier_id INT,
   constraint fk_cust_id foreign key(customer_id) references Customers(customer_id),
   constraint fk_supplier foreign key(supplier_id) references Suppliers(supplier_id)
   );
   CREATE TABLE Suppliers(
    supplier_id INT primary key auto_increment,
    supplier_name varchar(50),
    contact_number varchar(20),
    Email varchar(20) unique,
    address text
    );
    CREATE TABLE Vessels(
    vessel_id INT primary key auto_increment,
    vessel_name varchar(50),
    capacity INT,
    current_location varchar(20),
    status varchar(20)
    );
    CREATE TABLE Aeroplanes(
    aeroplane_id INT primary key auto_increment,
    model varchar(50),
    capacity INT,
    current_location varchar(20),
    status varchar(20)
    );


   
  
