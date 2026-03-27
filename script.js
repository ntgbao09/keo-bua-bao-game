console.log("Đã kết nối được file Javascript!");
let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ['keo', 'bua', 'bao'];
    const emojiMap = { 'keo': '✌️ Kéo', 'bua': '✊ Búa', 'bao': '✋ Bao' };
    
    // Máy tính chọn ngẫu nhiên
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Cập nhật giao diện lựa chọn
    document.getElementById('user-choice').innerText = `Bạn chọn: ${emojiMap[userChoice]}`;
    document.getElementById('computer-choice').innerText = `Máy chọn: ${emojiMap[computerChoice]}`;

    // Logic kiểm tra thắng thua
    let result = "";
    if (userChoice === computerChoice) {
        result = "Hòa rồi!";
    } else if (
        (userChoice === 'keo' && computerChoice === 'bao') ||
        (userChoice === 'bua' && computerChoice === 'keo') ||
        (userChoice === 'bao' && computerChoice === 'bua')
    ) {
        result = "Bạn Thắng! 🎉";
        userScore++;
    } else {
        result = "Máy Thắng! 😢";
        computerScore++;
    }

    // Hiển thị kết quả và cập nhật điểm
    document.getElementById('winner-text').innerText = result;
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('computer-score').innerText = computerScore;
}
    function resetGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementById('user-score').innerText = '0';
    document.getElementById('computer-score').innerText = '0';
    document.getElementById('winner-text').innerText = 'Bắt đầu lại nào!';
    document.getElementById('user-choice').innerText = 'Bạn chọn: -';
    document.getElementById('computer-choice').innerText = 'Máy chọn: -';
 }
 // ... script.js ...

// THÊM HÀM ĐỂ ẨN TẤT CẢ HÌNH ẢNH
function hideAllImages() {
    // Ẩn container
    document.getElementById('player-image-container').classList.remove('visible');
    document.getElementById('computer-image-container').classList.remove('visible');
    
    // Ẩn tất cả hình ảnh
    const allImages = document.querySelectorAll('.hand-image');
    allImages.forEach(img => img.classList.remove('active'));
}

// CẬP NHẬT HÀM playGame(userChoice)
    function playGame(userChoice) {
    // 1. ẨN TẤT CẢ HÌNH ẢNH TRƯỚC KHI LƯỢT MỚI BẮT ĐẦU
    hideAllImages();
    
    const choices = ['keo', 'bua', 'bao'];
    const emojiMap = { 'keo': '✌️ Kéo', 'bua': '✊ Búa', 'bao': '✋ Bao' };
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // 2. HIỂN THỊ HÌNH ẢNH NGƯỜI CHƠI NGAY LẬP TỨC
    const playerImage = document.getElementById(`player-${userChoice}`);
    if (playerImage) {
        playerImage.classList.add('active');
        document.getElementById('player-image-container').classList.add('visible');
    }

    // (NÂNG CAO): TẠO ĐỘ TRỄ NGẮN CHO MÁY TÍNH ĐỂ TẠO CẢM GIÁC HỒI HỘP
    setTimeout(() => {
        // 3. HIỂN THỊ HÌNH ẢNH MÁY TÍNH
        const computerImage = document.getElementById(`computer-${computerChoice}`);
        if (computerImage) {
            computerImage.classList.add('active');
            document.getElementById('computer-image-container').classList.add('visible');
        }

        // 4. CẬP NHẬT LOGIC HIỂN THỊ KẾT QUẢ CŨ
        document.getElementById('user-choice').innerText = `Bạn chọn: ${emojiMap[userChoice]}`;
        document.getElementById('computer-choice').innerText = `Máy chọn: ${emojiMap[computerChoice]}`;

        let result = "";
        if (userChoice === computerChoice) {
            result = "Hòa rồi!";
        } else if (
            (userChoice === 'keo' && computerChoice === 'bao') ||
            (userChoice === 'bua' && computerChoice === 'keo') ||
            (userChoice === 'bao' && computerChoice === 'bua')
        ) {
            result = "Bạn Thắng! 🎉";
            userScore++;
        } else {
            result = "Máy Thắng! 😢";
            computerScore++;
        }

        document.getElementById('winner-text').innerText = result;
        document.getElementById('user-score').innerText = userScore;
        document.getElementById('computer-score').innerText = computerScore;

    }, 500); // Trễ 0.5 giây (500ms)
}
// script.js

