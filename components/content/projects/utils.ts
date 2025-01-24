export const projects = [
  {
    title: "buztop",
    description:
      "A Scalable Newsletter Application based on a Pub/Sub architecture using Next.js and Cloudflare Queues, designed to efficiently handle high volumes of subscribers and email dispatches. Containerized the application using Docker to ensure production-ready performance and scalability.",
    img: "/buztop.png", // Add an image path if available
    href: "/projects/buztop",
    preview: "", // Add a live preview link if available
    github: "https://github.com/par4m/buztop", // Add GitHub link if available
    alt: "buztop",
    platform: "Web",
    stack: "Next.js, Cloudflare Queues, Docker, Pub/Sub Architecture",
    delay: 0.1,
  },
  {
    title: "AICare",
    description:
      "An AI-powered healthcare platform using RAG for efficient medical data processing, with LangChain and Pinecone for document retrieval. Integrated AI-generated embeddings via neural networks to provide personalized health insights and symptom analysis.",
    img: "/aicare.png", // Add an image path if available
    href: "/projects/aicare",
    preview: "", // Add a live preview link if available
    github: "https://github.com/par4m/aicare", // Add GitHub link if available
    alt: "AICare",
    platform: "Web",
    stack: "RAG, LangChain, Pinecone, Neural Networks, AI Embeddings",
    delay: 0.2,
  },
  {
    title: "spotAI - Smart Parking Management",
    description:
      "A Smart Parking Management app utilizing Next.js, MongoDB, and React. The project includes a simulator that uses Machine Vision to scan license plates. Built with Python and YOLO V8 AI model, it integrates OpenCV, RoboFlow, and EasyOCR with NextJS to simulate a car driving through a parking garage and a camera reading the plate.",
    img: "/spotai.png", // Add an image path if available
    href: "/projects/spotai",
    preview: "", // Add a live preview link if available
    github: "https://github.com/par4m/spotai", // Add GitHub link if available
    alt: "spotAI",
    platform: "Web",
    stack:
      "Next.js, MongoDB, React, Python, YOLO V8, OpenCV, RoboFlow, EasyOCR",
    delay: 0.3,
  },
  {
    title: "felt - Multimodal AI Model",
    description:
      "A multimodal AI model built from scratch using PyTorch. The model accepts a video as input and predicts its sentiment and emotion. Features include text, video, and audio encoding, multimodal fusion, and emotion/sentiment classification. After training, the model is deployed as a SaaS, allowing users to run inference on their videos through an API.",
    img: "/felt.png", // Add an image path if available
    href: "/projects/felt",
    preview: "", // Add a live preview link if available
    github: "https://github.com/par4m/felt", // Add GitHub link if available
    alt: "felt",
    platform: "Web",
    stack:
      "PyTorch, Multimodal AI, Sentiment Analysis, Emotion Classification, SaaS",
    delay: 0.4,
  },
];
