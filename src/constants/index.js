import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import port05 from "../assets/img/port05.jpg";
import port06 from "../assets/img/port06.jpg";
import port07 from "../assets/img/port07.jpg";
import port08 from "../assets/img/port08.jpg";
import port09 from "../assets/img/port09.jpg";
import port10 from "../assets/img/port10.jpg";

export const headerNav = [
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "vision",
        url: "#vision"
    },
    {
        title: "services",
        url: "#services"
    },
    // {
    //     title: "portfolio",
    //     url: "#port"
    // },
    {
        title: "contact",
        url: "#contact"
    }
];

export const introText = {
    title: "Median Naranja",
    desc: [
        "AI기반의 삶의 동반자",
        "삶을 편리하고 풍요롭게 만듭니다."
    ]
}


export const skillText = [
    {
        title: "메디아나랑하의 비전",
        desc: "메디아나랑하는 '반쪽 오렌지'라는 뜻의 스페인어로, 삶의 동반자를 의미합니다. AI가 내 삶의 동반자로 도움을 준다는 의미를 가지고 있습니다. 우리는 AI 기술을 통해 사람들의 삶을 더욱 편리하고 풍요롭게 만드는 것을 목표로 하고 있습니다. 기술의 발전을 통해 더 많은 사람들이 혜택을 받을 수 있도록 노력하고 있으며, 항상 고객의 입장에서 생각하고 행동합니다."
    },
    {
        title: "주요 서비스",
        desc: "메디아나랑하는 다양한 AI 솔루션을 제공합니다. AI 컨설팅 및 맞춤형 솔루션, 빅데이터 분석 및 예측 모델링, 자연어 처리 기술을 이용한 챗봇 및 가상 비서 서비스 등 다양한 분야에서 고객의 니즈를 충족시킵니다. 우리의 서비스는 고객의 의사 결정을 지원하고, 일상 생활에서부터 비즈니스 프로세스까지 폭넓게 활용됩니다."
    },
    {
        title: "고객과 함께 성장",
        desc: "메디아나랑하는 고객과의 신뢰를 바탕으로 함께 성장하는 것을 중요시합니다. 고객의 문제를 해결하고, 더 나은 솔루션을 제공하기 위해 끊임없이 노력합니다. 우리의 AI 기술은 고객의 삶을 더 나은 방향으로 변화시키고, 더 스마트한 세상을 만들어 나가는 데 기여하고 있습니다."
    }
]


export const siteText = [
    {
        text: ["AI-based", "ARS customer", "service"],
        title: "AI 기반의 ARS 고객상담 서비스",
        code: "https://github.com/mediana-ai/ai-ars-customer-service",
        view: "https://ai-ars-customer-service.netlify.app",
        info: [
            "AI technology for automated response",
            "production period: three months",
            "use stack: Node.js, Express, TensorFlow, langchain",
        ],
    },
    {
        text: ["AI-based", "veterinary", "service"],
        title: "AI 기반의 수의사 서비스",
        code: "https://github.com/mediana-ai/ai-veterinary-service",
        view: "https://ai-veterinary-service.netlify.app",
        info: [
            "AI for pet health diagnostics",
            "production period: six months",
            "use stack: Python, Flask, PyTorch, OpenCV",
        ],
    },
    {
        text: ["AI-based", "phone English", "service"],
        title: "AI 기반의 전화영어 서비스",
        code: "https://github.com/mediana-ai/ai-phone-english-service",
        view: "https://ai-phone-english-service.netlify.app",
        info: [
            "AI for English conversation practice",
            "production period: four months",
            "use stack: Node.js, Docker, FastAPI, langchain",
        ],
    },
    {
        text: ["AI-based", "kiosk", "service"],
        title: "AI 키오스크",
        code: "https://github.com/mediana-ai/ai-kiosk",
        view: "https://ai-kiosk.netlify.app",
        info: [
            "AI for interactive kiosk solutions",
            "production period: five months",
            "use stack: Vue.js, Node.js, TensorFlow, Docker",
        ],
    },
];


