document.addEventListener("DOMContentLoaded", function () {

  // ==============================
  // ข้อมูลทุนการศึกษา
  // ==============================

  const scholarships = [
    {
      id: 1,
      name: "ทุนรัฐบาลเกาหลี GKS",
      level: "ปริญญาตรี",
      country: "เกาหลีใต้",
      type: "ทุนเต็มจำนวน",
      deadline: "ตรวจสอบตามประกาศประจำปี",
      description:
        "ทุนรัฐบาลเกาหลีสำหรับนักศึกษาต่างชาติ ครอบคลุมค่าเล่าเรียน ค่าเดินทาง ค่าครองชีพ และการสนับสนุนด้านการศึกษา",
      icon: "🇰🇷",
      link: "https://www.studyinkorea.go.kr/"
    },

    {
      id: 2,
      name: "ทุนรัฐบาลญี่ปุ่น MEXT",
      level: "ปริญญาตรี",
      country: "ญี่ปุ่น",
      type: "ทุนเต็มจำนวน",
      deadline: "ตรวจสอบตามประกาศประจำปี",
      description:
        "ทุนรัฐบาลญี่ปุ่นสำหรับนักศึกษาต่างชาติ มีหลายระดับการศึกษาและหลายสาขาวิชา",
      icon: "🇯🇵",
      link: "https://www.studyinjapan.go.jp/"
    },

    {
      id: 3,
      name: "ทุนรัฐบาลจีน CSC",
      level: "ปริญญาตรี",
      country: "จีน",
      type: "ทุนเต็มจำนวน",
      deadline: "แตกต่างตามมหาวิทยาลัย",
      description:
        "ทุนรัฐบาลจีนสำหรับนักศึกษาต่างชาติ มีทั้งระดับปริญญาตรี ปริญญาโท และปริญญาเอก",
      icon: "🇨🇳",
      link: "https://www.campuschina.org/"
    },

    {
      id: 4,
      name: "ทุน Erasmus Mundus",
      level: "ปริญญาโท",
      country: "ยุโรป",
      type: "ทุนเต็มจำนวน",
      deadline: "แตกต่างตามหลักสูตร",
      description:
        "ทุนสำหรับศึกษาต่อระดับปริญญาโทในหลายประเทศของยุโรป โดยสามารถเรียนในหลายมหาวิทยาลัยตามหลักสูตร",
      icon: "🇪🇺",
      link: "https://erasmus-plus.ec.europa.eu/"
    },

    {
      id: 5,
      name: "ทุน Chevening",
      level: "ปริญญาโท",
      country: "สหราชอาณาจักร",
      type: "ทุนเต็มจำนวน",
      deadline: "ตรวจสอบรอบการสมัครล่าสุด",
      description:
        "ทุนรัฐบาลสหราชอาณาจักรสำหรับนักศึกษาต่างชาติระดับปริญญาโท",
      icon: "🇬🇧",
      link: "https://www.chevening.org/"
    },

    {
      id: 6,
      name: "ทุน Australia Awards",
      level: "ปริญญาโท",
      country: "ออสเตรเลีย",
      type: "ทุนเต็มจำนวน",
      deadline: "แตกต่างตามประเทศ",
      description:
        "ทุนรัฐบาลออสเตรเลียสำหรับนักศึกษาจากประเทศที่เข้าร่วมโครงการ",
      icon: "🇦🇺",
      link: "https://www.australiaawards.gov.au/"
    },

    {
      id: 7,
      name: "ทุน DAAD",
      level: "ปริญญาโท",
      country: "เยอรมนี",
      type: "ทุนการศึกษา",
      deadline: "แตกต่างตามโครงการ",
      description:
        "แหล่งทุนการศึกษาสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อในประเทศเยอรมนี",
      icon: "🇩🇪",
      link: "https://www.daad.de/"
    },

    {
      id: 8,
      name: "ทุนรัฐบาลสิงคโปร์ SINGA",
      level: "ปริญญาเอก",
      country: "สิงคโปร์",
      type: "ทุนเต็มจำนวน",
      deadline: "แตกต่างตามรอบสมัคร",
      description:
        "ทุนสำหรับผู้ที่ต้องการศึกษาต่อระดับปริญญาเอกด้านวิทยาศาสตร์และสาขาที่เกี่ยวข้องในสิงคโปร์",
      icon: "🇸🇬",
      link: "https://www.a-star.edu.sg/"
    },

    {
      id: 9,
      name: "ทุน Fulbright",
      level: "ปริญญาโท",
      country: "สหรัฐอเมริกา",
      type: "ทุนเต็มจำนวน",
      deadline: "แตกต่างตามประเทศ",
      description:
        "โครงการทุนการศึกษานานาชาติสำหรับนักศึกษา นักวิจัย และผู้เชี่ยวชาญ",
      icon: "🇺🇸",
      link: "https://foreign.fulbrightonline.org/"
    },

    {
      id: 10,
      name: "ทุนสำหรับนักเรียนมัธยม",
      level: "ม.ปลาย",
      country: "ไทย",
      type: "ทุนการศึกษา",
      deadline: "แตกต่างตามหน่วยงาน",
      description:
        "ทุนสำหรับนักเรียนระดับมัธยมศึกษาตอนปลายที่ต้องการศึกษาต่อและพัฒนาศักยภาพ",
      icon: "🏫",
      link: "https://www.moe.go.th/"
    },

    {
      id: 11,
      name: "ทุนปริญญาตรีนานาชาติ",
      level: "ปริญญาตรี",
      country: "หลายประเทศ",
      type: "ทุนบางส่วน",
      deadline: "แตกต่างตามมหาวิทยาลัย",
      description:
        "รวมโอกาสทุนสำหรับผู้สมัครระดับปริญญาตรีจากต่างประเทศ",
      icon: "🎓",
      link: "https://www.educations.com/"
    },

    {
      id: 12,
      name: "ทุนวิจัยระดับปริญญาเอก",
      level: "ปริญญาเอก",
      country: "หลายประเทศ",
      type: "ทุนวิจัย",
      deadline: "แตกต่างตามโครงการ",
      description:
        "โอกาสสำหรับผู้ที่ต้องการทำวิจัยและศึกษาต่อระดับปริญญาเอกในต่างประเทศ",
      icon: "🔬",
      link: "https://www.findaphd.com/"
     },

     {
  id: 13,
  name: "ทุนเล่าเรียนหลวง",
  level: "ม.ปลาย",
  country: "ประเทศไทย",
  type: "ทุนรัฐบาล",
  deadline: "10–30 ต.ค. 2568 (รอบปี 2569 ปิดรับสมัครแล้ว)",
  description: "ทุนรัฐบาลสำหรับนักเรียนชั้น ม.6 ที่มีผลการเรียนดี เพื่อศึกษาต่อต่างประเทศ",
  icon: "🇹🇭",
  link: "https://www.ocsc.go.th/?p=113800&post_type=scholarship"
     },

     {
  id: 14,
  name: "ทุนรัฐบาลด้านวิทยาศาสตร์และเทคโนโลยี",
  level: "ม.ปลาย",
  country: "ประเทศไทย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศรอบล่าสุด",
  description: "ทุนรัฐบาลสำหรับนักเรียน ม.ปลายที่มีศักยภาพด้านวิทยาศาสตร์และเทคโนโลยี",
  icon: "🔬",
  link: "https://stscholar.nstda.or.th/"
    },

    {
  id: 15,
  name: "ทุนกระทรวงการต่างประเทศ",
  level: "ม.ปลาย",
  country: "ประเทศไทย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศรอบล่าสุด",
  description: "ทุนรัฐบาลที่จัดสรรผ่านกระทรวงการต่างประเทศสำหรับนักเรียนระดับมัธยมศึกษาตอนปลาย",
  icon: "🌏",
  link: "https://www.ocsc.go.th/scholarships/highschool-scholarships/"
    },

    {
  id: 16,
  name: "ทุนวิวัฒนไชยานุสรณ์",
  level: "ม.ปลาย",
  country: "ประเทศไทย",
  type: "ทุนรัฐบาล",
  deadline: "10–30 ต.ค. 2568 (รอบปี 2569 ปิดรับสมัครแล้ว)",
  description: "ทุนรัฐบาลระดับมัธยมศึกษาตอนปลายสำหรับผู้มีคุณสมบัติตามประกาศ",
  icon: "🎓",
  link: "https://www.ocsc.go.th/?p=113826&post_type=scholarship"
      },

      {
  id: 17,
  name: "ทุน ODOS ระดับมัธยมศึกษาตอนปลายและ ปวช.",
  level: "ม.ปลาย/ปวช.",
  country: "ประเทศไทย",
  type: "ทุนให้เปล่า",
  deadline: "ตรวจสอบรอบการคัดเลือก",
  description: "โครงการทุนการศึกษาเพื่อขยายโอกาสและพัฒนาประเทศ สำหรับนักเรียนที่เข้าเกณฑ์",
  icon: "⭐",
  link: "https://www.moe.go.th/odos2568/"
     },

     {
  id: 18,
  name: "ทุนก้าวเพื่อน้อง",
  level: "ม.ปลาย/ปวช.",
  country: "ประเทศไทย",
  type: "ทุนการศึกษา",
  deadline: "20 ก.พ.–20 มี.ค. 2569 (รอบปี 2569)",
  description: "ทุนสำหรับนักเรียนที่ขาดแคลนทุนทรัพย์หรือด้อยโอกาส เพื่อศึกษาต่อระดับ ม.ปลายหรือ ปวช.",
  icon: "❤️",
  link: "https://kaopueanong.eef.or.th/"
     },

     {
  id: 19,
  name: "ทุนการศึกษากองทุนวารี–สังวรณ์",
  level: "ม.ปลาย",
  country: "ประเทศไทย",
  type: "ทุนให้เปล่า",
  deadline: "ตรวจสอบกับสถานศึกษา/หน่วยงานต้นสังกัด",
  description: "ทุนสำหรับนักเรียนที่เรียนดี มีความประพฤติดี และขาดแคลนทุนทรัพย์",
  icon: "📚",
  link: "https://www.obec.go.th/"
      },

      {
  id: 20,
  name: "ทุนการศึกษามูลนิธิศึกษาวิจัยและพัฒนาเพื่อสังคมวิทยาศาสตร์และเทคโนโลยี",
  level: "ม.ปลาย",
  country: "ประเทศไทย",
  type: "ทุนต่อเนื่อง",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักเรียนและนักศึกษาที่ขาดแคลนทุนทรัพย์และมีความมุ่งมั่นในการศึกษา",
  icon: "🧪",
  link: "https://findstudentship.eef.or.th/"
      },
    
      {
  id: 21,
  name: "MEXT Scholarship",
  level: "ม.ปลาย/ปริญญาตรี/โท/เอก",
  country: "ญี่ปุ่น",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประเภทและรอบสมัคร",
  description: "ทุนรัฐบาลญี่ปุ่นสำหรับนักศึกษาต่างชาติ มีหลายประเภทตั้งแต่ระดับปริญญาตรีจนถึงบัณฑิตศึกษา",
  icon: "🇯🇵",
  link: "https://www.studyinjapan.go.jp/th/planning/scholarships/mext-scholarships/"
     },

     {
  id: 22,
  name: "GKS (Global Korea Scholarship)",
  level: "ปริญญาตรี/โท/เอก",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามระดับและรอบสมัคร",
  description: "ทุนรัฐบาลเกาหลีใต้สำหรับนักศึกษาต่างชาติ ครอบคลุมทั้งระดับปริญญาตรีและบัณฑิตศึกษา",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/ko/plan/scholarship.do?tab=gks-tab1"
     },

     {
  id: 23,
  name: "Chevening Scholarship",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลสหราชอาณาจักรสำหรับหลักสูตรปริญญาโท 1 ปี",
  icon: "🇬🇧",
  link: "https://www.chevening.org/scholarships/"
     },

     {
  id: 24,
  name: "GREAT Scholarships",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนรัฐบาล/มหาวิทยาลัย",
  deadline: "แตกต่างตามมหาวิทยาลัย",
  description: "ทุนสำหรับนักศึกษาจากประเทศที่เข้าร่วมโครงการเพื่อศึกษาหลักสูตรปริญญาโทในสหราชอาณาจักร",
  icon: "🇬🇧",
  link: "https://study-uk.britishcouncil.org/scholarships-funding/great-scholarships"
     },

     {
  id: 25,
  name: "Australia Awards Scholarships",
  level: "ปริญญาตรี/โท/เอก ตามประเทศ",
  country: "ออสเตรเลีย",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประเทศ",
  description: "ทุนรัฐบาลออสเตรเลียสำหรับผู้สมัครจากประเทศที่เข้าร่วมโครงการ",
  icon: "🇦🇺",
link:"https://www.education.gov.au/international-education/financial-assistance-international-students"
    },

    {
  id: 26,
  name: "Türkiye Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "ตุรกี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามรอบสมัคร",
  description: "ทุนรัฐบาลตุรกีสำหรับนักศึกษาต่าง. ชาติ ครอบคลุมหลายระดับการศึกษา",
  icon: "🇹🇷",
  link:"https://turkiyeburslari.gov.tr/"
   },

{
  id: 27,
  name: "Stipendium Hungaricum",
  level: "ปริญญาตรี/โท/เอก",
  country: "ฮังการี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามรอบสมัคร",
  description: "ทุนรัฐบาลฮังการีสำหรับนักศึกษาต่างชาติ มีหลักสูตรหลายสาขา",
  icon: "🇭🇺",
link:"https://stipendiumhungaricum.hu/"
},
{
  id: 28,
  name: "Brunei Darussalam Government Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "บรูไน",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศรอบล่าสุด",
  description: "ทุนรัฐบาลบรูไนสำหรับนักศึกษาต่างชาติไปศึกษาต่อในบรูไน",
  icon: "🇧🇳",
  link: "https://www.moe.gov.bn/SitePages/Department%20of%20Scholarship%20Management.aspx"
},{
  id: 29,
  name: "ทุนการศึกษามูลนิธิวิชัย ศรีวัฒนประภา",
  level: "ม.ปลาย",
  country: "ประเทศไทย",
  type: "ทุนให้เปล่า",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักเรียนที่กำลังศึกษาหรือต้องการศึกษาต่อ ม.4 และขาดแคลนทุนทรัพย์ โดยทุนสามารถต่อเนื่องจนจบปริญญาตรีตามเงื่อนไข",
  icon: "🇹🇭",
  link: "https://vichaisrivaddhanaprabha.com/scholarship-th/"
},

{
  id: 30,
  name: "ทุนมูลนิธิเกื้อฝันเด็ก",
  level: "ม.ปลาย/ปวช.",
  country: "ประเทศไทย",
  type: "ทุนให้เปล่าต่อเนื่อง",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักเรียนที่ขาดแคลนทุนทรัพย์ มีความประพฤติดี และมุ่งมั่นศึกษาต่อ",
  icon: "🇹🇭",
  link: "https://www.childsdream.org/"
},

{
  id: 31,
  name: "ทุนมูลนิธิศึกษาวิจัยและพัฒนาเพื่อสังคมวิทยาศาสตร์และเทคโนโลยี",
  level: "ม.ปลาย/ปวช.",
  country: "ประเทศไทย",
  type: "ทุนต่อเนื่อง",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักเรียนและนักศึกษาที่ขาดแคลนทุนทรัพย์และมีความมุ่งมั่นตั้งใจศึกษา โดยมีทุนตั้งแต่ ม.ต้น ถึงปริญญาตรี",
  icon: "🇹🇭",
  link: "https://findstudentship.eef.or.th/"
},

{
  id: 32,
  name: "ทุนรัฐบาลด้านวิทยาศาสตร์และเทคโนโลยี",
  level: "ม.ปลาย",
  country: "ประเทศไทย",
  type: "ทุนรัฐบาล",
  deadline: "รอบปี 2569 ปิดรับสมัครแล้ว",
  description: "ทุนรัฐบาลระดับมัธยมศึกษาตอนปลายด้านวิทยาศาสตร์และเทคโนโลยี มี 17 หน่วยทุนในปีงบประมาณ 2569",
  icon: "🔬",
  link: "https://stscholar.nstda.or.th/"
},

{
  id: 33,
  name: "ทุนเล่าเรียนหลวง",
  level: "ม.6",
  country: "ประเทศไทย",
  type: "ทุนรัฐบาล",
  deadline: "รอบปี 2569 ปิดรับสมัครแล้ว",
  description: "ทุนรัฐบาลสำหรับนักเรียนมัธยมศึกษาชั้นปีสุดท้าย โดยปีงบประมาณ 2569 มี 9 ทุน",
  icon: "🎓",
  link: "https://www.ocsc.go.th/?p=113800&post_type=scholarship"
},

{
  id: 34,
  name: "ทุนรัฐบาลตามความต้องการของกระทรวงการต่างประเทศ",
  level: "ม.6",
  country: "ประเทศไทย",
  type: "ทุนรัฐบาล",
  deadline: "รอบปี 2569 ปิดรับสมัครแล้ว",
  description: "ทุนรัฐบาลสำหรับนักเรียนมัธยมศึกษาชั้นปีสุดท้าย โดยปีงบประมาณ 2569 มี 5 ทุน",
  icon: "🌏",
  link: "https://www.ocsc.go.th/?p=113809&post_type=scholarship"
},

{
  id: 35,
  name: "ทุนการศึกษาปีการศึกษา 2569 มูลนิธิทวี บุณยเกตุ",
  level: "ม.ปลาย/ปวช.",
  country: "ประเทศไทย",
  type: "ทุนให้เปล่า",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักเรียนมัธยมศึกษาและสายอาชีพที่เรียนดี ประพฤติดี และขาดแคลนทุนทรัพย์",
  icon: "📚",
  link: "https://findstudentship.eef.or.th/"
},{
  id: 36,
  name: "Eiffel Excellence Scholarship",
  level: "ปริญญาโท/เอก",
  country: "ฝรั่งเศส",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามรอบสมัคร",
  description: "ทุนรัฐบาลฝรั่งเศสสำหรับนักศึกษาต่างชาติ",
  icon: "🇫🇷",
  link: "https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence"
},
{
  id: 37,
  name: "Chinese Government Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "จีน",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประเทศและมหาวิทยาลัย",
  description: "ทุนรัฐบาลจีนสำหรับนักศึกษาต่างชาติ",
  icon: "🇨🇳",
  link: "https://www.campuschina.org/"
},
{
  id: 38,
  name: "Brunei Government Scholarship",
  level: "ปริญญาตรี/โท",
  country: "บรูไน",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามปี",
  description: "ทุนรัฐบาลบรูไนสำหรับนักศึกษาต่างชาติ",
  icon: "🇧🇳",
  link: "https://www.moe.gov.bn/"
},
{
  id: 39,
  name: "New Zealand Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "นิวซีแลนด์",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประเทศ",
  description: "ทุนการศึกษาของรัฐบาลนิวซีแลนด์สำหรับผู้สมัครจากประเทศที่เข้าร่วมโครงการ",
  icon: "🇳🇿",
  link: "https://www.nzscholarships.govt.nz/"
},
{
  id: 40,
  name: "Erasmus Mundus Joint Masters",
  level: "ปริญญาโท",
  country: "สหภาพยุโรป",
  type: "ทุนสหภาพยุโรป",
  deadline: "แตกต่างตามหลักสูตร",
  description: "ทุนสำหรับหลักสูตรปริญญาโทนานาชาติที่เรียนในหลายประเทศ",
  icon: "🇪🇺",
  link: "https://erasmus-plus.ec.europa.eu/"
},
{
  id: 41,
  name: "Thailand Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "ประเทศไทย",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามมหาวิทยาลัยและโครงการ",
  description: "โครงการทุนการศึกษาสำหรับนักศึกษาต่างชาติในประเทศไทย",
  icon: "🇹🇭",
  link: "https://www.ops.go.th/en/"
},
{
  id: 42,
  name: "Swiss Government Excellence Scholarships",
  level: "โท/เอก/วิจัย",
  country: "สวิตเซอร์แลนด์",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประเทศ",
  description: "ทุนรัฐบาลสวิตเซอร์แลนด์สำหรับนักศึกษาต่างชาติและนักวิจัย",
  icon: "🇨🇭",
  link: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html"
},
{
  id: 43,
  name: "Italy Government Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "อิตาลี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามปี",
  description: "ทุนรัฐบาลอิตาลีสำหรับนักศึกษาต่างชาติ",
  icon: "🇮🇹",
  link: "https://studyinitaly.esteri.it/"
},
{
  id: 44,
  name: "Azerbaijan Government Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "อาเซอร์ไบจาน",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามปี",
  description: "ทุนรัฐบาลอาเซอร์ไบจานสำหรับนักศึกษาต่างชาติ",
  icon: "🇦🇿",
  link: "https://studyinazerbaijan.edu.az/"
},
{
  id: 45,
  name: "Poland Government Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "โปแลนด์",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุนและโครงการสนับสนุนการศึกษาสำหรับนักศึกษาต่างชาติ",
  icon: "🇵🇱",
  link: "https://study.gov.pl/"
},
{
  id: 46,
  name: "Czech Government Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "สาธารณรัฐเช็ก",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุนรัฐบาลสาธารณรัฐเช็กสำหรับนักศึกษาจากประเทศที่กำหนด",
  icon: "🇨🇿",
  link: "https://www.studyin.cz/"
},
{
  id: 47,
  name: "Finnish Scholarships",
  level: "ปริญญาโท/เอก",
  country: "ฟินแลนด์",
  type: "ทุนรัฐบาล/มหาวิทยาลัย",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุนและทุนสนับสนุนสำหรับนักศึกษาต่างชาติในฟินแลนด์",
  icon: "🇫🇮",
  link: "https://www.studyinfinland.fi/"
},
{
  id: 48,
  name: "Swedish Institute Scholarships",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามรอบสมัคร",
  description: "ทุน Swedish Institute สำหรับนักศึกษาต่างชาติระดับปริญญาโท",
  icon: "🇸🇪",
  link: "https://si.se/en/apply/scholarships/"
},
{
  id: 49,
  name: "ทุนรัฐบาลสหราชอาณาจักร Chevening",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อระดับปริญญาโทในสหราชอาณาจักร",
  icon: "🇬🇧",
  link: "https://www.chevening.org/"
},
{
  id: 50,
  name: "ทุนรัฐบาลตุรกี Türkiye Scholarships",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ตุรกี",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลตุรกีสำหรับนักศึกษาต่างชาติ",
  icon: "🇹🇷",
  link: "https://www.turkiyeburslari.gov.tr/"
},
{
  id: 51,
  name: "ทุนรัฐบาลจีน CSC",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "จีน",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลจีนสำหรับนักศึกษาต่างชาติ",
  icon: "🇨🇳",
  link: "https://www.campuschina.org/"
},
{
  id: 52,
  name: "ทุน Stipendium Hungaricum",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ฮังการี",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลฮังการีสำหรับนักศึกษาต่างชาติ",
  icon: "🇭🇺",
  link: "https://stipendiumhungaricum.hu/"
},
{
  id: 53,
  name: "ทุน Erasmus Mundus",
  level: "ปริญญาโท",
  country: "ยุโรป",
  type: "ทุนเต็มจำนวน",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุนระดับปริญญาโทที่เปิดโอกาสให้เรียนในหลายประเทศของยุโรป",
  icon: "🇪🇺",
  link: "https://erasmus-plus.ec.europa.eu/"
},
{
  id: 54,
  name: "ทุนรัฐบาลออสเตรเลีย Australia Awards",
  level: "ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลออสเตรเลียสำหรับนักศึกษาจากประเทศที่เข้าร่วมโครงการ",
  icon: "🇦🇺",
  link: "https://www.australiaawards.gov.au/"
},
{
  id: 55,
  name: "ทุนรัฐบาลนิวซีแลนด์ Manaaki",
  level: "ปริญญาโท",
  country: "นิวซีแลนด์",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลนิวซีแลนด์สำหรับนักศึกษาต่างชาติ",
  icon: "🇳🇿",
  link: "https://www.nzscholarships.govt.nz/"
},
{
  id: 56,
  name: "ทุนรัฐบาลสวีเดน SI Scholarship",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อระดับปริญญาโทในสวีเดน",
  icon: "🇸🇪",
  link: "https://si.se/en/apply/scholarships/"
},
{
  id: 57,
  name: "ทุนรัฐบาลสวิตเซอร์แลนด์",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "สวิตเซอร์แลนด์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลสวิตเซอร์แลนด์สำหรับนักศึกษาต่างชาติ",
  icon: "🇨🇭",
  link: "https://www.sbfi.admin.ch/"
},
{
  id: 58,
  name: "ทุนรัฐบาลไอร์แลนด์",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไอร์แลนด์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อในประเทศไอร์แลนด์",
  icon: "🇮🇪",
  link: "https://hea.ie/"
},
{
  id: 59,
  name: "ทุน Fulbright Foreign Student Program",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "สหรัฐอเมริกา",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "โครงการทุนสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อในสหรัฐอเมริกา",
  icon: "🇺🇸",
  link: "https://foreign.fulbrightonline.org/"
},
{
  id: 60,
  name: "ทุนรัฐบาลแคนาดา Vanier",
  level: "ปริญญาเอก",
  country: "แคนาดา",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาระดับปริญญาเอกและนักวิจัยที่มีศักยภาพ",
  icon: "🇨🇦",
  link: "https://vanier.gc.ca/"
},
{
  id: 61,
  name: "ทุน Ontario Trillium Scholarship",
  level: "ปริญญาเอก",
  country: "แคนาดา",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามมหาวิทยาลัย",
  description: "ทุนระดับปริญญาเอกสำหรับนักศึกษาต่างชาติในรัฐออนแทรีโอ",
  icon: "🇨🇦",
  link: "https://www.ontario.ca/"
},
{
  id: 62,
  name: "ทุน McCall MacBain Scholarship",
  level: "ปริญญาโท",
  country: "แคนาดา",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับผู้สมัครระดับบัณฑิตศึกษาที่ McGill University",
  icon: "🇨🇦",
  link: "https://mccallmacbainscholars.org/"
},
{
  id: 63,
  name: "ทุน Lester B. Pearson",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่สมัครเข้า University of Toronto",
  icon: "🇨🇦",
  link: "https://future.utoronto.ca/"
},
{
  id: 64,
  name: "ทุน UBC International Scholars",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาระดับปริญญาตรีที่ UBC",
  icon: "🇨🇦",
  link: "https://you.ubc.ca/financial-planning/scholarships/"
},
{
  id: 65,
  name: "ทุน Monash International Leadership Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนค่าเล่าเรียน",
  deadline: "ตรวจสอบตามประกาศของมหาวิทยาลัย",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Monash University",
  icon: "🇦🇺",
  link: "https://www.monash.edu/study/fees-scholarships/scholarships"
},
{
  id: 66,
  name: "ทุน Melbourne International Undergraduate Scholarship",
  level: "ปริญญาตรี",
  country: "ออสเตรเลีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศของมหาวิทยาลัย",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรีของ University of Melbourne",
  icon: "🇦🇺",
  link: "https://study.unimelb.edu.au/how-to-apply/scholarships"
},
{
  id: 67,
  name: "ทุน ANU Chancellor's International Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนค่าเล่าเรียน",
  deadline: "ตรวจสอบตามประกาศของมหาวิทยาลัย",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Australian National University",
  icon: "🇦🇺",
  link: "https://study.anu.edu.au/scholarships"
},
{
  id: 68,
  name: "ทุน University of Sydney International Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ออสเตรเลีย",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามโครงการ",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา",
  icon: "🇦🇺",
  link: "https://www.sydney.edu.au/scholarships/"
},
{
  id: 69,
  name: "ทุน UQ International Scholarship",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ออสเตรเลีย",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามโครงการ",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ University of Queensland",
  icon: "🇦🇺",
  link: "https://scholarships.uq.edu.au/"
},
{
  id: 70,
  name: "ทุน University of Auckland International Student Excellence",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "นิวซีแลนด์",
  type: "ทุนค่าเล่าเรียน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ University of Auckland",
  icon: "🇳🇿",
  link: "https://www.auckland.ac.nz/"
},
{
  id: 71,
  name: "ทุน ADB-Japan Scholarship Program",
  level: "ปริญญาโท",
  country: "ญี่ปุ่น / เอเชีย",
  type: "ทุนเต็มจำนวน",
  deadline: "แตกต่างกันตามสถาบัน",
  description: "ทุนสำหรับนักศึกษาจากประเทศสมาชิก ADB ที่เข้าเกณฑ์",
  icon: "🌏",
  link: "https://www.adb.org/work-with-us/careers/japan-scholarship-program"
},
{
  id: 72,
  name: "ทุน Japanese Government MEXT Research",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ญี่ปุ่น",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุน MEXT สำหรับนักศึกษาต่างชาติในสายวิจัยและระดับบัณฑิตศึกษา",
  icon: "🇯🇵",
  link: "https://www.studyinjapan.go.jp/"
},
{
  id: 73,
  name: "ทุน JASSO",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ญี่ปุ่น",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามโครงการ",
  description: "โครงการสนับสนุนด้านทุนสำหรับนักศึกษาต่างชาติในญี่ปุ่น",
  icon: "🇯🇵",
  link: "https://www.jasso.go.jp/en/"
},
{
  id: 74,
  name: "ทุน University of Tokyo Fellowship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ญี่ปุ่น",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุนและการสนับสนุนสำหรับนักศึกษาระดับบัณฑิตศึกษาของ University of Tokyo",
  icon: "🇯🇵",
  link: "https://www.u-tokyo.ac.jp/en/"
},
{
  id: 75,
  name: "ทุน Kyoto University International",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ญี่ปุ่น",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามโครงการ",
  description: "ทุนและโครงการสนับสนุนสำหรับนักศึกษาต่างชาติของ Kyoto University",
  icon: "🇯🇵",
  link: "https://www.kyoto-u.ac.jp/en"
},
{
  id: 76,
  name: "ทุน KAIST International Student",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "เกาหลีใต้",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศของมหาวิทยาลัย",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ KAIST",
  icon: "🇰🇷",
  link: "https://www.kaist.ac.kr/en/"
},
{
  id: 77,
  name: "ทุน Seoul National University",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "เกาหลีใต้",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามโครงการ",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Seoul National University",
  icon: "🇰🇷",
  link: "https://en.snu.ac.kr/"
},
{
  id: 78,
  name: "ทุน Yonsei University International",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "เกาหลีใต้",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Yonsei University",
  icon: "🇰🇷",
  link: "https://www.yonsei.ac.kr/en_sc/"
},
{
  id: 79,
  name: "ทุน National Taiwan University",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ไต้หวัน",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามโครงการ",
  description: "ทุนและโครงการสนับสนุนนักศึกษาต่างชาติของ National Taiwan University",
  icon: "🇹🇼",
  link: "https://www.ntu.edu.tw/english/"
},
{
  id: 80,
  name: "ทุน TaiwanICDF",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ไต้หวัน",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนการศึกษาสำหรับนักศึกษาจากประเทศที่เข้าร่วมโครงการ",
  icon: "🇹🇼",
  link: "https://www.icdf.org.tw/"
},
{
  id: 81,
  name: "ทุน Singapore International Graduate Award SINGA",
  level: "ปริญญาเอก",
  country: "สิงคโปร์",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศของโครงการ",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาเอกในสิงคโปร์",
  icon: "🇸🇬",
  link: "https://www.a-star.edu.sg/singa-scholarship"
},
{
  id: 82,
  name: "ทุน NUS International Scholarships",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "สิงคโปร์",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามโครงการ",
  description: "ทุนและโครงการสนับสนุนนักศึกษาต่างชาติของ National University of Singapore",
  icon: "🇸🇬",
  link: "https://www.nus.edu.sg/"
},
{
  id: 83,
  name: "ทุน NTU International Scholarships",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "สิงคโปร์",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามโครงการ",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Nanyang Technological University",
  icon: "🇸🇬",
  link: "https://www.ntu.edu.sg/"
},
{
  id: 84,
  name: "ทุนรัฐบาลมาเลเซีย MTCP",
  level: "ปริญญาโท",
  country: "มาเลเซีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาจากประเทศที่เข้าร่วมโครงการความร่วมมือของมาเลเซีย",
  icon: "🇲🇾",
  link: "https://mtcp.kln.gov.my/"
},
{
  id: 85,
  name: "ทุน Brunei Darussalam Government Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "บรูไน",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลบรูไนสำหรับนักศึกษาต่างชาติ",
  icon: "🇧🇳",
  link: "https://www.mfa.gov.bn/"
},
{
  id: 86,
  name: "ทุนรัฐบาลอินเดีย ICCR",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "อินเดีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนการศึกษาสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อในอินเดีย",
  icon: "🇮🇳",
  link: "https://a2ascholarships.iccr.gov.in/"
},
{
  id: 87,
  name: "ทุน Ireland Government of Ireland",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไอร์แลนด์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา",
  icon: "🇮🇪",
  link: "https://hea.ie/"
},
{
  id: 88,
  name: "ทุน Eiffel Excellence Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ฝรั่งเศส",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลฝรั่งเศสสำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา",
  icon: "🇫🇷",
  link: "https://www.campusfrance.org/en/eiffel-scholarship-program"
},
{
  id: 89,
  name: "ทุน Charpak Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ฝรั่งเศส",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อในฝรั่งเศส",
  icon: "🇫🇷",
  link: "https://www.inde.campusfrance.org/"
},
{
  id: 90,
  name: "ทุน Swiss Government Excellence",
  level: "ปริญญาโท / ปริญญาเอก / นักวิจัย",
  country: "สวิตเซอร์แลนด์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลสวิตเซอร์แลนด์สำหรับนักศึกษาต่างชาติและนักวิจัย",
  icon: "🇨🇭",
  link: "https://www.sbfi.admin.ch/"
},
{
  id: 91,
  name: "ทุน Italian Government Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "อิตาลี",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลอิตาลีสำหรับนักศึกษาต่างชาติ",
  icon: "🇮🇹",
  link: "https://studyinitaly.esteri.it/"
},
{
  id: 92,
  name: "ทุน Romanian Government Scholarship",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "โรมาเนีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลโรมาเนียสำหรับนักศึกษาต่างชาติ",
  icon: "🇷🇴",
  link: "https://studyinromania.gov.ro/"
},
{
  id: 93,
  name: "ทุน Czech Government Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "เช็ก",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลเช็กสำหรับนักศึกษาจากประเทศที่เข้าร่วมโครงการ",
  icon: "🇨🇿",
  link: "https://www.studyin.cz/"
},
{
  id: 94,
  name: "ทุน Government of Poland NAWA",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "โปแลนด์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนและโครงการแลกเปลี่ยนสำหรับนักศึกษาต่างชาติในโปแลนด์",
  icon: "🇵🇱",
  link: "https://nawa.gov.pl/en"
},
{
  id: 95,
  name: "ทุน Türkiye Scholarships Success",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ตุรกี",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "โครงการสนับสนุนนักศึกษาต่างชาติที่กำลังศึกษาในตุรกีตามเงื่อนไขโครงการ",
  icon: "🇹🇷",
  link: "https://www.turkiyeburslari.gov.tr/"
},
{
  id: 96,
  name: "ทุนรัฐบาลอียิปต์",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "อียิปต์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนและโครงการสนับสนุนนักศึกษาต่างชาติในประเทศอียิปต์",
  icon: "🇪🇬",
  link: "https://study-in-egypt.gov.eg/"
},
{
  id: 97,
  name: "ทุนรัฐบาลบราซิล PEC-PG",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "บราซิล",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศโครงการ",
  description: "โครงการทุนสำหรับนักศึกษาต่างชาติจากประเทศกำลังพัฒนา",
  icon: "🇧🇷",
  link: "https://www.gov.br/capes/"
},
{
  id: 98,
  name: "ทุนรัฐบาลเม็กซิโกสำหรับนักศึกษาต่างชาติ",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "เม็กซิโก",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อในเม็กซิโก",
  icon: "🇲🇽",
  link: "https://www.gob.mx/amexcid"
},
{
  id: 99,
  name: "ทุนรัฐบาลรัสเซีย",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "รัสเซีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "โครงการทุนสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อในรัสเซีย",
  icon: "🇷🇺",
  link: "https://education-in-russia.com/"
},
{
  id: 100,
  name: "ทุนรัฐบาลฟินแลนด์",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ฟินแลนด์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศของมหาวิทยาลัย",
  description: "ทุนและโครงการสนับสนุนสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อในฟินแลนด์",
  icon: "🇫🇮",
  link: "https://www.studyinfinland.fi/"
},
  // ข้อมูลเดิม id 1–100

  // ⬇️ เพิ่มทุน ม.ปลายตรงนี้
  {
    id: 101,
    name: "ทุนเล่าเรียนหลวง ระดับมัธยมศึกษาตอนปลาย",
    level: "ม.ปลาย",
    country: "ไทย",
    type: "ทุนรัฐบาล",
    deadline: "ตรวจสอบกำหนดการล่าสุด",
    description: "ทุนรัฐบาลสำหรับนักเรียนมัธยมศึกษาตอนปลาย",
    icon: "🇹🇭",
    link: "https://www.ocsc.go.th/?p=113800&post_type=scholarship"
  },

  {
    id: 102,
    name: "ทุนรัฐบาลด้านวิทยาศาสตร์และเทคโนโลยี",
    level: "ม.ปลาย",
    country: "ไทย",
    type: "ทุนรัฐบาล",
    deadline: "ตรวจสอบกำหนดการล่าสุด",
    description: "ทุนรัฐบาลด้านวิทยาศาสตร์และเทคโนโลยีสำหรับนักเรียน ม.6",
    icon: "🔬",
    link: "https://www.ocsc.go.th/?p=113834&post_type=scholarship"
  },

  {
    id: 103,
    name: "ทุนรัฐบาลตามความต้องการของกระทรวงการต่างประเทศ",
    level: "ม.ปลาย",
    country: "ไทย",
    type: "ทุนรัฐบาล",
    deadline: "ตรวจสอบกำหนดการล่าสุด",
    description: "ทุนรัฐบาลสำหรับนักเรียน ม.6 ตามความต้องการของกระทรวงการต่างประเทศ",
    icon: "🌏",
    link: "https://www.ocsc.go.th/?p=113809&post_type=scholarship"
  },

  {
    id: 104,
    name: "ทุนวิวัฒนไชยานุสรณ์",
    level: "ม.ปลาย",
    country: "ไทย",
    type: "ทุนรัฐบาล",
    deadline: "ตรวจสอบกำหนดการล่าสุด",
    description: "ทุนรัฐบาลสำหรับนักเรียน ม.6",
    icon: "🏦",
    link: "https://www.ocsc.go.th/?p=113826&post_type=scholarship"
  },

  {
    id: 105,
    name: "ทุน UWC Thailand",
    level: "ม.ปลาย",
    country: "ไทย",
    type: "ทุน UWC",
    deadline: "ตรวจสอบกำหนดการล่าสุด",
    description: "ทุนสำหรับนักเรียนไทยเพื่อศึกษาหลักสูตร IB Diploma ผ่าน UWC",
    icon: "🌍",
    link: "https://th.uwc.org/th/วิธีการสมัคร/"
  },

  {
    id: 106,
    name: "ASEAN Scholarship for Thailand",
    level: "ม.ปลาย",
    country: "สิงคโปร์",
    type: "ทุนรัฐบาล",
    deadline: "ตรวจสอบกำหนดการล่าสุด",
    description: "ทุนรัฐบาลสิงคโปร์สำหรับนักเรียนไทยเพื่อศึกษาต่อในสิงคโปร์",
    icon: "🇸🇬",
    link: "https://www.moe.gov.sg/financial-matters/awards-scholarships/asean-scholarship/thailand"
  },

  {
    id: 107,
    name: "UWC Li Po Chun United World College of Hong Kong",
    level: "ม.ปลาย",
    country: "ฮ่องกง",
    type: "ทุน UWC",
    deadline: "สมัครผ่าน UWC Thailand",
    description: "ทุน UWC สำหรับศึกษาหลักสูตร IB Diploma ที่ฮ่องกง",
    icon: "🇭🇰",
    link: "https://th.uwc.org/th/วิธีการสมัคร/"
  },

  {
    id: 108,
    name: "UWC Changshu China",
    level: "ม.ปลาย",
    country: "จีน",
    type: "ทุน UWC",
    deadline: "สมัครผ่าน UWC Thailand",
    description: "ทุน UWC สำหรับศึกษาหลักสูตร IB Diploma ที่ประเทศจีน",
    icon: "🇨🇳",
    link: "https://th.uwc.org/th/วิธีการสมัคร/"
  },

  {
    id: 109,
    name: "UWC ISAK Japan",
    level: "ม.ปลาย",
    country: "ญี่ปุ่น",
    type: "ทุน UWC",
    deadline: "สมัครผ่าน UWC Thailand",
    description: "ทุน UWC สำหรับศึกษาหลักสูตร IB Diploma ที่ประเทศญี่ปุ่น",
    icon: "🇯🇵",
    link: "https://th.uwc.org/th/วิธีการสมัคร/"
  },
// ใส่ต่อจาก id:110 ภายใน scholarships = [ ... ]

{
  id: 111,
  name: "King's Bangkok Academic Excellence Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักเรียนที่เข้าสู่ Year 10 หรือ Year 12 โดยผู้ได้รับทุนได้รับการยกเว้นค่าเล่าเรียนเต็มจำนวน พร้อมอุปกรณ์และการสนับสนุนตามเงื่อนไข",
  icon: "🎓",
  link: "https://www.kingsbangkok.ac.th/en/news-and-events/news/Scholarship2026"
},
{
  id: 112,
  name: "Charter International School Academic Scholarship – IGCSE",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักเรียนที่เข้าสู่ Year 10 หลักสูตร IGCSE โดยพิจารณาผลการเรียนและศักยภาพด้านความเป็นผู้นำ",
  icon: "📚",
  link: "https://charter.ac.th/scholarships/"
},
{
  id: 113,
  name: "Charter International School Academic Scholarship – A Level",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักเรียนเข้าสู่ Year 12 หลักสูตร A Level สูงสุดถึง 100% ตามเงื่อนไขของโรงเรียน",
  icon: "🎓",
  link: "https://charter.ac.th/scholarships/"
},
{
  id: 114,
  name: "Brighton College Bangkok Academic Scholarship – IGCSE",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิชาการสำหรับนักเรียนภายนอกที่เข้าสู่ Year 9 หลักสูตร IGCSE",
  icon: "📚",
  link: "https://brightoncollege.ac.th/vibhavadi/academic-scholarship"
},
{
  id: 115,
  name: "Brighton College Bangkok Academic Scholarship – A Level",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิชาการสำหรับนักเรียนภายนอกที่เข้าสู่ Year 11 หลักสูตร A Level โดยมูลค่าทุนขึ้นกับผลการประเมิน",
  icon: "🎓",
  link: "https://brightoncollege.ac.th/vibhavadi/academic-scholarship"
},
{
  id: 116,
  name: "Brighton College Bangkok Music Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนความสามารถพิเศษ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนดนตรีสำหรับนักเรียนตั้งแต่ Year 4 ถึง Year 11 ที่มีความสามารถด้านการบรรเลงหรือร้องเพลง",
  icon: "🎵",
  link: "https://brightoncollege.ac.th/vibhavadi/music-scholarship"
},
{
  id: 117,
  name: "Brighton College Bangkok Sport Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนกีฬา",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนกีฬาสำหรับนักเรียน Year 4 ถึง Year 11 ที่มีผลงานกีฬาในระดับท้องถิ่น ระดับประเทศ หรือระดับนานาชาติ",
  icon: "🏆",
  link: "https://brightoncollege.ac.th/vibhavadi/sport-scholarship"
},
{
  id: 118,
  name: "KIS Bangkok Full Academic Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนค่าเล่าเรียนเต็มจำนวนสำหรับ Grades 11–12 สำหรับผู้สมัครที่มีผลการเรียนและกิจกรรมนอกหลักสูตรโดดเด่น",
  icon: "🎓",
  link: "https://kis.ac.th/bkk/admissions/fees-scholarships/"
},
{
  id: 119,
  name: "Harrow Bangkok Sixth Form Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักเรียนที่เข้าสู่ Sixth Form โดยพิจารณาผลการสอบ GCSE/IGCSE และความเป็นเลิศทางวิชาการ",
  icon: "🏫",
  link: "https://www.harrowschool.ac.th/admissions/scholarships"
},
{
  id: 120,
  name: "LANNA Academic Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนด้านวิชาการสำหรับนักเรียน Year 5–13 และมีทุน Sixth Form สำหรับ Year 12–13",
  icon: "📖",
  link: "https://www.lannaist.ac.th/admissions/scholarships/"
},
{
  id: 121,
  name: "LANNA Sixth Form Gold Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "มกราคม–กุมภาพันธ์ของแต่ละปี",
  description: "ทุน 60% ค่าเล่าเรียนสำหรับนักเรียนปัจจุบัน Year 11 ที่เข้าสู่ Sixth Form",
  icon: "🥇",
  link: "https://www.lannaist.ac.th/admissions/scholarships/"
},
{
  id: 122,
  name: "LANNA Sixth Form Silver Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "มกราคม–กุมภาพันธ์ของแต่ละปี",
  description: "ทุน 40% ค่าเล่าเรียนสำหรับนักเรียนปัจจุบัน Year 11 ที่เข้าสู่ Sixth Form",
  icon: "🥈",
  link: "https://www.lannaist.ac.th/admissions/scholarships/"
},
{
  id: 123,
  name: "LANNA Sixth Form Bronze Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "มกราคม–กุมภาพันธ์ของแต่ละปี",
  description: "ทุน 20% ค่าเล่าเรียนสำหรับนักเรียนปัจจุบัน Year 11 ที่เข้าสู่ Sixth Form",
  icon: "🥉",
  link: "https://www.lannaist.ac.th/admissions/scholarships/"
},
{
  id: 124,
  name: "Udon Thani International School Year 11–12 Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับ Year 11–12 ในปีการศึกษา 2026/27 ให้ส่วนลดค่าเล่าเรียนครึ่งหนึ่งหรือเต็มจำนวนตามเงื่อนไข",
  icon: "🎓",
  link: "https://www.udoninternationalschool.com/en/year-11-and-12-scholarships-for-2026-2027/"
},
{
  id: 125,
  name: "Norwich International School IGCSE Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักเรียน Year 10–11 หลักสูตร IGCSE โดยเปิดรับนักเรียนที่มีผลการเรียนและคุณสมบัติตามเกณฑ์",
  icon: "📚",
  link: "https://www.norwichschool.ac.th/admissions/scholarship/igcse-scholarship/"
},
{
  id: 126,
  name: "DBS Sixth Form Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับ Sixth Form Years 12–13 โดยทุนสามารถครอบคลุมค่าเล่าเรียนเต็มจำนวนตามเงื่อนไขของโครงการ",
  icon: "🏫",
  link: "https://www.dbsbangkok.ac.th/events/dbs-scholarships-and-awards-day/"
},
{
    id: 110,
    name: "UWC Atlantic",
    level: "ม.ปลาย",
    country: "สหราชอาณาจักร",
    type: "ทุน UWC",
    deadline: "สมัครผ่าน UWC Thailand",
    description: "ทุน UWC สำหรับศึกษาหลักสูตร IB Diploma ในสหราชอาณาจักร",
    icon: "🇬🇧",
    link: "https://th.uwc.org/th/วิธีการสมัคร/"
  },
{
  id: 127,
  name: "ทุนก้าวเพื่อน้อง ปีการศึกษา 2569",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนมูลนิธิ",
  deadline: "ปิดรับสมัครแล้ว – 20 มีนาคม 2569",
  description: "ทุนสำหรับนักเรียนที่ขาดแคลนทุนทรัพย์หรือด้อยโอกาส เพื่อศึกษาต่อระดับมัธยมศึกษาตอนปลายหรือ ปวช.",
  icon: "🎓",
  link: "https://www.eef.or.th/notice/kao-phueanong-2569/"
},
{
  id: 128,
  name: "ทุนเล่าเรียนหลวง ประจำปีงบประมาณ 2569",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ปิดรับสมัครแล้ว – 30 ตุลาคม 2568",
  description: "ทุนรัฐบาลสำหรับนักเรียนชั้น ม.6 ที่มีผลการเรียนและคุณสมบัติตามเกณฑ์ เพื่อศึกษาต่อต่างประเทศ",
  icon: "👑",
  link: "https://www.ocsc.go.th/?p=113800&post_type=scholarship"
},
{
  id: 129,
  name: "ทุนรัฐบาลด้านวิทยาศาสตร์และเทคโนโลยี ประจำปี 2569",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ปิดรับสมัครแล้ว – 30 ตุลาคม 2568",
  description: "ทุนสำหรับนักเรียน ม.6 ที่มีศักยภาพด้านวิทยาศาสตร์และเทคโนโลยี",
  icon: "🔬",
  link: "https://www.ocsc.go.th/?p=113834&post_type=scholarship"
},
{
  id: 130,
  name: "ทุนรัฐบาลตามความต้องการของกระทรวงการต่างประเทศ ประจำปี 2569",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ปิดรับสมัครแล้ว – 30 ตุลาคม 2568",
  description: "ทุนรัฐบาลสำหรับนักเรียน ม.6 ที่มีศักยภาพ เพื่อเตรียมกำลังคนด้านที่กระทรวงการต่างประเทศต้องการ",
  icon: "🌏",
  link: "https://www.ocsc.go.th/?p=113809&post_type=scholarship"
},
{
  id: 131,
  name: "ทุนรัฐบาลวิวัฒนไชยานุสรณ์ ประจำปี 2569",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ปิดรับสมัครแล้ว – 30 ตุลาคม 2568",
  description: "ทุนสำหรับนักเรียน ม.6 จำนวน 2 ทุน โดยเป็นทุนของธนาคารแห่งประเทศไทยที่ดำเนินการผ่านสำนักงาน ก.พ.",
  icon: "🏦",
  link: "https://www.ocsc.go.th/?p=113826&post_type=scholarship"
},
{
  id: 132,
  name: "ทุนส่งน้องเรียน สร้างเด็กดี – ทุนสายสามัญ",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนมูลนิธิ",
  deadline: "สมัครผ่านโรงเรียนเครือข่าย",
  description: "ทุนสายสามัญของมูลนิธิยุวพัฒน์ สำหรับนักเรียนในโรงเรียนเครือข่าย",
  icon: "📚",
  link: "https://www.yuvabadhanafoundation.org/th/join/"
},
{
  id: 133,
  name: "ทุนยุวพัฒน์ สายสามัญ ม.4–ม.6",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนมูลนิธิ",
  deadline: "สมัครผ่านโรงเรียนเครือข่าย",
  description: "ทุนการศึกษาสำหรับนักเรียนสายสามัญระดับ ม.4–ม.6 ของมูลนิธิยุวพัฒน์",
  icon: "🎒",
  link: "https://www.yuvabadhanafoundation.org/th/what-we-do/scholarship/"
},
{
  id: 134,
  name: "ทุนการศึกษาประจำปี 2569 มูลนิธิวิชัย ศรีวัฒนประภา",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนมูลนิธิ",
  deadline: "ปิดรับสมัครแล้ว – 31 มีนาคม 2569",
  description: "ทุนให้เปล่าสำหรับนักเรียนที่ขาดแคลนทุนทรัพย์และต้องการศึกษาต่อ ม.4 โดยทุนต่อเนื่องจนจบปริญญาตรี",
  icon: "🎓",
  link: "https://findstudentship.eef.or.th/scholarship/scholar_gYF4gHE"
},
{
  id: 135,
  name: "ทุนการศึกษามูลนิธิพูนพลัง ระดับ ม.4",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนมูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนการศึกษาระดับมัธยมศึกษาสำหรับนักเรียนใหม่ชั้น ม.4",
  icon: "📖",
  link: "https://www.poonpalang.org/project/matayom/68-01"
},
{
  id: 136,
  name: "ทุนการศึกษามูลนิธิจรูญเอื้อชูเกียรติ ระดับมัธยมศึกษาตอนปลาย",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนมูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนการศึกษาสำหรับนักเรียนระดับมัธยมศึกษาตอนปลายที่ขาดแคลนทุนทรัพย์",
  icon: "📚",
  link: "https://cefoundation.or.th/node/98"
},
{
  id: 137,
  name: "ทุนการศึกษาโรงเรียนศรีสุวิช ระดับมัธยมศึกษาตอนปลาย",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "ปีการศึกษา 2569",
  description: "ทุนสำหรับผู้มีความสามารถพิเศษด้านวิชาการ ดนตรี กิจกรรม และกีฬา",
  icon: "🏆",
  link: "https://www.srisuvit.ac.th/"
},
{
  id: 138,
  name: "ทุน King’s Bangkok Academic Excellence Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนความเป็นเลิศทางวิชาการสำหรับนักเรียนที่สมัครเข้า Year 10 หรือ Year 12",
  icon: "🎓",
  link: "https://www.kingsbangkok.ac.th/en/news-and-events/news/Scholarship2026"
},
{
  id: 139,
  name: "ทุน Charter International School Academic Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิชาการสำหรับนักเรียนที่เข้า Year 10 หลักสูตร IGCSE",
  icon: "📖",
  link: "https://charter.ac.th/scholarships/"
},
{
  id: 140,
  name: "ทุน Charter Thada Arts and Humanities Academic Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนด้านศิลปศาสตร์และมนุษยศาสตร์สำหรับนักเรียนที่เข้า Year 12 A Level",
  icon: "🎨",
  link: "https://charter.ac.th/scholarships/"
},
{
  id: 141,
  name: "ทุน KIS Bangkok Full Academic Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิชาการเต็มจำนวนสำหรับนักเรียน Grades 11–12 ตามเงื่อนไขของ KIS Bangkok",
  icon: "🎓",
  link: "https://kis.ac.th/bkk/admissions/fees-scholarships/"
},
{
  id: 142,
  name: "ทุน KIS Bangkok Sports Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนกีฬา",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนกีฬาสำหรับนักเรียนใหม่ โดยมีส่วนลดค่าเล่าเรียนได้สูงสุดตามเงื่อนไขของโรงเรียน",
  icon: "🏅",
  link: "https://kis.ac.th/bkk/admissions/fees-scholarships/"
},
{
  id: 143,
  name: "ทุน Harrow Bangkok Sixth Form Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนโรงเรียน",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักเรียนที่เข้าสู่ Sixth Form ของ Harrow Bangkok",
  icon: "🎓",
  link: "https://www.harrowschool.ac.th/admissions/scholarships"
},
{
  id: 144,
  name: "ทุน Harrow Bangkok Academic Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนวิชาการ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักเรียนที่มีความสามารถทางวิชาการ ตั้งแต่ Year 9 ขึ้นไป",
  icon: "📚",
  link: "https://www.harrowschool.ac.th/admissions/scholarships"
},
{
  id: 145,
  name: "ทุน Harrow Bangkok Creative and Performing Arts Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนความสามารถพิเศษ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนด้านศิลปะ การละคร และดนตรีสำหรับนักเรียนตามเกณฑ์ของโรงเรียน",
  icon: "🎭",
  link: "https://www.harrowschool.ac.th/admissions/scholarships"
},
{
  id: 146,
  name: "ทุน Harrow Bangkok Sports Scholarship",
  level: "ม.ปลาย",
  country: "ไทย",
  type: "ทุนกีฬา",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักเรียนที่มีความสามารถและผลงานโดดเด่นด้านกีฬา",
  icon: "🏆",
  link: "https://www.harrowschool.ac.th/admissions/scholarships"
},
    {
  id: 147,
  name: "ทุนอุดหนุนการศึกษา หลักสูตรปริญญาตรี จุฬาลงกรณ์มหาวิทยาลัย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบประกาศรอบล่าสุด",
  description: "ทุนสำหรับนิสิตระดับปริญญาตรี ครอบคลุมการสนับสนุนด้านค่าเล่าเรียน ค่าใช้จ่ายรายเดือน และความช่วยเหลือด้านการศึกษา",
  icon: "🎓",
  link: "https://www.chula.ac.th/academics/admissions/scholarships/"
},
{
  id: 148,
  name: "ทุนภูมิพล จุฬาลงกรณ์มหาวิทยาลัย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบประกาศรอบล่าสุด",
  description: "ทุนสำหรับนิสิตปริญญาตรีที่มีผลการเรียนดีเยี่ยมหรือเรียนดีแต่ขาดแคลนทุนทรัพย์",
  icon: "🏅",
  link: "https://www.chula.ac.th/academics/admissions/scholarships/"
},
{
  id: 149,
  name: "ทุนน้องใหม่ลูกพระจอม ปีการศึกษา 2569",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ปิดรับสมัครแล้ว – 16 กรกฎาคม 2569",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษาใหม่ของสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  icon: "🎓",
  link: "https://scholarship.kmitl.ac.th/scholarships?inactive=2"
},
{
  id: 150,
  name: "ทุนขาดแคลนทุนทรัพย์ คณะศิลปศาสตร์ สจล. ปีการศึกษา 2569",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนคณะ",
  deadline: "ปิดรับสมัครแล้ว – 24 กรกฎาคม 2569",
  description: "ทุนสนับสนุนสำหรับนักศึกษาที่ขาดแคลนทุนทรัพย์ในคณะศิลปศาสตร์",
  icon: "📚",
  link: "https://scholarship.kmitl.ac.th/scholarships?inactive=2"
},
{
  id: 151,
  name: "ทุนอุดหนุนการศึกษาประเภท ข สจล. ปีการศึกษา 2569",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ปิดรับสมัครแล้ว – 16 สิงหาคม 2569",
  description: "ทุนอุดหนุนการศึกษาสำหรับนักศึกษาชั้นปีที่ 2 ขึ้นไปของ สจล.",
  icon: "🎒",
  link: "https://scholarship.kmitl.ac.th/scholarships?inactive=2"
},
{
  id: 152,
  name: "ทุนการศึกษา DEK69 มหาวิทยาลัยศรีปทุม",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนการศึกษาสำหรับผู้สมัครเข้าเรียนระดับปริญญาตรี ปีการศึกษา 2569",
  icon: "🎓",
  link: "https://www.spu.ac.th/scholarship/"
},
{
  id: 153,
  name: "ทุนเรียนนักกิจกรรม มหาวิทยาลัยศรีปทุม",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนกิจกรรม",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาที่มีผลงานหรือความสามารถด้านกิจกรรม",
  icon: "🏆",
  link: "https://www.spu.ac.th/scholarship/"
},
{
  id: 154,
  name: "ทุนเรียนดี Gifted มหาวิทยาลัยศรีปทุม",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนหรือศักยภาพทางวิชาการตามเกณฑ์มหาวิทยาลัย",
  icon: "📚",
  link: "https://www.spu.ac.th/scholarship/"
},
{
  id: 155,
  name: "ทุน ดร.สุข – ดร.มาลินี พุคยาภรณ์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนการศึกษาของมหาวิทยาลัยศรีปทุมสำหรับนักศึกษาตามเงื่อนไขของทุน",
  icon: "🎓",
  link: "https://www.spu.ac.th/scholarship/"
},
{
  id: 156,
  name: "ทุนการศึกษาปริญญาตรี มหาวิทยาลัยหอการค้าไทย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับผู้สมัครหลักสูตรปริญญาตรีของมหาวิทยาลัยหอการค้าไทย มีทุนหลายระดับตามคุณสมบัติ",
  icon: "🎓",
  link: "https://www.utcc.ac.th/undergraduate-info/"
},
{
  id: 157,
  name: "ทุนการศึกษาเต็มจำนวน มหาวิทยาลัยหอการค้าไทย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนการศึกษาระดับปริญญาตรีที่มหาวิทยาลัยหอการค้าไทยประกาศสำหรับผู้สมัครตามเงื่อนไข",
  icon: "💯",
  link: "https://www.utcc.ac.th/undergraduate-info/"
},
{
  id: 158,
  name: "ทุนการศึกษา 40% มหาวิทยาลัยหอการค้าไทย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนส่วนลดค่าเล่าเรียนระดับปริญญาตรีตามโครงการทุนของมหาวิทยาลัยหอการค้าไทย",
  icon: "🎓",
  link: "https://www.utcc.ac.th/undergraduate-info/"
},
{
  id: 159,
  name: "ทุนการศึกษา 25% มหาวิทยาลัยหอการค้าไทย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนส่วนลดค่าเล่าเรียนระดับปริญญาตรีตามเกณฑ์ของมหาวิทยาลัย",
  icon: "📖",
  link: "https://www.utcc.ac.th/undergraduate-info/"
},
{
  id: 160,
  name: "ทุนเรียนดี มหาวิทยาลัยหาดใหญ่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ตรวจสอบประกาศรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนดีตามหลักเกณฑ์ของมหาวิทยาลัยหาดใหญ่",
  icon: "📚",
  link: "https://loan.hu.ac.th/"
},
{
  id: 161,
  name: "ทุนเรียนดีแต่ขาดแคลนทุนทรัพย์ มหาวิทยาลัยหาดใหญ่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ตรวจสอบประกาศรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาใหม่ที่มีผลการเรียนดีแต่ขาดแคลนทุนทรัพย์",
  icon: "🎓",
  link: "https://loan.hu.ac.th/"
},
{
  id: 162,
  name: "ทุนการศึกษาสำหรับนักศึกษาปริญญาตรี มหาวิทยาลัยมหิดล",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบประกาศของคณะ/มหาวิทยาลัย",
  description: "ทุนและความช่วยเหลือด้านการศึกษาสำหรับนักศึกษาระดับปริญญาตรีของมหาวิทยาลัยมหิดล",
  icon: "🎓",
  link: "https://mahidol.ac.th/"
},
{
  id: 163,
  name: "ทุนการศึกษามหาวิทยาลัยธรรมศาสตร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบประกาศรอบล่าสุด",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษาระดับปริญญาตรีของมหาวิทยาลัยธรรมศาสตร์",
  icon: "📚",
  link: "https://tu.ac.th/"
},
{
  id: 164,
  name: "ทุนการศึกษามหาวิทยาลัยเกษตรศาสตร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบประกาศรอบล่าสุด",
  description: "ทุนและเงินช่วยเหลือด้านการศึกษาสำหรับนิสิตระดับปริญญาตรี",
  icon: "🌱",
  link: "https://www.ku.ac.th/"
},
{
  id: 165,
  name: "ทุนการศึกษามหาวิทยาลัยเชียงใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบประกาศรอบล่าสุด",
  description: "ทุนการศึกษาและการสนับสนุนนักศึกษาระดับปริญญาตรีของมหาวิทยาลัยเชียงใหม่",
  icon: "🎓",
  link: "https://www.cmu.ac.th/"
},
{
  id: 166,
  name: "ทุนการศึกษามหาวิทยาลัยขอนแก่น",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบประกาศรอบล่าสุด",
  description: "ทุนและการสนับสนุนทางการศึกษาสำหรับนักศึกษาระดับปริญญาตรีของมหาวิทยาลัยขอนแก่น",
  icon: "📖",
  link: "https://www.kku.ac.th/"
},
    {
  id: 167,
  name: "MEXT Scholarship – Undergraduate Students",
  level: "ปริญญาตรี",
  country: "ญี่ปุ่น",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบรับสมัครผ่านสถานเอกอัครราชทูตญี่ปุ่น",
  description: "ทุนรัฐบาลญี่ปุ่นสำหรับนักศึกษาต่างชาติระดับปริญญาตรี ครอบคลุมค่าเล่าเรียนและมีค่าใช้จ่ายรายเดือนตามเกณฑ์ทุน",
  icon: "🇯🇵",
  link: "https://www.studyinjapan.go.jp/th/planning/scholarships/mext-scholarships/"
},
{
  id: 168,
  name: "Global Korea Scholarship (GKS-U) – Undergraduate",
  level: "ปริญญาตรี",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "กันยายน–ตุลาคมของรอบสมัครโดยทั่วไป",
  description: "ทุนรัฐบาลเกาหลีสำหรับนักศึกษาต่างชาติระดับปริญญาตรี มีทั้ง Embassy Track และ University Track",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/ko/plan/scholarship.do"
},
{
  id: 169,
  name: "Global Korea Scholarship (GKS-U) – Embassy Track",
  level: "ปริญญาตรี",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศ GKS ประจำปี",
  description: "ช่องทางสมัคร GKS ระดับปริญญาตรีผ่านสถานเอกอัครราชทูตเกาหลีในประเทศของผู้สมัคร",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/ko/plan/gksNoticeRead.do?bbsId=BBSMSTR_000000000461&nttId=4522"
},
{
  id: 170,
  name: "Global Korea Scholarship (GKS-U) – University Track",
  level: "ปริญญาตรี",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศ GKS ประจำปี",
  description: "ช่องทางสมัคร GKS ระดับปริญญาตรีโดยสมัครผ่านมหาวิทยาลัยที่เข้าร่วมโครงการ",
  icon: "🏫",
  link: "https://www.studyinkorea.go.kr/ko/plan/scholarship.do"
},
{
  id: 171,
  name: "GKS-U University Track – University of Information and Communication",
  level: "ปริญญาตรี",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศประจำปี",
  description: "เส้นทาง GKS สำหรับระดับ Associate/Bachelor ในสาขาวิทยาศาสตร์และวิศวกรรมที่เข้าร่วมโครงการ UIC",
  icon: "💻",
  link: "https://www.studyinkorea.go.kr/ko/plan/scholarship.do"
},
{
  id: 172,
  name: "GKS-U Embassy Track – General Program",
  level: "ปริญญาตรี",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศประจำปี",
  description: "โครงการทั่วไปของ GKS สำหรับนักศึกษาต่างชาติระดับปริญญาตรีในหลายสาขา",
  icon: "🎓",
  link: "https://www.studyinkorea.go.kr/ko/plan/scholarship.do"
},
{
  id: 173,
  name: "GKS-U Regional University Track",
  level: "ปริญญาตรี",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศประจำปี",
  description: "ทุน GKS สำหรับผู้สมัครต่างชาติที่สมัครเข้ามหาวิทยาลัยที่กำหนดตาม University Track",
  icon: "🏫",
  link: "https://www.studyinkorea.go.kr/ko/plan/scholarship.do"
},
{
  id: 174,
  name: "Romania MFA Scholarship – Bachelor's Degree",
  level: "ปริญญาตรี",
  country: "โรมาเนีย",
  type: "ทุนรัฐบาล",
  deadline: "รอบ 2026–2027 ปิดรับสมัครแล้ว",
  description: "ทุนรัฐบาลโรมาเนียผ่านกระทรวงการต่างประเทศสำหรับพลเมืองจากประเทศนอก EU ครอบคลุมระดับปริญญาตรี",
  icon: "🇷🇴",
  link: "https://studyinromania.gov.ro/mfa_2026-2027"
},
{
  id: 175,
  name: "Romania Government Scholarship – Non-EU Students",
  level: "ปริญญาตรี",
  country: "โรมาเนีย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบปีถัดไป",
  description: "ทุนรัฐบาลโรมาเนียสำหรับนักศึกษาจากประเทศนอก EU ระดับปริญญาตรี โดยหลักสูตรปริญญาตรีใช้ภาษาโรมาเนีย",
  icon: "🇷🇴",
  link: "https://www.studyinromania.gov.ro/scholarships"
},
{
  id: 176,
  name: "Romania MFA Scholarship – Preparatory Year + Bachelor",
  level: "ปริญญาตรี",
  country: "โรมาเนีย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบปีถัดไป",
  description: "ผู้ที่ไม่รู้ภาษาโรมาเนียสามารถได้รับปีเตรียมภาษาโรมาเนียก่อนเริ่มหลักสูตรปริญญาตรีตามเงื่อนไขทุน",
  icon: "📚",
  link: "https://scholarships.studyinromania.gov.ro/scholarship-faq"
},
{
  id: 177,
  name: "Japan Student Services Organization (JASSO) – Student Exchange Support Program",
  level: "ปริญญาตรี",
  country: "ญี่ปุ่น",
  type: "ทุนแลกเปลี่ยน",
  deadline: "สมัครผ่านมหาวิทยาลัยต้นสังกัด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ไปศึกษาระยะสั้นในญี่ปุ่นผ่านข้อตกลงแลกเปลี่ยนระหว่างสถาบัน",
  icon: "🇯🇵",
  link: "https://www.studyinjapan.go.jp/en/about/support-program.html"
},
{
  id: 178,
  name: "MEXT Undergraduate Scholarship – Embassy Recommendation",
  level: "ปริญญาตรี",
  country: "ญี่ปุ่น",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบกำหนดการของสถานทูตญี่ปุ่น",
  description: "การสมัครทุน MEXT ระดับปริญญาตรีผ่านการเสนอชื่อโดยสถานเอกอัครราชทูตญี่ปุ่น",
  icon: "🇯🇵",
  link: "https://www.studyinjapan.go.jp/en/planning/scholarships/mext-scholarships/"
},
{
  id: 179,
  name: "MEXT Undergraduate Scholarship – University Recommendation",
  level: "ปริญญาตรี",
  country: "ญี่ปุ่น",
  type: "ทุนรัฐบาล",
  deadline: "ขึ้นอยู่กับมหาวิทยาลัย",
  description: "ช่องทางทุน MEXT ที่ดำเนินการผ่านมหาวิทยาลัยญี่ปุ่นที่มีโควตาเสนอชื่อ",
  icon: "🏫",
  link: "https://www.studyinjapan.go.jp/en/planning/scholarships/mext-scholarships/"
},
{
  id: 180,
  name: "Kyoto Koka University Academic Excellence Scholarship for International Students",
  level: "ปริญญาตรี",
  country: "ญี่ปุ่น",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบกับมหาวิทยาลัย",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรี โดยพิจารณานักศึกษาที่มีผลการเรียนอยู่ในกลุ่มบนของนักศึกษาต่างชาติ",
  icon: "🎓",
  link: "https://www.studyinjapan.go.jp/en/search-for-scholarships/detail.php?lang=en&mid=3060363291"
},
{
  id: 181,
  name: "ทุนมหาวิทยาลัยสำหรับนักศึกษาต่างชาติในเกาหลีใต้ – University Scholarships",
  level: "ปริญญาตรี",
  country: "เกาหลีใต้",
  type: "ทุนมหาวิทยาลัย",
  deadline: "แตกต่างกันตามมหาวิทยาลัย",
  description: "มหาวิทยาลัยเกาหลีหลายแห่งมีทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรี โดยทุนอาจครอบคลุมประมาณ 30–100% ของค่าเล่าเรียนตามผลการเรียน",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/ko/plan/scholarship.do"
},
{
  id: 182,
  name: "Korea University Scholarships for International Undergraduate Students",
  level: "ปริญญาตรี",
  country: "เกาหลีใต้",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบมหาวิทยาลัยและรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรีของมหาวิทยาลัยเกาหลีตามเกณฑ์ของแต่ละสถาบัน",
  icon: "🎓",
  link: "https://www.studyinkorea.go.kr/ko/plan/scholarship.do"
},
{
  id: 183,
  name: "Korea University Foundation and Corporate Scholarships",
  level: "ปริญญาตรี",
  country: "เกาหลีใต้",
  type: "ทุนองค์กร",
  deadline: "แตกต่างกันตามผู้ให้ทุน",
  description: "ทุนจากมูลนิธิและบริษัทในเกาหลีที่เปิดสำหรับนักศึกษาต่างชาติตามคุณสมบัติของแต่ละโครงการ",
  icon: "🏢",
  link: "https://www.studyinkorea.go.kr/ko/plan/scholarship.do"
},
{
  id: 184,
  name: "ทุนรัฐบาลโรมาเนียสำหรับนักศึกษาต่างชาติจากประเทศนอก EU",
  level: "ปริญญาตรี",
  country: "โรมาเนีย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลสำหรับผู้สมัครจากประเทศนอก EU โดยระดับปริญญาตรีครอบคลุมหลักสูตรที่ได้รับการรับรองตามเงื่อนไขโครงการ",
  icon: "🇷🇴",
  link: "https://scholarships.studyinromania.gov.ro/"
},
{
  id: 185,
  name: "ทุนรัฐบาลโรมาเนีย – สาขาวิชานอก Medicine, Dentistry และ Pharmacy",
  level: "ปริญญาตรี",
  country: "โรมาเนีย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน MFA ของโรมาเนียสำหรับปริญญาตรีในสาขาที่โครงการกำหนด โดยไม่รวมแพทยศาสตร์ ทันตแพทยศาสตร์ และเภสัชศาสตร์",
  icon: "📚",
  link: "https://scholarships.studyinromania.gov.ro/scholarship-about"
},
{
  id: 186,
  name: "ทุนรัฐบาลโรมาเนีย – Bachelor’s Degree 3–6 Years",
  level: "ปริญญาตรี",
  country: "โรมาเนีย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับหลักสูตรปริญญาตรีในสถาบันอุดมศึกษาที่ได้รับการรับรอง ระยะเวลา 3–6 ปีขึ้นกับสาขา",
  icon: "🎓",
  link: "https://studyinromania.gov.ro/mfa_2026-2027"
},
    {
  id: 187,
  name: "ทุนการศึกษาระดับปริญญาโท สกสค. ประจำปีการศึกษา 2569",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนหน่วยงานรัฐ",
  deadline: "ปิดรับสมัครแล้ว – 16 มิถุนายน 2569",
  description: "ทุนระดับปริญญาโท 40 ทุน หลักสูตรครุศาสตรมหาบัณฑิต สาขาวิชาการบริหารการศึกษา โดยสนับสนุนค่าเล่าเรียน 50% ตลอดหลักสูตร",
  icon: "🎓",
  link: "https://www.otep.go.th/benefits/category/483a4c47-4790-4e08-8613-52d18a17b7ba/fcde2027-8d8a-4a73-8163-f430bc7c8d31"
},
{
  id: 188,
  name: "ทุนรัฐบาลสำหรับบุคคลทั่วไประดับปริญญา – ปริญญาโท",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศสำนักงาน ก.พ.",
  description: "ทุนรัฐบาลสำหรับบุคคลทั่วไประดับปริญญา เพื่อศึกษาต่อระดับปริญญาโทหรือปริญญาเอกตามความต้องการของส่วนราชการหรือหน่วยงานของรัฐ",
  icon: "🏛️",
  link: "https://www.ocsc.go.th/scholarships/degree-scholarships/"
},
{
  id: 189,
  name: "ทุนรัฐบาล UIS ระดับปริญญาโท",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศสำนักงาน ก.พ.",
  description: "ทุนรัฐบาลเพื่อดึงดูดผู้มีศักยภาพสูงที่กำลังศึกษาในสถาบันการศึกษาในประเทศ โดยมีทุนระดับปริญญาโท",
  icon: "🏛️",
  link: "https://www.ocsc.go.th/scholarships/degree-scholarships/"
},
{
  id: 190,
  name: "ทุนบุคคลภายนอกระดับปริญญาโทภายในประเทศ ธนาคารออมสิน 2569",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนองค์กร",
  deadline: "ประกาศรับสมัคร 1 กันยายน 2569",
  description: "ทุนการศึกษาระดับปริญญาโทภายในประเทศสำหรับบุคคลภายนอก จำนวน 4 ทุน ในหลักสูตรที่ธนาคารกำหนด",
  icon: "🏦",
  link: "https://www.gsb.or.th/news/gsbscholarship-69/"
},
{
  id: 191,
  name: "ทุน SPU SPARK Scholarship ระดับปริญญาโท",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ปิดรอบ 2569 – 31 สิงหาคม 2569",
  description: "ทุน SPU SPARK สำหรับนักศึกษาระดับปริญญาโท ทุกคณะยกเว้นนิติศาสตร์ สนับสนุน 5,000 บาท และคณะนิติศาสตร์ 20,000 บาทตามเงื่อนไข",
  icon: "🎓",
  link: "https://www.spu.ac.th/spu-spark-scholarship/"
},
{
  id: 192,
  name: "ทุนการศึกษาปริญญาโท มหาวิทยาลัยศรีปทุม",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนการศึกษาระดับปริญญาโทของมหาวิทยาลัยศรีปทุม ครอบคลุมหลายคณะและสาขา",
  icon: "🎓",
  link: "https://www.spu.ac.th/graduate-scholarship/"
},
{
  id: 193,
  name: "ทุนเรียนดีระดับปริญญาโท คณะสถาปัตยกรรมศาสตร์และการผังเมือง มธ. – ทุนค่าธรรมเนียม",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ประกาศผลปีการศึกษา 2569",
  description: "ทุนเรียนดีระดับปริญญาโทประเภททุนค่าธรรมเนียมของคณะสถาปัตยกรรมศาสตร์และการผังเมือง มหาวิทยาลัยธรรมศาสตร์",
  icon: "🏫",
  link: "https://grad.tds.tu.ac.th/scholarship"
},
{
  id: 194,
  name: "ทุนเรียนดีระดับปริญญาโท คณะสถาปัตยกรรมศาสตร์และการผังเมือง มธ. – ทุนเต็มจำนวน",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ประกาศผลปีการศึกษา 2569",
  description: "ทุนเรียนดีระดับปริญญาโทประเภททุนเต็มจำนวนของคณะสถาปัตยกรรมศาสตร์และการผังเมือง มหาวิทยาลัยธรรมศาสตร์",
  icon: "🏆",
  link: "https://grad.tds.tu.ac.th/scholarship"
},
{
  id: 195,
  name: "ทุนช่วยเหลือนักศึกษาพิการระดับบัณฑิตศึกษา มหาวิทยาลัยมหิดล – ปริญญาโท",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบประกาศปีการศึกษา 2569",
  description: "ทุนช่วยเหลือนักศึกษาพิการระดับบัณฑิตศึกษาของมหาวิทยาลัยมหิดล สำหรับผู้ศึกษาในหลักสูตรปริญญาโทหรือปริญญาเอกตามคุณสมบัติ",
  icon: "♿",
  link: "https://graduate.mahidol.ac.th/thai/staff/?p=scholarship&scholarship=scholarship-03"
},
{
  id: 196,
  name: "ทุนบัณฑิตวิทยาลัย มหาวิทยาลัยมหิดล สำหรับนักศึกษาระดับปริญญาโท",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบทุนที่เปิดรับสมัคร",
  description: "บัณฑิตวิทยาลัย มหาวิทยาลัยมหิดลมีทุนการศึกษาและทุนสนับสนุนการวิจัยสำหรับนักศึกษาระดับบัณฑิตศึกษา",
  icon: "🎓",
  link: "https://graduate.mahidol.ac.th/thai/prospective-students/?p=scholarship"
},
{
  id: 197,
  name: "ทุนสนับสนุนการนำเสนอผลงานวิชาการต่างประเทศ มหิดล – ปริญญาโท",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "สมัครล่วงหน้าก่อนนำเสนอผลงานตามรอบที่กำหนด",
  description: "ทุนอุดหนุนสำหรับนักศึกษาปริญญาโทและเอก มหาวิทยาลัยมหิดล เพื่อไปนำเสนอผลงานทางวิชาการในต่างประเทศ",
  icon: "🌏",
  link: "https://graduate.mahidol.ac.th/thai/prospective-students/?p=scholarship&scholarship=scholarship-06"
},
{
  id: 198,
  name: "ทุนการศึกษาและทุนสนับสนุนการวิจัย บัณฑิตวิทยาลัยมหิดล",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "แตกต่างกันตามโครงการ",
  description: "รวมโครงการทุนการศึกษาและทุนสนับสนุนการวิจัยสำหรับนักศึกษาระดับบัณฑิตศึกษาของมหาวิทยาลัยมหิดล",
  icon: "🔬",
  link: "https://graduate.mahidol.ac.th/"
},
{
  id: 199,
  name: "ทุนการศึกษาระดับปริญญาโท มหาวิทยาลัยหาดใหญ่ – นักศึกษาใหม่",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบสมัคร 2569",
  description: "ทุนสำหรับนักศึกษาใหม่ระดับปริญญาโทของมหาวิทยาลัยหาดใหญ่",
  icon: "🎓",
  link: "https://loan.hu.ac.th/"
},
{
  id: 200,
  name: "ทุนอาจารย์ประดิษฐ์ ดิษยะศริน มหาวิทยาลัยหาดใหญ่",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบประกาศปีการศึกษา 2569",
  description: "ทุนการศึกษาสำหรับนักศึกษาปัจจุบันของมหาวิทยาลัยหาดใหญ่ตามเงื่อนไขของทุน",
  icon: "📚",
  link: "https://loan.hu.ac.th/"
},
{
  id: 201,
  name: "ทุนเรียนดีแต่ขาดแคลนทุนทรัพย์ มหาวิทยาลัยหาดใหญ่ – ปริญญาโท",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ตรวจสอบรอบสมัคร 2569",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนดีแต่ขาดแคลนทุนทรัพย์",
  icon: "📖",
  link: "https://loan.hu.ac.th/"
},
{
  id: 202,
  name: "ทุนการศึกษาระดับปริญญาโท มหาวิทยาลัยมหิดล – หลักสูตรที่เปิดรับ",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ระบบบัณฑิตวิทยาลัยมหิดลรวบรวมหลักสูตรปริญญาโทและข้อมูลทุนการศึกษา/ทุนสนับสนุนการวิจัย",
  icon: "🏫",
  link: "https://graduate.mahidol.ac.th/Admission/announce/cur_open_list.php?Level=M&status=contact&year=2569"
},
{
  id: 203,
  name: "ทุนเรียนดีระดับปริญญาโท มธ. สาขาสถาปัตยกรรม",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบประกาศปีการศึกษา 2569",
  description: "ทุนเรียนดีสำหรับนักศึกษาปริญญาโท สาขาสถาปัตยกรรม ตามประกาศของคณะ",
  icon: "🏛️",
  link: "https://grad.tds.tu.ac.th/scholarship"
},
{
  id: 204,
  name: "ทุนเรียนดีระดับปริญญาโท มธ. สาขาการผังเมือง",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบประกาศปีการศึกษา 2569",
  description: "ทุนเรียนดีสำหรับนักศึกษาปริญญาโท สาขาการผังเมือง ตามประกาศของคณะ",
  icon: "🏙️",
  link: "https://grad.tds.tu.ac.th/scholarship"
},
{
  id: 205,
  name: "ทุนเรียนดีระดับปริญญาโท มธ. สาขานวัตกรรมการพัฒนาอสังหาริมทรัพย์",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบประกาศปีการศึกษา 2569",
  description: "ทุนเรียนดีสำหรับนักศึกษาปริญญาโท สาขานวัตกรรมการพัฒนาอสังหาริมทรัพย์",
  icon: "🏢",
  link: "https://grad.tds.tu.ac.th/scholarship"
},
{
  id: 206,
  name: "ทุนการศึกษาระดับปริญญาโท มหาวิทยาลัยหาดใหญ่ – ทุนสำหรับนักศึกษาใหม่ 2569",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "โครงการทุนสำหรับผู้สมัครใหม่ระดับปริญญาโทของมหาวิทยาลัยหาดใหญ่",
  icon: "🎓",
  link: "https://loan.hu.ac.th/"
},
    {
  id: 207,
  name: "Chevening Scholarship",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนรัฐบาล",
  deadline: "6 ตุลาคม 2569 เวลา 11:00 UTC",
  description: "ทุนรัฐบาลสหราชอาณาจักรสำหรับผู้สมัครจากประเทศไทยเพื่อศึกษาหลักสูตรปริญญาโทแบบ taught master's ที่เข้าเกณฑ์ในสหราชอาณาจักร",
  icon: "🇬🇧",
  link: "https://www.chevening.org/scholarship/thailand/"
},
{
  id: 208,
  name: "Australia Awards – Mekong-Australia Partnership Scholarships",
  level: "ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบกำหนดการรอบล่าสุด",
  description: "ทุนรัฐบาลออสเตรเลียสำหรับคนไทยเพื่อศึกษาระดับปริญญาโทแบบ coursework หรือ research ในมหาวิทยาลัยออสเตรเลีย",
  icon: "🇦🇺",
  link: "https://www.dfat.gov.au/people-to-people/australia-awards/participating-countries/thailand-australia-awards-intake-information"
},
{
  id: 209,
  name: "Fulbright Thai Graduate Scholarship (TGS)",
  level: "ปริญญาโท",
  country: "สหรัฐอเมริกา",
  type: "ทุนรัฐบาล/มูลนิธิ",
  deadline: "มกราคม–เมษายนของแต่ละรอบ",
  description: "ทุน Fulbright สำหรับคนไทยเพื่อศึกษาระดับปริญญาโทหรือปริญญาเอกในสหรัฐอเมริกา เปิดรับหลายสาขา ยกเว้นสาขาที่เกี่ยวข้องกับ clinical practice",
  icon: "🇺🇸",
  link: "https://www.fulbrightthai.org/tgs"
},
{
  id: 210,
  name: "Erasmus Mundus Joint Masters Scholarship",
  level: "ปริญญาโท",
  country: "สหภาพยุโรป/หลายประเทศ",
  type: "ทุนสหภาพยุโรป",
  deadline: "โดยทั่วไปตุลาคม–มกราคม",
  description: "ทุนปริญญาโทแบบ Joint Master ที่เรียนในหลายมหาวิทยาลัยและหลายประเทศ ผู้สมัครจากทั่วโลกสมัครได้",
  icon: "🇪🇺",
  link: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
},
{
  id: 211,
  name: "DAAD EPOS – Development Economics",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุน DAAD EPOS สำหรับหลักสูตร MSc Development Economics ที่ University of Göttingen",
  icon: "🇩🇪",
  link: "https://www.daad.de/epos"
},
{
  id: 212,
  name: "DAAD EPOS – Development Management",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุน DAAD EPOS สำหรับหลักสูตร Development Management ที่ Ruhr University Bochum",
  icon: "🇩🇪",
  link: "https://www.daad.de/epos"
},
{
  id: 213,
  name: "DAAD EPOS – Geography of Environmental Risks and Human Security",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "หลักสูตร MSc ที่ University of Bonn และ United Nations University ภายใต้ DAAD EPOS",
  icon: "🌍",
  link: "https://www.daad.de/epos"
},
{
  id: 214,
  name: "DAAD EPOS – Hydro Science and Engineering",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "หลักสูตร MSc Hydro Science and Engineering ที่ TU Dresden ภายใต้ DAAD EPOS",
  icon: "💧",
  link: "https://www.daad.de/epos"
},
{
  id: 215,
  name: "DAAD EPOS – Sustainable Renewable Energy Technologies",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "หลักสูตร Sustainable Renewable Energy Technologies ที่ University of Oldenburg ภายใต้ DAAD EPOS",
  icon: "⚡",
  link: "https://www.daad.de/epos"
},
{
  id: 216,
  name: "DAAD EPOS – Environmental Governance",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "หลักสูตร Master of Environmental Governance ที่ University of Freiburg ภายใต้ DAAD EPOS",
  icon: "🌱",
  link: "https://www.daad.de/epos"
},
{
  id: 217,
  name: "DAAD EPOS – Tropical Forestry",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "หลักสูตร MSc Tropical Forestry ที่ TU Dresden ภายใต้ DAAD EPOS",
  icon: "🌳",
  link: "https://www.daad.de/epos"
},
{
  id: 218,
  name: "DAAD EPOS – Agricultural Economics",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "หลักสูตร MSc Agricultural Economics ที่ University of Hohenheim ภายใต้ DAAD EPOS",
  icon: "🌾",
  link: "https://www.daad.de/epos"
},
{
  id: 219,
  name: "DAAD EPOS – Marine Biology / ISATEC",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "หลักสูตร MSc Marine Biology – International Studies in Aquatic Tropical Ecology ที่ University of Bremen",
  icon: "🌊",
  link: "https://www.daad.de/epos"
},
{
  id: 220,
  name: "DAAD EPOS – Urban Management",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "หลักสูตร MSc Urban Management ที่ TU Berlin ภายใต้ DAAD EPOS",
  icon: "🏙️",
  link: "https://www.daad.de/epos"
},
{
  id: 221,
  name: "DAAD EPOS – Integrated Urbanism and Sustainable Design",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "หลักสูตร MSc Integrated Urbanism and Sustainable Design ที่ University of Stuttgart/Ain Shams University",
  icon: "🏗️",
  link: "https://www.daad.de/epos"
},
{
  id: 222,
  name: "DAAD EPOS – Photogrammetry and Geoinformatics",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "หลักสูตร MSc Photogrammetry and Geoinformatics ที่ HFT Stuttgart",
  icon: "🛰️",
  link: "https://www.daad.de/epos"
},
{
  id: 223,
  name: "DAAD EPOS – Natural Hazards and Risks in Structural Engineering",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "หลักสูตร MSc Natural Hazards and Risks in Structural Engineering ที่ Bauhaus-Universität Weimar",
  icon: "🏗️",
  link: "https://www.daad.de/epos"
},
{
  id: 224,
  name: "DAAD EPOS – Tropical Hydrogeology and Environmental Engineering",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "หลักสูตร MSc TropHEE ที่ TU Darmstadt ภายใต้ DAAD EPOS",
  icon: "💧",
  link: "https://www.daad.de/epos"
},
{
  id: 225,
  name: "DAAD EPOS – Natural Resources Management and Development",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "หลักสูตรด้าน Natural Resources Management and Development ที่ TH Köln ภายใต้ DAAD EPOS",
  icon: "🌿",
  link: "https://www.daad.de/epos"
},
{
  id: 226,
  name: "DAAD EPOS – Integrated Water Resources Management",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "หลักสูตร Integrated Water Resources Management ที่ TH Köln/German Jordanian University",
  icon: "💧",
  link: "https://www.daad.de/epos"
},
{
  id: 227,
  name: "DAAD EPOS – Environment and Resources Management",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "หลักสูตร ENREM – Environment and Resources Management ที่ TH Köln/Universidad de San Luis Potosi",
  icon: "🌎",
  link: "https://www.daad.de/epos"
},
{
  id: 228,
  name: "SI Scholarship – Nutrition Science, Karolinska Institutet",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบ SI ล่าสุด",
  description: "หลักสูตร Master’s Nutrition Science ที่ Karolinska Institutet อยู่ในรายชื่อหลักสูตรที่รับผู้สมัครสัญชาติไทยตามเกณฑ์ SI",
  icon: "🇸🇪",
  link: "https://apply-scholarships.si.se/courses/course/99"
},
{
  id: 229,
  name: "SI Scholarship – International Migration and Ethnic Relations, Malmö University",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบ SI ล่าสุด",
  description: "หลักสูตร Master's International Migration and Ethnic Relations ที่ Malmö University รับผู้สมัครสัญชาติไทยตามเกณฑ์ SI",
  icon: "🇸🇪",
  link: "https://apply-scholarships.si.se/courses/course/1025"
},
{
  id: 230,
  name: "SI Scholarship – Information Systems, Lund University",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบ SI ล่าสุด",
  description: "หลักสูตร Master's Information Systems ที่ Lund University อยู่ในระบบ SI Scholarships และรับผู้สมัครสัญชาติไทยตามเงื่อนไข",
  icon: "💻",
  link: "https://apply-scholarships.si.se/courses/course/1709"
},
{
  id: 231,
  name: "SI Scholarship – International Affairs, Linnaeus University",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบ SI ล่าสุด",
  description: "หลักสูตร Master's International Affairs ที่ Linnaeus University รับผู้สมัครสัญชาติไทยตามเกณฑ์ SI",
  icon: "🌍",
  link: "https://apply-scholarships.si.se/courses/course/1471"
},
{
  id: 232,
  name: "SI Scholarship – Applied Social Research, Stockholm University",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบ SI ล่าสุด",
  description: "หลักสูตร Master's Applied Social Research ที่ Stockholm University อยู่ในระบบ SI และรับผู้สมัครสัญชาติไทย",
  icon: "📊",
  link: "https://apply-scholarships.si.se/courses/course/401"
},
{
  id: 233,
  name: "SI Scholarship – Data Science, University of Skövde",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบ SI ล่าสุด",
  description: "หลักสูตร Master's Data Science ที่ University of Skövde รับผู้สมัครสัญชาติไทยตามเกณฑ์ SI",
  icon: "💻",
  link: "https://apply-scholarships.si.se/courses/course/1301"
},
{
  id: 234,
  name: "SI Scholarship – European Affairs, Lund University",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบ SI ล่าสุด",
  description: "หลักสูตร Master's European Affairs ที่ Lund University รับผู้สมัครสัญชาติไทยตามเกณฑ์ SI",
  icon: "🇸🇪",
  link: "https://apply-scholarships.si.se/courses/course/1652"
},
{
  id: 235,
  name: "SI Scholarship – AI and Language, Stockholm University",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบ SI ล่าสุด",
  description: "หลักสูตร Master's AI and Language ที่ Stockholm University รับผู้สมัครสัญชาติไทยตามเกณฑ์ SI",
  icon: "🤖",
  link: "https://apply-scholarships.si.se/courses/course/1839"
},
{
  id: 236,
  name: "SI Scholarship – International and European Relations, Linköping University",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบ SI ล่าสุด",
  description: "หลักสูตร Master's International and European Relations ที่ Linköping University รับผู้สมัครสัญชาติไทยตามเกณฑ์ SI",
  icon: "🌍",
  link: "https://apply-scholarships.si.se/courses/course/851"
},
{
  id: 237,
  name: "SI Scholarship – Software Engineering, Mälardalen University",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบ SI ล่าสุด",
  description: "หลักสูตร Master's Software Engineering ที่ Mälardalen University รับผู้สมัครสัญชาติไทยตามเกณฑ์ SI",
  icon: "💻",
  link: "https://apply-scholarships.si.se/courses/course/369"
},
{
  id: 238,
  name: "Türkiye Scholarships – Graduate",
  level: "ปริญญาโท",
  country: "ตุรกี",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบสมัครประจำปี",
  description: "ทุนรัฐบาลตุรกีสำหรับนักศึกษาต่างชาติระดับปริญญาโท ครอบคลุมหลายสาขา",
  icon: "🇹🇷",
  link: "https://www.turkiyeburslari.gov.tr/"
},
{
  id: 239,
  name: "Stipendium Hungaricum – Master's Scholarship",
  level: "ปริญญาโท",
  country: "ฮังการี",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบสมัครประจำปี",
  description: "ทุนรัฐบาลฮังการีสำหรับหลักสูตรระดับปริญญาโทและ one-tier master สำหรับนักศึกษาต่างชาติ",
  icon: "🇭🇺",
  link: "https://stipendiumhungaricum.hu/apply/"
},
{
  id: 240,
  name: "GKS Graduate Degree – Embassy Track",
  level: "ปริญญาโท",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศ GKS-G ประจำปี",
  description: "ทุนรัฐบาลเกาหลีสำหรับระดับบัณฑิตศึกษา สมัครผ่านสถานเอกอัครราชทูตเกาหลีในประเทศสัญชาติ",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/en/plan/gksNoticeRead.do?bbsId=BBSMSTR_000000000461&nttId=4420"
},
{
  id: 241,
  name: "GKS Graduate Degree – University Track",
  level: "ปริญญาโท",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศ GKS-G ประจำปี",
  description: "ทุน GKS ระดับบัณฑิตศึกษาที่สมัครโดยตรงผ่านมหาวิทยาลัยเกาหลีที่เข้าร่วมโครงการ",
  icon: "🏫",
  link: "https://www.studyinkorea.go.kr/en/plan/gksNoticeRead.do?bbsId=BBSMSTR_000000000461&nttId=4420"
},
{
  id: 242,
  name: "DAAD EPOS – Development Economics",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุน DAAD EPOS สำหรับผู้สมัครจากประเทศกำลังพัฒนาเพื่อศึกษาหลักสูตรด้าน Development Economics ในเยอรมนี",
  icon: "🇩🇪",
  link: "https://www.daad.de/en/information-services-for-higher-education-institutions/further-information-on-daad-programmes/epos/"
},
{
  id: 243,
  name: "DAAD EPOS – Development Management",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุน DAAD EPOS สำหรับหลักสูตรด้าน Development Management",
  icon: "🇩🇪",
  link: "https://www.daad.de/en/information-services-for-higher-education-institutions/further-information-on-daad-programmes/epos/"
},
{
  id: 244,
  name: "DAAD EPOS – Environmental Governance",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุนสำหรับหลักสูตร Environmental Governance ในเยอรมนี",
  icon: "🌱",
  link: "https://www.daad.de/en/information-services-for-higher-education-institutions/further-information-on-daad-programmes/epos/"
},
{
  id: 245,
  name: "DAAD EPOS – Hydro Science and Engineering",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุน DAAD EPOS สำหรับหลักสูตร Hydro Science and Engineering",
  icon: "💧",
  link: "https://www.daad.de/en/information-services-for-higher-education-institutions/further-information-on-daad-programmes/epos/"
},
{
  id: 246,
  name: "DAAD EPOS – Tropical Forestry",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุนสำหรับผู้สมัครจากประเทศกำลังพัฒนาเพื่อศึกษาด้าน Tropical Forestry",
  icon: "🌳",
  link: "https://www.daad.de/en/information-services-for-higher-education-institutions/further-information-on-daad-programmes/epos/"
},
{
  id: 247,
  name: "DAAD EPOS – Urban Management",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุน DAAD EPOS สำหรับหลักสูตรด้าน Urban Management",
  icon: "🏙️",
  link: "https://www.daad.de/en/information-services-for-higher-education-institutions/further-information-on-daad-programmes/epos/"
},
{
  id: 248,
  name: "DAAD EPOS – Natural Resources Management and Development",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุนสำหรับหลักสูตรด้าน Natural Resources Management and Development",
  icon: "🌿",
  link: "https://www.daad.de/en/information-services-for-higher-education-institutions/further-information-on-daad-programmes/epos/"
},
{
  id: 249,
  name: "DAAD EPOS – Integrated Water Resources Management",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุนสำหรับหลักสูตร Integrated Water Resources Management",
  icon: "💧",
  link: "https://www.daad.de/en/information-services-for-higher-education-institutions/further-information-on-daad-programmes/epos/"
},
{
  id: 250,
  name: "DAAD EPOS – Agricultural Economics",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุนสำหรับหลักสูตร Agricultural Economics ภายใต้ DAAD EPOS",
  icon: "🌾",
  link: "https://www.daad.de/en/information-services-for-higher-education-institutions/further-information-on-daad-programmes/epos/"
},
{
  id: 251,
  name: "DAAD EPOS – Sustainable Renewable Energy Technologies",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุนสำหรับหลักสูตรด้านเทคโนโลยีพลังงานหมุนเวียนอย่างยั่งยืน",
  icon: "⚡",
  link: "https://www.daad.de/en/information-services-for-higher-education-institutions/further-information-on-daad-programmes/epos/"
},
{
  id: 252,
  name: "DAAD EPOS – Photogrammetry and Geoinformatics",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุนสำหรับหลักสูตร Photogrammetry and Geoinformatics",
  icon: "🛰️",
  link: "https://www.daad.de/en/information-services-for-higher-education-institutions/further-information-on-daad-programmes/epos/"
},
{
  id: 253,
  name: "DAAD EPOS – Tropical Hydrogeology and Environmental Engineering",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุน DAAD EPOS สำหรับหลักสูตร Tropical Hydrogeology and Environmental Engineering",
  icon: "🌎",
  link: "https://www.daad.de/en/information-services-for-higher-education-institutions/further-information-on-daad-programmes/epos/"
},
{
  id: 254,
  name: "DAAD EPOS – Environment and Resources Management",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุนสำหรับหลักสูตร Environment and Resources Management",
  icon: "🌱",
  link: "https://www.daad.de/en/information-services-for-higher-education-institutions/further-information-on-daad-programmes/epos/"
},
{
  id: 255,
  name: "DAAD EPOS – Marine Biology / ISATEC",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุนสำหรับหลักสูตร International Studies in Aquatic Tropical Ecology",
  icon: "🌊",
  link: "https://www.daad.de/en/information-services-for-higher-education-institutions/further-information-on-daad-programmes/epos/"
},
{
  id: 256,
  name: "DAAD EPOS – Natural Hazards and Risks in Structural Engineering",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุนสำหรับหลักสูตรด้านภัยธรรมชาติและความเสี่ยงในวิศวกรรมโครงสร้าง",
  icon: "🏗️",
  link: "https://www.daad.de/en/information-services-for-higher-education-institutions/further-information-on-daad-programmes/epos/"
},
{
  id: 257,
  name: "Global Korea Scholarship for Graduate Degrees – General Track",
  level: "ปริญญาโท",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "รอบปี 2569 ปิดรับสมัครแล้ว",
  description: "ทุนรัฐบาลเกาหลี GKS-G สำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา รวมถึงปริญญาโท",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/en/plan/gksNoticeRead.do?bbsId=BBSMSTR_000000000461&nttId=4420"
},
{
  id: 258,
  name: "Global Korea Scholarship for Graduate Degrees – Embassy Track",
  level: "ปริญญาโท",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "รอบปี 2569 ปิดรับสมัครแล้ว",
  description: "ช่องทาง Embassy Track ของ GKS-G สำหรับผู้สมัครต่างชาติระดับปริญญาโท",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/en/plan/gksNoticeRead.do?bbsId=BBSMSTR_000000000461&nttId=4420"
},
{
  id: 259,
  name: "Global Korea Scholarship for Graduate Degrees – University Track",
  level: "ปริญญาโท",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "รอบปี 2569 ปิดรับสมัครแล้ว",
  description: "ช่องทาง University Track ของ GKS-G สมัครผ่านมหาวิทยาลัยเกาหลีที่กำหนด",
  icon: "🏫",
  link: "https://www.studyinkorea.go.kr/en/plan/gksNoticeRead.do?bbsId=BBSMSTR_000000000461&nttId=4420"
},
{
  id: 260,
  name: "Erasmus Mundus Joint Masters Scholarship",
  level: "ปริญญาโท",
  country: "ยุโรป",
  type: "ทุนสหภาพยุโรป",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุนสำหรับหลักสูตรปริญญาโทร่วม Erasmus Mundus ที่ดำเนินการโดยกลุ่มมหาวิทยาลัยในยุโรปและประเทศพันธมิตร",
  icon: "🇪🇺",
  link: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
},
{
  id: 261,
  name: "Stipendium Hungaricum – Master's Scholarship",
  level: "ปริญญาโท",
  country: "ฮังการี",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบสมัครประจำปี",
  description: "ทุนรัฐบาลฮังการีสำหรับนักศึกษาต่างชาติระดับปริญญาโทในมหาวิทยาลัยที่เข้าร่วมโครงการ",
  icon: "🇭🇺",
  link: "https://stipendiumhungaricum.hu/apply/"
},
    {
  id: 262,
  name: "Swedish Institute Scholarship for Global Professionals",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบสมัครล่าสุด",
  description: "ทุน Swedish Institute สำหรับผู้สมัครจากประเทศไทยและประเทศที่กำหนด เพื่อศึกษาระดับปริญญาโทในสวีเดน",
  icon: "🇸🇪",
  link: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/"
},
{
  id: 263,
  name: "MEXT Scholarship – Research Students",
  level: "ปริญญาโท",
  country: "ญี่ปุ่น",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามสถานทูต/มหาวิทยาลัย",
  description: "ทุนรัฐบาลญี่ปุ่น MEXT สำหรับ Research Students ที่สามารถเข้าสู่หลักสูตรปริญญาโทหรือปริญญาเอกได้ตามเงื่อนไข",
  icon: "🇯🇵",
  link: "https://www.studyinjapan.go.jp/en/planning/scholarships/mext-scholarships/"
},
{
  id: 264,
  name: "Global Korea Scholarship for Graduate Degrees (GKS-G)",
  level: "ปริญญาโท",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามรอบประกาศ",
  description: "ทุนรัฐบาลเกาหลีสำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา สมัครผ่าน Embassy Track หรือ University Track",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/ko/plan/scholarship.do"
},
{
  id: 265,
  name: "Türkiye Scholarships – Graduate Scholarship Program",
  level: "ปริญญาโท",
  country: "ตุรกี",
  type: "ทุนรัฐบาล",
  deadline: "โดยทั่วไป 10 มกราคม–20 กุมภาพันธ์",
  description: "ทุนรัฐบาลตุรกีระดับปริญญาโทสำหรับนักศึกษาต่างชาติในสาขาสังคมศาสตร์ มนุษยศาสตร์ วิทยาศาสตร์ และวิศวกรรมศาสตร์",
  icon: "🇹🇷",
  link: "https://www.turkiyeburslari.gov.tr/fulltimeprograms"
},
{
  id: 266,
  name: "Erasmus Mundus Joint Masters Scholarship",
  level: "ปริญญาโท",
  country: "ยุโรป",
  type: "ทุนสหภาพยุโรป",
  deadline: "แตกต่างตามหลักสูตร",
  description: "ทุน Erasmus Mundus สำหรับหลักสูตรปริญญาโทร่วมที่ดำเนินการโดยมหาวิทยาลัยหลายแห่งในประเทศต่าง ๆ",
  icon: "🇪🇺",
  link: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
},
{
  id: 267,
  name: "DAAD EPOS – Development Economics",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามหลักสูตร",
  description: "ทุน DAAD EPOS สำหรับผู้สมัครจากประเทศกำลังพัฒนาในหลักสูตร Development Economics",
  icon: "🇩🇪",
  link: "https://www.daad.de/en/information-services-for-higher-education-institutions/further-information-on-daad-programmes/epos/"
},
{
  id: 268,
  name: "DAAD Helmut-Schmidt Programme – Social Protection",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประกาศ",
  description: "หลักสูตร Social Protection ที่อยู่ภายใต้ Helmut-Schmidt Programme",
  icon: "🇩🇪",
  link: "https://www.daad.de/en/studying-in-germany/scholarships/daad-funding-programmes/helmut-schmidt-programme/"
},
{
  id: 269,
  name: "DAAD Helmut-Schmidt Programme – Development and Governance",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประกาศ",
  description: "หลักสูตร Development and Governance ที่อยู่ภายใต้ Helmut-Schmidt Programme",
  icon: "🇩🇪",
  link: "https://www.daad.de/en/studying-in-germany/scholarships/daad-funding-programmes/helmut-schmidt-programme/"
},
{
  id: 270,
  name: "DAAD Helmut-Schmidt Programme – Public Policy",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประกาศ",
  description: "หลักสูตร Public Policy ที่อยู่ภายใต้ Helmut-Schmidt Programme",
  icon: "🇩🇪",
  link: "https://www.daad.de/en/studying-in-germany/scholarships/daad-funding-programmes/helmut-schmidt-programme/"
},
{
  id: 271,
  name: "DAAD Helmut-Schmidt Programme – Peace and Conflict Studies",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประกาศ",
  description: "หลักสูตร Peace and Conflict Studies ที่อยู่ภายใต้ Helmut-Schmidt Programme",
  icon: "🇩🇪",
  link: "https://www.daad.de/en/studying-in-germany/scholarships/daad-funding-programmes/helmut-schmidt-programme/"
},
{
  id: 272,
  name: "DAAD Helmut-Schmidt Programme – Management in Nonprofit Organisations",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประกาศ",
  description: "หลักสูตร Management in Nonprofit Organisations ที่อยู่ภายใต้ Helmut-Schmidt Programme",
  icon: "🇩🇪",
  link: "https://www.daad.de/en/studying-in-germany/scholarships/daad-funding-programmes/helmut-schmidt-programme/"
},
{
  id: 273,
  name: "DAAD Helmut-Schmidt Programme – Development Studies",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประกาศ",
  description: "หลักสูตร Development Studies ที่อยู่ภายใต้ Helmut-Schmidt Programme",
  icon: "🇩🇪",
  link: "https://www.daad.de/en/studying-in-germany/scholarships/daad-funding-programmes/helmut-schmidt-programme/"
},
{
  id: 274,
  name: "DAAD Helmut-Schmidt Programme – Governance and Public Policy",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประกาศ",
  description: "หลักสูตร Governance and Public Policy ที่อยู่ภายใต้ Helmut-Schmidt Programme",
  icon: "🇩🇪",
  link: "https://www.daad.de/en/studying-in-germany/scholarships/daad-funding-programmes/helmut-schmidt-programme/"
},
   {
  id: 275,
  name: "MEXT Scholarship – Research Students (Doctoral)",
  level: "ปริญญาเอก",
  country: "ญี่ปุ่น",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามสถานทูต/มหาวิทยาลัย",
  description: "ทุนรัฐบาลญี่ปุ่นสำหรับ Research Students ที่มีสิทธิ์เข้าศึกษาระดับปริญญาเอกในญี่ปุ่น",
  icon: "🇯🇵",
  link: "https://www.studyinjapan.go.jp/en/planning/scholarships/mext-scholarships/"
},
{
  id: 276,
  name: "MEXT Research Students – Embassy Recommendation",
  level: "ปริญญาเอก",
  country: "ญี่ปุ่น",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประเทศ",
  description: "ช่องทาง Embassy Recommendation ของทุน MEXT สำหรับผู้สมัครระดับบัณฑิตศึกษา",
  icon: "🇯🇵",
  link: "https://www.studyinjapan.go.jp/en/planning/scholarships/mext-scholarships/"
},
{
  id: 277,
  name: "MEXT Research Students – University Recommendation",
  level: "ปริญญาเอก",
  country: "ญี่ปุ่น",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามมหาวิทยาลัย",
  description: "ช่องทาง University Recommendation ของทุน MEXT สำหรับ Research Students",
  icon: "🇯🇵",
  link: "https://www.studyinjapan.go.jp/en/planning/scholarships/mext-scholarships/"
},
{
  id: 278,
  name: "Global Korea Scholarship – Doctoral Degree",
  level: "ปริญญาเอก",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประกาศประจำปี",
  description: "ทุนรัฐบาลเกาหลี GKS สำหรับนักศึกษาต่างชาติระดับปริญญาเอก",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/eng/plan/scholarship.do"
},
{
  id: 279,
  name: "GKS-G Doctoral – Embassy Track",
  level: "ปริญญาเอก",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประกาศประจำปี",
  description: "ช่องทาง Embassy Track ของ Global Korea Scholarship ระดับปริญญาเอก",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/eng/plan/scholarship.do"
},
{
  id: 280,
  name: "GKS-G Doctoral – University Track",
  level: "ปริญญาเอก",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประกาศประจำปี",
  description: "ช่องทาง University Track ของ Global Korea Scholarship ระดับปริญญาเอก",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/eng/plan/scholarship.do"
},
{
  id: 281,
  name: "World Bank–Republic of Korea Scholarship Program – Doctoral",
  level: "ปริญญาเอก",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล/องค์การระหว่างประเทศ",
  deadline: "แตกต่างตามรอบประกาศ",
  description: "โครงการทุน WB-ROK ที่มีหลักสูตรระดับปริญญาเอกในมหาวิทยาลัยเกาหลีที่เข้าร่วม",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/ko/plan/gksNoticeRead.do?bbsId=BBSMSTR_000000000461&nttId=4430"
},
{
  id: 282,
  name: "WB-ROK Scholarship – Doctoral Program",
  level: "ปริญญาเอก",
  country: "เกาหลีใต้",
  type: "ทุนองค์การระหว่างประเทศ",
  deadline: "ตรวจสอบรอบรับสมัคร",
  description: "ทุนสำหรับผู้สมัครระดับปริญญาเอกภายใต้ World Bank–Republic of Korea Scholarship Program",
  icon: "🌏",
  link: "https://www.studyinkorea.go.kr/ko/plan/gksNoticeRead.do?bbsId=BBSMSTR_000000000461&nttId=4430"
},
{
  id: 283,
  name: "DAAD Doctoral Programmes in Germany",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุน DAAD สำหรับผู้สมัครต่างชาติที่ต้องการทำปริญญาเอกในเยอรมนี",
  icon: "🇩🇪",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 284,
  name: "DAAD Research Grants – Doctoral Research",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนวิจัย",
  deadline: "แตกต่างตามรอบ",
  description: "ทุนสนับสนุนการวิจัยระดับปริญญาเอกในเยอรมนี",
  icon: "🔬",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 285,
  name: "DAAD Cotutelle / Bi-nationally Supervised Doctoral Degree",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามรอบ",
  description: "ทุนสำหรับการทำปริญญาเอกแบบมีการดูแลร่วมระหว่างเยอรมนีกับสถาบันในต่างประเทศ",
  icon: "🇩🇪",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 286,
  name: "DAAD Doctoral Research Stay",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนวิจัย",
  deadline: "แตกต่างตามรอบ",
  description: "ทุนสำหรับนักศึกษาปริญญาเอกเพื่อไปทำวิจัยในเยอรมนี",
  icon: "🇩🇪",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 287,
  name: "DAAD Doctoral Scholarship – Individual Research",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามรอบ",
  description: "ทุน DAAD สำหรับโครงการวิจัยปริญญาเอกแบบรายบุคคล",
  icon: "🎓",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 288,
  name: "DAAD Doctoral Scholarship – Structured Programme",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุน DAAD สำหรับผู้สมัครที่เข้าร่วม structured doctoral programme",
  icon: "🎓",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 289,
  name: "DAAD Doctoral Research – Natural Sciences",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนวิจัย",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุน DAAD สำหรับการวิจัยระดับปริญญาเอกในกลุ่มวิทยาศาสตร์ธรรมชาติ",
  icon: "🧪",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 290,
  name: "DAAD Doctoral Research – Engineering",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนวิจัย",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุน DAAD สำหรับการวิจัยระดับปริญญาเอกด้านวิศวกรรม",
  icon: "⚙️",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 291,
  name: "DAAD Doctoral Research – Social Sciences",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนวิจัย",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุน DAAD สำหรับการวิจัยระดับปริญญาเอกด้านสังคมศาสตร์",
  icon: "📚",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 292,
  name: "DAAD Doctoral Research – Economics",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนวิจัย",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุน DAAD สำหรับการวิจัยระดับปริญญาเอกด้านเศรษฐศาสตร์",
  icon: "📊",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 293,
  name: "DAAD Doctoral Research – Agricultural Sciences",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนวิจัย",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุน DAAD สำหรับการวิจัยระดับปริญญาเอกด้านเกษตรศาสตร์",
  icon: "🌾",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 294,
  name: "DAAD Doctoral Research – Environmental Sciences",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนวิจัย",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุน DAAD สำหรับการวิจัยระดับปริญญาเอกด้านสิ่งแวดล้อม",
  icon: "🌱",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 295,
  name: "DAAD Doctoral Research – Mathematics",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนวิจัย",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุน DAAD สำหรับการวิจัยระดับปริญญาเอกด้านคณิตศาสตร์",
  icon: "📐",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 296,
  name: "DAAD Doctoral Research – Computer Science",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนวิจัย",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุน DAAD สำหรับการวิจัยระดับปริญญาเอกด้านคอมพิวเตอร์และสารสนเทศ",
  icon: "💻",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 297,
  name: "DAAD Doctoral Research – Medicine",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนวิจัย",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุน DAAD สำหรับการวิจัยระดับปริญญาเอกในสาขาการแพทย์ที่เข้าเกณฑ์",
  icon: "🩺",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 298,
  name: "DAAD Doctoral Research – Life Sciences",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนวิจัย",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุน DAAD สำหรับการวิจัยระดับปริญญาเอกด้าน Life Sciences",
  icon: "🧬",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 299,
  name: "DAAD Doctoral Research – Geography",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนวิจัย",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุน DAAD สำหรับการวิจัยระดับปริญญาเอกด้านภูมิศาสตร์",
  icon: "🌍",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 300,
  name: "DAAD Doctoral Research – Political Science",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนวิจัย",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุน DAAD สำหรับการวิจัยระดับปริญญาเอกด้านรัฐศาสตร์",
  icon: "🏛️",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 301,
  name: "ทุนปริญญาเอกเพื่อการวิจัย มหาวิทยาลัยธรรมศาสตร์",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบประกาศ",
  description: "ทุนสนับสนุนการวิจัยสำหรับนักศึกษาระดับปริญญาเอกของมหาวิทยาลัยธรรมศาสตร์",
  icon: "🇹🇭",
  link: "https://research.tu.ac.th/phd-scholarship"
},
{
  id: 302,
  name: "ทุนสนับสนุนค่าใช้จ่ายรายเดือนเพื่อศึกษาต่อระดับปริญญาเอก มหาวิทยาลัยธรรมศาสตร์",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ปีการศึกษา 2569",
  description: "ทุนสนับสนุนค่าใช้จ่ายรายเดือนสำหรับนักศึกษาปริญญาเอกของคณะสถาปัตยกรรมศาสตร์และการผังเมือง มหาวิทยาลัยธรรมศาสตร์",
  icon: "🇹🇭",
  link: "https://grad.tds.tu.ac.th/scholarship"
},
{
  id: 303,
  name: "ทุนวิจัยเพื่อทำวิทยานิพนธ์ระดับบัณฑิตศึกษา มหาวิทยาลัยธรรมศาสตร์",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบรอบประกาศ",
  description: "ทุนสนับสนุนโครงการวิจัยเพื่อทำวิทยานิพนธ์ระดับบัณฑิตศึกษา",
  icon: "🔬",
  link: "https://graduate.engr.tu.ac.th/scholarship"
},
{
  id: 304,
  name: "ทุนปริญญาเอกเพื่อการวิจัย คณะวิศวกรรมศาสตร์ มหาวิทยาลัยธรรมศาสตร์",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบรอบประกาศ",
  description: "ทุนปริญญาเอกเพื่อการวิจัยสำหรับนักศึกษาระดับปริญญาเอกของคณะวิศวกรรมศาสตร์ มหาวิทยาลัยธรรมศาสตร์",
  icon: "⚙️",
  link: "https://graduate.engr.tu.ac.th/scholarship"
},
{
  id: 305,
  name: "ทุนบัณฑิตศึกษา มหาวิทยาลัยสงขลานครินทร์",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบประกาศ",
  description: "ทุนบัณฑิตศึกษาของมหาวิทยาลัยสงขลานครินทร์สำหรับนักศึกษาระดับบัณฑิตศึกษา",
  icon: "🇹🇭",
  link: "https://grad.psu.ac.th/scholarship/"
},
{
  id: 306,
  name: "ทุนผู้ช่วยสอน มหาวิทยาลัยสงขลานครินทร์",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนผู้ช่วยสอน",
  deadline: "ตรวจสอบรอบประกาศ",
  description: "ทุนผู้ช่วยสอนสำหรับนักศึกษาระดับบัณฑิตศึกษาของมหาวิทยาลัยสงขลานครินทร์",
  icon: "👨‍🏫",
  link: "https://grad.psu.ac.th/scholarship/"
},
{
  id: 307,
  name: "ทุนพัฒนาบุคลากรสายวิชาการเพื่อศึกษาต่อระดับปริญญาเอก ณ มหาวิทยาลัยสงขลานครินทร์",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนพัฒนาบุคลากร",
  deadline: "ปี พ.ศ. 2569",
  description: "ทุนพัฒนาบุคลากรสายวิชาการเพื่อศึกษาต่อระดับปริญญาเอก ณ มหาวิทยาลัยสงขลานครินทร์",
  icon: "🎓",
  link: "https://grad.psu.ac.th/ทุนพัฒนาบุคลากรสายวิชาการเพื่อศึกษาต่อระดับปริญญาเอก/"
},
{
  id: 308,
  name: "ทุนแลกเปลี่ยนการศึกษาวิจัยของนักศึกษาระดับปริญญาเอก ม.อ.",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนแลกเปลี่ยนวิจัย",
  deadline: "ปีงบประมาณ 2569",
  description: "ทุน Ph.D. Student Exchange Scholarship สำหรับนักศึกษาระดับปริญญาเอก มหาวิทยาลัยสงขลานครินทร์",
  icon: "🌏",
  link: "https://grad.psu.ac.th/"
},
{
  id: 309,
  name: "ทุนอุดหนุนการวิจัยเพื่อวิทยานิพนธ์ มหาวิทยาลัยสงขลานครินทร์",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบรอบประกาศ",
  description: "ทุนอุดหนุนการวิจัยเพื่อวิทยานิพนธ์สำหรับนักศึกษาบัณฑิตศึกษา มหาวิทยาลัยสงขลานครินทร์",
  icon: "🔬",
  link: "https://grad.psu.ac.th/scholarship/"
},
{
  id: 310,
  name: "ทุนวิทยานิพนธ์เพื่อแก้ไขปัญหาของชุมชน มหาวิทยาลัยสงขลานครินทร์",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ปีงบประมาณ 2569",
  description: "ทุนอุดหนุนการวิจัยเพื่อวิทยานิพนธ์ในหัวข้อการแก้ไขปัญหาของชุมชน",
  icon: "🏘️",
  link: "https://grad.psu.ac.th/"
},
{
  id: 311,
  name: "ทุนสนับสนุนรางวัลผลงานวิจัยสำหรับนักศึกษาระดับบัณฑิตศึกษา ม.อ.",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนรางวัล",
  deadline: "ตรวจสอบรอบประกาศ",
  description: "ทุนสนับสนุนรางวัลผลงานวิจัยสำหรับนักศึกษาระดับบัณฑิตศึกษาของมหาวิทยาลัยสงขลานครินทร์",
  icon: "🏆",
  link: "https://grad.psu.ac.th/scholarship/"
},
{
  id: 312,
  name: "ทุนผู้ช่วยวิจัยบัณฑิตศึกษา มหาวิทยาลัยมหิดล",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนผู้ช่วยวิจัย",
  deadline: "ภาคปลาย 27 พฤศจิกายน 2569",
  description: "Graduate Research Assistantships สำหรับนักศึกษาบัณฑิตศึกษามหาวิทยาลัยมหิดล",
  icon: "🔬",
  link: "https://graduate.mahidol.ac.th/thai/visitors/?p=scholarship&scholarship=scholarship-07"
},
{
  id: 313,
  name: "ทุนเสนอผลงานทางวิชาการภายในประเทศ มหาวิทยาลัยมหิดล",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิชาการ",
  deadline: "สมัครก่อนนำเสนอผลงาน 2 เดือน",
  description: "ทุนอุดหนุนสำหรับนักศึกษาปริญญาโท–เอกเพื่อไปเสนอผลงานทางวิชาการภายในประเทศ",
  icon: "🇹🇭",
  link: "https://graduate.mahidol.ac.th/thai/?p=scholarship&scholarship=scholarship-05"
},
{
  id: 314,
  name: "ทุนเสนอผลงานทางวิชาการ ณ ต่างประเทศ มหาวิทยาลัยมหิดล",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิชาการ",
  deadline: "สมัครก่อนนำเสนอผลงาน 2 เดือน",
  description: "ทุนอุดหนุนสำหรับนักศึกษาปริญญาโท–เอกเพื่อไปเสนอผลงานในที่ประชุมวิชาการระดับนานาชาติ",
  icon: "🌏",
  link: "https://graduate.mahidol.ac.th/thai/prospective-students/?p=scholarship&scholarship=scholarship-06"
},
{
  id: 315,
  name: "ทุนผู้ช่วยวิจัยระดับบัณฑิตศึกษา มหาวิทยาลัยมหิดล – ภาคต้น",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนผู้ช่วยวิจัย",
  deadline: "ปีการศึกษา 2569",
  description: "ทุน RA สำหรับนักศึกษาบัณฑิตศึกษาที่ผ่านความเห็นชอบจากอาจารย์ที่ปรึกษา",
  icon: "🧪",
  link: "https://graduate.mahidol.ac.th/thai/visitors/?p=scholarship&scholarship=scholarship-07"
},
{
  id: 316,
  name: "ทุนผู้ช่วยวิจัยระดับบัณฑิตศึกษา มหาวิทยาลัยมหิดล – ภาคปลาย",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนผู้ช่วยวิจัย",
  deadline: "27 พฤศจิกายน 2569",
  description: "ทุน RA สำหรับนักศึกษาระดับบัณฑิตศึกษาในภาคการศึกษาที่ 2/2569",
  icon: "🧪",
  link: "https://graduate.mahidol.ac.th/thai/visitors/?p=scholarship&scholarship=scholarship-07"
},
{
  id: 317,
  name: "ทุนสนับสนุนค่าหน่วยกิตวิจัยระดับปริญญาเอก มจธ.",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบภาคการศึกษา",
  description: "ทุนสนับสนุนค่าหน่วยกิตวิจัยและวิทยานิพนธ์สำหรับนักศึกษาปริญญาเอก มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  icon: "🇹🇭",
  link: "https://www.sit.kmutt.ac.th/scholarship-phd/"
},
{
  id: 318,
  name: "ทุนสนับสนุนค่าหน่วยกิตวิทยานิพนธ์ ปริญญาเอก มจธ.",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบรอบประกาศ",
  description: "ทุนสนับสนุนค่าหน่วยกิตวิทยานิพนธ์สำหรับนักศึกษาปริญญาเอก",
  icon: "📚",
  link: "https://www.sit.kmutt.ac.th/elementor-50547/"
},
{
  id: 319,
  name: "ทุนยกเว้นค่าเล่าเรียนตลอดหลักสูตรระดับปริญญาเอก สจล.",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนยกเว้นค่าเล่าเรียน",
  deadline: "ภาคการศึกษา 2/2569",
  description: "ทุนอุดหนุนการศึกษาสำหรับผู้สมัครหลักสูตรปริญญาเอกของคณะเทคโนโลยีสารสนเทศ สจล. โดยยกเว้นค่าธรรมเนียมการศึกษาแบบเหมาจ่ายตามเงื่อนไข",
  icon: "🎓",
  link: "https://www.it.kmitl.ac.th/th/tuition-fee-waiver-throughout-the-course-it"
},
{
  id: 320,
  name: "ทุนอุดหนุนการศึกษาระดับปริญญาเอก คณะเทคโนโลยีสารสนเทศ สจล.",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ปีการศึกษา 2569",
  description: "ทุนอุดหนุนการศึกษาสำหรับผู้สมัครเข้าเรียนหลักสูตรระดับปริญญาเอกของคณะเทคโนโลยีสารสนเทศ สจล.",
  icon: "💻",
  link: "https://www.it.kmitl.ac.th/th/tuition-fee-waiver-throughout-the-course-it"
},
{
  id: 321,
  name: "ทุนสนับสนุนค่าหน่วยกิตวิจัย ปริญญาเอก คณะ IT มจธ.",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ภาคการศึกษา 2/2569",
  description: "ทุนสนับสนุนค่าหน่วยกิตวิจัยสำหรับนักศึกษาปริญญาเอกทุกหลักสูตรที่เข้าเงื่อนไขของ School of Information Technology มจธ.",
  icon: "💻",
  link: "https://www.sit.kmutt.ac.th/elementor-50547/"
},
{
  id: 322,
  name: "ทุนสนับสนุนค่าหน่วยกิตวิจัย PhD Computer Science มจธ.",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบรอบประกาศ",
  description: "ทุนสนับสนุนค่าหน่วยกิตวิทยานิพนธ์สำหรับนักศึกษาปริญญาเอกสาขาวิทยาการคอมพิวเตอร์",
  icon: "💻",
  link: "https://www.sit.kmutt.ac.th/scholarship-phd/"
},
{
  id: 323,
  name: "ทุนสนับสนุนค่าหน่วยกิตวิจัย PhD Information Technology มจธ.",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบรอบประกาศ",
  description: "ทุนสนับสนุนค่าหน่วยกิตวิทยานิพนธ์สำหรับนักศึกษาปริญญาเอกสาขาเทคโนโลยีสารสนเทศ",
  icon: "💻",
  link: "https://www.sit.kmutt.ac.th/elementor-50547/"
},
{
  id: 324,
  name: "ทุนวิทยานิพนธ์ระดับปริญญาเอก NIDA",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิทยานิพนธ์",
  deadline: "ตรวจสอบรอบประกาศ",
  description: "ทุนสนับสนุนการจัดทำวิทยานิพนธ์ระดับปริญญาเอก ทุนละ 40,000 บาท",
  icon: "🇹🇭",
  link: "https://mba.nida.ac.th/funding-for-the-writing-and-publication-of-a-thesis/"
},
{
  id: 325,
  name: "ทุนสนับสนุนการตีพิมพ์วิทยานิพนธ์ NIDA",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบรอบประกาศ",
  description: "ทุนสนับสนุนการจัดทำและเผยแพร่ผลงานวิทยานิพนธ์ของนักศึกษาระดับปริญญาเอก",
  icon: "📝",
  link: "https://mba.nida.ac.th/funding-for-the-writing-and-publication-of-a-thesis/"
},
{
  id: 326,
  name: "ทุนปริญญาเอกเพื่อการวิจัย คณะสถาปัตยกรรมศาสตร์และการผังเมือง มธ.",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ปีการศึกษา 2569",
  description: "ทุนปริญญาเอกเพื่อการวิจัยสำหรับนักศึกษาของคณะสถาปัตยกรรมศาสตร์และการผังเมือง มหาวิทยาลัยธรรมศาสตร์",
  icon: "🏙️",
  link: "https://grad.tds.tu.ac.th/scholarship"
},
{
  id: 327,
  name: "ทุนสนับสนุนค่าใช้จ่ายรายเดือนระดับปริญญาเอก มธ. สถาปัตย์และผังเมือง",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนค่าใช้จ่าย",
  deadline: "ปีการศึกษา 2569",
  description: "ทุนสนับสนุนค่าใช้จ่ายรายเดือนเพื่อศึกษาต่อระดับปริญญาเอกของคณะสถาปัตยกรรมศาสตร์และการผังเมือง มหาวิทยาลัยธรรมศาสตร์",
  icon: "🏙️",
  link: "https://grad.tds.tu.ac.th/scholarship"
},
{
  id: 328,
  name: "ทุนบัณฑิตศึกษาประเภท Matching มหาวิทยาลัยสงขลานครินทร์",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ภาคการศึกษา 1/2569",
  description: "ทุนบัณฑิตศึกษาประเภท Matching สำหรับนักศึกษาระดับบัณฑิตศึกษาของมหาวิทยาลัยสงขลานครินทร์",
  icon: "🤝",
  link: "https://grad.psu.ac.th/scholarship/"
},
{
  id: 329,
  name: "ทุนอุดหนุนการวิจัยเพื่อวิทยานิพนธ์ ม.อ. ด้านราชอาณาจักรบาห์เรน",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบรอบประกาศ",
  description: "ทุนอุดหนุนการวิจัยเพื่อวิทยานิพนธ์จากกองทุน His Royal Highness Prince Khalifa Bin Salman Al Khalifa สำหรับงานศึกษาที่เกี่ยวกับราชอาณาจักรบาห์เรน",
  icon: "🇧🇭",
  link: "https://grad.psu.ac.th/scholarship/"
},
{
  id: 330,
  name: "ทุนวิจัยสำหรับนักศึกษาระดับบัณฑิตศึกษา มหาวิทยาลัยธรรมศาสตร์",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบรอบประกาศ",
  description: "ทุนวิจัยทั่วไปสำหรับนักศึกษาระดับบัณฑิตศึกษาของมหาวิทยาลัยธรรมศาสตร์",
  icon: "🔬",
  link: "https://research.tu.ac.th/tu-research-funds"
},
    {
  id: 331,
  name: "ทุนรัฐบาลสำหรับบุคคลทั่วไประดับปริญญาเอก",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศ OCSC",
  description: "ทุนรัฐบาลไทยสำหรับบุคคลทั่วไปเพื่อศึกษาต่อระดับปริญญาเอกตามความต้องการของส่วนราชการหรือหน่วยงานของรัฐ",
  icon: "🇹🇭",
  link: "https://www.ocsc.go.th/scholarships/degree-scholarships/"
},
{
  id: 332,
  name: "ทุนรัฐบาล UIS ระดับปริญญาโท",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศ OCSC",
  description: "ทุนรัฐบาลเพื่อดึงดูดผู้มีศักยภาพสูงที่กำลังศึกษาในสถาบันการศึกษาในประเทศ",
  icon: "🇹🇭",
  link: "https://www.ocsc.go.th/scholarships/degree-scholarships/"
},
{
  id: 333,
  name: "DAAD Doctoral Programmes in Germany",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "30 กันยายน 2026",
  description: "ทุน DAAD สำหรับทำปริญญาเอกในเยอรมนี ทั้งโครงการวิจัยรายบุคคลและ structured doctoral programme",
  icon: "🇩🇪",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 334,
  name: "DAAD Research Grants in Germany",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนวิจัย",
  deadline: "24 กันยายน 2026",
  description: "ทุน DAAD สำหรับนักศึกษาปริญญาเอกเพื่อทำโครงการวิจัยในเยอรมนี โดยทุนวิจัยระหว่างปริญญาเอกมีระยะเวลา 2–12 เดือน",
  icon: "🔬",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 335,
  name: "DAAD Bi-nationally Supervised Doctoral Degrees / Cotutelle",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "16 พฤศจิกายน 2026",
  description: "ทุนสำหรับปริญญาเอกแบบมีการดูแลร่วมระหว่างมหาวิทยาลัยในประเทศต้นทางกับมหาวิทยาลัยในเยอรมนี รวมถึงรูปแบบ Cotutelle",
  icon: "🇩🇪",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 336,
  name: "German Academic Scholarship Foundation – Doctoral Scholarships",
  level: "ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนมูลนิธิ",
  deadline: "ตรวจสอบเงื่อนไขของมูลนิธิ",
  description: "ทุนปริญญาเอกของ German Academic Scholarship Foundation สำหรับผู้สมัครต่างชาติที่ได้รับการตอบรับเข้า doctoral programme ในเยอรมนี",
  icon: "🇩🇪",
  link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
},
{
  id: 337,
  name: "GKS Graduate Scholarship – Doctoral Degree",
  level: "ปริญญาเอก",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประกาศประจำปี",
  description: "ทุนรัฐบาลเกาหลีสำหรับนักศึกษาต่างชาติระดับปริญญาเอก ครอบคลุมค่าเล่าเรียนและสิทธิประโยชน์ตามประกาศ",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/ko/plan/scholarship.do"
},
{
  id: 338,
  name: "GKS Graduate Scholarship – Master's Degree",
  level: "ปริญญาโท",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประกาศประจำปี",
  description: "ทุนรัฐบาลเกาหลีสำหรับนักศึกษาต่างชาติระดับปริญญาโท",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/ko/plan/scholarship.do"
},
{
  id: 339,
  name: "MEXT Scholarship – Research Students",
  level: "ปริญญาเอก",
  country: "ญี่ปุ่น",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามสถานทูต/มหาวิทยาลัย",
  description: "ทุนรัฐบาลญี่ปุ่นสำหรับ Research Students ซึ่งสามารถนำไปสู่การศึกษาระดับปริญญาเอกตามเงื่อนไขของ MEXT",
  icon: "🇯🇵",
  link: "https://www.studyinjapan.go.jp/en/planning/scholarships/mext-scholarships/"
},
{
  id: 340,
  name: "Erasmus Mundus Joint Masters",
  level: "ปริญญาโท",
  country: "ยุโรป",
  type: "ทุนสหภาพยุโรป",
  deadline: "แตกต่างตามหลักสูตร",
  description: "ทุนสำหรับหลักสูตรปริญญาโทร่วม Erasmus Mundus โดยหลักสูตรและกำหนดการสมัครแตกต่างกันตาม consortium",
  icon: "🇪🇺",
  link: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
},
{
  id: 341,
  name: "Türkiye Scholarships – Graduate",
  level: "ปริญญาโท",
  country: "ตุรกี",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบประจำปี",
  description: "ทุนรัฐบาลตุรกีสำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา",
  icon: "🇹🇷",
  link: "https://www.turkiyeburslari.gov.tr/"
},
{
  id: 342,
  name: "Türkiye Scholarships – PhD",
  level: "ปริญญาเอก",
  country: "ตุรกี",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบประจำปี",
  description: "ทุนรัฐบาลตุรกีสำหรับนักศึกษาต่างชาติระดับปริญญาเอก",
  icon: "🇹🇷",
  link: "https://www.turkiyeburslari.gov.tr/"
},
{
  id: 343,
  name: "Stipendium Hungaricum – Master's",
  level: "ปริญญาโท",
  country: "ฮังการี",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบประจำปี",
  description: "ทุนรัฐบาลฮังการีสำหรับนักศึกษาต่างชาติระดับปริญญาโท",
  icon: "🇭🇺",
  link: "https://stipendiumhungaricum.hu/apply/"
},
{
  id: 344,
  name: "Stipendium Hungaricum – Doctoral",
  level: "ปริญญาเอก",
  country: "ฮังการี",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบประจำปี",
  description: "ทุนรัฐบาลฮังการีสำหรับนักศึกษาต่างชาติระดับปริญญาเอก",
  icon: "🇭🇺",
  link: "https://stipendiumhungaricum.hu/apply/"
},
{
  id: 345,
  name: "Fulbright Foreign Student Program",
  level: "ปริญญาโท",
  country: "สหรัฐอเมริกา",
  type: "ทุนรัฐบาล/องค์การระหว่างประเทศ",
  deadline: "แตกต่างตามประเทศ",
  description: "ทุน Fulbright สำหรับนักศึกษาต่างชาติไปศึกษาระดับบัณฑิตศึกษาในสหรัฐอเมริกา",
  icon: "🇺🇸",
  link: "https://foreign.fulbrightonline.org/"
},
{
  id: 346,
  name: "Fulbright Foreign Student Program – Doctoral",
  level: "ปริญญาเอก",
  country: "สหรัฐอเมริกา",
  type: "ทุนรัฐบาล/องค์การระหว่างประเทศ",
  deadline: "แตกต่างตามประเทศ",
  description: "ทุน Fulbright สำหรับผู้สมัครต่างชาติที่มีสิทธิ์ศึกษาระดับปริญญาเอกในสหรัฐอเมริกา",
  icon: "🇺🇸",
  link: "https://foreign.fulbrightonline.org/"
},
{
  id: 347,
  name: "ทุนประกายเพชร มหาวิทยาลัยกรุงเทพ ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับผู้สมัครที่มีผลการเรียนดีเยี่ยม",
  link: "https://www.bu.ac.th/th/scholarship/38"
},
{
  id: 348,
  name: "ทุน Super Tech Talent มหาวิทยาลัยกรุงเทพ ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับผู้มีความสามารถด้านเทคโนโลยีและนวัตกรรม",
  link: "https://www.bu.ac.th/th/scholarship/38"
},
{
  id: 349,
  name: "ทุน Tech Talent มหาวิทยาลัยกรุงเทพ ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักเรียนที่มีทักษะและผลงานด้านเทคโนโลยี",
  link: "https://www.bu.ac.th/th/scholarship/38"
},
{
  id: 350,
  name: "ทุนความคิดสร้างสรรค์ มหาวิทยาลัยกรุงเทพ ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับผู้มีผลงานและความคิดสร้างสรรค์โดดเด่น",
  link: "https://www.bu.ac.th/th/scholarship/38"
},
{
  id: 351,
  name: "ทุน BUDC DNA มหาวิทยาลัยกรุงเทพ ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับผู้มีความสามารถด้านภาพยนตร์ แอนิเมชัน และดนตรี",
  link: "https://www.bu.ac.th/th/scholarship/38"
},
{
  id: 352,
  name: "ทุน Super ARCH Talent มหาวิทยาลัยกรุงเทพ ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับผู้มีความสามารถด้านการออกแบบและสถาปัตยกรรม",
  link: "https://www.bu.ac.th/th/scholarship/38"
},
{
  id: 353,
  name: "ทุน ARCH Talent มหาวิทยาลัยกรุงเทพ ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับผู้มีความสามารถด้านการออกแบบ",
  link: "https://www.bu.ac.th/th/scholarship/38"
},
{
  id: 354,
  name: "ทุนความสามารถพิเศษระดับสากล มหาวิทยาลัยกรุงเทพ ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับผู้มีความสามารถด้านภาษาและความเป็นสากล",
  link: "https://www.bu.ac.th/th/scholarship/38"
},
{
  id: 355,
  name: "ทุน Global Explorer มหาวิทยาลัยกรุงเทพ ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับผู้มีความสามารถด้านภาษาและการแลกเปลี่ยนต่างประเทศ",
  link: "https://www.bu.ac.th/th/scholarship/38"
},
{
  id: 356,
  name: "ทุนผู้นำทางสังคมและสิ่งแวดล้อม มหาวิทยาลัยกรุงเทพ ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับผู้มีผลงานด้านชุมชน สังคม หรือสิ่งแวดล้อม",
  link: "https://www.bu.ac.th/th/scholarship/38"
},
{
  id: 357,
  name: "ทุนนักกีฬาดีเด่น มหาวิทยาลัยกรุงเทพ ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับผู้มีความสามารถด้านกีฬาในระดับชาติหรือนานาชาติ",
  link: "https://www.bu.ac.th/th/scholarship/38"
},
{
  id: 358,
  name: "ทุน E-sports and New Sports Talent มหาวิทยาลัยกรุงเทพ ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับผู้มีความสามารถด้าน E-sports และกีฬาแนวใหม่",
  link: "https://www.bu.ac.th/th/scholarship/38"
},
{
  id: 359,
  name: "ทุน Portfolio มหาวิทยาลัยกรุงเทพ ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับผู้มี Portfolio และความสามารถโดดเด่น",
  link: "https://www.bu.ac.th/th/scholarship/38"
},
{
  id: 360,
  name: "ทุน UTCC รัตนมงคล ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนการศึกษาของมหาวิทยาลัยหอการค้าไทย",
  link: "https://www.utcc.ac.th/utcc-scholarship-2569/"
},
{
  id: 361,
  name: "ทุน UTCC Gold ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนการศึกษาสำหรับผู้มีผลการเรียนตามเกณฑ์ที่กำหนด",
  link: "https://www.utcc.ac.th/utcc-scholarship-2569/"
},
{
  id: 362,
  name: "ทุน UTCC Silver ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนการศึกษาสำหรับผู้สมัครที่มีผลการเรียนตามเกณฑ์",
  link: "https://www.utcc.ac.th/utcc-scholarship-2569/"
},
{
  id: 363,
  name: "ทุนประกอบการภายในมหาวิทยาลัยอุบลราชธานี ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักศึกษามหาวิทยาลัยอุบลราชธานี",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 364,
  name: "ทุนส่งเสริมการเป็นผู้ประกอบการ มหาวิทยาลัยอุบลราชธานี ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนส่งเสริมศักยภาพด้านผู้ประกอบการ",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 365,
  name: "ทุนอาหารกลางวัน มหาวิทยาลัยอุบลราชธานี ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนช่วยเหลือค่าอาหารสำหรับนักศึกษาระดับปริญญาตรี",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 366,
  name: "ทุนผู้ยากจน มหาวิทยาลัยอุบลราชธานี ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักศึกษาที่มีฐานะยากจน",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 367,
  name: "ทุนมูลนิธิสมเด็จพระสังฆราชเจ้า กรมหลวงชินวราลงกรณ มหาวิทยาลัยอุบลราชธานี",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนบริจาคสำหรับนักศึกษามหาวิทยาลัยอุบลราชธานี",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 368,
  name: "ทุนมูลนิธินายห้างโรงปูนผู้หนึ่ง มหาวิทยาลัยอุบลราชธานี",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนต่อเนื่องสำหรับนักศึกษาที่มีคุณสมบัติตามประกาศ",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 369,
  name: "ทุนสมาคมตลาดตราสารหนี้ไทย (ThaiBMA) มหาวิทยาลัยอุบลราชธานี",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนการศึกษาสำหรับนักศึกษามหาวิทยาลัยอุบลราชธานี",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 370,
  name: "ทุนพ่อเคนน้อย แม่บุญ วัดพระศรีเจริญ",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักศึกษาคณะพยาบาลศาสตร์และวิทยาลัยแพทยศาสตร์และการสาธารณสุข ม.อุบลฯ",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 371,
  name: "ทุนมูลนิธินายประจักษ์ และนางสาลี่ คนตรง",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนบริจาคสำหรับนักศึกษามหาวิทยาลัยอุบลราชธานี",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 372,
  name: "ทุนคุณมรกต บูรณะชน คณะนิติศาสตร์ มหาวิทยาลัยอุบลราชธานี",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนบริจาคภายนอกสำหรับนักศึกษาคณะนิติศาสตร์",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 373,
  name: "ทุนคุณพิสิษฐ์ พงศ์วชิรภิญโญ คณะนิติศาสตร์ มหาวิทยาลัยอุบลราชธานี",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนบริจาคภายนอกสำหรับนักศึกษาคณะนิติศาสตร์",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 374,
  name: "ทุนขาดแคลนทุนทรัพย์ คณะนิติศาสตร์ มหาวิทยาลัยอุบลราชธานี",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักศึกษาคณะนิติศาสตร์ที่ขาดแคลนทุนทรัพย์",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 375,
  name: "ทุนสนับสนุนการศึกษา คณะรัฐศาสตร์ มหาวิทยาลัยอุบลราชธานี",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษาคณะรัฐศาสตร์",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 376,
  name: "ทุนอุดหนุนการศึกษาประเภท ก จุฬาลงกรณ์มหาวิทยาลัย",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนค่าเล่าเรียนและค่าใช้จ่ายรายเดือนสำหรับนิสิตจุฬาฯ",
  link: "https://www.sa.chula.ac.th/fund/scholarship/"
},
{
  id: 377,
  name: "ทุนอุดหนุนการศึกษาประเภท ข(1) จุฬาลงกรณ์มหาวิทยาลัย",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสนับสนุนค่าเล่าเรียนสำหรับนิสิตจุฬาฯ",
  link: "https://www.sa.chula.ac.th/fund/scholarship/"
},
{
  id: 378,
  name: "ทุนอุดหนุนการศึกษาประเภท ข(2) จุฬาลงกรณ์มหาวิทยาลัย",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนช่วยเหลือค่าใช้จ่ายรายเดือนสำหรับนิสิตจุฬาฯ",
  link: "https://www.sa.chula.ac.th/fund/scholarship/"
},
{
  id: 379,
  name: "ทุนเรียนดีระดับปริญญาตรี มหาวิทยาลัยธรรมศาสตร์",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสนับสนุนการศึกษาเฉพาะค่าหน่วยกิต",
  link: "https://tds.tu.ac.th/student"
},
{
  id: 380,
  name: "ทุนสนับสนุนเศรษฐกิจระดับปริญญาตรี มหาวิทยาลัยธรรมศาสตร์",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสนับสนุนการศึกษาเฉพาะค่าหน่วยกิตสำหรับผู้มีข้อจำกัดด้านเศรษฐกิจ",
  link: "https://tds.tu.ac.th/student"
},
{
  id: 381,
  name: "ทุนขาดแคลนทุนทรัพย์ คณะเศรษฐศาสตร์ มหาวิทยาลัยธรรมศาสตร์",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักศึกษาคณะเศรษฐศาสตร์ที่ขาดแคลนทุนทรัพย์",
  link: "https://grants.econ.tu.ac.th/"
},
{
  id: 382,
  name: "ทุนรอบนักศึกษาชั้นปีที่ 1 คณะเศรษฐศาสตร์ มหาวิทยาลัยธรรมศาสตร์",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนประเภทขาดแคลนทุนทรัพย์สำหรับนักศึกษาชั้นปีที่ 1",
  link: "https://grants.econ.tu.ac.th/"
},
{
  id: 383,
  name: "ทุนการศึกษาเตรียมความพร้อมเป็นนักศึกษามหาวิทยาลัยเชียงใหม่",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนจากคณะกรรมการส่งเสริมมหาวิทยาลัยเชียงใหม่",
  link: "https://www.cmu.ac.th/th/article/634a73e2-9ea1-4d08-ad0a-e6e15c191739"
},
{
  id: 384,
  name: "ทุน Teaching Assistant คณะเศรษฐศาสตร์ มหาวิทยาลัยเชียงใหม่",
  country: "ไทย",
  level: "ปริญญาตรี/บัณฑิตศึกษา",
  type: "ทุนไทย",
  description: "ทุนปฏิบัติงานผู้ช่วยงานอาจารย์ผู้สอน",
  link: "https://www.econ.cmu.ac.th/th/all-news/scholarships"
},
{
  id: 385,
  name: "Mitsubishi UFJ Foundation Scholarship 2026 มหาวิทยาลัยเชียงใหม่",
  country: "ไทย",
  level: "ปริญญาตรี/บัณฑิตศึกษา",
  type: "ทุนไทย",
  description: "ทุนการศึกษาจาก Mitsubishi UFJ Foundation",
  link: "https://www.econ.cmu.ac.th/th/all-news/scholarships"
},
{
  id: 386,
  name: "KBank Scholarship 2026 มหาวิทยาลัยเชียงใหม่",
  country: "ไทย",
  level: "ปริญญาตรี/บัณฑิตศึกษา",
  type: "ทุนไทย",
  description: "ทุนการศึกษาจาก KBank",
  link: "https://www.econ.cmu.ac.th/th/all-news/scholarships"
},
{
  id: 387,
  name: "ทุนรัฐบาลสาธารณรัฐอาเซอร์ไบจาน มหาวิทยาลัยเชียงใหม่",
  country: "ไทย",
  level: "ปริญญาตรี/บัณฑิตศึกษา",
  type: "ทุนไทย",
  description: "ทุนที่ประกาศผ่านคณะเศรษฐศาสตร์ มหาวิทยาลัยเชียงใหม่",
  link: "https://www.econ.cmu.ac.th/th/all-news/scholarships"
},
{
  id: 388,
  name: "Canada ASEAN Scholarships and Educational Exchanges for Development",
  country: "ไทย",
  level: "บัณฑิตศึกษา",
  type: "ทุนไทย",
  description: "โครงการทุนที่ประกาศผ่านมหาวิทยาลัยเชียงใหม่",
  link: "https://www.econ.cmu.ac.th/th/all-news/scholarships"
},
{
  id: 389,
  name: "ทุนบัณฑิตศึกษาสงขลานครินทร์",
  country: "ไทย",
  level: "ปริญญาโท/ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนบัณฑิตศึกษาของมหาวิทยาลัยสงขลานครินทร์",
  link: "https://grad.psu.ac.th/scholarship/"
},
{
  id: 390,
  name: "ทุนผู้ช่วยสอน มหาวิทยาลัยสงขลานครินทร์",
  country: "ไทย",
  level: "ปริญญาโท/ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักศึกษาบัณฑิตศึกษาที่ปฏิบัติงานผู้ช่วยสอน",
  link: "https://grad.psu.ac.th/scholarship/"
},
{
  id: 391,
  name: "ทุนสนับสนุนรางวัลผลงานวิจัยสำหรับนักศึกษาระดับบัณฑิตศึกษา ม.อ.",
  country: "ไทย",
  level: "ปริญญาโท/ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนสนับสนุนรางวัลผลงานวิจัยสำหรับนักศึกษาบัณฑิตศึกษา",
  link: "https://grad.psu.ac.th/scholarship/"
},
{
  id: 392,
  name: "ทุนอุดหนุนการวิจัยเพื่อวิทยานิพนธ์หัวข้อการแก้ไขปัญหาของชุมชน ม.อ.",
  country: "ไทย",
  level: "ปริญญาโท/ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนวิจัยวิทยานิพนธ์ด้านการแก้ไขปัญหาของชุมชน",
  link: "https://grad.psu.ac.th/scholarship/"
},
{
  id: 393,
  name: "ทุนพัฒนาบุคลากรสายวิชาการเพื่อศึกษาต่อระดับปริญญาเอก ม.อ.",
  country: "ไทย",
  level: "ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนพัฒนาบุคลากรสายวิชาการเพื่อศึกษาต่อระดับปริญญาเอก",
  link: "https://grad.psu.ac.th/scholarship/"
},
{
  id: 394,
  name: "ทุน Matching บัณฑิตศึกษาสงขลานครินทร์",
  country: "ไทย",
  level: "ปริญญาโท/ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนบัณฑิตศึกษาแบบ Matching ของมหาวิทยาลัยสงขลานครินทร์",
  link: "https://grad.psu.ac.th/scholarship/"
},
{
  id: 395,
  name: "ทุนการศึกษาสำหรับนิสิตคณะสังคมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนขาดแคลนทุนทรัพย์สำหรับนิสิตคณะสังคมศาสตร์",
  link: "https://soc.swu.ac.th/news/y5xhwf7rnw7"
},
{
  id: 396,
  name: "ทุนบุญรอดพัฒนา นิสิต นักศึกษา ประจำปี 2569 มหาวิทยาลัยแม่โจ้",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักเรียน นิสิต นักศึกษาที่มีผลการเรียนและความประพฤติดี",
  link: "https://mjutoday.mju.ac.th/newsall/"
},
    {
  id: 397,
  name: "ทุนน้องใหม่ลูกพระจอม ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษาใหม่ สจล.",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 398,
  name: "ทุนขาดแคลนทุนทรัพย์ คณะศิลปศาสตร์ สจล. ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักศึกษาคณะศิลปศาสตร์ที่ขาดแคลนทุนทรัพย์",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 399,
  name: "ทุนอุดหนุนการศึกษาประเภท ข สจล. ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนอุดหนุนการศึกษาสำหรับนักศึกษาชั้นปีที่ 2 ขึ้นไป",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 400,
  name: "ทุนผู้ทำคุณประโยชน์ให้แก่สถาบัน สจล.",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักศึกษาที่ทำคุณประโยชน์ให้แก่สถาบัน",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 401,
  name: "ทุนการศึกษามูลนิธิป่อเต็กตึ๊งสำหรับนักศึกษาชั้นปีสุดท้าย สจล.",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนจากมูลนิธิป่อเต็กตึ๊งสำหรับนักศึกษาชั้นปีสุดท้าย",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 402,
  name: "ทุนเรียนดี แต่ขาดแคลนทุนทรัพย์ มหาวิทยาลัยหาดใหญ่",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักศึกษาใหม่ที่มีผลการเรียนดีและขาดแคลนทุนทรัพย์",
  link: "https://loan.hu.ac.th/"
},
{
  id: 403,
  name: "ทุนสำหรับนักศึกษาใหม่ระดับปริญญาโท มหาวิทยาลัยหาดใหญ่",
  country: "ไทย",
  level: "ปริญญาโท",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักศึกษาใหม่ระดับปริญญาโท ปีการศึกษา 2569",
  link: "https://loan.hu.ac.th/"
},
{
  id: 404,
  name: "ทุนท่านอาจารย์ประดิษฐ์ ดิษยะศริน มหาวิทยาลัยหาดใหญ่",
  country: "ไทย",
  level: "ปริญญาตรี/บัณฑิตศึกษา",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักศึกษาปัจจุบันตามประกาศของมหาวิทยาลัย",
  link: "https://loan.hu.ac.th/"
},
{
  id: 405,
  name: "ทุนการศึกษา บัณฑิตวิทยาลัย มหาวิทยาลัยมหิดล ปีการศึกษา 2569",
  country: "ไทย",
  level: "ปริญญาโท/ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักศึกษาระดับบัณฑิตศึกษาของมหาวิทยาลัยมหิดล",
  link: "https://graduate.mahidol.ac.th/thai/prospective-students/?p=scholarship"
},
{
  id: 406,
  name: "ทุนช่วยเหลือนักศึกษาพิการระดับบัณฑิตศึกษา มหาวิทยาลัยมหิดล ปี 2569",
  country: "ไทย",
  level: "ปริญญาโท/ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนช่วยเหลือนักศึกษาพิการระดับบัณฑิตศึกษา",
  link: "https://graduate.mahidol.ac.th/thai/prospective-students/?p=scholarship"
},
{
  id: 407,
  name: "ทุนการศึกษานักศึกษาระดับบัณฑิตศึกษา ประเภทนักศึกษาผู้ทำกิจกรรม มหิดล ปี 2569",
  country: "ไทย",
  level: "ปริญญาโท/ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักศึกษาบัณฑิตศึกษาที่มีความสามารถด้านกิจกรรม",
  link: "https://graduate.mahidol.ac.th/thai/prospective-students/?p=scholarship"
},
{
  id: 408,
  name: "ทุนอุดหนุนการพัฒนานักศึกษาระดับปริญญาโท-เอก ไปเสนอผลงานวิชาการต่างประเทศ มหิดล",
  country: "ไทย",
  level: "ปริญญาโท/ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนสนับสนุนการนำเสนอผลงานทางวิชาการในต่างประเทศ",
  link: "https://graduate.mahidol.ac.th/thai/staff/?p=scholarship&t=20"
},
{
  id: 409,
  name: "ทุนเรียนดีระดับปริญญาโท ค่าธรรมเนียม คณะสถาปัตยกรรมศาสตร์และการผังเมือง มธ.",
  country: "ไทย",
  level: "ปริญญาโท",
  type: "ทุนไทย",
  description: "ทุนเรียนดีประเภททุนค่าธรรมเนียม ปีการศึกษา 2569",
  link: "https://grad.tds.tu.ac.th/scholarship"
},
{
  id: 410,
  name: "ทุนเรียนดีระดับปริญญาโทเต็มจำนวน คณะสถาปัตยกรรมศาสตร์และการผังเมือง มธ.",
  country: "ไทย",
  level: "ปริญญาโท",
  type: "ทุนไทย",
  description: "ทุนเรียนดีระดับปริญญาโทประเภททุนเต็มจำนวน",
  link: "https://grad.tds.tu.ac.th/scholarship"
},
{
  id: 411,
  name: "ทุนสนับสนุนค่าใช้จ่ายรายเดือนเพื่อศึกษาต่อระดับปริญญาเอก มธ.",
  country: "ไทย",
  level: "ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนสนับสนุนค่าใช้จ่ายรายเดือนสำหรับนักศึกษาปริญญาเอก",
  link: "https://grad.tds.tu.ac.th/scholarship"
},
{
  id: 412,
  name: "ทุน SPU SPARK Scholarship ปริญญาโท",
  country: "ไทย",
  level: "ปริญญาโท",
  type: "ทุนไทย",
  description: "ทุนสนับสนุนการศึกษาระดับปริญญาโท มหาวิทยาลัยศรีปทุม",
  link: "https://www.spu.ac.th/spu-spark-scholarship/"
},
{
  id: 413,
  name: "ทุน SPU SPARK Scholarship คณะนิติศาสตร์ ปริญญาโท",
  country: "ไทย",
  level: "ปริญญาโท",
  type: "ทุนไทย",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษาปริญญาโทคณะนิติศาสตร์",
  link: "https://www.spu.ac.th/spu-spark-scholarship/"
},
{
  id: 414,
  name: "ทุน MOU Scholarship มหาวิทยาลัยศรีปทุม",
  country: "ไทย",
  level: "ปริญญาโท",
  type: "ทุนไทย",
  description: "ทุนจากหน่วยงานที่มีความร่วมมือกับมหาวิทยาลัยศรีปทุม",
  link: "https://www.spu.ac.th/mou-scholarship/"
},
{
  id: 415,
  name: "ทุนการศึกษานักกิจกรรม มหาวิทยาลัยศรีปทุม",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักศึกษาที่มีผลงานด้านกิจกรรม",
  link: "https://www.spu.ac.th/scholarship2569/"
},
{
  id: 416,
  name: "ทุนเรียนดี Gifted มหาวิทยาลัยศรีปทุม",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนดี",
  link: "https://www.spu.ac.th/scholarship2569/"
},
{
  id: 417,
  name: "ทุน ดร.สุข – ดร.มาลินี พุคยาภรณ์ มหาวิทยาลัยศรีปทุม",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนการศึกษาสำหรับนักศึกษามหาวิทยาลัยศรีปทุม",
  link: "https://www.spu.ac.th/scholarship2569/"
},
{
  id: 418,
  name: "ทุน DEK69 มหาวิทยาลัยศรีปทุม",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนการศึกษาสำหรับผู้สมัครเข้าเรียนปีการศึกษา 2569",
  link: "https://www.spu.ac.th/scholarship2569/"
},
{
  id: 419,
  name: "ทุนการศึกษาคณะเศรษฐศาสตร์ มหาวิทยาลัยเชียงใหม่",
  country: "ไทย",
  level: "ปริญญาตรี",
  type: "ทุนไทย",
  description: "ทุนการศึกษาที่ประกาศสำหรับนักศึกษาคณะเศรษฐศาสตร์ มช.",
  link: "https://www.econ.cmu.ac.th/th/all-news/scholarships"
},
{
  id: 420,
  name: "ทุน Teaching Assistant คณะเศรษฐศาสตร์ มหาวิทยาลัยเชียงใหม่",
  country: "ไทย",
  level: "ปริญญาตรี/บัณฑิตศึกษา",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักศึกษาที่ทำหน้าที่ผู้ช่วยสอน",
  link: "https://www.econ.cmu.ac.th/th/all-news/scholarships"
},
{
  id: 421,
  name: "Mitsubishi UFJ Foundation Scholarship มหาวิทยาลัยเชียงใหม่",
  country: "ไทย",
  level: "ปริญญาตรี/บัณฑิตศึกษา",
  type: "ทุนไทย",
  description: "ทุนการศึกษาจาก Mitsubishi UFJ Foundation ที่ประกาศผ่านมหาวิทยาลัยเชียงใหม่",
  link: "https://www.econ.cmu.ac.th/th/all-news/scholarships"
},
{
  id: 422,
  name: "KBank Scholarship มหาวิทยาลัยเชียงใหม่",
  country: "ไทย",
  level: "ปริญญาตรี/บัณฑิตศึกษา",
  type: "ทุนไทย",
  description: "ทุนการศึกษาจาก KBank ที่ประกาศผ่านมหาวิทยาลัยเชียงใหม่",
  link: "https://www.econ.cmu.ac.th/th/all-news/scholarships"
},
{
  id: 423,
  name: "ทุนการศึกษาระดับบัณฑิตศึกษา มหาวิทยาลัยสงขลานครินทร์",
  country: "ไทย",
  level: "ปริญญาโท/ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนสนับสนุนนักศึกษาระดับบัณฑิตศึกษาของ ม.อ.",
  link: "https://grad.psu.ac.th/scholarship/"
},
{
  id: 424,
  name: "ทุนผู้ช่วยสอน มหาวิทยาลัยสงขลานครินทร์",
  country: "ไทย",
  level: "ปริญญาโท/ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนสำหรับนักศึกษาบัณฑิตศึกษาที่ทำหน้าที่ผู้ช่วยสอน",
  link: "https://grad.psu.ac.th/scholarship/"
},
{
  id: 425,
  name: "ทุนสนับสนุนรางวัลผลงานวิจัย นักศึกษาบัณฑิตศึกษา ม.อ.",
  country: "ไทย",
  level: "ปริญญาโท/ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนสนับสนุนรางวัลสำหรับผลงานวิจัยของนักศึกษาบัณฑิตศึกษา",
  link: "https://grad.psu.ac.th/scholarship/"
},
{
  id: 426,
  name: "ทุนวิจัยวิทยานิพนธ์เพื่อแก้ไขปัญหาชุมชน ม.อ.",
  country: "ไทย",
  level: "ปริญญาโท/ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนสนับสนุนงานวิจัยวิทยานิพนธ์ที่เกี่ยวข้องกับปัญหาชุมชน",
  link: "https://grad.psu.ac.th/scholarship/"
},
{
  id: 427,
  name: "ทุนพัฒนาบุคลากรสายวิชาการเพื่อศึกษาต่อปริญญาเอก ม.อ.",
  country: "ไทย",
  level: "ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนพัฒนาบุคลากรสายวิชาการเพื่อศึกษาต่อระดับปริญญาเอก",
  link: "https://grad.psu.ac.th/scholarship/"
},
{
  id: 428,
  name: "ทุน Matching บัณฑิตศึกษาสงขลานครินทร์",
  country: "ไทย",
  level: "ปริญญาโท/ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนบัณฑิตศึกษาในระบบ Matching ของมหาวิทยาลัยสงขลานครินทร์",
  link: "https://grad.psu.ac.th/scholarship/"
},
{
  id: 429,
  name: "ทุนสนับสนุนการศึกษาระดับบัณฑิตศึกษา มหาวิทยาลัยมหิดล",
  country: "ไทย",
  level: "ปริญญาโท/ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนสนับสนุนการศึกษาระดับบัณฑิตศึกษาจากบัณฑิตวิทยาลัยมหิดล",
  link: "https://graduate.mahidol.ac.th/thai/prospective-students/?p=scholarship"
},
{
  id: 430,
  name: "ทุนสนับสนุนการทำวิจัยระดับบัณฑิตศึกษา มหาวิทยาลัยมหิดล",
  country: "ไทย",
  level: "ปริญญาโท/ปริญญาเอก",
  type: "ทุนไทย",
  description: "ทุนและการสนับสนุนด้านการวิจัยสำหรับนักศึกษาบัณฑิตศึกษา",
  link: "https://graduate.mahidol.ac.th/"
},
  // ถ้ามีรายการต่อจากนี้ ให้ใส่ comma หลัง object สุดท้าย
]; 

  // ==============================
  // ดึง Element จาก HTML
  // ==============================

  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const scholarshipsContainer = document.getElementById("scholarships");
  const noResult = document.getElementById("noResult");
  const resultCount = document.getElementById("resultCount");

  const modal = document.getElementById("detailModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalCountry = document.getElementById("modalCountry");
  const modalText = document.getElementById("modalText");
  const modalLevel = document.getElementById("modalLevel");
  const modalType = document.getElementById("modalType");
  const modalDeadline = document.getElementById("modalDeadline");
  const modalIcon = document.getElementById("modalIcon");
  const closeModal = document.getElementById("closeModal");
  const modalAction = document.getElementById("modalAction");

  const categoryButtons =
    document.querySelectorAll(".category-card");


  // ==============================
  // ตรวจสอบ Element
  // ==============================

  if (!searchInput ||
      !searchButton ||
      !scholarshipsContainer ||
      !noResult ||
      !modal ||
      !closeModal) {

    console.error(
      "เกิดข้อผิดพลาด: ไม่พบ Element ที่จำเป็นใน index.html"
    );

    return;
  }


  // ==============================
  // ตัวแปรระบบ
  // ==============================

  let currentCategory = "ทั้งหมด";


  // ==============================
  // แสดงทุน
  // ==============================

  function renderScholarships(list) {

    scholarshipsContainer.innerHTML = "";

    if (list.length === 0) {

      noResult.classList.remove("hidden");

      if (resultCount) {
        resultCount.textContent = "พบ 0 รายการ";
      }

      return;
    }

    noResult.classList.add("hidden");

    if (resultCount) {
      resultCount.textContent =
        `พบ ${list.length} รายการ`;
    }


    list.forEach(function (scholarship) {

      const card = document.createElement("article");

      card.className = "scholarship-card";

      card.innerHTML = `
        <div class="card-icon">
          ${scholarship.icon}
        </div>

        <h3>${scholarship.name}</h3>

        <p class="country">
          📍 ${scholarship.country}
        </p>

        <div class="tags">
          <span class="tag">
            ${scholarship.level}
          </span>

          <span class="tag">
            ${scholarship.type}
          </span>
        </div>

        <p class="deadline">
          📅 ${scholarship.deadline}
        </p>

        <button
          class="detail-button"
          type="button"
          data-id="${scholarship.id}"
        >
          ดูรายละเอียด
        </button>
      `;

      scholarshipsContainer.appendChild(card);
    });


    // ปุ่มรายละเอียด

    const detailButtons =
      document.querySelectorAll(".detail-button");

    detailButtons.forEach(function (button) {

      button.addEventListener("click", function () {

        const id = Number(button.dataset.id);

        openModal(id);

      });

    });

  }


  // ==============================
  // ค้นหา
  // ==============================

  function searchScholarship() {

    const keyword =
      searchInput.value.trim().toLowerCase();


    const filtered =
      scholarships.filter(function (scholarship) {

        const matchesKeyword =
          scholarship.name.toLowerCase().includes(keyword) ||
          scholarship.country.toLowerCase().includes(keyword) ||
          scholarship.level.toLowerCase().includes(keyword) ||
          scholarship.type.toLowerCase().includes(keyword) ||
          scholarship.description.toLowerCase().includes(keyword);


        const matchesCategory =
          currentCategory === "ทั้งหมด" ||
          scholarship.level === currentCategory;


        return matchesKeyword && matchesCategory;

      });


    renderScholarships(filtered);

  }


  // ==============================
  // ปุ่มค้นหา
  // ==============================

  searchButton.addEventListener(
    "click",
    searchScholarship
  );


  // ==============================
  // กด Enter เพื่อค้นหา
  // ==============================

  searchInput.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Enter") {
        searchScholarship();
      }

    }
  );


  // ==============================
  // หมวดหมู่
  // ==============================

  categoryButtons.forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        categoryButtons.forEach(function (item) {
          item.classList.remove("active");
        });

        button.classList.add("active");

        currentCategory =
          button.dataset.category;

        searchScholarship();

      }
    );

  });


  // ==============================
  // เปิด Modal
  // ==============================

  function openModal(id) {

    const scholarship =
      scholarships.find(function (item) {
        return item.id === id;
      });


    if (!scholarship) {
      return;
    }


    modalIcon.textContent =
      scholarship.icon;

    modalTitle.textContent =
      scholarship.name;

    modalCountry.textContent =
      `📍 ${scholarship.country}`;

    modalText.textContent =
      scholarship.description;

    modalLevel.textContent =
      scholarship.level;

    modalType.textContent =
      scholarship.type;

    modalDeadline.textContent =
      scholarship.deadline;

    modalAction.href =
      scholarship.link;


    modal.classList.add("show");

    document.body.style.overflow = "hidden";

  }


  // ==============================
  // ปิด Modal
  // ==============================

  function closeModalFunction() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

  }


  closeModal.addEventListener(
    "click",
    closeModalFunction
  );


  // คลิกพื้นที่ด้านนอก Modal

  modal.addEventListener(
    "click",
    function (event) {

      if (event.target === modal) {
        closeModalFunction();
      }

    }
  );


  // กด ESC เพื่อปิด

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape" &&
        modal.classList.contains("show")
      ) {

        closeModalFunction();

      }

    }
  );


  // ==============================
  // เริ่มต้นเว็บไซต์
  // ==============================

  renderScholarships(scholarships);

});
