<!-- @format -->

# 🎉 Event Management Platform

## **📌 Overview**

The **Event Management Platform** is a full-stack web application that allows users to **create, manage, and attend events**. It features **user authentication, event creation, real-time attendee tracking**, and **guest access for attendees**.

---

## **🚀 Features**

✅ **User Authentication** (Login, Register, Guest Login)  
✅ **Event Creation & Management**  
✅ **Dashboard for Viewing Events**  
✅ **Real-time Attendee List**  
✅ **Responsive UI for Mobile & Desktop**

---

## **🛠️ Tech Stack**

### **Frontend:**

- **React.js** (UI framework)
- **React Router** (for navigation)
- **Axios** (for API requests)
- **CSS** (for styling)

### **Backend:**

- **Node.js & Express.js** (API server)
- **MongoDB Atlas** (database)
- **Mongoose** (MongoDB schema management)
- **JWT Authentication** (secure user authentication)

### **Real-time Features:**

- **Socket.io** (for live attendee updates)

---

## **⚡ Installation Guide**

### **📌 1. Clone the Repository**

```sh
git clone https://github.com/yourusername/event-management-platform.git
cd event-management-platform
```

📌 2. Install Dependencies

frontend
cd eventfrontend
npm install

backend
cd eventbackend
npm install

📌 3. Set Up Environment Variables
Frontend (eventfrontend/.env)

REACT_APP_BASE_URL=http://localhost:5000
Backend (eventbackend/.env)

PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key

📌 4. Run the Application

Start Backend Server
cd eventbackend
npm start

Start Frontend
cd eventfrontend
npm start
