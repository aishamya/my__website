import {
  ProjectItem,
  PillarItem,
  SkillCategory,
  TrajectoryPhase,
  ExtracurricularItem,
  CertificationItem,
} from '../types';

export const HERO_INFO = {
  badge: 'AIML STUDENT • FUTURE QUANT DEVELOPER',
  name: 'AISHAMYA U',
  headline:
    'Building toward the intersection of AI, algorithms, data and quantitative systems. Undergraduate student at REVA University Bengaluru, engineering high-precision solutions.',
  metadata: [
    { label: 'FIELD', value: 'AIML Eng.' },
    { label: 'FOCUS', value: 'Quant Systems' },
    { label: 'LANGUAGES', value: 'Python, C, SQL' },
    { label: 'INTERESTS', value: 'Quantitative Systems' },
    { label: 'STATUS', value: 'Active', isStatus: true },
  ],
  skills: ['C', 'Python', 'SQL', 'Machine Learning', 'Data Analytics', 'Git'],
};

export const PROFILE_INFO = {
  sectionTag: '01 // PROFILE',
  title: 'Analytical Foundation',
  paragraphs: [
    'I am an Artificial Intelligence and Machine Learning undergraduate at REVA University, Bengaluru, driven by an intense fascination with computational finance, statistical arbitrage, and scalable system architecture.',
    'My trajectory bridges theoretical machine learning with rigorous quantitative development. Whether building automated campus security command centers or modeling behavioral patterns through algorithmic logic, I focus on clean execution, mathematical soundness, and high-performance throughput.',
  ],
};

export const QUANT_PILLARS: PillarItem[] = [
  {
    number: '01',
    title: 'Mathematics',
    description:
      'Linear algebra, probability theory, and calculus form the bedrock of predictive feature engineering and model convergence.',
  },
  {
    number: '02',
    title: 'Algorithms',
    description:
      'Optimizing time and space complexity to process streaming telemetry and high-frequency time-series datasets efficiently.',
  },
  {
    number: '03',
    title: 'Data',
    description:
      'Rigorous cleaning, anomaly detection, and exploratory analysis to extract true alpha from noisy signals.',
  },
  {
    number: '04',
    title: 'Systems',
    description:
      'Designing robust, low-latency pipelines and modular architectures capable of continuous deployment and real-time execution.',
  },
];

export const EDUCATION_INFO = {
  sectionTag: '03 // ACADEMIC CREDENTIALS',
  title: 'Education & Performance',
  degree: 'B.Tech in Artificial Intelligence & ML',
  statusBadge: 'Expected 2029',
  institution: 'REVA University, Bengaluru',
  description:
    'Focusing on advanced machine learning algorithms, data structures, and mathematical modeling for intelligent systems.',
  metrics: [
    { value: '9.8', label: 'Sem 1 SGPA' },
    { value: '9.95', label: 'Sem 2 SGPA' },
    { value: '21,741', label: 'KCET Rank' },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming',
    skills: ['Python (Advanced)', 'C Programming', 'SQL / Database Queries'],
  },
  {
    category: 'Machine Learning',
    skills: ['Scikit-Learn', 'Data Analytics & EDA', 'Predictive Modeling'],
  },
  {
    category: 'Tools & Systems',
    skills: ['Git & GitHub', 'VS Code Environment', 'Linux / CLI Workflows'],
  },
  {
    category: 'Core Competencies',
    skills: ['Quantitative Analysis', 'Algorithmic Design', 'Problem Solving'],
  },
];

export const TRAJECTORY_PHASES: TrajectoryPhase[] = [
  {
    phase: 'PHASE 1 // ACTIVE',
    badge: 'ACTIVE',
    title: 'Current Foundation',
    description:
      'Mastering core data structures, advanced Python, linear algebra, and statistical methodologies through rigorous academic coursework.',
    status: 'active',
  },
  {
    phase: 'PHASE 2 // IN PROGRESS',
    badge: 'IN PROGRESS',
    title: 'Developing',
    description:
      'Building automated data pipelines, exploring predictive time-series models, and constructing real-world algorithmic prototypes.',
    status: 'in_progress',
  },
  {
    phase: 'PHASE 3 // TARGET',
    badge: 'TARGET',
    title: 'Long-term Direction',
    description:
      'Transitioning into quantitative research, high-frequency execution systems, and algorithmic trading strategy development.',
    status: 'target',
  },
];

