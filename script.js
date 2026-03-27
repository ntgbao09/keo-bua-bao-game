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
