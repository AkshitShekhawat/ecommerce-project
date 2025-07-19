🛒 Ecommerce - Production-Grade Full Stack Web Application
A fully-featured, production-ready eCommerce web application built using modern technologies, offering secure authentication, role-based access, payment integration, and admin management functionalities.

🔧 Tech Stack
Backend: Java, Spring Boot, Spring Security 6, Spring Data JPA, JWT
Frontend: React.js, Redux
Database: MySQL, H2 Database
Payments: Stripe
Deployment: AWS - Temporary

✅ Features
🔐 Authentication & Authorization
Secure login & registration using Spring Security 6 and JWT
Role-based access for customers and admin

🔄 Backend APIs
Built RESTful APIs using Spring Boot and Spring Data JPA

Handles business logic, validation, and data persistence with MySQL

🖥️ Frontend (React + Redux)
Fully responsive user interface built with React.js
Redux used for global state management (authentication, cart, etc.)
Seamless integration with backend APIs

💳 Payments with Stripe
Real-time payment processing using Stripe's API
Integrated securely for both test and live modes

📦 Core Modules
Authentication: Login, signup, and token-based session management
Product Listing: With category filters and search functionality
Cart Management: Add/remove products, quantity updates
Address Handling: Capture and manage shipping addresses
Checkout & Orders: Place orders and track history

Admin Dashboard:
Manage users
CRUD operations for products & categories
View and manage customer orders

☁️ Deployment
Temporarily deployed on AWS for learning purpose, But in future i can deploy on vercel or netlify ensuring scalability and high availability

📸 Screenshots
[Comming Soon]
Getting Started
 -Prerequisites
 -Node.js
 -Java 21
 -MySQL
 -Maven
Backend Setup
cd sb-ecom-backend
configure application.properties
mvn clean install
mvn spring-boot:run

Frontend Setup
 cd ecom-frontend
 npm install
 npm start
 Stripe Setup
 Create a Stripe account

Replace test keys in the frontend/backend with your own

📂 Folder Structure

 ecommerce-app/
 │
 ├── backend/
 │   └── src/main/java/... (Spring Boot code)
 │
 ├── frontend/
 │   └── src/ (React components)
 🤝 Contributing
Contributions are welcome! Feel free to fork the project and submit a pull request.

📃 License
This project is licensed under ------
