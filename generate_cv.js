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
doc.text('Yogyakarta, Indonesia | jamiatisobri@gmail.com | 089688478010 | LinkedIn | Portfolio', 105, posY, { align: 'center' });
posY += 4;

// Divider line
doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
doc.setLineWidth(0.3);
doc.line(marginX, posY, 210 - marginX, posY);
posY += 8;

// TENTANG SAYA
const summaryText = "A Digital Business student (Class of 2024) at Universitas Teknologi Digital Indonesia (UTDI) with experience as part of the marketing team in managing campus social media platforms, including Instagram, TikTok, YouTube, and Facebook. Currently pursuing a Bachelor’s degree in Digital Business to develop skills in digital marketing, social media management, and branding, and to apply them professionally. Highly motivated to contribute effectively in the dynamic creative and technology industries.";
const splitSummary = doc.splitTextToSize(summaryText, printableWidth);
const summaryHeight = (splitSummary.length * 4) + 2;

renderSectionHeader('TENTANG SAYA');
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(subTextColor[0], subTextColor[1], subTextColor[2]);
doc.text(splitSummary, marginX, posY, { align: 'justify' });
posY += summaryHeight + 6;

// PENGALAMAN BEKERJA Header
renderSectionHeader('PENGALAMAN BEKERJA');

// Experience 1: Jogja Wisata Kain Kiloan
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(textColor[0], textColor[1], textColor[2]);
doc.text('Jogja Wisata Kain Kiloan (Textile)', marginX, posY);
doc.text('Jan 2022 - Oct 2024', 210 - marginX, posY, { align: 'right' });
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

// Experience 2: UTDI (Social Media Strategist)
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(textColor[0], textColor[1], textColor[2]);
doc.text('Universitas Teknologi Digital Indonesia (UTDI)', marginX, posY);
doc.text('Sept 2024 - saat ini', 210 - marginX, posY, { align: 'right' });
posY += 4.5;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(subTextColor[0], subTextColor[1], subTextColor[2]);
doc.text('A private university focused on digital technology, business, and creative industries, located in Yogyakarta.', marginX, posY);
posY += 5;

// Sub-role: Social Media Strategist
doc.setFont('helvetica', 'bolditalic');
doc.setFontSize(9);
doc.setTextColor(textColor[0], textColor[1], textColor[2]);
doc.text('Social Media Strategist', marginX, posY);
posY += 4;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
const utdi_bullets = [
  'Manage Social media management & content strategy',
  'Content planning & calendar development',
  'Engagement rate & performance analysis',
  'Digital marketing support (PMB campaign)',
  'Branding & audience growth',
  'Reporting & insight optimization'
];
utdi_bullets.forEach(bullet => {
  doc.text('•', marginX + 2, posY);
  const splitText = doc.splitTextToSize(bullet, printableWidth - 5);
  doc.text(splitText, marginX + 5, posY);
  posY += (splitText.length * 3.8);
});
posY += 6;

// PENDIDIKAN Section
renderSectionHeader('PENDIDIKAN');

doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(textColor[0], textColor[1], textColor[2]);
doc.text('Universitas Teknologi Digital Indonesia', marginX, posY);
doc.text('2024 - 2028', 210 - marginX, posY, { align: 'right' });
posY += 4.5;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(subTextColor[0], subTextColor[1], subTextColor[2]);
doc.text('S1: Bisnis Digital', marginX, posY);
posY += 8;

// KEAHLIAN Section
renderSectionHeader('KEAHLIAN');

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(textColor[0], textColor[1], textColor[2]);

const skillsGrid = [
  ['CRM', 'Online Marketplace', 'Communication'],
  ['Problem Solving', 'Bussiness Development', 'Canva'],
  ['SEO', 'Google Workspace', 'Capcut'],
  ['Office Administration', 'Adaptif', 'Leadership']
];

skillsGrid.forEach(row => {
  doc.text(row[0], marginX, posY);
  doc.text(row[1], marginX + 60, posY);
  doc.text(row[2], marginX + 120, posY);
  posY += 4.5;
});
posY += 5;

// LISENSI & SERTIFIKAT Section
renderSectionHeader('LISENSI & SERTIFIKAT');

doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(textColor[0], textColor[1], textColor[2]);
doc.text('Practical Office Advance – Lembaga Sertivikasi Profesi', marginX, posY);
doc.text('2022', 210 - marginX, posY, { align: 'right' });

// Save directly to the public folder
const outputPath = path.join(publicDir, 'CV_Jamiati_Sobri.pdf');
const pdfBuffer = doc.output('arraybuffer');
fs.writeFileSync(outputPath, Buffer.from(pdfBuffer));

console.log('Successfully generated public/CV_Jamiati_Sobri.pdf');
