import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

// Define the output directory
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4'
});

const marginX = 20; // safe margin of at least 20 mm on all sides
let posY = 20;       // safe margin of at least 20 mm on all sides
const printableWidth = 170; // 210 - (20 * 2)

// Deep blue brand color matching the official CV
const primaryColor = [11, 41, 133]; // rgb(11, 41, 133)
const textColor = [0, 0, 0];       // Black
const subTextColor = [51, 65, 85]; // Dark Grey / Slate

const checkPageBreak = (neededHeight) => {
  if (posY + neededHeight > 277) {
    doc.addPage();
    posY = 20; // reset to safe top margin
    return true;
  }
  return false;
};

const drawCenteredHeader = (title, y) => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(title, 105, y, { align: 'center' });
  
  // Underline
  const textWidth = doc.getTextWidth(title);
  doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setLineWidth(0.3);
  doc.line(105 - (textWidth / 2), y + 1, 105 + (textWidth / 2), y + 1);
};

const renderSectionHeader = (title) => {
  checkPageBreak(12);
  drawCenteredHeader(title, posY);
  posY += 6;
};

// Title: "Jamiati Sobri"
doc.setFont('helvetica', 'bold');
doc.setFontSize(18);
doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
doc.text('Jamiati Sobri', 105, posY, { align: 'center' });
posY += 5;

// Subtitle
doc.setFont('helvetica', 'bold');
doc.setFontSize(10.5);
doc.text('Social Media Strategist – Digital Marketing - Undergraduate Student', 105, posY, { align: 'center' });
posY += 5;

// Contact Info
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);

const emailText = 'jamiatisobri@gmail.com';
const linkedinText = 'LinkedIn';
const portfolioText = 'Portfolio';

const prefixText = 'Yogyakarta, Indonesia | ';
const middleText1 = ' | 089688478010 | ';
const middleText2 = ' | ';

const prefixWidth = doc.getTextWidth(prefixText);
const emailWidth = doc.getTextWidth(emailText);
const middle1Width = doc.getTextWidth(middleText1);
const linkedinWidth = doc.getTextWidth(linkedinText);
const middle2Width = doc.getTextWidth(middleText2);
const portfolioWidth = doc.getTextWidth(portfolioText);

const totalWidth = prefixWidth + emailWidth + middle1Width + linkedinWidth + middle2Width + portfolioWidth;
let startX = 105 - (totalWidth / 2);

// Draw prefixText (black)
doc.setTextColor(textColor[0], textColor[1], textColor[2]);
doc.text(prefixText, startX, posY);
startX += prefixWidth;

// Draw emailText (primaryColor, clickable)
doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
doc.text(emailText, startX, posY);
// Underline email
doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
doc.setLineWidth(0.2);
doc.line(startX, posY + 0.5, startX + emailWidth, posY + 0.5);
doc.link(startX, posY - 2.5, emailWidth, 3.5, { url: 'mailto:jamiatisobri@gmail.com' });
startX += emailWidth;

// Draw middleText1 (black)
doc.setTextColor(textColor[0], textColor[1], textColor[2]);
doc.text(middleText1, startX, posY);
startX += middle1Width;

// Draw linkedinText (primaryColor, clickable)
doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
doc.text(linkedinText, startX, posY);
// Underline LinkedIn
doc.line(startX, posY + 0.5, startX + linkedinWidth, posY + 0.5);
doc.link(startX, posY - 2.5, linkedinWidth, 3.5, { url: 'https://www.linkedin.com/in/jamiati-sobri' });
startX += linkedinWidth;

// Draw middleText2 (black)
doc.setTextColor(textColor[0], textColor[1], textColor[2]);
doc.text(middleText2, startX, posY);
startX += middle2Width;

