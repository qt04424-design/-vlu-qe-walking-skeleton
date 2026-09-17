const { validateLogin } = require('./login');

test('Đăng nhập thành công với tài khoản và mật khẩu chính xác', () => {
    expect(validateLogin('admin', '123')).toBe(true);
});

test('Đăng nhập thất bại khi sai mật khẩu', () => {
    expect(validateLogin('admin', 'wrong_pass')).toBe(false);
});

test('Đăng nhập thất bại khi sai tài khoản', () => {
    expect(validateLogin('user_la', '123')).toBe(false);
});
