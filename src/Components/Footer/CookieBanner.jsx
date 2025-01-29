import React, { useState, useEffect } from "react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    functional: false,
    marketing: false,
  });

  useEffect(() => {
    const savedPreferences = JSON.parse(
      localStorage.getItem("cookiePreferences")
    );
    if (!savedPreferences) {
      setShowBanner(true);
    } else {
      setPreferences(savedPreferences);
    }
  }, []);

  const acceptAll = () => {
    const allPreferences = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
    };
    localStorage.setItem("cookiePreferences", JSON.stringify(allPreferences));
    setPreferences(allPreferences);
    setShowBanner(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    setShowBanner(false);
    setShowModal(false);
  };

  return (
    <>
      {showBanner && (
        <div
          style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            right: "0",
            background: "#2c3e50",
            color: "#fff",
            padding: "15px",
            display: "flex",
            zIndex: "999",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>
            Kami menggunakan cookie untuk meningkatkan pengalaman Anda.{" "}
            <a href="/unteyo/cookiepolicy" style={{ color: "#f1c40f" }}>
              Pelajari lebih lanjut
            </a>
            .
          </p>
          <div>
            <button
              onClick={acceptAll}
              style={{
                background: "#27ae60",
                color: "#fff",
                border: "none",
                padding: "8px 16px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            >
              Terima Semua
            </button>
            <button
              onClick={() => setShowModal(true)}
              style={{
                background: "#e67e22",
                color: "#fff",
                border: "none",
                padding: "8px 16px",
                cursor: "pointer",
              }}
            >
              Atur Preferensi
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#ecf0f1",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            zIndex: "1000",
          }}
        >
          <h2>Pengaturan Cookie</h2>
          <label>
            <input type="checkbox" checked={preferences.essential} disabled />
            Cookie Esensial (Wajib)
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={preferences.analytics}
              onChange={() =>
                setPreferences({
                  ...preferences,
                  analytics: !preferences.analytics,
                })
              }
            />
            Cookie Analitik
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={preferences.functional}
              onChange={() =>
                setPreferences({
                  ...preferences,
                  functional: !preferences.functional,
                })
              }
            />
            Cookie Fungsional
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={preferences.marketing}
              onChange={() =>
                setPreferences({
                  ...preferences,
                  marketing: !preferences.marketing,
                })
              }
            />
            Cookie Pemasaran
          </label>
          <br />
          <button
            onClick={savePreferences}
            style={{
              background: "#2c3e50",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Simpan
          </button>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
