import { useState } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

const mockResponses = [
  "Based on the analysis, the findings indicate normal anatomical structures with no acute abnormalities. The confidence level of 94% suggests high certainty in this assessment.",
  "The AI model examined multiple aspects including lung parenchyma, cardiac silhouette, mediastinal structures, and bone integrity. All parameters were within normal limits.",
  "For follow-up, I recommend routine monitoring as per standard clinical protocols. If any new symptoms develop, additional imaging may be warranted.",
  "The differential diagnosis in this case would be limited given the normal findings. However, clinical correlation with patient symptoms is always important.",
  "Key measurements show cardiac silhouette within normal size, clear lung fields bilaterally, and intact bone structures. These findings support the normal classification.",
  "While the AI analysis shows normal results, it's important to note that this is a supplementary tool. A qualified radiologist should review all findings for final interpretation.",
  "The model's confidence score reflects the clarity of the image and the absence of concerning features. Higher confidence typically correlates with clearer imaging and more definitive findings."
];

export function useMockChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: Date.now()
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: randomResponse,
        timestamp: Date.now()
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return {
    messages,
    sendMessage,
    isTyping
  };
}