export const portText = [
    {
        num: "01",
        title: "어워드에도 올라간 포트폴리오",
        desc: "라마 디자인을 통해 자신의 스킬을 가장 멋지게 표현한 포트폴리오입니다. 가로 모드와 세로 모드는 매우 인상적이며 특히 리액트와 비트를 이용하여 제작한 것은 더욱 놀랍습니다. 이 사이트는 awwwards.com에도 인정받아 올라간 포트폴리오입니다. 확실히 그의 뛰어난 디자인 스킬과 기술력이 빛을 발휘한 결과물인 것 같습니다.",
        img: port01,
        code: "https://github.com/kimsangjunv1/-React-Portfolio",
        view: "https://portfoliosj-react.netlify.app",
        name: "김상* 포트폴리오",
    },
    {
        num: "02",
        title: "빛나는 밤에 포트폴리오",
        desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
        img: port02,
        code: "https://github.com/seolhee313/PORTFOLIO-REACT",
        view: "https://portfolio-313.web.app/",
        name: "천설* 포트폴리오",
    },
    {
        num: "03",
        title: "열정이 넘치는 포트폴리오",
        desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
        img: port03,
        code: "https://github.com/seolhee313/PORTFOLIO-REACT",
        view: "https://portfolio-313.web.app/",
        name: "천설* 포트폴리오",
    },
    {
        num: "04",
        title: "모던한 포트폴리오",
        desc: "블랙 컨셉과 애니메이션이 돋보이는 포트폴리오 사이트입니다. GSAP를 통한 애니메이션과 NEXT.js를 통해 제작된 포트폴리오입니다. pin 애니메이션을 통한 포폴 작업물의 표현 능력이 돋보이는 사이트입니다.",
        img: port04,
        code: "https://github.com/dlgnsrb227/portfolio-next",
        view: "https://hoongportfolio-next.netlify.app/",
        name: "이훈* 포트폴리오",
    },
    {
        num: "05",
        title: "가로모드의 정석 포트폴리오",
        desc: "이 포트폴리오는 가로모드를 통해 눈에 띄는 애니메이션 효과를 가진 멋진 작품들이 펼쳐집니다. 세션 간의 부드러운 전환과 흥미로운 움직임이 사용자들에게 색다른 경험을 선사합니다. 사이트에는 탁월한 디자인과 창의적인 애니메이션들이 어우러져, 사용자들에게 인상적인 시각적인 효과를 줍니다. 애니메이션은 적절히 사용되어 사이트를 더욱 생동감 있게 만들어주는 포트폴리오입니다.",
        img: port05,
        code: "/",
        view: "https://junseungpark.github.io/portfolio/index3.html",
        name: "박준* 포트폴리오",
    },
    {
        num: "06",
        title: "화려함의 정석 포트폴리오",
        desc: "화려하고 세련된 디자인과 다채로운 색상이 사용된 포트폴리오는 사용자를 홀릴 듯한 시각적인 매력을 지니고 있습니다. 포트폴리오 내의 각 작품들은 디테일한 디자인과 탁월한 시각적 표현력을 갖추고 있어, 주인공의 뛰어난 예술적 감각을 느낄 수 있습니다. 화려한 애니메이션 효과와 부드러운 전환은 사이트를 더욱 생동감 있게 만들어주며, 사용자들에게 색다른 경험을 선사합니다.",
        img: port06,
        code: "/",
        view: "https://webstoryboy.github.io/port2023/portfolio-student/DavidYang/index.html",
        name: "포트폴리오",
    },
    {
        num: "07",
        title: "패럴랙스 정석 포트폴리오",
        desc: "마치 예술작품을 감상하는 듯한 환상적인 경험을 선사하는 포트폴리오입니다. 패럴랙스 스크롤링을 활용하여 구성된 사이트는 사용자들에게 독특하고 멋진 시각적 효과를 제공합니다. 배경과 움직이는 요소들이 조화롭게 어우러져, 사이트 전반에 걸쳐 깊이와 입체감을 느낄 수 있습니다. 스크롤에 따라 움직이는 요소들은 마치 세계를 탐험하는 듯한 느낌을 주며, 사용자들을 끌어들이는 매력적인 요소로 작용합니다.",
        img: port07,
        code: "/",
        view: "https://webstoryboy.github.io/port2023/portfolio-student/TaeyongLee/index.html",
        name: "포트폴리오",
    },
    {
        num: "08",
        title: "트랜지션 포트폴리오",
        desc: "화면 전환과 요소들의 흐름이 순조롭고 매끄러운 작품들로 가득한 포트폴리오 사이트입니다. 페이지 간의 트랜지션은 마치 이야기를 풀어내는 듯한 흥미진진한 경험을 선사합니다. 트랜지션 효과의 적절한 활용은 작품들을 보다 동적이고 생동감 있게 만들어줍니다. 각 페이지의 이동이 자연스럽고 사용자들이 원활하게 사이트를 탐색할 수 있도록 배려된 구성은 개발자의 디자인 능력을 잘 보여주는 특징입니다.",
        img: port08,
        code: "/",
        view: "https://webstoryboy.github.io/port2023/portfolio-student/HyunroKim/index.html",
        name: "포트폴리오",
    },
    {
        num: "09",
        title: "스크롤의 정석 포트폴리오",
        desc: "스크롤링을 활용하여 훌륭한 사용자 경험을 선사하는 포트폴리오 사이트입니다. 스크롤을 내리면서 작품들이 순차적으로 나타나고 효과적으로 전환되는 것은 마치 예술적인 이야기를 읽어나가는 듯한 느낌을 주며 사용자를 매료시킵니다. 스크롤의 움직임을 통해 작품들이 서서히 드러나고, 각 페이지 간의 전환은 자연스럽고 부드럽습니다. 이러한 트랜지션과 애니메이션들이 작품들의 내용과 테마를 더욱 강조해줍니다.",
        img: port09,
        code: "/",
        view: "https://webstoryboy.github.io/port2023/portfolio-student/ChoJaeHyung/index.html",
        name: "포트폴리오",
    },
    {
        num: "10",
        title: "모던함의 정석 포트폴리오",
        desc: "현대적이고 세련된 디자인으로 가득한 포트폴리오 사이트입니다. 모던한 느낌과 세심한 디테일이 조화를 이루며, 사용자에게 신선하고 품격 있는 경험을 제공합니다. 사이트의 디자인은 깔끔하고 단정하면서도 특유의 감성과 풍부한 표현력이 느껴집니다. 간결한 레이아웃과 모던한 색상 선택은 주인공의 디자인 감각을 잘 보여주는 특징입니다.",
        img: port10,
        code: "/",
        view: "https://webstoryboy.github.io/port2023/portfolio-student/JooHyeji/index.html",
        name: "포트폴리오",
    },
];

