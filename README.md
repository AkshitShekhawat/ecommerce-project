# 🛒 Ecommerce - Production-Grade Full Stack Web Application.  
A fully-featured, production-ready eCommerce web application built using modern technologies, offering secure authentication, role-based access, payment integration, and admin management functionalities.

## 📦 Core Modules

Authentication: Login, signup, and token-based session management  
Product Listing: With category filters and search functionality  
Cart Management: Add/remove products, quantity updates  
Address Handling: Capture and manage shipping addresses  
Checkout & Orders: Place orders and track history  
Role based access - Admin, seller, user  
Real-time payments using Stripe  

## 🛠️ Tech Stack

| **Backend**                                         | **Frontend**                                         |
|-----------------------------------------------------|------------------------------------------------------|
| Spring Framework                                    | React.js                                             |
| Spring Boot                                         | JSX (JavaScript XML)                                 |
| Java                                                | Redux                                                |
| Spring Security                                     | React Hooks (useState, useEffect, useRef, useContext)|
| JSON Web Tokens (JWT)                               | Custom Hooks                                         |
| Role-Based Access Control (RBAC)                    | Tailwind CSS                                         |
| Custom Authentication                               | Responsive Design                                    |
| JPA (Jakarta Persistence API)                       | React Router                                         |
| Hibernate ORM                                       | React Router Hooks                                   |
| PostgreSQL                                          | React Hook Forms                                     |
| MySQL                                               | Stripe Payment Gateway Integration                   |
| Database Relationships & Entity Management          | Role-Based Access Control (RBAC)                     |
| Lombok                                              | Lots of React library's                              |
| Maven / Gradle                                      |                                                      |
| IntelliJ IDEA                                       |                                                      |
| REST API Development                                |                                                      |
| Swagger API Documentation                           |                                                      |
| Backend Validations                                 |                                                      |
| Pagination and Sorting                              |                                                      |
| AWS Deployment                                      |                                                      |
| Spring AI Framework                                 |                                                      |
| Payment Processing                                  |                                                      |


## ✅ Features

#### 🔐 Authentication & Authorization  
   - Secure login & registration using Spring Security 6 and JWT  
   - Role-based access for customers/users, sellers and admin  

#### 🔄 Backend APIs  
  - Developed RESTful APIs with Spring Boot, Spring MVC, and Spring Data JPA (Hibernate) for persistence, integrated with PostgreSQL/MySQL databases.  
  - Implemented role-based access control (Admin, Seller, Customer/User) with Spring Security & JWT, along with pagination, sorting, validation, search functionality, and    centralized exception handling.  
  - Built a product categories module with filtering and integrated Stripe API for secure, real-time payment processing  
  - Handles business logic, validation, and data persistence with MySQL  

#### 🖥️ Frontend (React + Redux)  
  - Fully responsive user interface built with React.js  
  - Redux used for global state management (authentication, cart, etc.)  
  - Seamless integration with backend APIs  

#### 💳 Payments with Stripe  
  - Real-time payment processing using Stripe's API  
  - Integrated securely for both test and live modes

#### ☁️ Deployment

Temporarily deployed on AWS for learning purpose, But in future i can deploy on vercel, render ensuring scalability and high availability

## 📸 Screenshots  
[More Comming Soon...]  

<p align="center">
  <img src="https://github.com/user-attachments/assets/e57e0607-e4dd-46cb-818f-63deb9750afa" alt="gitpro1" width="400" height="200"/>/>
  <img src="https://github.com/user-attachments/assets/36f0a0b0-01df-47f5-a60e-3b2c2bbc640b" alt="gitpro2" width="400" height="200"/>/>
  <img src="https://github.com/user-attachments/assets/e1a57520-d51d-4983-862e-3d7852ff738d" alt="gitpro3" width="400" height="200"/>/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/2b222b0a-daf4-4764-81b0-e265ea034fe5" alt="gitpro4" width="400" height="200"/>/>
  <img src="https://github.com/user-attachments/assets/32ad2c05-b945-458e-8805-52d54557d2eb" alt="gitpro5" width="400" height="200"/>/>
</p>

## 🏁 Getting Started  
#### Prerequisites  
 - Intellij and VS Code
 - Node.js  
 - Java 21  
 - MySQL or PostgresSQL  
 - Maven  
 
#### Backend Setup  
- cd sb-ecom-backend  
- configure application.properties  
- mvn clean install  
- mvn spring-boot:run  

#### Frontend Setup
- cd ecom-frontend  
- npm install  
- npm start  
- Stripe Setup  
- Create a Stripe account  

Replace test keys in the frontend/backend with your own

## 📂 Folder Structure

 ecommerce-project/  
 │  
 ├── sb-ecom-backend/  
 │   └── src/main/java/... (Spring Boot code)  
 │  
 ├── ecom-frontend/  
 │   └── src/ (React components)  
 🤝 Contributing  
 
Contributions are welcome! Feel free to fork the project and submit a pull request.

## 📃 License  
This project is licensed under ------
