import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Home, Image, Video, Edit, Plus } from 'lucide-react';

const examSections = [
  {
    name: "Mental Status Examination",
    subsections: [
      {
        name: "Level of Consciousness",
        components: [
          "Glasgow Coma Scale (GCS)",
          "Alertness, orientation, responsiveness"
        ],
        occMedCorrelation: [
          "Head injuries in construction or industrial accidents",
          "Toxic exposures affecting consciousness (e.g., solvents, gases)"
        ]
      },
      {
        name: "Orientation",
        components: [
          "Person, place, time, situation"
        ],
        occMedCorrelation: [
          "Cognitive effects of chronic exposure to neurotoxins (e.g., heavy metals, pesticides)",
          "Post-concussion syndrome assessment"
        ]
      },
      {
        name: "Attention and Concentration",
        components: [
          "Digit span test",
          "Serial 7s or 3s subtraction",
          "Months backwards"
        ],
        occMedCorrelation: [
          "Cognitive impairment due to workplace stress or shift work",
          "Effects of sleep deprivation in long-shift workers"
        ]
      },
      {
        name: "Memory",
        components: [
          "Immediate recall",
          "Short-term memory",
          "Long-term memory"
        ],
        occMedCorrelation: [
          "Chronic solvent exposure effects",
          "Evaluation of cognitive decline in aging workers"
        ]
      },
      {
        name: "Language",
        components: [
          "Fluency and articulation",
          "Comprehension",
          "Naming",
          "Reading and writing",
          "Aphasia, dysarthria, apraxia"
        ],
        occMedCorrelation: [
          "Assessment after workplace head injuries",
          "Effects of neurotoxic exposures on language function"
        ]
      },
      {
        name: "Executive Function",
        components: [
          "Abstract thinking",
          "Judgment",
          "Clock drawing test",
          "Trail-making test"
        ],
        occMedCorrelation: [
          "Decision-making capacity in safety-critical jobs",
          "Cognitive effects of chronic stress or PTSD in first responders"
        ]
      }
    ]
  },
  {
    name: "Cranial Nerve Examination",
    subsections: [
      {
        name: "CN I (Olfactory)",
        components: [
          "Smell recognition"
        ],
        occMedCorrelation: [
          "Anosmia due to chemical exposures (e.g., in manufacturing, agriculture)",
          "Zinc exposure in welding fumes"
        ]
      },
      {
        name: "CN II (Optic)",
        components: [
          "Visual acuity",
          "Visual fields",
          "Fundoscopic exam",
          "Pupillary reflexes"
        ],
        occMedCorrelation: [
          "Visual impairments from ocular injuries or exposures",
          "Evaluation of color vision for specific job requirements"
        ]
      },
      {
        name: "CN III, IV, VI",
        components: [
          "Eye movements",
          "Nystagmus",
          "Ptosis",
          "Convergence"
        ],
        occMedCorrelation: [
          "Assessment after head trauma",
          "Occupational nystagmus (e.g., miners, machine operators)"
        ]
      },
      {
        name: "CN V (Trigeminal)",
        components: [
          "Sensory testing",
          "Motor testing"
        ],
        occMedCorrelation: [
          "Facial sensory loss from chemical exposures",
          "Trigeminal neuralgia in dentists or dental hygienists"
        ]
      },
      {
        name: "CN VII (Facial)",
        components: [
          "Facial symmetry",
          "Facial movements"
        ],
        occMedCorrelation: [
          "Bell's palsy from cold exposure in outdoor workers",
          "Facial nerve injuries in construction accidents"
        ]
      },
      {
        name: "CN VIII (Vestibulocochlear)",
        components: [
          "Hearing tests",
          "Balance assessment"
        ],
        occMedCorrelation: [
          "Noise-induced hearing loss",
          "Vestibular disorders in pilots or high-rise workers"
        ]
      },
      {
        name: "CN IX, X",
        components: [
          "Palate movement",
          "Gag reflex",
          "Swallowing and voice"
        ],
        occMedCorrelation: [
          "Voice disorders in teachers or call center workers",
          "Dysphagia from neck injuries"
        ]
      },
      {
        name: "CN XI (Spinal Accessory)",
        components: [
          "Shoulder shrug",
          "Head rotation"
        ],
        occMedCorrelation: [
          "Cervical spine injuries in manual laborers",
          "Trapezius muscle strain in office workers"
        ]
      },
      {
        name: "CN XII (Hypoglossal)",
        components: [
          "Tongue inspection and movement"
        ],
        occMedCorrelation: [
          "Lingual nerve injuries in dental procedures",
          "Speech impairments after neck trauma"
        ]
      }
    ]
  },
  {
    name: "Motor Examination",
    subsections: [
      {
        name: "Inspection",
        components: [
          "Muscle atrophy, fasciculations, abnormal movements"
        ],
        occMedCorrelation: [
          "Repetitive strain injuries",
          "Chronic neurological effects of vibration exposure"
        ]
      },
      {
        name: "Tone",
        components: [
          "Assess in all limbs"
        ],
        occMedCorrelation: [
          "Spasticity after spinal cord injuries",
          "Parkinsonism from manganese exposure in welders"
        ]
      },
      {
        name: "Strength",
        components: [
          "MRC scale testing in major muscle groups"
        ],
        occMedCorrelation: [
          "Evaluation of physical capacity for job tasks",
          "Assessment of recovery from musculoskeletal injuries"
        ]
      },
      {
        name: "Pronator Drift Test",
        components: [
          "Subtle upper limb weakness"
        ],
        occMedCorrelation: [
          "Early detection of cumulative trauma disorders",
          "Carpal tunnel syndrome in computer users"
        ]
      }
    ]
  },
  {
    name: "Sensory Examination",
    subsections: [
      {
        name: "Light Touch",
        components: [
          "All dermatomes"
        ],
        occMedCorrelation: [
          "Peripheral neuropathy from chemical exposures",
          "Sensory deficits in compression injuries (e.g., sciatica)"
        ]
      },
      {
        name: "Pain Sensation",
        components: [
          "All dermatomes"
        ],
        occMedCorrelation: [
          "Complex regional pain syndrome after workplace injuries",
          "Neurotoxic effects on pain perception"
        ]
      },
      {
        name: "Temperature Sensation",
        components: [
          "Selected areas"
        ],
        occMedCorrelation: [
          "Thermal injury assessment in firefighters or industrial workers",
          "Neuropathy from cold exposure in outdoor workers"
        ]
      },
      {
        name: "Vibration Sense",
        components: [
          "Bony prominences"
        ],
        occMedCorrelation: [
          "Hand-arm vibration syndrome in power tool users",
          "Diabetic neuropathy screening in at-risk workers"
        ]
      },
      {
        name: "Proprioception",
        components: [
          "Joint position sense"
        ],
        occMedCorrelation: [
          "Balance disorders in construction or high-altitude workers",
          "Proprioceptive deficits after repetitive motion injuries"
        ]
      },
      {
        name: "Two-Point Discrimination",
        components: [
          "Fingertips and toes"
        ],
        occMedCorrelation: [
          "Fine motor skill assessment for precision work",
          "Nerve compression syndromes in manual laborers"
        ]
      },
      {
        name: "Stereognosis",
        components: [
          "Object identification by touch"
        ],
        occMedCorrelation: [
          "Hand function assessment after occupational injuries",
          "Evaluation of sensory retraining progress"
        ]
      },
      {
        name: "Graphesthesia",
        components: [
          "Number/letter identification on palm"
        ],
        occMedCorrelation: [
          "Cortical sensory function after head injuries",
          "Assessment of fine sensory discrimination in skilled workers"
        ]
      }
    ]
  },
  {
    name: "Reflex Examination",
    subsections: [
      {
        name: "Deep Tendon Reflexes",
        components: [
          "Biceps",
          "Brachioradialis",
          "Triceps",
          "Patellar",
          "Achilles"
        ],
        occMedCorrelation: [
          "Radiculopathies from spinal injuries",
          "Peripheral neuropathies from toxic exposures"
        ]
      },
      {
        name: "Superficial Reflexes",
        components: [
          "Abdominal",
          "Cremasteric",
          "Plantar"
        ],
        occMedCorrelation: [
          "Spinal cord injury assessment",
          "Neurotoxic effects on reflex pathways"
        ]
      },
      {
        name: "Pathological Reflexes",
        components: [
          "Hoffman's sign",
          "Clonus"
        ],
        occMedCorrelation: [
          "Upper motor neuron lesions from workplace accidents",
          "Chronic effects of neurotoxin exposure"
        ]
      }
    ]
  },
  {
    name: "Cerebellar Examination",
    subsections: [
      {
        name: "Coordination",
        components: [
          "Finger-to-nose",
          "Heel-to-shin",
          "Rapid alternating movements",
        ],
        occMedCorrelation: [
          "Ataxia from solvent exposure",
          "Coordination deficits after head injuries"
        ]
      },
      {
        name: "Gait",
        components: [
          "Normal and tandem gait"
        ],
        occMedCorrelation: [
          "Balance disorders in high-risk occupations (e.g., roofers, scaffolders)",
          "Ataxia from heavy metal poisoning"
        ]
      },
      {
        name: "Romberg Test",
        components: [
          "Balance assessment"
        ],
        occMedCorrelation: [
          "Vestibular dysfunction in pilots or divers",
          "Proprioceptive deficits from peripheral neuropathies"
        ]
      }
    ]
  },
  {
    name: "Gait and Station",
    subsections: [
      {
        name: "Gait Observation",
        components: [
          "Stride",
          "Arm swing",
          "Turning",
          "Heel/toe walking"
        ],
        occMedCorrelation: [
          "Evaluation of mobility after lower limb injuries",
          "Parkinsonism from occupational toxin exposure"
        ]
      },
      {
        name: "Specific Gait Abnormalities",
        components: [
          "Various abnormal gait patterns"
        ],
        occMedCorrelation: [
          "Foot drop from peroneal nerve compression",
          "Spinal stenosis in chronic heavy lifters"
        ]
      }
    ]
  },
  {
    name: "Special Tests",
    subsections: [
      {
        name: "",
        components: [
          "Kernig's and Brudzinski's signs",
          "Spurling's test",
          "Straight leg raise",
          "Lhermitte's sign",
          "Tinel's sign and Phalen's test"
        ],
        occMedCorrelation: [
          "Meningeal irritation in infectious disease exposures",
          "Cervical radiculopathy in office workers",
          "Lumbar disc herniation in manual laborers",
          "Electrical injury sequelae",
          "Carpal tunnel syndrome in repetitive motion jobs"
        ]
      }
    ]
  },
  {
    name: "Autonomic Function Tests",
    subsections: [
      {
        name: "",
        components: [
          "Orthostatic BP",
          "Heart rate variability",
          "Sweat testing"
        ],
        occMedCorrelation: [
          "Heat stress evaluation in foundry workers",
          "Autonomic neuropathy from chemical exposures",
          "Dysautonomia in chronic fatigue syndromes"
        ]
      }
    ]
  },
  {
    name: "Neurovascular Examination",
    subsections: [
      {
        name: "",
        components: [
          "Carotid auscultation",
          "Peripheral pulses",
          "Capillary refill"
        ],
        occMedCorrelation: [
          "Raynaud's phenomenon in vibration-exposed workers",
          "Peripheral vascular disease in sedentary occupations",
          "Thoracic outlet syndrome in overhead work"
        ]
      }
    ]
  },
  {
    name: "Additional Observations",
    subsections: [
      {
        name: "",
        components: [
          "Skin examination",
          "Head and spine inspection",
          "Involuntary movements"
        ],
        occMedCorrelation: [
          "Dermatological manifestations of chemical exposures",
          "Traumatic head and spine injuries",
          "Tremors or tics from neurotoxic exposures"
        ]
      }
    ]
  },
  {
    name: "Bedside Cognitive Assessments",
    subsections: [
      {
        name: "",
        components: [
          "MMSE",
          "MoCA",
          "FAB"
        ],
        occMedCorrelation: [
          "Cognitive impairment screening in aging workforce",
          "Post-concussion syndrome evaluation",
          "Executive function assessment for high-responsibility jobs"
        ]
      }
    ]
  }
];

