import React, { useState, useEffect } from "react";

interface TeamMemberProps {
  imageUrl: string;
  name: string;
  title: string;
  certifications: string[];
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  imageUrl,
  name,
  title,
  certifications,
}) => (
  <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 h-full flex flex-col">
    <img
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-purple-200"
      src={imageUrl}
      alt={`Photo of ${name}`}
    />
    <div className="flex-grow">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-purple-600 font-medium mb-3">{title}</p>
    </div>
    <ul className="text-sm text-gray-600 text-left space-y-1 list-disc list-outside pl-5 mt-2 pt-2 border-t border-gray-200">
      {certifications.map((cert, index) => (
        <li key={index}>{cert}</li>
      ))}
    </ul>
  </div>
);

const Team: React.FC = () => {
  const teamData = [
    {
      imageUrl: require("/img/EC.png"),
      name: "DATO ’ SRI HALIMI BIN ABD. MANAF",
      title: "Executive Chairman",
      certifications: [
        "Secretary General, Ministry of Defense (2018–2019).",
        "Deputy Secretary General (Urban Wellbeing), KPKT (2013)",
        "Director General, Local Government Department (JKT) (2011)",
        "Awarded Darjah Sri Sultan Ahmad Shah Pahang (SSAP) – title Dato’ Sri",
      ],
    },
    {
      imageUrl: require("/img/MDS.png"),
      name: "MR.MUHAMMAD NURHAN HAZIM BIN ABDULLAH SANI",
      title: "Managing Director",
      certifications: [
        "Managing Director, Hidaka Communication (since 2019)",
        "Expanded company’s product portfolio nationwide",
        "Led projects improving Civil Construction Engineering & infrastructure industry",
        "Developed a strong professional and international work culture.",
      ],
    },
    {
      imageUrl: require("/img/EDS.png"),
      name: "SR.HJ.ABDULLAH SANI BIN HJ.HANAFI",
      title: "Executive Director",
      certifications: [
        "Executive Director (MRISM, MBEng).",
        "Guided company growth as a leading Bumiputera construction company.",
        "Ensured continuous professional development of staff",
        "Developed a strong professional and international work culture",
      ],
    },
    {
      imageUrl: require("/img/PROF1.png"),
      name: "DR KU AZHAR BIN KU HASSAN",
      title: "University Senior Lecturer / Professional Architect",
      certifications: [
        "Expert Advisor in the company’s advisory panel",
        "Corporate Member of PAM, LAM, and RIBA",
        "Extensive architectural consultancy and project experience in Malaysia",
      ],
    },
    {
      imageUrl: require("/img/PROF2.png"),
      name: "ASSOC. PROF. DR. NORDIN JAMALUDIN",
      title: "Academic / Consultant",
      certifications: [
        "PhD in Architecture (Cranfield University, UK)",
        "Registered EIA Consultant & Subject Specialist",
        "Fellow of Welding Institute of Malaysia",
        "Member of multiple professional engineering & environmental associations",
      ],
    },
    {
      imageUrl: require("/img/PROF3.png"),
      name: "PROF.MADYA DR.MOHD WIRA BIN MOHD SHAFEI",
      title: "Construction Management Expert",
      certifications: [
        "PhD in Construction Management (University of Leeds, UK)",
        "Expert Panelist, National Competency Standard for Project Managers (CIDB)",
        "Committee Member, Regional Centre of Expertise (RCE)",
        "Academic experience as lecturer and researcher in construction management",
      ],
    },
    {
      imageUrl: require("/img/PROF4.png"),
      name: "PROF. SR DR. SYAHRUL NIZAM BIN KAMARUZZAMAN",
      title: "Academic / Building Expert",
      certifications: [
        "PhD in Building (Manchester University)",
        "Master in Building Technology (Universiti Sains Malaysia)",
        "Corporate Member, Association of Building Engineers UK",
        "Senior Member, International Association of Computer Science & IT",
      ],
    },
    {
      imageUrl: require("/img/PROF5.png"),
      name: "PROF. MADYA DR.EMMA MAIRINIE BINTI AHMAD ZAWAWI",
      title: "Academic / Construction Expert",
      certifications: [
        "PhD (University of Manchester, UK)",
        "Master in Building Technology, University of Science Malaysia",
        "Head of Centre of Studies, Faculty of Architecture, UiTM (2013-2018)",
        "Head of AP246 Programme & OBE Coordinator",
      ],
    },
    {
      imageUrl: require("/img/PROF6.png"),
      name: "DR. HJ. HASSIM BIN MAT",
      title: "Associate Professor / Transportation Planning",
      certifications: [
        "PhD in Transportation Planning (USM)",
        "MSc in Town & Regional Planning, USM",
        "Extensive consultancy & research in traffic impact assessment, road accident audit, and transportation planning",
        "Active community involvement as Imam at local mosques",
      ],
    },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pages = Array.from(
    { length: Math.ceil(teamData.length / itemsPerPage) },
    (_, i) => teamData.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage)
  );

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (pages.length > 1) {
      const timer = setTimeout(() => {
        setCurrentPage((prev) => (prev + 1) % pages.length);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentPage, pages.length]);

  useEffect(() => {
    if (currentPage >= pages.length) {
      setCurrentPage(0);
    }
  }, [pages, currentPage]);

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Meet Our Experts
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A dedicated team of professionals passionate about renewable energy.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform ease-in-out duration-700"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {pages.map((page, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {page.map((member) => (
                      <div
                        key={member.name}
                        className={
                          itemsPerPage === 1 ? "max-w-sm mx-auto w-full" : ""
                        }
                      >
                        <TeamMemberCard {...member} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 space-x-3">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                  currentPage === index
                    ? "bg-purple-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
