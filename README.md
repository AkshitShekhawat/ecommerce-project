# 🛒 Ecommerce - Production-Grade Full Stack Web Application.  
A fully-featured, production-ready eCommerce web application built using modern technologies, offering secure authentication, role-based access, payment integration, and admin management functionalities.

## 📦 Core Modules

Authentication: Login, signup, and token-based session management  
Product Listing: With category filters and search functionality  
Cart Management: Add/remove products, quantity updates  
Address Handling: Capture and manage shipping addresse  
Checkout & Orders: Place orders and track history  
Role based access - Admin, seller, user  

## Tech Stack

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
| Lombok                                              |                                                      |
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

### 🔐 Authentication & Authorization  
   - Secure login & registration using Spring Security 6 and JWT  
   - Role-based access for customers, sellers and admin  

#### 🔄 Backend APIs  
  - Built RESTful APIs using Spring Boot and Spring Data JPA  
  - Handles business logic, validation, and data persistence with MySQL  

🖥️ Frontend (React + Redux)  
  - Fully responsive user interface built with React.js
  - Redux used for global state management (authentication, cart, etc.)  
  - Seamless integration with backend APIs

💳 Payments with Stripe  
  - Real-time payment processing using Stripe's API  
  - Integrated securely for both test and live modes

☁️ Deployment

Temporarily deployed on AWS for learning purpose, But in future i can deploy on vercel, render ensuring scalability and high availability

## 📸 Screenshots  
[Comming Soon]

= Getting Started

 - Prerequisites  
 - Node.js  
 - Java 21  
 - MySQL or PostgresSQL  
 - Maven  
 
Backend Setup

- cd sb-ecom-backend  
- configure application.properties  
- mvn clean install  
- mvn spring-boot:run  

Frontend Setup

- cd ecom-frontend  
- npm install  
- npm start  
- Stripe Setup  
- Create a Stripe account  

Replace test keys in the frontend/backend with your own

📂 Folder Structure

 ecommerce-project/  
 │  
 ├── sb-ecom-backend/  
 │   └── src/main/java/... (Spring Boot code)  
 │  
 ├── ecom-frontend/  
 │   └── src/ (React components)  
 🤝 Contributing  
 
Contributions are welcome! Feel free to fork the project and submit a pull request.

📃 License  
This project is licensed under ------
