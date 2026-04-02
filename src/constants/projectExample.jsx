const pathImage = "../images"

export const ProjectExample = [
    { 
        name: 'Hydrosee', 
        imageUrl: pathImage+'/project/hydrosee/3.png',
        secImageUrl: pathImage+'/project/hydrosee/4.png',
        tridImageUrl: pathImage+'/project/hydrosee/5.png',
        description: 'For our 5th-semester project, my team and I developed a mobile app integrated with an IoT system. In this project, we addressed an issue related to hydroponic farming, which is often overrun by grasshoppers due to its location on the edge of rice fields. By integrating a machine learning-based smart system combined with image processing and computer vision to detect locusts, the results of this detection are used to trigger the IoT system to take action.',
        duration: '3 Mount  (September-Desember 2025)',
        techStack: [
            {
                name: 'Figma',
                describe: 'Tools design for UI Mobile App',
                icon: pathImage+"/techStack/Figma.svg",
            },
            {
                name: 'Tinkercad',
                describe: 'Tools design for 3D Mockup IoT',
                icon: pathImage+"/techStack/Tinkercad.svg",
            }, 
            {
                name: 'Python',
                describe: 'Base langguage programing for backend system and machine learning',
                icon: pathImage+"/techStack/Python.svg",
            },  
            {
                name: 'Firebase',
                describe: 'base authentication using google sso',
                icon: pathImage+"/techStack/Firebase.svg",
            }, 
            {
                name: 'Dart',
                describe: 'base langguage programing for mobile app',
                icon: pathImage+"/techStack/Dart.svg",
            }, 
            {
                name: 'Flutter',
                describe: 'framework for building or develop a mobile app',
                icon: pathImage+"/techStack/Flutter.svg",
            }, 
        ],
        position_on_team: ['UI Designer', 'Mobile Dev', 'IoT Engginer', 'Backend Dev', 'Graphic Designer'],
        category: 'iot, mobile_app, ui_design,fullstack' 
    },

    { 
        name: 'Tracker Study Alumni', 
        imageUrl: pathImage+'/project/tracker_study_alumni/tracker_study_lp_ui_1.webp',
        secImageUrl: pathImage+'/project/tracker_study_alumni/mockup_dashboard_admin.webp',
        tridImageUrl: pathImage+'/project/tracker_study_alumni/mockup_dashboard_alumni.webp',
        description: 'For our 6th-semester project, my team and I developed a website designed to locate alumni and provide job listings. the website’s primary feature is the Study Tracker questionnaire. This website will be used by TIF PSDKU Nganjuk Regency to collect Study Tracker questionnaires from alumni of this institution, with one of the questionnaire’s functions being to support program accreditation. In this project, I served as the UI/UX designer for the website, using Figma. I analyzed the requirements and interview data obtained from the program head and translated them into an Information Architecture (IA) and User Flow, which I created directly in Figma. After finalizing the IA and User Flow, I created a low-fidelity wireframe on paper, followed by mid- and high-fidelity versions in Figma.',
        duration: '3 Mount  (Februari-Juni 2026)',
        techStack: [
            {
                name: 'Figma',
                describe: 'Tools design for UI Mobile App',
                icon: pathImage+"/techStack/Figma.svg",
            },
        ],
        position_on_team: ['UI Designer'],
        category: 'ui_design, ui_ux, Website'
    },

    { 
        name: 'Kreasikan', 
        imageUrl: pathImage+'/project/kreasikan/kreasikan_infografis_ui.webp',
        secImageUrl: pathImage+'/project/kreasikan/kreasikan_home.webp',
        tridImageUrl: pathImage+'/project/kreasikan/kreasikan_sektor.webp',
        description: 'For our 4th-semester project, my team and I developed a website serving as a platform for the creative economy in Nganjuk Regency—more specifically, a creative economy e-directory listing the creative economy businesses in Nganjuk Regency. In this project, my friends and I served as UI/UX designers, and my role was to design the website’s landing page.',
        duration: '7 Mount  (Februari-Juni 2025)',
        techStack: [
            {
                name: 'TailwindCss',
                describe: 'Library for style in website',
                icon: pathImage+"/techStack/TailwindCss.svg",
            },
            {
                name: 'Laravel',
                describe: 'Library for style in website',
                icon: pathImage+"/techStack/Laravel.svg",
            },
            {
                name: 'PHP',
                describe: 'Library for style in website',
                icon: pathImage+"/techStack/PHP.svg",
            },
            {
                name: 'CSS',
                describe: 'Library for style in website',
                icon: pathImage+"/techStack/CSS.svg",
            },
            {
                name: 'JavaScript',
                describe: 'Library for style in website',
                icon: pathImage+"/techStack/Javascript.svg",
            },
            {
                name: 'Figma',
                describe: 'Tools design for UI Mobile App',
                icon: pathImage+"/techStack/Figma.svg",
            },
        ],
        position_on_team: ['UI Designer', 'Front End Dev'],
        category: 'website, ui_ux, ui_design'
    },

    // { 
    //     name: 'Tracker Study Alumni',
    //     imageUrl: pathImage+'/project/tracker_study_lp_ui_1.webp', 
    //     description: 'For our 6th-semester project, my team and I developed a website designed to locate alumni and provide job listings. the website’s primary feature is the Study Tracker questionnaire. This website will be used by TIF PSDKU Nganjuk Regency to collect Study Tracker questionnaires from alumni of this institution, with one of the questionnaire’s functions being to support program accreditation. In this project, I served as the UI/UX designer for the website, using Figma. I analyzed the requirements and interview data obtained from the program head and translated them into an Information Architecture (IA) and User Flow, which I created directly in Figma. After finalizing the IA and User Flow, I created a low-fidelity wireframe on paper, followed by mid- and high-fidelity versions in Figma.',
    //     techStack: [
    //         {
    //             name: 'Figma',
    //             describe: 'Tools design for UI Mobile App',
    //             icon: pathImage+"/techStack/Figma.svg",
    //         },
    //     ],
    //     category: 'ui_ux, ui_design, Website'
    // },
    // { 
    //     name: 'Kreasikan', 
    //     imageUrl: pathImage+'/project/kreasikan_infografis_ui.webp', 
    //     description: 'For our 4th-semester project, my team and I developed a website serving as a platform for the creative economy in Nganjuk Regency—more specifically, a creative economy e-directory listing the creative economy businesses in Nganjuk Regency. In this project, my friends and I served as UI/UX designers, and my role was to design the website’s landing page.',
    //     techStack: [
    //         {
    //             name: 'Figma',
    //             describe: 'Tools design for UI Mobile App',
    //             icon: pathImage+"/techStack/Figma.svg",
    //         },
    //         {
    //             name: 'TailwindCss',
    //             describe: 'Library for style in website',
    //             icon: pathImage+"/techStack/TailwindCss.svg",
    //         },
    //         // pathImage+"/techStack/Figma.svg", pathImage+"/techStack/TailwindCss.svg", pathImage+"/techStack/Javascript.svg" , pathImage+"/techStack/CSS.svg", pathImage+"/techStack/Html.svg", pathImage+"/techStack/PHP.svg", pathImage+"/techStack/Laravel.svg"
    //     ],
    //     category: 'website, ui_ux, ui_design,' 
    // },
    // { 
    //     name: 'Latanza', 
    //     imageUrl: pathImage+'/project/latanza_produk_ui_1.webp', 
    //     description: 'For our 2th-semester project, my team and I developed a desktop application called Latanza, which is used to manage the income and expenses of a bakery named Latanza. The application will be used by cashiers to record bread purchases and to track ingredients and their prices for baking. In this project, I served as the UI Designer, responsible for creating all the application’s interfaces, from the login screen to the settings menu.',
    //     techStack: [
    //         {
    //             name: 'Figma',
    //             describe: 'Library for style in website',
    //             icon: pathImage+"/techStack/Figma.svg",
    //         },
    //     ],
    //     category: 'ui_design' 
    // },
    // { 
    //     name: 'E-Jurnal', 
    //     imageUrl: pathImage+'/project/e-jurnal_lp_ui_1.webp', 
    //     description: 'For our 4th-semester project, my team and I developed a website used for monitoring and evaluating vocational high school internship programs. More specifically, we digitized the logbooks that were previously used to record internship activities and were also used by the internship site owners to evaluate the students completing their internships at their locations. My role this time was as a UI Designer, where I handled the entire website design—from the landing page to the interfaces for the supervising teachers, DUDI (the internship site owner), and the students. ',
    //     techStack: [
    //         {
    //             name: 'Figma',
    //             describe: 'Library for style in website',
    //             icon: pathImage+"/techStack/Figma.svg",
    //         },
    //         // pathImage+"/techStack/Figma.svg", pathImage+"/techStack/PHP.svg"
    //     ],
    //     category: 'website, ui_design' 
    // },
    // { 
    //     name: 'Panji', 
    //     imageUrl: pathImage+'/project/panji_dashboard_ui.webp', 
    //     description: 'In my 4th semester, in addition to working on my semester project, I was really eager to enter competitions. That’s why I participated in a UI/UX competition—the Arcavidia 8.0 contest—and I wasn’t alone. Together with two friends, we formed a team to compete in this contest. Our idea was to design a government transparency app, which would include features related to government affairs—such as a petition feature for laws or new policies deemed inappropriate, and a section on new legislation listing the laws, their contents, and the proposers and approvers. Since it was a political year, I also created a page listing new government programs and their progress (though this part requires government involvement, since they’re the ones who know the progress). The creation of this idea stems from my interest in following political developments in my country. In this competition, I served as the UI/UX Designer for the mobile app, handling everything from the login screen to the final interface.',
    //     techStack: [
    //         {
    //             name: 'Figma',
    //             describe: 'Library for style in website',
    //             icon: pathImage+"/techStack/Figma.svg",
    //         },
    //         // pathImage+"/techStack/Figma.svg"
    //     ],
    //     category: 'ui_ux, ui_design'
    // },
];