export const contactText = [
    {
        link: "https://open.kakao.com/o/gM7YLzwf",
        title: "전화번호 : 000 0000 0000 ",
    },
    {
        link: "mailto:webstoryboy@naver.com",
        title: "이메일  0000@0000.com",
    },
];

export const footerText = [
    {
        title: "youtube",
        desc: "유튜브에 오시면 더 많은 강의를 볼 수 있습니다.",
        link: "https://www.youtube.com/@Webstoryboy",
    },
    // {
    //     title: "github",
    //     desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
    //     link: "https://github.com/webstoryboy",
    // },
    // {
    //     title: "blog",
    //     desc: "블러그에 오시면 더 많은 정보를 볼 수 있습니다.",
    //     link: "https://webstoryboy.co.kr",
    // },
    // {
    //     title: "gsap",
    //     desc: "GSAP에 오시면 더 많은 강의를 볼 수 있습니다.",
    //     link: "https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq",
    // },
    // {
    //     title: "react",
    //     desc: "리액트로 만든 사이트를 같이 만들어 봅니다.",
    //     link: "https://github.com/webstoryboy/port2023-react",
    // },
    // {
    //     title: "vue",
    //     desc: "뷰로 만든 사이트를 같이 만들어 봅니다.",
    //     link: "https://github.com/webstoryboy/port2023-vue",
    // },
    // {
    //     title: "next",
    //     desc: "넥스트로 만든 사이트를 같이 만들어 봅니다.",
    //     link: "https://github.com/webstoryboy/port2023-next",
    // },
];