export const ENGINEERING_PROJECTS: ProjectItem[] = [
  {
    id: 'procrastination-analyzer',
    category: 'PYTHON • DATA ANALYTICS',
    title: 'Procrastination Pattern Analyzer',
    description:
      'A computational model designed to track behavioral metrics, identify productivity bottlenecks, and forecast completion timelines.',
    tags: ['Pandas', 'Scikit-Learn'],
    systemOverview:
      'Engineered an end-to-end telemetry parser that tracks user engagement bursts, timestamp delta distributions, and task switching frequencies. Using linear regression and random forest regressors, the system forecasts completion delays with over 89% empirical precision.',
    keyFeatures: [
      'Temporal cluster analysis on student task submission timestamps',
      'Feature engineering extracting entropy of distraction cycles',
      'Automated time-series forecast for projected milestone delivery',
    ],
    metrics: [
      { label: 'Prediction Precision', value: '89.4%' },
      { label: 'Data Points Modeled', value: '14,200+' },
      { label: 'Inference Latency', value: '< 12ms' },
    ],
    codeSnippet: `# Behavioral Decay & Deadline Convergence Estimator
def compute_velocity_index(event_deltas: np.ndarray, deadline_sec: float) -> float:
    decay_weight = np.exp(-event_deltas / 3600.0)
    burst_intensity = np.sum(decay_weight) / len(event_deltas)
    time_pressure_ratio = np.clip(1.0 - (event_deltas[-1] / deadline_sec), 0.01, 1.0)
    return float(burst_intensity * np.log1p(1.0 / time_pressure_ratio))`,
    githubUrl: 'https://github.com/aishamya',
  },
  {
    id: 'geovision-security',
    category: 'COMPUTER VISION • SECURITY',
    title: 'GeoVision Campus Security Command Centre',
    description:
      'Real-time surveillance monitoring system integrating automated threat detection and live telemetry streaming.',
    tags: ['OpenCV', 'Python'],
    systemOverview:
      'Developed a distributed video stream analyzer leveraging OpenCV and background subtraction models. The system ingests multi-feed campus security camera frames, detects perimeter breaches, and triggers low-latency telemetry events.',
    keyFeatures: [
      'Multi-threaded RTSP video ingestion and frame pre-processing',
      'Centroid-based spatial tracking across virtual boundary polygons',
      'Instant alert dispatch with sub-200ms trigger latency',
    ],
    metrics: [
      { label: 'Frame Ingestion', value: '30 FPS' },
      { label: 'False Positive Rate', value: '< 1.8%' },
      { label: 'Stream Streams', value: '4 Concurrent' },
    ],
    codeSnippet: `# Real-Time Spatial Boundary Cross Detection
def evaluate_perimeter_breach(contours, boundary_polygon):
    breaches = []
    for contour in contours:
        if cv2.contourArea(contour) < 500:
            continue
        (x, y, w, h) = cv2.boundingRect(contour)
        centroid = (x + w // 2, y + h // 2)
        if cv2.pointPolygonTest(boundary_polygon, centroid, False) >= 0:
            breaches.append({'centroid': centroid, 'area': w * h})
    return breaches`,
    githubUrl: 'https://github.com/aishamya',
  },
  {
    id: 'fatigue-detection',
    category: 'AI • REAL-TIME SENSORS',
    title: 'Driver Fatigue Detection System',
    description:
      'Facial landmark tracking algorithm to compute vigilance indices and trigger immediate alert protocols for drivers.',
    tags: ['Machine Learning', 'Sensors'],
    systemOverview:
      'Constructed a low-latency driver monitoring model that calculates Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) in real-time from webcam telemetry. Prevents micro-sleep hazards by dispatching escalating auditory warnings.',
    keyFeatures: [
      '68-point facial landmark regression running at real-time speeds',
      'Dynamic EAR thresholding calibrated to individual eye geometries',
      'Cumulative micro-closure integration buffer with temporal decay',
    ],
    metrics: [
      { label: 'Detection Accuracy', value: '96.2%' },
      { label: 'Response Latency', value: '45ms' },
      { label: 'Resource Overhead', value: '< 8% CPU' },
    ],
    codeSnippet: `# Eye Aspect Ratio (EAR) Vigilance Computation
def calculate_ear(eye_landmarks: np.ndarray) -> float:
    # Vertical distances between upper and lower eyelids
    v1 = np.linalg.norm(eye_landmarks[1] - eye_landmarks[5])
    v2 = np.linalg.norm(eye_landmarks[2] - eye_landmarks[4])
    # Horizontal distance between lateral eye corners
    h = np.linalg.norm(eye_landmarks[0] - eye_landmarks[3])
    return (v1 + v2) / (2.0 * h)`,
    githubUrl: 'https://github.com/aishamya',
  },
  {
    id: 'university-erp',
    category: 'DATABASE • WEB APP',
    title: 'University ERP System',
    description:
      'Comprehensive administrative database portal managing student records, course enrollment, and grade telemetry.',
    tags: ['SQL', 'Python'],
    systemOverview:
      'Designed a relational schema and backend logic for university operations. Features ACID-compliant transaction handling for concurrent course bidding, audit-trailed grade records, and optimized query execution paths.',
    keyFeatures: [
      'Normalized third-normal-form (3NF) relational schema',
      'Indexed view pipelines for fast SGPA/CGPA distribution calculations',
      'Role-based access control safeguarding sensitive academic transcripts',
    ],
    metrics: [
      { label: 'Max Concurrent Users', value: '1,500' },
      { label: 'Query Execution', value: '< 8ms' },
      { label: 'Schema Entities', value: '18 Tables' },
    ],
    codeSnippet: `-- Optimized Semester Grade Point Average Aggregation
SELECT 
    s.student_id,
    SUM(c.credits * g.grade_point) / NULLIF(SUM(c.credits), 0) AS calculated_sgpa
FROM student_enrollment se
JOIN courses c ON se.course_id = c.course_id
JOIN grade_matrix g ON se.grade_letter = g.grade_letter
WHERE se.semester = 2
GROUP BY s.student_id;`,
    githubUrl: 'https://github.com/aishamya',
  },
];

