import axios from "axios";

export const askQuestion = async (req, res) => {
  const { question } = req.body; // Corrected: Removed parentheses
  try {
    const response = await axios.post(
      "https://96ef-2409-40e3-4062-3443-f56d-49e1-69a2-6fde.ngrok-free.app/ask-question",
      {
        question,
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
