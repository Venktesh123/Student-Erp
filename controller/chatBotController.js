import axios from "axios";

export const askQuestion = async (req, res) => {
  const { question } = req.body; // Corrected: Removed parentheses
  try {
    const response = await axios.post(
      "https://485f-2409-40e3-3005-70b7-644a-3b5d-dfbc-5690.ngrok-free.app/ask-question",
      {
        question,
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
