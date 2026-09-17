
const login = require('./login');

describe('Kiểm thử hàm đăng nhập (Login Function)', () => {

    test('Đăng nhập thành công với tài khoản admin và mật khẩu 123', () => {
        expect(login('admin', '123')).toBe(true);
    });

    test('Đăng nhập thất bại khi sai tên đăng nhập', () => {
        expect(login('wronguser', '123')).toBe(false);
    });

    test('Đăng nhập thất bại khi sai mật khẩu', () => {
        expect(login('admin', 'wrongpass')).toBe(false);
    });

    test('Đăng nhập thất bại khi để trống thông tin', () => {
        expect(login('', '')).toBe(false);
    });

});
