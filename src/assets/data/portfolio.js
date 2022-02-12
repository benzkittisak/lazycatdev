const PORTFOLIO_DATA = [
  {
    id: 1,
    title: "เว็บไซต์โรงเรียนสิชลคุณาธารวิทยา",
    desc: "ได้รับงานในการพัฒนาเว็บไซต์ของโรงเรียนสิชลคุณาธารวิทยา โดยในครั้งนั้นได้รับค่าจ้างประมาณ 10,000 บาทในการออกแบบและพัฒนา ซึ่งในปัจจุบันทางโรงเรียนได้ทำการขอเปลี่ยนรูปแบบของเว็บไซต์มาเป็นภาพที่แนบไว้เรียบร้อยแล้ว ทำให้ไม่มีรูปของเว็บไซต์ที่ใช้ก่อนหน้ามาให้รับชม",
    images: "https://i3.fpic.cc/file/img-b1/2022/02/12/Screen-Shot-2565-02-12-at-21.39.09.md.png",
    link_url: "http://www.stv.ac.th",
    github: "",
  },
  {
      id:2,
      title:'เว็บไซต์โรงเรียนถนอมศรีศึกษา',
      desc:'ได้รับงานในการพัฒนาเว็บไซต์ของโรงเรียนถนอมศรีศึกษาา ซึ่งได้รับการติดต่อจากทางเพื่อนของครูที่โรงเรียนสิชลคุณาธารวิทยาให้มาออกแบบและพัฒนาเว็บไซต์ให้ในราคา 6,500 บาทปัจจุบันทางโรงเรียนยังคงใช้รูปแบบของเว็บไซต์เดิมที่ออกแบบให้อยู่ แต่เว็บไซต์ยังไม่สมบูรณ์เนื่องจากเหตุผลบางประการของทางผู้ว่าจ้าง',
      images:"https://i3.fpic.cc/file/img-b1/2022/02/12/Screen-Shot-2565-02-12-at-21.45.16.md.png",
      link_url:'https://www.thanomsri.ac.th',
      github:''
  },
  {
    id: 3,
    title: "เว็บไซต์ร้านขายต้นไม้ V1",
    desc: "เว็บไซต์สร้างขึ้นมาเพื่อทบการใช้ React เพราะว่าไม่ได้ใช้นานมากแล้ว เลยอยากจะรื้อฟื้นและอยากทำร้านอะไรสักอย่างก็เลยสร้างเป็นร้านขายต้นไม้",
    images: "https://i3.fpic.cc/file/img-b1/2022/02/12/Screen-Shot-2565-02-12-at-21.56.22.md.png",
    link_url: "http://bbgun-plant-ecom.herokuapp.com",
    github: "https://github.com/benzkittisak/plant-ecomc.git",
  },
  {
    id: 4,
    title: "เว็บไซต์ร้านขายต้นไม้ V2",
    desc: "เว็บไซต์สร้างขึ้นมาเพื่อทบการใช้ React เพราะว่าไม่ได้ใช้นานมากแล้ว เลยอยากจะรื้อฟื้นและอยากทำร้านอะไรสักอย่างก็เลยสร้างเป็นร้านขายต้นไม้",
    images: "https://i3.fpic.cc/file/img-b1/2022/02/12/Screen-Shot-2565-02-12-at-21.49.58.md.png",
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
    desc: "เว็บไซต์มีที่มาจากการที่ทางสาขามีวิชาบริหารโครงการเทคโนโลยี และอาจารย์ต้องการให้นักศึกษาคิดโปรเจ็คที่อยากทำมาคนละอย่างเพื่อสอนเพื่อน ๆและคนที่สนใจ เลยคิดว่าไหน ๆ เพื่อน ๆ ก็ต้องไปฝึกงานกันถ้างั้นก้สอนเพื่อนทำเว็บ portfolio แบบง่าย ๆ ไปเลย",
    images: "https://i3.fpic.cc/file/img-b1/2022/02/12/Screen-Shot-2565-02-12-at-21.59.25.md.png",
    link_url: "https://nammon-portfolio-demo.herokuapp.com",
    github: "https://github.com/benzkittisak/portfolio_test_2.git",
  },
  {
    id: 7,
    title: "Portfolio ของตัวเอง",
    desc: "เว็บนี้มาจากที่ตัวเองอยากทำเว็บ Portfolio เป็นของตัวเองสักเว็บหนึ่ง และผมก็ใช้ระบบ macOS มานานมากแล้วเลยอยากทำหน้าตาของเว็บให้มันดูเก่า ๆ ผลที่ได้ก็อย่างที่ทุกท่านเห็นอยู่นี่แหละครับผม",
    images: "https://i3.fpic.cc/file/img-b1/2022/02/12/Screen-Shot-2565-02-12-at-22.03.24.md.png",
    link_url: "https://bbgun-portfolio.herokuapp.com",
    github: "https://github.com/benzkittisak/lazycatdev.git",
  },
];

export default PORTFOLIO_DATA;