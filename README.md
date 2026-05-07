# UniCalc - Premium University CGPA Portal

A comprehensive academic management portal for university students, featuring SGPA/CGPA calculators, eligibility tracking, and a syllabus repository.

## 🚀 Deployment

### Cloud Deployment (Render)
This project is configured for one-click deployment using **Render Blueprints**.
1. Push this repository to GitHub.
2. Go to [Render Dashboard](https://dashboard.render.com/) and click **New + > Blueprint**.
3. Connect your repository.
4. Render will automatically provision:
   - PostgreSQL Database
   - Java Spring Boot Backend
   - React Static Frontend

### Local Deployment (Docker)
Ensure you have Docker and Docker Compose installed.
```bash
docker-compose up --build
```
Access the app at `http://localhost`.

## 🛠️ Tech Stack
- **Frontend**: React 19, Vite, Lucide Icons, Glassmorphism CSS.
- **Backend**: Spring Boot 3, Spring Security, JWT, JPA/Hibernate.
- **Database**: PostgreSQL.
- **DevOps**: Docker, Render.

## 📁 Project Structure
- `/frontend`: React application.
- `/backend`: Spring Boot application.
- `render.yaml`: Infrastructure as Code for Render.
- `docker-compose.yml`: Local orchestration.

## 🔑 Environment Variables
### Frontend
- `VITE_API_BASE_URL`: Base URL for the backend API.

### Backend
- `SPRING_DATASOURCE_URL`: JDBC URL for PostgreSQL.
- `SPRING_DATASOURCE_USERNAME`: DB Username.
- `SPRING_DATASOURCE_PASSWORD`: DB Password.
- `app.jwt.secret`: Secret key for JWT signing.

---
© 2026 UniCalc Academic Portal.