// Draw portfolioText (primaryColor, clickable)
doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
doc.text(portfolioText, startX, posY);
// Underline Portfolio
doc.line(startX, posY + 0.5, startX + portfolioWidth, posY + 0.5);
const portfolioUrl = 'https://bit.ly/webportofoliomia';
doc.link(startX, posY - 2.5, portfolioWidth, 3.5, { url: portfolioUrl });

// Restore text color to black/slate
doc.setTextColor(textColor[0], textColor[1], textColor[2]);
posY += 4;

// Divider line
doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
doc.setLineWidth(0.3);
doc.line(marginX, posY, 210 - marginX, posY);
posY += 8;

// ABOUT ME
const summaryText = "A Digital Business student at Universitas Teknologi Digital Indonesia (UTDI) with a growing interest and expertise in Social Media Strategy, Digital Advertising, and Business Analysis. Possesses a solid understanding of digital marketing, social media management, content strategy, branding, and marketing communication. Skilled in analyzing marketing performance and business data to generate actionable insights that support decision-making and optimize marketing strategies. A collaborative, adaptable, and results-oriented individual committed to continuous learning, professional growth, and contributing effectively to the creative, business, and technology industries.";
const splitSummary = doc.splitTextToSize(summaryText, printableWidth);
const summaryHeight = (splitSummary.length * 4) + 2;

renderSectionHeader('ABOUT ME');
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(subTextColor[0], subTextColor[1], subTextColor[2]);
doc.text(splitSummary, marginX, posY, { align: 'justify' });
posY += summaryHeight + 6;

// WORK EXPERIENCE Header
renderSectionHeader('WORK EXPERIENCE');

// Experience 1: UTDI (Student Staff)
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(textColor[0], textColor[1], textColor[2]);
doc.text('Student Staff - Universitas Teknologi Digital Indonesia (UTDI)', marginX, posY);
doc.text('May 2025 – present', 210 - marginX, posY, { align: 'right' });
posY += 4.5;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(subTextColor[0], subTextColor[1], subTextColor[2]);
const utdi_desc = 'Contributing to student recruitment and institutional branding efforts by leading social media initiatives, developing content strategies, monitoring campaign performance, and supporting integrated digital marketing activities across multiple platforms.';
const splitUtdiDesc = doc.splitTextToSize(utdi_desc, printableWidth);
doc.text(splitUtdiDesc, marginX, posY, { align: 'justify' });
posY += (splitUtdiDesc.length * 3.8) + 2;

// Sub-role: Social Media Strategist & Digital Advertiser
doc.setFont('helvetica', 'bolditalic');
doc.setFontSize(9);
doc.setTextColor(textColor[0], textColor[1], textColor[2]);
doc.text('Social Media Strategist & Digital Advertiser (Admission & Marketing Division)', marginX, posY);
posY += 4;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
const utdi_bullets = [
  'Led digital marketing campaigns for student admissions (PMB) and institutional branding across multiple social media platforms.',
  'Managed organic and paid campaigns, delivering 2.7M+ impressions, 906K+ reach, and 19K+ engagements in 90 days.',
  'Optimized Meta Ads performance through audience targeting, creative testing, and campaign analytics, achieving CTR up to 1.44%.',
  'Drove 39K+ profile actions, including 37K+ profile visits, 1,335 website clicks, and 875 net follower growth.',
  'Delivered data-driven campaign reports and collaborated with creative teams to optimize content performance and marketing outcomes.',
  'Collaborated cross-functionally with creative and marketing teams to produce high-performing content that enhanced institutional branding and student engagement.'
];
utdi_bullets.forEach(bullet => {
  doc.text('•', marginX + 2, posY);
  const splitText = doc.splitTextToSize(bullet, printableWidth - 5);
  doc.text(splitText, marginX + 5, posY);
  posY += (splitText.length * 3.8);
});
posY += 6;

