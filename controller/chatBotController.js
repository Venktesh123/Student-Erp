import axios from "axios";

export const askQuestion = async (req, res) => {
  const { question } = req.body; // Corrected: Removed parentheses
  try {
    const response = await axios.post("http://127.0.0.1:5000/ask-question", {
      question,
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
