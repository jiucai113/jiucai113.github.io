document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // 这里可以添加实际的登录验证逻辑
    // 暂时简单地跳转到首页
    window.location.href = 'index.html';
});