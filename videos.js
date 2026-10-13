
const videosData = [
  {
    id: "1",
    youtubeId: "aqz-KE-bpKQ",
    title: "Big Buck Bunny 🐰 | Animated Short Film",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
    channel: "Blender Studio",
    views: "2,5 mln marta",
    date: "1 yil oldin",
    duration: "9:56"
  },
  {
    id: "2",
    youtubeId: "ScMzIvxBSi4",
    title: "Tabiat va sayohat 🌍",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
    channel: "Travel World",
    views: "850 ming marta",
    date: "3 oy oldin",
    duration: "10:00"
  },
  {
    id: "3",
    youtubeId: "jfKfPfyJRdk",
    title: "Lofi Hip Hop Radio 🎧",
    thumbnail: "https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg",
    channel: "Lofi Girl",
    views: "120 mln marta",
    date: "2 yil oldin",
    duration: "LIVE"
  },
  {
    id: "4",
    youtubeId: "kXYiU_JCYtU",
    title: "Linkin Park — Numb 🎸",
    thumbnail: "https://img.youtube.com/vi/kXYiU_JCYtU/hqdefault.jpg",
    channel: "Linkin Park",
    views: "2,4 mlrd marta",
    date: "10 yil oldin",
    duration: "3:07"
  },
  {
    id: "5",
    youtubeId: "M7lc1UVf-VE",
    title: "YouTube Player API Demo",
    thumbnail: "https://img.youtube.com/vi/M7lc1UVf-VE/hqdefault.jpg",
    channel: "YouTube Developers",
    views: "500 ming marta",
    date: "4 yil oldin",
    duration: "0:15"
  },
  {
    id: "6",
    youtubeId: "L_jWHffIx5E",
    title: "Smash Mouth — All Star 🎵",
    thumbnail: "https://img.youtube.com/vi/L_jWHffIx5E/hqdefault.jpg",
    channel: "Smash Mouth",
    views: "400 mln marta",
    date: "12 yil oldin",
    duration: "3:57"
  },
  {
    id: "7",
    youtubeId: "Ke90Tje7VS0",
    title: "React JS Tutorial for Beginners 💻",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    channel: "Programming Tutorials",
    views: "3 mln marta",
    date: "3 yil oldin",
    duration: "1:16:00"
  },
  {
    id: "8",
    youtubeId: "ysz5S6PUM-U",
    title: "Nature Relaxation 🌿",
    thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    channel: "Nature Videos",
    views: "700 ming marta",
    date: "6 oy oldin",
    duration: "2:34"
  },
  {
    id: "9",
    youtubeId: "CevxZvSJLk8",
    title: "Katy Perry — Roar 🎤",
    thumbnail: "https://img.youtube.com/vi/CevxZvSJLk8/hqdefault.jpg",
    channel: "Katy Perry",
    views: "4 mlrd marta",
    date: "12 yil oldin",
    duration: "4:30"
  },
  {
    id: "10",
    youtubeId: "OPf0YbXqDm0",
    title: "Uptown Funk — Mark Ronson ft. Bruno Mars",
    thumbnail: "https://img.youtube.com/vi/OPf0YbXqDm0/hqdefault.jpg",
    channel: "Mark Ronson",
    views: "5 mlrd marta",
    date: "10 yil oldin",
    duration: "4:30"
  },
  {
    id: "11",
    youtubeId: "fRh_vgS2dFE",
    title: "Justin Bieber — Sorry 🎶",
    thumbnail: "https://img.youtube.com/vi/fRh_vgS2dFE/hqdefault.jpg",
    channel: "Justin Bieber",
    views: "3,8 mlrd marta",
    date: "10 yil oldin",
    duration: "3:26"
  },
  {
    id: "12",
    youtubeId: "hT_nvWreIhg",
    title: "OneRepublic — Counting Stars ⭐",
    thumbnail: "https://img.youtube.com/vi/hT_nvWreIhg/hqdefault.jpg",
    channel: "OneRepublic",
    views: "4 mlrd marta",
    date: "12 yil oldin",
    duration: "4:44"
  }
];

const shortsData = [
  {
    id: "s1",
    youtubeId: "aqz-KE-bpKQ",
    title: "Big Buck Bunny 🐰 #animation",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
    views: "1,2 mln marta"
  },
  {
    id: "s2",
    youtubeId: "ysz5S6PUM-U",
    title: "Tabiat manzaralari 🌍 #nature",
    thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    views: "5 mln marta"
  },
  {
    id: "s3",
    youtubeId: "jfKfPfyJRdk",
    title: "Lofi musiqa 🎧 #music",
    thumbnail: "https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg",
    views: "244 ming marta"
  },
  {
    id: "s4",
    youtubeId: "kXYiU_JCYtU",
    title: "Rock musiqa 🎸 #rock",
    thumbnail: "https://img.youtube.com/vi/kXYiU_JCYtU/hqdefault.jpg",
    views: "380 ming marta"
  },
  {
    id: "s5",
    youtubeId: "Ke90Tje7VS0",
    title: "React dasturlash 💻 #coding",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    views: "950 ming marta"
  },
  {
    id: "s6",
    youtubeId: "L_jWHffIx5E",
    title: "Musiqa olami 🎵 #shorts",
    thumbnail: "https://img.youtube.com/vi/L_jWHffIx5E/hqdefault.jpg",
    views: "1,1 mln marta"
  }
];
