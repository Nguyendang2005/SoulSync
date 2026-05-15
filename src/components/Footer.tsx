import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container py-16 px-6 md:px-10 border-t border-surface-dim">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-brand-blue font-sans">SoulSync</h2>
          <p className="text-sm text-on-surface-variant mt-2 max-w-xs">
            © 2024 SoulSync. Không gian an toàn dành cho sinh viên đại học.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {['Chính sách bảo mật', 'Điều khoản dịch vụ', 'Liên hệ khẩn cấp', 'Tài nguyên sinh viên'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-on-surface-variant hover:text-brand-blue underline underline-offset-4 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
