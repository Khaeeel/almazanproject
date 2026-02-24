'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Github, X } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    title: 'Predictive Analytics - Barangay Daang Bakal Health Center',
    description: 'Full-stack Laravel PHP application with integrated machine learning for disease outbreak prediction. Implements Random Forest, XGBoost, and Decision Tree algorithms to analyze patient health records and predict health trends based on historical data, weather patterns, and population demographics.',
    tech: ['Laravel', 'PHP', 'Machine Learning', 'Random Forest', 'XGBoost', 'Decision Tree', 'Full Stack', 'Data Analytics'],
    github: '#',
    live: '#',
    images: [
      { name: 'Dashboard Overview', src: '/images/barangay-health/dashboard.png', description: 'Main dashboard showing patient statistics, total patients, and health center map with case density visualization' },
      { name: 'Patient Health Records', src: '/images/barangay-health/healthrecord1.png', description: 'Patient record management with table view, search functionality, and actions for viewing and editing records' },
      { name: 'Add New Patient Dialog', src: '/images/barangay-health/healthrecord 3.png', description: 'Patient information entry form with personal information, physical measurements, and medical details' },
      { name: 'Patient Records Table', src: '/images/barangay-health/healthrecord2.png', description: 'Detailed patient records table showing all patient information with sorting and filtering options' },
      { name: 'Health Analytics & Reports', src: '/images/barangay-health/report 1.png', description: 'Comprehensive analytics showing total patients, age groups, diagnoses tracked, gender distribution, and cases per street' },
      { name: 'Cases by Diagnosis', src: '/images/barangay-health/report 2.png', description: 'Detailed breakdown of medical diagnoses with filtering options, date range selection, and case count visualization' },
      { name: 'Prediction Visualization', src: '/images/barangay-health/prediction1.png', description: 'AI-powered predictions showing age distribution, total consultations over time, top medical diagnoses, and seasonal patterns' },
    ]
  },
  {
    title: 'Stroke Prediction',
    description: 'This project compares multiple classifiers for medical diagnostics, identifying Support Vector Machine (SVM) as the most accurate model with a test accuracy of 97.15%, followed by K-Nearest Neighbors at 96.66%.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning', 'Data Analysis'],
    github: 'https://github.com/Khaeeel/Project-ML-and-AI/tree/main/Machine%20Learning/Stroke%20Prediction',
    live: '#',
    subProjects: [
      { name: 'Assemble_Stroke_Prediction.ipynb', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/Machine%20Learning/Stroke%20Prediction/Assemble_Stroke_Prediction.ipynb' },
      { name: 'healthcare-dataset-stroke-data.csv', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/Machine%20Learning/Stroke%20Prediction/healthcare-dataset-stroke-data.csv' },
      { name: 'stroke_clean.csv', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/Machine%20Learning/Stroke%20Prediction/stroke_clean.csv' },
    ]
  },
  {
    title: 'MentalBert',
    description: 'This project demonstrates that fine-tuning MentalBERT with optimized hyperparameters (Grid and Random Search) significantly improves reliability, with the top-performing configuration achieving a 0.98 accuracy and 0.975 F1-score.',
    tech: ['BERT', 'Transformers', 'PyTorch', 'NLP', 'Deep Learning'],
    github: 'https://github.com/Khaeeel/Project-ML-and-AI/tree/main/MentalBert',
    live: '#',
    subProjects: [
      { name: 'FinalProject_GroofGroof.ipynb', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/MentalBert/FinalProject_GroofGroof%20(2)%20(1).ipynb' },
      { name: 'Cleaned_Combined_Data.csv', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/MentalBert/Cleaned_Combined_Data%20(3)%20(1).csv' },
      { name: 'FinalProject_GroofGroof (1) (1).pdf', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/MentalBert/FinalProject_GroofGroof%20(1)%20(1).pdf' },
      { name: 'AlmazanDominic_ExerciseF1_MentalBert.ipynb', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/MentalBert/Fine%20Tune/AlmazanDominic_ExerciseF1_MentalBert%20(1)%20(3).ipynb' },
      { name: 'Almazan-ExerciseF1-FineTuneBertModel (1).ods', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/MentalBert/Fine%20Tune/Almazan-ExerciseF1-FineTuneBertModel%20(1).ods' },
      { name: 'AlmazanDominic_ExerciseF1_MentalBERT 3 (1).pdf', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/MentalBert/Fine%20Tune/AlmazanDominic_ExerciseF1_MentalBERT%203%20(1).pdf' },
    ]
  },
  {
    title: 'Sentiment Analysis',
    description: 'Sentiment Classification in Mental Health Texts. By applying systematic hyperparameter tuning via the Hugging Face Trainer API, this study achieved a high F1-score of 0.983 in detecting suicidal ideation within social media text.',
    tech: ['NLP', 'Scikit-learn', 'Python', 'Text Analysis', 'Machine Learning'],
    github: 'https://github.com/Khaeeel/Project-ML-and-AI/tree/main/Sentiment%20Analysis',
    live: '#',
    subProjects: [
      { name: 'ExerciseM2_AlmazanDominic_NLP_Models.ipynb', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/Sentiment%20Analysis/ExerciseM2_AlmazanDominic_NLP_Models%202.ipynb' },
      { name: 'Manual_Data_Cleaned.csv', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/Sentiment%20Analysis/Almazan_ManualData_Cleaned.xlsx%20-%20Sheet1.csv' },
      { name: 'ExerciseM2_AlmazanDominic_NLP_Models 2.ipynb', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/Sentiment%20Analysis/ExerciseM2_AlmazanDominic_NLP_Models%202.ipynb' },
      { name: 'EM2_IEEE_Report_DominicAlmazan.docx 5.pdf', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/Sentiment%20Analysis/EM2_IEEE_Report_DominicAlmazan.docx%205.pdf'},
    ]
  },
  {
    title: 'Named Entity Recognition (NER)',
    description: 'This project of spaCy’s NER models across news articles revealed that small, medium, and large models all achieve a similar accuracy of approximately 0.81, suggesting that smaller models are often more efficient for domain-specific tasks.',
    tech: ['SpaCy', 'NLP', 'Python', 'Information Extraction', 'Deep Learning'],
    github: 'https://github.com/Khaeeel/Project-ML-and-AI/tree/main/Name%20Entity%20Recognition%20(%20NER%20)',
    live: '#',
    subProjects: [
      { name: 'Almazan_WW_Spacy_NER.ipynb', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/Name%20Entity%20Recognition%20(%20NER%20)/Almazan%20WW%20-%20Spacy%20(Ner).ipynb' },
      { name: 'Almazan_DominicBoy.NER Mode Evaluation 2.pdf', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/Name%20Entity%20Recognition%20(%20NER%20)/Almazan_DominicBoy.NER%20Mode%20Evaluation%202.pdf' },
      { name: 'Almazan - Manual WW NER Model Evaluation.xlsx', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/Name%20Entity%20Recognition%20(%20NER%20)/Almazan%20-%20Manual%20WW%20NER%20Model%20Evaluation.xlsx' },
      { name: 'Almazan - Automated NER_Evaluation_Results.xlsx', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/Name%20Entity%20Recognition%20(%20NER%20)/Almazan%20-%20Automated%20NER_Evaluation_Results.xlsx' },
    ]
  },
  {
    title: 'BERT Question & Answer',
    description: 'Leverages pre-trained BERT model to implement a question-answering system. Fine-tuned for extractive QA tasks with high accuracy on reading comprehension datasets.',
    tech: ['BERT', 'Transformers', 'PyTorch', 'NLP', 'Deep Learning'],
    github: 'https://github.com/Khaeeel/Project-ML-and-AI/tree/main/BERT%20-%20QnA',
    live: '#',
    subProjects: [
      { name: 'Almazan_Exercise_3_BertModel.ipynb', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/BERT%20-%20QnA/Almazan_Exercise_3_BertModel.ipynb' },
      { name: 'Almazan - EXERCISE #3 - BERT MODEL.xlsx', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/BERT%20-%20QnA/Almazan%20-%20EXERCISE%20%233%20%20-%20BERT%20MODEL.xlsx' },
      { name: 'Almazan_Exercise#3_BuildingBert-BasedQnASystem (1).pdf', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/BERT%20-%20QnA/Almazan_Exercise%233_BuildingBert-BasedQnASystem%20(1).pdf' },
    ]
  },
  {
    title: 'Multi-Layer Perceptron (MLP)',
    description: 'This project explores Multi-Layer Perceptrons for educational resource planning achieved a peak testing accuracy of 96.48% after rigorous data preprocessing and refinement of hidden layer architectures.',
    tech: ['TensorFlow', 'Neural Networks', 'Python', 'Deep Learning', 'Keras'],
    github: 'https://github.com/Khaeeel/Project-ML-and-AI/tree/main/MLP',
    live: '#',
    subProjects: [
      { name: 'Almazan_PT_F2_MLP.ipynb', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/MLP/Almazan_PT_F2_MLP_.ipynb' },
      { name: 'Almazan-Dominic Boy-LogFile-MLP.xlsx', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/MLP/Almazan-Dominic%20Boy-LogFile-MLP.xlsx' },
      { name: 'Almazan - PT-F2 _ MLP Challenge.pdf', link: 'https://github.com/Khaeeel/Project-ML-and-AI/blob/main/MLP/Almazan%20-%20PT-F2%20_%20MLP%20Challenge.pdf' },
    ]
  },
  {
    title: 'Graphic Design',
    description: 'Collection of professional graphic design projects showcasing expertise in visual design, branding, and creative composition. Includes logo designs, marketing materials, UI/UX designs, and brand identity work.',
    tech: ['Adobe Photoshop', 'Adobe Illustrator', 'Canvas', 'Branding','Digital Design'],
    github: '#',
    live: '#',
    images: [
      { name: '1 Day To Go', src: '/images/gp/1%20DAY%20TO%20GO.png', description: 'Event countdown design with vibrant and engaging visual composition' },
      { name: 'PEP Rally', src: '/images/gp/PEP%20RALLY%20LANDSCAPE.png', description: 'Large format promotional design for pep rally event' },
      { name: 'PEP Countdown 2024', src: '/images/gp/PEP%20COUNTDOWN%202024.png', description: 'Countdown graphic design with modern typography and colors' },
      { name: 'Day 4 Countdown', src: '/images/gp/DAY%204.png', description: 'Event promotion design with bold visual elements' },
      { name: 'Art Design 1', src: '/images/gp/art1.jpg', description: 'Creative artwork showcasing artistic vision and composition' },
      { name: 'Art Design 2', src: '/images/gp/art%202.jpg', description: 'Contemporary art design with professional execution' },
      { name: 'Art Design 3', src: '/images/gp/art%203.jpg', description: 'Artistic composition demonstrating design expertise' },
      { name: 'Branding Design', src: '/images/gp/Branding%20Final.jpg', description: 'Professional brand identity design and visual guidelines' },
      { name: 'Branding Card 4', src: '/images/gp/Branding%20Card%204.jpg', description: 'Business card and branding collateral design' },
      { name: 'Thank You Design', src: '/images/gp/THANKYOU%20MWA.png', description: 'Gratitude graphics with professional styling' },
      { name: 'JRU 100 Poster', src: '/images/gp/Poster%20JRU%20100%20res.png', description: 'High resolution poster design for institutional event' },
      { name: 'AF1 - PEP', src: '/images/gp/AF1%20-%20PEP%20(2).png', description: 'Athletic event promotional design' },
      { name: 'Logo Design AB', src: '/images/gp/AB.png', description: 'Modern logo design with clean aesthetics' },
      { name: 'Logo Design ABA', src: '/images/gp/ABA.png', description: 'Professional logo concept with brand identity' },
      { name: 'Social Media Graphics 1', src: '/images/gp/258727126_1414761788917688_1236817021846704824_n.png', description: 'Social media content design for online engagement' },
      { name: 'Social Media Graphics 2', src: '/images/gp/KVXaxL13.jpg', description: 'Digital media design optimized for social platforms' },
      { name: 'Social Media Graphics 3', src: '/images/gp/WU3SwShX.jpg', description: 'Social content design with contemporary styling' },
    ]
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 sm:py-32 bg-card/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-background border border-border rounded-lg overflow-hidden hover:border-accent transition-colors duration-300 group flex flex-col cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-gradient-to-b from-accent/20 to-transparent h-40 flex items-center justify-center">
                <div className="text-4xl text-accent/40 font-bold">{project.title.charAt(0)}</div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project)
                    }}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Files</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Project Files */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">{selectedProject.title}</h3>
                <button
                  onClick={() => {
                    setSelectedProject(null)
                    setSelectedImageIndex(0)
                  }}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Image Gallery Section */}
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <div className="space-y-4">
                    <div className="bg-card rounded-lg border border-border overflow-hidden">
                      <div className="relative aspect-video bg-muted flex items-center justify-center">
                        <img
                          src={selectedProject.images[selectedImageIndex].src}
                          alt={selectedProject.images[selectedImageIndex].name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23333" width="400" height="300"/%3E%3Ctext x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23999" font-family="sans-serif" font-size="16"%3EImage not found%3C/text%3E%3C/svg%3E'
                          }}
                        />
                      </div>

                      {selectedProject.images.length > 1 && (
                        <div className="flex items-center justify-between p-4 bg-muted">
                          <button
                            onClick={() => setSelectedImageIndex((prev) => (prev === 0 ? selectedProject.images!.length - 1 : prev - 1))}
                            className="text-muted-foreground hover:text-accent transition-colors"
                            aria-label="Previous image"
                          >
                            <span className="text-lg">←</span>
                          </button>
                          <span className="text-sm text-muted-foreground">
                            {selectedImageIndex + 1} / {selectedProject.images.length}
                          </span>
                          <button
                            onClick={() => setSelectedImageIndex((prev) => (prev === selectedProject.images!.length - 1 ? 0 : prev + 1))}
                            className="text-muted-foreground hover:text-accent transition-colors"
                            aria-label="Next image"
                          >
                            <span className="text-lg">→</span>
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">{selectedProject.images[selectedImageIndex].name}</h4>
                      <p className="text-sm text-muted-foreground">{selectedProject.images[selectedImageIndex].description}</p>
                    </div>

                    {/* Image thumbnails */}
                    <div className="grid grid-cols-4 gap-2">
                      {selectedProject.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`aspect-video rounded border-2 transition-colors overflow-hidden ${
                            selectedImageIndex === index ? 'border-accent' : 'border-border hover:border-accent/50'
                          }`}
                        >
                          <img
                            src={image.src}
                            alt={image.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23333" width="100" height="100"/%3E%3C/svg%3E'
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : selectedProject.subProjects && selectedProject.subProjects.length > 0 ? (
                  <>
                    <p className="text-sm text-muted-foreground mb-4">Select a file to view:</p>
                    {selectedProject.subProjects.map((subProject) => (
                      <Link
                        key={subProject.name}
                        href={subProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 rounded-lg bg-card border border-border hover:border-accent hover:bg-accent/5 transition-colors text-sm text-foreground hover:text-accent"
                      >
                        {subProject.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground">No files or images available</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
