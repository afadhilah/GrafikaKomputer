# Grafika Komputer - Personalized Glyph Rendering

## Case Study: Personalized Glyph Rendering

Proyek ini merupakan implementasi rendering karakter 3D personal menggunakan WebGL dengan teknik Phong Shading dan transformasi geometris.

### Identifikasi Karakter
- **Dua huruf pertama dari nama depan**: FA (dari Fadhilah)
- **Satu angka terakhir dari NRP**: 5

### Fitur Utama
- Rendering 3D dari karakter "FA5" menggunakan WebGL
- Implementasi Phong Shading untuk pencahayaan realistis (ambient, diffuse, dan specular)
- Rotasi animasi otomatis pada objek 3D
- Interaksi pengguna untuk freeze/unfreeze animasi
- Geometri dibangun dari kumpulan balok (box primitives)

### Teknologi yang Digunakan
- **WebGL**: Untuk rendering grafis 3D
- **gl-matrix**: Library untuk operasi matriks transformasi
- **Phong Lighting Model**: Ambient, diffuse, dan specular lighting
- **3D Transformations**: Rotasi, scaling, dan projection matrices

### Struktur File
```
PersonalizedGlyphRendering/
├── index.html        # File HTML utama dengan canvas dan shader
├── main.js           # Logika rendering dan animasi WebGL
├── data.js           # Definisi geometri karakter "FA5"
├── IOHandler.js      # Handler untuk input/interaksi pengguna
├── helper.js         # Fungsi-fungsi helper
└── gl-matrix-min.js  # Library matriks untuk transformasi 3D
```

### Cara Menjalankan
1. Buka file `PersonalizedGlyphRendering/index.html` di web browser modern yang mendukung WebGL
2. Karakter "FA5" akan ditampilkan dalam bentuk 3D dengan animasi rotasi
3. Gunakan interaksi mouse/keyboard untuk mengontrol animasi (freeze/unfreeze)

### Desain Karakter
- **Huruf F**: Dibangun menggunakan balok vertikal dan horizontal
- **Huruf A**: Dibentuk dengan dua balok diagonal dan satu balok horizontal di tengah
- **Angka 5**: Terdiri dari stroke vertikal dan horizontal yang membentuk angka 5
- **Warna**: Setiap komponen karakter menggunakan warna RGB yang menarik
- **Pencahayaan**: Phong shading dengan ambient (30%), diffuse, dan specular highlights

### Transformasi Geometris
- **Rotation**: Objek berputar secara kontinyu pada sumbu (1, 1, 1)
- **Scaling**: Model di-scale 0.9x untuk fit di viewport
- **Projection**: Perspective projection dengan FOV 90°
- **Camera Position**: Posisi kamera [0, 0.1, 3.2] untuk view optimal

### Output
Hasil render ditampilkan dalam halaman web dengan:
- Canvas 1980x1080 pixels
- Real-time 3D rendering dengan depth testing
- Smooth animation menggunakan requestAnimationFrame
- Interactive controls untuk manipulasi objek

---
**Mata Kuliah**: Grafika Komputer  
**Semester**: 7  
**Institusi**: Institut Teknologi Sepuluh Nopember (ITS)