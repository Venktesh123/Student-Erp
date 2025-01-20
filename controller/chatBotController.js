import axios from "axios";

export const askQuestion = async (req, res) => {
  const { question } = req.body; // Corrected: Removed parentheses
  try {
    const response = await axios.post(
      "https://5109-2409-40e3-4063-9d3c-7586-efff-effd-5811.ngrok-free.app/ask-question",
      {
        question,
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
