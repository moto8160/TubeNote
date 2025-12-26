'use client';
import { sendEmail } from '@/utils/sendEmail';
import { useState } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="max-w-2xl mx-auto px-6">
      <h2 className="sm:text-3xl font-medium text-gray-800 text-center mb-8">
        お問い合わせ
      </h2>
      <p className="text-center text-gray-600 mb-8">
        ご意見やその他ご連絡はこちらからお願いします。
      </p>
      <form
        // Server Actions
        action={async (formData: FormData) => {
          try {
            await sendEmail(formData);
            setEmail('');
            setMessage('');
            alert('お問い合わせを受け付けました。');
          } catch (error) {
            console.log(error);
            alert('エラーが発生しました。');
          }
        }}
        className="space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-300 focus:border-sky-400"
            placeholder="example@gmail.com"
            required
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">お問い合わせ内容</label>
          <textarea
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-300 focus:border-sky-400"
            placeholder="ご用件をお書きください"
            required
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>

        <button className="mx-auto flex px-4 py-2 bg-sky-400 text-white rounded-lg font-medium hover:bg-sky-500 transition">
          送信する
        </button>
      </form>
    </div>
  );
}
