// Import images for card visuals
import StrategiMahasiswa from "../../assets/strategimahasiswa.png";
import TaketheTrash from "../../assets/takethetrash.png";
import Pilmapres from "../../assets/pilmapres.png";
import PersonalBranding from "../../assets/personalbranding.png";
import GaleryofLife from "../../assets/galeryoflife.png";

// Array containing event card data
const Cards = [
    {
        id: 1, // Unique identifier for the card
        gambar : StrategiMahasiswa, // Image for the event
        judul : "Strategi Menjadi Mahasiswa Unggulan, Bagi Mahasiswa Baru", // Event title
        date : "NOV 15 2024", // Event date
        loc : "Zoom Meeting", // Event location
        link : "asada" // Link for event details
    },
    {
        id: 2,
        gambar : TaketheTrash,
        judul : "Take the Trash: Kampus Bersih Mulai Dari Kita",
        date : "DEC 7 2024",
        loc : "Taman Kampus 1 UTY",
        link : "asada"
    },
    {
        id: 3,
        gambar : Pilmapres,
        judul : "Story of Pilmapres: Menjadi Mahasiswa Berprestasi Utama",
        date : "DEC 16 2024",
        loc : "Taman Kampus 1 UTY",
        link : "asada"
    },
    {
        id: 4,
        gambar : PersonalBranding,
        judul : "New Year, New Me: Personal Branding Sebagai Resolusi Mahasiswa di Tahun 2025",
        date : "DEC 23 2024",
        loc : "Zoom Meeting",
        link : "asada"
    },
    {
        id: 5,
        gambar : GaleryofLife,
        judul : "Galery of Life: Ekspresi Dari Melukis",
        date : "JAN 17 2025",
        loc : "Taman Kampus 1 UTY",
        link : "asada"
    },
]

export default Cards
