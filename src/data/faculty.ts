interface Education {
  degree: string;
  field: string;
  institution: string;
  year: string;
}

interface WorkExperience {
  period: string;
  position: string;
  institution: string;
}

interface Award {
  name: string;
  year: string;
}

interface Publication {
  title: string;
  journal: string;
  year: string;
}

interface Course {
  code: string;
  title: string;
}

export interface Instructor {
  id: number;
  name: string;
  telephone: string;
  office: number;
  email: string;
  webpage?: string; // Optional
  education: Education[];
  workExperience: WorkExperience[];
  honorsAndAwards?: Award[]; // Optional
  researchInterests?: string[]; // Optional
  selectedPublications?: Publication[]; // Optional
  professionalService?: string[]; // Optional
  coursesTaught: Course[];
  projects?: number[]; // Optional
}

const instructors: Instructor[] = [
  {
    id: 1402,
    name: "Yifei Zhu",
    telephone: "+86-21-34206765 Ext. 4401",
    office: 440,
    email: "yifei.zhu@sjtu.edu.cn",
    webpage: "https://sites.ji.sjtu.edu.cn/yifei-zhu/",
    education: [
      {
        degree: "Ph.D.",
        field: "Computer Science",
        institution: "Simon Fraser University, Canada",
        year: "2020",
      },
      {
        degree: "M.Phil.",
        field: "Innovative Technologies Leadership (Internet of Things)",
        institution: "Hong Kong University of Science and Technology, HK China",
        year: "2015",
      },
      {
        degree: "B.E.",
        field: "Electrical Engineering and Automation",
        institution: "Xi’an Jiao Tong University",
        year: "2012",
      },
    ],
    workExperience: [
      {
        period: "2020 – present",
        position: "Assistant Professor",
        institution: "UM-SJTU Joint Institute, Shanghai Jiao Tong Univ.",
      },
      {
        period: "2018 – 2018",
        position: "Research Assistant",
        institution: "Hong Kong Polytechnic University",
      },
    ],
    honorsAndAwards: [
      { name: "MITACS Globalink Research Award", year: "2018" },
      { name: "SFU CMPT Graduate Fellowship", year: "2015, 2017, 2018" },
      { name: "SFU FAS Graduate Fellowship", year: "2017" },
      { name: "SFU Special Graduate Entrance Scholarship", year: "2016" },
      { name: "XJTU Special Undergraduate Entrance Scholarship", year: "2008" },
    ],
    researchInterests: [
      "Cloud/edge Computing",
      "Multimedia Networking",
      "Distributed Machine Learning Systems",
      "Network Economics",
    ],
    selectedPublications: [
      {
        title:
          "Car4Pac: Last Mile Parcel Delivery through Intelligent Car Trip Sharing",
        journal: "IEEE Transactions on Intelligent Transportation Systems",
        year: "2019",
      },
      {
        title:
          "When Crowd Meets Big Video Data: Cloud-Edge Collaborative Transcoding for Personal Livecast",
        journal: "IEEE Transactions on Network Science and Engineering",
        year: "2018",
      },
      {
        title:
          "Truthful Online Auction Towards Maximized Instance Utilization in the Cloud",
        journal: "IEEE/ACM Transaction on Networking",
        year: "2018",
      },
    ],
    professionalService: [
      "Reviewer for ACM/IEEE Transactions on Networking",
      "IEEE Journal on Selected Areas in Communications",
      "IEEE Transactions on Mobile Computing",
      "IEEE Transactions on Big Data",
      "IEEE Internet of Things Journal",
      "IEEE Transactions on Network and Service Management",
      "IEEE INFOCOM",
      "IEEE E-Energy",
      "ACM MMSys",
      "IEEE ICDCS",
      "ACM/IEEE IWQoS",
    ],
    coursesTaught: [
      { code: "VG 101", title: "Introduction to Computers and Programming" },
      { code: "VE 444", title: "Networks" },
    ],
    projects: [1, 2, 3],
  },
  {
    id: 3686,
    name: "Yanming Wang",
    telephone: "+86-21-34206765 Ext.5251",
    office: 525,
    email: "yanming.wang@sjtu.edu.cn",
    webpage: "https://sites.ji.sjtu.edu.cn/yanming-wang",
    education: [
      {
        degree: "Ph.D.",
        field: "Materials Science and Engineering",
        institution: "Stanford University, United States",
        year: "2012-2016",
      },
      {
        degree: "Ph.D. minor",
        field: "Mechanical Engineering",
        institution: "Stanford University, United States",
        year: "2012-2016",
      },
      {
        degree: "Ph.D. minor",
        field: "Electrical Engineering",
        institution: "Stanford University, United States",
        year: "2012-2016",
      },
      {
        degree: "M.S.",
        field: "Materials Science and Engineering",
        institution: "Stanford University, United States",
        year: "2010-2012",
      },
      {
        degree: "B.E.",
        field: "Materials Science and Engineering",
        institution: "Shanghai Jiao Tong University, China",
        year: "2006-2010",
      },
    ],
    workExperience: [
      {
        period: "2020 – present",
        position: "Assistant Professor",
        institution:
          "UM-SJTU Joint Institute, Shanghai Jiao Tong University, Shanghai, China",
      },
      {
        period: "2017 – 2020",
        position: "Postdoctoral Research Associate",
        institution:
          "Department of Materials Science and Engineering, Massachusetts Institute of Technology, Cambridge, Massachusetts, United States",
      },
      {
        period: "2016 – 2017",
        position: "Postdoctoral Research Fellow",
        institution:
          "Department of Mechanical Engineering, Stanford University, Stanford, California, United States",
      },
    ],
    honorsAndAwards: [
      { name: "Kwang-Hua Scholarship", year: "" },
      {
        name: "China Aerospace Science and Technology Corporation Scholarship",
        year: "",
      },
      {
        name: "College Graduate Excellence Award of Shanghai District",
        year: "",
      },
    ],
    researchInterests: [
      "Multi-scale and multi-physics modeling of nanomaterials synthesis and deformation",
      "Modeling of polymeric and amorphous materials for energy and electronic applications",
      "Design of novel functional materials via machine learning assisted modeling and simulations",
    ],
    selectedPublications: [
      {
        title:
          "Collector Droplet Behavior during Formation of Nanowire Junctions",
        journal: "J. Phys. Chem. Lett.",
        year: "2020",
      },
      {
        title:
          "Topological Origin of Strain Induced Damage of Elastomers by Bond Breaking",
        journal: "Extreme Mech. Lett.",
        year: "2020",
      },
      {
        title:
          "Thermodynamic-Driven Full-Colour Quantum Dot Patterning for Light-Emitting Diodes beyond the Eye-Limiting Resolution",
        journal: "Nat. Comm.",
        year: "2020",
      },
      {
        title:
          "Toward Designing Highly Conductive Polymer Electrolytes by Machine Learning Assisted Coarse-Grained Molecular Dynamics",
        journal: "Chem. Mater.",
        year: "2020",
      },
      {
        title:
          "Modelling the Effect of Chemical Variations on Lithium Transport in Poly(ethylene oxide)-Based Polymer Electrolytes at High Salt Concentration",
        journal: "Chem. Mater.",
        year: "2020",
      },
      {
        title:
          "Phase-Field Investigation of the Stages in Radial Growth of Core-Shell Ge/Ge1-xSnx Nanowires",
        journal: "Nanoscale",
        year: "2019",
      },
      {
        title:
          "Ionic Highways in Pyrazolium Cross-Linked Triptycene Polymers for Anion Exchange Membrane Fuel Cells",
        journal: "J. Am. Chem. Soc.",
        year: "2019",
      },
      {
        title:
          "Graph Dynamical Networks for Unsupervised Learning of Atomic Scale Dynamics in Materials",
        journal: "Nat. Comm.",
        year: "2019",
      },
      {
        title:
          "Revealing the Cluster-Cloud and Its Role in Nanocrystallization",
        journal: "Adv. Mater.",
        year: "2019",
      },
      {
        title:
          "Coupling of Coherent Misfit Strain and Composition Distributions in Core-shell Ge/Ge1-xSnx Nanowire Light Emitters",
        journal: "Mater. Today Nano",
        year: "2019",
      },
      {
        title:
          "Stability of Nano-Fin Arrays Against Collapse Predicted by Phase Field Modeling",
        journal: "J. Vac. Sci. Technol. B",
        year: "2018",
      },
      {
        title:
          "Anisotropy Effect on Strain Induced Instability during Growth of Heteroepitaxial Films",
        journal: "J. Mater. Sci.",
        year: "2018",
      },
      {
        title:
          "Discrete Shear Band Plasticity through Dislocation Activities in Body-Centered Cubic Tungsten Nanowires",
        journal: "Sci. Rep.",
        year: "2018",
      },
      {
        title:
          "Atomistic Mechanisms of Orientation and Temperature Dependence in Gold-Catalyzed Silicon Growth",
        journal: "J. Appl. Phys.",
        year: "2017",
      },
      {
        title:
          "Reliability of Single Crystal Silver Nanowire-Based Systems: Stress Assisted Instabilities",
        journal: "ACS Nano",
        year: "2017",
      },
      {
        title:
          "Phase Field Model for Morphological Transition in Nanowire Vapor-Liquid-Solid Growth",
        journal: "Cryst. Growth Des.",
        year: "2017",
      },
      {
        title: "Au-Ge MEAM Potential Fitted to the Binary Phase Diagram",
        journal: "Modelling Simul. Mater. Sci. Eng.",
        year: "2016",
      },
      {
        title:
          "Spontaneous, Defect-Free Kinking via Capillary Instability during Vapor-Liquid-Solid Nanowire Growth",
        journal: "Nano Lett.",
        year: "2016",
      },
      {
        title: "Shape-Controlled, Self-Wrapped Carbon Nanotube 3D Electronics",
        journal: "Adv. Sci.",
        year: "2015",
      },
      {
        title:
          "A Three-Dimensional Phase Field Model for Nanowire Growth by the Vapor-Liquid-Solid Mechanism",
        journal: "Modelling Simul. Mater. Sci. Eng.",
        year: "2014",
      },
    ],
    professionalService: [
      "Member of American Physical Society",
      "American Chemistry Society",
      "Materials Research Society",
      "American Vacuum Society",
      "The Electrochemical Society",
      "Sigma Xi, the Scientific Research Honor Society",
    ],
    coursesTaught: [],
    projects: [4, 5, 6],
  },
  {
    id: 60729, // Assuming an ID for the new instructor
    name: "Hanyang Zhuang",
    telephone: "+86-21-34206045 Ext. 2181",
    office: 218,
    email: "zhuanghany11@sjtu.edu.cn",
    webpage: "", // No webpage provided
    education: [
      {
        degree: "Ph.D.",
        field: "Mechanical Engineering",
        institution: "Shanghai Jiao Tong University",
        year: "2018",
      },
      {
        degree: "B.S.",
        field: "Mechanical Engineering",
        institution: "Shanghai Jiao Tong University",
        year: "2011",
      },
    ],
    workExperience: [
      {
        period: "2022 – present",
        position: "Assistant Research Professor",
        institution: "UM-SJTU Joint Institute, SJTU",
      },
      {
        period: "2020 – 2022",
        position: "Postdoctoral Researcher",
        institution: "UM-SJTU Joint Institute, SJTU",
      },
      {
        period: "2019 – 2020",
        position: "Engineer",
        institution: "Alliance Automotive Research & Development (Shanghai)",
      },
      {
        period: "2018 – 2019",
        position: "Engineer",
        institution: "Pan Asia Technical Automotive Center",
      },
    ],
    honorsAndAwards: [
      {
        name: "China Excellent Innovation & Entrepreneurship Postdoc",
        year: "2021",
      },
      { name: "SJTU Chenxing Postdoc", year: "2021" },
      { name: "Shanghai Postdoc Daily Subsidization", year: "2020" },
      { name: "SJTU Excellent Graduate Student", year: "2018" },
    ],
    researchInterests: [],
    selectedPublications: [
      {
        title:
          "An Adaptive Gradient Balanced Mechanism for the End-to-End Steering Estimation",
        journal: "IEEE Transactions on Intelligent Transportation Systems",
        year: "2022",
      },
      {
        title:
          "Generalizable 3D Descriptor with Overlap Attention for Point Cloud Registration",
        journal: "IEEE Robotics and Automation Letters",
        year: "2022",
      },
      {
        title:
          "Wavelet Transform-Based High-Definition Map Construction from a Panoramic Camera",
        journal: "Journal of Shanghai Jiao Tong University (Science)",
        year: "2021",
      },
      {
        title:
          "Vehicle tracking enhancement based on the lane orientation priori from digital maps",
        journal: "Acta Geodaetica et Cartographica Sinica",
        year: "2021",
      },
      {
        title:
          "Prioritized Experience Replay-Based Deep Q Learning: Multiple-Reward Architecture for Highway Driving Decision Making",
        journal: "IEEE Robotics & Automation Magazine",
        year: "2021",
      },
      {
        title:
          "Stackelberg-Game-Based Intelligent Vehicle Decision Method for Merging Scenarios",
        journal: "Journal of Shanghai Jiao Tong University",
        year: "2021",
      },
      {
        title:
          "Model-Predictive-Control-based Simultaneous Trajectory Tracking and Speed Control for Intelligent Vehicles",
        journal:
          "The 27th International Conference on Mechatronics and Machine Vision in Practice (M2VIP2021)",
        year: "2021",
      },
      {
        title:
          "Lateral Control Method of the Follower Vehicle in Local Decentralized Platooning",
        journal:
          "The 5th CAA International Conference on Vehicular Control and Intelligence (CVCI2021)",
        year: "2021",
      },
      {
        title:
          "Semantic-based Road Segmentation for High-Definition Map Construction",
        journal:
          "Fifth International Conference on Cognitive Systems and Information Processing (ICCSIP 2020)",
        year: "2020",
      },
      {
        title:
          "Semantic Grid Map based LiDAR Localization in Highly Dynamic Urban Scenarios",
        journal:
          "12th IROS Workshop on Planning, Perception, Navigation for Intelligent Vehicle",
        year: "2020",
      },
    ],
    professionalService: [
      "2022 Journal of SJTU “Intelligent Transportation System” special issue, Guest Editor",
      "2020 Journal of SJTU “Intelligent Connected Vehicle” special issue, Guest Editor",
    ],
    coursesTaught: [],
    projects: [7, 8, 9],
  },
  {
    id: 28819, // Assuming an ID for the new instructor
    name: "An Zou",
    telephone: "+86-21-34206765 Ext.4211",
    office: 421,
    email: "an.zou@sjtu.edu.cn",
    webpage: "https://sites.ji.sjtu.edu.cn/zouan/",
    education: [
      {
        degree: "Ph.D.",
        field: "Electrical Engineering",
        institution: "Washington University in St. Louis",
        year: "2021",
      },
      {
        degree: "M.E.",
        field: "Electrical Engineering",
        institution: "Washington University in St. Louis",
        year: "2019",
      },
      {
        degree: "M.E.",
        field: "Control Science and Engineering",
        institution: "Harbin Institute of Technology",
        year: "2015",
      },
      {
        degree: "B.E.",
        field: "Automation",
        institution: "Harbin Institute of Technology",
        year: "2013",
      },
    ],
    workExperience: [
      {
        period: "2021 – present",
        position: "Assistant Professor",
        institution: "UM-SJTU Joint Institute, Shanghai Jiao Tong University",
      },
      {
        period: "2016 – 2021",
        position: "Research Assistant",
        institution: "Washington University in St. Louis",
      },
      {
        period: "2020",
        position: "Research Intern",
        institution: "Facebook",
      },
      {
        period: "2012 – 2015",
        position: "Research Assistant",
        institution: "Harbin Institute of Technology",
      },
    ],
    honorsAndAwards: [
      { name: "MLCAD Best Paper Nomination (First author)", year: "2020" },
      { name: "Richard Newton Young Student Fellow Award", year: "2017" },
      { name: "DAC Best Paper Nomination (First author)", year: "2017" },
      { name: "Graduate Fellowship, The Ohio State University", year: "2015" },
      { name: "China National Scholarship", year: "2014" },
    ],
    researchInterests: [
      "Computer Architecture",
      "Digital Circuit Designs",
      "Embedded System",
      "Artificial Intelligence",
    ],
    selectedPublications: [
      {
        title:
          "Voltage-Stacked Power Delivery Systems: Reliability, Efficiency, and Power Management",
        journal:
          "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems",
        year: "2020",
      },
      {
        title:
          "F-LEMMA: Fast Learning-based Energy Management for Multi/Many-core Processors",
        journal:
          "2020 ACM/IEEE 2nd Workshop on Machine Learning for CAD (MLCAD)",
        year: "2020",
      },
      {
        title:
          "Real-Time Scheduling upon a Host-Centric Acceleration Architecture with Data Offloading",
        journal:
          "IEEE Real-Time and Embedded Technology and Applications Symposium",
        year: "2020",
      },
      {
        title:
          "Voltage-stacked GPUs: A Control Theory Driven Cross-Layer Solution for Practical Voltage Stacking in GPUs",
        journal:
          "2018 51st Annual IEEE/ACM International Symposium on Microarchitecture",
        year: "2018",
      },
      {
        title:
          "Efficient and Reliable Power Delivery in Voltage-Stacked Manycore System with Hybrid Charge-Recycling Regulators",
        journal: "2018 55th ACM/ESDA/IEEE Design Automation Conference",
        year: "2018",
      },
      {
        title:
          "Ivory: Early-Stage Design Space Exploration Tool for Integrated Voltage Regulator",
        journal: "Proceedings of the 54th Annual Design Automation Conference",
        year: "2017",
      },
      {
        title:
          "Analysis Calculation and Testing of Rotary Inductosyn Angle Measuring Errors",
        journal: "Proceedings of the 33rd Chinese Control Conference",
        year: "2014",
      },
      {
        title:
          "The Design and Implementation of Universal Interface Circuit for Photoelectric Encoder",
        journal:
          "Proceeding of the 11th World Congress on Intelligent Control and Automation",
        year: "2014",
      },
    ],
    professionalService: [
      "External Reviewer Design Automation Conference (DAC) (2018-2020)",
      "Reviewer Journal of Signal Processing Systems (2020)",
    ],
    coursesTaught: [
      {
        code: "VE373",
        title:
          "Design of Microprocessor Based Systems (Co-Instructor with Prof. Gang Zheng), UM-SJTU Joint Institute",
      },
      {
        code: "ESE 5690",
        title:
          "Hardware Acceleration for Machine Learning (Teaching Assistant), Washington University in St. Louis",
      },
    ],
    projects: [10, 11, 12], // No project IDs provided
  },
  {
    id: 92, // Assuming an ID for the new instructor
    name: "Peisen Huang",
    telephone: "+86-21-34206765 Ext. 5691",
    office: 569,
    email: "peisen.huang@sjtu.edu.cn",
    webpage: "", // No webpage provided
    education: [
      {
        degree: "Dr.Eng.",
        field: "Precision Engineering and Mechatronics",
        institution: "Tohoku University, Japan",
        year: "1995",
      },
      {
        degree: "Ph.D.",
        field: "Mechanical Engineering",
        institution: "University of Michigan, Ann Arbor",
        year: "1993",
      },
      {
        degree: "M.E.",
        field: "Precision Engineering",
        institution: "Tohoku University, Japan",
        year: "1993",
      },
      {
        degree: "B.E.",
        field: "Precision Instrumentation Engineering",
        institution: "Shanghai Jiao Tong University",
        year: "1984",
      },
    ],
    workExperience: [
      {
        period: "2010 – present",
        position: "Professor",
        institution:
          "School of Mechanical Engineering, Shanghai Jiao Tong Univ.",
      },
      {
        period: "2007 – present",
        position: "Professor of Mechanical Engineering",
        institution: "UM-SJTU Joint Institute",
      },
      {
        period: "2008 – 2012",
        position: "Professor",
        institution:
          "Department of Mechanical Engineering, Stony Brook University",
      },
      {
        period: "1999 – 2008",
        position: "Associate Professor",
        institution:
          "Department of Mechanical Engineering, Stony Brook University",
      },
      {
        period: "1993 – 1999",
        position: "Assistant Professor",
        institution:
          "Department of Mechanical Engineering, Stony Brook University",
      },
    ],
    honorsAndAwards: [
      { name: "Chair Professor, Shanghai Jiao Tong University", year: "2010" },
      {
        name: "SUNY Research Foundation Technology Licensing Award",
        year: "2005",
      },
      {
        name: "JSPE Award, Japan Society for Precision Engineering",
        year: "1994",
      },
    ],
    researchInterests: [],
    selectedPublications: [
      {
        title:
          "A Novel 3D Sensory System for Robot-Assisted Mapping of Cluttered Urban Search and Rescue Environments",
        journal: "Journal of Intelligent Service Robots",
        year: "2010",
      },
      {
        title: "Face recognition based on fringe pattern analysis",
        journal: "Optical Engineering",
        year: "2010",
      },
      {
        title: "Absolute phase technique for the Fourier transform method",
        journal: "Optical Engineering",
        year: "2009",
      },
      {
        title:
          "High resolution tracking of non-rigid 3D motion of densely sampled 3D data using harmonic maps",
        journal: "International Journal of Computer Vision",
        year: "2008",
      },
      {
        title:
          "Phase error compensation for a 3-D shape measurement system based on the phase shifting method",
        journal: "Optical Engineering",
        year: "2007",
      },
      {
        title: "High-resolution, real-time three-dimensional shape measurement",
        journal: "Optical Engineering",
        year: "2006",
      },
      {
        title: "Novel method for structured light system calibration",
        journal: "Optical Engineering",
        year: "2006",
      },
      {
        title: "Fast three-step phase-shifting algorithm",
        journal: "Applied Optics",
        year: "2006",
      },
      {
        title: "Wavelet-based pavement distress detection and evaluation",
        journal: "Optical Engineering",
        year: "2006",
      },
      {
        title:
          "Color phase-shifting technique for three-dimensional shape measurement",
        journal: "Optical Engineering",
        year: "2006",
      },
    ],
    professionalService: [
      "Chair of SPIE Conferences on Optical Metrology and Inspection (2006-2010)",
    ],
    coursesTaught: [
      { code: "VG 100", title: "Introduction to Engineering" },
      { code: "VM 350", title: "Design and Manufacturing II" },
      { code: "VM 450", title: "Design and Manufacturing III" },
      {
        code: "MEC 500",
        title: "Introduction to Computer-Integrated Design and Manufacturing",
      },
      { code: "MEC 579", title: "Optical Measurement" },
      { code: "MEC 450/550", title: "Mechatronics" },
      { code: "MEC 411", title: "Control System Design and Analysis" },
    ],
    projects: [], // No project IDs provided
  },
  {
    id: 60799,
    name: "Milias Liu",
    telephone: "+86-21-34206045 Ext. 4071",
    office: 407,
    email: "milias.liu@sjtu.edu.cn",
    webpage: "", // No webpage provided
    education: [
      {
        degree: "Ph.D. (Dr. rer. nat.)",
        field: "Chemistry",
        institution: "RWTH Aachen University, Germany",
        year: "2014",
      },
      {
        degree: "Chemistry Diploma ≈ M.S.",
        field: "Chemistry",
        institution: "RWTH Aachen University",
        year: "2010",
      },
      {
        degree: "Chemistry pre-Diploma ≈ B.S.",
        field: "Chemistry",
        institution: "RWTH Aachen University",
        year: "2007",
      },
    ],
    workExperience: [
      {
        period: "Since 2022",
        position: "Assistant Teaching Professor",
        institution: "UM-SJTU Joint Institute, SJTU",
      },
      {
        period: "2014 – 2022",
        position: "Various industrial positions",
        institution: "Application of material characterization technologies",
      },
    ],
    honorsAndAwards: [], // No honors and awards provided
    researchInterests: [], // No research interests provided
    selectedPublications: [], // No selected publications provided
    professionalService: [], // No professional service provided
    coursesTaught: [
      { code: "CHEM2090J", title: "Chemistry" },
      { code: "CHEM2100J", title: "Chemistry" },
      { code: "ENGR1000J", title: "Introduction to Engineering" },
      { code: "MSE3600J", title: "Materials Lab I" },
      { code: "MSE3650J", title: "Materials Lab II" },
      { code: "MSE4820J", title: "Principles of Materials Processing" },
    ],
    projects: [], // No project IDs provided
  },
  {
    id: 139,
    name: "Jigang Wu",
    telephone: "+86-21-34206765 Ext. 4353",
    office: 435,
    email: "jigang.wu@sjtu.edu.cn",
    webpage: "http://umji.sjtu.edu.cn/~jgwu",
    education: [
      {
        degree: "Ph.D.",
        field: "Electrical Engineering",
        institution: "California Institute of Technology",
        year: "2008",
      },
      {
        degree: "M.S.",
        field: "Electrical Engineering",
        institution: "California Institute of Technology",
        year: "2005",
      },
      {
        degree: "M.S.",
        field: "Physics",
        institution: "Tsinghua University",
        year: "2004",
      },
      {
        degree: "B.S.",
        field: "Applied Physics",
        institution: "Tsinghua University",
        year: "2001",
      },
    ],
    workExperience: [
      {
        period: "2011 – present",
        position: "Assistant Professor, Electrical Engineering",
        institution: "UM-SJTU Joint Institute",
      },
      {
        period: "2010 – 2011",
        position: "Research Engineer, Department of Electrical Engineering",
        institution: "Caltech",
      },
      {
        period: "2009 – 2010",
        position: "Postdoctoral Scholar, Department of Electrical Engineering",
        institution: "Caltech",
      },
    ],
    honorsAndAwards: [], // No honors and awards provided
    researchInterests: [], // No research interests provided
    selectedPublications: [
      {
        title:
          "Characterization of Talbot pattern illumination for scanning optical microscopy",
        journal: "Optical Engineering",
        year: "2013",
      },
      {
        title:
          "Optical imaging techniques in microfluidics and their applications",
        journal: "Lab on a Chip",
        year: "2012",
      },
      {
        title:
          "Focal plane tuning in wide-field-of-view microscope with Talbot pattern illumination",
        journal: "Optics Letters",
        year: "2011",
      },
      {
        title:
          "Ex vivo optical coherence tomography imaging of collector channels with a scanning endoscopic probe",
        journal: "Investigative Ophthalmology & Visual Science",
        year: "2011",
      },
      {
        title: "Focus grid generation by in-line holography",
        journal: "Optics Express",
        year: "2010",
      },
      {
        title:
          "A wide field-of-view microscope based on holographic focus grid illumination",
        journal: "Optics Letters",
        year: "2010",
      },
      {
        title:
          "Manual-scanning optical coherence tomography probe based on position tracking",
        journal: "Optics Letters",
        year: "2009",
      },
      {
        title:
          "The application of Fresnel zone plate based projection in optofluidic microscopy",
        journal: "Optics Express",
        year: "2008",
      },
      {
        title:
          "Handheld forward-imaging needle endoscope for ophthalmic optical coherence tomography inspection",
        journal: "Journal of Biomedical Optics Letters",
        year: "2008",
      },
      {
        title:
          "Harmonically matched grating-based full-field quantitative high-resolution phase microscope for observing dynamics of transparent biological samples",
        journal: "Optics Express",
        year: "2007",
      },
      {
        title:
          "Images of spinal nerves and adjacent structures with optical coherence tomography: preliminary animal studies",
        journal: "The Journal of Pain",
        year: "2007",
      },
      {
        title:
          "Full field phase imaging using a harmonically matched diffraction grating pair based homodyne quadrature interferometer",
        journal: "Applied Physics Letters",
        year: "2007",
      },
      {
        title:
          "Methods and application areas of endoscopic optical coherence tomography",
        journal: "Journal of Biomedical Optics",
        year: "2006",
      },
      {
        title:
          "Slanted hole array beam profiler (SHArP) — a high-resolution portable beam profiler based on a linear aperture array",
        journal: "Optics Letters",
        year: "2006",
      },
      {
        title:
          "Characterization of light collection through a subwavelength aperture from a point source",
        journal: "Optics Express",
        year: "2006",
      },
      {
        title:
          "Molecular contrast optical coherence tomography: a pump-probe scheme using indocyanine green as a contrast agent",
        journal: "Journal of Biomedical Optics",
        year: "2006",
      },
      {
        title:
          "Harmonically-related diffraction gratings-based interferometer for quadrature phase measurements",
        journal: "Optics Express",
        year: "2006",
      },
      {
        title:
          "Paried-angle-rotation scanning optical coherence tomography forward-imaging probe",
        journal: "Optics Letters",
        year: "2006",
      },
      {
        title:
          "Particle-fixed Monte Carlo model for optical coherence tomography",
        journal: "Optics Express",
        year: "2005",
      },
      {
        title:
          "A cylindrical rod ultrasonic motor with 1 mm diameter and its application in endoscopic OCT",
        journal: "Chinese Science Bulletin",
        year: "2005",
      },
      {
        title:
          "Spectral shaping in rapid scanning optical delay line of optical coherence tomography",
        journal: "Chinese Physics Letters",
        year: "2003",
      },
    ],
    professionalService: [
      "Serving as reviewer for professional journals, including optics letters, optics express, optics communications, and IEEE transactions on medical imaging",
    ],
    coursesTaught: [
      { code: "CHEM2090J", title: "Chemistry" },
      { code: "CHEM2100J", title: "Chemistry" },
      { code: "ENGR1000J", title: "Introduction to Engineering" },
      { code: "MSE3600J", title: "Materials Lab I" },
      { code: "MSE3650J", title: "Materials Lab II" },
      { code: "MSE4820J", title: "Principles of Materials Processing" },
    ],
    projects: [], // No project IDs provided
  },
  {
    id: 104,
    name: "Chengbin Ma",
    telephone: "+86-21-54741175",
    office: 420,
    email: "chbma@sjtu.edu.cn",
    webpage: "http://umji.sjtu.edu.cn/lab/dsc",
    education: [
      {
        degree: "Ph.D.",
        field: "Electrical Engineering",
        institution: "The University of Tokyo",
        year: "2004",
      },
      {
        degree: "M.S.",
        field: "Electrical Engineering",
        institution: "The University of Tokyo",
        year: "2001",
      },
      {
        degree: "B.S.",
        field: "Industrial Automation",
        institution: "East China University of Science and Technology",
        year: "1997",
      },
    ],
    workExperience: [
      {
        period: "2010.07 – present",
        position: "Joint Faculty Appointment, School of Mechanical Engineering",
        institution: "Shanghai Jiao Tong University",
      },
      {
        period: "2008.08 – present",
        position:
          "Assistant Professor, Electrical Engineering and Computer Science",
        institution: "UM-SJTU Joint Institute, Shanghai Jiao Tong University",
      },
      {
        period: "2006.11 – 2008.03",
        position:
          "Postdoctoral Research Assistant & Associate Director, IMS-Mechatronics laboratory",
        institution:
          "Department of Mechanical and Aeronautical Engineering, University of California Davis",
      },
      {
        period: "2004.10 – 2006.10",
        position: "R&D Researcher, Servo Laboratory",
        institution: "Fanuc Limited, Yamanashi, Japan",
      },
    ],
    honorsAndAwards: [], // No honors and awards provided
    researchInterests: [], // No research interests provided
    selectedPublications: [
      {
        title:
          "Polynomial Method Based Design of Low Order Controllers for Two-Mass System",
        journal: "IEEE Transactions on Industrial Electronics",
        year: "2012",
      },
      {
        title:
          "Dynamic Emulation of Road/Tire Longitudinal Interaction for Developing Electric Vehicle Control Systems",
        journal: "Vehicle System Dynamics",
        year: "2011",
      },
      {
        title:
          "Nonlinear Dynamics of Duffing System with Fractional Order Damping",
        journal: "ASME Journal of Computational and Nonlinear Dynamics",
        year: "2010",
      },
      {
        title:
          "Fractional-Order Control: Theory and Applications in Motion Control",
        journal: "IEEE Industrial Electronics Magazine",
        year: "2007",
      },
      {
        title:
          "The Time-Scaled Trapezoidal Rule for Discrete Fractional Order Controllers",
        journal: "Non-linear Dynamics",
        year: "2004",
      },
      {
        title:
          "Wireless Charging of Electric Vehicles: A Review and Experiments",
        journal:
          "ASME 2011 International Design Engineering Technical Conferences and Computers and Information in Engineering Conference",
        year: "2011",
      },
      {
        title:
          "Time-domain Evaluation of Fractional Order Controllers’ Direct Discretization Methods",
        journal: "IEEJ Transactions on Industry Applications",
        year: "2004",
      },
      {
        title:
          "Backlash Vibration Suppression Control of Torsional System by Novel Fractional Order PIDk Controller",
        journal: "IEEJ Transactions on Industry Applications",
        year: "2004",
      },
      {
        title:
          "The Application of Fractional Order Control to Backlash Vibration Suppression",
        journal: "American Control Conference",
        year: "2004",
      },
      {
        title:
          "China’s electric power sector’s options considering its environmental impacts",
        journal: "Environmental Economics and Policy Studies",
        year: "2002",
      },
    ],
    professionalService: [
      "Co-editor, Special Section on 'Information and Control in e-Transportation', IEEE Transactions on Industrial Informatics",
      "Committee Member, Energy Storage Devices and Systems Committee, IEEE Industrial Electronics Society",
      "Keynote Speaker, Wireless Power World Summit 2012, Sep. 12-13th, 2012, Shanghai, China",
      "Keynote Speaker, The 1st and 2nd China International New Energy Vehicles Forum, 2012-2013, Shanghai, China",
      "Symposium Chair to Mechatronic Control & Electrical Vehicular Systems, ASME/IEEE International Conference on Mechatronic and Embedded Systems and Applications, 2009-2013",
      "Expert Reviewer, IEEE Transactions on Industrial Electronics, IEEE Transactions on Mechatronics, ASME Journal of Computational and Nonlinear Dynamics, etc.",
    ],
    coursesTaught: [
      { code: "VE216", title: "Signals and Systems" },
      { code: "VE311", title: "Electronic Circuits" },
      {
        code: "VE460",
        title:
          "Control Systems Analysis and Design/VM 461: Automatic Control Modeling, Analysis and Control of Dynamic Systems",
      },
      { code: "VM552", title: "Mechatronic Systems Design" },
      { code: "VM450/VE 450", title: "Capstone Design Project" },
    ],
    projects: [], // No project IDs provided
  },
];

const getInstructor = (instructorID: string): Instructor | undefined => {
  console.log("Searching for instructor ID:", parseInt(instructorID));
  const instructor = instructors.find(
    (instructor) => instructor.id === parseInt(instructorID)
  );
  console.log("Found project:", instructorID);
  return instructor;
};

export { instructors, getInstructor };
