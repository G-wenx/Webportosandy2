import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Award,
  Database,
  Sparkles,
  Loader2,
  Bot,
  Layout,
  Server,
  Shield,
  Users,
  Mail,
  PlayCircle,
  Workflow,
  Send,
  MessageCircle,
  Linkedin,
  ExternalLink,
  FileCheck,
  Layers,
  Camera,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';

/* --- KONTEKS DATA (SUMBER OTAK AI) --- */
const RESUME_CONTEXT = `
PROFIL PROFESIONAL
- Name: Himawan Setya Sandy
- Role Saat ini: Project Manager Officer/ PMO
- Summary: IT Project Manager dengan spesialisasi infrastruktur skala besar, Big Data, dengan pengalaman menangani project impementasi, Maintenance serta Managed Service pada client srategis dengan cakupan produk seperti (Confluent kafka, Qlick Replicate CDC, Hasura, Talend, Cloudera, Yugabyte, AWS dll serta kepatuhan ISO 270001)
- Key Skills: Managerial, Scrum, Agile, SLA Management, 
- Tools : JIRA, Confluence, Notion, ClickUp, Python, Looker Studio

Detailed Project Experience:
1. BRI - GraphQL HASURA (2024-2027): Scrum Master. Mengelola backlog, perencanaan sprint, dan memastikan kepatuhan SLA tim managed service pasca-implementasi.
2. BRI - Renewal Confluent (2024-2027): Scrum Master. Implementasi Renewal License Confluent dan ekspansi lingkungan Pre-Production.
3. PT. All Data International - Sertifikasi ISO 27001 (2024): Scrum Master. Merencanakan dan mengawasi pengadaan sertifikasi internal perusahaan.
4. PLN Energi Primer - Amandemen Platform (2024): Scrum Master. Mengelola perpanjangan lisensi AWS, Tableau, dan Snowflake.
5. BRI - Qlik Replicate Attunity (2023-2025): Scrum Master. Fokus pada penghapusan hambatan tim CDC (Change Data Capture).
6. BPJS Ketenagakerjaan - Enterprise Data Warehouse (2023-2024): Scrum Master. Implementasi EDW menggunakan Talend.

KEAHLIAN UTAMA:
1. Agile/Scrum Mastery: Memfasilitasi seluruh seremoni Scrum, manajemen backlog di Project Management Tools.
2. PMO & Governance: Manajemen SLA, audit kepatuhan, pengadaan infrastruktur kritikal.
3. Tech Stack: GraphQL Hasura, Confluent Kafka, AWS, Snowflake, Tableau, Talend.

DETAIL PENCAPAIAN & PROYEK (FOR AI ANSWERS):
1. PENCAPAIAN TERBESAR (IMPACT):
- Berhasil mengelola kontrak Managed Service di BRI dengan uptime dan kepatuhan SLA di atas 99%.
- Mengoptimalkan proses deployment pada proyek GraphQL Hasura yang mempercepat delivery fitur API.
2. PENANGANAN HAMBATAN:
- Melakukan "impediment removal" melalui identifikasi bottleneck di JIRA lebih awal.
- Memediasi komunikasi teknis antara vendor dan stakeholder internal di proyek Qlik Replicate.

PENGALAMAN KRUSIAL:
- Bank Rakyat Indonesia (BRI): Mengelola ekspansi GraphQL Hasura & Kafka (SLA Compliance).
- PLN Energi Primer: Manajemen lisensi AWS & Snowflake untuk platform energi nasional.
- BPJS Ketenagakerjaan: Scrum Master untuk implementasi Enterprise Data Warehouse (Talend).
- PT All Data International: Memimpin sertifikasi ISO 27001 dari sisi internal audit.

Work History:
- PT. All Data International (2023-2025): Scrum Master & Backup PMO.
- PT. Kawan Mobil Nusantara (2021-2022): Personal Assistant to GM (Operations & Reporting).
- PT. WHW Alumina Refinery (2019-2020): Quality Control Operation.

STRATEGI & VALUE PROPOSITION:
- Fokus pada efisiensi operasional melalui metodologi Agile dan transparansi tata kelola (governance).
- Ahli dalam menjembatani kebutuhan bisnis dengan tim teknis di lingkungan institusi (BUMN).

DETAIL PENCAPAIAN & PROYEK (FOR AI ANSWERS):
1. PENCAPAIAN TERBESAR (IMPACT):
- Berhasil mengelola kontrak jangka panjang (2024-2027) untuk Managed Service di BRI dengan mempertahankan uptime dan kepatuhan SLA di atas 99%.
- Mengoptimalkan proses deployment pada proyek GraphQL Hasura yang mempercepat delivery fitur API secara signifikan.
2. PENANGANAN HAMBATAN (SCRUM MASTER ROLE):
- Strategi: Melakukan "impediment removal" dengan cara identifikasi bottleneck lebih awal.
- Kasus Nyata: Pada proyek Qlik Replicate CDC, berhasil memediasi komunikasi teknis antara vendor dan stakeholder internal sehingga dapat selesai tepat waktu tanpa overflow.
3. PENGALAMAN PROYEK STRATEGIS BUMN:
- BRI: Memimpin seremoni Scrum untuk tim Implementasi dan Managed Service (Confluence Kafka & Hasura). Menjamin stabilitas sistem perbankan pasca-implementasi.
- PLN Energi Primer: Memimpin implementasi platform analitik berbasis kecerdasan buatan untuk mengotomatisasi pengolahan data pasar global. Bertanggung jawab mengawal siklus hidup proyek dari fase pengembangan hingga serah terima, guna mendukung efisiensi pengambilan keputusan pada sektor energi primer serta Mengelola tata kelola lisensi/Credit Usage (AWS, Snowflake, Tableau) untuk platform data.
- BPJS Ketenagakerjaan: Implementasi Enterprise Data Warehouse (EDW) menggunakan Talend untuk integrasi data berskala besar.
4. MANAJEMEN SLA & COMPLIANCE:
- Sangat disiplin dalam memantau matriks performa tim Managed Service. 
- Memastikan setiap insiden teknis ditangani sesuai target waktu respon (Response Time) dan waktu penyelesaian (Resolution Time) yang disepakati dengan client.
5. AUDIT & ISO 27001:
- Berperan sebagai Lead Internal Auditor dalam proses pengadaan dan audit sertifikasi ISO 27001.
- Menjamin seluruh dokumentasi teknis dan prosedur operasional IT memenuhi standar keamanan informasi internasional.
6. TEKNOLOGI (TECH STACK):
- Management: JIRA, Confluence, Notion, ClickUp.
- Infrastructure/Data: Confluent Kafka, Hasura, Talend, Snowflake, AWS, Yugabyte, Cloudera.

KONTAK & INTERVIEW:
- WhatsApp: +62 813-2576-5796 (Sesuai tombol di portofolio).
- LinkedIn: linkedin.com/in/setyasetyasandy.
- Email: setyasandyy@gmail.com
- Pesan: "Jika ditanya tentang interview, atau cara menjadwalkan interview, jawab bahwa Himawan sangat terbuka untuk diskusi lebih lanjut dan arahkan untuk klik tombol WhatsApp, Email, atau LinkedIn."

`;

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [autoPrompt, setAutoPrompt] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleAskAI = (prompt) => {
    setIsChatOpen(true);
    setTimeout(() => setAutoPrompt(prompt), 100);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#E0E0E0] font-sans antialiased selection:bg-blue-500/30 selection:text-white relative">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px] opacity-40"></div>
      </div>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-sm tracking-[0.2em] uppercase font-bold text-white">
            Himawan S. Sandy
          </div>
          <div className="hidden md:flex space-x-12">
            {['Work', 'Experience', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-xs font-medium text-gray-400 hover:text-white transition-all uppercase tracking-widest relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative z-10 text-center">
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
            <span className="text-xs font-medium tracking-widest text-blue-400 uppercase">
              Senior Scrum Master & PMO
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-white">
            Orchestrating <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-gray-200 to-gray-400">
              Digital Agility.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed pt-6 text-center">
            Menjembatani kompleksitas teknis dan nilai bisnis. Spesialisasi
            dalam infrastruktur skala besar, Big Data, dan kepatuhan ISO untuk
            BUMN.
          </p>
          <div className="pt-8">
            <button
              onClick={() => handleAskAI('Apa keahlian utama Himawan?')}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-all"
            >
              <Sparkles size={16} className="text-blue-400" />
              <span className="text-sm font-medium tracking-widest uppercase text-white">
                Ask AI Assistant
              </span>
            </button>
          </div>
        </div>
        <div className="absolute bottom-12 animate-pulse text-gray-600">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Proyek Section */}
      <section id="work" className="py-32 px-6 md:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto text-left">
          <div className="flex items-end justify-between mb-24 border-b border-white/10 pb-8">
            <h2 className="text-4xl font-light text-white">
              Selected Projects
            </h2>
            <span className="hidden md:block text-4xl font-bold text-white/5">
              01
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              type="api"
              client="Bank Rakyat Indonesia"
              period="2024 - 2027"
              title="GraphQL HASURA Project"
              tags={['Scrum', 'GraphQL', 'SLA']}
              desc="Memfasilitasi Agile Scrum, mengelola backlog, dan memastikan kepatuhan SLA untuk platform GraphQL Hasura."
              onAskAI={() =>
                handleAskAI(
                  'Jelaskan proyek GraphQL Hasura di BRI yang dikelola Himawan.'
                )
              }
            />
            <ProjectCard
              type="stream"
              client="Bank Rakyat Indonesia"
              period="2024 - 2027"
              title="Renewal Confluent & Pre-Prod"
              tags={['Kafka', 'Pre-Prod', 'Agile']}
              desc="Implementasi lisensi Confluent dan ekspansi lingkungan Pre-Production dengan koordinasi pemangku kepentingan intensif."
              onAskAI={() =>
                handleAskAI(
                  'Bagaimana Himawan mengelola perpanjangan Confluent di BRI?'
                )
              }
            />
            <ProjectCard
              type="audit"
              client="PT. All Data International"
              period="2024"
              title="ISO 27001 Certification"
              tags={['Compliance', 'Security', 'Audit']}
              desc="Merencanakan dan mengawasi pengadaan sertifikasi ISO 27001 internal, koordinasi tim audit, dan manajemen sumber daya."
              onAskAI={() =>
                handleAskAI(
                  'Ceritakan tentang proyek ISO 27001 yang dikerjakan Himawan.'
                )
              }
            />
            <ProjectCard
              type="cloud"
              client="PLN Energi Primer Indonesia"
              period="2024"
              title="Primary Energy Platform"
              tags={['AWS', 'Snowflake', 'AI Forecasting']}
              desc="Implementasi sistem integrasi data berbasis AI untuk otomatisasi pengumpulan data komoditas global dan prakiraan cuaca."
              onAskAI={() =>
                handleAskAI(
                  'Apa kontribusi Himawan di proyek PLN Energi Primer?'
                )
              }
            />
            <ProjectCard
              type="cdc"
              client="Bank Rakyat Indonesia"
              period="2023 - 2025"
              title="Qlik Replicate Attunity"
              tags={['CDC', 'Scrum', 'Impediment Removal']}
              desc="Menghilangkan hambatan teknis tim platform CDC dan memfasilitasi kerangka kerja Scrum untuk kelancaran operasional."
              onAskAI={() =>
                handleAskAI(
                  'Jelaskan peran Himawan dalam proyek Qlik Replicate di BRI.'
                )
              }
            />
            <ProjectCard
              type="edw"
              client="BPJS Ketenagakerjaan"
              period="2023 - 2024"
              title="Enterprise Data Warehouse"
              tags={['Talend', 'EDW', 'Data Engineering']}
              desc="Scrum Master untuk implementasi EDW berbasis Talend, mendorong kualitas produk sesuai dengan timeline yang ketat."
              onAskAI={() =>
                handleAskAI('Bisa jelaskan proyek EDW di BPJS Ketenagakerjaan?')
              }
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="py-32 px-6 md:px-12 bg-[#0A0A0A] relative z-10"
      >
        <div className="max-w-[1000px] mx-auto text-left">
          <div className="flex items-end justify-between mb-24 border-b border-white/10 pb-8">
            <h2 className="text-4xl font-light text-white">
              Professional History
            </h2>
            <span className="hidden md:block text-4xl font-bold text-white/5">
              02
            </span>
          </div>
          <div className="space-y-12 border-l border-white/10 ml-4 pl-12 relative text-left">
            <ExperienceItem
              role="Scrum Master"
              company="PT. All Data International"
              period="2023 - 2025"
              desc="Memfasilitasi kerangka kerja Scrum, mengelola backlog, dan bertindak sebagai backup PMO/Co-PM untuk klien BUMN."
            />
            <ExperienceItem
              role="Personal Assistant to GM"
              company="PT. Kawan Mobil Nusantara"
              period="2021 - 2022"
              desc="Pengelolaan jadwal harian, administrasi, dashboard pelaporan, dan koordinasi pemangku kepentingan."
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-32 px-6 md:px-12 relative z-10 border-t border-white/5"
      >
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="flex items-center mb-24">
            <div className="h-[1px] flex-grow bg-white/10"></div>
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400 ml-6">
              Leadership & Team Culture
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GalleryCard
              title="Project Kickoff"
              category="Leadership"
              icon={<Users size={24} />}
              desc="Inisiasi proyek strategis bersama tim BUMN."
            />
            <GalleryCard
              title="Training Session"
              category="Skill Sharing"
              icon={<PlayCircle size={24} />}
              desc="Sesi berbagi pengetahuan Agile tim."
            />
            <GalleryCard
              title="Team Success"
              category="Culture"
              icon={<Award size={24} />}
              desc="Apresiasi atas pencapaian milestone proyek."
            />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-32 px-6 md:px-12 relative z-10 text-center">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400 mb-24">
            Tools & Platforms
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-12 items-center justify-items-center">
            <TechItem
              imageSrc="https://upload.wikimedia.org/wikipedia/commons/8/8a/Jira_Logo.svg"
              name="JIRA"
            />
            <TechItem
              imageSrc="https://upload.wikimedia.org/wikipedia/commons/8/88/Atlassian_Confluence_2017_logo.svg"
              name="Confluence"
            />
            <TechItem
              imageSrc="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
              name="Notion"
            />
            <TechItem
              imageSrc="https://cdn.worldvectorlogo.com/logos/clickup.svg"
              name="ClickUp"
            />
            <TechItem
              imageSrc="https://cdn.worldvectorlogo.com/logos/miro-2.svg"
              name="Miro"
            />
            <TechItem
              imageSrc="https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg"
              name="Office 365"
            />
            <TechItem
              imageSrc="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Workspace_Logo.png"
              name="G-Workspace"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-32 px-6 md:px-12 bg-[#080808] relative z-10 border-t border-white/5 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400 mb-6">
            Contact
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Siap untuk kolaborasi strategis?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="mailto:setyasandyy@gmail.com"
              className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-sm hover:border-blue-500/50 hover:bg-white/10 transition-all group"
            >
              <Mail
                className="text-gray-400 group-hover:text-blue-400 mb-4 transition-colors"
                size={32}
              />
              <span className="text-white font-medium mb-1 text-center">
                Email
              </span>
              <span className="text-xs text-gray-500 text-center">
                setyasandyy@gmail.com
              </span>
            </a>
            <a
              href="https://wa.me/6281325765796"
              target="_blank"
              className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-sm hover:border-green-500/50 hover:bg-white/10 transition-all group"
            >
              <MessageCircle
                className="text-gray-400 group-hover:text-green-400 mb-4 transition-colors"
                size={32}
              />
              <span className="text-white font-medium mb-1 text-center">
                WhatsApp
              </span>
              <span className="text-xs text-gray-500 text-center">
                +62 813-2576-5796
              </span>
            </a>
            <a
              href="https://linkedin.com/in/himawansetyasandy"
              target="_blank"
              className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-sm hover:border-blue-400/50 hover:bg-white/10 transition-all group"
            >
              <Linkedin
                className="text-gray-400 group-hover:text-blue-400 mb-4 transition-colors"
                size={32}
              />
              <span className="text-white font-medium mb-1 text-center">
                LinkedIn
              </span>
              <span className="text-xs text-gray-500 text-center">
                View Profile
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-[10px] text-gray-600 uppercase tracking-[0.3em]">
        © {new Date().getFullYear()} Himawan Setya Sandy. Jakarta, Indonesia.
      </footer>

      <ChatWidget
        isOpen={isChatOpen}
        setIsOpen={setIsChatOpen}
        autoPrompt={autoPrompt}
        setAutoPrompt={setAutoPrompt}
      />
    </div>
  );
};

/* --- SUB-KOMPONEN --- */

const GalleryCard = ({ title, category, icon, desc }) => (
  <div className="group relative aspect-video bg-white/5 border border-white/10 rounded-sm overflow-hidden flex flex-col items-center justify-center p-6 text-center hover:border-blue-500/30 transition-all duration-500 shadow-xl">
    <div className="text-gray-600 group-hover:text-blue-400 mb-4 transition-all transform group-hover:scale-110">
      {icon}
    </div>
    <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">
      {category}
    </div>
    <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
    <p className="text-xs text-gray-500 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      {desc}
    </p>
    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
  </div>
);

const ProjectCard = ({ client, period, title, tags, desc, type, onAskAI }) => {
  const [showWorkflow, setShowWorkflow] = useState(false);

  const getWorkflowContent = () => {
    switch (type) {
      case 'api':
        return {
          label: 'GraphQL Logic',
          steps: ['Client App', 'Hasura Gateway', 'Microservices', 'Database'],
        };
      case 'stream':
        return {
          label: 'Data Streaming',
          steps: [
            'Producer Systems',
            'Confluent Kafka Cluster',
            'Pre-Prod Env',
            'Consumer Systems',
          ],
        };
      case 'audit':
        return {
          label: 'ISO Process',
          steps: [
            'Policy Draft',
            'Gap Analysis',
            'Internal Audit',
            'Certification Audit',
          ],
        };
      case 'cloud':
        return {
          label: 'Cloud Architecture',
          steps: ['AWS Cloud', 'Snowflake DW', 'Tableau BI', 'User Access'],
        };
      case 'cdc':
        return {
          label: 'Replication Logic',
          steps: ['Source DB', 'Qlik Attunity', 'Target Data Lake'],
        };
      case 'edw':
        return {
          label: 'ETL Pipeline',
          steps: ['Source Data', 'Talend ETL', 'Enterprise DW'],
        };
      default:
        return { label: 'System Pattern', steps: ['App', 'Logic', 'Database'] };
    }
  };

  const workflow = getWorkflowContent();

  return (
    <div className="group relative bg-white/5 p-8 h-full flex flex-col justify-between border border-white/5 hover:border-blue-500/30 transition-all rounded-sm overflow-hidden text-left shadow-lg">
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
            {client}
          </span>
          <span className="text-[10px] text-gray-600 font-mono">{period}</span>
        </div>
        <h3 className="text-xl font-medium text-white mb-4 leading-tight">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-[9px] uppercase tracking-wider px-2 py-1 bg-white/5 text-gray-400 border border-white/5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-400 text-sm font-light leading-relaxed border-t border-white/5 pt-6">
          {desc}
        </p>
        <div className="pt-6 mt-auto flex flex-col gap-3">
          <button
            onClick={onAskAI}
            className="flex items-center text-[10px] text-blue-400 hover:text-white transition-colors"
          >
            <Sparkles size={10} className="mr-1" /> Ask AI about this project
          </button>
          <button
            onClick={() => setShowWorkflow(!showWorkflow)}
            className="flex items-center justify-center w-full py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 rounded-sm text-[10px] uppercase tracking-widest text-blue-300 transition-all"
          >
            <Workflow size={12} className="mr-2" />{' '}
            {showWorkflow ? 'Sembunyikan' : 'Alur Konseptual'}
          </button>
        </div>
      </div>
      {showWorkflow && (
        <div className="absolute inset-0 bg-[#0A0A0A] z-20 p-6 flex flex-col animate-fade-in shadow-inner">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {workflow.label}
            </span>
            <button onClick={() => setShowWorkflow(false)}>
              <X size={16} />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            {workflow.steps.map((step, i) => (
              <React.Fragment key={i}>
                <div className="w-4/5 px-4 py-2 border border-blue-500/20 bg-blue-500/5 rounded text-[10px] text-blue-300 text-center uppercase tracking-tighter">
                  {step}
                </div>
                {i < workflow.steps.length - 1 && (
                  <div className="h-4 w-[1px] bg-gray-800"></div>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-[8px] text-gray-600 mt-4 text-center italic">
            *Generic industry conceptual pattern.
          </p>
        </div>
      )}
    </div>
  );
};

const ExperienceItem = ({ role, company, period, desc }) => (
  <div className="relative group mb-12 text-left">
    <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[54.5px] mt-1.5 transition-colors group-hover:bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
      <h3 className="text-xl text-white font-medium group-hover:text-blue-400 transition-colors">
        {role}
      </h3>
      <span className="font-mono text-sm text-gray-500">{period}</span>
    </div>
    <div className="text-sm font-medium text-gray-400 mb-4">{company}</div>
    <p className="text-gray-500 font-light leading-relaxed max-w-3xl">{desc}</p>
  </div>
);

const TechItem = ({ imageSrc, name }) => (
  <div className="flex flex-col items-center group cursor-default">
    <div className="w-12 h-12 mb-4 bg-white/10 rounded-xl p-2 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/5 group-hover:border-blue-500/30 shadow-md">
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      <Server size={20} className="hidden text-gray-600" />
    </div>
    <span className="text-[10px] font-medium uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors">
      {name}
    </span>
  </div>
);

const ChatWidget = ({ isOpen, setIsOpen, autoPrompt, setAutoPrompt }) => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Halo! Saya AI Assistant Himawan. Silakan tanya apa saja tentang pengalaman saya di Scrum atau IT Project Management.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () =>
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);
  useEffect(() => {
    if (isOpen && autoPrompt) {
      handleSendMessage(null, autoPrompt);
      setAutoPrompt(null);
    }
  }, [isOpen, autoPrompt]);

  const handleSendMessage = async (e, forcedText = null) => {
    if (e) e.preventDefault();
    const textToSend = forcedText || input;
    if (!textToSend.trim()) return;
    if (!forcedText) setInput('');

    setMessages((prev) => [...prev, { role: 'user', text: textToSend }]);
    setIsLoading(true);

    // Kunci API yang Anda berikan
    // Mengambil API Key dari Environment Variable (Lebih Aman)
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const systemPrompt = `Anda adalah AI Assistant profesional Himawan Setya Sandy. Gunakan context: ${RESUME_CONTEXT}. Jawablah dengan maksimal 2-3 poin singkat. Gunakan format yang rapi. Jangan terlalu panjang. Jawab dalam Bahasa Indonesia.`;

    const fetchWithRetry = async (prompt, retries = 5, delay = 1000) => {
      for (let i = 0; i < retries; i++) {
        try {
          const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                systemInstruction: { parts: [{ text: systemPrompt }] },
              }),
            }
          );

          if (response.status === 429) {
            // Error Quota: Tunggu lebih lama
            await new Promise((resolve) => setTimeout(resolve, delay * 2));
            continue;
          }

          if (!response.ok) {
            const errorBody = await response.json();
            console.error('API Error Detail:', errorBody);
            throw new Error('API Error');
          }

          const data = await response.json();
          return data.candidates?.[0]?.content?.parts?.[0]?.text;
        } catch (error) {
          if (i === retries - 1) throw error;
          await new Promise((resolve) => setTimeout(resolve, delay));
          delay *= 2;
        }
      }
    };

    try {
      const aiResponse = await fetchWithRetry(textToSend);
      if (aiResponse) {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', text: aiResponse },
        ]);
      } else {
        throw new Error('No response');
      }
    } catch (error) {
      console.error('Final catch error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: 'Mohon maaf, terjadi gangguan pada koneksi AI. Silakan coba lagi nanti atau hubungi Himawan langsung.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen)
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg text-white transition-all hover:scale-110 shadow-blue-500/20"
      >
        <Bot size={24} />
      </button>
    );

  return (
    <div className="fixed bottom-8 right-8 z-50 w-[90vw] md:w-[400px] h-[500px] bg-[#0A0A0A] border border-white/10 rounded-lg shadow-2xl flex flex-col overflow-hidden text-left animate-fade-in-up">
      <div className="p-4 border-b border-white/10 bg-[#0F0F0F] flex justify-between items-center text-white">
        <span className="text-sm font-medium">Asisten AI Himawan</span>
        <button onClick={() => setIsOpen(false)}>
          <X size={18} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-lg text-sm whitespace-pre-wrap ${
                msg.role === 'user'
                  ? 'bg-blue-600/20 border border-blue-500/30 text-white shadow-md'
                  : 'bg-white/5 border border-white/10 text-gray-300 shadow-md'
              }`}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 p-3 rounded-lg">
              <Loader2 size={16} className="animate-spin text-blue-400" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="px-4 pb-3 flex flex-wrap gap-2 bg-[#0F0F0F]">
        {[
          'Apa keahlian Anda?',
          'Apa pencapaian terbesar sebagai PMO?',
          'Bagaimana cara menangani hambatan tim?',
          'Detail pengalaman di proyek anda?',
          'Bagaimana cara anda mengelola SLA?',
          'Cara menjadwalkan interview?',
        ].map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => handleSendMessage(null, q)}
            className="text-[10px] bg-blue-600/10 border border-blue-500/20 text-blue-300 px-3 py-1 rounded-full hover:bg-blue-600/30 transition-all"
          >
            {q}
          </button>
        ))}
      </div>
      <form
        onSubmit={(e) => handleSendMessage(e)}
        className="p-4 bg-[#0F0F0F] border-t border-white/10"
      >
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tanya tentang Himawan..."
            className="w-full bg-[#050505] border border-white/10 rounded-md py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-blue-500/50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-blue-400 disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
