import revechat from "../../assets/revechat.png"
import tts from "../../assets/tts.png"
import sustSms from "../../assets/sust-sms.jpg"
import attendance from "../../assets/attendance.jpg"
import stt from "../../assets/stt.png"
import shoesly from "../../assets/shoesly.jpg"
import optiify from "../../assets/optiify.png"
import quantiify from "../../assets/quantiify.png"
import lereve from "../../assets/lereve.png"
import foodBook from "../../assets/food-book.jpg"
import muktokathan from "../../assets/muktokathan.jpg"


export const projectData = [
  {
    id: 7,
    image: optiify,
    title: "Optiify",
    category: "company",
    link: "https://www.optiify.ai/",
    description: "AI CoPilot for building operations. LangGraph agents, a Neo4j equipment graph and RAG over site docs let teams book after-hours access, inspect HVAC faults and ask equipment questions in plain language."
  },
  {
    id: 8,
    image: quantiify,
    title: "Quantiify",
    category: "company",
    link: "https://www.quantiify.ai/",
    description: "AI takeoff from CAD/PDF drawings. YOLOv8 with SAHI detects legends and counts electrical, plumbing and civil symbols on large construction plans without missing small objects."
  },
  {
    id: 9,
    image: lereve,
    title: "Le Reve Virtual Try-On",
    category: "company",
    link: "https://www.lerevecraze.com/",
    description: "CatVTON virtual try-on so shoppers can see garments on a person image, plus a Temporal Fusion Transformer pipeline that forecasts production quantity and sales with attention-based interpretability."
  },
  {
    id: 1,
    image: revechat,
    title: "REVE CHAT",
    category: "company",
    link: "https://www.revechat.com/",
    description: "Omni-channel customer communication platform. Built GraphRAG, LightRAG, multimodal and agentic RAG with LangChain and hybrid BM25 + dense search, and improved the React dashboard."
  },
  {
    id: 2,
    image: tts,
    title: "উচ্চারণ (Bangla TTS)",
    category: "company",
    link: "https://read.bangla.gov.bd/",
    description: "Bangla text-to-speech for reading content aloud. Fine-tuned a VITS model so উচ্চারণ can synthesize natural Bengali speech from text."
  },
  {
    id: 4,
    image: stt,
    title: "কথা (Bangla STT)",
    category: "company",
    link: "https://voice.bangla.gov.bd/",
    description: "Real-time Bangla speech-to-text. Fine-tuned wav2vec 2.0 and Whisper with PEFT-LoRA for কথা, then evaluated on multiple test sets — including augmented data — to find model weaknesses."
  },
  {
    id: 3,
    image: sustSms,
    title: "SUST Student Management System",
    category: "personal",
    period: "Nov 2021 – Dec 2021",
    link: "https://github.com/ppaartha/SUST_Student_Management_System",
    description: "Web app for student, faculty and results. Admin can add, update and delete students and faculty, create departments and courses, and assign faculty to the right courses. Faculty enter marks for registered students; students view their results. Django, Python, HTML, CSS, Bootstrap."
  },
  {
    id: 5,
    image: attendance,
    title: "Automatic Attendance System",
    category: "personal",
    period: "Aug 2022 – Sep 2022",
    link: "https://github.com/ppaartha/Automatic-Attendance-System-Using-Face-Recognition",
    description: "Streamlit web app that recognizes faces from a webcam and marks attendance. Enrolled five photos per classmate, then used face-recognition to detect who is in front of the camera and log them as present. Python, computer vision, Streamlit."
  },
  {
    id: 6,
    image: shoesly,
    title: "Shoesly — E-commerce Website",
    category: "personal",
    period: "Jun 2022 – Aug 2022",
    link: "https://github.com/ppaartha/Shoesly-a-web-application",
    description: "Shoe store with User, Supplier, Admin and Bank API routes. Shoppers filter by price and category and pay with a bank account; admin takes a cut then pays the supplier; suppliers add stock and fulfill orders. Node.js, React.js, MongoDB, Express.js."
  },
  {
    id: 10,
    image: muktokathan,
    title: "Muktokathan — Chat App",
    category: "personal",
    period: "Nov 2021 – Dec 2021",
    link: "https://github.com/ppaartha/Muktokathan-A-Chat-app",
    description: "Android chat app to add friends and message them. Search users by name, email or phone, view and edit profiles, and post status updates visible to others. Android, Java, XML, Firebase."
  },
  {
    id: 11,
    image: foodBook,
    title: "Food Book",
    category: "personal",
    period: "Aug 2019 – Oct 2019",
    link: "https://github.com/ppaartha/FOOD-BOOK-",
    description: "Android recipe app where anyone can upload a recipe with description, cooking time and ingredients. Users can follow others, save recipes to their profile, react, comment and rate, and get notifications on follows, reactions and comments. Android, Java, XML, Firebase."
  },
];

export const projectNav=[
    {
        name:"company"
    },
    {
        name:"personal"
    }
]
