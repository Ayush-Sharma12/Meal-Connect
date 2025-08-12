##  Introduction

**Meal-Connect** is a full-stack web application that bridges the gap between food donors and recipients.
It allows restaurants, bakeries, and individuals to **donate surplus food** and enables NGOs or individuals in need to **find, request, and track orders** — reducing food waste and fighting hunger.

##  Key Features

* **Donor Portal** – Add available surplus food with details, images, and pickup location.
* **Recipient Portal** – Browse, search, and request available food items in real-time.
* **Order Tracking** – Track the status of orders: *Pending → Confirmed → Completed → Cancelled*.
* **Contact Donor** – One-click phone call integration for quick coordination.
* **Persistent Data** – Store and retrieve orders from a database.
* **Responsive Design** – Mobile-first interface for easy access.

##  Tech Stack

**Frontend:**

* React.js
* Tailwind CSS / CSS Modules
* Lucide Icons
* React Router

**Backend:**

* Java
* Spring Boot (REST API)
* MySQL / PostgreSQL

**Other Tools:**

* LocalStorage (temporary storage in development)
* Git & GitHub for version control

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mealkonnect.git
cd mealkonnect
```

### 2️. Backend Setup (Spring Boot + Java)

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

* Configure `application.properties` with your DB credentials.

### 3️. Frontend Setup (React.js)

```bash
cd frontend
npm install
npm start
```

### 4️. Access the App

Visit: **[http://localhost:3000](https://meal-connect-nine.vercel.app/)**

---

## 📂 Project Structure

```
mealkonnect/
│
├── backend/         # Spring Boot API for managing donors & orders
│   ├── src/
│   └── pom.xml
│
├── frontend/        # React.js UI
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

##  How It Works

1. **Donor** lists food items → adds pickup time & location.
2. **Recipient** searches or browses available items.
3. **Recipient** places an order → donor confirms.
4. Order is completed when the food is picked up.

---

##  Social Impact

* **Reduces food waste** by redirecting surplus meals.
* **Supports communities** by providing free food access.
* **Promotes sustainability** in food distribution.

---

##  License

This project is licensed under the **MIT License** – free to use and modify.
ndly?
