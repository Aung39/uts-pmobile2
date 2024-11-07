"use client";

import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    message: string;
    rating: number;
  } | null>(null);
  const [ratings, setRatings] = useState<
    { name: string; message: string; rating: number }[]
  >([]); // Menyimpan data rating per pengguna
  const [formError, setFormError] = useState<string | null>(null); // Menyimpan pesan error form

  // Fungsi untuk handle submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi form: pastikan semua input diisi
    if (!name || !message || rating === 0) {
      setFormError("Semua field harus diisi, termasuk rating.");
      return;
    }

    // Menyimpan data yang telah diinputkan untuk ditampilkan di bawah form
    const newRating = { name, message, rating };
    setRatings([...ratings, newRating]);

    // Reset form setelah pengiriman
    setName("");
    setMessage("");
    setRating(0);
    setFormError(null); // Reset error
  };

  // Fungsi untuk memilih rating
  const handleRating = (index: number) => {
    setRating(index + 1);
  };

  // Menghitung rata-rata rating
  const calculateAverageRating = () => {
    if (ratings.length === 0) return 0;
    const total = ratings.reduce((acc, cur) => acc + cur.rating, 0);
    return total / ratings.length;
  };

  // Fungsi untuk menyensor sebagian nama
  const censorName = (name: string) => {
    const visibleChars = 2; // Menentukan jumlah karakter yang akan ditampilkan
    if (name.length <= visibleChars) return name; // Jika nama lebih pendek dari jumlah karakter yang terlihat, tampilkan semuanya
    const censored =
      name.slice(0, visibleChars) + "*".repeat(name.length - visibleChars);
    return censored;
  };

  return (
    <div style={styles.container}>
      <div style={styles.averageRatingContainer}>
        <h3 style={styles.averageRatingHeader}>Rating:</h3>
        <p style={styles.averageRating}>
          {calculateAverageRating().toFixed(1)} ★
        </p>
      </div>

      <h2 style={styles.header}>Rate My Website</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>
            Nama
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="message" style={styles.label}>
            Pesan
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Rating</label>
          <div style={styles.stars}>
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                onClick={() => handleRating(index)}
                style={index < rating ? styles.starActive : styles.star}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {formError && <p style={styles.error}>{formError}</p>}

        <button type="submit" style={styles.submitButton}>
          Kirim
        </button>
      </form>

      {/* Menampilkan ulasan yang sudah dikirim */}
      <div style={styles.submittedData}>
        <h3>Daftar Ulasan</h3>
        {ratings.map((data, index) => (
          <div key={index} style={styles.review}>
            <p>
              <strong>{censorName(data.name)}</strong> ({data.rating} ★)
            </p>
            <p style={styles.italicMessage}>{data.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: "rgba(30, 30, 30, 0.8)",
    color: "#E0E0E0",
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    borderRadius: "8px",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(10px)",
    fontFamily: "Arial, sans-serif",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  averageRatingContainer: {
    textAlign: "left",
  },
  averageRatingHeader: {
    fontSize: "1.2rem",
    color: "#D3D3D3",
  },
  averageRating: {
    fontSize: "2rem",
    color: "#FFEB3B",
    fontWeight: "bold",
  },
  header: {
    fontSize: "2rem",
    color: "#D3D3D3",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "8px",
    fontSize: "1rem",
  },
  input: {
    padding: "12px",
    backgroundColor: "#333",
    border: "1px solid #444",
    color: "#E0E0E0",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  textarea: {
    padding: "12px",
    backgroundColor: "#333",
    border: "1px solid #444",
    color: "#E0E0E0",
    borderRadius: "5px",
    minHeight: "120px",
    fontSize: "1rem",
    resize: "vertical",
  },
  stars: {
    display: "flex",
    gap: "8px",
    cursor: "pointer",
  },
  star: {
    color: "#BBB",
    fontSize: "28px",
    transition: "color 0.2s",
  },
  starActive: {
    color: "#FFEB3B",
    fontSize: "28px",
    transition: "color 0.2s",
  },
  submitButton: {
    backgroundColor: "#800808",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.1rem",
    transition: "background-color 0.3s, transform 0.3s",
    display: "block",
    width: "100%",
  },
  submittedData: {
    marginTop: "30px",
    backgroundColor: "#333",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
  },
  review: {
    padding: "10px",
    borderBottom: "1px solid #444",
  },
  italicMessage: {
    fontStyle: "italic",
  },
  error: {
    color: "#FF4D4D",
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
};

export default ContactForm;
