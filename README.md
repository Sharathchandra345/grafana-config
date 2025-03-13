# 📊 **Monitoring Express Server with Prometheus, Grafana & Loki**  

This project sets up a **sample Express.js server** integrated with **Prometheus, Grafana, and Loki** to monitor request loads, response times, and logs.

---

## 🚀 **Project Overview**  
- **Prometheus** → Collects and exposes metrics (`/metrics`).  
- **Grafana** → Visualizes metrics from Prometheus.  
- **Loki** → Stores logs from the server.  
- **Express.js** → Sample server with monitoring enabled.  

---

## 🏗 **Setup Instructions**  

### 1️⃣ **Install Dependencies**  
```sh
npm install
```

### 2️⃣ **Run Express Server**  
```sh
node index.js
```

### 3️⃣ **Start Prometheus, Grafana & Loki (Docker)**  
```sh
docker compose up -d
```

---

## 📌 **Endpoints**
| Endpoint    | Method | Description |
|------------|--------|-------------|
| `/`        | `GET`  | Basic health check |
| `/slow`    | `GET`  | Simulates a heavy task |
| `/metrics` | `GET`  | Exposes Prometheus metrics |

---

## 📡 **Access Monitoring Tools**  
- **Prometheus:** [`http://localhost:9090`](http://localhost:9090)  
- **Grafana:** [`http://localhost:3000`](http://localhost:3000)  
- **Loki (via Grafana):** Configure Loki as a data source in Grafana.  

---

## 🔧 **Configuration Files**  
- **`prometheus-config.yml`** → Prometheus scraping configuration.  
- **`docker-compose.yml`** → Sets up Prometheus, Grafana, and Loki.  

---