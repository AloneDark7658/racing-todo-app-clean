import { useEffect, useState } from "react";
import { getLogs } from "../api";
import "../styles/adminLogs.css";

export default function AdminLogs() {
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLogs = async () => {
      try {
        const data = await getLogs();

        // backend 403 dönerse genelde message gelir
        if (data.message) {
          setError("Bu sayfaya erişim yetkiniz yok. Admin değilsiniz.");
        } else {
          setLogs(data);
        }
      } catch (err) {
        setError("Bir hata oluştu.");
      }
    };

    loadLogs();
  }, []);

  if (error) {
    return (
      <div className="logs-page">
        <div className="logs-card error-card">
          <h2>Yetkisiz Erişim</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="logs-page">
      <div className="logs-card">
        <h2 className="logs-title">Admin Logs</h2>

        <ul className="logs-list">
          {logs.map((log) => (
            <li key={log._id} className="log-item">
              <span className="log-action">{log.action}</span>
              <span className="log-user">{log.userId?.email}</span>
              <span className="log-date">
                {new Date(log.createdAt).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
