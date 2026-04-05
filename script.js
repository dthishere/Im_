document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.apology-btn');
    const letterContent = document.getElementById('letterContent');
    const card = document.querySelector('.card');

    const apologies = {
        1: "<p>Gửi Na yêu quý,</p><p>Hiếu xin lỗi na về những lời nói vô tâm của hiếu. Hiếu biết rằng những lời đó đã làm tổn thương trái tim na, và hiếu hối hận sâu sắc.</p>",
        2: "<p>Hiếu xin lỗi vì đã không hiểu được cảm xúc của na. Hiếu đã quá vô tâm và ích kỷ, khiến naphải chịu đựng những nỗi buồn không đáng có.</p>",
        3: "<p>Hiếu xin lỗi vì không lắng nghe na đủ nhiều. Hiếu hứa sẽ thay đổi, sẽ luôn ở bên navà quan tâm đến mọi điều na nói.</p>",
        4: "<p>Hiếu yêu na vô cùng. Hãy cho hiếu cơ hội để chứng minh tình yêu này. Hiếu sẽ làm mọi thứ để bù đắp cho những sai lầm của mình.</p><p>Với tất cả tình yêu,</p><p>Hiếu</p>"
    };

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const part = this.getAttribute('data-part');
            letterContent.innerHTML = apologies[part];
            letterContent.classList.add('show');

            // Thêm hiệu ứng phát sáng cho nút
            this.style.boxShadow = '0 0 30px rgba(255, 105, 180, 1)';
            this.style.transform = 'scale(1.1)';

            // Reset sau 1 giây
            setTimeout(() => {
                this.style.boxShadow = '';
                this.style.transform = '';
            }, 1000);
        });
    });

    // Thêm animation fade-in cho card
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px) scale(0.9)';
    setTimeout(() => {
        card.style.transition = 'opacity 2s ease-in-out, transform 2s ease-in-out';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
    }, 100);

    // Tạo thêm trái tim ngẫu nhiên
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        document.querySelector('.hearts').appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 2000);
});