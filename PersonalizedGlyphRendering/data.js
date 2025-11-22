// ==============================
// Geometry builder for 3D letters "FA5"
// Menggunakan kumpulan balok axis-aligned.
// Setiap verteks punya 9 komponen: position(3) + color(3) + normal(3)
// ==============================

var vertices = [];

function pushFace(pA, pB, pC, pD, color, normal){
    // Dua segitiga (A,B,C) dan (C,D,A)
    var pts = [pA, pB, pC, pC, pD, pA];
    for(var i=0;i<pts.length;i++){
        // position
        vertices.push(pts[i][0], pts[i][1], pts[i][2]);
        // color
        vertices.push(color[0], color[1], color[2]);
        // normal
        vertices.push(normal[0], normal[1], normal[2]);
    }
}

function addBox(cx, cy, cz, sx, sy, sz, color){
    var x = sx/2, y = sy/2, z = sz/2;
    // Urutan titik mirip cube sebelumnya (A..H)
    var A = [cx - x, cy + y, cz + z];
    var B = [cx - x, cy - y, cz + z];
    var C = [cx + x, cy - y, cz + z];
    var D = [cx + x, cy + y, cz + z];
    var E = [cx - x, cy + y, cz - z];
    var F = [cx - x, cy - y, cz - z];
    var G = [cx + x, cy - y, cz - z];
    var H = [cx + x, cy + y, cz - z];

    // Front
    pushFace(B, C, D, A, color, [0,0,1]);
    // Right
    pushFace(C, G, H, D, color, [1,0,0]);
    // Top
    pushFace(D, H, E, A, color, [0,1,0]);
    // Left
    pushFace(E, F, B, A, color, [-1,0,0]);
    // Back
    pushFace(F, E, H, G, color, [0,0,-1]);
    // Bottom
    pushFace(G, C, B, F, color, [0,-1,0]);
}

function buildFA5(){
    vertices = []; // reset
    var t = 0.15;      // ketebalan stroke huruf
    var depth = 0.25;  // ketebalan ke sumbu z

    // --- Letter F (merah) ---
    var cF = [1.0, 0.0, 0.0];
    // batang vertikal
    addBox(-1.2, 0.0, 0.0, t, 1.2, depth, cF);
    // top bar
    addBox(-0.92, 0.5 - t/2, 0.0, 0.6, t, depth, cF);
    // middle bar
    addBox(-0.97, 0.1, 0.0, 0.5, t, depth, cF);

    // --- Letter A (hijau) ---
    var cA = [0.0, 0.7, 0.2];
    // left leg
    addBox( -0.25, 0.0, 0.0, t, 1.2, depth, cA);
    // right leg
    addBox( 0.25, 0.0, 0.0, t, 1.2, depth, cA);
    // middle bar
    addBox( 0.0, 0.05, 0.0, 0.55, t, depth, cA);
    // top bar (opsional membuat bentuk blocky A)
    addBox( 0.0, 0.5 - t/2, 0.0, 0.5, t, depth, cA);

    // --- Number 5 (biru) ---
    var c5 = [0.0, 0.3, 0.9];
    // top bar
    addBox( 1.2, 0.5 - t/2, 0.0, 0.6, t, depth, c5);
    // upper vertical (left side of 5)
    addBox( 1.2 - 0.3, 0.25, 0.0, t, 0.5, depth, c5);
    // middle bar
    addBox( 1.2, 0.0, 0.0, 0.6, t, depth, c5);
    // lower vertical (right side)
    addBox( 1.2 + 0.3 - t/2, -0.25, 0.0, t, 0.5, depth, c5);
    // bottom bar
    addBox( 1.2, -0.5 + t/2, 0.0, 0.6, t, depth, c5);
}

// Bangun geometry segera saat file dimuat
buildFA5();

// ==============================
// Cara menambah huruf / angka baru:
// 1. Tentukan posisi pusat (cx, cy, cz) tiap balok.
// 2. Tentukan ukuran (sx, sy, sz) balok (sx: lebar horizontal, sy: tinggi, sz: tebal Z).
// 3. Panggil addBox(cx, cy, cz, sx, sy, sz, [r,g,b]).
// 4. Pastikan panggilan dilakukan sebelum buffer dibuat di main.js (saat init).
// 5. Jika ingin rebuild dinamis, ekspor buildFA5() dan panggil ulang lalu re-upload buffer.
// ==============================