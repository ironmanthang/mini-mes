# Mini-MES
Project on MES - Production Management System

## Backend Setup
### Prerequisites

Before you begin, ensure you have the following installed on your machine:

*   **Git**: For cloning the repository.
*   **Docker Desktop**: The engine for running the application container. [Download here](https://www.docker.com/products/docker-desktop/).
*   A free **MongoDB Atlas Account**: For the cloud-hosted database. [Create one here](https://www.mongodb.com/cloud/atlas/register).

### Setup Instructions

```bash
git clone https://github.com/ironmanthang/mini-mes
cd mini-mes/backend
cp .env.example .env
```
**Configure your Database Connection:**
*   Log in to your [MongoDB Atlas account](https://cloud.mongodb.com/).
*   Create a new **free tier (M0) cluster**.
*   In **Database Access**, create a database user with a secure password.
*   In **Network Access**, add your current IP address to the IP Access List.
*   Go to **Database**, click **Connect** -> **Drivers**, and copy your connection string.
*   Open your new `.env` file and paste the string as the value for `MONGO_URI`. **Remember to replace `<password>` with your actual database password.**

**Build and Run the Container:**
*   after add your MONGO_URI in .env run this cmd
```bash
docker-compose up
```
