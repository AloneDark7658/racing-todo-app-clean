# 📝 Fullstack Todo Application

Bu proje, React (Vite) ve Express.js kullanılarak geliştirilmiş bir **fullstack To-Do uygulamasıdır**.  
JWT tabanlı kimlik doğrulama, rol bazlı yetkilendirme (Admin/User) ve işlem loglama özellikleri içermektedir.

Projenin amacı; temel web geliştirme yetkinliği, sistem tasarımı yaklaşımı ve frontend–backend entegrasyonunu göstermektir.

---

## 🚀 Canlı Linkler

- **Frontend:** https://todo-frontend-0i1v.onrender.com
- **Backend API:** https://todo-backend-bg0y.onrender.com
- **GitHub Repo:** https://github.com/AloneDark7658/racing-todo-app-clean

---

## 🛠️ Kullanılan Teknolojiler

### Frontend
- React
- React Router (**HashRouter**)
- Vite
- CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Bcrypt

### Deploy & Altyapı
- Render (Frontend & Backend)
- MongoDB Atlas

---

## ✨ Özellikler

### 👤 Kullanıcı İşlemleri
- Kullanıcı kayıt (Register)
- Kullanıcı giriş (Login)

### ✅ Todo İşlemleri
- Todo ekleme
- Todo silme
- Todo güncelleme (edit)
- Todo tamamlandı / tamamlanmadı durumu
- Sayfa yenilendiğinde verilerin korunması

### 🛡️ Yetkilendirme & Loglama
- Rol bazlı erişim (Admin / User)
- Yapılan işlemlerin loglanması (CREATE, UPDATE, DELETE)
- Admin kullanıcılar için log görüntüleme paneli
- Normal kullanıcılar admin sayfasına erişemez

---

## 👑 Admin Yetkilendirme

Admin yetkisi **güvenlik nedeniyle frontend üzerinden verilmez**.

Bir kullanıcıyı admin yapmak için MongoDB üzerinde ilgili kullanıcının `role` alanı `"admin"` olarak güncellenmelidir.


---

## ⚙️ Local Çalıştırma

### Backend
```bash
cd backend
npm install
npm run dev
