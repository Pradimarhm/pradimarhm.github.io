const pathImage = '../images/design/'
// const pathImage = import.meta.glob('../assets/images/design/**/*.{png,jpg,jpeg,svg}', { eager: true });

// const getImg = (name) => {
//     // Pastikan path ini SAMA PERSIS dengan struktur folder kamu dari titik file ini
//     const key = `../assets/images/design/${name}`;
//     return pathImage[key]?.default || '';
// };

export const DesignList = [
    // java tech2
    {imageUrl: pathImage+'/bingkai_live_report_acara_javatech2.webp', category: ['java_tech_2', 'sg_instagram']},
    {imageUrl: pathImage+'/carousale_after_javatech2.webp', category: ['java_tech_2', 'carousale']},
    {imageUrl: pathImage+'/carousale_event_javatech2.webp', category: ['java_tech_2', 'carousale']},
    {imageUrl: pathImage+'/carousale_lomba_videografi_javatech2.webp', category: ['java_tech_2', 'carousale']},
    {imageUrl: pathImage+'/juara_aplikasi_javatech2.webp', category: ['java_tech_2', 'feed_instagram']},
    {imageUrl: pathImage+'/juara_poster_javatech2.webp', category: ['java_tech_2', 'feed_instagram']},
    {imageUrl: pathImage+'/juara_videografi_javatech2.webp', category: ['java_tech_2', 'feed_instagram']},
    {imageUrl: pathImage+'/karya_finalis_javatech2.webp', category: ['java_tech_2', 'feed_instagram']},
    {imageUrl: pathImage+'/header_gform_pengumpulan_lomba.webp', category: ['java_tech_2', 'other']},
    {imageUrl: pathImage+'/header_gform_pendaftaran_lomba.webp', category: ['java_tech_2', 'other']},
    {imageUrl: pathImage+'/bingkai_live_report_acara_javatech2.webp', category: ['java_tech_2', 'sg_instagram', 'frame']},
    {imageUrl: pathImage+'/timeline_lomba1_javatech2.webp', category: ['java_tech_2', 'carousale']},
    {imageUrl: pathImage+'/timeline_lomba_javatech2.webp', category: ['java_tech_2', 'feed_instagram']},

    // demisioner
    {imageUrl: pathImage+'/1.webp', category: ['demisioner', 'feed_instagram']},
    {imageUrl: pathImage+'/2.webp', category: ['demisioner', 'feed_instagram']},
    {imageUrl: pathImage+'/3.webp', category: ['demisioner', 'feed_instagram']},
    {imageUrl: pathImage+'/4.webp', category: ['demisioner', 'feed_instagram']},
    {imageUrl: pathImage+'/5.webp', category: ['demisioner', 'feed_instagram']},
    {imageUrl: pathImage+'/6.webp', category: ['demisioner', 'feed_instagram']},
    {imageUrl: pathImage+'/7.webp', category: ['demisioner', 'feed_instagram']},
    {imageUrl: pathImage+'/8.webp', category: ['demisioner', 'feed_instagram']},
    {imageUrl: pathImage+'/carousaleReor.webp', category: ['demisioner', 'carousale']},

    // study club
    {imageUrl: pathImage+'/cover_gfrom_Pengumpulan_Karya_studyclub.webp', category: ['study_club', 'other']},
    {imageUrl: pathImage+'/cover_livestream_studyclub.webp', category: ['study_club', 'frame']},
    {imageUrl: pathImage+'/poster_studyclub_pertemuan_pertama.webp', category: ['study_club', 'poster']},
    {imageUrl: pathImage+'/poster_studyclub_pertemuan2.webp', category: ['study_club', 'poster']},
    {imageUrl: pathImage+'/poster_studyclub_pertemuan3.webp', category: ['study_club', 'poster']},
    {imageUrl: pathImage+'/poster_studyclub_pertemuan4.webp', category: ['study_club', 'poster']},
    {imageUrl: pathImage+'/sg _studyclub_pertemuan3.webp', category: ['study_club', 'sg_instagram']},
    {imageUrl: pathImage+'/sg _studyclub_pertemuan4.webp', category: ['study_club', 'sg_instagram']},
    {imageUrl: pathImage+'/sg_studyclub_pertemuan2.webp', category: ['study_club', 'sg_instagram']},
    {imageUrl: pathImage+'/thumbnail_studyclub_pertemuan2.webp', category: ['study_club', 'thumbnail_yt']},
    {imageUrl: pathImage+'/thumbnail_studyclub_pertemuan4.webp', category: ['study_club', 'thumbnail_yt']},

    // bootcamp
    {imageUrl: pathImage+'/posterBootcamp.webp', category: ['bootcamp_ui_ux', 'poster']},
    {imageUrl: pathImage+'/cover_livereport_bootcampuiux.webp', category: ['bootcamp_ui_ux','sg_instagram','frame']},
    {imageUrl: pathImage+'/design_text_mc_bootcampuiux.webp', category: ['bootcamp_ui_ux', 'other']},

    // sekolah bisnis digital
    {imageUrl: pathImage+'/poster_sbd.webp', category: ['sekolah_bisnis_digital', 'poster']},
    {imageUrl: pathImage+'/poster_sbd_h1.webp', category: ['sekolah_bisnis_digital', 'poster']},
    {imageUrl: pathImage+'/banner_sbd.webp', category: ['sekolah_bisnis_digital', 'banner']},
    {imageUrl: pathImage+'/que_card_sbd.webp', category: ['sekolah_bisnis_digital', 'other']},
    
    // poster hari besar
    {imageUrl: pathImage+'/posterImlek.webp', category: ['sg_instagram', 'poster']},
    {imageUrl: pathImage+'/poster_iduladha.webp', category: ['sg_instagram', 'poster']},
    {imageUrl: pathImage+'/poster_isramiraj.webp', category: ['sg_instagram', 'poster']},
    {imageUrl: pathImage+'/poster_kartini.webp', category: ['sg_instagram', 'poster']},
    {imageUrl: pathImage+'/poster_paskah.webp', category: ['sg_instagram', 'poster']},
    {imageUrl: pathImage+'/poster_ramadhan2025.webp', category: ['sg_instagram', 'poster', 'ramadhan_berkah']},
    {imageUrl: pathImage+'/poster_tahun_baru_Islam2025.webp', category: ['sg_instagram', 'poster']},
    {imageUrl: pathImage+'/posterHarlahPancasila.webp', category: ['sg_instagram', 'poster']},
    {imageUrl: pathImage+'/posterImlek.webp', category: ['sg_instagram', 'poster']},
    {imageUrl: pathImage+'/posterKemerdekaan.webp', category: ['sg_instagram', 'poster']},
    {imageUrl: pathImage+'/posterMaulid.webp', category: ['sg_instagram', 'poster']},
    {imageUrl: pathImage+'/posterUAS.webp', category: ['sg_instagram', 'poster']},
    {imageUrl: pathImage+'/posterWaisak.webp', category: ['sg_instagram', 'poster']},

    // thumbnail yt
    {imageUrl: pathImage+'/thumbnail_podcast1.webp', category: ['thumbnail_yt']},

    // ramadhan berkah
    {imageUrl: pathImage+'/posterBukber.webp', category: ['ramadhan_berkah', 'poster']},
    {imageUrl: pathImage+'/poster_acara_bukberdandonasi.webp', category: ['ramadhan_berkah', 'poster']},
    {imageUrl: pathImage+'/poster_acara_bukberdandonasi.webp', category: ['ramadhan_berkah', 'poster']},
    {imageUrl: pathImage+'/cover_livereport_ramadhanberkah.webp', category: ['ramadhan_berkah', 'sg_instagram','frame']},

    // oprec
    {imageUrl: pathImage+'/oprec.webp', category: ['oprec', 'poster']},

    // feed instagram
    {imageUrl: pathImage+'/feedEpim.webp', category: ['feed_instagram']},
    {imageUrl: pathImage+'/feedSubSektorApp.webp', category: ['feed_instagram']},
    {imageUrl: pathImage+'/feedSosialisasiPraPkkmb.webp', category: ['feed_instagram']},
    {imageUrl: pathImage+'/feedexhibition.webp', category: ['feed_instagram']},

    // poster
    {imageUrl: pathImage+'/flyerGerakJalan.webp', category: ['poster']},

    // banner
    {imageUrl: pathImage+'/banner_makrab.webp', category: ['makrab','banner']},
    {imageUrl: pathImage+'/workshop_inggris.webp', category: ['banner']},

    // workshop kelas kreatif
    {imageUrl: pathImage+'/feedWorkshop.webp', category: ['workshop_kelas_kreatif','poster','feed_instagram']},
    {imageUrl: pathImage+'/bannerWorkshop.webp', category: ['workshop_kelas_kreatif','banner']}, 
    {imageUrl: pathImage+'/coming_soon_workshop_kelas_kreatif.webp', category: ['workshop_kelas_kreatif','poster','feed_instagram']}, 
]
