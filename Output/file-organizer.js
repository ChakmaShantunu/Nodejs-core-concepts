
const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "output", "messy-files");
const organizedDir = path.join(__dirname, 'output', "organized");

// console.log(__dirname);


const categories = {
    Images: [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"],
    Documents: [".pdf", ".doc", ".docx", ".txt", ".xlsx", ".pptx"],
    Videos: [".mp4", ".mkv", ".mov", ".avi"],
    Music: [".mp3", ".wav", ".flac", ".aac"],
    Archives: [".zip", ".rar", ".7z", ".tar"],
    Code: [".js", ".ts", ".jsx", ".tsx", ".html", ".css", ".json"],
};

const testFiles = [
    "photo.jpg",
    "profile.png",
    "banner.webp",
    "document.pdf",
    "notes.txt",
    "report.docx",
    "salary.xlsx",
    "presentation.pptx",
    "movie.mp4",
    "video.mkv",
    "song.mp3",
    "audio.wav",
    "backup.zip",
    "project.rar",
    "index.js",
    "app.ts",
    "style.css",
    "data.json",
    "unknown.xyz"
]

function initializeDirectory() {
    if (!fs.existsSync(sourceDir)) {
        fs.mkdirSync(sourceDir, { recursive: true });

        testFiles.forEach(file => {
            fs.writeFileSync(path.join(sourceDir, file), "")
        })
    }
}

initializeDirectory();
