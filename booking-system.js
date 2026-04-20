const express = require("express");
const redis = require("redis");

const app = express();
app.use(express.json());

// Redis connection
const client = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT || 6379
  },
  password: process.env.REDIS_PASSWORD || undefined
});

client.connect();

// Total seats
const TOTAL_SEATS = 100;

// Booking API
app.post("/api/book", async (req, res) => {
  try {
    let remaining = await client.get("seats");

    if (remaining === null) {
      await client.set("seats", TOTAL_SEATS);
      remaining = TOTAL_SEATS;
    }

    if (remaining <= 0) {
      return res.status(400).json({
        success: false,
        message: "Sold out"
      });
    }

    await client.decr("seats");

    res.json({
      success: true,
      bookingId: Date.now(),
      remaining: remaining - 1
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Dynamic port (important for deployment)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});