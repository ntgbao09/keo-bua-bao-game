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