let userScore = 0;
let computerScore = 0;

// Hàm để ẩn tất cả hình ảnh (giữ nguyên từ bước trước)
function hideAllImages() {
    document.getElementById('player-image-container').classList.remove('visible');
    document.getElementById('computer-image-container').classList.remove('visible');
    const allImages = document.querySelectorAll('.hand-image');
    allImages.forEach(img => img.classList.remove('active'));
}

function playGame(userChoice) {
    // 1. ẨN NGAY LẬP TỨC GIAO DIỆN CHỌN VÀ KẾT QUẢ CŨ
    const choicesDiv = document.querySelector('.choices');
    const resultDisplay = document.querySelector('.result-display');
    
    choicesDiv.classList.add('hidden'); // Ẩn các nút bấm
    resultDisplay.classList.remove('visible'); // Ẩn vùng kết quả cũ
    hideAllImages(); // Ẩn hình ảnh cũ
    
    document.getElementById('winner-text').innerText = "Đang chờ máy tính...";

    const choices = ['keo', 'bua', 'bao'];
    const emojiMap = { 'keo': '✌️ Kéo', 'bua': '✊ Búa', 'bao': '✋ Bao' };
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // 2. TẠO ĐỘ TRỄ ĐỂ TẠO CẢM GIÁC HỒI HỘP (1 giây)
    setTimeout(() => {
        // 3. HIỂN THỊ HÌNH ẢNH KÉO/BÚA/BAO CỦA CẢ HAI
        // Hiển thị của người chơi
        const playerImage = document.getElementById(`player-${userChoice}`);
        if (playerImage) {
            playerImage.classList.add('active');
            document.getElementById('player-image-container').classList.add('visible');
        }

        // Hiển thị của máy tính
        const computerImage = document.getElementById(`computer-${computerChoice}`);
        if (computerImage) {
            computerImage.classList.add('active');
            document.getElementById('computer-image-container').classList.add('visible');
        }

        // 4. HIỂN THỊ KẾT QUẢ VĂN BẢN VÀ CẬP NHẬT ĐIỂM
        document.getElementById('user-choice').innerText = `Bạn đã chọn: ${emojiMap[userChoice]}`;
        document.getElementById('computer-choice').innerText = `Máy đã chọn: ${emojiMap[computerChoice]}`;

        let result = "";
        if (userChoice === computerChoice) {
            result = "Hòa rồi!";
        } else if (
            (userChoice === 'keo' && computerChoice === 'bao') ||
            (userChoice === 'bua' && computerChoice === 'keo') ||
            (userChoice === 'bao' && computerChoice === 'bua')
        ) {
            result = "Bạn Thắng! 🎉";
            userScore++;
        } else {
            result = "Máy Thắng! 😢";
            computerScore++;
        }

        document.getElementById('winner-text').innerText = result;
        document.getElementById('user-score').innerText = userScore;
        document.getElementById('computer-score').innerText = computerScore;

        // 5. HIỂN THỊ VÙNG KẾT QUẢ MỚI
        resultDisplay.classList.add('visible');

        // (TÙY CHỌN): HIỂN THỊ LẠI CÁC NÚT CHỌN SAU KHI XEM KẾT QUẢ (ví dụ sau 3 giây)
        setTimeout(() => {
            choicesDiv.classList.remove('hidden');
        }, 2000); // Hiển thị lại nút sau 2 giây hiện kết quả

    }, 1000); // Trễ 1 giây (1000ms) trước khi hiện kết quả
}