const NeuroExamNestedMenu = () => {
    const [selectedSection, setSelectedSection] = useState(null);
    const [selectedSubsection, setSelectedSubsection] = useState(null);
  
    const handleSectionClick = (section) => {
      setSelectedSection(section);
      setSelectedSubsection(null);
    };
  
    const handleSubsectionClick = (subsection) => {
      setSelectedSubsection(subsection);
    };
  
    const Breadcrumb = () => (
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <Home className="h-4 w-4 mr-2" />
        <span className="mr-2">Home</span>
        {selectedSection && (
          <>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="mr-2">{selectedSection.name}</span>
          </>
        )}
        {selectedSubsection && (
          <>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span>{selectedSubsection.name}</span>
          </>
        )}
      </div>
    );
  
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Neurological Examination</h1>
        <Breadcrumb />
        <div className="flex">
          <div className="w-1/3 pr-4">
            <ul className="space-y-2">
              {examSections.map((section) => (
                <li key={section.name} className="border rounded-lg overflow-hidden">
                  <button
                    className="w-full p-3 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                    onClick={() => handleSectionClick(section)}
                  >
                    <span>{section.name}</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-2/3 pl-4">
            {selectedSection && !selectedSubsection && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">{selectedSection.name}</h2>
                <ul className="space-y-2">
                  {selectedSection.subsections.map((subsection) => (
                    <li key={subsection.name} className="border rounded-lg overflow-hidden">
                      <button
                        className="w-full p-3 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                        onClick={() => handleSubsectionClick(subsection)}
                      >
                        <span>{subsection.name || "General"}</span>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {selectedSubsection && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">{selectedSubsection.name || "General"}</h2>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Components/Tests:</h3>
                  <ul className="list-disc pl-5">
                    {selectedSubsection.components.map((component, index) => (
                      <li key={index} className="mb-1">{component}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Occupational Medicine Correlation:</h3>
                  <ul className="list-disc pl-5">
                    {selectedSubsection.occMedCorrelation.map((correlation, index) => (
                      <li key={index} className="mb-1">{correlation}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Description:</h3>
                  <p className="text-gray-600">Placeholder for detailed description of {selectedSubsection.name || "this section"}</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Visual Aids:</h3>
                  <div className="flex space-x-4">
                    <div className="flex items-center justify-center w-32 h-32 bg-gray-200 rounded-lg">
                      <Image className="h-8 w-8 text-gray-400" />
                    </div>
                    <div className="flex items-center justify-center w-32 h-32 bg-gray-200 rounded-lg">
                      <Video className="h-8 w-8 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <button className="fixed bottom-6 right-6 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600">
          <Plus className="h-6 w-6" />
        </button>
      </div>
    );
  };
  
  export default NeuroExamNestedMenu;