// Experience 2: Jogja Wisata Kain Kiloan
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(textColor[0], textColor[1], textColor[2]);
doc.text('Jogja Wisata Kain Kiloan (Textile)', marginX, posY);
doc.text('Jan 2022 – Oct 2024', 210 - marginX, posY, { align: 'right' });
posY += 4.5;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(subTextColor[0], subTextColor[1], subTextColor[2]);
doc.text('A company specializing in the textile industry, focusing on selling fabrics and textile materials.', marginX, posY);
posY += 5;

// Sub-role: Social Media Specialist
doc.setFont('helvetica', 'bolditalic');
doc.setFontSize(9);
doc.setTextColor(textColor[0], textColor[1], textColor[2]);
doc.text('Social Media Specialist', marginX, posY);
posY += 4;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(textColor[0], textColor[1], textColor[2]);
const jwwk_sms_bullets = [
  'Managed and grew social media presence on Instagram and Facebook.',
  'Administered Shopee marketplace account and facilitated online purchases.',
  'Increased social media engagement by 60% through interactive content strategies.',
  'Coordinated daily live-streaming sessions, each lasting 2-3 hours.',
  'Provided responsive customer service, assisting ~15 customers per day via social media.'
];
jwwk_sms_bullets.forEach(bullet => {
  doc.text('•', marginX + 2, posY);
  const splitText = doc.splitTextToSize(bullet, printableWidth - 5);
  doc.text(splitText, marginX + 5, posY);
  posY += (splitText.length * 3.8);
});
posY += 3;

// Sub-role: Personal Assistant
doc.setFont('helvetica', 'bolditalic');
doc.text('Personal Assistant', marginX, posY);
posY += 4;

const jwwk_pa_bullets = [
  'Manage purchasing for personal and business needs, handling budgets ranging from IDR 500K to 25 million.',
  'Design and distribute hiring flyers for multiple store branches.',
  'Handle recruitment communications, responding to -+70 job inquiries daily.',
  'Provide trusted assistance for coordination, purchasing, and operational support.'
];
jwwk_pa_bullets.forEach(bullet => {
  doc.text('•', marginX + 2, posY);
  const splitText = doc.splitTextToSize(bullet, printableWidth - 5);
  doc.text(splitText, marginX + 5, posY);
  posY += (splitText.length * 3.8);
});
posY += 6;

// EDUCATION Section
renderSectionHeader('EDUCATION');

doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(textColor[0], textColor[1], textColor[2]);
doc.text('Universitas Teknologi Digital Indonesia', marginX, posY);
doc.text('2024 - present', 210 - marginX, posY, { align: 'right' });
posY += 4.5;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(subTextColor[0], subTextColor[1], subTextColor[2]);
doc.text('Bachelor of Digital Business Candidate', marginX, posY);
posY += 4;
doc.text('Current GPA: 3.93 / 4.00', marginX, posY);
posY += 8;

// SKILLS Section
renderSectionHeader('SKILLS');

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(textColor[0], textColor[1], textColor[2]);

const skillsGrid = [
  ['Worksheet & Ms.Office', 'Business Development', 'Communication'],
  ['Meta Ads Manager', 'Content Strategist', 'Problem Solving']
];

skillsGrid.forEach(row => {
  doc.text(row[0], marginX, posY);
  doc.text(row[1], marginX + 60, posY);
  doc.text(row[2], marginX + 120, posY);
  posY += 4.5;
});
posY += 5;

// LICENSES & CERTIFICATIONS Section
renderSectionHeader('LICENSES & CERTIFICATIONS');

doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(textColor[0], textColor[1], textColor[2]);
doc.text('Practical Office Advance - Lembaga Sertivikasi Profesi BNSP', marginX, posY);
doc.text('2022', 210 - marginX, posY, { align: 'right' });

// Save directly to the public folder
const outputPath = path.join(publicDir, 'CV_Jamiati_Sobri.pdf');
const pdfBuffer = doc.output('arraybuffer');
fs.writeFileSync(outputPath, Buffer.from(pdfBuffer));

console.log('Successfully generated public/CV_Jamiati_Sobri.pdf');