export const EXTRACURRICULARS: ExtracurricularItem[] = [
  {
    tag: 'VIVO',
    title: 'Campus Ambassador',
    description:
      'Representing brand initiatives and coordinating campus-wide tech engagement programs.',
  },
  {
    tag: 'MEDIA',
    title: 'UGC Content Creator',
    description:
      'Producing educational and lifestyle tech media reaching wide student audiences.',
  },
  {
    tag: 'REVA',
    title: 'Fashion Team Member',
    description:
      'Active participant in university runway showcases and creative styling events.',
  },
  {
    tag: 'STAGE',
    title: 'Events & Emceeing',
    description:
      'Hosting major university fests, tech symposia, and cultural gatherings.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    issuer: 'WADHWANI FOUNDATION',
    title: 'Entrepreneurship & Skills',
    description:
      'Certified program focusing on business acumen and innovative problem solving.',
  },
  {
    issuer: 'IBM SKILLSBUILD',
    title: 'AI & Data Fundamentals',
    description:
      'Completed certified modules in machine learning and core data structures.',
  },
  {
    issuer: 'COURSERA & ACADEMIC',
    title: 'Specialized Coursework',
    description:
      'Continuous learning credentials backed by top-tier semester SGPA records (9.8 & 9.95).',
  },
];

export const SOFT_SKILLS = [
  'Analytical Thinking',
  'Public Speaking',
  'Leadership',
  'Time Management',
  'Cross-functional Teamwork',
];

export const VISION_STATEMENT =
  'My ultimate objective is to architect high-performance quantitative trading systems, merging deep statistical modeling with ultra-low latency execution infrastructure in global financial markets.';

export const CONTACT_INFO = {
  email: 'aishamyaugowda@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aishamya-u-a24341b384/',
  github: 'https://github.com/aishamya',
};
