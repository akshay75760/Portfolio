const EducationSection = () => {
  const educationData = [
    {
      institution: "IACSD, Pune",
      degree: "PG-DAC",
      fullDegree: "Post Graduate Diploma in Advanced Computing",
      duration: "Feb 2025 – Aug 2025",
      status: "Current",
      description: "Specialized training in advanced computing technologies including Java, Spring Boot, React, and database management.",
      color: "from-blue-500 to-purple-600"
    },
    {
      institution: "Shri Shankaracharya Technical Campus, Bhilai",
      degree: "B.Tech CSE",
      fullDegree: "Bachelor of Technology in Computer Science Engineering",
      duration: "2019 - 2023",
      grade: "75.07%",
      description: "Strong foundation in computer science fundamentals, programming, and software engineering principles.",
      color: "from-green-500 to-blue-500"
    },
    {
      institution: "BRL DAV Public School, Bhandaridah",
      degree: "Higher Secondary",
      fullDegree: "Higher Secondary School Certificate in Science",
      duration: "2016 - 2017",
      description: "Science stream with focus on Mathematics, Physics, and Chemistry.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Education</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            My academic journey in computer science and advanced computing
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < educationData.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-24 bg-gray-300 dark:bg-gray-600 hidden md:block transition-colors duration-300"></div>
              )}
              
              {/* Education Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Timeline Dot */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0`}>
                    {index + 1}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">{edu.institution}</h3>
                        <p className="text-lg font-semibold text-primary mb-1">{edu.fullDegree}</p>
                        <p className="text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">{edu.duration}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        {edu.status && (
                          <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold mb-2 transition-colors duration-300">
                            {edu.status}
                          </span>
                        )}
                        {edu.grade && (
                          <div className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{edu.grade}</div>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">{edu.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;