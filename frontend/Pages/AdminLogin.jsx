import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { api } from '../services/api'
import toast from 'react-hot-toast'

export default function AdminLogin() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const set = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await api.post('/auth/login', formData)
      localStorage.setItem('token', response.access_token)
      toast.success('Login successful!')
      navigate('/admin/dashboard')
    } catch {
      toast.error('Invalid credentials')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: '#060810' }}>
      {/* BG orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="orb" style={{ width: 500, height: 500, top: '-150px', left: '-100px', background: 'rgba(201,169,110,0.08)' }} />
        <div className="orb" style={{ width: 360, height: 360, bottom: '-100px', right: '-80px', background: 'rgba(80,100,200,0.06)', animationDelay: '-6s' }} />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-3 mb-10">
          <div className="w-11 h-11 flex items-center justify-center rounded-[10px]" style={{ background: 'linear-gradient(135deg,#c9a96e,#b89450)' }}>
            <span className="font-heading font-black text-[20px]" style={{ color: '#060810' }}>E</span>
          </div>
          <div>
            <div className="font-heading font-bold text-[18px] leading-tight" style={{ color: '#f1f1f1' }}>E Liz LLC</div>
            <div className="text-[9px] font-semibold tracking-[0.22em] uppercase" style={{ color: '#c9a96e' }}>Admin Portal</div>
          </div>
        </Link>

        {/* Card */}
        <div className="glass rounded-2xl p-8 lg:p-10">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(201,169,110,0.10)', border: '1px solid rgba(201,169,110,0.20)' }}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#c9a96e" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="font-heading font-bold text-[22px]" style={{ color: '#f2f4f8' }}>Admin Login</h1>
            <p className="text-[13.5px] mt-1" style={{ color: '#6b7280' }}>Sign in to manage your dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-widest mb-2" style={{ color: '#6b7280' }}>Email Address</label>
              <input type="email" placeholder="admin@elizllc.com" value={formData.email} onChange={set('email')} className="input-field" required />
            </div>

            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-widest mb-2" style={{ color: '#6b7280' }}>Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={set('password')}
                  className="input-field pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(p => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                  style={{ color: '#4b5563' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#c9a96e'}
                  onMouseLeave={e => e.currentTarget.style.color = '#4b5563'}
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  )}
                </button>
              </div>
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full" style={{ paddingTop: 15, paddingBottom: 15, marginTop: 8, fontSize: 15 }}>
              {loading ? 'Logging in…' : 'Sign In'}
            </button>
          </form>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="text-[13px] transition-colors" style={{ color: '#374151' }}
            onMouseEnter={e => e.target.style.color = '#c9a96e'}
            onMouseLeave={e => e.target.style.color = '#374151'}
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
