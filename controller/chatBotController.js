import axios from "axios";

export const askQuestion = async (req, res) => {
  const { question } = req.body; // Corrected: Removed parentheses
  try {
    const response = await axios.post(
      "https://9a8a-2409-40d2-6c-d245-d85d-fd15-a45-46a2.ngrok-free.app/ask-question",
      {
        question,
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
