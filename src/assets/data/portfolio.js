const PORTFOLIO_DATA = [
  {
    id: 1,
    title: "เว็บไซต์โรงเรียนสิชลคุณาธารวิทยา",
    desc: "ได้รับงานในการพัฒนาเว็บไซต์ของโรงเรียนสิชลคุณาธารวิทยา โดยในครั้งนั้นได้รับค่าจ้างประมาณ 10,000 บาทในการออกแบบและพัฒนา ซึ่งในปัจจุบันทางโรงเรียนได้ทำการขอเปลี่ยนรูปแบบของเว็บไซต์มาเป็นแบบภาพที่แนบไว้เรียบร้อยแล้ว ทำให้ไม่มีรูปของเว็บไซต์ที่ใช้ก่อนหน้ามาให้รับชม",
    images: "https://cdn.discordapp.com/attachments/966965279466864664/976432246712070195/Screen_Shot_2565-05-18_at_17.32.58.png",
    link_url: "http://www.stv.ac.th",
    github: "",
  },
  {
      id:2,
      title:'เว็บไซต์โรงเรียนถนอมศรีศึกษา',
      desc:'ได้รับงานในการพัฒนาเว็บไซต์ของโรงเรียนถนอมศรีศึกษาา ซึ่งได้รับการติดต่อจากทางเพื่อนของครูที่โรงเรียนสิชลคุณาธารวิทยาให้มาออกแบบและพัฒนาเว็บไซต์ให้ในราคา 6,500 บาทปัจจุบันทางโรงเรียนยังคงใช้รูปแบบของเว็บไซต์เดิมที่ออกแบบให้อยู่ แต่เว็บไซต์ยังไม่สมบูรณ์เนื่องจากเหตุผลบางประการของทางผู้ว่าจ้าง',
      images:"https://cdn.discordapp.com/attachments/966965279466864664/976436209314316318/Screen_Shot_2565-05-18_at_17.48.42.png",
      link_url:'https://www.thanomsri.ac.th',
      github:''
  },
  {
    id: 3,
    title: "เว็บไซต์ร้านขายต้นไม้ V1",
    desc: "เว็บไซต์สร้างขึ้นมาเพื่อทบทวนการใช้ React เพราะว่าไม่ได้ใช้นานมากแล้ว เลยอยากจะรื้อฟื้นและอยากทำร้านอะไรสักอย่างก็เลยสร้างเป็นร้านขายต้นไม้",
    images: "https://cdn.discordapp.com/attachments/966965279466864664/976436776002551848/Screen_Shot_2565-05-18_at_17.51.00.png",
    link_url: "http://bbgun-plant-ecom.herokuapp.com",
    github: "https://github.com/benzkittisak/plant-ecomc.git",
  },
  {
    id: 4,
    title: "เว็บไซต์ร้านขายต้นไม้ V2",
    desc: "เป็นการนำเอาร้านขายต้นไม้มาออกแบบและสร้างขึ้นมาใหม่ ในรูปแบบที่ตัวเองชอบ",
    images: "https://cdn.discordapp.com/attachments/966965279466864664/976437160754446376/Screen_Shot_2565-05-18_at_17.52.24.png",
    link_url: "http://bbgun-plant-ecom-2.herokuapp.com",
    github: "https://github.com/benzkittisak/bakshop-ecom.git",
  },
  {
    id: 5,
    title: "เว็บไซต์หาที่เที่ยว",
    desc: "ด้วยความที่เบื่อการสร้างเว็บไซต์ที่เป็นร้านค้า เลยอยากทำอะไรที่แปลกใหม่สำหรับตัวเองบ้างและด้วยความที่ตัวเองไม่ได้ออกไปเที่ยวที่ไหนเลย เลยคิดว่าทำเว็บหาที่เที่ยวคงจะดีเลยเป็นที่มาของเว็บไซต์นี้",
    images: "https://i3.fpic.cc/file/img-b1/2022/02/12/Screen-Shot-2565-02-12-at-21.53.14.md.png",
    link_url: "https://bbgun-travel.herokuapp.com",
    github: "https://github.com/benzkittisak/tracos.git",
  },
  {
    id: 6,
    title: "Portfolio สอนเพื่อน",
    desc: "เว็บไซต์มีที่มาจากการที่ทางสาขามีวิชาบริหารโครงการเทคโนโลยี และอาจารย์ต้องการให้นักศึกษาคิดโปรเจ็คที่อยากทำมากลุ่มละอย่างเพื่อสอนเพื่อน ๆและคนที่สนใจ เลยคิดว่าไหน ๆ เพื่อน ๆ ก็ต้องไปฝึกงานกันถ้างั้นก้สอนเพื่อนทำเว็บ portfolio แบบง่าย ๆ ไปเลย",
    images: "https://i3.fpic.cc/file/img-b1/2022/02/12/Screen-Shot-2565-02-12-at-21.59.25.md.png",
    link_url: "https://nammon-portfolio-demo.herokuapp.com",
    github: "https://github.com/benzkittisak/portfolio_test_2.git",
  },
  {
    id: 7,
    title: "Portfolio ของตัวเอง",
    desc: "เว็บนี้มาจากที่ตัวเองอยากทำเว็บ Portfolio เป็นของตัวเองสักเว็บหนึ่ง และผมก็ใช้ระบบ macOS มานานมากแล้วเลยอยากทำหน้าตาของเว็บให้มันดูเก่า ๆ ผลที่ได้ก็อย่างที่ทุกท่านเห็นอยู่นี่แหละครับผม",
    images: "https://cdn.discordapp.com/attachments/966965279466864664/976438782201069598/Screen_Shot_2565-05-18_at_17.58.57.png",
    link_url: "https://bbgun-portfolio.herokuapp.com",
    github: "https://github.com/benzkittisak/lazycatdev.git",
  },
  {
    id: 8,
    title: "Vue Project",
    desc: "เว็บนี้เป็นโปรเจคของวิชา Javascript โดยที่อาจารย์ให้ใช้ VueJS กับ MongoDB ในการทำเป็นเว็บไซต์ที่พัฒนาเป็น Fullstack โดยที่ใช้ภาษา JavaScript ในการเขียน มีระบบของ Admin ด้วยแต่ว่าไม่ได้แคปหน้าจอมาให้ดูครับ",
    images: "https://i3.fpic.cc/file/img-b1/2022/02/26/Screen-Shot-2565-02-26-at-11.28.03.md.png",
    link_url: "",
    github: "https://github.com/dictionarygroup1/project.git",
  },
  // 
];

export default PORTFOLIO_DATA;