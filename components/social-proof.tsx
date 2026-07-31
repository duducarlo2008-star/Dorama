'use client'

import { Check, Mic, Play } from 'lucide-react'
import { Reveal } from './reveal'

type Msg =
  | { from: 'them'; type: 'text'; text: string; time: string }
  | { from: 'me'; type: 'text'; text: string; time: string }
  | { from: 'me'; type: 'audio'; time: string }
  | { from: 'them'; type: 'typing' }

type Chat = {
  name: string
  avatar: string
  messages: Msg[]
}

const chats: Chat[] = [
  {
    name: 'Camila 💜',
    avatar: '/images/avatar-1.png',
    messages: [
      { from: 'them', type: 'text', text: 'amiga, vale a pena msm esse acervo de R$10???', time: '20:41' },
      { from: 'me', type: 'text', text: 'MENINA. eu paguei achando q era furada 😂', time: '20:42' },
      { from: 'me', type: 'text', text: 'já tô no 3º dorama e NÃO paguei mais nada', time: '20:42' },
      { from: 'them', type: 'text', text: 'para tudo eu vou comprar agora 🏃‍♀️', time: '20:43' },
    ],
  },
  {
    name: 'Grupo Doramaníacas',
    avatar: '/images/avatar-2.png',
    messages: [
      { from: 'them', type: 'text', text: 'gente eu gastei uns R$180 mês passado só destravando episódio 🥲', time: '18:10' },
      { from: 'me', type: 'audio', time: '18:12' },
      { from: 'them', type: 'text', text: 'acabei de assinar o vitalício!! obrigada demais ❤️', time: '18:20' },
      { from: 'them', type: 'typing' },
    ],
  },
  {
    name: 'Rê da firma',
    avatar: '/images/avatar-3.png',
    messages: [
      { from: 'them', type: 'text', text: 'tudo dublado mesmo? odeio ficar lendo legenda 😅', time: '09:03' },
      { from: 'me', type: 'text', text: 'tudo dublado sim! e sem propaganda no meio', time: '09:04' },
      { from: 'them', type: 'text', text: 'melhor R$10 q gastei esse ano kkkk', time: '09:06' },
    ],
  },
]

export function SocialProof() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="blur" className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Quem entrou,{' '}
            <span className="text-success">não parou mais de maratonar.</span>
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
            Conversas reais de quem cansou de pagar por episódio.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {chats.map((chat, i) => (
            <Reveal key={chat.name} variant="up" delay={i * 0.08}>
              <ChatCard chat={chat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ChatCard({ chat }: { chat: Chat }) {
  return (
    <div className="overflow-hidden rounded-[26px] border border-border bg-[#0b141a] shadow-2xl">
      {/* header */}
      <div className="flex items-center gap-3 bg-[#1f2c34] px-4 py-3">
        <img
          src={chat.avatar || '/placeholder.svg'}
          alt={`Foto de perfil de ${chat.name}`}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-white">{chat.name}</p>
          <p className="text-[11px] text-emerald-300">online</p>
        </div>
      </div>

      {/* messages */}
      <div
        className="space-y-2 px-3 py-4"
        style={{
          backgroundColor: '#0b141a',
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      >
        {chat.messages.map((m, i) => (
          <Bubble key={i} msg={m} />
        ))}
      </div>
    </div>
  )
}

function Bubble({ msg }: { msg: Msg }) {
  if (msg.type === 'typing') {
    return (
      <div className="flex justify-start">
        <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-[#1f2c34] px-4 py-3">
          <Dot /> <Dot delay={0.15} /> <Dot delay={0.3} />
        </div>
      </div>
    )
  }

  const isMe = msg.from === 'me'
  return (
    <div className={isMe ? 'flex justify-end' : 'flex justify-start'}>
      <div
        className={`max-w-[82%] rounded-2xl px-3 py-2 text-sm text-white shadow ${
          isMe
            ? 'rounded-tr-sm bg-[#005c4b]'
            : 'rounded-tl-sm bg-[#1f2c34]'
        }`}
      >
        {msg.type === 'audio' ? (
          <div className="flex items-center gap-2 py-1">
            <Mic className="h-4 w-4 text-emerald-300" />
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/90">
              <Play className="ml-0.5 h-3.5 w-3.5 fill-current text-white" />
            </span>
            <span className="flex items-end gap-0.5" aria-hidden="true">
              {[6, 12, 8, 16, 10, 14, 7, 12, 6].map((h, i) => (
                <span
                  key={i}
                  className="w-0.5 rounded-full bg-white/50"
                  style={{ height: h }}
                />
              ))}
            </span>
            <span className="ml-1 text-[11px] text-white/60">0:14</span>
          </div>
        ) : (
          <p className="leading-snug">{msg.text}</p>
        )}
        <div className="mt-0.5 flex items-center justify-end gap-1">
          {msg.type !== 'audio' && (
            <span className="text-[10px] text-white/50">{'time' in msg ? msg.time : ''}</span>
          )}
          {msg.type === 'audio' && (
            <span className="text-[10px] text-white/50">{msg.time}</span>
          )}
          {isMe && <Check className="h-3 w-3 text-sky-300" />}
        </div>
      </div>
    </div>
  )
}

function Dot({ delay = 0 }: { delay?: number }) {
  return (
    <span
      className="h-2 w-2 animate-bounce rounded-full bg-white/50"
      style={{ animationDelay: `${delay}s`, animationDuration: '1s' }}
    />
  )
}
