// src/components/contact/ContactForm.tsx
'use client'
import { useState } from 'react'

interface ContactFormProps {
  messages: any
}

export default function ContactForm({ messages }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      // TODO: 实现表单提交逻辑
      await new Promise(resolve => setTimeout(resolve, 1000)) // 模拟API调用
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        topic: '',
        message: ''
      })
    } catch (error) {
      setStatus('error')
    }
  }

  return (
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 姓名 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {messages.form.name.label}
          </label>
          <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder={messages.form.name.placeholder}
          />
        </div>

        {/* 邮箱 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {messages.form.email.label}
          </label>
          <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder={messages.form.email.placeholder}
          />
        </div>

        {/* 主题 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {messages.form.topic.label}
          </label>
          <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">{messages.form.topic.placeholder}</option>
            {Object.entries(messages.form.topic.options).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
            ))}
          </select>
        </div>

        {/* 内容 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {messages.form.message.label}
          </label>
          <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder={messages.form.message.placeholder}
          />
        </div>

        {/* 提交按钮 */}
        <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400"
        >
          {status === 'loading' ? '提交中...' : messages.form.submit}
        </button>

        {/* 状态消息 */}
        {status === 'success' && (
            <div className="rounded-md bg-green-50 p-4 text-green-800">
              {messages.form.success}
            </div>
        )}
        {status === 'error' && (
            <div className="rounded-md bg-red-50 p-4 text-red-800">
              {messages.form.error}
            </div>
        )}
      </form>
  )
}
