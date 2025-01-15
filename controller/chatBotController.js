import axios from "axios";

export const askQuestion = async (req, res) => {
  const { question } = req.body; // Corrected: Removed parentheses
  try {
    const response = await axios.post(
      "https://d494-2409-40e3-4072-b4a4-5525-f056-7812-2e34.ngrok-free.app/ask-question",
      {
        question,
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
